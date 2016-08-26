<template>
	<div>
		<router-view
		>
		</router-view>
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
	/**
* vue-router transition
*/
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
import {userInfoQuery,userUpInfoQuery,childInfoQuery} from '../vuex/actions/userAction'
import {jssdkConfigInit} from '../service/weixinService'

export default{
	store: store,
	vuex: {
		actions:{
			userInfoQuery,
			userUpInfoQuery,
			childInfoQuery
		},
		getters: {
			direction: (state) => state.direction
		}
	},
	ready: function () {
		this.userInfoQuery()
		jssdkConfigInit(false,['uploadImage','chooseImage','previewImage'])
		this.childInfoQuery()
		this.userUpInfoQuery()
	}
}
</script>