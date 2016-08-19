<template>
	<card v-for="item in items" :title="item.title"
				:time-range="item.start_time+' —— '+item.end_time"
				:number="item.signup_number"
		  		:money="item.deposit"
		  		:course="item.course_desc"
	>
	</card>
</template>

<style>

</style>

<script>
import card from './dynamicsCard.vue'
import {getActivityList} from '../../vuex/getters/activityGetter'

export default{
	components:{
		card
	},
	vuex: {
		getters: {
			items: getActivityList
		}
	},
	ready: function () {
	}
}
</script>

