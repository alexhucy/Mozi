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
		createOrUpdateUser:'/api/create-weixin-auth/',
		checkAuth: '/api/refresh-token'
	},
	redis: {
		port: '6379',
		host: '127.0.0.1'
	},
	domain: 'http://weixin.xingaokaowang.cn',
	cdn:'http://weixin.xingaokaowang.cn'
}