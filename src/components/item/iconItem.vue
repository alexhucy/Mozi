<template>
	<div class="mz-item mz-item-icon">
		<i class="mz-icon mz-icon-left" :class="classes"></i>
		<slot></slot>
	</div>
</template>

<style>
	.mz-item-icon{
		color:#666;
		font-size:1.3rem;
	}
	.mz-icon-people:before{
		content: '\e90d';
	}
	.mz-icon-money:before{
		content: '\e90a';
	}
	.mz-icon-gift:before{
		content: '\e90b';
	}
	.mz-icon-eye:before{
		content: '\e904'
	}
	.mz-icon-detail:before{
		content: '\e902'
	}
	.mz-icon-edit:before{
		content: '\e906'
	}
</style>

<script>
export default {
	props: {
		type: {
			type: String
		}
	},
	computed: {
		classes: function () {
			return [
				`mz-icon-${this.type}`
			]
		}
	}
}
</script>