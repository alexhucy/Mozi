<template>
	<div>
	<scroller v-ref:scroller
	          lock-x
						use-pulldown
						@pulldown:loading="refresh">

		<div style="padding-bottom: 10px">
			<div class="mz-center-cover" v-if="items">

				<div class="mz-center-name">
					{{user.user_name}}
				</div>

				<div class="mz-flex mz-container">
					<div class="mz-flex">
							<div class="mz-center-info mz-pop" v-link="{name:'info'}">
									完善资料
							</div>
					</div>
					<div class="mz-center-avatar mz-item">
						<div class="mz-center-crown"></div>
						<img :src="user.user_avatar" class="mz-center-img-avatar"><!--
					--></div>
					<div class="mz-flex">
						<div class="mz-center-billboard mz-pop" v-link="{name:'billboard'}">
								打卡<br>排行榜
						</div>
					</div>
				</div>

				<div class="mz-signature mz-center-item">
					个人战绩: 坚持打卡<span class="mz-bold">{{user.duration}}</span>天,累计打卡<span class="mz-bold">{{user.signin_count}}</span>次
				</div>

				<div class="mz-center-point mz-center-item">
					<span class="mz-billboard-level" style="margin-right: 8px">v{{user.score_level}}</span>{{user.score}}积分<span style="display: block"></span>
				</div>


				<div class="mz-center-item">
					<a href="javascript:;" class="mz-href" @click="awardIntroduce"> 积分奖励说明</a>
				</div>

			</div>


			<loader v-ref:loader
			         @on-refresh="query">
			</loader>

			<card v-for="item in items"
						:zan="item.agree_count"
						:comments="item.comment_count"
						:title="item.activity_title"
						:content="item.text"
						:cover="item.image_url"
						:activity-id="item.activity_id"
						:sign-id="item.signin_id"
						:checked.sync="item.my_agree"
						@on-loaded="pass(item)"
			      :date="item.signin_time"
						@on-link="timeline(item.activity_id)">
			</card>
		</div>
	</scroller>

	<dialog :init="rule.score_init"
					:join="rule.reward_join"
					:sign="rule.reward_signin"
					:comment="rule.reward_comment"
					:completed="rule.reward_complete"
					:limit="rule.reward_comment_limit"
					:share="rule.reward_share"
					:share-limit="reward_share_limit">
	</dialog>
	</div>
</template>

<style>
.mz-container{
	padding: 0 10px;
}
.mz-flex{
	display: flex;
	flex: 1;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}
.mz-center-cover{
	padding: 10px 0;
	background-image: url("/sign/images/cover.png");
	background-repeat: no-repeat;
	height: 200px;
	text-align: center;
	background-size:100% 100%;

}
.mz-center-info{
	background-image: url("/sign/images/info.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 55px;
	width: 58px;
	padding: 12px 12px 12px 8px;
}
.mz-center-billboard{
	background-image: url("/sign/images/billboard.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 61px;
	width: 61px;
	padding: 12px 0 0 0;
}
.mz-center-img-avatar{
	height: 75px;
	width: 75px;
	border-radius: 50%;
}
.mz-pop{
	box-sizing: border-box;
	line-height: 16px;
	color: #fff;
	font-size: 1.4rem;
	text-align: center;
}
.mz-center-name{
	color: #fff;
	font-size: 1.6rem;
	margin-bottom: 10px;
}
.mz-center-point{
	background: #fff;
	border-radius: 5px;
	color:#333;
	width:106px;
	height: 27px;
	line-height: 27px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding:0 8px
}
.mz-href{
	color:#fff;
	text-decoration: underline;
}
.mz-signature{
	font-size:1.4rem;
	color:#333;
}
.mz-signature .mz-bold{
	font-weight: bold;
	font-size: 2rem;
}
.mz-center-item{
	margin-bottom: 4px;
}
.mz-center-crown{
	background-image: url("/sign/images/title.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 50px;
	position: absolute;
	top:-8px;
	left: 50%;
	margin-left: -25px;
}

</style>

<script>
import card from '../../components/card/cardWithoutAvatar.vue'
import dialog from './awardDialog.vue'
import {activityOngoingListQuery, setSignInfo, getcompletedActivityListQuery} from '../../vuex/actions/activityAction'
import {getOngoingActivityList, getCompletedActivityList} from '../../vuex/getters/activityGetter'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'
import {childInfoQuery, userUpInfoQuery} from '../../vuex/actions/userAction'
import {getUserUpInfo, } from '../../vuex/getters/userGetter'
import loader from '../../components/load/loading.vue'
import promise from '../../../node_modules/vue-resource/src/promise'
import activityService from '../../service/activityService'

export default {
	data(){
		return {
			level: String,
			rule: {}
		}
	},
	components: {
		card,
		dialog,
		scroller,
		loader
	},
	methods: {
		awardIntroduce: function () {
			this.$broadcast('showDialog')
		},
		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		},

		pass: function (info) {
			this.setSignInfo(info)
		},
		refresh: function (uuid) {
			var _self = this
			Promise.all([this.getcompletedActivityListQuery(),this.userUpInfoQuery()]).then(function (){
				_self.$broadcast('pulldown:reset', uuid)
			}).catch(function () {
				_self.$broadcast('pulldown:reset', uuid)
			})
		},
		getRule: function () {
			var _self = this
			activityService.getActivityRule().then(function (data) {
				_self.rule = data.data
			})
		},
		timeline: function (id) {
			console.log(id)
			this.$router.go({name:'timeline',params:{id:id}})
		},
		test: function () {
			console.log('1111')
		},
		query: function () {
			var _self = this
			this.$refs.loader.OnLoading()
			this.getcompletedActivityListQuery().then(function () {
				if(_self.items.length === 0){
					_self.$refs.loader.OnEmpty()
				}
				else{
					_self.$refs.loader.OnHide()
				}
			}).catch(function () {
				_self.$refs.loader.OnError()
			})
		}
	},
	vuex: {
		actions: {
			activityOngoingListQuery,
			childInfoQuery,
			userUpInfoQuery,
			setSignInfo,
			getcompletedActivityListQuery
		},
		getters: {
			items: getCompletedActivityList,
			user: getUserUpInfo
		}
	},
	ready: function(){
		this.query()
		this.getRule()
		this.userUpInfoQuery()
		switch (this.user.score_level){
			case 0:
				this.level = '小白'
				break
			case 1:
				this.level = '幼儿园'
				break
			case 2:
				this.level = '小学'
				break
			case 3:
				this.level = '初中'
				break
			case 4:
				this.level = '高中'
				break
			case 5:
				this.level = '大学'
				break
			default:
				this.level = '小白'
				break
		}
	},
	watch: {
		items: function () {
			this.fresh()
		}
	}
}
</script>