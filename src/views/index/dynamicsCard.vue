<template>
	<card type="success">
		<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg" v-link="{name:'book',params:{id:1}}">
			<h4>{{title}}</h4>
			<icon-item>活动时间: {{timeRange}}</icon-item>
			<icon-item>每人交保证金: 100元</icon-item>
			<icon-item>报名截至时间: {{lastTime}}</icon-item>
			<icon-item>已报名人数: {{number}}人</icon-item>
		</avatar-item>

		<recommend-item>
			<div slot="title">
				相关教程:
			</div>
			<div slot="container">
				<a href="#">1.如果</a>
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
		lastTime: String,
		number: Number
	}
}
</script>
