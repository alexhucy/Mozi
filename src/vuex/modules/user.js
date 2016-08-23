/**
 * Created by Alex on 16/8/21.
 */

import {
	GET_USER_INFO,
	GET_CHILD_INFO,
	GET_USER_UP,
	POST_CHILD_UPDATE,
	POST_ALTER_CHILD_INFO
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
		state.userUpInfo = data.data
	},
	[POST_CHILD_UPDATE] (state, data) {
		state.childUpdate = data.data
	},
	[POST_ALTER_CHILD_INFO] (state, data) {
		state.alterChildInfo = data.data
	}
}

export default{
	state,
	mutations
}
