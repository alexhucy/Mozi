/**
 * Created by Alex on 16/9/6.
 */


module.exports = {
	appid: 'wx77025818d05fc144',
	appsecret: 'df9d2adcea9a29136c31ef0b3b496551',
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
	redis: {
		port: '6379',
		host: '127.0.0.1'
	},
	domain: 'http://weixin.xingaokaowang.cn',
	cdn:'http://weixin.xingaokaowang.cn'
}