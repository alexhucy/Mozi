<template>
	<scroller v-ref:scroller lock-x>
		<div>
			<div v-if="activity.info">
				<tab :title="activity.info.title" @on-fresh="fresh">
					<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg" >
						<h4>{{activity.info.sponsor_name}}</h4>
						<p>发起了活动: {{activity.info.title}}</p>
						<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>
						<p>报名截至时间:{{activity.info.end_time}}</p>
						<!--<p>每人保证金: 100元</p>-->
					</avatar-item>

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

				<timeline v-for="item in items"
				          :title="item.text"
									:url="item.image_url"
									:zan="item.agree_count"
									:comments="item.comment_count"
									:sign-id="item.signin_id"
									:activity-id="item.activity_id"
									date="2016 08-16 11:10">

				</timeline>
			</div>
	</div>
	</scroller>
</template>

<style>

</style>

<script>
import timeline from './timeline.vue'
import tab from '../../components/item/tabItem.vue'
import avatarItem from '../../components/item/avatarItem.vue'
import wrap from '../../components/container/contentWithTitle.vue'
import {activityCompletedInfoQuery,activityCompletedTimeLineQuery} from '../../vuex/actions/activityAction'
import {getCompltedActivity,getTimeline} from '../../vuex/getters/activityGetter'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'
import halfItem from '../../components/item/HalfItem.vue'

export default{
	components: {
		timeline,
		tab,
		avatarItem,
		wrap,
		scroller,
		halfItem
	},
	vuex: {
		actions: {
			activityCompletedInfoQuery,
			activityCompletedTimeLineQuery
		},
		getters: {
			activity: getCompltedActivity,
			items: getTimeline
		}
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
			this.activityCompletedInfoQuery(id)
			this.activityCompletedTimeLineQuery(id)
		}
	},
	methods: {
		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
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