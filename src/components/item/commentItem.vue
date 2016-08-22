<template>
	<div style="padding: 8px 0">
		<div class="mz-item-comment clear-fix">
			<i class="mz-icon mz-icon-comment mz-pull-right"  @click="commitToggle">{{comments}}</i>
			<i class="mz-icon mz-icon-good mz-pull-right mz-space-15" @click="toggle">{{zan}}</i>
		</div>
		<div class="mz-commit-box" v-if="showCommit">
			<div>
				<p v-for="item in commits">{{item.user_name}}:{{item.text}}</p>
			</div>
			<textarea class="mz-commit" placeholder="我想说两句" v-model="content"></textarea>
			<t-button min type="ready" @click="submit">提交</t-button>
		</div>
	</div>
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
</style>

<script>
import TButton from '../button/button.vue'
import activity from '../../service/activityService'
import {activityMessageQuery} from '../../vuex/actions/activityAction'
import {getMessageList} from '../../vuex/getters/activityGetter'

export default{
	components: {
		TButton
	},
	data: function () {
		return {
			showCommit: false,
			content: ''
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
		}
	},
	methods: {
		toggle: function () {
			activity.ZAN(this.activityId, this.signId)
		},
		commitToggle: function () {
			this.showCommit = !this.showCommit;
			if(this.showCommit){
				this.activityMessageQuery(this.activityId, this.signId)
			}
		},
		submit: function () {
			console.log(this.content)
			activity.commit(this.activityId, this.signId, this.content)
		}
	},
	vuex:{
		actions: {
			activityMessageQuery
		},
		getters: {
			commits: getMessageList
		}
	}
}
</script>