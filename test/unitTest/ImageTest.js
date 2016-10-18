/**
 * Created by Alex on 16/9/6.
 */

var service = require('../../service/imageCompressService'),
	assert = require('assert'),
	path = require('path');

describe('ThumbService Unit test',function () {
	it('压缩jpg',function (done) {
		service.thumb(path.join(__dirname,'../../media/0aDgQmMBTbXpR1GufwH7Oy5UApxY7yyVLpbWSC34FSNbcpAkrKrxwqaSQBkLNxm-.jpg'),'test.jpg', function (err) {
			assert.equal(err, null)
			done()
		})
	});
})