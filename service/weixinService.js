/**
 * Created by tao on 2016/8/19.
 */

/**
 * Created by Alex on 16/7/28.
 */

var OAuth=require('wechat-oauth'),
	config = require('../config'),
	client = new OAuth(config.appid, config.appsecret),
	API = require('wechat-api'),
	wechatAPI = new API(config.appid, config.appsecret),
	api = config.API,
	http = require('http'),
	Q = require('q');

module.exports={
	/*@param{String} openId 获取到的openId */
	getUserInfo: function (openId) {
		var delay = Q.defer();
		var options = {
			host: config.logic.Host,
			port: config.logic.Port,
			path: api.createOrUpdateUser,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		wechatAPI.getUser(openId, function (err, result) {
			if(err !== null && err !== '' && err !== undefined){
				delay.reject(err);
			}
			var userInfo = result,
				postData = {
					openId: openId,
					headImgUrl: userInfo.headimgurl,
					nickName: userInfo.nickname,
					sex: userInfo.sex
				};
			var req = http.request(options, function(res) {
				res.on('data',function (chunk) {
					var data = JSON.parse(chunk);
					if (res.statusCode >=200 && res.statusCode <300){
						delay.resolve(data);
					}
					else{
						delay.reject(data)
					}
				});
			});

			req.on('error', function(e) {
				delay.reject(e)
			});

			req.write(JSON.stringify(postData));
			req.end();
		});
		return delay.promise;
	},

	/*@param{String} code 微信回传回来的code用于获取openId,并将openid传给业务服务器获取token*/
	codeForToken: function (code) {
		var delay = Q.defer(),
			_self = this;
		client.getAccessToken(code, function (err, result) {
			if(err === null || err === '' || err === undefined){
				var openid = result.data.openid;
				_self.getUserInfo(openid).then(function (res) {
					delay.resolve(res.token)
				}).catch(function(e){
					delay.reject(e)
				})
			}
			else{
				delay.reject(err)
			}
		});
		return delay.promise;
	},

	/*@param{String} openId 获取到的openId */
	userHasBindOrNot: function (openId) {
		var delay = Q.defer();
		this.getUserInfo(openId).then(function (res) {
			delay.resolve(res.user.password ?
				true :
				false
			);
			delay.reject(e)
		});
		return delay.promise
	},

	getAuthorizeURL: function (redirect, state, scope) {
		return client.getAuthorizeURL(redirect, state, scope)
	},

	getJSConfig: function (param, callback) {
		wechatAPI.getJsConfig(param, function (err, result) {
			if(err === null || err === undefined || err === '' ){
				callback(null, result)
			}
			else {
				callback(err, result)
			}
		});
	},

	getMedia: function (serverId, callback) {
		wechatAPI.getMedia(serverId, function (err, result,res) {
			if(err === null || err === undefined || err === '' ){
				callback(null, result, res)
			}
			else {
				callback(err, result, res)
			}
		});
	}
}