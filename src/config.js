/**
 * Created by Alex on 16/8/4.
 */

export const API_ROOT = '';

module.exports = {
	appid: 'wxd84a057c5ec212c9',
	appsecret: '83ab4fc43b334594d8124ab6439f9ff7',
	mchid:' ',
	token:'Taidii',
	mongo:{
		host: 'mongodb://127.0.0.1',
		port: '27017'
	},
	redis:{
		host: '127.0.0.1',
		port: '6379'
	},
	proxy:{
		Host:'http://54.169.36.5:8080'
	},
	CacheExpired: 300,
	API:{
		// 如果openId已经存在，则更新数据，返回http状态码200. 如果openId不存在，则创建一个新的用户,返回http状态码201
		createOrUpdateUser:'/api/create-weixin-user/'
	},
	logic: {
		Host: '54.169.36.5',
		Port: '8080'
	}
}