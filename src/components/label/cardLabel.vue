<template>
	<div class="mz-label" v-bind:class="classes"
												v-bind:style="{height:height+'px',width:width+'px',lineHeight:height+'px'}">
		<slot></slot>
	</div>
</template>

<style>
	.mz-label{
		position: absolute;
		text-align: center;
		color:#fff;
		font-size: 1.4rem;
	}
	.mz-top{
		top:0;
	}
	.mz-left{
		left: 0;
	}
	.mz-bottom{
		bottom: 0;
	}
	.mz-right{
		right: 0;
	}
	.mz-success{
		background: #72e4dc;
	}
	.mz-success-light{
		background: #e3faf8;
	}
	.mz-failed{
		background: #fe7f85;
	}
	.mz-warn{
		background: #ffb780;
	}
	.mz-warn-light{
		background: #ffe9d9;
	}
	.mz-ready{
		background: #5fb0f1;
	}
	.mz-complete{
		background: #ffba27;
	}
	.mz-glass{
		background: #b0d160;
	}
	.mz-purple{
		background: #b59ac1;
	}
	.mz-default{

	}
</style>

<script>
	export default{
		props: {
			top: {
				type: Boolean,
				default: false
			},
			bottom: {
				type: Boolean,
				default: false
			},
			left: {
				type: Boolean,
				default: false
			},
			right: {
				type: Boolean,
				default: false
			},
			height: {
				type: Number,
				default: 20
			},
			width: {
				type: Number,
				default: 100
			},
			type:{
				type:String,
				default:'deault'
			}
		},
		computed:{
			classes:function () {
				return [
					{
					'mz-top': this.top,
					'mz-left': this.left,
					'mz-right': this.right,
					'mz-bottom': this.bottom
				},
					`mz-${this.type}`
				]
			}
		}
	}
</script>