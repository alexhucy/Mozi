<template>
	<div>
		<router-view></router-view>
	</div>

</template>

<style>
	html,body{
		font-size: 10px;
		height: 100%;
		position: relative;
		margin: 0;
		padding: 0;
		background: #fff7e6;
		overflow: hidden;
	}
	@font-face {
		font-family: 'MOZI';
		src: url('/font/icomoon.eot');
		src: url('/font/icomoon.eot?#iefix') format('embedded-opentype'),
		url('/font/icomoon.woff') format('woff'),
		url('/font/icomoon.ttf') format('truetype'),
		url('/font/icomoon.svg#Taidii') format('svg');
		font-weight: normal;
		font-style: normal;
	}
</style>

<script>
export default{

}
</script>