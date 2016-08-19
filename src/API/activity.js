/**
 * Created by tao on 2016/8/19.
 */
import {activityListResource,activityResource} from './resourse'

export default {
	API_GET_ACTIVITY_LIST: function () {
		return activityListResource.get()
	},

	API_GET_ACTIVITY: function () {
		return activityResource.get(id)
	}
}