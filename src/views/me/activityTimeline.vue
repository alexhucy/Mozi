<template>

	<loading v-ref:loading @on-refresh="query"></loading>

	<scroller v-ref:scroller lock-x
	          use-pullup
	          :pullup="disable"
	          @pullup:loading="more"
						 v-if="activity.info">



		<div style="padding-bottom: 10px;height: 100%">
			<div >
				<tab :title="activity.info.title" @on-fresh="fresh">
					<div style="background: #fff;padding: 10px 15px">
						<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg" >
							<h4>{{activity.info.sponsor_name}}</h4>
							<p>发起了活动: {{activity.info.title}}</p>
							<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>
							<p>报名截至时间:{{activity.info.end_time}}</p>
							<!--<p>每人保证金: 100元</p>-->
						</avatar-item>
					</div>
					<wrap title="活动介绍:" type="success"  >
						<p v-html="activity.info.desc | newLine"></p>
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
									:checked="item.my_agree===1?true:false"
									:date="item.signin_time"
									@on-loaded="pass(item)">

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
import scroller from '../../../node_modules/vux/dist/components/scroller/index'
import halfItem from '../../components/item/HalfItem.vue'
import loading from '../../components/load/loading.vue'
import activityService from '../../service/activityService'
import promise from '../../../node_modules/vue-resource/src/promise'
import {setSignInfo} from '../../vuex/actions/activityAction'

export default{
	components: {
		timeline,
		tab,
		avatarItem,
		wrap,
		scroller,
		halfItem,
		loading
	},
	route: {
		data ({to: { params: { id }}}){
			this.id = id;
		}
	},
	vuex: {
		actions: {
			setSignInfo
		}
	},
	data: function () {
		return {
			activity: {},
			items: [],
			page: 1,
			size: 20,
		}
	},
	methods: {
		fresh: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		},
		query: function () {
			var _self = this
			this.$refs.loading.OnLoading()
			promise.all([activityService.getActivityCompletedInfo(this.id),activityService.getActivityTimeLine(this.id,this.page, this.size)]).then(function (data) {
				_self.$refs.loading.OnHide()
				_self.activity = data[0].data
				_self.items = data[1].data.list
				if(data[1].data.page_end === 1){
					_self.$nextTick(function () {
						_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid)
					})
				}
			}).catch(function (err) {
				_self.$refs.loading.OnError()
			})
		},

		more: function (uuid) {
				var _self = this
				this.page ++
				activityService.getActivityTimeLine(this.id, this.page, this.size).then(function (data) {
					if(data.data.page_end === 1){
						_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid)
					}
					if(data.data)_self.items = _self.items.concat(data.data.list)
					_self.$broadcast('pullup:reset', uuid)
				})
		},

		pass: function (info) {
			this.setSignInfo(info)
		}
	},
	ready: function () {
		this.query()
	},
	watch:  {
		items: function () {
			this.fresh()
		}
	}
}
</script>