/**
 * Created by Alex on 16/9/6.
 */

var path = require('path'),
		sharp = require('sharp'),
	  fs = require('fs');

module.exports = {
	thumb: function (file, filename) {
		var pipeline = sharp(file).rotate();
		pipeline
			.clone()
			.resize(200, 200)
			.pipe(fs.createWriteStream(path.join(__dirname, '../thumb/',filename)))
	}
}

