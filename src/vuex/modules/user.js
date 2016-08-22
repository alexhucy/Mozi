/**
 * Created by Alex on 16/8/21.
 */

import {
	GET_USER_INFO,
	GET_CHILD_INFO,
	GET_USER_UP
} from '../mutation-types'

const state = {
	userInfo: {},
	childInfo: [],
	userUpInfo: {}
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
	}
}

export default{
	state,
	mutations
}
