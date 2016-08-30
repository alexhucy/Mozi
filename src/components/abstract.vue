<template>
	<div>
		<router-view></router-view>
	</div>

	<!--&lt;!&ndash;loading&ndash;&gt;-->
	<!--<loading :show.sync="showLoadingLayer" :text="loadingMessage"></loading>-->

	<!--&lt;!&ndash;操作成功通知&ndash;&gt;-->
	<!--<toast :show.sync="showToastLayer">{{toastMessage}}</toast>-->

	<!--&lt;!&ndash;确认&ndash;&gt;-->
	<!--<confirm :show.sync="showConfirmLayer"></confirm>-->

	<!--&lt;!&ndash;主要用户通知失败事件&ndash;&gt;-->
	<!--<alert :show.sync="showAlertLayer"></alert>-->
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
import {userInfoQuery,userUpInfoQuery,childInfoQuery} from '../vuex/actions/userAction'
import {jssdkConfigInit} from '../service/weixinService'
import loading from '../../node_modules/vux/dist/components/loading/index'
import alert from '../../node_modules/vux/dist/components/loading/index'
import toast from '../../node_modules/vux/dist/components/toast/index'
import confirm from '../../node_modules/vux/dist/components/confirm/index'

export default{
	store: store,
	vuex: {
		actions:{
			userInfoQuery,
			userUpInfoQuery,
			childInfoQuery
		}
	},
	ready: function () {
		this.userInfoQuery()
		jssdkConfigInit(false,['uploadImage','chooseImage','previewImage'])
		this.childInfoQuery()
		this.userUpInfoQuery()
	},
	data: function () {
		return {
			showLoadingLayer: false,
			showToastLayer: false,
			showConfirmLayer: false,
			showAlertLayer: false,
			loadingMessage: '',
			toastMessage: '',
		}
	}
}
</script>