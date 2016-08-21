/**
 * Created by Alex on 16/8/19.
 */
import activity from '../../API/activity'
import * as types from '../mutation-type'

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

export const signListQuery = function ({ dispatch }, id) {
	return activity.API_GET_SIGN_LIST(id).then(function (data) {
		dispatch(types.GET_SIGN_LIST, data)
	})
}

export const signUpQuery = function ({ dispatch }, id) {
	return activity.API_GET_SIGN_UP(id).then(function (data) {
		dispatch(types.GET_SIGN_UP, data)
	})
}

export const signInQuery = function ({ dispatch }, id) {
	return activity.API_POST_SIGN(id).then(function (data) {
		dispatch(types.POST_SIGN_IN, data)
	})
}

export const agreeQuery = function ({ dispatch }, id, signin_id) {
	return activity.API_GET_AGREE(id, signin_id).then(function (data) {
		dispatch(types.GET_AGREE, data)
	})
}

export const messageQuery = function ({ dispatch }, id, signin_id) {
	return activity.API_POST_MESSAGE(id, signin_id).then(function (data) {
		dispatch(types.POST_MESSAGE, data)
	})
}

export const messageListQuery = function ({ dispatch }, id, signin_id) {
	return activity.API_GET_MESSAGE_LIST(id, signin_id).then(function (data) {
		dispatch(types.GET_MESSAGE_LIST, data)
	})
}