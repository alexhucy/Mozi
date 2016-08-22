/**
 * Created by Alex on 16/8/19.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import activity from './modules/activity'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		activity,
		user
	}
})
