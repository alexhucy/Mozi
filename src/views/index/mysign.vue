<template>


	<scroller v-ref:scroller
	          use-pulldown
	          @pulldown:loading="reload"
	          lock-x height="auto"
	          style="position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;" >
		<div style="padding-bottom: 20px">

			<loading v-ref:loading
			         @on-refresh="query">
			</loading>

			<card v-for="item in items"
						:label="item.signin_status===1?'今日已打卡':'我要打卡'"
						:type="item.signin_status===1?'ready':'glass'"
						:title="item.activity_title"
						:content="item.text"
						:zan="item.agree_count"
						:comments="item.comment_count"
						:url="item.image_url"
						:activity-id="item.activity_id"
						:sign-id="item.signin_id"
						:checked="item.my_agree === 1 ? true : false"
						@on-loaded="pass(item)"
						:date="item.signin_time">
			</card>

		</div>
	</scroller>
</template>

<style>

</style>

<script>
import card from './signCard.vue'
import {activityOngoingListQuery,setSignInfo} from '../../vuex/actions/activityAction'
import {getOngoingActivityList} from '../../vuex/getters/activityGetter'
import loading from '../../components/load/loading.vue'
import {isEmptyObject} from '../../common'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'

export default {
	components: {
		card,
		loading,
		scroller
	},
	vuex: {
		actions: {
			activityOngoingListQuery,
			setSignInfo
		},
		getters: {
			items:getOngoingActivityList
		}
	},
	methods: {
		query: function () {
			var _self = this;
			this.$refs.loading.OnLoading()
			this.activityOngoingListQuery().then(function (data) {
				if(isEmptyObject(_self.items)){
					_self.$refs.loading.OnEmpty()
				}
				else{
					_self.$refs.loading.OnHide()
				}
			}).catch(function () {
				_self.$refs.loading.OnError()
			})
		},
		reload: function (uuid) {
			var _self = this
			this.activityOngoingListQuery().then(function (data) {
				_self.$broadcast('pulldown:reset', uuid)
			}).catch(function () {
				_self.$broadcast('pulldown:reset', uuid)
			})
		},
		pass: function (info) {
			this.setSignInfo(info)
		}
	},
	watch:{
		items:function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	},
	ready:function () {
		if (this.items.length === 0){
			this.query()
		}
		else{
			this.activityOngoingListQuery()
		}
	}
}
</script>