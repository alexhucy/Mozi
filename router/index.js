/**
 * Created by Alex on 16/8/9.
 */

var wechat = require('wechat'),
	express = require('express'),
	router = express.Router();

router.use('/$',function (req,res) {
	res.sendFile(path.join(__dirname,'./public/views/index.html'))
});

module.exports = router;