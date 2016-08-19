/**
 * Created by Alex on 16/8/15.
 */

var service = require('../../service/activityService'),
	assert = require('assert');

describe('activityService Unit test',function () {
	it('新增活动',function (done) {
		assert.equal(service.addActivity({
			ActivityName: '测试1',
			Creater: '测试',
			Description: '我是描述',
			Point: 5
		}), true)
	});

	it('获取活动列表', function (done) {
		service.getActivityList(1, 10, function (err, list) {
			assert.equal(err, null)
			done()
		})
	});

	it('获取一个活动', function (done) {
		service.getActivityById('57b1b6e1a5510e91d1884793', function (err, activity) {
			assert.equal(err, null)
			done()
		})
	})
})