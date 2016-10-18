<template>
	<div>

		<router-view>
		</router-view>

		<tips v-ref:tips></tips>

		<!--<div class="mz-popularize" v-if="pop">-->
				<!--<div style="height: 50px;opacity: 0.7;background: #000"></div>-->
					<!--<span class="mz-close" @click="hide"></span>-->
				<!--<div style="position: absolute;top: 0;color:#fff;line-height: 50px;padding: 0 10px;">-->
					<!--<img src="http://ww4.sinaimg.cn/small/006tNc79gw1f74mcjfukij30hs0hs3zq.jpg" width="30" height="30"-->
					     <!--style="margin-right: 10px;vertical-align: middle ">-->
					<!--关注'漠子家'公众号，更多内容等你来看~-->
				<!--</div>-->

		<!--</div>-->
	</div>
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
		src: url('/sign/font/icomoon.eot');
		src: url('/sign/font/icomoon.eot?#iefix') format('embedded-opentype'),
		url('/sign/font/icomoon.woff') format('woff'),
		url('/sign/font/icomoon.ttf') format('truetype'),
		url('/sign/font/icomoon.svg#Taidii') format('svg');
		font-weight: normal;
		font-style: normal;
	}
	.mz-popularize{
		position: absolute;
		z-index:999999;
		bottom: 0;
		height: 50px;
		left: 0;
		right: 0;
	}
	.mz-close{
		position: absolute;
		top: 10px;
		right: 15px;
	}
	.mz-close:after{
		content: '';
		position: absolute;
		height: 1px;
		width: 15px;
		top: 50%;
		left: 0;
		background: #98979d;
		transform: rotate(45deg);
	}
	.mz-close:before{
		content: '';
		position: absolute;
		height: 1px;
		width: 15px;
		top: 50%;
		left: 0;
		background: #98979d;
		transform: rotate(-45deg);
	}
	/*.vux-pop-out-transition,*/
	/*.vux-pop-in-transition {*/
		/*width: 100%;*/
		/*animation-duration: 0.5s;*/
		/*animation-fill-mode: both;*/
		/*backface-visibility: hidden;*/
	/*}*/
	/*.vux-pop-out-enter,*/
	/*.vux-pop-out-leave,*/
	/*.vux-pop-in-enter,*/
	/*.vux-pop-in-leave {*/
		/*will-change: transform;*/
		/*height: 100%;*/
		/*position: absolute;*/
		/*left: 0;*/
	/*}*/
	/*.vux-pop-out-enter {*/
		/*animation-name: popInLeft;*/
	/*}*/
	/*.vux-pop-out-leave {*/
		/*animation-name: popOutRight;*/
	/*}*/
	/*.vux-pop-in-enter {*/
		/*perspective: 1000;*/
		/*animation-name: popInRight;*/
	/*}*/
	/*.vux-pop-in-leave {*/
		/*animation-name: popOutLeft;*/
	/*}*/
	/*@keyframes popInLeft {*/
		/*from {*/
			/*transform: translate3d(-100%, 0, 0);*/
		/*}*/
		/*to {*/
			/*transform: translate3d(0, 0, 0);*/
		/*}*/
	/*}*/
	/*@keyframes popOutLeft {*/
		/*from {*/
			/*transform: translate3d(0, 0, 0);*/
		/*}*/
		/*to {*/
			/*transform: translate3d(-100%, 0, 0);*/
		/*}*/
	/*}*/
	/*@keyframes popInRight {*/
		/*from {*/
			/*transform: translate3d(100%, 0, 0);*/
		/*}*/
		/*to {*/
			/*transform: translate3d(0, 0, 0);*/
		/*}*/
	/*}*/
	/*@keyframes popOutRight {*/
		/*from {*/
			/*transform: translate3d(0, 0, 0);*/
		/*}*/
		/*to {*/
			/*transform: translate3d(100%, 0, 0);*/
		/*}*/
	/*}*/
</style>

<script>
import store from '../vuex/store'
import {userUpInfoQuery,childInfoQuery} from '../vuex/actions/userAction'
import {getDirection} from '../vuex/getters/activityGetter'
import {jssdkConfigInit, share} from '../service/weixinService'
import loading from '../../node_modules/vux/dist/components/loading/index'
import alert from '../../node_modules/vux/dist/components/loading/index'
import toast from '../../node_modules/vux/dist/components/toast/index'
import confirm from '../../node_modules/vux/dist/components/confirm/index'
import tips from '../components/tips/tips.vue'
import Cookie from '../../node_modules/react-cookie'
import masker from '../../node_modules/vux/dist/components/masker'

export default{
	store: store,
	components: {
		tips,
		loading,
		masker
	},
	vuex: {
		actions:{
			userUpInfoQuery,
			childInfoQuery
		},
		getters: {
			direction: getDirection
		}
	},
	data: function () {
		return {
			pop:false
		}
	},
	ready: function () {
		jssdkConfigInit(false,['uploadImage','chooseImage','previewImage','onMenuShareTimeline','onMenuShareAppMessage'], function () {
			share('打卡','天天打卡，积分领不停！','', 'http://ww4.sinaimg.cn/small/006tNc79gw1f74mcjfukij30hs0hs3zq.jpg')
		})
		this.userUpInfoQuery()
		var subscribe = Cookie.load('Subscribe')
		if(!subscribe)this.pop = true
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
	},
	methods:{
		hide: function () {
			this.pop = false
		}
	}
}
</script>