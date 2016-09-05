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
</script>