<template>
	<div class="mz-comment-list">
		<img :src="src">
		<div class="mz-comment-item">
			<div class="mz-comment-name">{{name}}</div>
			<div v-html="toHtml(content)"></div>
		</div>
	</div>
</template>

<style>
.mz-comment-list{
	position: relative;
	padding: 10px 12px;
	display: flex;
	background: #fff;
	border-bottom:1px solid #e3e3e3;
}
.mz-comment-list img{
	display: block;
	width: 34px;
	height: 34px;
	margin-right: 12px;

}
.mz-comment-item{
	flex: 1;
}
.mz-comment-name{
	font-weight: 400px;
}
</style>

<script>
export default{
	props:{
		name: String,
		content: String
	},
	methods: {
		toHtml: function (str) {
			var regRN = /\r/g;
			return str.replace(regRN,"<br />");
		}
	}
}
</script>