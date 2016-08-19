<template>
	<card label="今日已打卡"
				type="ready"
				title="任务一:连续12天打卡计划"
				content="坚持阅读12天,今天收获满满的,非常充实的一天!"
				:zan="12"
				:comments="123"
				url="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png">
	</card>

	<card label="任务失败"
	      type="failed"
	      title="任务一:连续12天打卡计划"
	      content="坚持阅读12天,今天收获满满的,非常充实的一天!"
	      :zan="12"
	      :comments="123"
	      url="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png">
	</card>

	<card label="任务完成"
	      type="complete"
	      title="任务一:连续12天打卡计划"
	      content="坚持阅读12天,今天收获满满的,非常充实的一天!"
	      :zan="12"
	      :comments="123"
	      url="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png">
	</card>
</template>

<script>
import card from './signCard.vue'

export default {
	components: {
		card
	}
}
</script>