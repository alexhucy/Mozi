<template>
	<scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto">
		<div class="mz-sign">
			<div class="mz-item-cover">
				<avatar-item :avatar-url="item.sponsor_avatar">
					<h4></h4>
					<p>发起了活动: 《》</p>
					<p>活动时间: 07月28日 - 08月16日</p>
					<p>报名截至时间:08月16日</p>
					<p>每人保证金: 元</p>
				</avatar-item>
			</div>

			<wrap title="活动介绍:" type="success">

			</wrap>

			<wrap title="相关课程:" type="warn">

			</wrap>

			<div class="mz-content-container" style="margin-top: 10px">
				<icon-item type="people">已报名人数:3</icon-item>
				<icon-item type="money">每人保证金</icon-item>
				<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>
			</div>

			<card
			      head-img-url="http://static.youku.com/user/img/avatar/310/39.jpg"
						cover="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png"
						:zan="2"
						:comments="12">
			</card>

		</div>
	</scroller>

	<f-button type="success"
						action="我要报名"
						>

	</f-button>

	<confirm></confirm>
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
import confirm from '../../components/Dialog/confirm.vue'
import {activityQuery,signListQuery} from '../../vuex/actions/activityAction'
import {getActivityInfo} from '../../vuex/getters/activityGetter'

export default {
	data (){
		return {
			id: Number,
			start_time: '',
			end_time: ''
		}
	},
	components: {
		avatarItem,
		wrap,
		iconItem,
		card,
		scroller,
		fButton,
		confirm
	},
	vuex: {
		getters: {
			item: getActivityInfo
		},
		actions: {
			activityQuery,
			signListQuery
		}
	},
	events: {
		DO: function () {
			this.$broadcast('showDialog');
		}
	},
	route: {
		data ({to: {params: {id}}}){
			this.id = id
		}
	},
	ready: function () {
		this.activityQuery(this.id)
		this.signListQuery(this.id)
	},
	computed: {
		item: function () {
		}
	}
}
</script>