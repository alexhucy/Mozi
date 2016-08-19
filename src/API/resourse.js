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
export const signListResource = Vue.resource('/activity/{id}/signin_list')//签到信息列表
export const signUpResource = Vue.resource('/activity/{id}/signup')//报名
export const signResource = Vue.resource('/activity/{id}/signin')//签到
