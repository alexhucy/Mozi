<template>
	<div  class="mz-comment-footer">
		<div class="mz-item-comment">
			<div>
				<span v-if="date" class="mz-font-12">{{date | friendlyTime}}</span>
			</div>
			<div>
				<i class="mz-icon mz-icon-comment mz-pull-right mz-space-15"  @click="comment">{{comments}}</i>
				<i class="mz-icon mz-icon-good mz-pull-right mz-space-15"  :class="{'mz-checked': checked}"  @click="toggle">{{zan}}</i>
			</div>
		</div>
	</div>
</template>

<style>
	.mz-pull-right{
		float: right;
	}
	.mz-item-comment{
		padding: 3px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.mz-comment-footer{
		padding: 8px 15px 8px 30px;
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
		content: "\e913";
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
		comment: function () {
			this.$router.go({name:'comment', params:{activityId:this.activityId, signId: this.signId}})
			this.$emit('on-loaded')
		}

	}
}
</script>