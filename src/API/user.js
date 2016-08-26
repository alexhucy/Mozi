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
	alterChildInfoResource,
	alterUserInfo_first,
	alterUserInfo_second
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
	API_POST_ALTER_CHILD_INFO: function (id, nickname, gender, birthday, avatar) {
		return alterChildInfoResource.save({id: id},{nickname: nickname,gender: gender,birthday: birthday,avatar: avatar})
	},
	API_DELETE_CHILD_INFO: function (id) {
		return deleteChildInfoResource.delete({id: id})
	},
	API_PATCH_ALTER_USER_INFO_FIRST: function (data) {
		return alterUserInfo_first.save({},data)
	},
	API_PATCH_ALTER_USER_INFO_SECOND: function (location, gender) {
		return alterUserInfo_second.save({location: location, gender: gender})
	}

}
