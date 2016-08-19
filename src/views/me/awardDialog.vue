<template>
	<dialog :show.sync="showNoScroll" :scroll="false">
			<div class="mz-award-top">
				<p class="mz-dialog-title">积分奖励说明</p>
			</div>

			<div class="mz-award-box">
				<div style="padding-bottom: 10px">
					<p>参加活动+1分</p>
					<p>每日打卡+1分</p>
					<p>完成一个活动+5分</p>
				</div>
				<m-button type="success" large @click="awardIntroduce">
					了解了
				</m-button>
			</div>
	</dialog>
</template>

<style>

.weui_dialog{
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