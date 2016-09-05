<template>
	<div class="mz-timeline-box">
		<div>
			<span class="mz-label-time mz-text-center" v-html="date.replace(' ','</br>')"></span>
		</div>
		<div class="mz-timeline-card">
			<p v-html="title| newLine"></p>
			<image-item :src="url"></image-item>
			<comment :zan="zan"
			         :comments="comments"
			         :activity-id="activityId"
			         :sign-id="signId"
							 :checked="checked"
								@on-loaded="loaded">
			</comment>
		</div>
	</div>
</template>

<style>
.mz-timeline-box{
	background: #fff;
	position:relative;
	padding: 0 10px ;
	display: flex;
}
.mz-timeline-card{
	padding: 10px 0  10px 15px;
	flex:1;
}
.mz-timeline-box:before{
	content: '';
	position: absolute;
	top:  0;
	bottom: 0;
	left: 50px;
	width: 1px;
	background: #72e4dc;
}
.mz-label-time{
	z-index:99;
	background: #fff;
	width: 80px;
	display: inline-block;
	word-break: break-all;
	position: relative;
}
.mz-timeline-card h4{
	font-size: 1.6rem;
}

</style>

<script>
import comment from '../../components/item/commentItem.vue'
import imageItem from '../../components/Image/Image.vue'

export default{
	components: {
		comment,
		imageItem
	},
	props:{
		title: String,
		date: String,
		url: String,
		zan: Number,
		comments: Number,
		signId: Number,
		activityId: Number,
		checked: Boolean
	},
	methods: {
		loaded: function () {
			this.$emit('on-loaded')
		}
	}
}
</script>