/**
 * Created by Alex on 16/8/19.
 */
import {GET_ACTIVITY_INFO,GET_ACTIVITY_LIST} from '../mutation-type'

const state = {
	activitylist: [],
	activity: {}
}

const mutations = {
	//近期活动列表
	[GET_ACTIVITY_LIST] (state, list) {
		state.activitylist = list.data.list
	},
	[GET_ACTIVITY_INFO] (state, activity) {
		state.activity = activity.data
	}
}

export default {
	state,
	mutations
}