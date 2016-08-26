<template>
	<loading v-ref:loading @on-refresh="query"></loading>

	<div v-if="activity.info && items">

		<scroller v-ref:scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto" >
			<div class="mz-sign">
				<tab :title="activity.info.title" @on-fresh="fresh">
					<div class="mz-item-cover">
						<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg" >
							<h4>{{activity.info.sponsor_name}}</h4>
							<p>发起了活动: {{activity.info.title}}</p>
							<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>
							<p>报名截至时间:{{activity.info.end_time}}</p>
							<!--<p>每人保证金: 100元</p>-->
						</avatar-item>
					</div>

					<wrap title="活动介绍:" type="success"  >
						<p>{{activity.info.desc}}</p>
					</wrap>

					<wrap title="相关课程:" type="warn">
						<half-item
										v-for="course in activity.info.resource_list"
										:url="course.image_url"
										:title="course.link_text"
										:href="course.link_url">
						</half-item>
					</wrap>
				</tab>

				<div class="mz-content-container" style="margin-top: 10px">
					<icon-item type="people">已报名人数:<span v-if="activity.info">{{activity.info.signup_number}}</span></icon-item>
					<icon-item type="people">今日已打卡人数:{{activity.signin_count}}</icon-item>
					<!--<icon-item type="money">每人保证金</icon-item>-->
					<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
				</div>

				<card   v-for="item in items"
								:head-img-url="item.user_avatar"
								:cover="item.image_url"
								:zan="item.agree_count"
								:comments="item.comment_count"
								:content="item.text"
								:activity-id="item.activity_id"
								:sign-id="item.signin_id"
								:checked="item.my_agree === 1?true:false"
							  @on-loaded="fresh">
				</card>

			</div>
		</scroller>

		<f-button type="glass"
							:action="activity.signin===1?'今日已打卡': '我要打卡'"
							:disable="activity.signin===1?true: false">
		</f-button>

		<upload :show-pop.sync="showUpload" :id="$route.params.id" @on-success="success"></upload>

	</div>
</template>

<style>
	.mz-item-cover{
		padding: 10px 13px 0 13px;
		background: #fff;
	}
</style>

<script>
import avatarItem from '../../components/item/avatarItem.vue'
import wrap from '../../components/container/contentWithTitle.vue'
import iconItem from '../../components/item/iconItem.vue'
import card from '../../components/card/cardWithAvatar.vue'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'
import fButton from '../../components/button/footerButton.vue'
import alert from '../../../node_modules/vux/dist/components/alert/index'
import activity from '../../service/activityService'
import tab from '../../components/item/tabItem.vue'
import halfItem from '../../components/item/HalfItem.vue'
import upload from './upload.vue'
import activityService from '../../service/activityService'
import promise from '../../../node_modules/vue-resource/src/promise'
import loading from '../../components/load/loading.vue'

export default {
	components: {
		avatarItem,
		wrap,
		iconItem,
		card,
		scroller,
		fButton,
		alert,
		tab,
		halfItem,
		upload,
		loading
	},
	data: function () {
		return {
			showMessage: false,
			message: '',
			showUpload: false,
			items : [],
			activity: {}
		}
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
		}
	},
	methods: {
		query: function () {
			var _self = this
			this.$refs.loading.OnLoading()
			promise.all([activityService.getActivityInfo(this.id), activityService.getActivitySignList(this.id)]).then(function (data) {
				_self.activity = data[0].data
				_self.items = data[1].data.list
				_self.$refs.loading.OnHide()
				_self.fresh()
			}).catch(function (err) {
				_self.$refs.loading.OnError()
			})
		},

		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		},

		success: function () {
			this.activity.signin = 1
			this.activity.signin_count ++
		}
	},
	ready:function () {
		this.query()
	},
	events: {
		DO: function () {
			this.showUpload = true
		}
	}
}
</script>