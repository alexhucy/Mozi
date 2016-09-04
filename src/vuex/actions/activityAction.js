/**
 * Created by Alex on 16/8/19.
 */
import activity from '../../API/activity'
import * as types from '../mutation-types'

export const activityListQuery = function ({ dispatch }) {
	return activity.API_GET_ACTIVITY_LIST().then(function (data) {
		dispatch(types.GET_ACTIVITY_LIST, data)
	})
}

export const activityQuery = function ({ dispatch }, id) {
	return activity.API_GET_ACTIVITY(id).then(function (data) {
		dispatch(types.GET_ACTIVITY_INFO, data)
	})
}

export const activitySignListQuery = function ({ dispatch }, id) {
	return activity.API_GET_SIGN_LIST(id).then(function (data) {
		dispatch(types.GET_ACTIVITY_SIGN_LIST, data)
	})
}

export const activityMessageQuery = function ({dispatch}, activityId, signId) {
	return activity.API_GET_MESSAGE_LIST(activityId, signId).then(function (data) {
		dispatch(types.GET_ACTIVITY_MESSAGE_LIST, data)
	})
}

export const activityOngoingListQuery = function ({dispatch}) {
	return activity.API_GET_ONGOING_ACTIVITY_LIST().then(function (data) {
		dispatch(types.GET_ONGOING_ACTIVITY_LIST, data)
	})
}

export const activityCompletedInfoQuery = function ({dispatch}, id) {
	return activity.API_GET_COMPLETED_ACTIVITY(id).then(function (data) {
		dispatch(types.GET_COMPLETED_ACTIVITY_INFO, data)
	})
}

export const activityCompletedTimeLineQuery = function ({dispatch}, id) {
	return activity.API_GET_COMPLETED_ACTIVITY_TIMELINE(id).then(function (data) {
		dispatch(types.GET_COMPLETED_ACTIVITY_TIMELINE, data)
	})
}

export const recordQuery = function ({ dispatch }, activity_id) {
	return activity.API_RECORD(activity_id).then(function (data) {
		dispatch(types.GET_RECORD, data)
	})
}

export const setSignInfo = function ({dispatch}, info) {
	dispatch(types.SET_SIGN_INFO, info)
}

export const unshiftSigninfo = function ({dispatch},signInfo) {
	dispatch(types.UNSHIFT_SIGN_INFO, signInfo)
}

export const setLastActivityBookInfo = function ({dispatch}, activity, signList) {
	dispatch(types.SET_LAST_ACTIVITY_BOOK_INFO, activity, signList)
}

export const setLastActivitySignInfo = function ({dispatch}, activity, signList) {
	dispatch(types.SET_LAST_ACTIVITY_SIGN_INFO, activity, signList)
}

export const setLastCommentInfo = function ({dispatch},sign, commentList, activityId, signId) {
	dispatch(types.SET_LAST_COMMENT_INFO, sign, commentList, activityId, signId)
}


export const pushLastCommentSign = function ({dispatch}, info) {
	dispatch(types.PUSH_LAST_COMMENT_SIGN_INFO, info)
}

export const rankListQuery = function ({ dispatch }) {
	return activity.API_GET_RANK_LIST().then(function (data) {
		dispatch(types.GET_RANK_LIST, data)
	})
}

export const getcompletedActivityListQuery = function ({dispatch}, data) {
	return activity.API_GET_COMPLETED_ACTIVITY_LIST().then(function (data) {
		dispatch(types.GET_COMPLETED_ACTIVITY_LIST, data)
	})
}