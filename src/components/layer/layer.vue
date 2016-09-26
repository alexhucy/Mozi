<template>
	<div class="weui_dialog_alert" v-show="show" :transition="maskTransition" @touchmove="!this.scroll && $event.preventDefault()">
		<div class="weui_mask" @click="hideOnBlur && (show = false)"></div>
		<div class="mz-dialog mz-transparent" v-show="show" :transition="dialogTransition">
			<slot></slot>
		</div>
	</div>
</template>

<style>
.mz-transparent{
	background: transparent;
	color: #fff;
}
.mz-dialog{
	position: fixed;
	z-index: 5000;
	width: 90%;
	top: 160px;
	left: 50%;
	-webkit-transform: translate(-50%,-50%);
	transform: translate(-50%,-50%);
	text-align: center;
	border-radius: 3px;
	overflow: hidden;
}
</style>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			maskTransition: {
				type: String,
				default: 'vux-fade'
			},
			dialogTransition: {
				type: String,
				default: 'vux-dialog'
			},
			hideOnBlur: Boolean,
			scroll: {
				type: Boolean,
				default: true
			}
		},
		watch: {
			show (val) {
				this.$emit(val ? 'on-show' : 'on-hide')
			}
		}
	}
</script>
