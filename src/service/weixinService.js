/**
 * Created by Alex on 16/8/21.
 */

import weixin from '../API/user'
import config from '../config'
import activity from '../API/activity'

export const jssdkConfigInit = function (debug, jsApiList, callback) {
	return weixin.API_GET_JSSDK_CONFIG(debug, jsApiList).then(function (data) {
		window.wx.config(data.data)
		if (typeof callback === 'function')callback()
	}, function () {
		weixin.API_GET_JSSDK_CONFIG(debug, jsApiList).then(function (data) {
			window.wx.config(data.data)
			if(typeof  callback === 'function')callback()
		})
	})
}

/**
 *
 * @param title
 * @param desc
 * @param link
 * @param imgUrl
 * @param type
 * @param dataUrl
 * @param callback
 * @param cancel
 */
export const shareTimeline = function (title, desc, link, imgUrl, success, cancel) {
		window.wx.onMenuShareTimeline({
			title: title, // 分享标题
			desc: desc, // 分享描述
			link: link, // 分享链接
			imgUrl: imgUrl, // 分享图标
			success: function () {
				activity.API_SHARE_SUCCESS()
				success()
			},
			cancel: function () {
				cancel()
			}
		});
}

/**
 *
 * @param title
 * @param desc
 * @param link
 * @param imgUrl
 * @param success
 * @param cancel
 */
export const shareAppMessage = function (title, desc, link, imgUrl, success, cancel) {
	window.wx.onMenuShareAppMessage({
		title: title, // 分享标题
		desc: desc, // 分享描述
		link: link, // 分享链接
		imgUrl: imgUrl, // 分享图标
		success: function () {
			activity.API_SHARE_SUCCESS()
			if(typeof success === 'function')success()
		},
		cancel: function () {
			if(typeof cancel === 'function')cancel()
		}
	});
}

export const share = function (title, desc, link, imgUrl, success, cancel) {
	shareAppMessage(title, desc, link, imgUrl, success, cancel)
	shareTimeline(title, desc, link, imgUrl, success, cancel)
}


export const getAuthUrl = function (url) {
	return 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
		'appid=' + config.appid + '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
}