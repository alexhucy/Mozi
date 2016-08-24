<template>
	<div class="mz-item mz-item-avatar">
		<img :src="avatarUrl" class="mz-avatar">
		<slot></slot>
	</div>
</template>

<style>
	.mz-item{
		position: relative;
	}
	.mz-item.mz-item-avatar{
		min-height:72px ;
		padding:10px 0 15px 60px;
	}
	.mz-avatar{
		position:absolute;
		top:4px;
		left: 0;
		max-height: 50px;
		max-width: 50px;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

</style>

<script>
export default{
	props:{
		avatarUrl:{
			type:String
		}
	}
}
</script>