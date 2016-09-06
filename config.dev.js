/**
 * Created by Alex on 16/9/6.
 */

module.exports = {
	appid: 'wxc97b778d9ae31083',
	appsecret: '4f6a421fa7d9cfa4550530dd403be36d',
	mchid: ' ',
	token: 'Taidii',
	proxy: {
		Host: 'http://54.169.36.5:8080'
	},
	logic: {
		Host: '54.169.36.5',
		Port: '8080'
	},
	API: {
		createOrUpdateUser:'/api/create-weixin-user/',
		checkAuth: '/api/refresh-token'
	},
	domain: 'http://edu.ngrok.chainz.net/',
	cdn:'http://edu.ngrok.chainz.net/'
}