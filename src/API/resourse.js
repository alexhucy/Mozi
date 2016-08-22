/**
 * Created by Alex on 16/8/19.
 */

import Vue from 'vue'
import Cookie from '../../node_modules/react-cookie'
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.http.options.timeout = 10000

Vue.http.options.emulateJSON = true;
// 添加token
console.log(typeof Vue.http.interceptors)
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

var API_ROOT = ''


export const activityListResource = Vue.resource(API_ROOT + '/api/signin/activity/list')//近期活动列表
export const activityResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}')//单个活动信息
export const signListResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}/signin_list')//签到信息列表
export const signUpResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}/signup')//报名
export const signResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}/signin')//签到
export const agreeResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}/{signin_id}/agree')//点赞
export const messageResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}/{signin_id}/message')//发表留言
export const messageListResource = Vue.resource(API_ROOT + '/api/signin/activity/{activity_id}/{signin_id}/message/list')//获取留言列表
export const recordResource = Vue.resource(API_ROOT + '/api/signin/user/record/{activity_id}')//个人中心活动记录

export const userResource = Vue.resource(API_ROOT + '/api/self-info/')// 获取个人信息
export const userupResource = Vue.resource(API_ROOT + '/api/signin/user/selfinfo')//个人中心信息
export const weixinJSSDKResource = Vue.resource(API_ROOT + '/wechat/jsconfig/')
export const childResource = Vue.resource(API_ROOT + '/api/child')//获取孩子信息
export const childUpdateResource = Vue.resource(API_ROOT + '/api/child')//获取孩子信息

