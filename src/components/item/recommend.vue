<template>
	<div class="mz-item mz-recommend">
		<div class="mz-recommend-title">
			<slot name="title"></slot>
		</div>
		<slot name="container"></slot>
	</div>
</template>

<style>
	.mz-recommend{
		padding: 11px 0 11px 60px ;
		border-top:1px solid #72e4dc;

	}
	.mz-recommend-title{
		position: absolute;
		left: 0;
		width: 60px;
		text-align: right;
		font-size: 1.2rem;
	}
</style>

<script>
export default{

}
</script>