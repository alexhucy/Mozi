/**
 * Created by Alex on 16/8/19.
 */
import store from '../store'

export function getActivityList() {
	return store.state.activity.activityList
}
export function getActivity() {
	return store.state.activity.activity
}
export function getSignList() {
	return store.state.activity.signList
}

export function getMessageList() {
	return store.state.activity.messageList
}

export function getOngoingActivityList() {
	return store.state.activity.onGoingActivityList
}

export function getCompltedActivity(){
	return store.state.activity.completedActivity
}

export function getTimeline() {
	return store.state.activity.timeline
}

export function getRecord() {
	return store.state.activity.record
}

export function getSignInfo() {
	return store.state.activity.sign
}

export  function getLastCommentInfo() {
	return store.state.activity.lastCommentSignInfo
}
export function getRankList() {
	return store.state.activity.rankList
}

export function getDirection() {
	return store.state.activity.direction
}

export  function getCompletedActivityList() {
	return store.state.activity.completedActivityList
}