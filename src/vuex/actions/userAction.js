/**
 * Created by Alex on 16/8/21.
 */

import user from '../../API/user'
import * as types from '../mutation-types'


export const userInfoQuery = function ({ dispatch}) {
	return user.API_GET_USER_INFO().then(function (data) {
		dispatch(types.GET_USER_INFO, data)
	})
}

export const childInfoQuery = function ({ dispatch }) {
	return user.API_GET_CHILD_INFO().then(function (data) {
		dispatch(types.GET_CHILD_INFO, data)
	})
}

export const userUpInfoQuery = function ({ dispatch }) {
	return user.API_GET_USER_UP().then(function (data) {
		dispatch(types.GET_USER_UP, data)
	})
}

export const childUpdateQuery = function ( { dispatch }, nickname, gender, birthday, avatar) {
	return user.API_POST_USER_UPDATE(nickname, gender, birthday, avatar).then(function (data) {
		dispatch(types.POST_CHILD_UPDATE, data)
	})
}

export const alterChildInfoQuery = function ({ dispatch }, id, nickname, gender, birthday, avatar) {
	return user.API_POST_ALTER_CHILD_INFO(id, nickname, gender, birthday, avatar).then(function (data) {
		dispatch(types.POST_ALTER_CHILD_INFO, data)
	})
}

export const deleteChildInfoQuery = function ({ dispatch }, id) {
	return user.API_DELETE_CHILD_INFO(id).then(function (data) {

	})
}

export const alterUserInfoFirstQuery = function ({ dispatch }, data) {
	return user.API_PATCH_ALTER_USER_INFO_FIRST(data).then(function (data) {
	})
}

export const alterUserInfoSecondQuery = function ({ dispatch }, data) {
	return user.API_PATCH_ALTER_USER_INFO_SECOND(data).then(function (data) {
	})
}
