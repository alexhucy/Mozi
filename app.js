/**
 * Created by Alex on 16/8/4.
 */

var express = require('express'),
	 path = require('path'),
	 app = express(),
	 server = require('http').Server(app),
	 mongodb = require('mongodb'),
	 proxy = require('./router/proxy'),
	 weixin = require('./router/weixin'),
	 routes = require('./router/index'),
	 bodyParser = require('body-parser'),
	 cookieParser = require('cookie-parser'),
	 morgan = require('morgan'),
	 logDirectory = path.join(__dirname, 'logs'),
	 fs = require('fs'),
	 FileStreamRotator = require('file-stream-rotator');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

var accessLogStream = FileStreamRotator.getStream({
	date_format: 'YYYYMMDD',
	filename: path.join(logDirectory, 'access-%DATE%.log'),
	frequency: 'daily',
	verbose: false
})

var errorLogStream = FileStreamRotator.getStream({
	date_format: 'YYYYMMDD',
	filename: path.join(logDirectory, 'error-%DATE%.log'),
	frequency: 'daily',
	verbose: false
})

app.use(morgan('combined', {stream: accessLogStream}))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + ''));
app.set('view engine', 'html'); //替换文件扩展名ejs为html;;
app.use(express.static(path.join(__dirname, './public/assets')));
app.use('/thumb/', express.static(path.join(__dirname, './thumb')))
app.use('/media/', express.static(path.join(__dirname, './media')))
app.use(express.query());
app.use(cookieParser());

app.use('/',routes);

app.use('/', proxy);



app.use('/', weixin);

app.use('/error',function () {
	throw ({'error':'111'})
})

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

app.use(function (err, req, res, next) {
	var meta = '[' + new Date() + '] ' + req.url + '\n';
	errorLogStream.write(meta + err.stack + '\n');
	next();
});
