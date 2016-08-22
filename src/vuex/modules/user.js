/**
 * Created by Alex on 16/8/21.
 */

import {
	GET_USER_INFO,
} from '../mutation-types'

const state = {
	userInfo: {}
}

const mutations = {
	// 获取直播视频信息
	[GET_USER_INFO] (state, data) {
		state.userInfo = data.data
	}
}

export default{
	state,
	mutations
}
