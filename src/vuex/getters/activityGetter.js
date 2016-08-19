/**
 * Created by Alex on 16/8/19.
 */
import store from '../store'

export function getActivityList() {
	console.log(store.state.activity.activitylist)
	return store.state.activity.activitylist
}