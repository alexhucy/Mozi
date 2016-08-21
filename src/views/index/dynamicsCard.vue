<template>
	<card type="success">
		<avatar-item :avatar-url="avatar" v-link="{name:'book',params:{id:id}}">
			<h4>{{title}}</h4>
			<icon-item>活动时间: {{timeRange}}</icon-item>
			<icon-item>每人交保证金: {{money}}</icon-item>
			<icon-item>报名截至时间: {{lastTime}}</icon-item>
			<icon-item>已报名人数: {{number}}人</icon-item>
		</avatar-item>

		<recommend-item>
			<div slot="title">
				相关教程:
			</div>
			<div slot="container">
				<a href="#">{{course}}</a>
			</div>
		</recommend-item>
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
		title: String,
		timeRange: String,
		lastTime: Number,
		number: Number,
		money: Number,
		course: String,
		avatar: String,
		id: Number
	}
}
</script>
