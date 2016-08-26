/**
 * Created by Alex on 16/8/19.
 */

var express = require('express'),
	router = express.Router(),
	proxy = require('../proxy/proxyServer'),
	config = require('../config');

router.get('/api/*',function (req,res) {
	delete req.headers.host;
	proxy.web(req,res,{ target:config.proxy.Host});
});

router.post('/api/*',function (req,res) {
	delete req.headers.host;
	proxy.web(req,res,{ target:config.proxy.Host});
	// proxy.web(req,res,{ target:config.proxy.Host,headers:headers});
	if (req.body){
		var data = JSON.stringify(req.body);
		req.body = data
		headers = {
			'Content-type': 'application/json',
			'Content-Length':Buffer.byteLength(data,'utf8')
		}
	}
});

router.delete('/api/*',function (req,res) {
	delete req.headers.host;
	proxy.web(req,res,{ target:config.proxy.Host});
});

module.exports = router;