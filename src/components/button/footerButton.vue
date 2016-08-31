<template>
	<div class="mz-footer-flex" :class="classes">
		<div class="mz-footer-button mz-footer-left" @click="back">
			<i class="mz-icon-eye mz-icon">我再看看</i>
		</div>
		<div class="mz-footer-button mz-footer-right" @click="do">
			<i class="mz-icon-people mz-icon">{{action}}</i>
		</div>
	</div>
</template>

<style>
.mz-footer-flex{
	position: absolute;
	display: flex;
	left: 0;
	right: 0;
	height: 50px;
	bottom: 0;
}
.mz-footer-button{
	display: flex;
	flex:1;
	align-content: center;
	align-items:center;
	justify-content: center;
	justify-items: center;
}
.mz-footer-left{
	background: #fff;
}
.mz-footer-right .mz-icon{
	color:#fff;
}
.mz-footer-glass .mz-footer-left .mz-icon{
	color:#b0d160;
}
.mz-footer-glass .mz-footer-right{
	background: #b0d160;
}

.mz-footer-success .mz-footer-left .mz-icon{
	color:#72e4dc;
}
.mz-footer-success .mz-footer-right{
	background: #72e4dc;
}
</style>

<script>
export default {
	props: {
		disable: {
			type: Boolean,
			default: false
		},
		action:{
			type: String
		},
		type: {
			type: String
		}
	},
	computed: {
		classes: function () {
			return [
				`mz-footer-${this.type}`
			]
		}
	},
	methods: {
		do: function () {
			if (!this.disable){
				this.$emit('on-confirm')
			}
		},
		back: function () {
			window.history.back()
		}
	}
}
</script>