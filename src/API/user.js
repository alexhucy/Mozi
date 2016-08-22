/**
 * Created by Alex on 16/8/21.
 */

import {
	userResource,
	weixinJSSDKResource,
	childResource,
	userupResource,
	childUpdateResource
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
	API_POST_USER_UPDATE: function () {
		return childUpdateResource.save()
	}
}
