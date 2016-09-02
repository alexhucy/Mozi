<template>
	<box type = "success">
		<div v-link="{name:'timeline',params:{id:activityId}}" style="padding: 15px 30px 0">
			<h4>{{title}}</h4>
			<p v-html="content|newLine"></p>
			<image-item :src="cover"></image-item>
		</div>
		<comment :zan="zan"
		         :comments="comments"
		         :activity-id="activityId"
		         :sign-id="signId"
		         :checked="checked"
							@on-loaded="loaded"
							:date="date">

		</comment>
	</box>
</template>

<style>

</style>

<script>
import box from '../container/boxWithBorder.vue'
import comment from '../item/commentItem.vue'
import imageItem from '../Image/Image.vue'

export default {
	components: {
		box,
		comment,
		imageItem
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
		},
		checked: {
			type: Boolean
		},
		date: {
			type: String
		}
	},
	methods: {
		loaded: function () {
			this.$emit('on-loaded')
		}
	}
}
</script>