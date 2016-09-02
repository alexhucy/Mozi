<template>
	<div class="mz-photo-preview" v-if="src">
		<img :src="src" @click.stop="preview(src)" class="mz-photo">
	</div>
</template>

<style>
.mz-photo{
	max-height: 200px;
	max-width: 200px;
}
.mz-photo-preview{
	margin-top:10px;
	height: 200px;
}
</style>

<script>
export default{
	props:{
		src: String
	},
	methods: {
		preview: function (url) {
			window.wx.previewImage({
				current: url,
				urls: [url]
			});
		}
	}
}
</script>