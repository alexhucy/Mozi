<template>

	<!--提示框 start-->
	<alert :show.sync="alertLayer" button-text="知道了" :title="title">{{alertMessage}}</alert>

	<loading :show="loadingLayer" text="数据提交中"></loading>

	<toast :show.sync="toastLayer">{{toastMessage}}</toast>

	<confirm :show.sync="confirmLayer" cancel-text="取消" confirm-text="确定" :title="title" @on-confirm="confirm">{{confirmMessage}}</confirm>
	<!--提示框 end-->

</template>

<style>

</style>

<script>
import alert from '../../../node_modules/vux/dist/components/alert/index'
import loading from '../../../node_modules/vux/dist/components/loading/index'
import toast from '../../../node_modules/vux/dist/components/toast/index'
import confirm from '../../../node_modules/vux/dist/components/confirm/index'

export default{
	components: {
		alert,
		loading,
		toast,
		confirm
	},
	data: function () {
		return {
			toastMessage: '',       //提示信息(成功)
			alertMessage: '',    //提示信息(失败)
			confirmMessage: '',  //确认信息
			confirmLayer: false, //确认框
			alertLayer: false,   //提示框(失败)
			toastLayer: false,   //提示框(成功)
			loadingLayer: false,  //loading
			title: '',
			confirm: {}
		}
	},
	methods: {
		toggleAlert: function (message) {
			this.alertMessage = message
			this.alertLayer = !this.alertLayer
		},
		toggleConfirm: function (message,callback) {
			this.confirmMessage = message
			this.confirmLayer = !this.confirmLayer
			this.confirm = callback
		},
		toggleToast: function (message) {
			this.toastMessage = message
			this.toastLayer = !this.toastLayer
		},
		toggleLoading: function () {
			this.loadingLayer = !this.loadingLayer
		},
		setTitle: function (title) {
			this.title = title
		}
	}
}
</script>