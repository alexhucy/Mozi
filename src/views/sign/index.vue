<template>
	<loading v-ref:loading @on-refresh="query"></loading>

	<div v-if="activityInfo.info && items">
		<scroller v-ref:scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto">
			<div class="mz-sign">
				<div class="mz-item-cover">
					<avatar-item :avatar-url="activityInfo.info.sponsor_avatar" v-if="activityInfo.info">
						<h4>{{activityInfo.info.sponsor_name}}</h4>
						<p>发起了活动: {{activityInfo.info.title}}</p>
						<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>
						<p>报名截至时间:{{activityInfo.info.end_time}}</p>
					</avatar-item>
				</div>

				<wrap title="活动介绍:" type="success">
					<p v-if="activityInfo.info">{{activityInfo.info.desc}}</p>
				</wrap>

				<wrap title="相关课程:" type="warn" v-if="activityInfo.info">
					<half-item
									v-for="course in activityInfo.info.resource_list"
									:url="course.image_url"
									:title="course.link_text"
									:href="course.link_url">
					</half-item>
				</wrap>

				<div class="mz-content-container" style="margin-top: 10px">
					<icon-item type="people">已报名人数:<span v-if="activityInfo.info">{{activityInfo.info.signup_number}}</span></icon-item>
					<!--<icon-item type="money">每人保证金</icon-item>-->
					<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
				</div>

				<card v-for="item in items"
				      :head-img-url="item.user_avatar"
							:cover="item.image_url"
							:zan="item.agree_count"
							:comments="item.comment_count"
							:content="item.text"
							:activity-id="item.activity_id"
							:sign-id="item.signin_id"
							:checked="item.my_agree === 1 ? true: false "
							@on-loaded="fresh"
							:date="item.signin_time"
							:name="item.user_name">
				</card>

			</div>
		</scroller>

		<f-button type="success"
							:action="activityInfo.signup===1?'已报名':'我要报名'"
							:disable="activityInfo.signup===1?true:false">

		</f-button>

		<dialog v-ref:dialog></dialog>

		<confirm :show.sync="show" title="活动报名" @on-confirm="onConfirm" cancel-text="取消" confirm-text="确定">
			<p style="text-align:center;" v-if="activityInfo.info">确定参加{{activityInfo.info.title}}</p>
		</confirm>

		<alert :show.sync="showError" title="活动报名" button-text="确定">{{errorMessage}}</alert>

		<upload :show-pop.sync="showUpload" :id="$route.params.id"></upload>

		<load :show="showLoading" text="提交中"></load>
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
import dialog from '../../components/Dialog/confirm.vue'
import confirm from '../../../node_modules/vux/dist/components/confirm/index'
import alert from '../../../node_modules/vux/dist/components/alert/index'
import activityService from '../../service/activityService'
import halfItem from '../../components/item/HalfItem.vue'
import promise from '../../../node_modules/vue-resource/src/promise'
import loading from '../../components/load/loading.vue'
import upload from './upload.vue'
import load from '../../../node_modules/vux/dist/components/loading/index'


export default {
	data (){
		return {
			id: 0,
			show: false,
			showError: false,
			errorMessage: '',
			activityInfo: {},
			items: [],
			showUpload: false,
			showLoading: false
		}
	},
	components: {
		avatarItem,
		wrap,
		iconItem,
		card,
		scroller,
		fButton,
		confirm,
		dialog,
		alert,
		halfItem,
		loading,
		upload,
		load
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
		}
	},
	ready: function () {
		this.query()
	},
	events: {
		DO: function () {
			this.show = true
		},
		confirm: function () {
			this.showUpload = true
			this.$refs.dialog.hidden()
		}
	},
	methods: {
		onConfirm: function () {
			var _self = this
			this.showLoading = true
			activityService.book(this.id).then(function (data) {
				 if(data.data.result === 0){
					 _self.activityInfo.signup = 1
					 _self.$refs.dialog.hidden()
					 _self.showLoading =false
					 //_self.$broadcast('showDialog')
				 }
				else{
					 _self.errorMessage = '报名失败!';
					 _self.showError = true
					 _self.showLoading = false
				 }
			}).catch(function (err) {
				_self.errorMessage = '内部错误, 请重试!';
				_self.showError = true
				_self.showLoading =false
			})
		},

		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		},

		query: function () {
			var _self = this
			this.$refs.loading.OnLoading()
			promise.all([activityService.getActivityInfo(this.id), activityService.getActivitySignList(this.id)]).then(function (data) {
				_self.activityInfo = data[0].data
				_self.items = data[1].data.list
				_self.$refs.loading.OnHide()
				_self.fresh()
			}).catch(function (err) {
				_self.$refs.loading.OnError()
			})
		}
	}
}
</script>