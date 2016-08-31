<template>
	<div>
		<router-view>
		</router-view>
	</div>

	<tips v-ref:tips></tips>
</template>

<style>
	html,body{
		font-size: 10px;
		height: 100%;
		position: relative;
		margin: 0;
		padding: 0;
		background: #fff7e6;
		overflow: hidden;
	}
	@font-face {
		font-family: 'MOZI';
		src: url('/font/icomoon.eot');
		src: url('/font/icomoon.eot?#iefix') format('embedded-opentype'),
		url('/font/icomoon.woff') format('woff'),
		url('/font/icomoon.ttf') format('truetype'),
		url('/font/icomoon.svg#Taidii') format('svg');
		font-weight: normal;
		font-style: normal;
	}

</style>

<script>
import store from '../vuex/store'
import {userUpInfoQuery,childInfoQuery} from '../vuex/actions/userAction'
import {jssdkConfigInit} from '../service/weixinService'
import loading from '../../node_modules/vux/dist/components/loading/index'
import alert from '../../node_modules/vux/dist/components/loading/index'
import toast from '../../node_modules/vux/dist/components/toast/index'
import confirm from '../../node_modules/vux/dist/components/confirm/index'
import tips from '../components/tips/tips.vue'

export default{
	store: store,
	components: {
		tips
	},
	vuex: {
		actions:{
			userUpInfoQuery,
			childInfoQuery
		}
	},
	ready: function () {
		jssdkConfigInit(false,['uploadImage','chooseImage','previewImage'])
		this.childInfoQuery()
		this.userUpInfoQuery()
	},
	events: {
		loading: function (message) {
			this.$refs.tips.toggleLoading(message)
		},

		error: function (message) {
			this.$refs.tips.toggleAlert(message)
		},

		success: function (message) {
			this.$refs.tips.toggleToast(message)
		},

		confirm: function (title, message, callback) {
			this.$refs.tips.setTitle(title)
			this.$refs.tips.toggleConfirm(message, callback)
		}
	}
}
</script>