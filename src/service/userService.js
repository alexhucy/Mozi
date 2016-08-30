/**
 * Created by Alex on 16/8/29.
 */

import API from '../API/user'

module.exports = {
	deleteChildInfo: function(id) {
		return API.API_DELETE_CHILD_INFO(id)
	}
}