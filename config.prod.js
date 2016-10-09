/**
 * Created by Alex on 16/9/6.
 */


module.exports = {
	appid: 'wx77025818d05fc144',
	appsecret: 'df9d2adcea9a29136c31ef0b3b496551',
	mchid: ' ',
	token: 'Taidii',
	proxy: {
		Host: 'http://localhost:8080'
	},
	logic: {
		Host: 'localhost',
		Port: '8080'
	},
	API: {
		createOrUpdateUser:'/api/create-weixin-auth/',
		checkAuth: '/api/refresh-token'
	},
	redis: {
		port: '6379',
		host: '127.0.0.1'
	},
	domain: 'http://weixin.xingaokaowang.cn/sign/',
	cdn:'http://weixin.xingaokaowang.cn'
}