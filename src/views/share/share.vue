<template>
	<loader v-ref:loader
	        @on-refresh="query">
	</loader>

	<div v-if="load">
		<layer></layer>
			<div style="padding-bottom: 10px">


				<div class="mz-center-cover">

					<div class="mz-center-name">
						{{user.user_name}}
					</div>

					<div class="mz-flex mz-container">
						<div class="mz-center-avatar mz-item">
							<div class="mz-center-crown"></div>
							<img :src="user.user_avatar" class="mz-center-img-avatar"><!--
					--></div>
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

				<card :zan="item.agree_count"
				      :comments="item.comment_count"
				      :title="item.activity_title"
				      :content="item.text"
				      :cover="item.image_url"
				      :activity-id="item.activity_id"
				      :sign-id="item.signin_id"
				      :checked.sync="item.my_agree"
				      @on-loaded="pass(item)"
				      :date="item.signin_time">
				</card>
			</div>

		<dialog :init="rule.score_init"
		        :join="rule.reward_join"
		        :sign="rule.reward_signin"
		        :comment="rule.reward_comment"
		        :completed="rule.reward_complete"
		        :limit="rule.reward_comment_limit">
		</dialog>
		<f-button type="success"
		          :action="status.action"
		          @on-confirm="confirm">

		</f-button>
	</div>


</template>

<style>
</style>

<script>
import card from '../../components/card/cardWithoutAvatar.vue'
import dialog from '../me/awardDialog.vue'
import {setSignInfo} from '../../vuex/actions/activityAction'
import loader from '../../components/load/loading.vue'
import promise from '../../../node_modules/vue-resource/src/promise'
import activityService from '../../service/activityService'
import layer from '../../components/layer/shareLayer.vue'
import fButton from '../../components/button/footerButton.vue'

export default {
	data(){
		return {
			level: String,
			rule: {},
			item: {},
			user: {},
			activityId: '',
			signId: '',
			isBook: '',
			load: false
		}
	},
	route: {
		data ({to: { params: {activityId, signId}}}){
			this.activityId = activityId
			this.signId = signId
		}
	},
	vuex:{
		actions:{
			setSignInfo
		}
	},
	components: {
		card,
		dialog,
		loader,
		layer,
		fButton
	},
	methods: {
		awardIntroduce: function () {
			this.$broadcast('showDialog')
		},
		pass: function (info) {
			this.setSignInfo(info)
		},
		getRule: function () {
			var _self = this
			activityService.getActivityRule().then(function (data) {
				_self.rule = data.data
			})
		},
		getData: function () {
			var _self = this

			this.$refs.loader.OnLoading()
			activityService.getSign(this.activityId, this.signId, function (err, data) {
				if (err === null){
					_self.$refs.loader.OnHide()
					_self.item = data.signin
					_self.item.user_avatar = data.user.user_avatar;
					_self.isBook = data.is_signup
					_self.user = data.user
					_self.load = true
				}
				else {
					_self.$refs.loader.OnError()
				}
			})
		},
		confirm: function () {
			this.$router.go({name: this.status.link, params:{activityId: this.activityId, id:this.activityId, signId:this.signId}})
		},
		query: function () {
			this.getData()
		}
	},
	ready: function(){
		this.query()
	},
	computed:  {
		status: function () {
			if(this.item){
				return {
					action: this.isBook=== 1 ? '我要打卡' : '我要报名',
					link:  this.isBook === 1 ? 'sign' : 'book'
				}
			}
		}
	}
}
</script>