/**
 * Created by Alex on 16/8/15.
 */

var activityModel = require('../models/Activity').ActivityModel;
var redisClient = require('../utility/redisClient');

module.exports = {
	/**
	 * @param obj {object}
	 * @param callback {function}
	 */
	addActivity: function (obj, callback) {
		var activity = new activityModel(obj);
		activity.save(function (err) {
			if(err){
				return callback(err)
			}
			return callback(null)
		})
	},
	
	/**
	 * 
	 * @param page {Number} 页数
	 * @param size {Number} 数据条数
	 * @param callback {function} 回调
	 * @returns {*}
	 */
	getActivityList: function (page, size, callback) {
		var page = parseInt(page) || 1;
		var size = parseInt(size) || 10;
		var cache_key = 'activities_' + page + '_' + size; 
		page = page > 0 ? page : 1;
		redisClient.getItem(cache_key ,function (err, list) {
			if (err){
				return callback(err)
			}
			if (list){
				return callback(null, list)
			}
			activityModel.find().skip((page - 1) * size).limit(size).exec(function (err, list) {
				if (err){
					return callback(err)
				}
				if (list) {
					redisClient.setItem(cache_key, list, redisClient.defaultExpired, function (err) {
						if (err) {
							return callback(err)
						}
					})
				}
				return callback(err, list)
			})
		});
	},
	
	/**
	 * 根据活动ID获取活动具体信息
	 * @param id {ObjectId} 活动id 
	 */
	getActivityById: function (id, callback) {
		var cache_key = 'activity_' + id;
		redisClient.getItem(cache_key, function (err, activity) {
			if (err){
				return callback(err)
			}
			if (activity){
				callback(null, activity)
			}
			activityModel.findOne({'_id': id},function (err,activity) {
				if (err){
					return callback(err)
				}
				if (activity){
					redisClient.setItem(cache_key, activity, redisClient.defaultExpired, function (err) {
						if (err){
							return callback(err)
						}
					})
				}
				return callback(null, activity)
			})
		})
	}
};
