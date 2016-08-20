/**
 * Created by Alex on 16/8/19.
 */
import store from '../store'

export function getActivityList() {
	return store.state.activity.activitylist
}
export function getActivity() {
	return store.state.activity.activity
}