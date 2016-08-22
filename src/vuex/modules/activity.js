/**
 * Created by Alex on 16/8/19.
 */
import {
	GET_ACTIVITY_INFO,
	GET_ACTIVITY_LIST,
	GET_ACTIVITY_SIGN_LIST,
	BOOK_ACTIVITY,
  ZAN_ACTIVITY,
  SIGN_ACTIVITY,
  GET_ACTIVITY_MESSAGE_LIST,
  COMMIT_ACTIVITY_MESSAGE,
} from '../mutation-types'

const state = {
	activityList: [],
	activity: {},
	signList: [],
	messageList: []
}

const mutations = {
	//近期活动列表
	[GET_ACTIVITY_LIST] (state, list) {
		state.activityList = list.data.list
	},
	[GET_ACTIVITY_INFO] (state, activity) {
		state.activity = activity.data
	},
	[GET_ACTIVITY_SIGN_LIST](state, list){
		state.signList = list.data.list
	},
	[BOOK_ACTIVITY](state, list){

	},
	[ZAN_ACTIVITY](state, list){

	},
	[SIGN_ACTIVITY](state, list){

	},
	[GET_ACTIVITY_MESSAGE_LIST](state, list){
		state.messageList = list.data.list
	},
	[COMMIT_ACTIVITY_MESSAGE](state){
		
	}
}

export default {
	state,
	mutations
}