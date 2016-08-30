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


module.exports = function (router) {
	router.map({
		'/': {
			name: 'index',
			component: index,
			subRoutes: {
				'/': {
					name: 'dynamics',
					component: dynamic
				},
				'/mysign': {
					name: 'mysign',
					component: mysign
				}
			}
		},
		'/billboard': {
			name: 'billboard',
			component: billboard
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
			component: center
		},
		'/info/edit': {
			name: 'info',
			component: info
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
		}
	})

	router.redirect({
		'*': '/'
	})

}