<template>
	<div class="mz-photo-preview" v-if="src">
		<img :src="src.replace('/media','/thumb')" @click.stop="preview(src)" class="mz-photo">
	</div>
</template>

<style>
.mz-photo{
	max-height: 100px;
	max-width: 100px;
}
.mz-photo-preview{
	margin-top:10px;
	height: 100px;
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