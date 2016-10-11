<template>
	<layer :show="show">
			<img src="/sign/images/arrow.png" height="120">
			<p style="margin-bottom:20px">
				点击右上角<b style="color:#ffba27;">"分享"</b>,分享至朋友圈,</br>
				邀请好友<span style="color:#72e4dc">围观</span>动态/<span style="color:#b0d160">参加</span>活动/<span style="color:#fe7f85">监督</span>任务</br>
				天天分享，积分领不停
			</p>

			<button class="mz-button-transparent" @click="onHide">知道了</button>
	</layer>
</template>

<style>
.mz-transparent b{
	font-size: 2.6rem;
}
.mz-transparent p{
	font-size: 1.8rem;
}
.mz-button-transparent{
	background: transparent;
	border: 1px solid #fff;
	width: 130px;
	height: 37px;
	color: #fff
}
</style>

<script>
import layer from './layer.vue'

export default{
	data: function () {
		return {
			show: false
		}
	},
	components: {
		layer
	},
	methods:{
		onShow: function () {
			this.show = true
		},
		onHide: function () {
			this.show = false
		}
	}
}
</script>