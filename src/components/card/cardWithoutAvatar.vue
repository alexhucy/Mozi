<template>
	<box type = "success">
		<h4>{{title}}</h4>
		<p>{{content}}</p>
		<div class="mz-photo"  :style="{backgroundImage:'url('+ cover +')'}"></div>

		<comment :zan="zan"
		         :comments="comments">

		</comment>
	</box>
</template>

<style>

</style>

<script>
import box from '../container/boxWithBorder.vue'
import comment from '../item/commentItem.vue'

export default {
	components: {
		box,
		comment
	},
	props: {
		zan: {
			type: Number
		},
		comments: {
			type: Number
		},
		title: {
			type: String
		},
		content: {
			type: String
		},
		cover: {
			type: String
		}

	}
}
</script>