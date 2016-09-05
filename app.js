/**
 * Created by Alex on 16/8/4.
 */

var express = require('express'),
	 path = require('path'),
	 app = express(),
	 server = require('http').Server(app),
	 config = require('./config'),
	 mongodb = require('mongodb'),
	 proxy = require('./router/proxy'),
	 weixin = require('./router/weixin'),
	 routes = require('./router/index'),
	 weixinService = require('./service/weixinService'),
	 bodyParser = require('body-parser'),
	 cookieParser = require('cookie-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + ''));
app.set('view engine', 'html'); //替换文件扩展名ejs为html;;
app.use(express.static(path.join(__dirname, './public/assets')));
app.use(express.static(path.join(__dirname, './media')))
app.use(express.query());
app.use(cookieParser());

app.use('/',routes);

app.use('/', proxy);

app.use('/', weixin);

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});