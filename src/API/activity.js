/**
 * Created by tao on 2016/8/19.
 */

import {
	activityListResource,
	activityResource,
	signListResource,
	signResource,
	signUpResource,
	agreeResource,
	messageListResource,
	messageResource,
  ongoingActivityResource,
	completedActivityInfoResource,
	completedActivityTimelineResource,
	getUrlByServerIdResource,
	recordResource,
	rankListResource,
	completedActivityListResource
} from './resourse'

const size = 1

export default {
	API_GET_ACTIVITY_LIST: function () {
		return activityListResource.get()
	},
	
	API_GET_ACTIVITY: function (id) {
		return activityResource.get({activity_id: id})
	},

	API_GET_SIGN_LIST: function (id, page) {
		return signListResource.get({activity_id: id, page: page, page_size: size})
	},

	API_BOOK_ACTIVITY: function (id) {
	    return signUpResource.get({activity_id: id})
	},

	API_SIGN_ACTIVITY: function (id, url, text) {
	    return signResource.save({activity_id: id}, {text: text, image_url: url})
	},
	
	API_AGREE: function (activity_id, signin_id) {
	    return agreeResource.get({activity_id: activity_id,signin_id: signin_id})
	},

	API_GET_MESSAGE_LIST: function (activity_id, signin_id) {
	    return messageListResource.get({activity_id: activity_id,signin_id: signin_id})
	},

	API_COMMIT_MESSAGE: function (activity_id, signin_id, content) {
	    return messageResource.save({activity_id: activity_id,signin_id: signin_id},{text:content})
	},

	API_GET_ONGOING_ACTIVITY_LIST: function () {
		return ongoingActivityResource.get()
	},

	API_RECORD: function (activity_id) {
			return recordResource.get({activity_id: activity_id})
	},
	API_GET_COMPLETED_ACTIVITY_LIST: function () {
		return 	completedActivityListResource.get()
	},
	API_GET_COMPLETED_ACTIVITY: function (id) {
		return completedActivityInfoResource.get({activity_id: id})
	},

	API_GET_COMPLETED_ACTIVITY_TIMELINE: function (id, page) {
		return completedActivityTimelineResource.get({activity_id: id, page:page, page_size:size})
	},
	
	API_GET_URL_BY_SERVERID: function (id) {
		return getUrlByServerIdResource.get({id: id})
	},

	API_GET_RANK_LIST: function () {
		return rankListResource.get()
	}
}