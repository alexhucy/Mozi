/**
 * Created by Alex on 16/8/19.
 */
import {GET_ACTIVITY_INFO,GET_ACTIVITY_LIST,GET_SIGN_LIST,GET_SIGN_UP,POST_SIGN_IN,GET_AGREE,POST_MESSAGE,GET_MESSAGE_LIST} from '../mutation-type'

const state = {
	activitylist: [],
	activity: {},
	signlist: {},
	signup: '',
	signin: '',
	agree: {},
	message: {},
	messagelist: {}
}

const mutations = {
	//近期活动列表
	[GET_ACTIVITY_LIST] (state, list) {
		state.activitylist = list.data.list
	},
	[GET_ACTIVITY_INFO] (state, activity) {
		state.activity = activity.data
	},
	[GET_SIGN_LIST] (state, signlist) {
		state.signlist = signlist.data
	},
	[GET_SIGN_UP] (state, signup) {
		state.signup = signup.data
	},
	[POST_SIGN_IN] (state, signin) {
		state.signin = signin.data
	},
	[GET_AGREE] (state, agree) {
		state.agree = agree.data
	},
	[POST_MESSAGE] (state, message) {
		state.message = message.data
	},
	[GET_MESSAGE_LIST] (state, messagelist) {
		state.messagelist = messagelist.data
	}
}

export default {
	state,
	mutations
}