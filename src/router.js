/**
 * Created by Alex on 16/8/4.
 */

import index from './views/index/index.vue'
import dynamic from './views/index/dynamics.vue'
import mysign from './views/index/mysign.vue'
import billboard from './views/me/billboard.vue'
import book from './views/sign/index.vue'
import center from './views/me/index.vue'
import info from './views/me/info.vue'
import sign from './views/sign/sign.vue'
import timeline from './views/me/activityTimeline.vue'
import update from './components/Dialog/UpdateChildInfo.vue'
import userUpdate from './components/alterInfo/userInfoModify.vue'
import upload from './views/sign/upload.vue'
import comment from './views/sign/comment.vue'
import publish from './views/sign/publish.vue'
import sharePage from './views/share/share.vue'

module.exports = function (router) {
	router.map({
		'/': {
			name: 'index',
			component: index,
			subRoutes: {
				'/': {
					name: 'dynamics',
					component: dynamic,
					title: '一周动态'
				},
				'/mysign': {
					name: 'mysign',
					component: mysign,
					title: '我的打卡'
				}
			}
		},
		'/billboard': {
			name: 'billboard',
			component: billboard,
			title:'排行榜'
		},
		'/item/:id/book': {
			name: 'book',
			component: book
		},
		'/item/:id/sign':{
			name: 'sign',
			component: sign
		},
		'/center': {
			name:'center',
			component: center,
			title: '我'
		},
		'/info/edit': {
			name: 'info',
			component: info,
			title: '个人资料'
		},
		'/info/updateInfo': {
			name: 'update',
			component: update
		},
		'/info/updateuserInfo': {
			name: 'userUpdate',
			component: userUpdate
		},
		'/item/:id/timeline': {
			name:'timeline',
			component: timeline
		},
		'/item/:id/upload':{
			name:'upload',
			component: upload,
			title: '上传图证'
		},
		'/sign/:activityId/:signId/comment':{
			name:'comment',
			component: comment,
			title: '评论'
		},
		'/sign/:activityId/:signId/publish':{
			name:'publish',
			component: publish,
			title:'发表评论'
		},
		'/sign/:activityId/:signId': {
			name: 'share',
			component: sharePage
		}
	})

	router.redirect({
		'*': '/'
	})

	
	// router.beforeEach(transition => {
	// 	dynamicTitle(transition.to.title || document.title)
	// 	transition.next()
	// });
}


// var dynamicTitle = function (title) {
// 	document.title = title;
// 	var iframe = document.createElement("iframe");
// 	iframe.style.display = "none";
// 	iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
// 	var d = function() {
// 		setTimeout(function() {
// 			iframe.removeEventListener('load', d);
// 			document.body.removeChild(iframe);
// 		}, 0);
// 	};
// 	iframe.addEventListener('load', d);
// 	document.body.appendChild(iframe);
// }