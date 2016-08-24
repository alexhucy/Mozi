<template>
	<div style="margin-bottom: 10px">
		<div class="mz-tab-item-header">
			<span class="mz-tab-item-title">活动:{{title}}</span>
			<span class="mz-absolute-right mz-arrow"  :class="classes" @click="toggle">{{state}}</span>
		</div>
		<div v-if="show">
			<slot></slot>
		</div>
	</div>
</template>

<style>
.mz-tab-item-header{
	background: #72e4dc;
	height: 40px;
	padding: 0  10px;
	line-height: 40px;
	display: flex;
	justify-content:space-between;
}
.mz-tab-item-title{
	color: #fff;
	font-size: 1.4rem;
	max-width: 70%;
	display: -webkit-box;
	-webkit-box-orient:vertical;
	overflow: hidden;
	word-break: break-all;
	text-overflow:ellipsis;
	-webkit-line-clamp:1;
}
.mz-arrow{
	position: relative;
	padding-right: 5px;
	margin-right:10px;
}
.mz-arrow-top:before{
	content:' ';
	position: absolute;
	top: 18px;
	left :100%;
	display: block;
	height: 5px;
	width: 5px;
	color:#333;
	border-bottom: 1px solid #333;
	border-right: 1px solid #333;
	transform: rotate(-135deg);
}
.mz-arrow-down:before{
	content:' ';
	position: absolute;
	top: 15px;
	left:100%;
	display: block;
	height: 5px;
	width: 5px;
	color:#333;
	border-bottom: 1px solid #333;
	border-right: 1px solid #333;
	transform: rotate(45deg);
}
</style>

<script>
export default{
	data: function () {
		return {
			show: false,
			state:'查看详情',
			type:'down'
		}
	},
	props: {
		title: String
	},
	computed: {
		classes: function () {
			return [
				`mz-arrow-${this.type}`
			]
		}
	},
	methods: {
		toggle: function () {
			this.show = !this.show;
			this.state = this.show === true ? '收起' : '查看详情'
			this.type = this.show === true? 'top' : 'down'
			this.$emit('on-fresh')
		}
	}
}
</script>