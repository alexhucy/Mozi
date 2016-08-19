<template>
	<div class="mz_cells_title" :class="classes">
		<slot></slot>
	</div>
</template>

<style>
.mz_cells_title{
	color: #fff;
	padding: 10px 15px;
}
</style>

<script>
	export default{
		props: {
			type: {
				type: String
			}
		},
		computed:{
			classes:function () {
				return [
					`mz-${this.type}`
				]
			}
		}
	}

</script>


