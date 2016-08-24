/**
 * Created by Alex on 16/8/9.
 */

var wechat = require('wechat'),
		express = require('express'),
		config = require('../config'),
		router = express.Router(),
	  wechatAPI = require('wechat-api'),
		path = require('path'),
	  fs = require('fs'),
		API = new wechatAPI(config.appid, config.appsecret);

router.use('/wechat/$',wechat(config, function (req, res, next) {
	
}));


/**
 * 获取微信jssdk配置
 * @param {Boolean} debug   jssdk是否调试
 * @param {Array} jsApiList 需要注册使用的方法
 */
router.use('/wechat/jsconfig/', function (req,res) {
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

/**
 *
 */
router.use('/wechat/getMedia', function (req, response) {
	var media_id = req.query.id || '';
	if(media_id){
		API.getMedia(media_id, function (err, result,res) {
			if(err === null || err === undefined || err === '' ){
				var filename = getFileName(res.headers['content-disposition']);
				fs.writeFile(path.join(__dirname, '../media',filename), result, function (err) {
					 if(!err){
						 response.json({'state':'10000', 'url': path.join('http://edu.ngrok.chainz.net/', filename)})
					 }
					 else{
						 response.json({'state':'11010', 'message': '文件保存失败'})
					 }
				})
			}
			else{
				response.json({'state':'11011','message':'文件上传失败'})
			}
		});
	}
	else{
		response.json({'state':'11002', 'message': '缺少参数id'})
	}
})

function getFileName(str) {
	return str.split(';')[1].split('=')[1].replace(/"/g, '')
}


module.exports = router;