<template>
	<div v-if="loading" class="mz-loading">
		<spinner type="dots" ></spinner>
	</div>
	<div  v-if="error" class="mz-error-line">
		<a href="javascript:;" @click="OnRefresh">网络异常,点击刷新</a>
	</div>

	<div  v-if="empty" class="mz-error-line">
		<p class="text-center">暂无相关内容~</p>
	</div>
</template>

<style>
.mz-loading{
	margin: 40px 0;
	text-align: center;
}
.mz-error-line{
	text-align: center;
	margin: 10px 0;
}
.mz-error-line a{
	color: #333;
}
</style>

<script>
import spinner from '../../../node_modules/vux/dist/components/spinner/index'

export default{
	components: {
		spinner
	},
	data: function () {
		return {
			loading: false,
			error: false,
			empty: false
		}
	},
	methods: {
		OnError: function () {
			this.error = true
			this.empty = false
			this.loading = false
		},
		OnEmpty: function () {
			this.error = false
			this.empty = true
			this.loading = false
		},
		OnHide: function () {
			this.error = false
			this.empty = false
			this.loading = false
		},
		OnLoading: function () {
			this.error = false
			this.empty = false
			this.loading = true
		},
		OnRefresh: function () {
			this.$emit('on-refresh')
		}
	}
}
</script>