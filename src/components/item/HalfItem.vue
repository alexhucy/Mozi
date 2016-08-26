<template>
	<a :href="href">
		<div class="td-half-box clearfix">
			<div class="td-scroll-item-cover" :style="{backgroundImage:'url('+ url +')' }">

			</div>
			<p>{{title}}</p>
		</div>
	</a>
</template>

<style>
	.td-half-box{
		float: left;
		width: 33%;
		padding-right: 15px;
		box-sizing: border-box;
	}

	.td-scroll-item-cover{
		width: 100%;
		height: 70px;
		background-repeat:no-repeat;
		background-size:140px;
	}

	.clearfix{overflow:auto;_height:1%}

	.td-box-scroll-wrap .td-box-item{
		width: 140px;
		display:block;
		margin-left: 15px;
		float: left;
		padding-bottom: 12px;
	}
	.td-scroll-item-cover{
		width: 100%;
		height: 70px;
		background-repeat:no-repeat;
		background-size:100%;
	}
	.td-half-box p{
		display: -webkit-box;
		-webkit-box-orient:vertical;
		overflow: hidden;
		word-break: break-all;
		text-overflow:ellipsis;
		-webkit-line-clamp:2;
	}
</style>

<script>

	export default{
		props: {
			title: {
				type: String
			},
			url: {
				type: String
			},
			link: {
				type: String
			},
			href:{
				type: String
			}
		}
	}
</script>