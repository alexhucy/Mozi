/**
 * Created by Alex on 16/8/9.
 */

var wechat = require('wechat'),
	express = require('express'),
	router = express.Router(),
	path = require('path'),
	weixinService = require('../service/weixinService')

router.use('/$',function (req,res) {
	var code=req.query.code || '';
	if (code) {
		weixinService.codeForToken(code).then(function (token) {
			res.cookie('Authorization',token)
			res.sendFile(path.join(__dirname,'../public/views/index.html'))
		}).catch(function (error) {
			res.setHeader('content-type','text/html; charset=UTF-8');
			res.writeHead(403)
			res.end('服务器错误,请重新登陆')
		})
	}
	else {
		res.sendFile(path.join(__dirname,'../public/views/index.html'))
	}
});

module.exports = router;