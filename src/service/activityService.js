/**
 * Created by Alex on 16/8/21.
 */

import API from '../API/activity'

module.exports = {
	 ZAN :function (activityId, signId) {
		  return  API.API_AGREE(activityId, signId)
	 },
	
	 sign: function (id, url, text) {
		 return API.API_SIGN_ACTIVITY(id, url, text)
	 },
	
	book: function (id) {
		return API.API_BOOK_ACTIVITY(id);
	},
	
	commit: function (activityId, signId, content) {
		return API.API_COMMIT_MESSAGE(activityId, signId, content)
	},
	
	getMessageList: function (activityId, signId) {
		return API.API_GET_MESSAGE_LIST(activityId, signId)
	},
	
	getUrlByServerId: function (id) {
		return API.API_GET_URL_BY_SERVERID(id)
	},

	getActivityInfo: function (id) {
		return API.API_GET_ACTIVITY(id)
	},
	
	getActivitySignList: function (id) {
		return API.API_GET_SIGN_LIST(id)
	},

	getActivityCompletedInfo: function (id) {
		return API.API_GET_COMPLETED_ACTIVITY(id)
	},

	getActivityTimeLine: function (id) {
		return API.API_GET_COMPLETED_ACTIVITY_TIMELINE(id)
	}
};