/**
 * Created by Alex on 16/9/8.
 */

var weixinService = require('../../service/weixinService'),
	assert = require('assert'),
	path = require('path');

describe('WeixinService Unit test', function () {
	it('获取用户信息, openid存在, 返回data', function (done) {
		weixinService.getUserInfo('o5TnLvqSb-2mymSKb_X-ShKuSRG4',function (err, data) {
			assert.equal(err, null)
			done()
		})
	});

	it('获取用户信息,openid不存在,返回data', function (done) {
		weixinService.getUserInfo('o5TnLvqSb-2mymSKb_X-ShKuSRG412', function (err, data) {
			assert.notEqual(err)
			done()
		})
	})

	it('获取用户信息, redis服务器异常,返回err', function (data) {
			weixinService.getUserInfo('o5TnLvqSb-2mymSKb_X-ShKuSRG4',function (err, data) {
				console.log(err)
				assert.notEqual(err)
				done()
			})
	})
	
	it('根据code获取token, code为空', function (done) {
		weixinService.codeForToken('', function (err, data) {

		})
	})

	it('根据code获取token, code合法, 返回data', function (done) {
		weixinService.codeForToken('', function (err, data) {

		})
	})

	it('根据code获取token, code不合法, 返回err', function (done) {
		weixinService.codeForToken('', function (err, data) {

		})
	})

	it('redis服务器异常', function (done) {
		weixinService.codeForToken('', function (err, data) {

		})
	})
})