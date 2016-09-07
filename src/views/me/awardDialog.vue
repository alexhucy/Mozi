<template>
	<dialog :show.sync="showNoScroll" :scroll="false" class="mz-dialog-transparent">
			<div class="mz-award-top">
				<p class="mz-dialog-title">积分说明</p>
			</div>

			<div class="mz-award-box">
				<div style="padding-bottom: 10px">
					<p>原始积分{{init||100}}分</p>
					<p>报名活动{{join||-10}}分</p>
					<p class="mz-award-supply">(坚持完成该活动全部打卡,返还积分)</p>
					<p>每日打卡+{{sign||2}}分</p>
					<p>评论+{{comment||1}}分</p>
					<p class="mz-award-supply">(评论次数不限定,封顶{{limit*comment||20}}分)</p>
				</div>
				<m-button type="success" large @click="awardIntroduce">
					了解了
				</m-button>
			</div>
	</dialog>
</template>

<style>

.mz-award-supply{
	color: #FE7F85;
}
.mz-dialog-transparent .weui_dialog{
	background: transparent;
	width: 75%;
}
.mz-dialog-title{
	color: #fff;
	line-height: 42px;
	font-size:1.6rem;
}
.mz-award-box{
	background: #fff7e6;
	border: 1px solid #eca409;
	border-radius: 4px;
	position: relative;
	padding: 20px 10px;
	margin: 40px 10px 0 10px;
}
.mz-award-top{
	background-image: url("/images/award.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 50px;
	top:0;
	left:0;
	right:0;
	position: absolute;
	z-index:99999
}
</style>

<script>
import dialog from '../../../node_modules/vux/dist/components/dialog/index'
import MButton from '../../components/button/button.vue'

export default {
	components: {
		dialog,
		MButton
	},
	props: {
		init: Number,
		join: Number,
		sign: Number,
		comment: Number,
		completed: Number,
		limit: Number
	},
	data: function () {
		return {
			showNoScroll: false
		}
	},
	methods: {
		awardIntroduce: function () {
			this.showNoScroll = !this.showNoScroll;
		}
	},
	events: {
		'showDialog': function () {
			this.awardIntroduce();
		}
	}
}
</script>