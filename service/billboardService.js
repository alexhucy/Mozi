/**
 * Created by Alex on 16/8/15.
 */

var userModel = require('../models/User').UserModel;
var redisClient = require('../utility/redisClient');

module.exports = {
	rank: function () {
		userModel.find()
	}
};

