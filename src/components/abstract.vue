<template>
	<div>

		<router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
					 transition-model="out-in"
		>
		</router-view>

	<tips v-ref:tips></tips>
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
		src: url('/font/icomoon.eot');
		src: url('/font/icomoon.eot?#iefix') format('embedded-opentype'),
		url('/font/icomoon.woff') format('woff'),
		url('/font/icomoon.ttf') format('truetype'),
		url('/font/icomoon.svg#Taidii') format('svg');
		font-weight: normal;
		font-style: normal;
	}
	.vux-pop-out-transition,
	.vux-pop-in-transition {
		width: 100%;
		animation-duration: 0.5s;
		animation-fill-mode: both;
		backface-visibility: hidden;
	}
	.vux-pop-out-enter,
	.vux-pop-out-leave,
	.vux-pop-in-enter,
	.vux-pop-in-leave {
		will-change: transform;
		height: 100%;
		position: absolute;
		left: 0;
	}
	.vux-pop-out-enter {
		animation-name: popInLeft;
	}
	.vux-pop-out-leave {
		animation-name: popOutRight;
	}
	.vux-pop-in-enter {
		perspective: 1000;
		animation-name: popInRight;
	}
	.vux-pop-in-leave {
		animation-name: popOutLeft;
	}
	@keyframes popInLeft {
		from {
			transform: translate3d(-100%, 0, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes popOutLeft {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-100%, 0, 0);
		}
	}
	@keyframes popInRight {
		from {
			transform: translate3d(100%, 0, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes popOutRight {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(100%, 0, 0);
		}
	}
</style>

<script>
import store from '../vuex/store'
import {userUpInfoQuery,childInfoQuery} from '../vuex/actions/userAction'
import {getDirection} from '../vuex/getters/activityGetter'
import {jssdkConfigInit} from '../service/weixinService'
import loading from '../../node_modules/vux/dist/components/loading/index'
import alert from '../../node_modules/vux/dist/components/loading/index'
import toast from '../../node_modules/vux/dist/components/toast/index'
import confirm from '../../node_modules/vux/dist/components/confirm/index'
import tips from '../components/tips/tips.vue'

export default{
	store: store,
	components: {
		tips,
		loading
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