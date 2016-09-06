
/**
 * Created by Alex on 16/8/8.
 */

if(process.env.NODE_ENV === 'production'){
	module.exports = require('./config.prod')
}
else{
	module.exports = require('./config.dev')
}

