<template>
	<div class="mz-item mz-item-avatar">
		<div class="mz-avatar">
			<img :src="avatarUrl" >
			<span class="mz-text-center">{{name}}</span>
		</div>
		<slot></slot>
	</div>
</template>

<style>
	.mz-item{
		position: relative;
	}
	.mz-item.mz-item-avatar{
		min-height:72px ;
		padding:10px 0 15px 70px;
	}
	.mz-avatar{
		position:absolute;
		top:4px;
		left: 0;
		max-height: 50px;
		max-width: 50px;
	}
	.mz-avatar img{
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}
	.mz-avatar span{
		display: block;
	}
</style>

<script>
export default{
	props:{
		avatarUrl: String,
		name: String
	}
}
</script>