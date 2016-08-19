/**
 * Created by Alex on 16/8/15.
 */

var commentModel = require('../models/Comment').CommentModel;
var redisClient = require('../utility/redisClient');

module.exports = {
	/**
	 *
	 * @param obj {object}
	 * @param callback {function}
	 */
	addComment: function (obj, callback) {
		commentModel.save(function (err) {
			if (err) {
				return callback(err)
			}
			return callback(null)
		})
	},

	getCommentsByActivity: function (activityId, page, size) {
		var page = parseInt(page) || 1;
		var size = parseInt(size) || 10;
		var cache_key = 'activities_' + activityId + '_' + page + '_' + size;
		page = page > 0 ? page : 1;
		redisClient.getItem(cache_key ,function (err, list) {
			if (err){
				return callback(err)
			}
			if (list){
				return callback(null, list)
			}
			commentModel.find({'activityId': activityId}).skip((page - 1) * size).limit(size).exec(function (err, list) {
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

	getCommentsByUser: function (userId, page, size) {
		var page = parseInt(page) || 1;
		var size = parseInt(size) || 10;
		var cache_key = 'activities_' + activityId + '_' + page + '_' + size;
		page = page > 0 ? page : 1;
		redisClient.getItem(cache_key ,function (err, list) {
			if (err){
				return callback(err)
			}
			if (list){
				return callback(null, list)
			}
			commentModel.find({'userId': userId}).skip((page - 1) * size).limit(size).exec(function (err, list) {
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
	}
};