<template>
	<div class="mz-text-center mz-photo-preview" v-if="src">
		<img :src="src" @click.stop="preview(src)" class="mz-photo">
	</div>
</template>

<style>
.mz-photo{
	max-width: 200px;
	max-height: 200px;
}
.mz-photo-preview{
	margin-top:10px;
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