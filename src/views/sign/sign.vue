<template>
	<scroller v-ref:scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto" v-if="activity.info">
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
									:title="course.link_text">
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
							:sign-id="item.signin_id">
			</card>

		</div>
	</scroller>

	<f-button type="glass"
						:action="activity.signin===1?'今日已打卡': '我要打卡'"
						:disable="activity.signin===1?true: false">
	</f-button>
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
import {activityQuery, activitySignListQuery} from '../../vuex/actions/activityAction'
import {getActivity, getSignList} from '../../vuex/getters/activityGetter'
import tab from '../../components/item/tabItem.vue'
import halfItem from '../../components/item/HalfItem.vue'

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
		halfItem
	},
	data: function () {
		return {
			showMessage: false,
			message: ''
		}
	},
	vuex: {
		actions: {
			activityQuery,
			activitySignListQuery
		},
		getters: {
			activity: getActivity,
			items: getSignList
		}
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
		}
	},
	ready:function () {
		this.activityQuery(this.id)
		this.activitySignListQuery(this.id)
	},
	methods: {
		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	},
	events: {
		DO: function () {
			this.$router.go({name: 'upload'})
		}
	},
	watch: {
		activity: function () {
			this.fresh()
		},
		items: function () {
			this.fresh()
		}
	}
}
</script>