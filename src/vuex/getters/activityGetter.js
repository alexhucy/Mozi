/**
 * Created by Alex on 16/8/19.
 */
import store from '../store'

export function getActivityList() {
	return store.state.activity.activitylist
}

export function getActivityInfo() {
	console.log(store.state.activity.activity)
	return store.state.activity.activity
}

export function getSignList() {
	return store.state.activity.signlist
}

export function getSignUp() {
	return store.state.activity.signup
}

export function postSignIn() {
	return store.state.activity.signin
}