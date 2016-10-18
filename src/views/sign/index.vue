<template>
	<div>
	<loading v-ref:loading @on-refresh="query"></loading>

	<div v-if="activityInfo.info && items">
		<scroller v-ref:scroller lock-x
		          use-pullup
		          @pullup:loading="loadMore"
		          style="position: absolute;top:0;left: 0;right: 0;bottom: 50px"
		          height="auto">

			<div class="mz-sign" style="padding-bottom: 10px">
				<div class="mz-item-cover">
					<avatar-item :avatar-url="activityInfo.info.sponsor_avatar">
						<h4>{{activityInfo.info.sponsor_name}}</h4>
						<p>发起了活动: {{activityInfo.info.title}}</p>
						<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>
						<p>报名截至时间:{{activityInfo.info.signup_end_time}}</p>
					</avatar-item>
				</div>

				<wrap title="活动介绍:" type="success">
					<p v-html="activityInfo.info.desc | newLine "></p>
				</wrap>

				<wrap title="相关课程:" type="warn">
					<half-item
									v-for="course in activityInfo.info.resource_list"
									:url="course.image_url"
									:title="course.link_text"
									:href="course.link_url">
					</half-item>
				</wrap>

				<div class="mz-content-container" style="margin-top: 10px">
					<icon-item type="people">已报名人数:<span>{{activityInfo.info.signup_number}}</span></icon-item>
					<!--<icon-item type="money">每人保证金</icon-item>-->
					<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
				</div>

				<card v-for="item in items"
				      :head-img-url="item.user_avatar"
							:cover="item.image_url"
							:zan="item.agree_count"
							:comments="item.comment_count"
							:content="item.text | newLine"
							:activity-id="item.activity_id"
							:sign-id="item.signin_id"
							:checked.sync="item.my_agree"
							@on-loaded="pass(item)"
							:date="item.signin_time"
							:name="item.user_name">
				</card>

			</div>
		</scroller>

		<f-button type="success"
							:action="status.action"
							:disable="status.disable"
							@on-confirm="confirm">

		</f-button>

		<dialog v-ref:dialog
						@on-confirm="upload"
						@on-share="share">
		</dialog>

		<layer v-ref:layer></layer>
	</div>
	</div>
</template>

<style>
	.mz-item-cover{
		padding: 10px 13px 0 13px;
		background: #fff;
	}
	p{
		font-size: 1.3rem;
	}
</style>

<script>
import avatarItem from '../../components/item/avatarItem.vue'
import wrap from '../../components/container/contentWithTitle.vue'
import iconItem from '../../components/item/iconItem.vue'
import card from '../../components/card/cardWithAvatar.vue'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'
import fButton from '../../components/button/footerButton.vue'
import dialog from '../../components/Dialog/confirm.vue'
import activityService from '../../service/activityService'
import halfItem from '../../components/item/HalfItem.vue'
import promise from '../../../node_modules/vue-resource/src/promise'
import upload from './upload.vue'
import loading from '../../components/load/loading.vue'
import {setSignInfo} from '../../vuex/actions/activityAction'
import layer from '../../components/layer/shareLayer.vue'
import {share, getAuthUrl} from '../../service/weixinService'
import {getUserUpInfo} from '../../vuex/getters/userGetter'
import config from '../../config'

export default {
	data (){
		return {
			activityInfo: {},
			items: [],
			showUpload: false,
			page: 1,
			size: 20
		}
	},
	vuex:{
		actions: {
			setSignInfo
		},
		getters: {
			user: getUserUpInfo
		}
	},
	components: {
		avatarItem,
		wrap,
		iconItem,
		card,
		scroller,
		fButton,
		dialog,
		halfItem,
		loading,
		upload,
		layer
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
		}
	},
	ready: function () {
		this.query()
	},
	methods: {
		onConfirm: function () {
			var _self = this
			this.$dispatch('loading')
			activityService.book(this.id).then(function (data) {
				 if(data.data.result === 0){
					 _self.activityInfo.signup = 1
					 _self.$refs.dialog.toggle()

					 _self.$dispatch('loading')
				 }
				else{
				  _self.$dispatch('error','报名失败')
					_self.$dispatch('loading')
				 }
			}).catch(function (err) {
				if(err.status === 400){
					_self.$dispatch('error',err.data.error_message)
				}
				else if(err.status === 0){
					_self.$dispatch('error','请求超时请重试')
				}
				else{
					_self.$dispatch('error','内容错误请重试')
				}
				_self.$dispatch('loading')
			})
		},

		confirm: function () {
			this.$dispatch('confirm','活动信息','确定参加活动?', this.onConfirm)
		},

		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		},

		query: function () {
			var _self = this
			this.$refs.loading.OnLoading()
			promise.all([activityService.getActivityInfo(this.id), activityService.getActivitySignList(this.id, this.page, this.size)]).then(function (data) {
				_self.activityInfo = data[0].data
				_self.items = data[1].data.list
				_self.$refs.loading.OnHide()
				if(data[1].data.page_end === 1){
					_self.$nextTick(function () {
						_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid)
					})
				}
				_self.page ++
				_self.fresh()
			}).catch(function (err) {
				_self.$refs.loading.OnError()
			})
		},

		loadMore: function (uuid) {
			var _self = this
			activityService.getActivitySignList(this.id, this.page, this.size).then(function (data) {
				if(data.data)_self.items = _self.items.concat(data.data.list)
				_self.$broadcast('pullup:reset', uuid)
				if(data.data.page_end === 1){
					_self.$broadcast('pullup:disable', uuid)
				}
				_self.page ++
			}).catch(function () {
				_self.$broadcast('pullup:reset', uuid)
			})
		},
		
		upload: function () {
			this.$router.go({name:'upload'})
		},
		pass: function (info) {
			this.setSignInfo(info)
		},
		share: function () {
			this.$refs.layer.onShow()
			share(this.user.user_name + '参加了活动:'+ this.activityInfo.info.title,
							this.activityInfo.info.desc,
							getAuthUrl(config.domain + '/#!'+ this.$route.path.split('?')[0]),
							this.activityInfo.info.sponsor_avatar)
		}
	},
	computed: {
		status: function () {
			if (this.activityInfo.info) {
				var endDate = new Date(this.activityInfo.info.signup_end_time + ' 23:59:59')
				if (new Date() > endDate) {
					return {
						action: '报名已截止',
						disable: true
					}
				}
				else {
					return {
						action: this.activityInfo.signup === 1 ? '已报名' : '我要报名',
						disable:this.activityInfo.signup === 1 ? true : false
					}
				}
			}
		}
	}
}
</script>