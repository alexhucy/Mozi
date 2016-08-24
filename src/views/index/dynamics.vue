<template>
		<scroller v-ref:scroller lock-x height="auto"  style="position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;" >
			<div>
				<loading @on-loading="query">

				</loading>

				<card v-for="item in items" :title="item.title"
				      :head-img-url="item.sponsor_avatar"
							:time-range="item.start_time+' —— '+item.end_time"
							:last-time="item.end_time"
							:number="item.signup_number"
				      :money="item.deposit"
				      :course="item.course_desc"
				      :id="item.activity_id">
				</card>
			</div>
		</scroller>

</template>

<style>

</style>

<script>
import card from './dynamicsCard.vue'
import {getActivityList} from '../../vuex/getters/activityGetter'
import {activityListQuery} from '../../vuex/actions/activityAction'
import loading from '../../components/load/loading.vue'
import {isEmptyObject} from '../../common'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'

export default{
	components:{
		card,
		loading,
		scroller
	},
	vuex: {
		actions: {
			activityListQuery
		},
		getters: {
			items: getActivityList
		}
	},
	methods: {
		query: function () {
			var _self = this;

			this.activityListQuery().then(function (data) {
				if(isEmptyObject(_self.items)){
					_self.$broadcast('empty')
				}
				else{
					_self.$broadcast('hide')
				}
			}).catch(function (err) {
				_self.$broadcast('error')
			})
		}
	},
	watch:{
		items:function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	}
}
</script>

