/**
 * Created by Alex on 16/8/9.
 */

var wechat = require('wechat'),
		express = require('express'),
		config = require('../config'),
		router = express.Router(),
	  wechatAPI = require('wechat-api'),
		API = new wechatAPI(config.appid, config.appsecret);

router.use('/wechat/',wechat(config, function (req, res, next) {
	
}));

/**
 * 获取个人信息
 */
router.use('/api/wechat/self', function (req,res,next) {
	
});

/**
 * 获取微信jssdk配置
 * @param {Boolean} debug   jssdk是否调试
 * @param {Array} jsApiList 需要注册使用的方法
 */
router.post('/api/wechat/jsconfig',function (req,res) {
	var data = req.body;
	var param = {
		debug: data.debug,
		jsApiList: data.jsApiList,
		url: req.headers.referer
	};
	API.getJsConfig(param, function (err, result) {
		if(err === null || err === undefined || err === '' ){
			res.json(result)
		}
		else {
			res.json({'state':'11001', 'message': '参数错误'})
		}
	});
});


module.exports = router;