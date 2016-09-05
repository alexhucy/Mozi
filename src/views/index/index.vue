
<template>
	<div>
	<tab>
		<tab-item :selected="$route.name == 'dynamics'" v-link="{name:'dynamics'}">一周活动</tab-item>
		<tab-item :selected="$route.name == 'mysign'" v-link="{name:'mysign'}">我的打卡</tab-item>
	</tab>

	<router-view>
	</router-view>

	<foot></foot>
	</div>
</template>

<style>
 .mz-item h4{
	 font-size: 1.4rem;
 }
</style>

<script>
import tab from '../../../node_modules/vux/dist/components/tab/index'
import tabItem from '../../../node_modules/vux/dist/components/tab-item/index'
import foot from './footer.vue'

export default{
	components:{
		tab,
		tabItem,
		foot
	}
}
</script>