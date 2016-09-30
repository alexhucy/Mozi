/**
 * Created by tao on 2016/8/19.
 */

/**
 * Created by Alex on 16/7/28.
 */

var redis = require('redis'),
	config = require('../config'),
	OAuth = require('wechat-oauth'),
	API = require('wechat-api'),
	api = config.API,
	http = require('http');

var redisClient = redis.createClient({
	retry_strategy: function (options) {
		// if (options.error && options.error.code === 'ECONNREFUSED'){
		// 	return new Error('The server refused the connection');
		// }
		if (options.total_retry_time > 1000*60*5) {
			// End reconnecting after a specific timeout and flush all commands with a individual error
			return new Error('Retry time exhausted');
		}
		if (options.times_connected > 10) {
			// End reconnecting with built in error
			return undefined;
		}
		// reconnect after
		return Math.max(options.attempt * 100, 3000);
	}
});

redisClient.on('error', function (err) {
	console.log(err)
})

var client = new OAuth(config.appid, config.appsecret)

var wechatAPI = new API(config.appid, config.appsecret)

// var client = new OAuth(config.appid, config.appsecret, function (openid, callback) {
// 	redisClient.get(openid + ':access_token', function (err, reply) {
// 		if(err){return callback('500', reply)}
// 		callback(null, JSON.parse(reply));
// 	});
// }, function (openid, token, callback) {
// 	redisClient.set(openid + ':access_token', JSON.stringify(token), function (err, reply) {
// 		if(err){return callback('500', reply)}
// 		callback(null, reply);
// 		redisClient.expire(openid +':access_token', 7200);
// 	});
// });
//
// var wechatAPI = new API(config.appid, config.appsecret, function (callback) {
// 	redisClient.get('access_token', function (err, reply) {
// 		if(err){return callback('500', reply)}
// 		callback(null, JSON.parse(reply));
// 	});
// }, function (token, callback) {
// 	redisClient.set('access_token', JSON.stringify(token), function (err, reply) {
// 		if(err){return callback('500', reply)}
// 		callback(null, reply);
// 		redisClient.expire('access_token', 7200);
// 	});
// })



module.exports={
	/***
	 *
	 * @param code
	 * @param callback
	 */
	getUserInfo: function (code, callback) {
		var options = {
			host: config.logic.Host,
			port: config.logic.Port,
			path: api.createOrUpdateUser,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		client.getUserByCode(code, function (err, result) {
			if(err === null || err === '' || err === undefined) {
				var userInfo = result,
					postData = {
						openId: userInfo.openid,
						headImgUrl: userInfo.headimgurl,
						nickName: userInfo.nickname,
						sex: userInfo.sex,
						unionId: userInfo.unionid || '',
						weixinApp: 'OFFICIAL_ACCOUNT'
					};

				var req = http.request(options, function (res) {
					res.on('data', function (chunk) {
						var data = JSON.parse(chunk);
						if (res.statusCode >= 200 && res.statusCode < 300) {
							callback(null, data.token)
						}
						else {
							callback('error', data)
						}
					});
				});

				req.on('error', function (e) {
					callback(e)
				});

				req.write(JSON.stringify(postData));
				req.end();
			}
			else {
				callback(err)
			}
		});
	},

	/*@param{String} code 微信回传回来的code用于获取openId,并将openid传给业务服务器获取token*/
	codeForToken: function (code, callback) {
		var _self = this;
		if(code){
			_self.getUserInfo(code, function (err, data) {
				callback(err, data)
			})
		}
		else{
			callback('NoCode')
		}
		
	},

	/*@param{String} openId 获取到的openId */
	userHasBindOrNot: function (openId, callback) {
		this.getUserInfo(openId, function (err, result) {
			callback(err, result.user.password ? true : false)
		})
	},

	getAuthorizeURL: function (redirect, state, scope) {
		return client.getAuthorizeURL(redirect, state, scope)
	},

	getJSConfig: function (param, callback) {
		wechatAPI.getJsConfig(param, function (err, result) {
			callback(err, result)
		});
	},

	getMedia: function (serverId, callback) {
		wechatAPI.getMedia(serverId, function (err, result, res) {
			callback(err, result, res)
		});
	},

	checkSubscribe: function (openid,callback) {
		wechatAPI.getUser(openid, function (err, result) {
			if(err === null || err === undefined || err === ''){
				callback(null, result.subscribe === 1? true: false)
			}
			else {
				callback(err, false)
			}
		})
	},
	
	checkAuth: function (auth,callback) {
		if(!auth){
			callback({error:'auth不能为空'},'')
			return false
		}
		var options = {
			host: config.logic.Host,
			port: config.logic.Port,
			path: config.API.checkAuth,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization':auth
			}
		};
		var req = http.request(options, function(res) {
			res.on('data',function (chunk) {
				var data = JSON.parse(chunk);
				if (res.statusCode >=200 && res.statusCode <300){
					callback(null, data)
				}
				else{
					callback({error:'auth失效'}, data)
				}
			});
		});
		
		req.on('error', function(e) {
			callback(e)
		});
		req.end();
	}
}