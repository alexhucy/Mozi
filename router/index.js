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
	weixinService.checkAuth(req.cookies.Authorization, function (err) {
		if(err === '' || err === undefined || err === null){
			res.sendFile(path.join(__dirname,'../public/views/index.html'))
			return false
		}
		weixinService.codeForToken(code, function (err, token) {
			if(err === null || err === undefined || err ===''){
				res.cookie('Authorization',token)
				res.sendFile(path.join(__dirname,'../public/views/index.html'))
			}
			else if(err === '500'){
				res.setHeader('content-type','text/html; charset=UTF-8');
				res.writeHead(403)
				res.end('服务器错误,请重新登陆')
			}
			else{
				res.redirect(weixinService.getAuthorizeURL(config.domain, '', 'snsapi_userinfo'))
			}
		})
	})

});


module.exports = router;