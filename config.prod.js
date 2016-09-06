/**
 * Created by Alex on 16/9/6.
 */

module.exports = {
	appid: 'wxc3378269c5fd45a7',
	appsecret: '5019a6f743905ac296df161fba2a7c4a',
	mchid: ' ',
	token: 'Taidii',
	proxy: {
		Host: 'http://localhost:9090'
	},
	logic: {
		Host: 'localhost',
		Port: '9090'
	},
	API: {
		createOrUpdateUser:'/api/create-weixin-user/',
		checkAuth: '/api/refresh-token'
	},
	domain: 'http://weixin.xingaokaowang.cn',
	cdn:'http://weixin.xingaokaowang.cn/'
}