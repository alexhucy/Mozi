/**
 * Created by Alex on 16/8/9.
 */

var wechat = require('wechat'),
	express = require('express'),
	router = express.Router(),
	path = require('path'),
	weixinService = require('../service/weixinService'),
	config = require('../config'),
	http = require('http');


router.use('/$',function (req,res) {
	var code = req.query.code || '';
	checkAuth(req.cookies.Authorization, function (err) {
		if(err === '' || err === undefined || err === null){
			res.sendFile(path.join(__dirname,'../public/views/index.html'))
			return false
		}
		else if(code){
			weixinService.codeForToken(code).then(function (token) {
				res.cookie('Authorization',token)
				res.sendFile(path.join(__dirname,'../public/views/index.html'))
			}).catch(function (error) {
				if(error.code){
					res.redirect(weixinService.getAuthorizeURL(config.domain, '', 'snsapi_userinfo'))
				}
				else{
					res.setHeader('content-type','text/html; charset=UTF-8');
					res.writeHead(403)
					res.end('服务器错误,请重新登陆')
				}
			})
		}
		else{
			res.redirect(weixinService.getAuthorizeURL(config.domain, '', 'snsapi_userinfo'))
		}
	})

});

function checkAuth(auth, callback) {
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

module.exports = router;