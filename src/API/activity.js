/**
 * Created by tao on 2016/8/19.
 */
import {activityListResource,activityResource,signListResource,signUpResource,signResource,agreeResource,messageResource,messageListResource} from './resourse'

export default {
	API_GET_ACTIVITY_LIST: function () {
		return activityListResource.get()
	},

	API_GET_ACTIVITY: function (id) {
		return activityResource.get({id: id})
	},

	API_GET_SIGN_LIST: function (id) {
		return signListResource.get({id: id})
	},

	API_GET_SIGN_UP: function (id) {
		return signUpResource.get({id: id})
	},

	API_POST_SIGN: function (id) {
		return signResource.save({id: id})
	},

	API_GET_AGREE: function (activity_id, signin_id) {
		return agreeResource.get({activity_id: id,signin_id: signin_id})
	},

	API_POST_MESSAGE: function (activity_id, signin_id) {
		return messageResource.save({activity_id: id,signin_id: signin_id})
	},

	API_GET_MESSAGE_LIST: function (activity_id, signin_id) {
		return messageListResource.get({activity_id: id,signin_id: signin_id})
	}
}