/**
 * Created by Alex on 16/8/4.
 */

var express = require('express'),
	 path = require('path'),
	 app = express(),
	 server = require('http').Server(app),
	 config = require('./config'),
	 mongodb = require('mongodb'),
	 mongoServer = new mongodb.Server(config.mongo.host, config.mongo.port, {auto_reconnect:true}),
	 proxy = require('./router/proxy'),
	 weixin = require('./router/weixin');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + ''));
app.set('view engine', 'html'); //替换文件扩展名ejs为html;;
app.use(express.static(path.join(__dirname, './public/assets')));
app.use(express.query());

app.use('/$',function (req,res) {
	res.sendFile(path.join(__dirname,'./public/views/index.html'))
});

app.use('/', proxy);

app.use('/', weixin);

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});