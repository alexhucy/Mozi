<template>
	<div class="mz-footer">
		<span v-link="{name:'center'}">个人中心</span>
	</div>
</template>

<style>
.mz-footer{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-image: url("/images/me.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	color:#fff;
	text-align: center;
}
.mz-footer span{
	display: inline-block;
	height: 60px;
	width: 30%;
	padding-top: 10px;
}
.mz-footer span:before{
	content: "\e908";
	font-family: 'MOZI';
	display: block;
	font-size: 1.6rem;
}
</style>

<script>
export default{

}
</script>