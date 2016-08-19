/**
 * Created by Alex on 16/8/8.
 */

var db = require('./db'),
	mongoose = db.mongoose,
	base = db.base;

var commentSchema = base.extend({
	//活动用户关系
	User2Sign: {type: ObjectId},
	//评论内容
	Content: {type: String}
})

exports.CommentModel = mongoose.model('comment', commentSchema);
