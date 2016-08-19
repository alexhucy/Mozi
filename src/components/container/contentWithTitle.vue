<template>
	<div class="mz-content-wrap">
		<div class="mz-content-header" :class="classesLight">
			<div class="mz-content-title" :class="classes">
				{{title}}
			</div>
		</div>

		<div class="mz-content-container">
			<slot></slot>
		</div>
	</div>

</template>

<style>
	.mz-content-header{
		height: 20px;
	}
	.mz-content-title{
		text-align: center;
		width: 87px ;
		display: inline-block;
		color:#fff;
	}
	.mz-content-container{
		padding: 10px 13px;
		background: #fff;
	}
</style>

<script>
export default {
	props: {
		title: {
			type: String
		},
		type: {
			type: String,
			default: 'default'
		}
	},
	computed: {
		classes: function () {
			return [
				`mz-${this.type}`
			]
		},
		classesLight: function () {
			return [
				`mz-${this.type}-light`
			]
		}
	}
}
</script>