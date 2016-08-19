<template>
	<div class="mz-card" :class="classes">
		<slot></slot>
	</div>
</template>

<style>
	.mz-border-success{
		border: 1px solid #72e4dc;
	}
	.mz-border-ready{
		border: 1px solid #5fb0f1;
	}
	.mz-shadow-default{
	}
</style>

<script>
	export default {
		props: {
			type:{
				type: String,
				default:'default'
			}
		},
		computed: {
			classes: function () {
				return [
					`mz-border-${this.type}`
				]
			}
		}
	}
</script>