/**
 * Created by Alex on 16/8/8.
 */

var dbPath = require('../config').mongo.host,
	mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend'),
  i18n = require('./i18n');

mongoose.connect(dbPath || "mongodb://localhost/blogrift");
var db = mongoose.connection;

db.on('error', function (err) {
	console.error(i18n.__('error.db_1') + err);
	process.exit(1);
});
exports.mongoose = mongoose;

//基础Schema
var base = new mongoose.Schema({
	//创建时间
	CreateTime: {type: Date},
	//修改时间
	ModifyTime: {type: Date}
});
exports.base = base;