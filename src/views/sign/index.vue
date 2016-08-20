<template>
	<scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto">
		<div class="mz-sign">
			<div class="mz-item-cover">
				<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg">
					<h4>{{activityInfo.sponsor_name}}</h4>
					<p>发起了活动: 《100天阅读计划》</p>
					<p>活动时间: 07月28日 - 08月16日</p>
					<p>报名截至时间:08月16日</p>
					<p>每人保证金: 100元</p>
				</avatar-item>
			</div>

			<wrap title="活动介绍:" type="success">
				打卡规则:三天为一个周期学完一课,一个月十节课,三个月结束初级A班所有课程。
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
import {activityQuery} from '../../vuex/actions/activityAction'
import {getActivity} from '../../vuex/getters/activityGetter'

export default {
	data (){
		return {
			id: Number
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
	route: {
		data ({to: { params: { id }}}){
			this.id = id
		}
	},
	vuex: {
		actions: {
			activityQuery
		},
		getters: {
			activityInfo:getActivity
		}
	},
	ready: function () {
		this.activityQuery(id)
	},
	events: {
		DO: function () {
			this.$broadcast('showDialog');
		}
	}
}
</script>