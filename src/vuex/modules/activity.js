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
	GET_ONGOING_ACTIVITY_LIST,
	GET_COMPLETED_ACTIVITY_INFO,
	GET_COMPLETED_ACTIVITY_TIMELINE,
	GET_RECORD,
	SET_SIGN_INFO,
  UNSHIFT_SIGN_INFO,
	SET_LAST_ACTIVITY_BOOK_INFO,
	SET_LAST_ACTIVITY_SIGN_INFO,
	SET_LAST_COMMENT_INFO,
	PUSH_LAST_COMMENT_SIGN_INFO
} from '../mutation-types'

const state = {
	activityList: [],
	activity: {},
	signList: [],
	messageList: [],
	onGoingActivityList: [],
	completedActivity: {},
	timeline: [],
	record: {},
	sign: {},
	lastActivityBookInfo: {},
	lastActivityBookSignList: [],
	lastActivityBookId: -1,
	lastActivitySignInfo: {},
	lastActivitySignList: [],
	lastActivitySignId: -1,
	lastCommentSignInfo: {}
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
		
	},
	[GET_ONGOING_ACTIVITY_LIST](state, list){
		state.onGoingActivityList = list.data.list
	},
	[GET_COMPLETED_ACTIVITY_INFO](state, list){
		state.completedActivity = list.data
	},
	[GET_COMPLETED_ACTIVITY_TIMELINE](state, list){
		state.timeline = list.data.list
	},
	[GET_RECORD](state, record){
		state.record = record.data
	},
	[SET_SIGN_INFO](state,info){
		state.sign = info
	},
	[UNSHIFT_SIGN_INFO](state,info){
		state.onGoingActivityList.forEach(function (activity) {
			if(activity.activity_id === info.activity_id){
				info.signin_status = 1
				info.activity_title = activity.activity_title
				var index = state.onGoingActivityList.indexOf(activity)
				state.onGoingActivityList.$set(index, info)
			}
		})
	},
	[SET_LAST_ACTIVITY_BOOK_INFO](state, activity, signList){
		state.lastActivityBookInfo = activity
		state.lastActivityBookId = activity.info.activity_id
		state.lastActivityBookSignList = signList
	},
	
	[SET_LAST_ACTIVITY_SIGN_INFO](state, activity, signList){
		state.lastActivitySignInfo = activity
		state.lastActivitySignId = activity.info.activity_id
		state.lastActivitySignList = signList
		state.lastActivitySignInfo = {}
	},
	
	[SET_LAST_COMMENT_INFO](state,sign,commentList, activityId, signId){
		state.lastCommentSignInfo =  {activityId:activityId, signId:signId, sign:sign, commentList: commentList}
	},

	[PUSH_LAST_COMMENT_SIGN_INFO] (state, info){
		state.lastCommentSignInfo.sign.comment_count ++
		state.lastCommentSignInfo.commentList.push(info)
	}
}

export default {
	state,
	mutations
}