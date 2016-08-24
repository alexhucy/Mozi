<template>
	<card :type="type" >

		<div v-link="{name:'sign',params:{id:activityId}}" style="padding: 25px 30px 0;">
			<cl top right :type="type"
			    :height="25"
			    :width="73">
				{{label}}
			</cl>
			<h4>{{title}}</h4>
			<p>{{state}}</p>
			<p>{{content}}</p>
			<image-item :src="url"></image-item>
		</div>

		<comment :zan="zan"
					   :comments="comments"
		         :activity-id="activityId"
		         :sign-id="signId">
		</comment>
	</card>
</template>

<style>
.mz-photo{
		max-width: 200px;
		max-height: 200px;
}
.mz-text-center{
	text-align: center;
}
</style>

<script>
import card from '../../components/container/boxWithBottomShadow.vue'
import cl from '../../components/label/cardLabel.vue'
import comment from '../../components/item/commentItem.vue'
import imageItem from '../../components/Image/Image.vue'

export default{
	components: {
		card,
		cl,
		comment,
		imageItem
	},
	props: {
		label: String,
		type: String,
		title: String,
		content: String,
		zan: Number,
		comments: Number,
		url: String,
		state: String,
		activityId: Number,
		signId: Number
	}
}
</script>