<template>
	<card :type="type" >
		<cl top right :type="type"
		    :height="25"
		    :width="73">
			{{label}}
		</cl>

		<div v-link="{name:'sign',params:{id:1}}">
			<h4>{{title}}</h4>
			<p>{{state}}</p>
			<p>{{content}}</p>
			<div class="mz-photo" :style="{backgroundImage:'url('+ url +')' }">
			</div>
		</div>

		<comment :zan="zan"
					   :comments="comments"
		         :activity-id="activityId"
		         :sign-id="signId">
		</comment>
	</card>
</template>

<style>
	.mz-card .mz-photo{
		height: 141px;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

<script>
import card from '../../components/container/boxWithBottomShadow.vue'
import cl from '../../components/label/cardLabel.vue'
import comment from '../../components/item/commentItem.vue'

export default{
	components: {
		card,
		cl,
		comment
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