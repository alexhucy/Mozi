/**
 * Created by Alex on 16/8/8.
 */

var db = require('./db'),
		mongoose = db.mongoose,
		base = db.base;

var activitySchema = base.extend({
	//活动名称
	ActivityName: {type: String},
	//发起人
	Creater: {type: String},
	//开始时间
	StartTime: {type: Date, default: Date.now},
	//结束时间
	EndTime: {type: Date, default: Date.now},
	//描述
	Description: {type: String},
	//参与人数
	ParticipantNumber: {type: Number, default: 0},
	//奖励(加多少分)
	Point: {type: Number}
});

exports.ActivityModel = mongoose.model('activity', activitySchema);
