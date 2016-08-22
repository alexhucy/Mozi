/**
 * Created by Alex on 16/8/21.
 */


import store from '../store'

export function getUserInfo () {
	return store.state.user.userInfo
}

