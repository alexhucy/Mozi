/**
 * Created by tao on 2016/8/19.
 */
import {activityListResource,activityResource,signListResource,signResource,signUpResource,agreeResource,messageListResource,messageResource} from './resourse'

export default {
	API_GET_ACTIVITY_LIST: function () {
		return activityListResource.get()
	},

	API_GET_ACTIVITY: function (activity_id) {
		return activityResource.get(activity_id: id)
	},

	API_GET_SIGN_LIST: function (activity_id) {
		return signListResource.get(activity_id: id)
	},

	API_GET_SIGN: function (activity_id) {
	    return signResource.get(activity_id: id)
	},

	API_GET_SIGN_UP: function (activity_id) {
	    return signUpResource.get(activity_id: id)
	},

	API_AGREE: function (activity_id, signin_id) {
	    return agreeResource.get(activity_id: id,signin_id: signin_id)
	},

	API_MESSAGE_LIST: function (activity_id, signin_id) {
	    return messageListResource.get(activity_id: id,signin_id: signin_id)
	},

	API_MESSAGE: function (activity_id, signin_id) {
	    return messageResource.get(activity_id: id,signin_id: signin_id)
	}

}