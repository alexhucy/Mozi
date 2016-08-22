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

