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
import test from './views/text.vue'


import store from './vuex/store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/',0)

const commit = store.commit || store.dispatch

module.exports = function (router) {
	router.map({
		'/': {
			name: 'index',
			component: index,
			subRoutes: {
				'/': {
					name: 'dynamics',
					component: dynamic,
				},
				'/mysign': {
					name: 'mysign',
					component: mysign,
				}
			}
		},
		'/billboard': {
			name: 'billboard',
			component: billboard,
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
		},
		'/item/:id/upload':{
			name:'upload',
			component: upload
		},
		'/sign/:activityId/:signId/comment':{
			name:'comment',
			component: comment
		},
		'/sign/:activityId/:signId/publish':{
			name:'publish',
			component: publish
		},
		'/test':{
			name:'test',
			component: test
		}
	})

	router.redirect({
		'*': '/'
	})
	router.beforeEach( function({to, from, next}){
		console.log('1')
		const toIndex = history.getItem(to.path)
		const fromIndex = history.getItem(from.path)
		if (toIndex) {
			if (toIndex > fromIndex) {
				commit('UPDATE_DIRECTION', 'forward')
			} else {
				commit('UPDATE_DIRECTION', 'reverse')
			}
		} else {
			++historyCount
			history.setItem('count', historyCount)
			to.path !== '/' && history.setItem(to.path, historyCount)
			commit('UPDATE_DIRECTION', 'forward')
		}
		setTimeout(next, 50)
	})
}