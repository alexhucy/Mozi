/**
 * Created by Alex on 16/8/8.
 */

var db = require('./db'),
	mongoose = db.mongoose,
	base = db.base;

var pointsSchema = base.extend({
	Operation: {type: Boolean},
	//积分
	Points: {type: Number},
	//分享操作(打卡,分享)
	Reason: {type: String},
	//
	User: {type: ObjectId},

	Activity: {type: ObjectId}
});

exports.PointsModel = mongoose.model('points', pointsSchema);
