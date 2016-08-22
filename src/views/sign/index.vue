<template>
	<scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto">
		<div class="mz-sign">
			<div class="mz-item-cover">
				<avatar-item :avatar-url="activityInfo.info.sponsor_avatar" v-if="activityInfo.info">
					<h4>{{activityInfo.info.sponsor_name}}</h4>
					<p>发起了活动: {{activityInfo.info.title}}</p>
					<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>
					<p>报名截至时间:{{activityInfo.info.start_time}}</p>
					<!--<p>每人保证金: {{activityInfo.deposit}}元</p>-->
				</avatar-item>
			</div>

			<wrap title="活动介绍:" type="success">
				<p v-if="activityInfo.info">{{activityInfo.info.desc}}</p>
			</wrap>

			<wrap title="相关课程:" type="warn" v-if="activityInfo.info">

			</wrap>

			<div class="mz-content-container" style="margin-top: 10px">
				<icon-item type="people">已报名人数:{{activityInfo.signup}}</icon-item>
				<!--<icon-item type="money">每人保证金</icon-item>-->
				<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
			</div>

			<card v-for="item in signList"
			      :head-img-url="item.user_avatar"
						:cover="item.image_url"
						:zan="item.agree_count"
						:comments="item.comment_count"
						:content="item.text"
						:activity-id="12"
						:sign-id="12">
			</card>

		</div>
	</scroller>

	<f-button type="success"
						action="我要报名">

	</f-button>

	<dialog></dialog>

	<confirm :show.sync="show" title="活动报名" @on-confirm="onConfirm">
		<p style="text-align:center;" v-if="activityInfo.info">确定参加{{activityInfo.info.title}}</p>
	</confirm>

	<alert :show.sync="showError" title="报名失败">{{errorMessage}}</alert>

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
import {activityQuery, activitySignListQuery} from '../../vuex/actions/activityAction'
import {getActivity, getSignList} from '../../vuex/getters/activityGetter'
import confirm from '../../../node_modules/vux/dist/components/confirm/index'
import alert from '../../../node_modules/vux/dist/components/alert/index'
import activity from '../../service/activityService'

export default {
	data (){
		return {
			id: Number,
			show: false,
			showError: false,
			errorMessage: ''
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
		alert
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
			this.activityQuery(id)
			this.activitySignListQuery(id)

		}
	},
	vuex: {
		actions: {
			activityQuery,
			activitySignListQuery
		},
		getters: {
			activityInfo: getActivity,
			signList: getSignList,
		}
	},
	events: {
		DO: function () {
			this.show = true
		},
		confirm: function () {
			this.$router.go({name:'upload'})
		}
	},
	methods: {
		onConfirm: function () {
			var _self = this
			activity.book(this.id).then(function (data) {
					_self.$broadcast('showDialog')
			}).catch(function (err) {
				_self.errorMessage = '内部错误, 请重试!';
				_self.showError = true
			})
		}
	}
}
</script>