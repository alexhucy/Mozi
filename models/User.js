/**
 * Created by Alex on 16/8/8.
 */

var db = require('./db'),
	mongoose = db.mongoose,
	base = db.base;

var userSchema = base.extend({
	//openid
	OpenId: {type: String},
	//unionid
	UnionId: {type: String},
	//headImageUrl
	HeadImageUrl: {type: String},
	//nickname
	Nickname: {type: String},
	//sex
	Sex: {type: Number},
	//address
	Address: {type: Number},
	//phone
	PhoneNumber: {type: String},
	//points
	Points: {type: Number}
});

exports.UserModel = mongoose.model('user', userSchema);
