/**
 * Created by Alex on 16/8/19.
 */

import Vue from 'vue'
import Cookie from '../../node_modules/react-cookie'
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.http.options.timeout = 10000

// 添加token
Vue.http.interceptors.push({
	request (request) {
		// 这里对请求体进行处理
		var cookies = Cookie.load('Authorization')
		request.headers = request.headers || {}
		if (cookies) {
			request.headers.Authorization = cookies
		}
		return request
	}
});

export const activityListResource = Vue.resource('/api/signin/activity/list')//近期活动列表
export const activityResource = Vue.resource('/api/signin/activity/{id}')//单个活动信息
export const signListResource = Vue.resource('/api/signin/activity/{id}/signin_list')//签到信息列表
export const signUpResource = Vue.resource('/api/signin/activity/{id}/signup')//报名
export const signResource = Vue.resource('/api/signin/activity/{id}/signin')//签到
export const agreeResource = Vue.resource('/api/signin/activity/{activity_id}/{signin_id}/agree')//点赞
export const messageResource = Vue.resource('/api/signin/activity/{activity_id}/{signin_id}/message')//发表留言
export const messageListResource = Vue.resource('/api/signin/activity/{activity_id}/{signin_id}/message/list')//获取留言列表
