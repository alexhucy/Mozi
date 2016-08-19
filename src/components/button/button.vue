<template>
	<button class="mz-button" :class="classes">
		<slot></slot>
	</button>
</template>

<style>
.mz-button{
	border-width: 0;
	outline: 0;
	position: relative;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-left: 14px;
	padding-right: 14px;
	box-sizing: border-box;
	font-size: 18px;
	text-align: center;
	text-decoration: none;
	color: #fff;
	line-height: 2.33333333;
	border-radius: 5px;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	overflow: hidden;
}
.mz-button-min{
	padding: 0 10px;
	font-size: 1.2rem;
}
.mz-button-normal{
	width: 40%;
}
.mz-button-large{
	width: 80%;
}
.mz-button-full{
	width: 100%;
}
</style>

<script>
export default{
	props: {
		min: {
			type: Boolean
		},
		normal: {
			type: Boolean
		},
		large: {
			type: Boolean
		},
		full: {
			type: Boolean
		},
		type: {
			type: String
		}
	},
	computed:{
		classes:function () {
			return [
				{
					'mz-button-min': this.min,
					'mz-button-normal': this.normal,
					'mz-button-large': this.large,
					'mz-button-full': this.full
				},
				`mz-${this.type}`
			]
		}
	}
}
</script>