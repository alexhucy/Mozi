/**
 * Created by Alex on 16/8/8.
 */

var db = require('./db'),
	mongoose = db.mongoose,
	base = db.base;

var zanSchema = base.extend({
	//用户活动关系
	User2Sign: {type: ObjectId},
	//赞
	Zan: {type: Boolean}
});

exports.ZanModel = mongoose.model('zan', zanSchema);
