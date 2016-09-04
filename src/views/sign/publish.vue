<template>
	<group>
		<x-textarea :max="200" placeholder="请输入评论内容" :value.sync="content"></x-textarea>
	</group>

	<div style="margin-top: 30px">
		<t-button full type="success" @click="submit">发表评论</t-button>
	</div>

</template>

<style>

</style>

<script>
import group from '../../../node_modules/vux/dist/components/group/index'
import xTextarea from '../../../node_modules/vux/dist/components/x-textarea/index'
import tButton from '../../components/button/button.vue'
import activity from '../../service/activityService'
import {pushLastCommentSign} from '../../vuex/actions/activityAction'

export default{
	data: function () {
		return{
			content: ''
		}
	},
	components:{
		group,
		xTextarea,
		tButton
	},
	vuex: {
		actions: {
			pushLastCommentSign
		}
	},
	route: {
		data ({to: { params: { activityId, signId }}}){
			this.activityId = activityId
			this.signId = signId
		}
	},
	methods: {
		submit: function () {
			var _self = this
			if(this.content.length > 0){
				this.$dispatch('loading')
				activity.commit(this.activityId, this.signId, this.content).then(function (data) {
					_self.$dispatch('loading')
					if(data.data.result === 0){
						_self.pushLastCommentSign(data.data)
						_self.$dispatch('success', '评论成功')
						window.history.back()
					}
					else {
						_self.$dispatch('error', '评论失败')
					}
				}).catch(function (err) {
					_self.$dispatch('loading')
					if(err.status === 400){
						_self.$dispatch('error',err.data.error_message)
					}
					else if(err.status === 0){
						_self.$dispatch('error','请求超时请重试')
					}
					else{
						_self.$dispatch('error','内容错误请重试')
					}
				})
			}
		}
	}
}
</script>