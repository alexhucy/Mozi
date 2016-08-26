<template>
	<div class="mz-card vux-1px-r" :class="classes">
		<slot></slot>
	</div>
</template>

<style>
.mz-card {
	border-radius: 4px;
	border: 1px solid #e3e3e3;
	margin: 10px 13px 0;
	/*padding: 15px 15px 0;*/
	position: relative;
	background: #fff;
}
.mz-shadow-success{
	border-bottom: 3px solid #72e4dc;
}
.mz-shadow-ready{
	border-bottom: 3px solid #5fb0f1;
}
.mz-shadow-failed{
	border-bottom: 3px solid #fe7f85;
}
.mz-shadow-complete{
	border-bottom: 3px solid #ffba27;
}
.mz-shadow-glass{
	border-bottom: 3px solid #b0d160;
}
.mz-shadow-default{
}
</style>

<script>
export default {
	props: {
		type:{
			type: String,
			default:'default'
		}
	},
	computed: {
		classes: function () {
			return [
				`mz-shadow-${this.type}`
			]
		}
	}
}
</script>