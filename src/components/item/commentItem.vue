<template>
	<div style="padding: 8px 15px">
		<div class="mz-item-comment clear-fix">
			<span v-if="date">{{date | friendlyTime}}</span>
			<i class="mz-icon mz-icon-comment mz-pull-right mz-space-15"  @click="commitToggle">{{comments}}</i>
			<i class="mz-icon mz-icon-good mz-pull-right mz-space-15"  :class="{'mz-checked': checked}"  @click="toggle">{{zan}}</i>
		</div>
		<div class="mz-commit-box" v-if="showCommit">
			<loading v-ref:loading @on-refresh="query"></loading>
			<div>
				<p v-for="item in commits">{{item.user_name}}:{{item.text}}</p>
			</div>
			<textarea class="mz-commit" placeholder="我想说两句" v-model="content"></textarea>
			<t-button min type="ready" @click="submit">提交</t-button>
		</div>
	</div>


	<toast :show.sync="showToast" :type="type">{{message}}</toast>

	<load :show="showLoading" text="提交中"></load>
</template>

<style>
	.mz-pull-right{
		float: right;
	}
	.mz-item-comment{
		padding: 3px 0;
	}
	.mz-commit{
		border:1px solid #e3e3e3;
		padding: 8px;
		border-radius: 5px;
		height:50px;
		width:100%;
		resize:none;
		box-sizing: border-box;
	}
	.mz-icon{
		font-family: "MOZI";
		display: inline-block;
		font-style: normal;
		font-size: 14px;
		color: #666;
	}
	.mz-space-15{
		margin-right: 15px;
	}
	.mz-icon-comment:before{
		content: "\e912";
		padding-right: 6px;
	}
	.mz-icon-good:before{
		content: "\e913";.
		padding-right:6px;
	}
	.clear-fix{
		overflow:auto;
		_height:1%
	}
	.mz-checked.mz-icon{
		color: #FE7F85;
	}
</style>

<script>
import TButton from '../button/button.vue'
import activity from '../../service/activityService'
import toast from '../../../node_modules/vux/dist/components/toast/index'
import spinner from '../../../node_modules/vux/dist/components/spinner/index'
import loading from '../../components/load/loading.vue'
import {isEmptyObject} from '../../common'
import load from '../../../node_modules/vux/dist/components/loading/index'

export default{
	components: {
		TButton,
		toast,
		spinner,
		loading,
		load
	},
	data: function () {
		return {
			showCommit: false,
			showToast: false,
			content: '',
			commits: [],
			message: '',
			type: '',
			showLoading: false,
		}
	},
	props: {
		zan: {
			type: Number
		},
		comments: {
			type: Number
		},
		activityId: {
			type: Number
		},
		signId: {
			type: Number
		},
		checked: {
			type: Boolean,
			default: false
		},
		date: {
			type: String
		}
	},
	methods: {
		//点赞
		toggle: function () {
			if(!this.checked){
				activity.ZAN(this.activityId, this.signId)
				this.zan++
				this.checked = true
			}
		},

		//查看评论
		query: function() {
			var _self = this
			if(this.showCommit && this.commits.length === 0){
				this.$refs.loading.OnLoading()
				activity.getMessageList(this.activityId, this.signId).then(function (data) {
					if(data.data.list.length === 0){
						_self.$refs.loading.OnEmpty()
						_self.$emit('on-loaded')
					}
					else{
						_self.commits = data.data.list
						_self.$refs.loading.OnHide()
						_self.$emit('on-loaded')
					}
				}).catch(function (err) {
					_self.$refs.loading.OnError()
					_self.$emit('on-loaded')
				})
			}
			this.$emit('on-loaded')
		},

		//评论
		commitToggle: function () {
			this.showCommit = !this.showCommit;
			this.$nextTick(() => {
				this.query()
			})
		},

		//提交评论
		submit: function () {
			var _self = this
			if(this.content.length > 0){
				this.showLoading = true
				activity.commit(this.activityId, this.signId, this.content).then(function (data) {
					_self.showLoading = false
					if(data.data.result === 0){
						_self.showToast = true
						_self.commits.push({'user_name': data.data.user_name,'text': data.data.text})
						_self.comments++
						_self.message = '评论成功!'
						if(_self.commits.length === 1)_self.$refs.loading.OnHide()
						_self.content = ''
						_self.$emit('on-loaded')
					}
					else {
						self.showToast = true
						_self.message = '评论失败!'
						_self.type = ''
					}
				}).catch(function (err) {
					_self.showLoading = false
					_self.showToast = true
					_self.message = '评论失败!'
					_self.type = ''
				})
			}
		}
	}
}
</script>