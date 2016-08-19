/**
 * Created by Alex on 16/8/8.
 */

var assert = require("assert"),
	expect = require('chai').expect,
	mongodb = require('mongodb'),
	config = require('../../config')
  server  = new mongodb.Server('127.0.0.1', config.mongo.port, {auto_reconnect:true}),
  db = new mongodb.Db('mydb', server, {safe:true}),
	redis = require('redis'),
	client = redis.createClient(config.redis.port, config.redis.host,{});

describe('db connect test',function () {
	it('mongodb链接测试',function (done) {
		db.open(function(err, db){
			console.log(err)
			expect(err).to.be.equal(null)
			done()
		})
	})

	it('redis连接测试',function () {

	})
})