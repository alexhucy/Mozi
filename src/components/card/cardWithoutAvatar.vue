<template>
	<box type = "success">
		<h4>{{title}}</h4>
		<p>{{content}}</p>
		<div class="mz-photo"  :style="{backgroundImage:'url('+ cover +')'}"></div>

		<comment :zan="zan"
		         :comments="comments"
		         :activity-id="activityId"
		         :sign-id="signId">

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
		},
		activityId: {
			type: Number
		},
		signId: {
			type: Number
		}

	}
}
</script>