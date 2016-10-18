

module.exports = {
	appid: 'wx4a3601054ed5fa02',
	appsecret: 'e66f5ca81afc71b116c0d983800a3c39',
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
	domain: 'http://test.weixin.xingaokaowang.cn/sign'
}