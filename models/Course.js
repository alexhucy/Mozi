/**
 * Created by Alex on 16/8/15.
 */

var db = require('./db'),
	mongoose = db.mongoose,
	base = db.base;

var courseSchema = base.extend({
	title: {type: String},
	coverImage: {type: String},
	link: {type: String}
})

exports.CourseModel = mongoose.model('course', courseSchema);
