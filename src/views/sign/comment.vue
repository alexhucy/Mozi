<template>
	<scroller lock-x v-ref:scroller>
		<div>
			<div class="mz-item-cover">
				<avatar-item :avatar-url="info.user_avatar" :name="info.user_name">
					<h4>{{info.activity_title}}</h4>
					<p>{{info.text}}</p>
					<image-item :src="info.image_url"></image-item>
					<span v-if="info.signin_time">{{info.signin_time| friendlyTime}}</span>

				</avatar-item>
			</div>

			<div class="mz-comment-title-bar">
				<span>评论 {{info.comment_count}}</span>
				<div>
					<i class="mz-icon-large mz-icon-good" style="margin-right: 20px"  :class="{'mz-checked': checked}" @click="toggle">赞</i>
					<i class="mz-icon-large mz-icon-write" @click="comment">写评论</i>
				</div>
			</div>
			<div style="background: #fff">
				<loader v-ref:loading
				        @on-refresh="query">
				</loader>

				<comment-list v-for="item in items.commentList"
				              :name="item.user_name"
				              :src="item.src"
				              :content="item.text | newLine"
											v-if="items">
				</comment-list>
			</div>

		</div>
	</scroller>
</template>

<style>
.mz-comment-title-bar{
	margin-top: 10px;
	padding: 12px;
	background: #fff;
	font-size: 1.4rem;
	font-weight: 400;
}
.mz-state{
	background: #fff;
	padding: 0 13px;
	border-top:1px solid #e3e3e3;
}
.mz-comment-title-bar{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #e3e3e3;
}
.mz-icon-write:before{
	content:'\e906';
	padding-right: 6px;
}
.mz-icon-large{
	font-family: "MOZI";
	display: inline-block;
	font-style: normal;
	font-size: 1.4rem;
	color: #666;
}
.mz-checked.mz-icon-large{
	color:#FE7F85;
}
</style>

<script>
import avatarItem from '../../components/item/avatarItem.vue'
import commentList from '../../components/list/commentList.vue'
import loader from '../../components/load/loading.vue'
import imageItem from '../../components/Image/Image.vue'
import {getSignInfo, getLastCommentInfo} from '../../vuex/getters/activityGetter'
import activity from '../../service/activityService'
import scroller from '../../../node_modules/vux/dist/components/scroller/index'
import {setLastCommentInfo} from '../../vuex/actions/activityAction'

export default {
	components: {
		avatarItem,
		commentList,
		loader,
		imageItem,
		scroller
	},
	vuex: {
		getters:{
			info: getSignInfo,
			items: getLastCommentInfo
		},
		actions: {
			setLastCommentInfo
		}
	},
	route: {
		data ({to: { params: { activityId, signId }}}){
			this.activityId = activityId
			this.signId = signId
		}
	},
	data: function () {
		return {
			checked: false
		}
	},
	methods:{
		query: function() {
			var _self = this
			_self.$refs.loading.OnLoading()
			activity.getMessageList(this.activityId, this.signId).then(function (data) {
				_self.setLastCommentInfo(_self.info, data.data.list, _self.activityId, _self.signId)
				if(data.data.list.length === 0){
					_self.$refs.loading.OnEmpty()
				}
				else{
					_self.$refs.loading.OnHide()
				}
			}).catch(function (err) {
				console.log(err)
				_self.$refs.loading.OnError()
			})
		},
		toggle: function () {
			if(!this.checked){
				activity.ZAN(this.activityId, this.signId)
				this.checked = !this.checked
			}
		},
		comment: function () {
			this.$router.go({name:'publish'})
		}
	},
	ready: function () {
		this.checked  =  this.info.my_agree === 1 ? true: false
		if(this.activityId === this.items.activityId && this.signId === this.items.signId && this.items.commentList && this.items.commentList.length>0){
			this.query()
		}
		else {
			this.setLastCommentInfo(this.info, [], this.activityId, this.signId)
			this.query()
		}
	},
	watch: {
		items: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	}
}
</script>