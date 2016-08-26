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
	var code = req.query.code || '';
	if (code) {
		weixinService.codeForToken(code).then(function (token) {
			res.cookie('Authorization',token)
			res.sendFile(path.join(__dirname,'../public/views/index.html'))
		}).catch(function (error) {
			res.redirect(weixinService.getAuthorizeURL(config.domain,'','snsapi_userinfo'))
		})
	}
	else {
		res.redirect(weixinService.getAuthorizeURL(config.domain,'','snsapi_userinfo'))
	}
});

module.exports = router;