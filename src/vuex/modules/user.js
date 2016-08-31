/**
 * Created by Alex on 16/8/21.
 */

import {
	GET_USER_INFO,
	GET_CHILD_INFO,
	GET_USER_UP,
	POST_CHILD_UPDATE,
	POST_ALTER_CHILD_INFO,
	DELETE_CHILD_INFO
} from '../mutation-types'

const state = {
	userInfo: {},
	childInfo: [],
	userUpInfo: {},
	childUpdate: {},
	alterChildInfo: {}
}

const mutations = {
	// 获取直播视频信息
	[GET_USER_INFO] (state, data) {
		state.userInfo = data.data
	},
	[GET_CHILD_INFO] (state, data) {
		state.childInfo = data.data
	},
	[GET_USER_UP] (state, data) {
		state.userUpInfo = data.data.info
	},
	[POST_CHILD_UPDATE] (state, data) {
		state.childUpdate = data.data
		state.childInfo.push(data.data)
	},
	[POST_ALTER_CHILD_INFO] (state, data) {
		state.alterChildInfo = data.data
		state.childInfo.forEach(function (child) {
			if(child.id === data.data.id){
				var index = state.childInfo.indexOf(child)
				state.childInfo.$set(index, data.data)
			}
		})
	},

	[DELETE_CHILD_INFO] (state, id){
		state.childInfo.forEach(function (child) {
			if(child.id === id){
				var index = state.childInfo.indexOf(child)
				state.childInfo.splice(index, 1)
			}
		})
	}
}

export default{
	state,
	mutations
}
