/**
 * Created by Alex on 16/8/4.
 */

/**
 * Created by Alex on 16/6/3.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import abstract from './components/abstract.vue'

const FastClick = require('fastclick')

FastClick.attach(document.body)

Vue.use(VueRouter)

var router = new VueRouter()

routes(router)

router.start(abstract, '#app');

