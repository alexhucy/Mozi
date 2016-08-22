/**
 * Created by Alex on 16/8/21.
 */

import {
	userResource,
	weixinJSSDKResource
}
from './resourse'

export default{
	API_GET_USER_INFO: function () {
		return userResource.get()
	},
	API_GET_JSSDK_CONFIG: function (debug, jsApiList) {
		return weixinJSSDKResource.save({ debug: debug, jsApiList: jsApiList })
	},
}
