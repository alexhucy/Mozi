<template>
	<div v-for="a in list">
		{{a}}
	</div>
</template>

<style>

</style>

<script>
var list = []
for(var a = 0;a<100; a++){
	list.push(a)
}
export default{
	data: function () {
		return {
			list: list
		}
	}
}

"[{'date':'2016-09-20', 'detail':[{'time':'10 am ~ 14pm', 'speaker':'teacher A'}]},{'date':'2016-09-20', 'detail':[{'time':'10 am ~ 14pm', 'speaker':'teacher B'}, {'time':'12 am ~ 15pm', 'speaker':'teacher C'}]"
</script>