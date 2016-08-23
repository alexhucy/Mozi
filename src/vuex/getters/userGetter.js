/**
 * Created by Alex on 16/8/21.
 */


import store from '../store'

export function getUserInfo () {
	return store.state.user.userInfo
}

export function getChildInfo() {
	return store.state.user.childInfo
}

export function getUserUpInfo() {
	return store.state.user.userUpInfo
}

export function postChildUpdate() {
	return store.state.user.childUpdate
}

export function postAlterChildInfo() {
	return store.state.user.alterChildInfo
}