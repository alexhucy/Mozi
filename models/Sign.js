/**
 * Created by Alex on 16/8/8.
 */

var db = require('./db'),
	mongoose = db.mongoose,
	base = db.base;

var signSchema = base.extend({
	User: {type: ObjectId},
	Activity: {type: ObjectId},
	Date: {type: Date},
	//点赞数
	ZanNumber: {type: Number, default: 0},
	//评论数
	CommentNumber: {type: Number, default: 0},
	Comments : [{type: ObjectId}]
});

exports.SignModel = mongoose.model('sign', signSchema);
