/**
 * Created by Alex on 16/8/21.
 */

import {
	userResource,
	weixinJSSDKResource,
	childResource,
	userupResource,
	childUpdateResource,
	deleteChildInfoResource,
	alterChildInfoResource
}
from './resourse'

export default{
	API_GET_USER_INFO: function () {
		return userResource.get()
	},
	API_GET_JSSDK_CONFIG: function (debug, jsApiList) {
		return weixinJSSDKResource.save({ debug: debug, jsApiList: jsApiList })
	},
	API_GET_CHILD_INFO: function () {
		return childResource.get()
	},
	API_GET_USER_UP: function () {
		return userupResource.get()
	},
	API_POST_USER_UPDATE: function (nickname,gender,birthday,avatar) {
		return childUpdateResource.save({nickname: nickname,gender: gender,birthday: birthday,avatar: avatar})
	},
	API_POST_ALTER_CHILD_INFO: function (id) {
		console.log(id)
		return alterChildInfoResource.save({id: id},{})
	},
	API_DELETE_CHILD_INFO: function (id) {
		return deleteChildInfoResource.delete({id: id})
	}
}
