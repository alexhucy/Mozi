<template>
	<card type="success">
		<div style="padding: 15px 15px 0">
			<avatar-item :avatar-url="headImgUrl" v-link="{name:'book',params:{id:id}}">
				<h4>{{title}}</h4>
				<icon-item>活动时间: {{timeRange}}</icon-item>
				<!--<icon-item>每人交保证金: {{money}}</icon-item>-->
				<icon-item>报名截至时间: {{lastTime}}</icon-item>
				<icon-item>已报名人数: {{number}}人</icon-item>
			</avatar-item>

			<recommend-item v-if="course">
				<div slot="title">
					相关教程:
				</div>
				<div slot="container">
					<span v-html="course"></span>
				</div>
			</recommend-item>
		</div>
	</card>
</template>

<style>

</style>

<script>
import card from '../../components/container/boxWithBottomShadow.vue'
import avatarItem from '../../components/item/avatarItem.vue'
import iconItem from '../../components/item/iconItem.vue'
import recommendItem from '../../components/item/recommend.vue'

export default {
	components: {
		card,
		avatarItem,
		iconItem,
		recommendItem
	},
	props: {
		headImgUrl: String,
		title: String,
		timeRange: String,
		lastTime: String,
		number: Number,
		money: Number,
		course: String,
		id: Number
	}
}
</script>
