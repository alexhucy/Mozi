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
