/**
 * Created by Alex on 16/8/9.
 */

var wechat = require('wechat'),
	express = require('express'),
	router = express.Router(),
	path = require('path'),
	weixinService = require('../service/weixinService'),
	config = require('../config')

router.use('/$',function (req,res) {
	if(req.headers.cookie){
		res.sendFile(path.join(__dirname,'../public/views/index.html'))
		return false
	}
	var code = req.query.code || '';
	if (code) {
		weixinService.codeForToken(code).then(function (token) {
			res.cookie('Authorization',token)
			res.sendFile(path.join(__dirname,'../public/views/index.html'))
		}).catch(function (error) {
			res.writeHead(500,{
				'Content-Type':'text/plain'
			});
		})
	}
	else {
		res.redirect(weixinService.getAuthorizeURL(config.domain, '', 'snsapi_userinfo'))
	}
});

module.exports = router;