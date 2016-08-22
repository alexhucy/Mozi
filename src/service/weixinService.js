/**
 * Created by Alex on 16/8/21.
 */

import weixin from '../API/user'

export const jssdkConfigInit = function (debug, jsApiList) {
	return weixin.API_GET_JSSDK_CONFIG(debug, jsApiList).then(function (data) {
		window.wx.config(data.data)
	}, function () {
		weixin.API_GET_JSSDK_CONFIG(debug, jsApiList).then(function (data) {
			window.wx.config(data.data)
		})
	})
}