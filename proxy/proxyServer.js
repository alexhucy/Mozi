/**
 * Created by Alex on 16/8/19.
 */

var httpProxy = require('http-proxy'),
	proxy = httpProxy.createProxyServer({});

proxy.on('error',function (err,req,res) {
	res.writeHead(500,{
		'Content-Type':'text/plain'
	});
});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
	if(req.method == "POST" && req.body){
		proxyReq.write(req.body);
		proxyReq.end();
	}
});

module.exports = proxy;