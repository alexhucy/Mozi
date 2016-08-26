<template>
	<box type = "success">
		<div style="padding: 15px 15px 0">
			<avatar-item :avatar-url="headImgUrl">
				<h4>{{title}}</h4>
				<p>{{content}}</p>
				<image-item :src="cover"></image-item>
			</avatar-item>

		</div>

		<comment :zan="zan"
		         :comments="comments"
		         :activity-id="activityId"
		         :sign-id="signId"
		         :checked="checked"
		         @on-loaded="loaded">
		</comment>
	</box>
</template>

<style>

</style>

<script>
import box from '../container/boxWithBorder.vue'
import avatarItem from '../item/avatarItem.vue'
import comment from '../item/commentItem.vue'
import imageItem from '../../components/Image/Image.vue'

export default {
	components: {
		box,
		avatarItem,
		comment,
		imageItem
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
		},
		activityId: {
			type: Number
		},
		signId: {
			type: Number
		},
		checked: {
			type: Boolean
		}
	},

	methods: {
		loaded: function () {
			this.$emit('on-loaded')
		}
	}
}
</script>