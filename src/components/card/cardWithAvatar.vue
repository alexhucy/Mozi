<template>
	<box type = "success">
		<avatar-item :avatar-url="headImgUrl">
			<h4>{{title}}</h4>
			<p>{{content}}</p>
			<div class="mz-photo" :style="{backgroundImage:'url('+ cover +')'}"></div>
		</avatar-item>

		<comment :zan="zan"
		         :comments="comments">

		</comment>
	</box>
</template>

<style>

</style>

<script>
import box from '../container/boxWithBorder.vue'
import avatarItem from '../item/avatarItem.vue'
import comment from '../item/commentItem.vue'

export default {
	components: {
		box,
		avatarItem,
		comment
	},
	props: {
		title: {
			type: String
		},
		content: {
			type: String
		},
		headImgUrl: {
			type: String
		},
		zan: {
			type: Number
		},
		comments: {
			type: Number
		},
		cover: {
			type: String
		}
	}
}
</script>