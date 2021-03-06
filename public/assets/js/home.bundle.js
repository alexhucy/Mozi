webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(20);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(22);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _router = __webpack_require__(23);

	var _router2 = _interopRequireDefault(_router);

	var _abstract = __webpack_require__(325);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _timestamp2date = __webpack_require__(280);

	var _timestamp2date2 = _interopRequireDefault(_timestamp2date);

	var _friendlyTime = __webpack_require__(340);

	var _friendlyTime2 = _interopRequireDefault(_friendlyTime);

	var _newLine = __webpack_require__(341);

	var _newLine2 = _interopRequireDefault(_newLine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FastClick = __webpack_require__(342); /**
	                                       * Created by Alex on 16/8/4.
	                                       */

	/**
	 * Created by Alex on 16/6/3.
	 */

	FastClick.attach(document.body);

	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default({
	  history: false,
	  saveScrollPosition: true
	});

	_vue2.default.filter('timestamp2date', _timestamp2date2.default);

	_vue2.default.filter('friendlyTime', _friendlyTime2.default);

	_vue2.default.filter('newLine', _newLine2.default);

	(0, _router2.default)(router);

	router.start(_abstract2.default, '#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(24);

	var _index2 = _interopRequireDefault(_index);

	var _dynamics = __webpack_require__(34);

	var _dynamics2 = _interopRequireDefault(_dynamics);

	var _mysign = __webpack_require__(119);

	var _mysign2 = _interopRequireDefault(_mysign);

	var _billboard = __webpack_require__(146);

	var _billboard2 = _interopRequireDefault(_billboard);

	var _index3 = __webpack_require__(150);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(193);

	var _index6 = _interopRequireDefault(_index5);

	var _info = __webpack_require__(258);

	var _info2 = _interopRequireDefault(_info);

	var _sign = __webpack_require__(283);

	var _sign2 = _interopRequireDefault(_sign);

	var _activityTimeline = __webpack_require__(292);

	var _activityTimeline2 = _interopRequireDefault(_activityTimeline);

	var _UpdateChildInfo = __webpack_require__(273);

	var _UpdateChildInfo2 = _interopRequireDefault(_UpdateChildInfo);

	var _userInfoModify = __webpack_require__(300);

	var _userInfoModify2 = _interopRequireDefault(_userInfoModify);

	var _upload = __webpack_require__(178);

	var _upload2 = _interopRequireDefault(_upload);

	var _comment = __webpack_require__(309);

	var _comment2 = _interopRequireDefault(_comment);

	var _publish = __webpack_require__(317);

	var _publish2 = _interopRequireDefault(_publish);

	var _text = __webpack_require__(321);

	var _text2 = _interopRequireDefault(_text);

	var _store = __webpack_require__(58);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// let history = window.sessionStorage
	// history.clear()
	// let historyCount = history.getItem('count') * 1 || 0
	// history.setItem('/',0)
	//
	// const commit = store.commit || store.dispatch


	/**
	 * Created by Alex on 16/8/4.
	 */

	module.exports = function (router) {
		router.map({
			'/': {
				name: 'index',
				component: _index2.default,
				subRoutes: {
					'/': {
						name: 'dynamics',
						component: _dynamics2.default
					},
					'/mysign': {
						name: 'mysign',
						component: _mysign2.default
					}
				}
			},
			'/billboard': {
				name: 'billboard',
				component: _billboard2.default
			},
			'/item/:id/book': {
				name: 'book',
				component: _index4.default
			},
			'/item/:id/sign': {
				name: 'sign',
				component: _sign2.default
			},
			'/center': {
				name: 'center',
				component: _index6.default
			},
			'/info/edit': {
				name: 'info',
				component: _info2.default
			},
			'/info/updateInfo': {
				name: 'update',
				component: _UpdateChildInfo2.default
			},
			'/info/updateuserInfo': {
				name: 'userUpdate',
				component: _userInfoModify2.default
			},
			'/item/:id/timeline': {
				name: 'timeline',
				component: _activityTimeline2.default
			},
			'/item/:id/upload': {
				name: 'upload',
				component: _upload2.default
			},
			'/sign/:activityId/:signId/comment': {
				name: 'comment',
				component: _comment2.default
			},
			'/sign/:activityId/:signId/publish': {
				name: 'publish',
				component: _publish2.default
			},
			'/test': {
				name: 'test',
				component: _text2.default
			}
		});

		router.redirect({
			'*': '/'
		});
<<<<<<< HEAD

=======
>>>>>>> 6f50f2127bf0302eb0bb3ed1258d5074fafd7158
		router.beforeEach(function (_ref) {
			var to = _ref.to;
			var from = _ref.from;
			var next = _ref.next;

			console.log('1');
			var toIndex = history.getItem(to.path);
			var fromIndex = history.getItem(from.path);
			if (toIndex) {
				if (toIndex > fromIndex) {
					commit('UPDATE_DIRECTION', 'forward');
				} else {
					commit('UPDATE_DIRECTION', 'reverse');
				}
			} else {
				++historyCount;
				history.setItem('count', historyCount);
				to.path !== '/' && history.setItem(to.path, historyCount);
				commit('UPDATE_DIRECTION', 'forward');
			}
			setTimeout(next, 50);
		});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e4073b2/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(27);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(28);

	var _index4 = _interopRequireDefault(_index3);

	var _footer = __webpack_require__(29);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			tab: _index2.default,
			tabItem: _index4.default,
			foot: _footer2.default
		}
	};
	// </script>
	//
	// <template>
	// 	<div>
	// 	<tab>
	// 		<tab-item :selected="$route.name == 'dynamics'" v-link="{name:'dynamics'}">一周活动</tab-item>
	// 		<tab-item :selected="$route.name == 'mysign'" v-link="{name:'mysign'}">我的打卡</tab-item>
	// 	</tab>
	//
	// 	<router-view>
	// 	</router-view>
	//
	// 	<foot></foot>
	// 	</div>
	// </template>
	//
	// <style>
	//  .mz-item h4{
	// 	 font-size: 1.4rem;
	//  }
	// </style>
	//
	// <script>

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxTab=e():t.vuxTab=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e["default"]={mixins:[i.parentMixin],ready:function(){var t=this;setTimeout(function(){t.hasReady=!0},0)},props:{lineWidth:{type:Number,"default":3},activeColor:{type:String,"default":"#04be02"},defaultColor:{type:String,"default":"#666"},animate:{type:Boolean,"default":!0}},computed:{barLeft:function(){return this.index*(100/this.number)+"%"},barRight:function(){return(this.number-this.index-1)*(100/this.number)+"%"},barStyle:function(){return{left:this.barLeft,right:this.barRight,display:"block",backgroundColor:this.activeColor,height:this.lineWidth+"px",transition:this.hasReady?null:"none"}},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{index:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].index=e,t[e].selected&&(this.index=e)}}},props:{index:{type:Number,"default":0}},watch:{index:function(t,e){this.$children[e].selected=!1,this.$children[t].selected=!0}},data:function(){return{number:this.$children.length}}},i={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(t){t&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};e.parentMixin=n,e.childMixin=i},function(t,e){},function(t,e){t.exports="<div class=vux-tab :class=\"{'vux-tab-no-animate': !animate}\"> <slot></slot> <div v-if=animate class=vux-tab-ink-bar :class=barClass :style=barStyle></div> </div>"},function(t,e,n){var i,r;n(3),i=n(1),r=n(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxTabItem=t():e.vuxTabItem=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t["default"]={mixins:[i.childMixin],props:{activeClass:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.selected?this.$parent.activeColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].index=t,e[t].selected&&(this.index=t)}}},props:{index:{type:Number,"default":0}},watch:{index:function(e,t){this.$children[t].selected=!1,this.$children[e].selected=!0}},data:function(){return{number:this.$children.length}}},i={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(e){e&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};t.parentMixin=n,t.childMixin=i},function(e,t){e.exports="<div class=vux-tab-item :class=\"[selected ? activeClass : '', {'vux-tab-selected': selected}]\" :style=style @click=onItemClick> <slot></slot> </div>"},function(e,t,n){var i,o;i=n(1),o=n(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}])});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(30)
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-96dc0b2a/footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div class="mz-footer">
	// 		<span v-link="{name:'center'}">个人中心</span>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-footer{
	// 	position: absolute;
	// 	bottom: 0;
	// 	left: 0;
	// 	right: 0;
	// 	height: 60px;
	// 	background-image: url("/images/me.png");
	// 	background-repeat: no-repeat;
	// 	background-size: cover;
	// 	background-position: center;
	// 	color:#fff;
	// 	text-align: center;
	// }
	// .mz-footer span{
	// 	display: inline-block;
	// 	height: 60px;
	// 	width: 30%;
	// 	padding-top: 10px;
	// }
	// .mz-footer span:before{
	// 	content: "\e908";
	// 	font-family: 'MOZI';
	// 	display: block;
	// 	font-size: 1.6rem;
	// }
	// </style>
	//
	// <script>
	exports.default = {};
	// </script>

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-footer\">\n\t<span v-link=\"{name:'center'}\">个人中心</span>\n</div>\n";

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n<tab>\n\t<tab-item :selected=\"$route.name == 'dynamics'\" v-link=\"{name:'dynamics'}\">一周活动</tab-item>\n\t<tab-item :selected=\"$route.name == 'mysign'\" v-link=\"{name:'mysign'}\">我的打卡</tab-item>\n</tab>\n\n<router-view>\n</router-view>\n\n<foot></foot>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/dynamics.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(118)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6142fa64/dynamics.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _dynamicsCard = __webpack_require__(37);

	var _dynamicsCard2 = _interopRequireDefault(_dynamicsCard);

	var _activityGetter = __webpack_require__(57);

	var _activityAction = __webpack_require__(82);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _common = __webpack_require__(116);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	//
	// 	<scroller v-ref:scroller lock-x height="auto"
	// 	          use-pulldown
	// 	          @pulldown:loading="reload"
	// 	          style="position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;" >
	//
	// 		<div style="padding-bottom: 20px">
	// 			<loading v-ref:loading
	// 			         @on-refresh="query">
	// 			</loading>
	//
	// 			<card v-for="item in items"
	// 				    :title="item.title"
	// 			      :head-img-url="item.sponsor_avatar"
	// 				    :time-range="item.start_time+' —— '+item.end_time"
	// 				    :last-time="item.end_time"
	// 				    :number="item.signup_number"
	// 			      :money="item.deposit"
	// 			      :course="item.course_desc"
	// 			      :id="item.activity_id">
	// 			</card>
	//
	// 		</div>
	// 	</scroller>
	//
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			card: _dynamicsCard2.default,
			loading: _loading2.default,
			scroller: _index2.default
		},
		vuex: {
			actions: {
				activityListQuery: _activityAction.activityListQuery
			},
			getters: {
				items: _activityGetter.getActivityList
			}
		},
		methods: {
			query: function query() {
				var _self = this;
				this.$refs.loading.OnLoading();
				this.activityListQuery().then(function () {
					if ((0, _common.isEmptyObject)(_self.items)) {
						_self.$refs.loading.OnEmpty();
					} else {
						_self.$refs.loading.OnHide();
					}
				}).catch(function () {
					_self.$refs.loading.OnError();
				});
			},
			reload: function reload(uuid) {
				var _self = this;
				this.activityListQuery().then(function () {
					_self.$broadcast('pulldown:reset', uuid);
				}).catch(function () {
					_self.$broadcast('pulldown:reset', uuid);
				});
			}
		},
		watch: {
			items: function items() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			}
		},
		ready: function ready() {
			if (this.items.length === 0) {
				this.query();
			}
		}
	};
	// </script>
	//

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(38)
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/dynamicsCard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b91e8d8/dynamicsCard.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBottomShadow = __webpack_require__(40);

	var _boxWithBottomShadow2 = _interopRequireDefault(_boxWithBottomShadow);

	var _avatarItem = __webpack_require__(44);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _iconItem = __webpack_require__(48);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _recommend = __webpack_require__(52);

	var _recommend2 = _interopRequireDefault(_recommend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<card type="success">
	// 		<div style="padding: 15px 15px 0">
	// 			<avatar-item :avatar-url="headImgUrl" v-link="{name:'book',params:{id:id}}">
	// 				<h4>{{title}}</h4>
	// 				<icon-item>活动时间: {{timeRange}}</icon-item>
	// 				<!--<icon-item>每人交保证金: {{money}}</icon-item>-->
	// 				<icon-item>报名截至时间: {{lastTime}}</icon-item>
	// 				<icon-item>已报名人数: {{number}}人</icon-item>
	// 			</avatar-item>
	//
	// 			<recommend-item v-if="course">
	// 				<div slot="title">
	// 					相关教程:
	// 				</div>
	// 				<div slot="container">
	// 					<span class="mz-font-12" v-html="course | newLine"></span>
	// 				</div>
	// 			</recommend-item>
	// 		</div>
	// 	</card>
	// </template>
	//
	// <style>
	// 	.mz-font-12{
	// 		font-size: 1.2rem;
	// 		color: #666;
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			card: _boxWithBottomShadow2.default,
			avatarItem: _avatarItem2.default,
			iconItem: _iconItem2.default,
			recommendItem: _recommend2.default
		},
		props: {
			headImgUrl: String,
			title: String,
			timeRange: String,
			lastTime: String,
			number: Number,
			money: Number,
			course: String,
			id: Number
		}
	};
	// </script>

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(42)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/container/boxWithBottomShadow.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dc68aeb2/boxWithBottomShadow.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-card vux-1px-r" :class="classes">
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-card {
	// 	border-radius: 4px;
	// 	border: 1px solid #e3e3e3;
	// 	margin: 10px 13px 0;
	// 	/*padding: 15px 15px 0;*/
	// 	position: relative;
	// 	background: #fff;
	// }
	// .mz-shadow-success{
	// 	border-bottom: 3px solid #72e4dc;
	// }
	// .mz-shadow-ready{
	// 	border-bottom: 3px solid #5fb0f1;
	// }
	// .mz-shadow-failed{
	// 	border-bottom: 3px solid #fe7f85;
	// }
	// .mz-shadow-complete{
	// 	border-bottom: 3px solid #ffba27;
	// }
	// .mz-shadow-glass{
	// 	border-bottom: 3px solid #b0d160;
	// }
	// .mz-shadow-default{
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			type: {
				type: String,
				default: 'default'
			}
		},
		computed: {
			classes: function classes() {
				return ['mz-shadow-' + this.type];
			}
		}
	};
	// </script>

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-card vux-1px-r\" :class=\"classes\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(45)
	__vue_script__ = __webpack_require__(46)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/avatarItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-608bb981/avatarItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-item mz-item-avatar">
	// 		<div class="mz-avatar">
	// 			<img :src="avatarUrl" >
	// 			<span class="mz-text-center">{{name}}</span>
	// 		</div>
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-item{
	// 		position: relative;
	// 	}
	// 	.mz-item.mz-item-avatar{
	// 		min-height:72px ;
	// 		padding:10px 0 15px 70px;
	// 	}
	// 	.mz-avatar{
	// 		position:absolute;
	// 		top:4px;
	// 		left: 0;
	// 		max-height: 50px;
	// 		max-width: 50px;
	// 	}
	// 	.mz-avatar img{
	// 		max-height: 50px;
	// 		max-width: 50px;
	// 		width: 100%;
	// 		height: 100%;
	// 		border-radius: 50%;
	// 	}
	// 	.mz-avatar span{
	// 		display: block;
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			avatarUrl: String,
			name: String
		}
	};
	// </script>

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-item mz-item-avatar\">\n\t<div class=\"mz-avatar\">\n\t\t<img :src=\"avatarUrl\" >\n\t\t<span class=\"mz-text-center\">{{name}}</span>\n\t</div>\n\t<slot></slot>\n</div>\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(49)
	__vue_script__ = __webpack_require__(50)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/iconItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-68b4b03e/iconItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 49 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-item mz-item-icon">
	// 		<i class="mz-icon mz-icon-left" :class="classes"></i>
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-item-icon{
	// 		color:#666;
	// 		font-size:1.3rem;
	// 	}
	// 	.mz-icon-people:before{
	// 		content: '\e90d';
	// 	}
	// 	.mz-icon-money:before{
	// 		content: '\e90a';
	// 	}
	// 	.mz-icon-gift:before{
	// 		content: '\e90b';
	// 	}
	// 	.mz-icon-eye:before{
	// 		content: '\e904'
	// 	}
	// 	.mz-icon-detail:before{
	// 		content: '\e902'
	// 	}
	// 	.mz-icon-edit:before{
	// 		content: '\e906'
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			type: {
				type: String
			}
		},
		computed: {
			classes: function classes() {
				return ["mz-icon-" + this.type];
			}
		}
	};
	// </script>

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-item mz-item-icon\">\n\t<i class=\"mz-icon mz-icon-left\" :class=\"classes\"></i>\n\t<slot></slot>\n</div>\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(53)
	__vue_script__ = __webpack_require__(54)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/recommend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1ba364d7/recommend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div class="mz-item mz-recommend">
	// 		<div class="mz-recommend-title">
	// 			<slot name="title"></slot>
	// 		</div>
	// 		<slot name="container"></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-recommend{
	// 		padding: 11px 0 11px 60px ;
	// 		border-top:1px solid #72e4dc;
	//
	// 	}
	// 	.mz-recommend-title{
	// 		position: absolute;
	// 		left: 0;
	// 		width: 60px;
	// 		text-align: right;
	// 		font-size: 1.2rem;
	// 	}
	// </style>
	//
	// <script>
	exports.default = {};
	// </script>

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-item mz-recommend\">\n\t<div class=\"mz-recommend-title\">\n\t\t<slot name=\"title\"></slot>\n\t</div>\n\t<slot name=\"container\"></slot>\n</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\n<card type=\"success\">\n\t<div style=\"padding: 15px 15px 0\">\n\t\t<avatar-item :avatar-url=\"headImgUrl\" v-link=\"{name:'book',params:{id:id}}\">\n\t\t\t<h4>{{title}}</h4>\n\t\t\t<icon-item>活动时间: {{timeRange}}</icon-item>\n\t\t\t<!--<icon-item>每人交保证金: {{money}}</icon-item>-->\n\t\t\t<icon-item>报名截至时间: {{lastTime}}</icon-item>\n\t\t\t<icon-item>已报名人数: {{number}}人</icon-item>\n\t\t</avatar-item>\n\n\t\t<recommend-item v-if=\"course\">\n\t\t\t<div slot=\"title\">\n\t\t\t\t相关教程:\n\t\t\t</div>\n\t\t\t<div slot=\"container\">\n\t\t\t\t<span class=\"mz-font-12\" v-html=\"course | newLine\"></span>\n\t\t\t</div>\n\t\t</recommend-item>\n\t</div>\n</card>\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getActivityList = getActivityList;
	exports.getActivity = getActivity;
	exports.getSignList = getSignList;
	exports.getMessageList = getMessageList;
	exports.getOngoingActivityList = getOngoingActivityList;
	exports.getCompltedActivity = getCompltedActivity;
	exports.getTimeline = getTimeline;
	exports.getRecord = getRecord;
	exports.getSignInfo = getSignInfo;
	exports.getLastCommentInfo = getLastCommentInfo;
	exports.getRankList = getRankList;
	exports.getDirection = getDirection;
	exports.getCompletedActivityList = getCompletedActivityList;

	var _store = __webpack_require__(58);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getActivityList() {
		return _store2.default.state.activity.activityList;
	} /**
	   * Created by Alex on 16/8/19.
	   */
	function getActivity() {
		return _store2.default.state.activity.activity;
	}
	function getSignList() {
		return _store2.default.state.activity.signList;
	}

	function getMessageList() {
		return _store2.default.state.activity.messageList;
	}

	function getOngoingActivityList() {
		return _store2.default.state.activity.onGoingActivityList;
	}

	function getCompltedActivity() {
		return _store2.default.state.activity.completedActivity;
	}

	function getTimeline() {
		return _store2.default.state.activity.timeline;
	}

	function getRecord() {
		return _store2.default.state.activity.record;
	}

	function getSignInfo() {
		return _store2.default.state.activity.sign;
	}

	function getLastCommentInfo() {
		return _store2.default.state.activity.lastCommentSignInfo;
	}
	function getRankList() {
		return _store2.default.state.activity.rankList;
	}

	function getDirection() {
		return _store2.default.state.activity.direction;
	}

	function getCompletedActivityList() {
		return _store2.default.state.activity.completedActivityList;
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(20);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(59);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _activity = __webpack_require__(60);

	var _activity2 = _interopRequireDefault(_activity);

	var _user = __webpack_require__(81);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Alex on 16/8/19.
	 */

	_vue2.default.use(_vuex2.default);

	exports.default = new _vuex2.default.Store({
		modules: {
			activity: _activity2.default,
			user: _user2.default
		}
	});

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(61);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations; /**
	                 * Created by Alex on 16/8/19.
	                 */


	var _mutationTypes = __webpack_require__(80);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		activityList: [],
		activity: {},
		signList: [],
		messageList: [],
		onGoingActivityList: [],
		completedActivity: {},
		timeline: [],
		record: {},
		direction: 'forward',
		sign: {},
		lastActivityBookInfo: {},
		lastActivityBookSignList: [],
		lastActivityBookId: -1,
		lastActivitySignInfo: {},
		lastActivitySignList: [],
		lastActivitySignId: -1,
		lastCommentSignInfo: {},
		rankList: [],
		completedActivityList: []
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_LIST, function (state, list) {
		state.activityList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_INFO, function (state, activity) {
		state.activity = activity.data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_SIGN_LIST, function (state, list) {
		state.signList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.BOOK_ACTIVITY, function (state, list) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ZAN_ACTIVITY, function (state, list) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SIGN_ACTIVITY, function (state, list) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_MESSAGE_LIST, function (state, list) {
		state.messageList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.COMMIT_ACTIVITY_MESSAGE, function (state) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ONGOING_ACTIVITY_LIST, function (state, list) {
		state.onGoingActivityList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_COMPLETED_ACTIVITY_INFO, function (state, list) {
		state.completedActivity = list.data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_COMPLETED_ACTIVITY_TIMELINE, function (state, list) {
		state.timeline = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_RECORD, function (state, record) {
		state.record = record.data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_SIGN_INFO, function (state, info) {
		state.sign = info;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UNSHIFT_SIGN_INFO, function (state, info) {
		state.onGoingActivityList.forEach(function (activity) {
			if (activity.activity_id === info.activity_id) {
				info.signin_status = 1;
				info.activity_title = activity.activity_title;
				var index = state.onGoingActivityList.indexOf(activity);
				state.onGoingActivityList.$set(index, info);
			}
		});
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_LAST_ACTIVITY_BOOK_INFO, function (state, activity, signList) {
		state.lastActivityBookInfo = activity;
		state.lastActivityBookId = activity.info.activity_id;
		state.lastActivityBookSignList = signList;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_LAST_ACTIVITY_SIGN_INFO, function (state, activity, signList) {
		state.lastActivitySignInfo = activity;
		state.lastActivitySignId = activity.info.activity_id;
		state.lastActivitySignList = signList;
		state.lastActivitySignInfo = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_LAST_COMMENT_INFO, function (state, sign, commentList, activityId, signId) {
		state.lastCommentSignInfo = { activityId: activityId, signId: signId, sign: sign, commentList: commentList };
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.PUSH_LAST_COMMENT_SIGN_INFO, function (state, info) {
		state.lastCommentSignInfo.sign.comment_count++;
		state.lastCommentSignInfo.commentList.push(info);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_RANK_LIST, function (state, rankList) {
		state.rankList = rankList.data.list;
	}), (0, _defineProperty3.default)(_mutations, 'UPDATE_DIRECTION', function UPDATE_DIRECTION(state, direction) {
		state.direction = direction;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_COMPLETED_ACTIVITY_LIST, function (state, data) {
		state.completedActivityList = data.data.list;
	}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(62);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	var $Object = __webpack_require__(67).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(65);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(75), 'Object', {defineProperty: __webpack_require__(71).f});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(66)
	  , core      = __webpack_require__(67)
	  , ctx       = __webpack_require__(68)
	  , hide      = __webpack_require__(70)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 66 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 67 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(69);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(71)
	  , createDesc = __webpack_require__(79);
	module.exports = __webpack_require__(75) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(72)
	  , IE8_DOM_DEFINE = __webpack_require__(74)
	  , toPrimitive    = __webpack_require__(78)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(75) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(73);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(75) && !__webpack_require__(76)(function(){
	  return Object.defineProperty(__webpack_require__(77)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(76)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(73)
	  , document = __webpack_require__(66).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(73);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by Alex on 16/8/19.
	 */
	//活动
	var GET_ACTIVITY_LIST = exports.GET_ACTIVITY_LIST = 'GET_ACTIVITY_LIST';
	var GET_ACTIVITY_INFO = exports.GET_ACTIVITY_INFO = 'GET_ACTIVITY_INFO';
	var GET_ACTIVITY_SIGN_LIST = exports.GET_ACTIVITY_SIGN_LIST = 'GET_ACTIVITY_SIGN_LIST';
	var BOOK_ACTIVITY = exports.BOOK_ACTIVITY = 'BOOK_ACTIVITY';
	var ZAN_ACTIVITY = exports.ZAN_ACTIVITY = 'ZAN_ACTIVITY';
	var SIGN_UP_ACTIVITY = exports.SIGN_UP_ACTIVITY = 'SIGN_ACTIVITY';
	var GET_ACTIVITY_MESSAGE_LIST = exports.GET_ACTIVITY_MESSAGE_LIST = 'GET_ACTIVITY_MESSAGE_LIST';
	var COMMIT_ACTIVITY_MESSAGE = exports.COMMIT_ACTIVITY_MESSAGE = 'COMMIT_ACTIVITY_MESSAGE';
	var GET_RECORD = exports.GET_RECORD = 'GET_RECORD';

	var GET_USER_INFO = exports.GET_USER_INFO = 'GET_USER_INFO';

	var GET_ONGOING_ACTIVITY_LIST = exports.GET_ONGOING_ACTIVITY_LIST = 'GET_ONGOING_ACTIVITY_LIST';
	var GET_COMPLETED_ACTIVITY_INFO = exports.GET_COMPLETED_ACTIVITY_INFO = 'GET_COMPLETED_ACTIVITY_LIST';
	var GET_COMPLETED_ACTIVITY_TIMELINE = exports.GET_COMPLETED_ACTIVITY_TIMELINE = 'GET_COMPLETED_ACTIVITY_TIMELINE';

	var GET_CHILD_INFO = exports.GET_CHILD_INFO = 'GET_CHILD_INFO';
	var GET_USER_UP = exports.GET_USER_UP = 'GET_USER_UP';
	var POST_CHILD_UPDATE = exports.POST_CHILD_UPDATE = 'POST_CHILD_UPDATE';
	var POST_ALTER_CHILD_INFO = exports.POST_ALTER_CHILD_INFO = 'POST_ALTER_CHILD_INFO';
	var DELETE_CHILD_INFO = exports.DELETE_CHILD_INFO = 'DELETE_CHILD_INFO';

	var SET_EDIT_CHILD_INFO = exports.SET_EDIT_CHILD_INFO = 'SET_CHILD_INFO';
	var REMOVE_EDIT_CHILD_INFO = exports.REMOVE_EDIT_CHILD_INFO = 'REMOVE_CHILD_INFO';

	var SET_SIGN_INFO = exports.SET_SIGN_INFO = "SET_SIGN_INFO";

	var UNSHIFT_SIGN_INFO = exports.UNSHIFT_SIGN_INFO = 'UNSHIFT_SIGN_INFO';

	var SET_LAST_ACTIVITY_BOOK_INFO = exports.SET_LAST_ACTIVITY_BOOK_INFO = 'SET_LAST_ACTIVITY_BOOK_INFO';
	var SET_LAST_ACTIVITY_SIGN_INFO = exports.SET_LAST_ACTIVITY_SIGN_INFO = 'SET_LAST_ACTIVITY_SIGN_INFO';
	var SET_LAST_COMMENT_INFO = exports.SET_LAST_COMMENT_INFO = 'SET_LAST_COMMENT_INFO';

	var PUSH_LAST_COMMENT_SIGN_INFO = exports.PUSH_LAST_COMMENT_SIGN_INFO = 'PUSH_LAST_COMMENT_SIGN_INFO';
	var GET_RANK_LIST = exports.GET_RANK_LIST = 'GET_RANK_LIST';

	var UPDATE_USER_INFO = exports.UPDATE_USER_INFO = 'UPDATE_USER_INFO';

	var GET_COMPLETED_ACTIVITY_LIST = exports.GET_COMPLETED_ACTIVITY_LIST = 'GET_COMPLETED_ACTIVITY_LIST_1';

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(61);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations; /**
	                 * Created by Alex on 16/8/21.
	                 */

	var _mutationTypes = __webpack_require__(80);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		userInfo: {},
		childInfo: [],
		userUpInfo: {},
		childUpdate: {},
		alterChildInfo: {},
		child: {},
		status: 'SAVE'
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_USER_INFO, function (state, data) {
		state.userInfo = data.data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_CHILD_INFO, function (state, data) {
		state.childInfo = data.data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_USER_UP, function (state, data) {
		state.userUpInfo = data.data.info;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.POST_CHILD_UPDATE, function (state, data) {
		state.childUpdate = data.data;
		state.childInfo.push(data.data);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.POST_ALTER_CHILD_INFO, function (state, data) {
		state.alterChildInfo = data.data;
		state.childInfo.forEach(function (child) {
			if (child.id === data.data.id) {
				var index = state.childInfo.indexOf(child);
				state.childInfo.$set(index, data.data);
			}
		});
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_CHILD_INFO, function (state, id) {
		state.childInfo.forEach(function (child) {
			if (child.id === id) {
				var index = state.childInfo.indexOf(child);
				state.childInfo.splice(index, 1);
			}
		});
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SET_EDIT_CHILD_INFO, function (state, child) {
		state.child = child;
		state.status = 'EDIT';
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.REMOVE_EDIT_CHILD_INFO, function (state) {
		state.child = {};
		state.status = 'SAVE';
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_USER_INFO, function (state, data) {
		for (var key in data) {
			if (key === 'headImgUrl') {
				state.userUpInfo.user_avatar = data[key];
			}
		}
	}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getcompletedActivityListQuery = exports.rankListQuery = exports.pushLastCommentSign = exports.setLastCommentInfo = exports.setLastActivitySignInfo = exports.setLastActivityBookInfo = exports.unshiftSigninfo = exports.setSignInfo = exports.recordQuery = exports.activityCompletedTimeLineQuery = exports.activityCompletedInfoQuery = exports.activityOngoingListQuery = exports.activityMessageQuery = exports.activitySignListQuery = exports.activityQuery = exports.activityListQuery = undefined;

	var _activity = __webpack_require__(83);

	var _activity2 = _interopRequireDefault(_activity);

	var _mutationTypes = __webpack_require__(80);

	var types = _interopRequireWildcard(_mutationTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Alex on 16/8/19.
	 */
	var activityListQuery = exports.activityListQuery = function activityListQuery(_ref) {
		var dispatch = _ref.dispatch;

		return _activity2.default.API_GET_ACTIVITY_LIST().then(function (data) {
			dispatch(types.GET_ACTIVITY_LIST, data);
		});
	};

	var activityQuery = exports.activityQuery = function activityQuery(_ref2, id) {
		var dispatch = _ref2.dispatch;

		return _activity2.default.API_GET_ACTIVITY(id).then(function (data) {
			dispatch(types.GET_ACTIVITY_INFO, data);
		});
	};

	var activitySignListQuery = exports.activitySignListQuery = function activitySignListQuery(_ref3, id) {
		var dispatch = _ref3.dispatch;

		return _activity2.default.API_GET_SIGN_LIST(id).then(function (data) {
			dispatch(types.GET_ACTIVITY_SIGN_LIST, data);
		});
	};

	var activityMessageQuery = exports.activityMessageQuery = function activityMessageQuery(_ref4, activityId, signId) {
		var dispatch = _ref4.dispatch;

		return _activity2.default.API_GET_MESSAGE_LIST(activityId, signId).then(function (data) {
			dispatch(types.GET_ACTIVITY_MESSAGE_LIST, data);
		});
	};

	var activityOngoingListQuery = exports.activityOngoingListQuery = function activityOngoingListQuery(_ref5) {
		var dispatch = _ref5.dispatch;

		return _activity2.default.API_GET_ONGOING_ACTIVITY_LIST().then(function (data) {
			dispatch(types.GET_ONGOING_ACTIVITY_LIST, data);
		});
	};

	var activityCompletedInfoQuery = exports.activityCompletedInfoQuery = function activityCompletedInfoQuery(_ref6, id) {
		var dispatch = _ref6.dispatch;

		return _activity2.default.API_GET_COMPLETED_ACTIVITY(id).then(function (data) {
			dispatch(types.GET_COMPLETED_ACTIVITY_INFO, data);
		});
	};

	var activityCompletedTimeLineQuery = exports.activityCompletedTimeLineQuery = function activityCompletedTimeLineQuery(_ref7, id) {
		var dispatch = _ref7.dispatch;

		return _activity2.default.API_GET_COMPLETED_ACTIVITY_TIMELINE(id).then(function (data) {
			dispatch(types.GET_COMPLETED_ACTIVITY_TIMELINE, data);
		});
	};

	var recordQuery = exports.recordQuery = function recordQuery(_ref8, activity_id) {
		var dispatch = _ref8.dispatch;

		return _activity2.default.API_RECORD(activity_id).then(function (data) {
			dispatch(types.GET_RECORD, data);
		});
	};

	var setSignInfo = exports.setSignInfo = function setSignInfo(_ref9, info) {
		var dispatch = _ref9.dispatch;

		dispatch(types.SET_SIGN_INFO, info);
	};

	var unshiftSigninfo = exports.unshiftSigninfo = function unshiftSigninfo(_ref10, signInfo) {
		var dispatch = _ref10.dispatch;

		dispatch(types.UNSHIFT_SIGN_INFO, signInfo);
	};

	var setLastActivityBookInfo = exports.setLastActivityBookInfo = function setLastActivityBookInfo(_ref11, activity, signList) {
		var dispatch = _ref11.dispatch;

		dispatch(types.SET_LAST_ACTIVITY_BOOK_INFO, activity, signList);
	};

	var setLastActivitySignInfo = exports.setLastActivitySignInfo = function setLastActivitySignInfo(_ref12, activity, signList) {
		var dispatch = _ref12.dispatch;

		dispatch(types.SET_LAST_ACTIVITY_SIGN_INFO, activity, signList);
	};

	var setLastCommentInfo = exports.setLastCommentInfo = function setLastCommentInfo(_ref13, sign, commentList, activityId, signId) {
		var dispatch = _ref13.dispatch;

		dispatch(types.SET_LAST_COMMENT_INFO, sign, commentList, activityId, signId);
	};

	var pushLastCommentSign = exports.pushLastCommentSign = function pushLastCommentSign(_ref14, info) {
		var dispatch = _ref14.dispatch;

		dispatch(types.PUSH_LAST_COMMENT_SIGN_INFO, info);
	};

	var rankListQuery = exports.rankListQuery = function rankListQuery(_ref15) {
		var dispatch = _ref15.dispatch;

		return _activity2.default.API_GET_RANK_LIST().then(function (data) {
			dispatch(types.GET_RANK_LIST, data);
		});
	};

	var getcompletedActivityListQuery = exports.getcompletedActivityListQuery = function getcompletedActivityListQuery(_ref16, data) {
		var dispatch = _ref16.dispatch;

		return _activity2.default.API_GET_COMPLETED_ACTIVITY_LIST().then(function (data) {
			dispatch(types.GET_COMPLETED_ACTIVITY_LIST, data);
		});
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _resourse = __webpack_require__(84);

	var size = 10; /**
	                * Created by tao on 2016/8/19.
	                */

	exports.default = {
		API_GET_ACTIVITY_LIST: function API_GET_ACTIVITY_LIST() {
			return _resourse.activityListResource.get();
		},

		API_GET_ACTIVITY: function API_GET_ACTIVITY(id) {
			return _resourse.activityResource.get({ activity_id: id });
		},

		API_GET_SIGN_LIST: function API_GET_SIGN_LIST(id, page) {
			return _resourse.signListResource.get({ activity_id: id, page: page, page_size: size });
		},

		API_BOOK_ACTIVITY: function API_BOOK_ACTIVITY(id) {
			return _resourse.signUpResource.get({ activity_id: id });
		},

		API_SIGN_ACTIVITY: function API_SIGN_ACTIVITY(id, url, text) {
			return _resourse.signResource.save({ activity_id: id }, { text: text, image_url: url });
		},

		API_AGREE: function API_AGREE(activity_id, signin_id) {
			return _resourse.agreeResource.get({ activity_id: activity_id, signin_id: signin_id });
		},

		API_GET_MESSAGE_LIST: function API_GET_MESSAGE_LIST(activity_id, signin_id) {
			return _resourse.messageListResource.get({ activity_id: activity_id, signin_id: signin_id });
		},

		API_COMMIT_MESSAGE: function API_COMMIT_MESSAGE(activity_id, signin_id, content) {
			return _resourse.messageResource.save({ activity_id: activity_id, signin_id: signin_id }, { text: content });
		},

		API_GET_ONGOING_ACTIVITY_LIST: function API_GET_ONGOING_ACTIVITY_LIST() {
			return _resourse.ongoingActivityResource.get();
		},

		API_RECORD: function API_RECORD(activity_id) {
			return _resourse.recordResource.get({ activity_id: activity_id });
		},
		API_GET_COMPLETED_ACTIVITY_LIST: function API_GET_COMPLETED_ACTIVITY_LIST() {
			return _resourse.completedActivityListResource.get();
		},
		API_GET_COMPLETED_ACTIVITY: function API_GET_COMPLETED_ACTIVITY(id) {
			return _resourse.completedActivityInfoResource.get({ activity_id: id });
		},

		API_GET_COMPLETED_ACTIVITY_TIMELINE: function API_GET_COMPLETED_ACTIVITY_TIMELINE(id, page) {
			return _resourse.completedActivityTimelineResource.get({ activity_id: id, page: page, page_size: size });
		},

		API_GET_URL_BY_SERVERID: function API_GET_URL_BY_SERVERID(id) {
			return _resourse.getUrlByServerIdResource.get({ id: id });
		},

		API_GET_RANK_LIST: function API_GET_RANK_LIST() {
			return _resourse.rankListResource.get();
		}
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.rankListResource = exports.alterUserInfo_second = exports.alterUserInfo_first = exports.alterChildInfoResource = exports.deleteChildInfoResource = exports.childUpdateResource = exports.childResource = exports.getUrlByServerIdResource = exports.completedActivityTimelineResource = exports.completedActivityInfoResource = exports.completedActivityListResource = exports.ongoingActivityResource = exports.weixinJSSDKResource = exports.userupResource = exports.userResource = exports.recordResource = exports.messageListResource = exports.messageResource = exports.agreeResource = exports.signResource = exports.signUpResource = exports.signListResource = exports.activityResource = exports.activityListResource = undefined;

	var _vue = __webpack_require__(20);

	var _vue2 = _interopRequireDefault(_vue);

	var _reactCookie = __webpack_require__(85);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Alex on 16/8/19.
	 */

	var VueResource = __webpack_require__(87);
	_vue2.default.use(VueResource);
	_vue2.default.http.options.timeout = 10000;

	// 添加token
	_vue2.default.http.interceptors.push({
		request: function request(_request) {
			// 这里对请求体进行处理
			var cookies = _reactCookie2.default.load('Authorization');
			_request.headers = _request.headers || {};
			_request.headers.contentType = 'application/json';
			if (cookies) {
				_request.headers.Authorization = cookies;
			}
			return _request;
		}
	});

	var API_ROOT = '';

	var activityListResource = exports.activityListResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/list'); //近期活动列表
	var activityResource = exports.activityResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}'); //单个活动信息
	var signListResource = exports.signListResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}/signin_list'); //签到信息列表
	var signUpResource = exports.signUpResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}/signup'); //报名
	var signResource = exports.signResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}/signin'); //签到
	var agreeResource = exports.agreeResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}/{signin_id}/agree'); //点赞
	var messageResource = exports.messageResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}/{signin_id}/message'); //发表留言
	var messageListResource = exports.messageListResource = _vue2.default.resource(API_ROOT + '/api/signin/activity/{activity_id}/{signin_id}/message/list'); //获取留言列表
	var recordResource = exports.recordResource = _vue2.default.resource(API_ROOT + '/api/signin/user/record/{activity_id}'); //个人中心活动记录

	var userResource = exports.userResource = _vue2.default.resource(API_ROOT + '/api/self-info/'); // 获取个人信息
	var userupResource = exports.userupResource = _vue2.default.resource(API_ROOT + '/api/signin/user/self-info'); //个人中心信息
	var weixinJSSDKResource = exports.weixinJSSDKResource = _vue2.default.resource(API_ROOT + '/wechat/jsconfig/');

	var ongoingActivityResource = exports.ongoingActivityResource = _vue2.default.resource(API_ROOT + '/api/signin/user/signin_list'); //我的进行中的活动
	var completedActivityListResource = exports.completedActivityListResource = _vue2.default.resource(API_ROOT + '/api/signin/user/activity_list'); //我的所有活动列表
	var completedActivityInfoResource = exports.completedActivityInfoResource = _vue2.default.resource(API_ROOT + '/api/signin/user/record/{activity_id}'); //活动信息
	var completedActivityTimelineResource = exports.completedActivityTimelineResource = _vue2.default.resource(API_ROOT + '/api/signin/user/record/{activity_id}/signin_list'); //活动打卡时间轴

	var getUrlByServerIdResource = exports.getUrlByServerIdResource = _vue2.default.resource(API_ROOT + '/wechat/getMedia'); //根据serverId获取url


	var childResource = exports.childResource = _vue2.default.resource(API_ROOT + '/api/child'); //获取孩子信息
	var childUpdateResource = exports.childUpdateResource = _vue2.default.resource(API_ROOT + '/api/child'); //添加孩子信息
	var deleteChildInfoResource = exports.deleteChildInfoResource = _vue2.default.resource(API_ROOT + '/api/child/{id}'); //删除孩子信息
	var alterChildInfoResource = exports.alterChildInfoResource = _vue2.default.resource(API_ROOT + '/api/child/{id}'); //修改孩子信息
	var alterUserInfo_first = exports.alterUserInfo_first = _vue2.default.resource(API_ROOT + '/api/user/partial-update'); // 修改头像和昵称
	var alterUserInfo_second = exports.alterUserInfo_second = _vue2.default.resource(API_ROOT + '/api/profile/partial-update'); //修改地址和性别

	var rankListResource = exports.rankListResource = _vue2.default.resource(API_ROOT + '/api/signin/ranklist'); //排行榜

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(86);

	if (typeof Object.assign != 'function') {
	  Object.assign = function(target) {
	    'use strict';
	    if (target == null) {
	      throw new TypeError('Cannot convert undefined or null to object');
	    }

	    target = Object(target);
	    for (var index = 1; index < arguments.length; index++) {
	      var source = arguments[index];
	      if (source != null) {
	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }
	    }
	    return target;
	  };
	}

	var _rawCookie = {};
	var _res = undefined;

	function _isResWritable() {
	  if(!_res)
	    return false
	  if(_res.headersSent === true)
	    return false
	  return true
	}

	function load(name, doNotParse) {
	  var cookies = (typeof document === 'undefined') ? _rawCookie : cookie.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];

	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch(e) {
	      // Not serialized object
	    }
	  }

	  return cookieVal;
	}

	function select(regex) {
	  var cookies = (typeof document === 'undefined') ? _rawCookie : cookie.parse(document.cookie);
	  if(!cookies)
	    return {}
	  if(!regex)
	    return cookies
	  return Object.keys(cookies)
	    .reduce(function(accumulator, name) {
	      if(!regex.test(name))
	        return accumulator
	      var newCookie = {}
	      newCookie[name] = cookies[name]
	      return Object.assign({}, accumulator, newCookie)
	    }, {})
	}

	function save(name, val, opt) {
	  _rawCookie[name] = val;

	  // allow you to work with cookies as objects.
	  if (typeof val === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }

	  // Cookies only work in the browser
	  if (typeof document !== 'undefined') {
	    document.cookie = cookie.serialize(name, _rawCookie[name], opt);
	  }

	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}

	function remove(name, opt) {
	  delete _rawCookie[name];

	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  } else {
	    // Prevent mutation of opt below
	    opt = Object.assign({}, opt);
	  }

	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    document.cookie = cookie.serialize(name, '', opt);
	  }

	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}

	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = cookie.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}

	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }

	  _res = res;
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  }
	}

	var reactCookie = {
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  setRawCookie: setRawCookie,
	  plugToRequest: plugToRequest
	};

	if (typeof window !== 'undefined') {
	  window['reactCookie'] = reactCookie;
	}

	module.exports = reactCookie;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * Module exports.
	 * @public
	 */

	exports.parse = parse;
	exports.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var decode = decodeURIComponent;
	var encode = encodeURIComponent;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(/; */);
	  var dec = opt.decode || decode;

	  pairs.forEach(function(pair) {
	    var eq_idx = pair.indexOf('=')

	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      return;
	    }

	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();

	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }

	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  });

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var pairs = [name + '=' + value];

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    pairs.push('Max-Age=' + maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    pairs.push('Domain=' + opt.domain);
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    pairs.push('Path=' + opt.path);
	  }

	  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
	  if (opt.httpOnly) pairs.push('HttpOnly');
	  if (opt.secure) pairs.push('Secure');

	  return pairs.join('; ');
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */

	function install(Vue) {

	    var _ = __webpack_require__(88);

	    _.config = Vue.config;
	    _.warning = Vue.util.warn;
	    _.nextTick = Vue.util.nextTick;

	    Vue.url = __webpack_require__(89);
	    Vue.http = __webpack_require__(95);
	    Vue.resource = __webpack_require__(110);
	    Vue.Promise = __webpack_require__(97);

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function () {
	                return _.options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function () {
	                return _.options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function () {
	                return function (executor) {
	                    return new Vue.Promise(executor, this);
	                }.bind(this);
	            }
	        }

	    });
	}

	if (window.Vue) {
	    Vue.use(install);
	}

	module.exports = install;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Utility functions.
	 */

	var _ = exports, array = [], console = window.console;

	_.warn = function (msg) {
	    if (console && _.warning && (!_.config.silent || _.config.debug)) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	};

	_.error = function (msg) {
	    if (console) {
	        console.error(msg);
	    }
	};

	_.trim = function (str) {
	    return str.replace(/^\s*|\s*$/g, '');
	};

	_.toLower = function (str) {
	    return str ? str.toLowerCase() : '';
	};

	_.isArray = Array.isArray;

	_.isString = function (val) {
	    return typeof val === 'string';
	};

	_.isFunction = function (val) {
	    return typeof val === 'function';
	};

	_.isObject = function (obj) {
	    return obj !== null && typeof obj === 'object';
	};

	_.isPlainObject = function (obj) {
	    return _.isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	};

	_.options = function (fn, obj, options) {

	    options = options || {};

	    if (_.isFunction(options)) {
	        options = options.call(obj);
	    }

	    return _.merge(fn.bind({$vm: obj, $options: options}), fn, {$options: options});
	};

	_.each = function (obj, iterator) {

	    var i, key;

	    if (typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (_.isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	};

	_.defaults = function (target, source) {

	    for (var key in source) {
	        if (target[key] === undefined) {
	            target[key] = source[key];
	        }
	    }

	    return target;
	};

	_.extend = function (target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (arg) {
	        merge(target, arg);
	    });

	    return target;
	};

	_.merge = function (target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (arg) {
	        merge(target, arg, true);
	    });

	    return target;
	};

	function merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
	            if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (_.isArray(source[key]) && !_.isArray(target[key])) {
	                target[key] = [];
	            }
	            merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for URL templating.
	 */

	var _ = __webpack_require__(88);
	var ie = document.documentMode;
	var el = document.createElement('a');

	function Url(url, params) {

	    var options = url, transform;

	    if (_.isString(url)) {
	        options = {url: url, params: params};
	    }

	    options = _.merge({}, Url.options, this.$options, options);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, this.$vm);
	    }, this);

	    return transform(options);
	};

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [
	    __webpack_require__(90),
	    __webpack_require__(92),
	    __webpack_require__(93),
	    __webpack_require__(94)
	];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [], escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (_.isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;

	    _.each(obj, function (value, key) {

	        hash = _.isObject(value) || _.isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	module.exports = _.url = Url;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * URL Template (RFC 6570) Transform.
	 */

	var UrlTemplate = __webpack_require__(91);

	module.exports = function (options) {

	    var variables = [], url = UrlTemplate.expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	};


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	exports.expand = function (url, params, variables) {

	    var tmpl = this.parse(url), expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	};

	exports.parse = function (template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null, values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, exports.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }

	                } else {
	                    return exports.encodeReserved(literal);
	                }
	            });
	        }
	    };
	};

	exports.getValues = function (context, operator, key, modifier) {

	    var value = context[key], result = [];

	    if (this.isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(this.isDefined).forEach(function (value) {
	                        result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
	                    }, this);
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (this.isDefined(value[k])) {
	                            result.push(this.encodeValue(operator, value[k], k));
	                        }
	                    }, this);
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(this.isDefined).forEach(function (value) {
	                        tmp.push(this.encodeValue(operator, value));
	                    }, this);
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (this.isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(this.encodeValue(operator, value[k].toString()));
	                        }
	                    }, this);
	                }

	                if (this.isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	};

	exports.isDefined = function (value) {
	    return value !== undefined && value !== null;
	};

	exports.isKeyOperator = function (operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	};

	exports.encodeValue = function (operator, value, key) {

	    value = (operator === '+' || operator === '#') ? this.encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	};

	exports.encodeReserved = function (str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Legacy Transform.
	 */

	var _ = __webpack_require__(88);

	module.exports = function (options, next) {

	    var variables = [], url = next(options);

	    url = url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {

	        _.warn('The `:' + name + '` parameter syntax has been deprecated. Use the `{' + name + '}` syntax instead.');

	        if (options.params[name]) {
	            variables.push(name);
	            return slash + encodeUriSegment(options.params[name]);
	        }

	        return '';
	    });

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	};

	function encodeUriSegment(value) {

	    return encodeUriQuery(value, true).
	        replace(/%26/gi, '&').
	        replace(/%3D/gi, '=').
	        replace(/%2B/gi, '+');
	}

	function encodeUriQuery(value, spaces) {

	    return encodeURIComponent(value).
	        replace(/%40/gi, '@').
	        replace(/%3A/gi, ':').
	        replace(/%24/g, '$').
	        replace(/%2C/gi, ',').
	        replace(/%20/g, (spaces ? '%20' : '+'));
	}


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Query Parameter Transform.
	 */

	var _ = __webpack_require__(88);

	module.exports = function (options, next) {

	    var urlParams = Object.keys(_.url.options.params), query = {}, url = next(options);

	   _.each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = _.url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	};


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Root Prefix Transform.
	 */

	var _ = __webpack_require__(88);

	module.exports = function (options, next) {

	    var url = next(options);

	    if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for sending network requests.
	 */

	var _ = __webpack_require__(88);
	var Client = __webpack_require__(96);
	var Promise = __webpack_require__(97);
	var interceptor = __webpack_require__(100);
	var jsonType = {'Content-Type': 'application/json'};

	function Http(url, options) {

	    var client = Client, request, promise;

	    Http.interceptors.forEach(function (handler) {
	        client = interceptor(handler, this.$vm)(client);
	    }, this);

	    options = _.isObject(url) ? url : _.extend({url: url}, options);
	    request = _.merge({}, Http.options, this.$options, options);
	    promise = client(request).bind(this.$vm).then(function (response) {

	        return response.ok ? response : Promise.reject(response);

	    }, function (response) {

	        if (response instanceof Error) {
	            _.error(response);
	        }

	        return Promise.reject(response);
	    });

	    if (request.success) {
	        promise.success(request.success);
	    }

	    if (request.error) {
	        promise.error(request.error);
	    }

	    return promise;
	}

	Http.options = {
	    method: 'get',
	    data: '',
	    params: {},
	    headers: {},
	    xhr: null,
	    upload: null,
	    jsonp: 'callback',
	    beforeSend: null,
	    crossOrigin: null,
	    emulateHTTP: false,
	    emulateJSON: false,
	    timeout: 0
	};

	Http.interceptors = [
	    __webpack_require__(101),
	    __webpack_require__(102),
	    __webpack_require__(103),
	    __webpack_require__(105),
	    __webpack_require__(106),
	    __webpack_require__(107),
	    __webpack_require__(108)
	];

	Http.headers = {
	    put: jsonType,
	    post: jsonType,
	    patch: jsonType,
	    delete: jsonType,
	    common: {'Accept': 'application/json, text/plain, */*'},
	    custom: {'X-Requested-With': 'XMLHttpRequest'}
	};

	['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

	    Http[method] = function (url, data, success, options) {

	        if (_.isFunction(data)) {
	            options = success;
	            success = data;
	            data = undefined;
	        }

	        if (_.isObject(success)) {
	            options = success;
	            success = undefined;
	        }

	        return this(url, _.extend({method: method, data: data, success: success}, options));
	    };
	});

	module.exports = _.http = Http;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Base client.
	 */

	var _ = __webpack_require__(88);
	var Promise = __webpack_require__(97);
	var xhrClient = __webpack_require__(99);

	module.exports = function (request) {

	    var response = (request.client || xhrClient)(request);

	    return Promise.resolve(response).then(function (response) {

	        if (response.headers) {

	            var headers = parseHeaders(response.headers);

	            response.headers = function (name) {

	                if (name) {
	                    return headers[_.toLower(name)];
	                }

	                return headers;
	            };

	        }

	        response.ok = response.status >= 200 && response.status < 300;

	        return response;
	    });

	};

	function parseHeaders(str) {

	    var headers = {}, value, name, i;

	    if (_.isString(str)) {
	        _.each(str.split('\n'), function (row) {

	            i = row.indexOf(':');
	            name = _.trim(_.toLower(row.slice(0, i)));
	            value = _.trim(row.slice(i + 1));

	            if (headers[name]) {

	                if (_.isArray(headers[name])) {
	                    headers[name].push(value);
	                } else {
	                    headers[name] = [headers[name], value];
	                }

	            } else {

	                headers[name] = value;
	            }

	        });
	    }

	    return headers;
	}


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Promise adapter.
	 */

	var _ = __webpack_require__(88);
	var PromiseObj = window.Promise || __webpack_require__(98);

	function Promise(executor, context) {

	    if (executor instanceof PromiseObj) {
	        this.promise = executor;
	    } else {
	        this.promise = new PromiseObj(executor.bind(context));
	    }

	    this.context = context;
	}

	Promise.all = function (iterable, context) {
	    return new Promise(PromiseObj.all(iterable), context);
	};

	Promise.resolve = function (value, context) {
	    return new Promise(PromiseObj.resolve(value), context);
	};

	Promise.reject = function (reason, context) {
	    return new Promise(PromiseObj.reject(reason), context);
	};

	Promise.race = function (iterable, context) {
	    return new Promise(PromiseObj.race(iterable), context);
	};

	var p = Promise.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    this.promise = this.promise.then(fulfilled, rejected);

	    return this;
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    this.promise = this.promise.catch(rejected);

	    return this;
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	            callback.call(this);
	            return value;
	        }, function (reason) {
	            callback.call(this);
	            return PromiseObj.reject(reason);
	        }
	    );
	};

	p.success = function (callback) {

	    _.warn('The `success` method has been deprecated. Use the `then` method instead.');

	    return this.then(function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    });
	};

	p.error = function (callback) {

	    _.warn('The `error` method has been deprecated. Use the `catch` method instead.');

	    return this.catch(function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    });
	};

	p.always = function (callback) {

	    _.warn('The `always` method has been deprecated. Use the `finally` method instead.');

	    var cb = function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    };

	    return this.then(cb, cb);
	};

	module.exports = Promise;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var _ = __webpack_require__(88);

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING  = 2;

	function Promise(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise.reject = function (r) {
	    return new Promise(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise.resolve = function (x) {
	    return new Promise(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise.all = function all(iterable) {
	    return new Promise(function (resolve, reject) {
	        var count = 0, result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise.race = function race(iterable) {
	    return new Promise(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p = Promise.prototype;

	p.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;

	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p.notify = function notify() {
	    var promise = this;

	    _.nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	module.exports = Promise;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XMLHttp client.
	 */

	var _ = __webpack_require__(88);
	var Promise = __webpack_require__(97);

	module.exports = function (request) {
	    return new Promise(function (resolve) {

	        var xhr = new XMLHttpRequest(), response = {request: request}, handler;

	        request.cancel = function () {
	            xhr.abort();
	        };

	        xhr.open(request.method, _.url(request), true);

	        handler = function (event) {

	            response.data = xhr.responseText;
	            response.status = xhr.status;
	            response.statusText = xhr.statusText;
	            response.headers = xhr.getAllResponseHeaders();

	            resolve(response);
	        };

	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onabort = handler;
	        xhr.onerror = handler;
	        xhr.ontimeout = function () {};
	        xhr.onprogress = function () {};

	        if (_.isPlainObject(request.xhr)) {
	            _.extend(xhr, request.xhr);
	        }

	        if (_.isPlainObject(request.upload)) {
	            _.extend(xhr.upload, request.upload);
	        }

	        _.each(request.headers || {}, function (value, header) {
	            xhr.setRequestHeader(header, value);
	        });

	        xhr.send(request.data);
	    });
	};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Interceptor factory.
	 */

	var _ = __webpack_require__(88);
	var Promise = __webpack_require__(97);

	module.exports = function (handler, vm) {

	    return function (client) {

	        if (_.isFunction(handler)) {
	            handler = handler.call(vm, Promise);
	        }

	        return function (request) {

	            if (_.isFunction(handler.request)) {
	                request = handler.request.call(vm, request);
	            }

	            return when(request, function (request) {
	                return when(client(request), function (response) {

	                    if (_.isFunction(handler.response)) {
	                        response = handler.response.call(vm, response);
	                    }

	                    return response;
	                });
	            });
	        };
	    };
	};

	function when(value, fulfilled, rejected) {

	    var promise = Promise.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Before Interceptor.
	 */

	var _ = __webpack_require__(88);

	module.exports = {

	    request: function (request) {

	        if (_.isFunction(request.beforeSend)) {
	            request.beforeSend.call(this, request);
	        }

	        return request;
	    }

	};


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Timeout Interceptor.
	 */

	module.exports = function () {

	    var timeout;

	    return {

	        request: function (request) {

	            if (request.timeout) {
	                timeout = setTimeout(function () {
	                    request.cancel();
	                }, request.timeout);
	            }

	            return request;
	        },

	        response: function (response) {

	            clearTimeout(timeout);

	            return response;
	        }

	    };
	};


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP Interceptor.
	 */

	var jsonpClient = __webpack_require__(104);

	module.exports = {

	    request: function (request) {

	        if (request.method == 'JSONP') {
	            request.client = jsonpClient;
	        }

	        return request;
	    }

	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP client.
	 */

	var _ = __webpack_require__(88);
	var Promise = __webpack_require__(97);

	module.exports = function (request) {
	    return new Promise(function (resolve) {

	        var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {request: request, data: null}, handler, script;

	        request.params[request.jsonp] = callback;
	        request.cancel = function () {
	            handler({type: 'cancel'});
	        };

	        script = document.createElement('script');
	        script.src = _.url(request);
	        script.type = 'text/javascript';
	        script.async = true;

	        window[callback] = function (data) {
	            response.data = data;
	        };

	        handler = function (event) {

	            if (event.type === 'load' && response.data !== null) {
	                response.status = 200;
	            } else if (event.type === 'error') {
	                response.status = 404;
	            } else {
	                response.status = 0;
	            }

	            resolve(response);

	            delete window[callback];
	            document.body.removeChild(script);
	        };

	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	};


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * HTTP method override Interceptor.
	 */

	module.exports = {

	    request: function (request) {

	        if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	            request.headers['X-HTTP-Method-Override'] = request.method;
	            request.method = 'POST';
	        }

	        return request;
	    }

	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Mime Interceptor.
	 */

	var _ = __webpack_require__(88);

	module.exports = {

	    request: function (request) {

	        if (request.emulateJSON && _.isPlainObject(request.data)) {
	            request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            request.data = _.url.params(request.data);
	        }

	        if (_.isObject(request.data) && /FormData/i.test(request.data.toString())) {
	            delete request.headers['Content-Type'];
	        }

	        if (_.isPlainObject(request.data)) {
	            request.data = JSON.stringify(request.data);
	        }

	        return request;
	    },

	    response: function (response) {

	        try {
	            response.data = JSON.parse(response.data);
	        } catch (e) {}

	        return response;
	    }

	};


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Header Interceptor.
	 */

	var _ = __webpack_require__(88);

	module.exports = {

	    request: function (request) {

	        request.method = request.method.toUpperCase();
	        request.headers = _.extend({}, _.http.headers.common,
	            !request.crossOrigin ? _.http.headers.custom : {},
	            _.http.headers[request.method.toLowerCase()],
	            request.headers
	        );

	        if (_.isPlainObject(request.data) && /^(GET|JSONP)$/i.test(request.method)) {
	            _.extend(request.params, request.data);
	            delete request.data;
	        }

	        return request;
	    }

	};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * CORS Interceptor.
	 */

	var _ = __webpack_require__(88);
	var xdrClient = __webpack_require__(109);
	var xhrCors = 'withCredentials' in new XMLHttpRequest();
	var originUrl = _.url.parse(location.href);

	module.exports = {

	    request: function (request) {

	        if (request.crossOrigin === null) {
	            request.crossOrigin = crossOrigin(request);
	        }

	        if (request.crossOrigin) {

	            if (!xhrCors) {
	                request.client = xdrClient;
	            }

	            request.emulateHTTP = false;
	        }

	        return request;
	    }

	};

	function crossOrigin(request) {

	    var requestUrl = _.url.parse(_.url(request));

	    return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
	}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XDomain client (Internet Explorer).
	 */

	var _ = __webpack_require__(88);
	var Promise = __webpack_require__(97);

	module.exports = function (request) {
	    return new Promise(function (resolve) {

	        var xdr = new XDomainRequest(), response = {request: request}, handler;

	        request.cancel = function () {
	            xdr.abort();
	        };

	        xdr.open(request.method, _.url(request), true);

	        handler = function (event) {

	            response.data = xdr.responseText;
	            response.status = xdr.status;
	            response.statusText = xdr.statusText;

	            resolve(response);
	        };

	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onabort = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = function () {};
	        xdr.onprogress = function () {};

	        xdr.send(request.data);
	    });
	};


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for interacting with RESTful services.
	 */

	var _ = __webpack_require__(88);

	function Resource(url, params, actions, options) {

	    var self = this, resource = {};

	    actions = _.extend({},
	        Resource.actions,
	        actions
	    );

	    _.each(actions, function (action, name) {

	        action = _.merge({url: url, params: params || {}}, options, action);

	        resource[name] = function () {
	            return (self.$http || _.http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options = _.extend({}, action), params = {}, data, success, error;

	    switch (args.length) {

	        case 4:

	            error = args[3];
	            success = args[2];

	        case 3:
	        case 2:

	            if (_.isFunction(args[1])) {

	                if (_.isFunction(args[0])) {

	                    success = args[0];
	                    error = args[1];

	                    break;
	                }

	                success = args[1];
	                error = args[2];

	            } else {

	                params = args[0];
	                data = args[1];
	                success = args[2];

	                break;
	            }

	        case 1:

	            if (_.isFunction(args[0])) {
	                success = args[0];
	            } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                data = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	    }

	    options.data = data;
	    options.params = _.extend({}, options.params, params);

	    if (success) {
	        options.success = success;
	    }

	    if (error) {
	        options.error = error;
	    }

	    return options;
	}

	Resource.actions = {

	    get: {method: 'GET'},
	    save: {method: 'POST'},
	    query: {method: 'GET'},
	    update: {method: 'PUT'},
	    remove: {method: 'DELETE'},
	    delete: {method: 'DELETE'}

	};

	module.exports = _.resource = Resource;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(112)
	__vue_script__ = __webpack_require__(113)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/load/loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-79041f6a/loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 112 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(114);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			spinner: _index2.default
		},
		data: function data() {
			return {
				loading: false,
				error: false,
				empty: false
			};
		},
		methods: {
			OnError: function OnError() {
				this.error = true;
				this.empty = false;
				this.loading = false;
			},
			OnEmpty: function OnEmpty() {
				this.error = false;
				this.empty = true;
				this.loading = false;
			},
			OnHide: function OnHide() {
				this.error = false;
				this.empty = false;
				this.loading = false;
			},
			OnLoading: function OnLoading() {
				this.error = false;
				this.empty = false;
				this.loading = true;
			},
			OnRefresh: function OnRefresh() {
				this.$emit('on-refresh');
			}
		}
	};
	// </script>
	// <template>
	// 	<div v-if="loading" class="mz-loading">
	// 		<spinner type="dots" ></spinner>
	// 	</div>
	// 	<div  v-if="error" class="mz-error-line">
	// 		<a href="javascript:;" @click="OnRefresh">网络异常,点击刷新</a>
	// 	</div>
	//
	// 	<div  v-if="empty" class="mz-error-line">
	// 		<p class="text-center">暂无相关内容~</p>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-loading{
	// 	padding: 40px 0;
	// 	text-align: center;
	// }
	// .mz-error-line{
	// 	text-align: center;
	// 	padding: 10px 0;
	// }
	// .mz-error-line a{
	// 	color: #333;
	// }
	// </style>
	//
	// <script>

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuxSpinner=n():t.vuxSpinner=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(6)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(3),i=r(o),a=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];n["default"]={ready:function(){(0,i["default"])(this.$el,this.type)},props:{type:{type:String,"default":"ios"}},computed:{className:function(){for(var t={},n=0;n<a.length;n++)t["vux-spinner-"+a[n]]=this.type===a[n];return t}}}},function(t,n){"use strict";for(var e=0,r=["webkit","moz"],o=0;o<r.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[r[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[o]+"CancelAnimationFrame"]||window[r[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),i=window.setTimeout(function(){t(r+o)},o);return e=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},function(t,n,e){"use strict";function r(t,n,e,i){var a,s,c,u=document.createElement(p[t]||t);for(a in n)if("[object Array]"===Object.prototype.toString.call(n[a]))for(s=0;s<n[a].length;s++)if(n[a][s].fn)for(c=0;c<n[a][s].t;c++)r(a,n[a][s].fn(c,i),u,i);else r(a,n[a][s],u,i);else o(u,a,n[a]);e.appendChild(u)}function o(t,n,e){t.setAttribute(p[n]||n,e)}function i(t,n){var e=t.split(";"),r=e.slice(n),o=e.slice(0,e.length-r.length);return e=r.concat(o).reverse(),e.join(";")+";"+e[0]}function a(t,n){return t/=n/2,1>t?.5*t*t*t:(t-=2,.5*(t*t*t+2))}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(t,n){function e(){x[o]&&(i=x[o](t)())}var o,i;o=n;var a=document.createElement("div");return r("svg",{viewBox:"0 0 64 64",g:[w[o]]},a,o),t.innerHTML=a.innerHTML,e(),t},e(2);var s="translate(32,32)",c="stroke-opacity",u="round",f="indefinite",l="750ms",d="none",p={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},m={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:f,dur:l},v={sw:4,lc:u,line:[{fn:function(t,n){return{y1:"ios"===n?17:12,y2:"ios"===n?29:20,t:s+" rotate("+(30*t+(6>t?180:-180))+")",a:[{fn:function(){return{an:c,dur:l,v:i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:f}},t:1}]}},t:12}]},w={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:d}]},ios:v,"ios-small":v,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:s,a:[{fn:function(){return{an:"r",dur:l,v:i("1;2;3;4;5;6;7;8",t),rc:f}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:s,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:l,v:i(".3;.3;.3;.4;.7;.85;.9;1",t),rc:f}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:d,at:[m]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:l,v:i(".5;.6;.8;1;.8;.6;.5",t),rc:f}},t:1},{fn:function(){return{an:"r",dur:l,v:i("4;5;6;5;4;3;3",t),rc:f}},t:1}]}},t:3}]},lines:{sw:7,lc:u,line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:l,v:i("16;18;28;18;16",t),rc:f}},t:1},{fn:function(){return{an:"y2",dur:l,v:i("48;44;36;46;48",t),rc:f}},t:1},{fn:function(){return{an:c,dur:l,v:i("1;.8;.5;.4;1",t),rc:f}},t:1}]}},t:4}]},ripple:{f:d,"fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:f}},t:1},{fn:function(){return{an:c,begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:f}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,"class":"stop1"},{offset:1,"class":"stop2"}]}]}],g:[{sw:4,lc:u,f:d,path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[m]}]}},x={android:function(t){function n(){if(!e.stop){var t=a(Date.now()-r,650),f=1,l=0,d=188-58*t,p=182-182*t;i%2&&(f=-1,l=-64,d=128- -58*t,p=182*t);var m=[0,-101,-90,-11,-180,79,-270,-191][i];o(u,"da",Math.max(Math.min(d,188),128)),o(u,"os",Math.max(Math.min(p,182),0)),o(u,"t","scale("+f+",1) translate("+l+",0) rotate("+m+",32,32)"),s+=4.1,s>359&&(s=0),o(c,"t","rotate("+s+",32,32)"),t>=1&&(i++,i>7&&(i=0),r=Date.now()),requestAnimationFrame(n)}}var e=this;this.stop=!1;var r,i=0,s=0,c=t.querySelector("g"),u=t.querySelector("circle");return function(){return r=Date.now(),n(),e}}}},function(t,n){},function(t,n){t.exports="<span class=vux-spinner :class=className></span>"},function(t,n,e){var r,o;e(4),r=e(1),o=e(5),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"loading\" class=\"mz-loading\">\n\t<spinner type=\"dots\" ></spinner>\n</div>\n<div  v-if=\"error\" class=\"mz-error-line\">\n\t<a href=\"javascript:;\" @click=\"OnRefresh\">网络异常,点击刷新</a>\n</div>\n\n<div  v-if=\"empty\" class=\"mz-error-line\">\n\t<p class=\"text-center\">暂无相关内容~</p>\n</div>\n";

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by Alex on 16/8/23.
	 */

	var isEmptyObject = exports.isEmptyObject = function isEmptyObject(e) {
		for (var t in e) {
			return !1;
		}
		return !0;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxScroller=e():t.vuxScroller=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(48)},function(t,e,n){var i;i=function(t,e,n){"use strict";function i(){}function r(t,e){var n;return Object.create?n=Object.create(t):(i.prototype=t,n=new i),n.constructor=e,n}function o(t,e){if(t){if(t.nodeType)return[t];var e=e&&e.nodeType?e:document;return t&&"string"==typeof t?e.querySelectorAll(t):void 0}}for(var s=/\\?\{([^{}]+)\}/g,u="",l=/^[\s\xa0]+|[\s\xa0]+$/g,c=String.prototype.trim,a=c?function(t){return null==t?u:c.call(t)}:function(t){return null==t?u:(t+"").replace(l,u)},f=0,h=function(t){var e=t.offsetTop;return null!=t.offsetParent&&(e+=h(t.offsetParent)),e},d=function(t){var e=t.offsetLeft;return null!=t.offsetParent&&(e+=d(t.offsetParent)),e},p=({isObject:function(t){return t===Object(t)},isArray:Array.isArray||function(t){return"[object Array]"==toString.call(t)},isEmpty:function(t){if(null==t)return!0;if(this.isArray(t)||this.isString(t))return 0===t.length;for(var e in t)if(this.has(t,e))return!1;return!0},mix:function(t,e,n){for(var i in e)t[i]=e[i];return t},extend:function(t,e,n,i){if(!e||!t)return t;var o,s=e.prototype;return o=r(s,t),t.prototype=this.mix(o,t.prototype),t.superclass=r(s,e),n&&this.mix(o,n),i&&this.mix(t,i),t},startsWith:function(t,e){return 0===t.lastIndexOf(e,0)},endsWith:function(t,e){var n=t.length-e.length;return n>=0&&t.indexOf(e,n)===n},trim:a,substitute:function(t,e,n){return"string"==typeof t&&e?t.replace(n||s,function(t,n){return"\\"===t.charAt(0)?t.slice(1):void 0===e[n]?u:e[n]}):t},vendor:function(){for(var t,e=document.createElement("div").style,n=["t","webkitT","MozT","msT","OT"],i=0,r=n.length;r>i;i++)if(t=n[i]+"ransform",t in e)return n[i].substr(0,n[i].length-1);return!1}(),prefixStyle:function(t){return this.vendor===!1?!1:""===this.vendor?t:this.vendor+t.charAt(0).toUpperCase()+t.substr(1)},hasClass:function(t,e){return t&&t.className&&e&&-1!=t.className.indexOf(e)},addClass:function(t,e){t&&e&&!this.hasClass(t,e)&&(t.className+=" "+e)},removeClass:function(t,e){t&&t.className&&e&&(t.className=t.className.replace(e,""))},remove:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},getOffsetTop:h,getOffsetLeft:d,findParentEl:function(t,e,n){var i=null,r=null,o=/^#/.test(e)?"id":/^\./.test(e)?"class":"tag",s=e.replace(/\.|#/g,"");if(n&&"string"==typeof n&&(n=document.querySelector(n)),n=n||document.body,t&&e){if("class"==o&&t.className&&t.className.match(s))return t;if("id"==o&&t.id&&a(t.id)==s)return t;if("tag"==o&&t.tagName.toLowerCase()==s)return t;for(;!i&&r!=n&&(r=t.parentNode);){if("class"==o&&r.className&&r.className.match(s)||"id"==o&&r.id&&a(r.id)==s||"tag"==o&&r.tagName&&r.tagName.toLowerCase()==s)return i=r;t=r}return null}},guid:function(t){var e=++f+"";return t?t+e:e},isAndroid:function(){return/Android /.test(window.navigator.appVersion)},isBadAndroid:function(){return/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion)},px2Num:function(t){return Number(t.replace(/px/,""))},getNodes:o,getNode:function(t,e){var n=o(t,e);return n&&n[0]},stringifyStyle:function(t){var e="";for(var n in t)e+=[n,":",t[n],";"].join("");return e}}),g=["Arguments","Function","String","Number","Date","RegExp"],v=0;v<g.length;v++)p["is"+g[v]]=function(t){return toString.call(t)=="[object "+g[v]+"]"};return"object"==typeof n&&n.exports?void(n.exports=p):p}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=n(54),s=function(){};return r.mix(s.prototype,o),r.mix(s.prototype,{plug:function(t){var e=this;if(t&&t.pluginId){e.__plugins||(e.__plugins=[]);var n=e.getPlugin(t.pluginId);return n&&e.unplug(t.pluginId),t.pluginInitializer(e),e.__plugins.push(t),e}},unplug:function(t){var e=this;if(t&&e.__plugins){var n="string"==typeof t?e.getPlugin(t):t;n.pluginDestructor(e);for(var i=0,r=e.__plugins.length;r>i;i++)if(e.__plugins[i]==n)return e.__plugins.splice(i,1)}},getPlugin:function(t){var e=this,n=[];if(e.__plugins){for(var i=0,r=e.__plugins.length;r>i;i++)e.__plugins[i]&&e.__plugins[i].pluginId==t&&n.push(e.__plugins[i]);return n.length>1?n:n[0]||null}}}),"object"==typeof i&&i.exports?void(i.exports=s):s}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";function r(t){return Math.round(1e5*parseFloat(t))/1e5}function o(){return{translateX:0,translateY:0,rotate:0,skewX:0,skewY:0,scaleX:1,scaleY:1}}function s(t){return t=t.split(/,/),t=Array.prototype.map.call(t,function(t){return r(t)})}function u(t){t=s(t);var e,n,i,o=t[0],u=t[1],l=t[2],c=t[3];return o*c-u*l?(e=Math.sqrt(o*o+u*u),i=(o*l+u*c)/(o*c-l*u),n=(o*c-u*l)/e,u*l>o*c&&(i=-i,e=-e)):e=n=i=0,{translateX:r(t[4]),translateY:r(t[5]),rotate:r(180*Math.atan2(u,o)/Math.PI),skewX:r(180*Math.atan(i)/Math.PI),skewY:0,scaleX:r(e),scaleY:r(n)}}function l(t){t=t.split(")");for(var e,n,i,s=d.trim,l=-1,c=t.length-1,a=o();++l<c;)switch(e=t[l].split("("),n=s(e[0]),i=e[1],n){case"translateX":case"translateY":case"scaleX":case"scaleY":a[n]=r(i);break;case"translate":case"translate3d":i=i.split(","),a.translateX=r(i[0]),a.translateY=r(i[1]||0);break;case"scale":i=i.split(","),a.scaleX=r(i[0]),a.scaleY=r(i[1]||i[0]);break;case"matrix":return u(i)}return a}function c(t,e){if(t&&e&&e.css){var n=this;n.cfg=e,n.el=t;var i=e.duration||0,r=e.easing||"ease";e.delay||0;return e.run&&(n.timer=n.timer||new p({duration:Math.round(i),easing:r}),n.timer.on("run",e.run)),n._bindEvt(),n}}function a(t,e){var n=l(t),i=l(e),r={};for(var o in i)r[o]={prevVal:n[o],newVal:i[o]};return r}function f(t,e,n,i,r){n=isNaN(Number(n))?0:Number(n);var o=(i-n)*r+n;h(t,e,o)}function h(t,e,n){switch(e){case"scrollTop":case"scrollLeft":t[e]=n;break;case"transform":t.style[y]=n;case"opacity":t.style[e]=n}}var d=n(1),p=n(16),g=n(15),v=n(2),y=d.prefixStyle("transform"),m=d.prefixStyle("transition"),_=(d.prefixStyle("transitionDuration"),d.prefixStyle("transformOrigin"),d.vendor?d.prefixStyle("transitionEnd"):"transitionend"),x=(d.vendor?["-",d.vendor,"-transform"].join(""):"transform","translateX({translateX}px) translateY({translateY}px) translateZ(0)"),T={transform:!0,opacity:!0,scrollTop:!0,scrollLeft:!0};return d.extend(c,v,{run:function(){var t=this,e=t.cfg,n=t.el,i=e.duration||0,r=e.easing||"ease",o=e.delay||0;if(t.__isTransitionEnd=!1,clearTimeout(t.__itv),t.timer&&t.timer.run(),i<=p.MIN_DURATION){for(var s in e.css)h(n,s,e.css[s]);return t.stop(),void t.__handlers.stop.call(t)}if(d.isBadAndroid()&&(e.useTransition=!1),e.useTransition){n.style[m]=d.substitute("all {duration}ms {easing} {delay}ms",{duration:Math.round(i),easing:g.format(r),delay:o});for(var s in e.css)h(n,s,e.css[s]);t.__itv=setTimeout(function(){t.__isTransitionEnd||(t.__isTransitionEnd=!0,t.trigger("transitionend"))},Number(i)+60)}else if(t.computeStyle=t.computeStyle||window.getComputedStyle(n),e.css.transform&&t.timer){t.transmap=a(t.computeStyle[y],e.css.transform);t.timer.off("run",t.__handlers.transRun),t.timer.on("run",t.__handlers.transRun,t),t.timer.off("end",t.__handlers.transRun),t.timer.on("end",t.__handlers.transRun,t)}return t},_transitionEndHandler:function(t){var e=this;e.stop(),e.__handlers.stop.call(e)},__handlers:{transRun:function(t){var e=this,n=e.transmap,i=e.el,r={};for(var o in n)r[o]=(n[o].newVal-n[o].prevVal)*t.percent+n[o].prevVal;var s=d.substitute(x+" scale({scaleX},{scaleY})",r);i.style[y]=s},stop:function(t){var e=this,n=e.cfg;n.end&&n.end({percent:1})}},_bindEvt:function(){var t=this,e=t.cfg,n=t.el;t.el.addEventListener(_,function(e){t.__isTransitionEnd=!0,e.target===e.currentTarget&&t.trigger("transitionend",e)}),t.on("transitionend",t._transitionEndHandler,t);var i=function(i){t.computeStyle=t.computeStyle||window.getComputedStyle(n);for(var r in e.css)/transform/.test(r)||f(t.el,r,t.computeStyle[r],e.css[r],i.percent)};t.timer&&t.timer.on("run",i),t.timer&&t.timer.on("stop",t.__handlers.stop,t)},stop:function(){var t=this;if(t.cfg.useTransition&&t.cfg.duration>p.MIN_DURATION){var e=window.getComputedStyle(this.el);for(var n in t.cfg.css)if(T[n]){var i=/transform/.test(n)?e[y]:e[n];h(t.el,n,d.substitute(x+" scale({scaleX},{scaleY})",l(i)))}t.el.style[m]="none"}return t.timer&&t.timer.stop()&&t.timer.reset(),t.computeStyle=null,t},reset:function(t){var e=this;return e.computeStyle=null,d.mix(e.cfg,t),this.timer&&e.timer.reset({duration:Math.round(e.cfg.duration),easing:e.cfg.easing}),e}}),"object"==typeof i&&i.exports?void(i.exports=c):c}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){t.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i;i=function(t,e,n){/*! Hammer.JS - v2.0.4 - 2014-09-28
		 * http://hammerjs.github.io/
		 *
		 * Copyright (c) 2014 Jorik Tangelder;
		 * Licensed under the MIT license */
	"use strict";function i(t,e,n){return setTimeout(c(t,n),e)}function r(t,e,n){return Array.isArray(t)?(o(t,n[e],n),!0):!1}function o(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(void 0!==t.length)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function s(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&void 0===t[i[r]])&&(t[i[r]]=e[i[r]]),r++;return t}function u(t,e){return s(t,e,!0)}function l(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&s(i,n)}function c(t,e){return function(){return t.apply(e,arguments)}}function a(t,e){return typeof t==ct?t.apply(e?e[0]||void 0:void 0,e):t}function f(t,e){return void 0===t?e:t}function h(t,e,n){o(v(e),function(e){t.addEventListener(e,n,!1)})}function d(t,e,n){o(v(e),function(e){t.removeEventListener(e,n,!1)})}function p(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function v(t){return t.trim().split(/\s+/g)}function y(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function m(t){return Array.prototype.slice.call(t,0)}function _(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];y(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function x(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<ut.length;){if(n=ut[o],i=n?n+r:e,i in t)return i;o++}}function T(){return dt++}function b(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function C(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){a(t.options.enable,[t])&&n.handler(e)},this.init()}function w(t){var e,n=t.options.inputClass;return new(e=n?n:vt?M:yt?z:gt?F:P)(t,S)}function S(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Ct&&i-r===0,s=e&(St|Et)&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,E(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function E(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=R(e)),r>1&&!n.firstMultiple?n.firstMultiple=R(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,u=s?s.center:o.center,l=e.center=N(i);e.timeStamp=ht(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=L(u,l),e.distance=B(u,l),k(n,e),e.offsetDirection=A(e.deltaX,e.deltaY),e.scale=s?X(s.pointers,i):1,e.rotation=s?I(s.pointers,i):0,O(n,e);var c=t.element;p(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function k(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Ct&&o.eventType!==St||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function O(t,e){var n,i,r,o,s=t.lastInterval||e,u=e.timeStamp-s.timeStamp;if(e.eventType!=Et&&(u>bt||void 0===s.velocity)){var l=s.deltaX-e.deltaX,c=s.deltaY-e.deltaY,a=Y(u,l,c);i=a.x,r=a.y,n=ft(a.x)>ft(a.y)?a.x:a.y,o=A(l,c),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function R(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:at(t.pointers[n].clientX),clientY:at(t.pointers[n].clientY)},n++;return{timeStamp:ht(),pointers:e,center:N(e),deltaX:t.deltaX,deltaY:t.deltaY}}function N(t){var e=t.length;if(1===e)return{x:at(t[0].clientX),y:at(t[0].clientY)};for(var n=0,i=0,r=0;e>r;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:at(n/e),y:at(i/e)}}function Y(t,e,n){return{x:e/t||0,y:n/t||0}}function A(t,e){return t===e?kt:ft(t)>=ft(e)?t>0?Ot:Rt:e>0?Nt:Yt}function B(t,e,n){n||(n=It);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function L(t,e,n){n||(n=It);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function I(t,e){return L(e[1],e[0],Xt)-L(t[1],t[0],Xt)}function X(t,e){return B(e[0],e[1],Xt)/B(t[0],t[1],Xt)}function P(){this.evEl=Mt,this.evWin=Ht,this.allow=!0,this.pressed=!1,C.apply(this,arguments)}function M(){this.evEl=jt,this.evWin=Ft,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function H(){this.evTarget=qt,this.evWin=Wt,this.started=!1,C.apply(this,arguments)}function D(t,e){var n=m(t.touches),i=m(t.changedTouches);return e&(St|Et)&&(n=_(n.concat(i),"identifier",!0)),[n,i]}function z(){this.evTarget=Zt,this.targetIds={},C.apply(this,arguments)}function j(t,e){var n=m(t.touches),i=this.targetIds;if(e&(Ct|wt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=m(t.changedTouches),u=[],l=this.target;if(o=n.filter(function(t){return p(t.target,l)}),e===Ct)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&u.push(s[r]),e&(St|Et)&&delete i[s[r].identifier],r++;return u.length?[_(o.concat(u),"identifier",!0),u]:void 0}function F(){C.apply(this,arguments);var t=c(this.handler,this);this.touch=new z(this.manager,t),this.mouse=new P(this.manager,t)}function U(t,e){this.manager=t,this.set(e)}function q(t){if(g(t,te))return te;var e=g(t,ee),n=g(t,ne);return e&&n?ee+" "+ne:e||n?e?ee:ne:g(t,Qt)?Qt:Jt}function W(t){this.id=T(),this.manager=null,this.options=u(t||{},this.defaults),this.options.enable=f(this.options.enable,!0),this.state=ie,this.simultaneous={},this.requireFail=[]}function V(t){return t&le?"cancel":t&se?"end":t&oe?"move":t&re?"start":""}function Z(t){return t==Yt?"down":t==Nt?"up":t==Ot?"left":t==Rt?"right":""}function K(t,e){var n=e.manager;return n?n.get(t):t}function G(){W.apply(this,arguments)}function $(){G.apply(this,arguments),this.pX=null,this.pY=null}function J(){G.apply(this,arguments)}function Q(){W.apply(this,arguments),this._timer=null,this._input=null}function tt(){G.apply(this,arguments)}function et(){G.apply(this,arguments)}function nt(){W.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function it(t,e){return e=e||{},e.recognizers=f(e.recognizers,it.defaults.preset),new rt(t,e)}function rt(t,e){e=e||{},this.options=u(e,it.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=w(this),this.touchAction=new U(this,this.options.touchAction),ot(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ot(t,e){var n=t.element;o(t.options.cssProps,function(t,i){n.style[x(n.style,i)]=e?t:""})}function st(t,e){var n=document.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var ut=["","webkit","moz","MS","ms","o"],lt=document.createElement("div"),ct="function",at=Math.round,ft=Math.abs,ht=Date.now,dt=1,pt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in window,vt=void 0!==x(window,"PointerEvent"),yt=gt&&pt.test(navigator.userAgent),mt="touch",_t="pen",xt="mouse",Tt="kinect",bt=25,Ct=1,wt=2,St=4,Et=8,kt=1,Ot=2,Rt=4,Nt=8,Yt=16,At=Ot|Rt,Bt=Nt|Yt,Lt=At|Bt,It=["x","y"],Xt=["clientX","clientY"];C.prototype={handler:function(){},init:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(b(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(b(this.element),this.evWin,this.domHandler)}};var Pt={mousedown:Ct,mousemove:wt,mouseup:St},Mt="mousedown",Ht="mousemove mouseup";l(P,C,{handler:function(t){var e=Pt[t.type];e&Ct&&0===t.button&&(this.pressed=!0),e&wt&&1!==t.which&&(e=St),this.pressed&&this.allow&&(e&St&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xt,srcEvent:t}))}});var Dt={pointerdown:Ct,pointermove:wt,pointerup:St,pointercancel:Et,pointerout:Et},zt={2:mt,3:_t,4:xt,5:Tt},jt="pointerdown",Ft="pointermove pointerup pointercancel";window.MSPointerEvent&&(jt="MSPointerDown",Ft="MSPointerMove MSPointerUp MSPointerCancel"),l(M,C,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Dt[i],o=zt[t.pointerType]||t.pointerType,s=o==mt,u=y(e,t.pointerId,"pointerId");r&Ct&&(0===t.button||s)?0>u&&(e.push(t),u=e.length-1):r&(St|Et)&&(n=!0),0>u||(e[u]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(u,1))}});var Ut={touchstart:Ct,touchmove:wt,touchend:St,touchcancel:Et},qt="touchstart",Wt="touchstart touchmove touchend touchcancel";l(H,C,{handler:function(t){var e=Ut[t.type];if(e===Ct&&(this.started=!0),this.started){var n=D.call(this,t,e);e&(St|Et)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:mt,srcEvent:t})}}});var Vt={touchstart:Ct,touchmove:wt,touchend:St,touchcancel:Et},Zt="touchstart touchmove touchend touchcancel";l(z,C,{handler:function(t){var e=Vt[t.type],n=j.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:mt,srcEvent:t})}}),l(F,C,{handler:function(t,e,n){var i=n.pointerType==mt,r=n.pointerType==xt;if(i)this.mouse.allow=!1;else if(r&&!this.mouse.allow)return;e&(St|Et)&&(this.mouse.allow=!0),this.callback(t,e,n)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Kt=x(lt.style,"touchAction"),Gt=void 0!==Kt,$t="compute",Jt="auto",Qt="manipulation",te="none",ee="pan-x",ne="pan-y";U.prototype={set:function(t){t==$t&&(t=this.compute()),Gt&&(this.manager.element.style[Kt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){a(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),q(t.join(" "))},preventDefaults:function(t){if(!Gt){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=g(i,te),o=g(i,ne),s=g(i,ee);return r||o&&n&At||s&&n&Bt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ie=1,re=2,oe=4,se=8,ue=se,le=16,ce=32;W.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(r(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=K(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return r(t,"dropRecognizeWith",this)?this:(t=K(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(r(t,"requireFailure",this))return this;var e=this.requireFail;return t=K(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(r(t,"dropRequireFailure",this))return this;t=K(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(n.options.event+(e?V(i):""),t)}var n=this,i=this.state;se>i&&e(!0),e(),i>=se&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=ce)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(ce|ie)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return a(this.options.enable,[this,e])?(this.state&(ue|le|ce)&&(this.state=ie),this.state=this.process(e),void(this.state&(re|oe|se|le)&&this.tryEmit(e))):(this.reset(),void(this.state=ce))},process:function(t){},getTouchAction:function(){},reset:function(){}},l(G,W,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(re|oe),r=this.attrTest(t);return i&&(n&Et||!r)?e|le:i||r?n&St?e|se:e&re?e|oe:re:ce}}),l($,G,{defaults:{event:"pan",threshold:10,pointers:1,direction:Lt},getTouchAction:function(){var t=this.options.direction,e=[];return t&At&&e.push(ne),t&Bt&&e.push(ee),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&At?(r=0===o?kt:0>o?Ot:Rt,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?kt:0>s?Nt:Yt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return G.prototype.attrTest.call(this,t)&&(this.state&re||!(this.state&re)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Z(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)},reset:function(){}}),l(J,G,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[te]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&re)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),l(Q,W,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Jt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,r=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!r||!n||t.eventType&(St|Et)&&!o)this.reset();else if(t.eventType&Ct)this.reset(),this._timer=i(function(){this.state=ue,this.tryEmit()},e.time,this);else if(t.eventType&St)return ue;return ce},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ue&&(t&&t.eventType&St?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ht(),this.manager.emit(this.options.event,this._input)))}}),l(tt,G,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[te]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&re)}}),l(et,G,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:At|Bt,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(At|Bt)?e=t.velocity:n&At?e=t.velocityX:n&Bt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&n&t.direction&&t.distance>this.options.threshold&&ft(e)>this.options.velocity&&t.eventType&St},emit:function(t){var e=Z(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),l(nt,W,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:10,posThreshold:10},getTouchAction:function(){return[Qt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,r=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&Ct&&0===this.count)return this.failTimeout();if(r&&o&&n){if(t.eventType!=St)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,u=!this.pCenter||B(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,u&&s?this.count+=1:this.count=1,this._input=t;var l=this.count%e.taps;if(0===l)return this.hasRequireFailures()?(this._timer=i(function(){this.state=ue,this.tryEmit()},e.interval,this),re):ue}return ce},failTimeout:function(){return this._timer=i(function(){this.state=ce},this.options.interval,this),ce},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ue&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),it.VERSION="2.0.4",it.defaults={domEvents:!1,touchAction:$t,enable:!0,inputTarget:null,inputClass:null,preset:[[tt,{enable:!1}],[J,{enable:!1},["rotate"]],[et,{direction:At}],[$,{direction:At},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[Q]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ae=1,fe=2;return rt.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?fe:ae},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ue)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],e.stopped===fe||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(re|oe|se)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof W)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(r(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(r(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var n=this.handlers;return o(v(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this},off:function(t,e){var n=this.handlers;return o(v(t),function(t){e?n[t].splice(y(n[t],e),1):delete n[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ot(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(it,{INPUT_START:Ct,INPUT_MOVE:wt,INPUT_END:St,INPUT_CANCEL:Et,STATE_POSSIBLE:ie,STATE_BEGAN:re,STATE_CHANGED:oe,STATE_ENDED:se,STATE_RECOGNIZED:ue,STATE_CANCELLED:le,STATE_FAILED:ce,DIRECTION_NONE:kt,DIRECTION_LEFT:Ot,DIRECTION_RIGHT:Rt,DIRECTION_UP:Nt,DIRECTION_DOWN:Yt,DIRECTION_HORIZONTAL:At,DIRECTION_VERTICAL:Bt,DIRECTION_ALL:Lt,Manager:rt,Input:C,TouchAction:U,TouchInput:z,MouseInput:P,PointerEventInput:M,TouchMouseInput:F,SingleTouchInput:H,Recognizer:W,AttrRecognizer:G,Tap:nt,Pan:$,Swipe:et,Pinch:J,Rotate:tt,Press:Q,on:h,off:d,each:o,merge:u,extend:s,inherit:l,bindFn:c,prefixed:x}),"object"==typeof n&&n.exports?void(n.exports=it):it}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(11),r=n(10);t.exports=function(t){return i(r(t))}},function(t,e,n){var i;i=function(t,e,i){"use strict";function r(t){r.superclass.constructor.call(this),this.userConfig=t,this.init()}var o=n(1),s=n(2),u=(n(3),n(49)),l=n(8),c=n(53),a=n(51),f=500,h="ease",d=.1;return o.extend(r,s,{version:"3.0.13",init:function(){var t=this,e={preventDefault:!0,bounce:!0,boundryCheck:!0,useTransition:!0,gpuAcceleration:!0,BOUNDRY_CHECK_EASING:h,BOUNDRY_CHECK_DURATION:f,BOUNDRY_CHECK_ACCELERATION:d,useOriginScroll:!1,zoomType:"y",indicatorInsets:{top:3,bottom:3,left:3,right:3,width:3,spacing:5},container:".xs-container",content:".xs-content",stickyElements:".xs-sticky",fixedElements:".xs-fixed",touchAction:"auto"};t.guid=o.guid(),t.renderTo=o.getNode(t.userConfig.renderTo),t.__timers={};var n=JSON.parse(t.renderTo.getAttribute("xs-cfg")),i=t.userConfig=o.mix(o.mix(e,n),t.userConfig);return t.container=o.getNode(i.container,t.renderTo),t.content=o.getNode(i.content,t.renderTo),t.boundry=new u,t.boundry.refresh(),t},destroy:function(){var t=this;t.mc&&t.mc.destroy(),t.sticky&&t.sticky.destroy(),t.fixed&&t.fixed.destroy()},_initContainer:function(){},enableGPUAcceleration:function(){return this.userConfig.gpuAcceleration=!0,this},disableGPUAcceleration:function(){return this.userConfig.gpuAcceleration=!1,this},getScrollPos:function(){var t=this;return{scrollLeft:t.getScrollLeft(),scrollTop:t.getScrollTop()}},getScrollTop:function(){},getScrollLeft:function(){},scrollTo:function(t,e,n,i,r){var o=this,t=void 0===t||isNaN(t)?-o.getScrollLeft():t,e=void 0===e||isNaN(e)?-o.getScrollTop():e;o.scrollLeft(t,n,i,r),o.scrollTop(e,n,i,r)},scrollBy:function(t,e,n,i,r){this.scrollByX(t,n,i,r),this.scrollByY(e,n,i,r)},scrollLeftBy:function(t,e,n,i){this.scrollLeft(Number(t)+Number(this.getScrollLeft()),e,n,i)},scrollTopBy:function(t,e,n,i){this.scrollTop(Number(t)+Number(this.getScrollTop()),e,n,i)},scrollLeft:function(t,e,n,i){},scrollTop:function(t,e,n,i){},resetSize:function(){var t=this;if(t.container&&t.content){var e=t.userConfig,n=getComputedStyle(t.renderTo),i=(t.width=(e.width||t.renderTo.offsetWidth)-o.px2Num(n["padding-left"])-o.px2Num(n["padding-right"]),t.height=(e.height||t.renderTo.offsetHeight)-o.px2Num(n["padding-top"])-o.px2Num(n["padding-bottom"]),e.containerWidth||t.content.offsetWidth),r=e.containerHeight||t.content.offsetHeight;return t.containerWidth=i<t.width?t.width:i,t.containerHeight=r<t.height?t.height:r,t.boundry.refresh({width:t.width,height:t.height}),t}},render:function(){var t=this;return t.resetSize(),t.initSticky(),t.initFixed(),t.trigger("afterrender",{type:"afterrender"}),t._bindEvt(),t.initTouchAction(),t},initTouchAction:function(){var t=this;return t.mc.set({touchAction:t.userConfig.touchAction}),t},initFixed:function(){var t=this,e=t.userConfig;return t.fixed=t.fixed||new a({fixedElements:e.fixedElements,xscroll:t,fixedRenderTo:e.fixedRenderTo}),t.fixed.render(),t.resetSize(),t},initSticky:function(){var t=this,e=t.userConfig,n=t.sticky=t.sticky||new c({xscroll:t,zoomType:e.zoomType,stickyRenderTo:e.stickyRenderTo});n.render()},boundryCheck:function(){return this},boundryCheckX:function(){return this},boundryCheckY:function(){return this},_bindEvt:function(){var t=this;if(!t.___isEvtBind){t.___isEvtBind=!0;var e=t.mc=new l.Manager(t.renderTo),n=new l.Tap,i=new l.Pan;new l.Pinch;e.add([n,i]),t.mc.on("panstart pan panend pancancel pinchstart pinchmove pinchend pinchcancel pinchin pinchout",function(e){t.trigger(e.type,e)});for(var r=["touchstart","touchmove","touchend","touchcancel","mousedown"],o=0,s=r.length;s>o;o++)t.renderTo.addEventListener(r[o],function(e){t.trigger(e.type,e)});return t.mc.on("tap",function(e){1==e.tapCount?(e.type="tap",t.trigger(e.type,e)):2==e.tapCount&&(e.type="doubletap",t.trigger("doubletap",e))}),t}},_resetLockConfig:function(){},stop:function(){}}),"object"==typeof i&&i.exports?void(i.exports=r):r}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,n){"use strict";var i={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1],quadratic:[.33,.66,.66,1],circular:[.1,.57,.1,1],bounce:[.71,1.35,.47,1.41],format:function(t){return t?"string"==typeof t&&this[t]?this[t]instanceof Array?[" cubic-bezier(",this[t],") "].join(""):this[t]:t instanceof Array?[" cubic-bezier(",t,") "].join(""):t:void 0}};return"object"==typeof n&&n.exports?void(n.exports=i):i}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";function r(t,e,n,i,r){var o=function(e){var i=1-e;return 3*i*i*e*t+3*i*e*e*n+e*e*e},s=function(t){var n=1-t;return 3*n*n*t*e+3*n*t*t*i+t*t*t},u=function(e){var i=1-e;return 3*(2*(e-1)*e+i*i)*t+3*(-e*e*e+2*i*e)*n};return function(t){var e,n,i,l,c,a,f=t;for(i=f,a=0;8>a;a++){if(l=o(i)-f,Math.abs(l)<r)return s(i);if(c=u(i),Math.abs(c)<1e-6)break;i-=l/c}if(e=0,n=1,i=f,e>i)return s(e);if(i>n)return s(n);for(;n>e;){if(l=o(i),Math.abs(l-f)<r)return s(i);f>l?e=i:n=i,i=.5*(n-e)+e}return s(i)}}function o(t){var e=this;e.cfg=s.mix({easing:"linear"},t)}for(var s=n(1),u=n(2),l=n(15),c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a=["webkit","moz","ms","o"],f=window.cancelAnimationFrame,h=0;h<a.length;h++)(window[a[h]+"CancelAnimationFrame"]||window[a[h]+"CancelRequestAnimationFrame"])&&(f=window[a[h]+"CancelAnimationFrame"]||window[a[h]+"CancelRequestAnimationFrame"]);return f=f||window.clearTimeout,o.MIN_DURATION=1,s.extend(o,u,{reset:function(t){var e=this;s.mix(e.cfg,t),e.isfinished=!1,e.percent=0,e._stop=null},run:function(){var t=this,e=t.cfg.duration;if(e<=o.MIN_DURATION&&(t.isfinished=!0,t.trigger("run",{percent:1}),t.trigger("end",{percent:1})),!t.isfinished){t._hasFinishedPercent=t._stop&&t._stop.percent||0,t._stop=null,t.start=Date.now(),t.percent=0;var n=1e3/60/e/4,i=l[t.cfg.easing];t.easingFn=r(i[0],i[1],i[2],i[3],n),t._run()}},_run:function(){var t=this;f(t._raf),t._raf=c(function(){if(t.now=Date.now(),t.duration=t.now-t.start>=t.cfg.duration?t.cfg.duration:t.now-t.start,t.progress=t.easingFn(t.duration/t.cfg.duration),t.percent=t.duration/t.cfg.duration+t._hasFinishedPercent,t.percent>=1||t._stop){t.percent=t._stop&&t._stop.percent?t._stop.percent:1,t.duration=t._stop&&t._stop.duration?t._stop.duration:t.duration;var e={percent:t.percent};return t.trigger("stop",e),void(t.percent>=1&&(t.isfinished=!0,t.trigger("end",{percent:1})))}t.trigger("run",{percent:t.progress,originPercent:t.percent}),t._run()})},stop:function(){var t=this;t._stop={percent:t.percent,now:t.now},f(t._raf)}}),"object"==typeof i&&i.exports?void(i.exports=o):o}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),o=i(r),s=n(59),u=i(s),l=n(56),c=i(l),a=n(57),f=i(a),h=function(){return{content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"}},d=function(){return{content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"}};e["default"]={props:{height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,"default":!0},useOriginScroll:{type:Boolean,"default":!1},useTransition:{type:Boolean,"default":!0},preventDefault:{type:Boolean,"default":!0},boundryCheck:{type:Boolean,"default":!0},gpuAcceleration:{type:Boolean,"default":!0},usePulldown:{type:Boolean,"default":!1},usePullup:{type:Boolean,"default":!1},pulldownConfig:{type:Object,"default":function(){return{}}},pullupConfig:{type:Object,"default":function(){return{}}},pulldownStatus:{type:String,"default":"default",twoWay:!0},pullupStatus:{type:String,"default":"default",twoWay:!0},enableHorizontalSwiping:{type:Boolean,"default":!1}},methods:{reset:function(t){var e=this;t&&("undefined"!=typeof t.left&&this._xscroll.scrollLeft(t.left),"undefined"!=typeof t.top&&this._xscroll.scrollTop(t.top)),setTimeout(function(){e._xscroll&&e._xscroll.render()})}},compiled:function(){this.uuid=Math.random().toString(36).substring(3,8)},computed:{styles:function(){return this.height||this.$el.style.height||!this.lockX||(this.height=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(this.height=document.documentElement.clientHeight+parseInt(this.height)+"px"),{height:""+this.height}}},ready:function(){var t=this;this.$el.setAttribute("id","vux-scroller-"+this.uuid);for(var e=null,n=this.$el.querySelector(".xs-container").childNodes,i=0;i<n.length;i++)if(1===n[i].nodeType){e=n[i];break}if(!e)throw new Error("no content is found");if(this._xscroll=new u["default"]({renderTo:"#vux-scroller-"+this.uuid,lockX:this.lockX,lockY:this.lockY,scrollbarX:this.scrollbarX,scrollbarY:this.scrollbarY,content:e,bounce:this.bounce,useOriginScroll:this.useOriginScroll,useTransition:this.useTransition,preventDefault:this.preventDefault,boundryCheck:this.boundryCheck,gpuAcceleration:this.gpuAcceleration}),this.usePulldown){var r=this.$el.querySelector('div[slot="pulldown"]'),s=(0,o["default"])(h(),this.pulldownConfig);r&&(s.container=r),this.pulldown=new c["default"](s),this._xscroll.plug(this.pulldown),this.pulldown.on("loading",function(e){t.$emit("pulldown:loading",t.uuid)}),this.pulldown.on("statuschange",function(e){t.pulldownStatus=e.newVal})}if(this.usePullup){var l=this.$el.querySelector('div[slot="pullup"]'),a=(0,o["default"])(d(),this.pullupConfig);l&&(a.container=l),this.pullup=new f["default"](a),this._xscroll.plug(this.pullup),this.pullup.on("loading",function(e){t.$emit("pullup:loading",t.uuid)}),this.pullup.on("statuschange",function(e){t.pullupStatus=e.newVal})}this.enableHorizontalSwiping&&(this._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),this._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),this._xscroll.render()},events:{"pulldown:reset":function(t){var e=this;this.pulldownStatus="default",t===this.uuid&&this.pulldown.reset(function(){e.reset()})},"pullup:reset":function(t){this.pullupStatus="default",t===this.uuid&&(this.pullup.complete(),this.reset())},"pullup:done":function(t){t===this.uuid&&this._xscroll.unplug(this.pullup)},"scroller:reset":function(t){t===this.uuid&&this.reset()},"pullup:disable":function(t){t===this.uuid&&this.pullup.stop()},"pullup:enable":function(t){t===this.uuid&&this.pullup.restart()}},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),this._xscroll.destroy(),this._xscroll=null}}},function(t,e,n){t.exports={"default":n(19),__esModule:!0}},function(t,e,n){n(45),t.exports=n(9).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(7);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(13),r=n(41),o=n(40);t.exports=function(t){return function(e,n,s){var u,l=i(e),c=r(l.length),a=o(s,c);if(t&&n!=n){for(;c>a;)if(u=l[a++],u!=u)return!0}else for(;c>a;a++)if((t||a in l)&&l[a]===n)return t||a||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(20);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(7),r=n(6).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(6),r=n(9),o=n(24),s=n(29),u="prototype",l=function(t,e,n){var c,a,f,h=t&l.F,d=t&l.G,p=t&l.S,g=t&l.P,v=t&l.B,y=t&l.W,m=d?r:r[e]||(r[e]={}),_=m[u],x=d?i:p?i[e]:(i[e]||{})[u];d&&(n=e);for(c in n)a=!h&&x&&void 0!==x[c],a&&c in m||(f=a?x[c]:n[c],m[c]=d&&"function"!=typeof x[c]?n[c]:v&&a?o(f,i):y&&x[c]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[u]=t[u],e}(f):g&&"function"==typeof f?o(Function.call,f):f,g&&((m.virtual||(m.virtual={}))[c]=f,t&l.R&&_&&!_[c]&&s(_,c,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(32),r=n(37);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(4)&&!n(5)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{
	get:function(){return 7}}).a})},function(t,e,n){"use strict";var i=n(35),r=n(33),o=n(36),s=n(42),u=n(11),l=Object.assign;t.exports=!l||n(5)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(var n=s(t),l=arguments.length,c=1,a=r.f,f=o.f;l>c;)for(var h,d=u(arguments[c++]),p=a?i(d).concat(a(d)):i(d),g=p.length,v=0;g>v;)f.call(d,h=p[v++])&&(n[h]=d[h]);return n}:l},function(t,e,n){var i=n(21),r=n(30),o=n(43),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var i=n(28),r=n(13),o=n(22)(!1),s=n(38)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),l=0,c=[];for(n in u)n!=s&&i(u,n)&&c.push(n);for(;e.length>l;)i(u,n=e[l++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(34),r=n(26);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(39)("keys"),r=n(44);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(6),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var i=n(12),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),0>t?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(12),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(10);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(7);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){var i=n(27);i(i.S+i.F,"Object",{assign:n(31)})},function(t,e){},function(t,e){t.exports="<div :style=styles> <div class=xs-container> <slot></slot> <slot name=pulldown></slot> <slot name=pullup></slot> </div> </div>"},function(t,e,n){var i,r;n(46),i=n(17),r=n(47),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var i;i=function(t,e,i){"use strict";function r(t){this.cfg=o.mix({width:0,height:0},t),this.init()}var o=n(1);return o.mix(r.prototype,{init:function(){var t=this;t._xtop=0,t._xright=0,t._xleft=0,t._xbottom=0,t.refresh({width:t.cfg.width,height:t.cfg.height})},reset:function(){return this.resetTop(),this.resetLeft(),this.resetBottom(),this.resetRight(),this},resetTop:function(){return this._xtop=0,this.refresh(),this},resetLeft:function(){return this._xleft=0,this.refresh(),this},resetBottom:function(){return this._xbottom=0,this.refresh(),this},resetRight:function(){return this._xright=0,this.refresh(),this},expandTop:function(t){return this._xtop=t,this.refresh(),this},expandLeft:function(t){return this._xleft=t,this.refresh(),this},expandRight:function(t){return this._xright=t,this.refresh(),this},expandBottom:function(t){return this._xbottom=t,this.refresh(),this},refresh:function(t){return o.mix(this.cfg,t),this.top=this._xtop,this.left=this._xleft,this.bottom=(t&&t.height||this.cfg.height||0)-this._xbottom,this.right=(t&&t.width||this.cfg.width||0)-this._xright,this.width=this.right-this.left>0?this.right-this.left:0,this.height=this.bottom-this.top>0?this.bottom-this.top:0,this}}),"object"==typeof i&&i.exports?void(i.exports=r):r}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=n(2),s=function(t){s.superclass.constructor.call(this,t),this.userConfig=r.mix({},t),this.init()};return r.extend(s,o,{init:function(){var t=this;t.xscroll=t.userConfig.xscroll},add:function(t,e){var n=this;return e=r.extend({captureBounce:!1,stopPropagation:!0},e),n.__scrolls||(n.__scrolls={}),t.guid&&!n.__scrolls[t.guid]?(t.parentscroll=n.xscroll,n._bind(t),n.__scrolls[t.guid]=t):void 0},remove:function(t){var e=this;if(t&&t.guid){var n=e.__scrolls[t.guid];n&&(n.parentscroll=null,e._unbind(t),n=null)}},get:function(t){return t?this.__scrolls[t]:this.__scrolls},_unbind:function(t){},_bind:function(t){var e=this,n=e.xscroll;n.renderTo.addEventListener("touchstart",function(){n._resetLockConfig()}),t.renderTo.addEventListener("touchstart",function(){t._resetLockConfig()}),n.on("panend",n._resetLockConfig),t.on("panend",t._resetLockConfig),t.on("panstart",function(e){if(!t.userConfig.lockY&&!n.userConfig.lockY){if(t.isBoundryOut())return void(n.userConfig.lockY=!0);16==e.direction&&t.getBoundryOutTop()>=0?t.userConfig.lockY=!0:8==e.direction&&t.getBoundryOutTop()>=0&&t.getBoundryOutBottom()<0&&(n.userConfig.lockY=!0),8==e.direction&&t.getBoundryOutBottom()>=0?t.userConfig.lockY=!0:16==e.direction&&t.getBoundryOutBottom()>=0&&t.getBoundryOutTop()<0&&(n.userConfig.lockY=!0),t.getBoundryOutTop()<0&&t.getBoundryOutBottom()<0&&(n.userConfig.lockY=!0)}if(!t.userConfig.lockX&&!n.userConfig.lockX){if(t.isBoundryOut())return void(n.userConfig.lockX=!0);4==e.direction&&t.getBoundryOutLeft()>=0?t.userConfig.lockX=!0:2==e.direction&&t.getBoundryOutLeft()>=0&&t.getBoundryOutRight()<0&&(n.userConfig.lockX=!0),2==e.direction&&t.getBoundryOutRight()>=0?t.userConfig.lockX=!0:4==e.direction&&t.getBoundryOutRight()>=0&&t.getBoundryOutLeft()<0&&(n.userConfig.lockX=!0),t.getBoundryOutLeft()<0&&t.getBoundryOutRight()<0&&(n.userConfig.lockX=!0)}!t.userConfig.lockX&&n.userConfig.lockX&&(2==e.direction||4==e.direction?n.userConfig.lockY=!0:t.userConfig.lockX=!0),!t.userConfig.lockY&&n.userConfig.lockY&&(8==e.direction||16==e.direction?n.userConfig.lockX=!0:t.userConfig.lockY=!0)})}}),"object"==typeof i&&i.exports?void(i.exports=s):s}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=n(2),s=(r.prefixStyle("transform"),function(t){s.superclass.constructor.call(this,t),this.userConfig=r.mix({fixedRenderTo:void 0,fixedElements:".xs-fixed",prefix:"xs-fixed-container",zoomType:"y"},t),this.init()});return r.extend(s,o,{fixedElements:[],init:function(){var t=this,e=t.userConfig,n=t.xscroll=e.xscroll;t.xscrollConfig=n.userConfig;return t.isY=!("y"!=e.zoomType),t._=t.isY?{top:"top",height:"height",width:"width",offsetTop:"offsetTop"}:{top:"left",height:"width",width:"height",offsetTop:"offsetLeft"},t.fixedRenderTo=r.getNode(e.fixedRenderTo),t},render:function(){var t=this,e=t.xscroll;t.infinite=e.getPlugin("infinite"),t.fixedRenderTo||(t.fixedRenderTo=document.createElement("div"),e.renderTo.appendChild(t.fixedRenderTo)),r.addClass(t.fixedRenderTo,t.userConfig.prefix);for(var n=t.originalFixedElements=t.getFixedElements(),i=0,o=n.length;o>i;i++)t.renderFixedElement(n[i],i,t.fixedRenderTo);return t},getFixedElements:function(){var t=this,e=t.infinite,n=t.userConfig;if(e){var i=[];for(var o in e.__serializedData){var s=e.__serializedData[o];s&&s.style&&"fixed"==s.style.position&&i.push(s)}return i}return r.getNodes(n.fixedElements,t.xscroll.content)},renderFixedElement:function(t,e,n){var i=this,o=!0,s=i._,u=i.xscroll,l=(i.userConfig,i.xscrollConfig),c=l.useOriginScroll,a=i.infinite,f=i.fixedElements[e];i.fixedElements[e]||(o=!1,c&&!a?(t.style.position="fixed",t.style.display="block"):(f=document.createElement("div"),a?(f.setAttribute("style",r.stringifyStyle(r.mix(t.style,{display:"block",width:"100%"}))),f.style[s.top]=(t.style[s.top]>=0?t.style[s.top]:t._top)+"px",t.style[s.height]&&(f.style[s.height]=t.style[s.height]+"px"),a.userConfig.renderHook.call(i,f,t)):(f.style.display="block",f.style.position="absolute",f.style[s.width]="100%",f.innerHTML=t.innerHTML,f.className=t.className,f.setAttribute("style",t.getAttribute("style")),f.style[s.top]=t[s.offsetTop]+"px",t.style.display="none"),n.appendChild(f),i.fixedElements.push(f))),u.trigger("fixedchange",{fixedIndex:e,fixedElement:c?t:f,originalFixedElement:t,isRender:o})},destroy:function(){var t=this;t.fixedElements=void 0}}),"object"==typeof i&&i.exports?void(i.exports=s):s}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=n(3),s=40,u=10,l=50,c=r.prefixStyle("transform"),a=r.vendor?["-",r.vendor,"-transform"].join(""):"transform",f=r.prefixStyle("transition"),h=(r.prefixStyle("borderRadius"),r.prefixStyle("transitionDuration"),function(t){this.userConfig=r.mix({MIN_BAR_SCROLLED_SIZE:u,MIN_BAR_SIZE:l,MAX_BOUNCE_DISTANCE:s,spacing:5},t),this.init(t.xscroll)});return r.mix(h.prototype,{init:function(t){var e=this;e.xscroll=t,e.type=e.userConfig.type,e.isY="y"==e.type,e.scrollTopOrLeft=e.isY?"scrollTop":"scrollLeft"},destroy:function(){var t=this;r.remove(t.scrollbar),t.xscroll.off("scroll",t._scrollHandler,t),t.xscroll.off("scrollend",t._scrollEndHandler,t)},render:function(){var t=this,e=t.xscroll,n=(e.boundry,t.xscroll.userConfig.indicatorInsets),i=e.userConfig.gpuAcceleration?" translateZ(0) ":"",o=i?a+":"+i+";":"",s="opacity:0;position:absolute;z-index:999;overflow:hidden;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;"+o;n._xright=n.right+n.spacing,n._xbottom=n.bottom+n.spacing;var u=t.isY?r.substitute("width:{width}px;bottom:{_xbottom}px;top:{top}px;right:{right}px;",n)+s:r.substitute("height:{width}px;left:{left}px;right:{_xright}px;bottom:{bottom}px;",n)+s;t.scrollbar||(t.scrollbar=document.createElement("div"),t.indicate=document.createElement("div"),e.renderTo.appendChild(t.scrollbar),t.scrollbar.appendChild(t.indicate)),t.scrollbar.style.cssText=u;var l=t.isY?"width:100%;":"height:100%;";t.indicate.style.cssText=l+"position:absolute;background:rgba(0,0,0,0.3);-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;",t._update(),t.hide(0),t._bindEvt()},_update:function(t,e,n,i){var r=this,t=void 0===t?r.isY?r.xscroll.getScrollTop():r.xscroll.getScrollLeft():t,o=r.computeScrollBar(t),s=r.isY?"height":"width";r.indicate.style[s]=Math.round(o.size)+"px",e&&n?r.scrollTo(o.pos,e,n,i):r.moveTo(o.pos)},computeScrollBar:function(t){var e=this,n=(e.isY?"y":"x",e.userConfig.spacing),i=e.xscroll,r=i.boundry,o=e.userConfig,t=e.isY?Math.round(t)+r._xtop:Math.round(t)+r._xleft,s=o.MIN_BAR_SCROLLED_SIZE,u=o.MIN_BAR_SIZE,l=o.MAX_BOUNCE_DISTANCE;e.containerSize=e.isY?i.containerHeight+r._xtop+r._xbottom:e.xscroll.containerWidth+r._xright+r._xleft,e.size=e.isY?r.cfg.height:r.cfg.width,e.indicateSize=e.isY?r.cfg.height-2*n:r.cfg.width-2*n;var c=e.indicateSize,a=e.containerSize,f=c*t/a,h=Math.round(c*e.size/a),d=e.isY?i.getBoundryOutTop():i.getBoundryOutLeft(),p=e.isY?i.getBoundryOutBottom():i.getBoundryOutRight(),g=u-h>0?u-h:0;if(h=u>h?u:h,f=(c-g)*t/a,d>=0){var v=d/l;v=v>1?1:v,f=-v*(h-s)}if(p>=0){var v=p/l;v=v>1?1:v,f=v*(h-s)+c-h}return e.barPos=Math.round(f),{size:Math.round(h),pos:e.barPos}},scrollTo:function(t,e,n,i){var r=this;r.show();var s=r.xscroll.userConfig.gpuAcceleration?" translateZ(0) ":"",u={css:{transform:r.isY?"translateY("+t+"px)"+s:"translateX("+t+"px)"+s},duration:e,easing:n,useTransition:r.xscroll.userConfig.useTransition,end:i};r.__timer=r.__timer||new o(r.indicate,u),r.__timer.stop(),r.__timer.reset(u),r.__timer.run()},moveTo:function(t){var e=this;e.show();var n=e.xscroll.userConfig.gpuAcceleration?" translateZ(0) ":"";e.isY?e.indicate.style[c]="translateY("+t+"px) "+n:e.indicate.style[c]="translateX("+t+"px) "+n,e.indicate.style[f]=""},_scrollHandler:function(t){var e=this;return e._update(t[e.scrollTopOrLeft]),e},isBoundryOut:function(){var t=this;return t.isY?t.xscroll.isBoundryOutTop()||t.xscroll.isBoundryOutBottom():t.xscroll.isBoundryOutLeft()||t.xscroll.isBoundryOutRight()},_scrollEndHandler:function(t){var e=this;return e.isBoundryOut()||(e._update(t[e.scrollTopOrLeft]),e.hide()),e},_bindEvt:function(){var t=this;t.__isEvtBind||(t.__isEvtBind=!0,t.xscroll.on("scroll",t._scrollHandler,t),t.xscroll.on("scrollend",t._scrollEndHandler,t))},reset:function(){var t=this;t.pos=0,t._update()},hide:function(t,e,n){var i=this,t=t>=0?t:300,n=n>=0?n:100;i.scrollbar.style.opacity=0,i.scrollbar.style[f]=["opacity ",t,"ms "," ease-out ",n,"ms"].join("")},show:function(){var t=this;t.scrollbar.style.opacity=1,t.scrollbar.style[f]=""}}),"object"==typeof i&&i.exports?void(i.exports=h):h}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=n(2),s=r.prefixStyle("transform"),u=function(t){var e=t.stickyElement,n=t.curStickyElement,i=t.xscroll,o=t._,s=i.getPlugin("infinite");if(s){s.userConfig.renderHook.call(self,e,n),e.setAttribute("xs-guid",n.guid),r.addClass(e,n.className);for(var u in n.style)"display"!=u&&"position"!=u&&(e.style[u]=u==o.height?n.style[u]+"px":n.style[u])}else{var l=n.getAttribute("style");e.innerHTML=n.innerHTML,e.className=n.className,l&&e.setAttribute("style",l)}},l=function(t){l.superclass.constructor.call(this,t),this.userConfig=r.mix({stickyRenderTo:void 0,forceSticky:!0,prefix:"xs-sticky-container",stickyRenderFunc:u,zoomType:"y"},t),this.init()};return r.extend(l,o,{init:function(){var t=this,e=t.userConfig;t.xscroll=e.xscroll,t.isY=!("y"!=e.zoomType);return t._={top:t.isY?"top":"left",left:t.isY?"left":"bottom",right:t.isY?"right":"top",height:t.isY?"height":"width",width:t.isY?"width":"height"},t.stickyRenderTo=r.getNode(e.stickyRenderTo),t._handlers=[],t},getStickiesPos:function(){for(var t=this,e=(t.xscroll,t.isInfinite),n=t.isY,i=t._,o=[],s=function(o){var s={};return e?(s[i.top]=n?o._top:o._left,s[i.height]=n?o._height:o._width):(s[i.top]=t.isY?r.getOffsetTop(o):r.getOffsetLeft(o),s[i.height]=t.isY?o.offsetHeight:o.offsetWidth),s},u=0;u<t.stickiesNum;u++){var l=s(t.stickyElements[u]);t._handlers[u]=t._handlers[u]||t.createStickyEl(),l.el=t._handlers[u],l.isRender=!1,o.push(l)}return o},getStickyElements:function(){var t=this,e=t.xscroll,n=(t.userConfig,t.isInfinite,e.getPlugin("infinite"));if(n){var i=[],o=n.__serializedData;for(var s in o){var u=o[s];u&&u.style&&"sticky"==u.style.position&&i.push(u)}return i}return r.getNodes(e.userConfig.stickyElements,e.content)},render:function(t){var e=this,n=e.userConfig,i=e.xscroll;e.isInfinite=!!i.getPlugin("infinite");var o=e._;if(e.stickyElements=e.getStickyElements(),e.stickiesNum=e.stickyElements&&e.stickyElements.length,e.stickiesNum){e.stickyRenderTo||(e.stickyRenderTo=document.createElement("div"),i.renderTo.appendChild(e.stickyRenderTo)),e.stickiesPos=e.getStickiesPos();var s=e.stickyRenderTo;s.style[o.top]=0,s.style[o.left]=0,s.style[o.right]=0,s.style.position=i.userConfig.useOriginScroll?"fixed":"absolute",r.addClass(e.stickyRenderTo,n.prefix),e.stickyHandler(t),e._bindEvt()}},createStickyEl:function(){var t=this,e=document.createElement("div");return e.style.display="none",r.addClass(e,"xs-sticky-handler"),t.stickyRenderTo.appendChild(e),e},_bindEvt:function(){var t=this,e=t.xscroll;e.on("scroll",t.stickyHandler,t)},stickyHandler:function(t){for(var e=this,n=e.xscroll,i=(e.userConfig,e.isY?n.getScrollTop():n.getScrollLeft()),r=e.stickiesPos,o=e._,u=[],l=0,c=r.length;c>l;l++){var a=r[l][o.top];i>a&&u.push(l)}if(!u.length)return e.stickyElement&&(e.stickyElement.style.display="none"),void(e.curStickyIndex=void 0);var f=Math.max.apply(null,u);if(e.curStickyIndex!=f||t){var h=e.curStickyIndex;e.curStickyIndex=f,e.curStickyElement=e.stickyElements[f],e.curStickyPos=r[f],e.stickyElement=e.curStickyPos.el;for(var l=0,c=r.length;c>l;l++)r[l].el.style.display="none";var d={stickyElement:e.stickyElement,curStickyIndex:e.curStickyIndex,prevStickyIndex:h,curStickyPos:e.curStickyPos,isRender:e.curStickyPos.isRender};n.trigger("beforestickychange",d),e._stickyRenderFunc(e),n.trigger("stickychange",d)}var p=0;if(e.stickiesPos[e.curStickyIndex+1]){var g=e.stickiesPos[e.curStickyIndex],v=e.stickiesPos[e.curStickyIndex+1];p=i+g[o.height]>v[o.top]&&i+g[o.height]<v[o.top]+g[o.height]?g[o.height]+i-v[o.top]:0}e.stickyElement.style[s]=e.isY?"translateY(-"+p+"px) translateZ(0)":"translateX(-"+p+"px) translateZ(0)"},_stickyRenderFunc:function(t){var e=this,n=e._,i=e.userConfig.stickyRenderFunc,r=e.curStickyPos.el;e.curStickyPos.isRender||(r.style[n.left]=0,r.style[n.right]=0,i&&i.call(e,t)),r.style.display="block",e.curStickyPos.isRender=!0},destroy:function(){var t=this;t.stickyElements=void 0,t.stickiesNum=void 0,t.stickiesPos=void 0,r.remove(t.stickyElement),t.stickyElement=void 0}}),"object"==typeof i&&i.exports?void(i.exports=l):l}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},s={on:function(t,e,n){if(!l(this,"on",t,[e,n])||!e)return this;this._events||(this._events={});var i=this._events[t]||(this._events[t]=[]);return i.push({callback:e,context:n,ctx:n||this}),this},once:function(t,e,n){if(!l(this,"once",t,[e,n])||!e)return this;var i=this,r=o(function(){i.off(t,r),e.apply(this,arguments)});return r._callback=e,this.on(t,r,n)},off:function(t,e,n){if(!this._events||!l(this,"off",t,[e,n]))return this;if(!t&&!e&&!n)return this._events=void 0,this;for(var i=t?[t]:Object.keys(this._events),r=0,o=i.length;o>r;r++){t=i[r];var s=this._events[t];if(s)if(e||n){for(var u=[],c=0,a=s.length;a>c;c++){var f=s[c];(e&&e!==f.callback&&e!==f.callback._callback||n&&n!==f.context)&&u.push(f)}u.length?this._events[t]=u:delete this._events[t]}else delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=Array.prototype.slice.call(arguments,1);if(!l(this,"trigger",t,e))return this;var n=this._events[t],i=this._events.all;return n&&c(n,e),i&&c(i,arguments),this},listenTo:function(t,e,n){var i=this._listeningTo||(this._listeningTo={}),o=t._listenId||(t._listenId=r.guid("l"));return i[o]=t,n||"object"!=typeof e||(n=this),t.on(e,n,this),this},listenToOnce:function(t,e,n){if("object"==typeof e){for(var i in e)this.listenToOnce(t,i,e[i]);return this}var r=o(function(){this.stopListening(t,e,r),n.apply(this,arguments)});return r._callback=n,this.listenTo(t,e,r)},stopListening:function(t,e,n){var i=this._listeningTo;if(!i)return this;var o=!e&&!n;n||"object"!=typeof e||(n=this),t&&((i={})[t._listenId]=t);for(var s in i)t=i[s],t.off(e,n,this),(o||r.isEmpty(t._events))&&delete this._listeningTo[s];return this}},u=/\s+/,l=function(t,e,n,i){if(!n)return!0;if("object"==typeof n){for(var r in n)t[e].apply(t,[r,n[r]].concat(i));return!1}if(u.test(n)){for(var o=n.split(u),s=0,l=o.length;l>s;s++)t[e].apply(t,[o[s]].concat(i));return!1}return!0},c=function(t,e){var n,i=-1,r=t.length,o=e[0],s=e[1],u=e[2];switch(e.length){case 0:for(;++i<r;)(n=t[i]).callback.call(n.ctx);return;case 1:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o);return;case 2:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o,s);return;case 3:for(;++i<r;)(n=t[i]).callback.call(n.ctx,o,s,u);return;default:for(;++i<r;)(n=t[i]).callback.apply(n.ctx,e);return}};return s.bind=s.on,s.unbind=s.off,"object"==typeof i&&i.exports?void(i.exports=s):s}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";function r(t){r.superclass.constructor.call(this,t)}var o=n(1),s=(n(2),n(14)),u=n(3);o.prefixStyle("transformOrigin");return o.extend(r,s,{init:function(){var t=this;r.superclass.init.call(this),t.resetSize()},getScrollTop:function(){return this.renderTo.scrollTop},getScrollLeft:function(){return this.renderTo.scrollLeft},scrollTop:function(t,e,n,i){var r=this,t=Math.round(t);if(!r.userConfig.lockY){var e=e||0,n=n||"quadratic",o={css:{scrollTop:t},duration:e,easing:n,run:function(t){r.trigger("scroll",{scrollTop:r.getScrollTop(),scrollLeft:r.getScrollLeft()})},useTransition:!1,end:i};r.__timers.y=r.__timers.y||new u(r.renderTo,o),r.__timers.y.stop(),r.__timers.y.reset(o),r.__timers.y.run()}},scrollLeft:function(t,e,n,i){var r=this,t=Math.round(t);if(!r.userConfig.lockX){var e=e||0,n=n||"quadratic",o={css:{scrollLeft:t},duration:e,easing:n,run:function(t){r.trigger("scroll",{scrollTop:r.getScrollTop(),scrollLeft:r.getScrollLeft()})},useTransition:!1,end:i};r.__timers.x=r.__timers.x||new u(r.renderTo,o),r.__timers.x.stop(),r.__timers.x.reset(o),r.__timers.x.run()}},_bindEvt:function(){r.superclass._bindEvt.call(this);var t=this;t.__isEvtBind||(t.__isEvtBind=!0,t.renderTo.addEventListener("scroll",function(e){t.trigger("scroll",{type:"scroll",scrollTop:t.getScrollTop(),scrollLeft:t.getScrollLeft()})},!1))}}),"object"==typeof i&&i.exports?void(i.exports=r):r}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r,o=n(1),s=n(2),u="Pull Down To Refresh",l="Loading...",c=function(t){c.superclass.constructor.call(this,t),this.userConfig=o.mix({content:u,height:60,autoRefresh:!0,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:l,clsPrefix:"xs-plugin-pulldown-"},t)};if(o.extend(c,s,{pluginId:"pulldown",pluginInitializer:function(t){var e=this;return e.xscroll=t.render(),r=e.userConfig.clsPrefix,e.render(),e},pluginDestructor:function(){var t=this;o.remove(t.pulldown),t.xscroll.off("panstart",t._panStartHandler,t),t.xscroll.off("pan",t._panHandler,t),t.xscroll.off("panend",t._panEndHandler,t),t.__isRender=!1,t._evtBinded=!1},render:function(){var t=this;if(!t.__isRender){if(t.__isRender=!0,t.userConfig.container)t.pulldown=t.userConfig.container;else{var e=r+"container",n=t.userConfig.height||60,i=t.pulldown=document.createElement("div");i.className=e,i.style.position="absolute",i.style.width="100%",i.style.height=n+"px",i.style.lineHeight=n+"px",i.style.top=-n+"px",i.style.textAlign="center",t.xscroll.container.appendChild(i),t.status="up",o.addClass(i,r+t.status),i.innerHTML=t.userConfig[t.status+"Content"]||t.userConfig.content}return t._bindEvt(),t}},_bindEvt:function(){var t=this;if(!t._evtBinded){t._evtBinded=!0;var e=(t.pulldown,t.xscroll);e.on("pan",t._panHandler,t),e.on("panstart",t._panStartHandler,t),e.on("panend",t._panEndHandler,t)}},_changeStatus:function(t){var e=this.status;this.status=t,this.userConfig.container||(o.removeClass(this.pulldown,r+e),o.addClass(this.pulldown,r+t),this.userConfig[t+"Content"]&&(this.pulldown.innerHTML=this.userConfig[t+"Content"])),e!=t&&(this.trigger("statuschange",{prevVal:e,newVal:t}),"loading"==t&&this.trigger("loading"))},reset:function(t){return this.xscroll.boundry.resetTop(),this.xscroll.boundryCheckY(t),this._expanded=!1,this},_panStartHandler:function(t){clearTimeout(this.loadingItv)},_panHandler:function(t){var e=this,n=e.xscroll.getScrollTop();n>0||e._changeStatus(Math.abs(n)<e.userConfig.height?"down":"up")},_panEndHandler:function(t){var e=this,n=e.xscroll,i=e.userConfig.height||60,r=n.getScrollTop();-i>r&&(t.preventDefault(),n.boundry.resetTop(),e._changeStatus("loading"),n.boundry.expandTop(i),n.boundryCheckY(function(){}),e.userConfig.autoRefresh&&(clearTimeout(e.loadingItv),e.loadingItv=setTimeout(function(){n.boundry.resetTop(),n.boundryCheckY(function(){window.location.reload()})},800)))}}),"object"==typeof i&&i.exports)i.exports=c;else if(window.XScroll&&window.XScroll.Plugins)return XScroll.Plugins.PullDown=c}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r,o=n(1),s=n(2),u="Loading...",l="Pull Up To Refresh",c="Release To Refresh",a=60,f=40,h=function(t){h.superclass.constructor.call(this),this.userConfig=o.mix({upContent:l,downContent:c,pullUpHeight:a,height:f,loadingContent:u,bufferHeight:0,clsPrefix:"xs-plugin-pullup-"},t)};if(o.extend(h,s,{pluginId:"pullup",pluginInitializer:function(t){var e=this;return e.xscroll=t.render(),r=e.userConfig.clsPrefix,e.render(),e},pluginDestructor:function(){var t=this;o.remove(t.pullup),t.xscroll.off("scrollend",t._scrollEndHandler,t),t.xscroll.off("scroll",t._scrollHandler,t),t.xscroll.off("pan",t._panHandler,t),t.xscroll.boundry.resetBottom(),t.__isRender=!1,t._evtBinded=!1},pluginDisable:function(){var t=this;t.userConfig.container||o.remove(t.pullup),t.xscroll.off("scrollend",t._scrollEndHandler,t),t.xscroll.off("scroll",t._scrollHandler,t),t.xscroll.off("pan",t._panHandler,t),t.xscroll.boundry.resetBottom(),t.__isRender=!1,t._evtBinded=!1},render:function(){var t=this;if(!t.__isRender){if(t.__isRender=!0,t.userConfig.container)t.pullup=t.userConfig.container;else{var e=r+"container",n=t.userConfig.height,i=t.pullup=document.createElement("div");i.className=e,i.style.position="absolute",i.style.width="100%",i.style.height=n+"px",i.style.bottom=-n+"px",i.style.textAlign="center",t.xscroll.container.appendChild(i),o.addClass(i,r+t.status),i.innerHTML=t.userConfig[t.status+"Content"]||t.userConfig.content}return t.xscroll.boundry.expandBottom(t.userConfig.height),t.status="up",t._bindEvt(),t}},_bindEvt:function(){var t=this;if(!t._evtBinded){t._evtBinded=!0;var e=(t.pullup,t.xscroll);return e.on("pan",t._panHandler,t),t.userConfig.bufferHeight>0&&e.on("scroll",t._scrollHandler,t),e.on("scrollend",t._scrollEndHandler,t),t}},_scrollEndHandler:function(t){var e=this,n=e.xscroll,i=n.getScrollTop();return i==n.containerHeight-n.height+e.userConfig.height&&e._changeStatus("loading"),e},_scrollHandler:function(t){var e=this,n=e.xscroll;return!e.isLoading&&Math.abs(t.scrollTop)+n.height+e.userConfig.height+e.userConfig.bufferHeight>=n.containerHeight+n.boundry._xtop+n.boundry._xbottom&&e._changeStatus("loading"),e},_panHandler:function(t){var e=this,n=e.xscroll,i=-n.getScrollTop();return i<n.height-n.containerHeight-e.userConfig.pullUpHeight?e._changeStatus("down"):e._changeStatus("up"),e},_changeStatus:function(t){if("loading"==t||!this.isLoading){var e=this.status;return this.status=t,this.userConfig.container||(o.removeClass(this.pullup,r+e),o.addClass(this.pullup,r+t),this.pullup.innerHTML=this.userConfig[t+"Content"]),e!=t&&(this.trigger("statuschange",{prevVal:e,newVal:t}),"loading"==t&&(this.isLoading=!0,this.trigger("loading"))),this}},complete:function(){var t=this;t.xscroll;return t.isLoading=!1,t._changeStatus("up"),t},stop:function(){this.xscroll;return this.isLoading=!1,this._changeStatus("stop"),this.pluginDisable(),this},restart:function(){this.xscroll;return this.isLoading=!1,this._changeStatus("default"),this.render(),this}}),"object"==typeof i&&i.exports)i.exports=h;else if(window.XScroll&&window.XScroll.Plugins)return XScroll.Plugins.PullUp=h}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";function r(t){r.superclass.constructor.call(this,t)}var o=n(1),s=(n(2),n(14)),u=n(3),l=n(8),c=n(52),a=n(50),f=.382,h=5e-4,d=.03,p=o.prefixStyle("transformOrigin"),g=o.prefixStyle("transform");return o.extend(r,s,{init:function(){var t=this,e={preventDefault:!0,preventTouchMove:!0};return r.superclass.init.call(this),t.userConfig=o.mix(e,t.userConfig),t.SCROLL_ACCELERATION=t.userConfig.SCROLL_ACCELERATION||h,t.BOUNDRY_ACCELERATION=t.userConfig.BOUNDRY_ACCELERATION||d,t._initContainer(),t.resetSize(),t._setOverflowBehavior(),t.defaltConfig={lockY:t.userConfig.lockY,lockX:t.userConfig.lockX},t},destroy:function(){var t=this;r.superclass.destroy.call(this),t.renderTo.style.overflow="",t.renderTo.style.touchAction="",t.container.style.transform="",t.container.style.transformOrigin="",t.content.style.transform="",t.content.style.transformOrigin="",t.off("touchstart mousedown",t._ontouchstart),t.off("touchmove",t._ontouchmove),t.destroyScrollBars()},_setOverflowBehavior:function(){var t=this,e=t.renderTo,n=getComputedStyle(e);return t.userConfig.lockX=void 0===t.userConfig.lockX?"hidden"==n["overflow-x"]||t.width==t.containerWidth:t.userConfig.lockX,t.userConfig.lockY=void 0===t.userConfig.lockY?"hidden"==n["overflow-y"]||t.height==t.containerHeight:t.userConfig.lockY,t.userConfig.scrollbarX=void 0===t.userConfig.scrollbarX?!t.userConfig.lockX:t.userConfig.scrollbarX,t.userConfig.scrollbarY=void 0===t.userConfig.scrollbarY?!t.userConfig.lockY:t.userConfig.scrollbarY,t},_resetLockConfig:function(){var t=this;return t.userConfig.lockX=t.defaltConfig.lockX,t.userConfig.lockY=t.defaltConfig.lockY,t},_initContainer:function(){var t=this;return r.superclass._initContainer.call(t),!t.__isContainerInited&&t.container&&t.content?(t.container.style[p]="0 0",t.content.style[p]="0 0",t.translate(0,0),t.__isContainerInited=!0,t):void 0},getScrollTop:function(){var t=window.getComputedStyle(this.container)[g].match(/[-\d\.*\d*]+/g);return t?0===Math.round(t[5])?0:-Math.round(t[5]):0},getScrollLeft:function(){var t=window.getComputedStyle(this.content)[g].match(/[-\d\.*\d*]+/g);return t?0===Math.round(t[4])?0:-Math.round(t[4]):0},scrollLeft:function(t,e,n,i){if(!this.userConfig.lockX){var r=this.userConfig.gpuAcceleration?" translateZ(0) ":"";return this.x=void 0===t||isNaN(t)||0===t?0:-Math.round(t),this._animate("x","translateX("+this.x+"px) scale("+this.scale+")"+r,e,n,i),this}},scrollTop:function(t,e,n,i){if(!this.userConfig.lockY){var r=this.userConfig.gpuAcceleration?" translateZ(0) ":"";return this.y=void 0===t||isNaN(t)||0===t?0:-Math.round(t),this._animate("y","translateY("+this.y+"px) "+r,e,n,i),this}},translate:function(t,e,n){var i=this.userConfig.gpuAcceleration?" translateZ(0) ":"";return this.x=t||this.x||0,this.y=e||this.y||0,this.scale=n||this.scale||1,this.content.style[g]="translate("+this.x+"px,0px) scale("+this.scale+") "+i,this.container.style[g]="translate(0px,"+this.y+"px) "+i,this},_animate:function(t,e,n,i,r){var o=this,n=n||0,i=i||"quadratic",s="y"==t?o.container:o.content,l={css:{transform:e},duration:n,easing:i,run:function(t){o.trigger("scroll",{scrollTop:o.getScrollTop(),scrollLeft:o.getScrollLeft(),type:"scroll"})},useTransition:o.userConfig.useTransition,end:function(e){r&&r(),0!==o["_bounce"+t]&&void 0!==o["_bounce"+t]||"linear"==i||(o["isScrolling"+t.toUpperCase()]=!1,o["isRealScrolling"+t.toUpperCase()]=!1,o.trigger("scrollend",{type:"scrollend",scrollTop:o.getScrollTop(),scrollLeft:o.getScrollLeft(),zoomType:t,duration:n,easing:i}))}},c=o.__timers[t]=o.__timers[t]||new u(s,l);return c.stop(),c.reset(l),c.run(),o.trigger("scrollanimate",{type:"scrollanimate",scrollTop:-o.y,scrollLeft:-o.x,duration:n,easing:i,zoomType:t}),this},_ontap:function(t){var e=this;e.boundryCheck(),e._unPreventHref(t),e.isRealScrollingX||e.isRealScrollingY||e._triggerClick(t),e._preventHref(t),e.isRealScrollingY=!1,e.isRealScrollingY=!1},_bindEvt:function(){r.superclass._bindEvt.call(this);var t=this;if(!t.__isEvtBind){t.__isEvtBind=!0;var e=new l.Pinch;return t.mc.add(e),t.on("touchstart mousedown",t._ontouchstart,t),t.on("touchmove",t._ontouchmove,t),t.on("tap",t._ontap,t),t.on("panstart",t._onpanstart,t),t.on("pan",t._onpan,t),t.on("panend",t._onpanend,t),window.addEventListener("resize",function(e){setTimeout(function(){t.resetSize(),t.boundryCheck(0),t.render()},100)},t),this}},_ontouchstart:function(t){var e=this;!/(SELECT|INPUT|TEXTAREA)/i.test(t.target.tagName)&&e.userConfig.preventDefault&&t.preventDefault(),e.stop()},_ontouchmove:function(t){this.userConfig.preventTouchMove&&t.preventDefault()},_onpanstart:function(t){this.userConfig.preventTouchMove&&t.preventDefault();var e=this,n=e.getScrollLeft(),i=e.getScrollTop();e.stop(),e.translate(-n,-i);var r=e.mc.get("pan").options.threshold;return e.thresholdY="8"==t.direction?r:"16"==t.direction?-r:0,e.thresholdX="2"==t.direction?r:"4"==t.direction?-r:0,e},_onpan:function(t){this.userConfig.preventTouchMove&&t.preventDefault();var e=this,n=e.boundry,i=e.userConfig,r=i.boundryCheck,o=i.bounce,s=e.__topstart||(e.__topstart=-e.getScrollTop()),u=e.__leftstart||(e.__leftstart=-e.getScrollLeft()),l=i.lockY?Number(s):Number(s)+(t.deltaY+e.thresholdY),c=i.lockX?Number(u):Number(u)+(t.deltaX+e.thresholdX),a=e.containerWidth,h=e.containerHeight;
	return r&&(l=l>n.top?o?(l-n.top)*f+n.top:n.top:l,l=l<n.bottom-h?o?l+(n.bottom-h-l)*f:n.bottom-h:l,c=c>n.left?o?(c-n.left)*f+n.left:n.left:c,c=c<n.right-a?o?c+(n.right-a-c)*f:n.right-a:c),e.translate(c,l),e.directionX="panleft"==t.type?"right":"panright"==t.type?"left":"",e.directionY="panup"==t.type?"down":"pandown"==t.type?"up":"",e.trigger("scroll",{scrollTop:-l,scrollLeft:-c,triggerType:"pan",type:"scroll"}),e},_onpanend:function(t){var e,n=this,i=(n.userConfig,n.computeScroll("x",t.velocityX)),r=n.computeScroll("y",t.velocityY),o=i?i.pos:0,s=r?r.pos:0;return i&&r&&"inside"==i.status&&"inside"==r.status&&i.duration&&r.duration&&(e=Math.max(i.duration,r.duration)),i&&n.scrollLeft(o,e||i.duration,i.easing,function(t){n.boundryCheckX()}),r&&n.scrollTop(s,e||r.duration,r.easing,function(t){n.boundryCheckY()}),n.directionX=t.velocityX<0?"left":"right",n.directionY=t.velocityY<0?"up":"down",n.__topstart=null,n.__leftstart=null,n},isBoundryOut:function(){return this.isBoundryOutLeft()||this.isBoundryOutRight()||this.isBoundryOutTop()||this.isBoundryOutBottom()},isBoundryOutLeft:function(){return this.getBoundryOutLeft()>0},isBoundryOutRight:function(){return this.getBoundryOutRight()>0},isBoundryOutTop:function(){return this.getBoundryOutTop()>0},isBoundryOutBottom:function(){return this.getBoundryOutBottom()>0},getBoundryOutTop:function(){return-this.boundry.top-this.getScrollTop()},getBoundryOutLeft:function(){return-this.boundry.left-this.getScrollLeft()},getBoundryOutBottom:function(){return this.boundry.bottom-this.containerHeight+this.getScrollTop()},getBoundryOutRight:function(){return this.boundry.right-this.containerWidth+this.getScrollLeft()},computeScroll:function(t,e){var n=this,i=n.userConfig,r=n.boundry,o="x"==t?n.getScrollLeft():n.getScrollTop(),s="x"==t?r.left:r.top,u="x"==t?r.right:r.bottom,l="x"==t?n.containerWidth:n.containerHeight,c=i.maxSpeed||2,a=i.boundryCheck,f=i.bounce,h={},d="inside";if(a){if("x"==t&&(n.isBoundryOutLeft()||n.isBoundryOutRight()))return void n.boundryCheckX();if("y"==t&&(n.isBoundryOutTop()||n.isBoundryOutBottom()))return void n.boundryCheckY()}if(!("x"==t&&n.userConfig.lockX||"y"==t&&n.userConfig.lockY)){e=e>c?c:-c>e?-c:e;var p=n.SCROLL_ACCELERATION*(e/(Math.abs(e)||1)),g=n.BOUNDRY_ACCELERATION,v=isNaN(e/p)?0:e/p,y=Number(o)+v*e/2;if(-s>y&&a){var m=-s-o,_=(Math.sqrt(-2*p*m+e*e)+e)/p,x=e-p*_,T=Math.abs(x/g),b=x/2*T;v=_+T,y=f?-s+b:-s,d="outside"}else if(y>l-u&&a){var m=u-l+o,_=(Math.sqrt(-2*p*m+e*e)-e)/p,x=e-p*_,T=Math.abs(x/g),b=x/2*T;v=_+T,y=f?l-u+b:l-u,d="outside"}if(!isNaN(y)&&!isNaN(v)){h.pos=y,h.duration=v,h.easing=Math.abs(e)>2?"circular":"quadratic",h.status=d;var C=t.toUpperCase();return n["isScrolling"+C]=!0,n["isRealScrolling"+C]=!0,h}}},boundryCheckX:function(t,e,n){var i=this;if(i.userConfig.boundryCheck&&("function"==typeof arguments[0]?(n=arguments[0],t=i.userConfig.BOUNDRY_CHECK_DURATION,e=i.userConfig.BOUNDRY_CHECK_EASING):(t=0===t?0:i.userConfig.BOUNDRY_CHECK_DURATION,e=e||i.userConfig.BOUNDRY_CHECK_EASING),i.userConfig.bounce&&!i.userConfig.lockX)){var r=i.boundry;return i.isBoundryOutLeft()?i.scrollLeft(-r.left,t,e,n):i.isBoundryOutRight()&&i.scrollLeft(i.containerWidth-r.right,t,e,n),i}},boundryCheckY:function(t,e,n){var i=this;if(i.userConfig.boundryCheck&&("function"==typeof arguments[0]?(n=arguments[0],t=i.userConfig.BOUNDRY_CHECK_DURATION,e=i.userConfig.BOUNDRY_CHECK_EASING):(t=0===t?0:i.userConfig.BOUNDRY_CHECK_DURATION,e=e||i.userConfig.BOUNDRY_CHECK_EASING),i.userConfig.boundryCheck&&!i.userConfig.lockY)){var r=i.boundry;return i.isBoundryOutTop()?i.scrollTop(-r.top,t,e,n):i.isBoundryOutBottom()&&i.scrollTop(i.containerHeight-r.bottom,t,e,n),i}},boundryCheck:function(t,e,n){return this.boundryCheckX(t,e,n),this.boundryCheckY(t,e,n),this},stop:function(){var t=this;if(t.__timers.x&&t.__timers.x.stop(),t.__timers.y&&t.__timers.y.stop(),t.isScrollingX||t.isScrollingY){var e=t.getScrollTop(),n=t.getScrollLeft();t.trigger("scrollend",{scrollTop:e,scrollLeft:n}),t.trigger("stop",{scrollTop:e,scrollLeft:n}),t.isScrollingX=!1,t.isScrollingY=!1}return t},render:function(){var t=this;return r.superclass.render.call(this),"static"==getComputedStyle(t.renderTo).position&&(t.renderTo.style.position="relative"),t.renderTo.style.overflow="hidden",t.initScrollBars(),t.initController(),t},initScrollBars:function(){var t=this;if(t.userConfig.boundryCheck){var e=t.userConfig.indicatorInsets;return t.userConfig.scrollbarX&&(t.scrollbarX=t.scrollbarX||new c({xscroll:t,type:"x",spacing:e.spacing}),t.scrollbarX.render(),t.scrollbarX._update(),t.scrollbarX.hide()),t.userConfig.scrollbarY&&(t.scrollbarY=t.scrollbarY||new c({xscroll:t,type:"y",spacing:e.spacing}),t.scrollbarY.render(),t.scrollbarY._update(),t.scrollbarY.hide()),t}},destroyScrollBars:function(){return this.scrollbarX&&this.scrollbarX.destroy(),this.scrollbarY&&this.scrollbarY.destroy(),this},initController:function(){var t=this;return t.controller=t.controller||new a({xscroll:t}),t},_unPreventHref:function(t){var e=o.findParentEl(t.target,"a",this.renderTo);if(e&&"a"==e.tagName.toLowerCase()){var n=e.getAttribute("data-xs-href");n&&e.setAttribute("href",n)}},_preventHref:function(t){var e=o.findParentEl(t.target,"a",this.renderTo);if(e&&"a"==e.tagName.toLowerCase()){var n=e.getAttribute("href");n&&e.setAttribute("href","javascript:void(0)"),n&&e.setAttribute("data-xs-href",n)}},_triggerClick:function(t){var e=t.target;if(!/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e.dispatchEvent(n)}}}),"object"==typeof i&&i.exports?void(i.exports=r):r}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))},function(t,e,n){var i;i=function(t,e,i){"use strict";var r=n(1),o=n(2),s=n(16),u=n(3),l=n(8),c=n(58),a=n(55),f=function(t){var e=t&&t.useOriginScroll?a:c;return new e(t)};return f.Util=r,f.Base=o,f.Timer=s,f.Animate=u,f.Hammer=l,f.Plugins={},"object"==typeof i&&i.exports?void(i.exports=f):window.XScroll=f}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}])});

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<scroller v-ref:scroller lock-x height=\"auto\"\n          use-pulldown\n          @pulldown:loading=\"reload\"\n          style=\"position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;\" >\n\n\t<div style=\"padding-bottom: 20px\">\n\t\t<loading v-ref:loading\n\t\t         @on-refresh=\"query\">\n\t\t</loading>\n\n\t\t<card v-for=\"item in items\"\n\t\t\t    :title=\"item.title\"\n\t\t      :head-img-url=\"item.sponsor_avatar\"\n\t\t\t    :time-range=\"item.start_time+' —— '+item.end_time\"\n\t\t\t    :last-time=\"item.end_time\"\n\t\t\t    :number=\"item.signup_number\"\n\t\t      :money=\"item.deposit\"\n\t\t      :course=\"item.course_desc\"\n\t\t      :id=\"item.activity_id\">\n\t\t</card>\n\n\t</div>\n</scroller>\n\n";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(120)
	__vue_script__ = __webpack_require__(121)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/mysign.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ebdc398e/mysign.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _signCard = __webpack_require__(122);

	var _signCard2 = _interopRequireDefault(_signCard);

	var _activityAction = __webpack_require__(82);

	var _activityGetter = __webpack_require__(57);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _common = __webpack_require__(116);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	//
	// 	<scroller v-ref:scroller
	// 	          use-pulldown
	// 	          @pulldown:loading="reload"
	// 	          lock-x height="auto"
	// 	          style="position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;" >
	// 		<div style="padding-bottom: 20px">
	//
	// 			<loading v-ref:loading
	// 			         @on-refresh="query">
	// 			</loading>
	//
	// 			<card v-for="item in items "
	// 						:label="item.signin_status===1?'今日已打卡':'我要打卡'"
	// 						:type="item.signin_status===1?'ready':'glass'"
	// 						:title="item.activity_title"
	// 						:content="item.text"
	// 						:zan="item.agree_count"
	// 						:comments="item.comment_count"
	// 						:url="item.image_url"
	// 						:activity-id="item.activity_id"
	// 						:sign-id="item.signin_id"
	// 						:checked="item.my_agree === 1 ? true : false"
	// 						@on-loaded="pass(item)"
	// 						:date="item.signin_time">
	// 			</card>
	//
	// 		</div>
	// 	</scroller>
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			card: _signCard2.default,
			loading: _loading2.default,
			scroller: _index2.default
		},
		vuex: {
			actions: {
				activityOngoingListQuery: _activityAction.activityOngoingListQuery,
				setSignInfo: _activityAction.setSignInfo
			},
			getters: {
				items: _activityGetter.getOngoingActivityList
			}
		},
		methods: {
			query: function query() {
				var _self = this;
				this.$refs.loading.OnLoading();
				this.activityOngoingListQuery().then(function (data) {
					if ((0, _common.isEmptyObject)(_self.items)) {
						_self.$refs.loading.OnEmpty();
					} else {
						_self.$refs.loading.OnHide();
					}
				}).catch(function () {
					_self.$refs.loading.OnError();
				});
			},
			reload: function reload(uuid) {
				var _self = this;
				this.activityOngoingListQuery().then(function (data) {
					_self.$broadcast('pulldown:reset', uuid);
				}).catch(function () {
					_self.$broadcast('pulldown:reset', uuid);
				});
			},
			pass: function pass(info) {
				this.setSignInfo(info);
			}
		},
		watch: {
			items: function items() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			}
		},
		ready: function ready() {
			if (this.items.length === 0) {
				this.query();
			} else {
				this.activityOngoingListQuery();
			}
		}
	};
	// </script>

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(123)
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/signCard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-730bb786/signCard.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 123 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBottomShadow = __webpack_require__(40);

	var _boxWithBottomShadow2 = _interopRequireDefault(_boxWithBottomShadow);

	var _cardLabel = __webpack_require__(125);

	var _cardLabel2 = _interopRequireDefault(_cardLabel);

	var _commentItem = __webpack_require__(129);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	var _Image = __webpack_require__(140);

	var _Image2 = _interopRequireDefault(_Image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<card :type="type" >
	//
	// 		<div v-link="{name:'sign',params:{id:activityId}}" style="padding: 25px 30px 0;">
	// 			<cl top right :type="type"
	// 			    :height="25"
	// 			    :width="73">
	// 				{{label}}
	// 			</cl>
	// 			<h4>{{title}}</h4>
	// 			<p>{{state}}</p>
	// 			<p class="mz-card-content" v-html="content | newLine"></p>
	// 			<image-item :src="url"></image-item>
	// 		</div>
	//
	// 		<comment :zan="zan"
	// 					   :comments="comments"
	// 		         :activity-id="activityId"
	// 		         :sign-id="signId"
	// 					   :checked="checked"
	// 							@on-loaded="loaded"
	//              :date="date">
	// 		</comment>
	// 	</card>
	// </template>
	//
	// <style>
	// .mz-photo{
	// 		max-width: 200px;
	// 		max-height: 200px;
	// }
	// .mz-text-center{
	// 	text-align: center;
	// }
	// h4{
	// 	font-size: 1.6rem;
	// }
	// .mz-card-content{
	// 	color:#666;
	// 	font-size: 1.4rem;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			card: _boxWithBottomShadow2.default,
			cl: _cardLabel2.default,
			comment: _commentItem2.default,
			imageItem: _Image2.default
		},
		props: {
			label: String,
			type: String,
			title: String,
			content: String,
			zan: Number,
			comments: Number,
			url: String,
			state: String,
			activityId: Number,
			signId: Number,
			checked: Boolean,
			date: String
		},
		methods: {
			loaded: function loaded() {
				this.$emit('on-loaded');
			}
		}
	};
	// </script>

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(126)
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/label/cardLabel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fb9f2e3c/cardLabel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 126 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-label" v-bind:class="classes"
	// 												v-bind:style="{height:height+'px',width:width+'px',lineHeight:height+'px'}">
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-label{
	// 		position: absolute;
	// 		text-align: center;
	// 		color:#fff;
	// 		font-size: 1.4rem;
	// 	}
	// 	.mz-top{
	// 		top:0;
	// 	}
	// 	.mz-left{
	// 		left: 0;
	// 	}
	// 	.mz-bottom{
	// 		bottom: 0;
	// 	}
	// 	.mz-right{
	// 		right: 0;
	// 	}
	// 	.mz-success{
	// 		background: #72e4dc;
	// 	}
	// 	.mz-success-light{
	// 		background: #e3faf8;
	// 	}
	// 	.mz-failed{
	// 		background: #fe7f85;
	// 	}
	// 	.mz-warn{
	// 		background: #ffb780;
	// 	}
	// 	.mz-warn-light{
	// 		background: #ffe9d9;
	// 	}
	// 	.mz-ready{
	// 		background: #5fb0f1;
	// 	}
	// 	.mz-complete{
	// 		background: #ffba27;
	// 	}
	// 	.mz-glass{
	// 		background: #b0d160;
	// 	}
	// 	.mz-purple{
	// 		background: #b59ac1;
	// 	}
	// 	.mz-default{
	//
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			top: {
				type: Boolean,
				default: false
			},
			bottom: {
				type: Boolean,
				default: false
			},
			left: {
				type: Boolean,
				default: false
			},
			right: {
				type: Boolean,
				default: false
			},
			height: {
				type: Number,
				default: 20
			},
			width: {
				type: Number,
				default: 100
			},
			type: {
				type: String,
				default: 'deault'
			}
		},
		computed: {
			classes: function classes() {
				return [{
					'mz-top': this.top,
					'mz-left': this.left,
					'mz-right': this.right,
					'mz-bottom': this.bottom
				}, 'mz-' + this.type];
			}
		}
	};
	// </script>

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-label\" v-bind:class=\"classes\"\n\t\t\t\t\t\t\t\t\t\t\tv-bind:style=\"{height:height+'px',width:width+'px',lineHeight:height+'px'}\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(130)
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/commentItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(139)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-36217a6d/commentItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _button = __webpack_require__(132);

	var _button2 = _interopRequireDefault(_button);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _index = __webpack_require__(137);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(114);

	var _index4 = _interopRequireDefault(_index3);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _common = __webpack_require__(116);

	var _index5 = __webpack_require__(138);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			TButton: _button2.default,
			toast: _index2.default,
			spinner: _index4.default,
			loading: _loading2.default,
			load: _index6.default
		},
		data: function data() {
			return {
				showCommit: false,
				showToast: false,
				content: '',
				commits: [],
				message: '',
				type: '',
				showLoading: false
			};
		},
		props: {
			zan: {
				type: Number
			},
			comments: {
				type: Number
			},
			activityId: {
				type: Number
			},
			signId: {
				type: Number
			},
			checked: {
				type: Boolean,
				default: false
			},
			date: {
				type: String
			}
		},
		methods: {
			//点赞
			toggle: function toggle() {
				if (!this.checked) {
					_activityService2.default.ZAN(this.activityId, this.signId);
					this.zan++;
					this.checked = true;
				}
			},
			comment: function comment() {
				this.$router.go({ name: 'comment', params: { activityId: this.activityId, signId: this.signId } });
				this.$emit('on-loaded');
			}

		}
	};
	// </script>
	// <template>
	// 	<div  class="mz-comment-footer">
	// 		<div class="mz-item-comment">
	// 			<div>
	// 				<span v-if="date" class="mz-font-12">{{date | friendlyTime}}</span>
	// 			</div>
	// 			<div>
	// 				<i class="mz-icon mz-icon-comment mz-pull-right mz-space-15"  @click="comment">{{comments}}</i>
	// 				<i class="mz-icon mz-icon-good mz-pull-right mz-space-15"  :class="{'mz-checked': checked}"  @click="toggle">{{zan}}</i>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-pull-right{
	// 		float: right;
	// 	}
	// 	.mz-item-comment{
	// 		padding: 3px 0;
	// 		display: flex;
	// 		justify-content: space-between;
	// 		align-items: center;
	// 	}
	// 	.mz-comment-footer{
	// 		padding: 8px 15px 8px 30px;
	// 	}
	// 	.mz-commit{
	// 		border:1px solid #e3e3e3;
	// 		padding: 8px;
	// 		border-radius: 5px;
	// 		height:50px;
	// 		width:100%;
	// 		resize:none;
	// 		box-sizing: border-box;
	// 	}
	// 	.mz-icon{
	// 		font-family: "MOZI";
	// 		display: inline-block;
	// 		font-style: normal;
	// 		font-size: 14px;
	// 		color: #666;
	// 	}
	// 	.mz-space-15{
	// 		margin-right: 15px;
	// 	}
	// 	.mz-icon-comment:before{
	// 		content: "\e912";
	// 		padding-right: 6px;
	// 	}
	// 	.mz-icon-good:before{
	// 		content: "\e913";
	// 		padding-right:6px;
	// 	}
	// 	.clear-fix{
	// 		overflow:auto;
	// 		_height:1%
	// 	}
	// 	.mz-checked.mz-icon{
	// 		color: #FE7F85;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(133)
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c74dc330/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<button class="mz-button" :class="classes">
	// 		<slot></slot>
	// 	</button>
	// </template>
	//
	// <style>
	// .mz-button{
	// 	border-width: 0;
	// 	outline: 0;
	// 	position: relative;
	// 	display: block;
	// 	margin-left: auto;
	// 	margin-right: auto;
	// 	padding-left: 14px;
	// 	padding-right: 14px;
	// 	box-sizing: border-box;
	// 	font-size: 18px;
	// 	text-align: center;
	// 	text-decoration: none;
	// 	color: #fff;
	// 	line-height: 2.33333333;
	// 	border-radius: 5px;
	// 	-webkit-tap-highlight-color: rgba(0,0,0,0);
	// 	overflow: hidden;
	// }
	// .mz-button-min{
	// 	padding: 0 10px;
	// 	font-size: 1.2rem;
	// }
	// .mz-button-normal{
	// 	width: 40%;
	// }
	// .mz-button-large{
	// 	width: 80%;
	// }
	// .mz-button-full{
	// 	width: 100%;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			min: {
				type: Boolean
			},
			normal: {
				type: Boolean
			},
			large: {
				type: Boolean
			},
			full: {
				type: Boolean
			},
			type: {
				type: String
			}
		},
		computed: {
			classes: function classes() {
				return [{
					'mz-button-min': this.min,
					'mz-button-normal': this.normal,
					'mz-button-large': this.large,
					'mz-button-full': this.full
				}, 'mz-' + this.type];
			}
		}
	};
	// </script>

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<button class=\"mz-button\" :class=\"classes\">\n\t<slot></slot>\n</button>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _activity = __webpack_require__(83);

	var _activity2 = _interopRequireDefault(_activity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		ZAN: function ZAN(activityId, signId) {
			return _activity2.default.API_AGREE(activityId, signId);
		},

		sign: function sign(id, url, text) {
			return _activity2.default.API_SIGN_ACTIVITY(id, url, text);
		},

		book: function book(id) {
			return _activity2.default.API_BOOK_ACTIVITY(id);
		},

		commit: function commit(activityId, signId, content) {
			return _activity2.default.API_COMMIT_MESSAGE(activityId, signId, content);
		},

		getMessageList: function getMessageList(activityId, signId) {
			return _activity2.default.API_GET_MESSAGE_LIST(activityId, signId);
		},

		getUrlByServerId: function getUrlByServerId(id) {
			return _activity2.default.API_GET_URL_BY_SERVERID(id);
		},

		getActivityInfo: function getActivityInfo(id) {
			return _activity2.default.API_GET_ACTIVITY(id);
		},

		getActivitySignList: function getActivitySignList(id, page) {
			return _activity2.default.API_GET_SIGN_LIST(id, page);
		},

		getActivityCompletedInfo: function getActivityCompletedInfo(id) {
			return _activity2.default.API_GET_COMPLETED_ACTIVITY(id);
		},

		getActivityTimeLine: function getActivityTimeLine(id, page) {
			return _activity2.default.API_GET_COMPLETED_ACTIVITY_TIMELINE(id, page);
		}
	}; /**
	    * Created by Alex on 16/8/21.
	    */

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxToast=e():t.vuxToast=e()}(this,function(){return function(t){function e(o){if(s[o])return s[o].exports;var i=s[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){t.exports=s(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1},time:{type:Number,"default":2e3},type:{type:String,"default":"success"},transition:{type:String,"default":"vux-fade"},width:{type:String,"default":"7.6em"}},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1},this.time))}}}},function(t,e){},function(t,e){t.exports='<div v-show=show class=vux-toast :transition=transition> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{width: width}" :class=toastClass> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content><slot></slot></p> </div> </div>'},function(t,e,s){var o,i;s(2),o=s(1),i=s(3),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxLoading=e():t.vuxLoading=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:Boolean,text:{type:String,"default":"Loading"}}}},function(t,e){},function(t,e){t.exports='<div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div>'},function(t,e,o){var s,i;o(2),s=o(1),i=o(3),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "\n<div  class=\"mz-comment-footer\">\n\t<div class=\"mz-item-comment\">\n\t\t<div>\n\t\t\t<span v-if=\"date\" class=\"mz-font-12\">{{date | friendlyTime}}</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<i class=\"mz-icon mz-icon-comment mz-pull-right mz-space-15\"  @click=\"comment\">{{comments}}</i>\n\t\t\t<i class=\"mz-icon mz-icon-good mz-pull-right mz-space-15\"  :class=\"{'mz-checked': checked}\"  @click=\"toggle\">{{zan}}</i>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(141)
	__vue_script__ = __webpack_require__(142)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Image/Image.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fa1add40/Image.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-photo-preview" v-if="src">
	// 		<img :src="src" @click.stop="preview(src)" class="mz-photo">
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-photo{
	// 	max-height: 200px;
	// 	max-width: 200px;
	// }
	// .mz-photo-preview{
	// 	margin-top:10px;
	// 	height: 200px;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			src: String
		},
		methods: {
			preview: function preview(url) {
				window.wx.previewImage({
					current: url,
					urls: [url]
				});
			}
		}
	};
	// </script>

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-photo-preview\" v-if=\"src\">\n\t<img :src=\"src\" @click.stop=\"preview(src)\" class=\"mz-photo\">\n</div>\n";

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n\t<card :type=\"type\" >\n\n\t\t<div v-link=\"{name:'sign',params:{id:activityId}}\" style=\"padding: 25px 30px 0;\">\n\t\t\t<cl top right :type=\"type\"\n\t\t\t    :height=\"25\"\n\t\t\t    :width=\"73\">\n\t\t\t\t{{label}}\n\t\t\t</cl>\n\t\t\t<h4>{{title}}</h4>\n\t\t\t<p>{{state}}</p>\n\t\t\t<p class=\"mz-card-content\" v-html=\"content | newLine\"></p>\n\t\t\t<image-item :src=\"url\"></image-item>\n\t\t</div>\n\n\t\t<comment :zan=\"zan\"\n\t\t\t\t\t   :comments=\"comments\"\n\t\t         :activity-id=\"activityId\"\n\t\t         :sign-id=\"signId\"\n\t\t\t\t\t   :checked=\"checked\"\n\t\t\t\t\t\t\t@on-loaded=\"loaded\"\n             :date=\"date\">\n\t\t</comment>\n\t</card>\n";

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<scroller v-ref:scroller\n          use-pulldown\n          @pulldown:loading=\"reload\"\n          lock-x height=\"auto\"\n          style=\"position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;\" >\n\t<div style=\"padding-bottom: 20px\">\n\n\t\t<loading v-ref:loading\n\t\t         @on-refresh=\"query\">\n\t\t</loading>\n\n\t\t<card v-for=\"item in items \"\n\t\t\t\t\t:label=\"item.signin_status===1?'今日已打卡':'我要打卡'\"\n\t\t\t\t\t:type=\"item.signin_status===1?'ready':'glass'\"\n\t\t\t\t\t:title=\"item.activity_title\"\n\t\t\t\t\t:content=\"item.text\"\n\t\t\t\t\t:zan=\"item.agree_count\"\n\t\t\t\t\t:comments=\"item.comment_count\"\n\t\t\t\t\t:url=\"item.image_url\"\n\t\t\t\t\t:activity-id=\"item.activity_id\"\n\t\t\t\t\t:sign-id=\"item.signin_id\"\n\t\t\t\t\t:checked=\"item.my_agree === 1 ? true : false\"\n\t\t\t\t\t@on-loaded=\"pass(item)\"\n\t\t\t\t\t:date=\"item.signin_time\">\n\t\t</card>\n\n\t</div>\n</scroller>\n";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(147)
	__vue_script__ = __webpack_require__(148)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/billboard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3551bf0a/billboard.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 147 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _activityGetter = __webpack_require__(57);

	var _activityAction = __webpack_require__(82);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div>
	// 	<scroller v-ref:scroller
	// 			  lock-x>
	//
	// 	<div class="mz-billboard mz-item">
	// 		<loading v-ref:loading
	// 		         @on-refresh="query">
	// 		</loading>
	//
	// 		<div v-if="$index == 0" class="mz-billboard-top-1" v-for="item in items">
	//
	// 			<i class="mz-billboard-rank">NO.{{$index+1}}</i>
	//
	// 			<div class="mz-billboard-avatar">
	//
	// 					<img src="/images/crown.png" class="mz-billboard-top-1-crown">
	// 					<img :src="item.user_avatar" class="mz-billboard-img-avatar">
	//
	// 				  <div class="mz-billboard-top-1-decorate">
	// 					  <span>{{item.user_name}}</span>
	// 				  </div>
	// 				  <div class="mz-billboard-bottom">
	// 					累计打卡次数: {{item.signin_count}}
	// 				  </div>
	// 			</div>
	//
	//
	// 		</div>
	//
	// 		<div v-if="$index > 0" class="mz-billboard-item" :class="[item.id%2 == 0 ? 'mz-item-odds' : 'mz-item-even']" v-for="item in items">
	//
	// 			<span class="mz-billboard-item-rank-number">NO.{{$index+1}}</span>
	// 			<img :src="item.user_avatar" class="mz-billboard-img-avatar">
	//
	// 			<div>
	// 				<p class="mz-billboard-name"><span>{{item.user_name}}</span> <span class="mz-billboard-level">v{{item.score_level}}</span></p>
	// 				<p class="mz-billboard-point">次数: {{item.signin_count}}</p>
	// 			</div>
	//
	// 		</div>
	//
	// 	</div>
	// 	</scroller>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-billboard-top-1{
	// 	height: 133px;
	// 	background: #72e4dc;
	// 	color: #fff;
	// 	display: flex;
	// 	align-items: center;
	// 	justify-items: center;
	// 	justify-content: center;
	// }
	// .mz-billboard-rank{
	// 	position: absolute;
	// 	top:57px;
	// 	left: 0;
	// 	width: 68px;
	// 	height: 20px;
	// 	background: #fc8087;
	// 	border-bottom-right-radius: 10px;
	// 	border-top-right-radius: 10px;
	// 	font-style: normal;
	// 	font-size: 1.6rem;
	// 	line-height: 20px;
	// 	text-align: center;
	// }
	// .mz-billboard-top-1 .mz-billboard-img-avatar{
	// 	height: 60px;
	// 	width: 60px;
	// 	border-radius: 50%;
	// }
	// .mz-billboard-bottom{
	// 	font-size: 12px;
	// 	position: absolute;
	// 	bottom:-32px;
	// 	left:-32px;
	// 	width:120px;
	// 	text-align: center;
	// }
	// .mz-billboard-item{
	// 	height:60px;
	// 	display: flex;
	// 	align-items: center;
	// }
	// .mz-billboard-item .mz-billboard-img-avatar{
	// 	height: 50px;
	// 	width: 50px;
	// 	border-radius: 50%;
	// 	margin: 0 20px 0 0;
	// }
	// .mz-item-odds{
	// 	background: #fff7e6;
	// }
	// .mz-item-even{
	// 	background: #fffcf5;
	// }
	// .mz-billboard-name{
	// 	color:#333;
	// 	font-size: 1.6rem;
	// 	display: flex;
	// }
	// .mz-billboard-name span:first-child{
	// 	display: inline-block;
	// 	width:6em;
	// 	height:22px;
	// 	white-space: nowrap;
	// 	overflow: hidden;
	// 	-ms-text-overflow: ellipsis;
	// 	text-overflow: ellipsis;
	// }
	// .mz-billboard-point{
	// 	color:#6cd9d1;
	// 	font-size:1.4rem;
	// }
	// .mz-billboard-item-rank-number{
	// 	color: #ffba27;
	// 	font-size: 2.4rem;
	// 	margin: 0 31px 0 16px;
	// }
	// .mz-billboard-avatar{
	// 	position: relative;
	// }
	// .mz-billboard-top-1-crown{
	// 	position: absolute;
	// 	width: 44px;
	// 	top:-15px;
	// 	left:50%;
	// 	margin-left: -22px;
	// }
	// .mz-billboard-top-1-decorate{
	// 	width: 152px;
	// 	height: 40px;
	// 	background-image: url("/images/decorate.jpg");
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 100%;
	// 	position: absolute;
	// 	left: 50%;
	// 	margin-left: -77px;
	// 	bottom: -6px;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: flex-end;
	// }
	// .mz-billboard-top-1-decorate span{
	// 	width:6em;
	// 	white-space: nowrap;
	// 	overflow: hidden;
	// 	-ms-text-overflow: ellipsis;
	// 	text-overflow: ellipsis;
	// }
	// .mz-billboard-level{
	// 	display: inline-block;
	// 	border:2px solid #FBDF86;
	// 	border-radius:50%;
	// 	background-color: #F7BE32;
	// 	font-size:10px;
	// 	color: #FFFFFF;
	// 	text-align: center;
	// 	vertical-align: middle;
	// 	width:15px;
	// 	height:15px;
	// 	line-height: 16px;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		vuex: {
			getters: {
				items: _activityGetter.getRankList
			},
			actions: {
				rankListQuery: _activityAction.rankListQuery
			}
		},
		components: {
			Scroller: _index2.default,
			loading: _loading2.default
		},
		methods: {
			query: function query() {
				var _self = this;
				this.$refs.loading.OnLoading();
				this.rankListQuery().then(function (data) {
					//				if(isEmptyObject(_self.items)){
					//					_self.$refs.loading.OnEmpty()
					//				}
					//				else{
					_self.$refs.loading.OnHide();
					//				}
				}).catch(function () {
					_self.$refs.loading.OnError();
				});
			},
			loaded: function loaded() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			}
		},
		watch: {
			items: function items() {
				this.loaded();
			}
		},
		ready: function ready() {
			this.query();
		}
	};
	// </script>

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<scroller v-ref:scroller\n\t\t  lock-x>\n\n<div class=\"mz-billboard mz-item\">\n\t<loading v-ref:loading\n\t         @on-refresh=\"query\">\n\t</loading>\n\n\t<div v-if=\"$index == 0\" class=\"mz-billboard-top-1\" v-for=\"item in items\">\n\n\t\t<i class=\"mz-billboard-rank\">NO.{{$index+1}}</i>\n\n\t\t<div class=\"mz-billboard-avatar\">\n\n\t\t\t\t<img src=\"/images/crown.png\" class=\"mz-billboard-top-1-crown\">\n\t\t\t\t<img :src=\"item.user_avatar\" class=\"mz-billboard-img-avatar\">\n\n\t\t\t  <div class=\"mz-billboard-top-1-decorate\">\n\t\t\t\t  <span>{{item.user_name}}</span>\n\t\t\t  </div>\n\t\t\t  <div class=\"mz-billboard-bottom\">\n\t\t\t\t累计打卡次数: {{item.signin_count}}\n\t\t\t  </div>\n\t\t</div>\n\n\n\t</div>\n\n\t<div v-if=\"$index > 0\" class=\"mz-billboard-item\" :class=\"[item.id%2 == 0 ? 'mz-item-odds' : 'mz-item-even']\" v-for=\"item in items\">\n\n\t\t<span class=\"mz-billboard-item-rank-number\">NO.{{$index+1}}</span>\n\t\t<img :src=\"item.user_avatar\" class=\"mz-billboard-img-avatar\">\n\n\t\t<div>\n\t\t\t<p class=\"mz-billboard-name\"><span>{{item.user_name}}</span> <span class=\"mz-billboard-level\">v{{item.score_level}}</span></p>\n\t\t\t<p class=\"mz-billboard-point\">次数: {{item.signin_count}}</p>\n\t\t</div>\n\n\t</div>\n\n</div>\n</scroller>\n</div>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(151)
	__vue_script__ = __webpack_require__(152)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(192)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-143eddb3/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _avatarItem = __webpack_require__(44);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _contentWithTitle = __webpack_require__(153);

	var _contentWithTitle2 = _interopRequireDefault(_contentWithTitle);

	var _iconItem = __webpack_require__(48);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _cardWithAvatar = __webpack_require__(157);

	var _cardWithAvatar2 = _interopRequireDefault(_cardWithAvatar);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	var _footerButton = __webpack_require__(165);

	var _footerButton2 = _interopRequireDefault(_footerButton);

	var _confirm = __webpack_require__(169);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _HalfItem = __webpack_require__(174);

	var _HalfItem2 = _interopRequireDefault(_HalfItem);

	var _promise = __webpack_require__(97);

	var _promise2 = _interopRequireDefault(_promise);

	var _upload = __webpack_require__(178);

	var _upload2 = _interopRequireDefault(_upload);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _activityAction = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				activityInfo: {},
				items: [],
				showUpload: false,
				page: 1,
				size: 20
			};
		},

		vuex: {
			actions: {
				setSignInfo: _activityAction.setSignInfo
			}
		},
		components: {
			avatarItem: _avatarItem2.default,
			wrap: _contentWithTitle2.default,
			iconItem: _iconItem2.default,
			card: _cardWithAvatar2.default,
			scroller: _index2.default,
			fButton: _footerButton2.default,
			dialog: _confirm2.default,
			halfItem: _HalfItem2.default,
			loading: _loading2.default,
			upload: _upload2.default
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
			}
		},
		ready: function ready() {
			this.query();
		},
		methods: {
			onConfirm: function onConfirm() {
				var _self = this;
				this.$dispatch('loading');
				_activityService2.default.book(this.id).then(function (data) {
					if (data.data.result === 0) {
						_self.activityInfo.signup = 1;
						_self.$refs.dialog.toggle();
						_self.$dispatch('loading');
					} else {
						_self.$dispatch('error', '报名失败');
						_self.$dispatch('loading');
					}
				}).catch(function (err) {
					if (err.status === 400) {
						_self.$dispatch('error', err.data.error_message);
					} else if (err.status === 0) {
						_self.$dispatch('error', '请求超时请重试');
					} else {
						_self.$dispatch('error', '内容错误请重试');
					}
					_self.$dispatch('loading');
				});
			},

			confirm: function confirm() {
				this.$dispatch('confirm', '活动信息', '确定参加活动?', this.onConfirm);
			},

			fresh: function fresh() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			},

			query: function query() {
				var _self = this;
				this.$refs.loading.OnLoading();
				_promise2.default.all([_activityService2.default.getActivityInfo(this.id), _activityService2.default.getActivitySignList(this.id, this.page, this.size)]).then(function (data) {
					_self.activityInfo = data[0].data;
					_self.items = data[1].data.list;
					_self.$refs.loading.OnHide();
					if (data[1].data.page_end === 1) {
						_self.$nextTick(function () {
							_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid);
						});
					}
					_self.page++;
					_self.fresh();
				}).catch(function (err) {
					_self.$refs.loading.OnError();
				});
			},

			loadMore: function loadMore(uuid) {
				var _self = this;
				_activityService2.default.getActivitySignList(this.id, this.page, this.size).then(function (data) {
					if (data.data) _self.items = _self.items.concat(data.data.list);
					_self.$broadcast('pullup:reset', uuid);
					if (data.data.page_end === 1) {
						_self.$broadcast('pullup:disable', uuid);
					}
					_self.page++;
				}).catch(function () {
					_self.$broadcast('pullup:reset', uuid);
				});
			},

			upload: function upload() {
				this.$router.go({ name: 'upload' });
			},
			pass: function pass(info) {
				this.setSignInfo(info);
			}
		}
	};
	// </script>
	// <template>
	// 	<div>
	// 	<loading v-ref:loading @on-refresh="query"></loading>
	//
	// 	<div v-if="activityInfo.info && items">
	// 		<scroller v-ref:scroller lock-x
	// 		          use-pullup
	// 		          @pullup:loading="loadMore"
	// 		          style="position: absolute;top:0;left: 0;right: 0;bottom: 50px"
	// 		          height="auto">
	//
	// 			<div class="mz-sign" style="padding-bottom: 10px">
	// 				<div class="mz-item-cover">
	// 					<avatar-item :avatar-url="activityInfo.info.sponsor_avatar">
	// 						<h4>{{activityInfo.info.sponsor_name}}</h4>
	// 						<p>发起了活动: {{activityInfo.info.title}}</p>
	// 						<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>
	// 						<p>报名截至时间:{{activityInfo.info.end_time}}</p>
	// 					</avatar-item>
	// 				</div>
	//
	// 				<wrap title="活动介绍:" type="success">
	// 					<p v-html="activityInfo.info.desc | newLine "></p>
	// 				</wrap>
	//
	// 				<wrap title="相关课程:" type="warn">
	// 					<half-item
	// 									v-for="course in activityInfo.info.resource_list"
	// 									:url="course.image_url"
	// 									:title="course.link_text"
	// 									:href="course.link_url">
	// 					</half-item>
	// 				</wrap>
	//
	// 				<div class="mz-content-container" style="margin-top: 10px">
	// 					<icon-item type="people">已报名人数:<span>{{activityInfo.info.signup_number}}</span></icon-item>
	// 					<!--<icon-item type="money">每人保证金</icon-item>-->
	// 					<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
	// 				</div>
	//
	// 				<card v-for="item in items"
	// 				      :head-img-url="item.user_avatar"
	// 							:cover="item.image_url"
	// 							:zan="item.agree_count"
	// 							:comments="item.comment_count"
	// 							:content="item.text | newLine"
	// 							:activity-id="item.activity_id"
	// 							:sign-id="item.signin_id"
	// 							:checked="item.my_agree === 1 ? true: false "
	// 							@on-loaded="pass(item)"
	// 							:date="item.signin_time"
	// 							:name="item.user_name">
	// 				</card>
	//
	// 			</div>
	// 		</scroller>
	//
	// 		<f-button type="success"
	// 							:action="activityInfo.signup===1?'已报名':'我要报名'"
	// 							:disable="activityInfo.signup===1?true:false"
	// 							@on-confirm="confirm">
	//
	// 		</f-button>
	//
	// 		<dialog v-ref:dialog
	// 						@on-confirm="upload">
	// 		</dialog>
	// 	</div>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-item-cover{
	// 		padding: 10px 13px 0 13px;
	// 		background: #fff;
	// 	}
	// 	p{
	// 		font-size: 1.3rem;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(154)
	__vue_script__ = __webpack_require__(155)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/container/contentWithTitle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(156)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8f9c32c4/contentWithTitle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 154 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-content-wrap" >
	// 		<div class="mz-content-header" :class="classesLight">
	// 			<div class="mz-content-title" :class="classes">
	// 				{{title}}
	// 			</div>
	// 			<div class="mz-pull-right mz-content-toggle" >
	// 				{{detail}}
	// 			</div>
	// 		</div>
	//
	// 		<div class="mz-content-container clearfix">
	// 			<slot></slot>
	// 		</div>
	// 	</div>
	//
	// </template>
	//
	// <style>
	// 	.mz-content-header{
	// 		height: 20px;
	// 	}
	// 	.mz-content-title{
	// 		text-align: center;
	// 		width: 87px ;
	// 		display: inline-block;
	// 		color:#fff;
	// 		height: 100%;
	// 		line-height: 20px;
	// 	}
	// 	.mz-content-container{
	// 		padding: 10px 13px;
	// 		background: #fff;
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			title: {
				type: String
			},
			type: {
				type: String,
				default: 'default'
			}
		},
		data: function data() {
			return {
				show: true
			};
		},
		computed: {
			classes: function classes() {
				return ['mz-' + this.type];
			},
			classesLight: function classesLight() {
				return ['mz-' + this.type + '-light'];
			}
		}
	};
	// </script>

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-content-wrap\" >\n\t<div class=\"mz-content-header\" :class=\"classesLight\">\n\t\t<div class=\"mz-content-title\" :class=\"classes\">\n\t\t\t{{title}}\n\t\t</div>\n\t\t<div class=\"mz-pull-right mz-content-toggle\" >\n\t\t\t{{detail}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"mz-content-container clearfix\">\n\t\t<slot></slot>\n\t</div>\n</div>\n\n";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(158)
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/card/cardWithAvatar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(164)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f6142172/cardWithAvatar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 158 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBorder = __webpack_require__(160);

	var _boxWithBorder2 = _interopRequireDefault(_boxWithBorder);

	var _avatarItem = __webpack_require__(44);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _commentItem = __webpack_require__(129);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	var _Image = __webpack_require__(140);

	var _Image2 = _interopRequireDefault(_Image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<box type = "success">
	// 		<div style="padding: 15px 15px 0">
	// 			<avatar-item :avatar-url="headImgUrl" :name="name">
	// 				<h4>{{title}}</h4>
	// 				<p v-html="content | newLine"></p>
	// 				<image-item :src="cover"></image-item>
	// 			</avatar-item>
	//
	// 		</div>
	//
	// 		<comment :zan="zan"
	// 		         :comments="comments"
	// 		         :activity-id="activityId"
	// 		         :sign-id="signId"
	// 		         :checked="checked"
	// 		         @on-loaded="loaded"
	// 		         :date="date">
	//
	// 		</comment>
	// 	</box>
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			box: _boxWithBorder2.default,
			avatarItem: _avatarItem2.default,
			comment: _commentItem2.default,
			imageItem: _Image2.default
		},
		props: {
			title: {
				type: String
			},
			content: {
				type: String
			},
			headImgUrl: {
				type: String
			},
			zan: {
				type: Number
			},
			comments: {
				type: Number
			},
			cover: {
				type: String
			},
			activityId: {
				type: Number
			},
			signId: {
				type: Number
			},
			checked: {
				type: Boolean
			},
			date: {
				type: String
			},
			name: {
				type: String
			}
		},

		methods: {
			loaded: function loaded() {
				this.$emit('on-loaded');
			}
		}
	};
	// </script>

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(161)
	__vue_script__ = __webpack_require__(162)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/container/boxWithBorder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(163)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5df35c28/boxWithBorder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-card" :class="classes">
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-border-success{
	// 		border: 1px solid #72e4dc;
	// 	}
	// 	.mz-border-ready{
	// 		border: 1px solid #5fb0f1;
	// 	}
	// 	.mz-shadow-default{
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			type: {
				type: String,
				default: 'default'
			}
		},
		computed: {
			classes: function classes() {
				return ['mz-border-' + this.type];
			}
		}
	};
	// </script>

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-card\" :class=\"classes\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<box type = \"success\">\n\t<div style=\"padding: 15px 15px 0\">\n\t\t<avatar-item :avatar-url=\"headImgUrl\" :name=\"name\">\n\t\t\t<h4>{{title}}</h4>\n\t\t\t<p v-html=\"content | newLine\"></p>\n\t\t\t<image-item :src=\"cover\"></image-item>\n\t\t</avatar-item>\n\n\t</div>\n\n\t<comment :zan=\"zan\"\n\t         :comments=\"comments\"\n\t         :activity-id=\"activityId\"\n\t         :sign-id=\"signId\"\n\t         :checked=\"checked\"\n\t         @on-loaded=\"loaded\"\n\t         :date=\"date\">\n\n\t</comment>\n</box>\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(166)
	__vue_script__ = __webpack_require__(167)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button/footerButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(168)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a5b3083a/footerButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 166 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-footer-flex" :class="classes">
	// 		<div class="mz-footer-button mz-footer-left" @click="back">
	// 			<i class="mz-icon-eye mz-icon">我再看看</i>
	// 		</div>
	// 		<div class="mz-footer-button mz-footer-right" @click="do">
	// 			<i class="mz-icon-people mz-icon">{{action}}</i>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-footer-flex{
	// 	position: absolute;
	// 	display: flex;
	// 	left: 0;
	// 	right: 0;
	// 	height: 50px;
	// 	bottom: 0;
	// }
	// .mz-footer-button{
	// 	display: flex;
	// 	flex:1;
	// 	align-content: center;
	// 	align-items:center;
	// 	justify-content: center;
	// 	justify-items: center;
	// }
	// .mz-footer-left{
	// 	background: #fff;
	// }
	// .mz-footer-right .mz-icon{
	// 	color:#fff;
	// }
	// .mz-footer-glass .mz-footer-left .mz-icon{
	// 	color:#b0d160;
	// }
	// .mz-footer-glass .mz-footer-right{
	// 	background: #b0d160;
	// }
	//
	// .mz-footer-success .mz-footer-left .mz-icon{
	// 	color:#72e4dc;
	// }
	// .mz-footer-success .mz-footer-right{
	// 	background: #72e4dc;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			disable: {
				type: Boolean,
				default: false
			},
			action: {
				type: String
			},
			type: {
				type: String
			}
		},
		computed: {
			classes: function classes() {
				return ['mz-footer-' + this.type];
			}
		},
		methods: {
			do: function _do() {
				if (!this.disable) {
					this.$emit('on-confirm');
				}
			},
			back: function back() {
				window.history.back();
			}
		}
	};
	// </script>

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-footer-flex\" :class=\"classes\">\n\t<div class=\"mz-footer-button mz-footer-left\" @click=\"back\">\n\t\t<i class=\"mz-icon-eye mz-icon\">我再看看</i>\n\t</div>\n\t<div class=\"mz-footer-button mz-footer-right\" @click=\"do\">\n\t\t<i class=\"mz-icon-people mz-icon\">{{action}}</i>\n\t</div>\n</div>\n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(170)
	__vue_script__ = __webpack_require__(171)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dialog/confirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(173)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e9043ea0/confirm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(172);

	var _index2 = _interopRequireDefault(_index);

	var _button = __webpack_require__(132);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<dialog :show.sync="showNoScroll" :scroll="false">
	// 		<div class="mz-dialog-box">
	//
	// 			<div class="mz-dialog-success">
	// 				<div class="mz-dialog-tip">
	//
	// 				</div>
	// 				<h4>报名成功</h4>
	// 			</div>
	//
	// 			<m-button type="glass" large @click="confirm">
	// 				我要打卡
	// 			</m-button>
	// 			<div style="margin-top: 8px">
	// 				<m-button type="success" large @click="toggle">
	// 					随便看看
	// 				</m-button>
	// 			</div>
	//
	// 		</div>
	// 	</dialog>
	// </template>
	//
	// <style>
	// .mz-dialog-box{
	// 	background: #fff7e6;
	// 	padding: 20px 10px;
	// }
	// .mz-dialog-success .mz-dialog-tip{
	// 	height: 100px;
	// 	background-image: url('/images/success.png');
	// 	background-size: cover;
	// 	background-repeat: no-repeat;
	// 	background-position: 50%;
	// }
	// .mz-dialog-success h4{
	// 	color: #72e4dc;
	// 	font-size: 1.6rem;
	// }
	//
	// .mz-dialog-failed .mz-dialog-tip{
	// 	height: 100px;
	// 	background-image: url('/images/failed.png');
	// 	background-size: cover;
	// 	background-repeat: no-repeat;
	// 	background-position: 50%;
	// }
	// .mz-dialog-failed h4{
	// 	color: #fe7f85;
	// 	font-size: 1.6rem;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				showNoScroll: false
			};
		},
		components: {
			Dialog: _index2.default,
			MButton: _button2.default
		},
		type: {
			type: String
		},
		methods: {
			toggle: function toggle() {
				this.showNoScroll = !this.showNoScroll;
			},
			confirm: function confirm() {
				this.$emit('on-confirm');
			}
		}
	};
	// </script>

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	!function(o,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxDialog=t():o.vuxDialog=t()}(this,function(){return function(o){function t(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return o[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var e={};return t.m=o,t.c=e,t.p="",t(0)}([function(o,t,e){o.exports=e(4)},function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(o){this.$emit(o?"on-show":"on-hide")}}}},function(o,t){},function(o,t){o.exports='<div class=weui_dialog_alert v-show=show :transition=maskTransition @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)"></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(o,t,e){var i,n;e(2),i=e(1),n=e(3),o.exports=i||{},o.exports.__esModule&&(o.exports=o.exports["default"]),n&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=n)}])});

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n<dialog :show.sync=\"showNoScroll\" :scroll=\"false\">\n\t<div class=\"mz-dialog-box\">\n\n\t\t<div class=\"mz-dialog-success\">\n\t\t\t<div class=\"mz-dialog-tip\">\n\n\t\t\t</div>\n\t\t\t<h4>报名成功</h4>\n\t\t</div>\n\n\t\t<m-button type=\"glass\" large @click=\"confirm\">\n\t\t\t我要打卡\n\t\t</m-button>\n\t\t<div style=\"margin-top: 8px\">\n\t\t\t<m-button type=\"success\" large @click=\"toggle\">\n\t\t\t\t随便看看\n\t\t\t</m-button>\n\t\t</div>\n\n\t</div>\n</dialog>\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(175)
	__vue_script__ = __webpack_require__(176)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/HalfItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-24f625bb/HalfItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 175 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<a :href="href">
	// 		<div class="td-half-box clearfix">
	// 			<div class="td-scroll-item-cover" :style="{backgroundImage:'url('+ url +')' }">
	//
	// 			</div>
	// 			<p>{{title}}</p>
	// 		</div>
	// 	</a>
	// </template>
	//
	// <style>
	// 	.td-half-box{
	// 		float: left;
	// 		width: 33%;
	// 		padding-right: 15px;
	// 		box-sizing: border-box;
	// 	}
	//
	// 	.td-scroll-item-cover{
	// 		width: 100%;
	// 		height: 70px;
	// 		background-repeat:no-repeat;
	// 		background-size:140px;
	// 	}
	//
	// 	.clearfix{overflow:auto;_height:1%}
	//
	// 	.td-box-scroll-wrap .td-box-item{
	// 		width: 140px;
	// 		display:block;
	// 		margin-left: 15px;
	// 		float: left;
	// 		padding-bottom: 12px;
	// 	}
	// 	.td-scroll-item-cover{
	// 		width: 100%;
	// 		height: 70px;
	// 		background-repeat:no-repeat;
	// 		background-size:100%;
	// 	}
	// 	.td-half-box p{
	// 		display: -webkit-box;
	// 		-webkit-box-orient:vertical;
	// 		overflow: hidden;
	// 		word-break: break-all;
	// 		text-overflow:ellipsis;
	// 		-webkit-line-clamp:2;
	// 	}
	// </style>
	//
	// <script>

	exports.default = {
		props: {
			title: {
				type: String
			},
			url: {
				type: String
			},
			link: {
				type: String
			},
			href: {
				type: String
			}
		}
	};
	// </script>

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "\n<a :href=\"href\">\n\t<div class=\"td-half-box clearfix\">\n\t\t<div class=\"td-scroll-item-cover\" :style=\"{backgroundImage:'url('+ url +')' }\">\n\n\t\t</div>\n\t\t<p>{{title}}</p>\n\t</div>\n</a>\n";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(179)
	__vue_script__ = __webpack_require__(180)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/upload.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(191)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b3785f0/upload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 179 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _button = __webpack_require__(132);

	var _button2 = _interopRequireDefault(_button);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _index = __webpack_require__(138);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(181);

	var _index4 = _interopRequireDefault(_index3);

	var _activityAction = __webpack_require__(82);

	var _textarea = __webpack_require__(182);

	var _textarea2 = _interopRequireDefault(_textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 		<div class="mz-box-upload mz-wrap">
	//
	// 				<x-textarea :max="200" placeholder="这一刻的想法..." :value.sync="content"></x-textarea>
	// 			<!--<textarea contenteditable="true" placeholder="这一刻的想法..." v-model="content"></textarea>-->
	// 			<div class="mz-flex" style="padding: 0 12px">
	// 				<i class="mz-icon mz-icon-add"  @click="upload"></i>
	// 				<img :src="previewImg" v-if="previewImg" class="mz-preview-img">
	// 				<div style="flex: 1;margin-left: 10px">
	// 					<span style="color:#eca409;font-size: 1.6rem">上传图证</span>
	// 					<p>每位用户每次打卡限制上传一张图片</p>
	// 				</div>
	//
	// 			</div>
	// 		</div>
	//
	// 		<div style="margin-top: 30px">
	// 			<m-button type="success" large @click="submit">确认</m-button>
	// 		</div>
	//
	// </template>
	//
	// <style>
	// .mz-box-upload{
	// 	background: #fff;
	// 	border:1px solid #72e4dc;
	// 	border-radius: 5px;
	// }
	// .mz-wrap{
	// 	margin: 10px;
	// }
	// .mz-preview-img{
	// 	width: 60px;
	// 	height:60px;
	// }
	// .mz-icon-add:before{
	// 	content: '\e910';
	// 	font-size: 6rem;
	// 	color: #eca409
	// }
	// textarea{
	// 	outline: none;
	// 	border: none;
	// }
	// .mz-box-upload textarea{
	// 	padding-top: 10px;
	// 	width: 100%;
	// 	height: 200px;
	// 	resize: none;
	// 	font-size: 1.5rem;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				content: '',
				url: '',
				previewImg: '',
				message: '',
				type: ''
			};
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
			}
		},
		vuex: {
			actions: {
				unshiftSigninfo: _activityAction.unshiftSigninfo
			}
		},
		components: {
			mButton: _button2.default,
			loading: _index2.default,
			Popup: _index4.default,
			xTextarea: _textarea2.default
		},
		props: {
			showPOP: {
				type: Boolean,
				default: false
			},
			id: {
				type: String
			}
		},
		methods: {
			upload: function upload() {
				var _self = this;
				window.wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function success(res) {
						var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						window.wx.uploadImage({
							localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
							isShowProgressTips: 1, // 默认为1，显示进度提示
							success: function success(res) {
								var serverId = res.serverId; // 返回图片的服务器端ID
								_activityService2.default.getUrlByServerId(serverId.toString()).then(function (data) {
									if (data.data.state == '10000') {
										_self.url = data.data.url;
										_self.$dispatch('success', '图片上传成功');
										_self.previewImg = _self.url;
									} else {
										_self.message = '图片上传失败';
										_self.showToast = true;
										_self.$dispatch('error', data.data.message);
									}
								});
							}
						});
					}
				});
			},

			submit: function submit() {
				var _self = this;
				if (!this.url) {
					this.$dispatch('error', '请先上传图片');
					return false;
				} else if (this.content.length <= 0) {
					this.$dispatch('error', '留言内容不能为空');
					return false;
				}
				this.$dispatch('loading');
				_activityService2.default.sign(this.id, this.url, this.content).then(function (data) {
					var info = data.data;
					if (info.result === 0) {
						_self.$dispatch('loading');
						_self.$dispatch('success', '打卡成功!');
						_self.unshiftSigninfo(info.info);
						window.history.back();
					} else {
						_self.$dispatch('loading');
						_self.$dispatch('error', '打卡失败');
					}
				}, function (err) {
					_self.$dispatch('loading');
					if (err.status === 400) {
						_self.$dispatch('error', err.data.error_message);
					} else if (err.status === 0) {
						_self.$dispatch('error', '请求超时请重试');
					} else {
						_self.$dispatch('error', '内容错误请重试');
					}
				});
			}
		}
	};
	// </script>

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxPopup=o():t.vuxPopup=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(5)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(2),s=i(n);o["default"]={props:{show:{type:Boolean,twoWay:!0},height:{type:String,"default":"auto"},hideOnBlur:{type:Boolean,"default":!0}},ready:function(){var t=this;this.popup=new s["default"]({container:t.$el,innerHTML:"",hideOnBlur:t.hideOnBlur,onOpen:function(o){t.fixSafariOverflowScrolling("auto"),t.show=!0},onClose:function(o){t.fixSafariOverflowScrolling("touch"),t.show=!1}}),this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling")},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var o=0;o<this.$overflowScrollingList.length;o++)this.$overflowScrollingList[o].style.webkitOverflowScrolling=t}},data:function(){return{hasFirstShow:!1}},watch:{show:function(t){t?(this.popup.show(),this.$emit("on-show"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1))}},beforeDestroy:function(){this.popup.destroy()}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=function(t){this.uuid=Math.random().toString(36).substring(3,8),this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={input:t.input||"",container:document.querySelector(t.input)||"",innerHTML:t.innerHTML||"",hideOnBlur:t.hideOnBlur,onOpen:t.onOpen||function(){},onClose:t.onClose||function(){}}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var o=void 0;return o=t.container?t.container:document.createElement("div"),o.className="vux-popup-dialog vux-popup-dialog-"+this.uuid,t.container||document.body.appendChild(o),this.mask=document.querySelector(".vux-popup-mask"),this.container=document.querySelector(".vux-popup-dialog-"+this.uuid),this._bindEvents(),t=null,this};e.prototype.onClickMask=function(){this.hide(!1)},e.prototype._bindEvents=function(){this.params.hideOnBlur&&this.mask.addEventListener("click",this.onClickMask.bind(this),!1)},e.prototype.show=function(){this.mask.classList.add("vux-popup-show"),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this)},e.prototype.hide=function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||this.mask.classList.remove("vux-popup-show"),t===!1&&this.params.onClose&&this.params.onClose(this)},e.prototype.html=function(t){this.container.innerHTML=t},e.prototype.destroy=function(){this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)},o["default"]=e},function(t,o){},function(t,o){t.exports="<div v-show=show transition=vux-popup :style={height:height} class=vux-popup> <slot></slot> </div>"},function(t,o,e){var i,n;e(3),i=e(1),n=e(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(183)
	__vue_script__ = __webpack_require__(187)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/textarea/textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-24d223a8/textarea.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(184);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(186)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./textarea.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./textarea.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(185)();
	// imports


	// module
	exports.push([module.id, ".weui_cell {\n  position: relative;\n}\n.weui_cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui_cell:first-child:before {\n  display: none;\n}\n.weui_cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui_cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_cells_title {\n  margin-top: .77em;\n  margin-bottom: .3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #888;\n  font-size: 14px;\n}\n.weui_cells_title + .weui_cells {\n  margin-top: 0;\n}\n.weui_cells_tips {\n  margin-top: .3em;\n  color: #888;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui_cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui_cell_ft {\n  text-align: right;\n  color: #888;\n}\n.weui_cell_primary {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui_label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui_input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui_input::-webkit-outer-spin-button,\n.weui_input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui_textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui_textarea_counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui_cell_warn .weui_textarea_counter {\n  color: #E64340;\n}\n.weui_toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n  width: 100%;\n  top: 0;\n  line-height: 2.3;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 50000;\n}\n.weui_toptips.weui_warn {\n  background-color: #E64340;\n}\n.weui_cells_form .weui_cell_warn {\n  color: #E64340;\n}\n.weui_cells_form .weui_cell_warn .weui_icon_warn {\n  display: inline-block;\n}\n.weui_cells_form .weui_cell_ft {\n  font-size: 0;\n}\n.weui_cells_form .weui_icon_warn {\n  display: none;\n}\n.weui_cells_form input,\n.weui_cells_form textarea,\n.weui_cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n", ""]);

	// exports


/***/ },
/* 185 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _base = __webpack_require__(188);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		minxins: [_base2.default],
		props: {
			showCounter: {
				type: Boolean,
				default: true
			},
			max: Number,
			value: {
				type: String,
				default: '',
				twoWay: true
			},
			name: String,
			placeholder: String,
			rows: {
				type: Number,
				default: 3
			},
			cols: {
				type: Number,
				default: 30
			},
			height: Number,
			// https://github.com/yisibl/blog/issues/3
			autocomplete: 'off',
			autocapitalize: 'off',
			autocorrect: 'off',
			spellcheck: 'false'
		},
		watch: {
			value: function value(newVal) {
				if (this.max && this.value.length > this.max) {
					this.value = newVal.slice(0, this.max);
				}
				this.$emit('on-change', this.value);
			}
		},
		computed: {
			count: function count() {
				var len = 0;
				if (this.value) {
					len = this.value.replace(/\r\n|\r|\n/g, 'aa').length;
					console.log(len);
				}
				return len > this.max ? this.max : len;
			},
			textareaStyle: function textareaStyle() {
				if (this.height) {
					return {
						height: this.height + 'px'
					};
				}
			}
		}
	};
	// </script>
	//
	// <style lang="less">
	// 	@import '../../../node_modules/vux/src/styles/weui/widget/weui_cell/weui_cell_global';
	// 	@import '../../../node_modules/vux/src/styles/weui/widget/weui_cell/weui_form/weui_form_common';
	// </style>
	// <template>
	// 	<div class="weui_cell">
	// 		<div class="weui_cell_bd weui_cell_primary">
	//       <textarea
	// 				      class="weui_textarea"
	// 				      :autocomplete="autocomplete"
	// 				      :autocapitalize="autocapitalize"
	// 				      :autocorrect="autocorrect"
	// 				      :spellcheck="spellcheck"
	// 				      :placeholder="placeholder"
	// 				      :name="name"
	// 				      :rows="rows"
	// 				      :cols="cols"
	// 				      v-model="value"
	// 				      :style="textareaStyle"
	// 				      :maxlength="max"></textarea>
	// 			<div class="weui_textarea_counter" v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _mixin_uuid = __webpack_require__(189);

	var _mixin_uuid2 = _interopRequireDefault(_mixin_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		mixins: [_mixin_uuid2.default],
		props: {
			required: {
				type: Boolean,
				default: true
			}
		},
		created: function created() {
			this.handleChangeEvent = false;
		},

		computed: {
			dirty: function dirty() {
				return !this.prisine;
			},
			invalid: function invalid() {
				return !this.valid;
			}
		},
		methods: {
			setTouched: function setTouched() {
				this.touched = true;
			}
		},
		watch: {
			value: function value(newVal) {
				if (this.prisine === true) {
					this.prisine = false;
				}
				if (!this.handleChangeEvent) {
					this.$emit('change', newVal);
				}
			}
		},
		data: function data() {
			return {
				errors: {},
				prisine: true,
				touched: false,
				valid: true
			};
		}
	}; /**
	    * Created by Alex on 16/9/4.
	    */

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by Alex on 16/9/4.
	 */
	exports.default = {
		created: function created() {
			this.uuid = Math.random().toString(36).substring(3, 8);
		}
	};

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"weui_cell\">\n\t\t<div class=\"weui_cell_bd weui_cell_primary\">\n      <textarea\n\t\t\t\t      class=\"weui_textarea\"\n\t\t\t\t      :autocomplete=\"autocomplete\"\n\t\t\t\t      :autocapitalize=\"autocapitalize\"\n\t\t\t\t      :autocorrect=\"autocorrect\"\n\t\t\t\t      :spellcheck=\"spellcheck\"\n\t\t\t\t      :placeholder=\"placeholder\"\n\t\t\t\t      :name=\"name\"\n\t\t\t\t      :rows=\"rows\"\n\t\t\t\t      :cols=\"cols\"\n\t\t\t\t      v-model=\"value\"\n\t\t\t\t      :style=\"textareaStyle\"\n\t\t\t\t      :maxlength=\"max\"></textarea>\n\t\t\t<div class=\"weui_textarea_counter\" v-show=\"showCounter && max\"><span>{{count}}</span>/{{max}}</div>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-box-upload mz-wrap\">\n\n\t\t<x-textarea :max=\"200\" placeholder=\"这一刻的想法...\" :value.sync=\"content\"></x-textarea>\n\t<!--<textarea contenteditable=\"true\" placeholder=\"这一刻的想法...\" v-model=\"content\"></textarea>-->\n\t<div class=\"mz-flex\" style=\"padding: 0 12px\">\n\t\t<i class=\"mz-icon mz-icon-add\"  @click=\"upload\"></i>\n\t\t<img :src=\"previewImg\" v-if=\"previewImg\" class=\"mz-preview-img\">\n\t\t<div style=\"flex: 1;margin-left: 10px\">\n\t\t\t<span style=\"color:#eca409;font-size: 1.6rem\">上传图证</span>\n\t\t\t<p>每位用户每次打卡限制上传一张图片</p>\n\t\t</div>\n\n\t</div>\n</div>\n\n<div style=\"margin-top: 30px\">\n\t<m-button type=\"success\" large @click=\"submit\">确认</m-button>\n</div>\n\n";

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<loading v-ref:loading @on-refresh=\"query\"></loading>\n\n<div v-if=\"activityInfo.info && items\">\n\t<scroller v-ref:scroller lock-x\n\t          use-pullup\n\t          @pullup:loading=\"loadMore\"\n\t          style=\"position: absolute;top:0;left: 0;right: 0;bottom: 50px\"\n\t          height=\"auto\">\n\n\t\t<div class=\"mz-sign\" style=\"padding-bottom: 10px\">\n\t\t\t<div class=\"mz-item-cover\">\n\t\t\t\t<avatar-item :avatar-url=\"activityInfo.info.sponsor_avatar\">\n\t\t\t\t\t<h4>{{activityInfo.info.sponsor_name}}</h4>\n\t\t\t\t\t<p>发起了活动: {{activityInfo.info.title}}</p>\n\t\t\t\t\t<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>\n\t\t\t\t\t<p>报名截至时间:{{activityInfo.info.end_time}}</p>\n\t\t\t\t</avatar-item>\n\t\t\t</div>\n\n\t\t\t<wrap title=\"活动介绍:\" type=\"success\">\n\t\t\t\t<p v-html=\"activityInfo.info.desc | newLine \"></p>\n\t\t\t</wrap>\n\n\t\t\t<wrap title=\"相关课程:\" type=\"warn\">\n\t\t\t\t<half-item\n\t\t\t\t\t\t\t\tv-for=\"course in activityInfo.info.resource_list\"\n\t\t\t\t\t\t\t\t:url=\"course.image_url\"\n\t\t\t\t\t\t\t\t:title=\"course.link_text\"\n\t\t\t\t\t\t\t\t:href=\"course.link_url\">\n\t\t\t\t</half-item>\n\t\t\t</wrap>\n\n\t\t\t<div class=\"mz-content-container\" style=\"margin-top: 10px\">\n\t\t\t\t<icon-item type=\"people\">已报名人数:<span>{{activityInfo.info.signup_number}}</span></icon-item>\n\t\t\t\t<!--<icon-item type=\"money\">每人保证金</icon-item>-->\n\t\t\t\t<!--<icon-item type=\"gift\">剩余2人在坚持,每人可获得100元</icon-item>-->\n\t\t\t</div>\n\n\t\t\t<card v-for=\"item in items\"\n\t\t\t      :head-img-url=\"item.user_avatar\"\n\t\t\t\t\t\t:cover=\"item.image_url\"\n\t\t\t\t\t\t:zan=\"item.agree_count\"\n\t\t\t\t\t\t:comments=\"item.comment_count\"\n\t\t\t\t\t\t:content=\"item.text | newLine\"\n\t\t\t\t\t\t:activity-id=\"item.activity_id\"\n\t\t\t\t\t\t:sign-id=\"item.signin_id\"\n\t\t\t\t\t\t:checked=\"item.my_agree === 1 ? true: false \"\n\t\t\t\t\t\t@on-loaded=\"pass(item)\"\n\t\t\t\t\t\t:date=\"item.signin_time\"\n\t\t\t\t\t\t:name=\"item.user_name\">\n\t\t\t</card>\n\n\t\t</div>\n\t</scroller>\n\n\t<f-button type=\"success\"\n\t\t\t\t\t\t:action=\"activityInfo.signup===1?'已报名':'我要报名'\"\n\t\t\t\t\t\t:disable=\"activityInfo.signup===1?true:false\"\n\t\t\t\t\t\t@on-confirm=\"confirm\">\n\n\t</f-button>\n\n\t<dialog v-ref:dialog\n\t\t\t\t\t@on-confirm=\"upload\">\n\t</dialog>\n</div>\n</div>\n";

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(194)
	__vue_script__ = __webpack_require__(195)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(257)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-156a7ae4/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 194 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _promise = __webpack_require__(196);

	var _promise2 = _interopRequireDefault(_promise);

	var _cardWithoutAvatar = __webpack_require__(246);

	var _cardWithoutAvatar2 = _interopRequireDefault(_cardWithoutAvatar);

	var _awardDialog = __webpack_require__(250);

	var _awardDialog2 = _interopRequireDefault(_awardDialog);

	var _activityAction = __webpack_require__(82);

	var _activityGetter = __webpack_require__(57);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	var _userAction = __webpack_require__(254);

	var _userGetter = __webpack_require__(256);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _promise3 = __webpack_require__(97);

	var _promise4 = _interopRequireDefault(_promise3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				level: String
			};
		},

		components: {
			card: _cardWithoutAvatar2.default,
			dialog: _awardDialog2.default,
			scroller: _index2.default,
			loader: _loading2.default
		},
		methods: {
			awardIntroduce: function awardIntroduce() {
				this.$broadcast('showDialog');
			},
			fresh: function fresh() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			},

			pass: function pass(info) {
				this.setSignInfo(info);
			},
			refresh: function refresh(uuid) {
				var _self = this;
				_promise2.default.all([this.getcompletedActivityListQuery(), this.userUpInfoQuery()]).then(function () {
					_self.$broadcast('pulldown:reset', uuid);
				}).catch(function () {
					_self.$broadcast('pulldown:reset', uuid);
				});
			},
			query: function query() {
				var _self = this;
				this.$refs.loader.OnLoading();
				this.getcompletedActivityListQuery().then(function () {
					if (_self.items.length === 0) {
						_self.$refs.loader.OnEmpty();
					} else {
						_self.$refs.loader.OnHide();
					}
				}).catch(function () {
					_self.$refs.loader.OnError();
				});
			}
		},
		vuex: {
			actions: {
				activityOngoingListQuery: _activityAction.activityOngoingListQuery,
				childInfoQuery: _userAction.childInfoQuery,
				userUpInfoQuery: _userAction.userUpInfoQuery,
				setSignInfo: _activityAction.setSignInfo,
				getcompletedActivityListQuery: _activityAction.getcompletedActivityListQuery
			},
			getters: {
				items: _activityGetter.getCompletedActivityList,
				user: _userGetter.getUserUpInfo
			}
		},
		ready: function ready() {
			this.query();
			this.userUpInfoQuery();
			switch (this.user.score_level) {
				case 0:
					this.level = '小白';
					break;
				case 1:
					this.level = '幼儿园';
					break;
				case 2:
					this.level = '小学';
					break;
				case 3:
					this.level = '初中';
					break;
				case 4:
					this.level = '高中';
					break;
				case 5:
					this.level = '大学';
					break;
				default:
					this.level = '小白';
					break;
			}
		},
		watch: {
			items: function items() {
				this.fresh();
			}
		}
	};
	// </script>
	// <template>
	// 	<div>
	// 	<scroller v-ref:scroller
	// 	          lock-x
	// 						use-pulldown
	// 						@pulldown:loading="refresh">
	//
	// 		<div style="padding-bottom: 10px">
	// 			<div class="mz-center-cover" v-if="items">
	//
	// 				<div class="mz-center-name">
	// 					{{user.user_name}}
	// 				</div>
	//
	// 				<div class="mz-flex mz-container">
	// 					<div class="mz-flex">
	// 							<div class="mz-center-info mz-pop" v-link="{name:'info'}">
	// 									完善资料
	// 							</div>
	// 					</div>
	// 					<div class="mz-center-avatar mz-item">
	// 						<div class="mz-center-crown"></div>
	// 						<img :src="user.user_avatar" class="mz-center-img-avatar"><!--
	// 					--></div>
	// 					<div class="mz-flex">
	// 						<div class="mz-center-billboard mz-pop" v-link="{name:'billboard'}">
	// 								打卡<br>排行榜
	// 						</div>
	// 					</div>
	// 				</div>
	//
	// 				<div class="mz-signature mz-center-item">
	// 					个人战绩: 坚持打卡<span class="mz-bold">{{user.duration}}</span>天,累计打卡<span class="mz-bold">{{user.signin_count}}</span>次
	// 				</div>
	//
	// 				<div class="mz-center-point mz-center-item">
	// 					<span class="mz-billboard-level" style="margin-right: 8px">v{{user.score_level}}</span>{{user.score}}积分<span style="display: block"></span>
	// 				</div>
	//
	//
	// 				<div class="mz-center-item">
	// 					<a href="javascript:;" class="mz-href" @click="awardIntroduce"> 积分奖励说明</a>
	// 				</div>
	//
	// 			</div>
	//
	//
	// 			<loader v-ref:loader
	// 			         @on-refresh="query">
	// 			</loader>
	//
	// 			<card v-for="item in items"
	// 						:zan="item.agree_count"
	// 						:comments="item.comment_count"
	// 						:title="item.activity_title"
	// 						:content="item.text"
	// 						:cover="item.image_url"
	// 						:activity-id="item.activity_id"
	// 						:sign-id="item.signin_id"
	// 						:checked="item.my_agree === 1 ? true: false"
	// 						@on-loaded="pass(item)"
	// 						:date="item.signin_time">
	// 			</card>
	// 		</div>
	// 	</scroller>
	//
	// 	<dialog></dialog>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-container{
	// 	padding: 0 10px;
	// }
	// .mz-flex{
	// 	display: flex;
	// 	flex: 1;
	// 	justify-content: center;
	// 	align-content: center;
	// 	justify-items: center;
	// 	align-items: center;
	// }
	// .mz-center-cover{
	// 	padding: 10px 0;
	// 	background-image: url("/images/cover.png");
	// 	background-repeat: no-repeat;
	// 	height: 200px;
	// 	text-align: center;
	// 	background-size:100% 100%;
	//
	// }
	// .mz-center-info{
	// 	background-image: url("/images/info.png");
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 100%;
	// 	height: 55px;
	// 	width: 58px;
	// 	padding: 12px 12px 12px 8px;
	// }
	// .mz-center-billboard{
	// 	background-image: url("/images/billboard.png");
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 100%;
	// 	height: 61px;
	// 	width: 61px;
	// 	padding: 12px 0 0 0;
	// }
	// .mz-center-img-avatar{
	// 	height: 75px;
	// 	width: 75px;
	// 	border-radius: 50%;
	// }
	// .mz-pop{
	// 	box-sizing: border-box;
	// 	line-height: 16px;
	// 	color: #fff;
	// 	font-size: 1.4rem;
	// 	text-align: center;
	// }
	// .mz-center-name{
	// 	color: #fff;
	// 	font-size: 1.6rem;
	// 	margin-bottom: 10px;
	// }
	// .mz-center-point{
	// 	background: #fff;
	// 	border-radius: 5px;
	// 	color:#333;
	// 	width:106px;
	// 	height: 27px;
	// 	line-height: 27px;
	// 	margin: 0 auto;
	// 	display: flex;
	// 	justify-content: space-between;
	// 	align-items: center;
	// 	box-sizing: border-box;
	// 	padding:0 8px
	// }
	// .mz-href{
	// 	color:#fff;
	// 	text-decoration: underline;
	// }
	// .mz-signature{
	// 	font-size:1.4rem;
	// 	color:#333;
	// }
	// .mz-signature .mz-bold{
	// 	font-weight: bold;
	// 	font-size: 2rem;
	// }
	// .mz-center-item{
	// 	margin-bottom: 4px;
	// }
	// .mz-center-crown{
	// 	background-image: url("/images/title.png");
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 100%;
	// 	width: 50px;
	// 	position: absolute;
	// 	top:-8px;
	// 	left: 50%;
	// 	margin-left: -25px;
	// }
	//
	// </style>
	//
	// <script>

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(197), __esModule: true };

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(228);
	__webpack_require__(232);
	module.exports = __webpack_require__(67).Promise;

/***/ },
/* 198 */
/***/ function(module, exports) {

	

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(200)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(203)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(201)
	  , defined   = __webpack_require__(202);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(204)
	  , $export        = __webpack_require__(65)
	  , redefine       = __webpack_require__(205)
	  , hide           = __webpack_require__(70)
	  , has            = __webpack_require__(206)
	  , Iterators      = __webpack_require__(207)
	  , $iterCreate    = __webpack_require__(208)
	  , setToStringTag = __webpack_require__(224)
	  , getPrototypeOf = __webpack_require__(226)
	  , ITERATOR       = __webpack_require__(225)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70);

/***/ },
/* 206 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(209)
	  , descriptor     = __webpack_require__(79)
	  , setToStringTag = __webpack_require__(224)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(70)(IteratorPrototype, __webpack_require__(225)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(72)
	  , dPs         = __webpack_require__(210)
	  , enumBugKeys = __webpack_require__(222)
	  , IE_PROTO    = __webpack_require__(219)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(77)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(223).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(71)
	  , anObject = __webpack_require__(72)
	  , getKeys  = __webpack_require__(211);

	module.exports = __webpack_require__(75) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(212)
	  , enumBugKeys = __webpack_require__(222);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(206)
	  , toIObject    = __webpack_require__(213)
	  , arrayIndexOf = __webpack_require__(216)(false)
	  , IE_PROTO     = __webpack_require__(219)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(214)
	  , defined = __webpack_require__(202);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(215);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 215 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(213)
	  , toLength  = __webpack_require__(217)
	  , toIndex   = __webpack_require__(218);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(201)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(201)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(220)('keys')
	  , uid    = __webpack_require__(221);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(66)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(66).document && document.documentElement;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(71).f
	  , has = __webpack_require__(206)
	  , TAG = __webpack_require__(225)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(220)('wks')
	  , uid        = __webpack_require__(221)
	  , Symbol     = __webpack_require__(66).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(206)
	  , toObject    = __webpack_require__(227)
	  , IE_PROTO    = __webpack_require__(219)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(202);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(229);
	var global        = __webpack_require__(66)
	  , hide          = __webpack_require__(70)
	  , Iterators     = __webpack_require__(207)
	  , TO_STRING_TAG = __webpack_require__(225)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(230)
	  , step             = __webpack_require__(231)
	  , Iterators        = __webpack_require__(207)
	  , toIObject        = __webpack_require__(213);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(203)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(204)
	  , global             = __webpack_require__(66)
	  , ctx                = __webpack_require__(68)
	  , classof            = __webpack_require__(233)
	  , $export            = __webpack_require__(65)
	  , isObject           = __webpack_require__(73)
	  , aFunction          = __webpack_require__(69)
	  , anInstance         = __webpack_require__(234)
	  , forOf              = __webpack_require__(235)
	  , speciesConstructor = __webpack_require__(239)
	  , task               = __webpack_require__(240).set
	  , microtask          = __webpack_require__(242)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(225)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(243)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(224)($Promise, PROMISE);
	__webpack_require__(244)(PROMISE);
	Wrapper = __webpack_require__(67)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(245)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(215)
	  , TAG = __webpack_require__(225)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(68)
	  , call        = __webpack_require__(236)
	  , isArrayIter = __webpack_require__(237)
	  , anObject    = __webpack_require__(72)
	  , toLength    = __webpack_require__(217)
	  , getIterFn   = __webpack_require__(238)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(72);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(207)
	  , ITERATOR   = __webpack_require__(225)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(233)
	  , ITERATOR  = __webpack_require__(225)('iterator')
	  , Iterators = __webpack_require__(207);
	module.exports = __webpack_require__(67).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(72)
	  , aFunction = __webpack_require__(69)
	  , SPECIES   = __webpack_require__(225)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(68)
	  , invoke             = __webpack_require__(241)
	  , html               = __webpack_require__(223)
	  , cel                = __webpack_require__(77)
	  , global             = __webpack_require__(66)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(215)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(66)
	  , macrotask = __webpack_require__(240).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(215)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(70);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(66)
	  , core        = __webpack_require__(67)
	  , dP          = __webpack_require__(71)
	  , DESCRIPTORS = __webpack_require__(75)
	  , SPECIES     = __webpack_require__(225)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(225)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(247)
	__vue_script__ = __webpack_require__(248)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/card/cardWithoutAvatar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(249)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d7316c2e/cardWithoutAvatar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 247 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBorder = __webpack_require__(160);

	var _boxWithBorder2 = _interopRequireDefault(_boxWithBorder);

	var _commentItem = __webpack_require__(129);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	var _Image = __webpack_require__(140);

	var _Image2 = _interopRequireDefault(_Image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			box: _boxWithBorder2.default,
			comment: _commentItem2.default,
			imageItem: _Image2.default
		},
		props: {
			zan: {
				type: Number
			},
			comments: {
				type: Number
			},
			title: {
				type: String
			},
			content: {
				type: String
			},
			cover: {
				type: String
			},
			activityId: {
				type: Number
			},
			signId: {
				type: Number
			},
			checked: {
				type: Boolean
			},
			date: {
				type: String
			}
		},
		methods: {
			loaded: function loaded() {
				this.$emit('on-loaded');
			}
		}
	};
	// </script>
	// <template>
	// 	<box type = "success">
	// 		<div v-link="{name:'timeline',params:{id:activityId}}" style="padding: 15px 30px 0">
	// 			<h4>{{title}}</h4>
	// 			<p v-html="content|newLine"></p>
	// 			<image-item :src="cover"></image-item>
	// 		</div>
	// 		<comment :zan="zan"
	// 		         :comments="comments"
	// 		         :activity-id="activityId"
	// 		         :sign-id="signId"
	// 		         :checked="checked"
	// 							@on-loaded="loaded"
	// 							:date="date">
	//
	// 		</comment>
	// 	</box>
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "\n<box type = \"success\">\n\t<div v-link=\"{name:'timeline',params:{id:activityId}}\" style=\"padding: 15px 30px 0\">\n\t\t<h4>{{title}}</h4>\n\t\t<p v-html=\"content|newLine\"></p>\n\t\t<image-item :src=\"cover\"></image-item>\n\t</div>\n\t<comment :zan=\"zan\"\n\t         :comments=\"comments\"\n\t         :activity-id=\"activityId\"\n\t         :sign-id=\"signId\"\n\t         :checked=\"checked\"\n\t\t\t\t\t\t@on-loaded=\"loaded\"\n\t\t\t\t\t\t:date=\"date\">\n\n\t</comment>\n</box>\n";

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(251)
	__vue_script__ = __webpack_require__(252)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/awardDialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-64a8f17e/awardDialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 251 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(172);

	var _index2 = _interopRequireDefault(_index);

	var _button = __webpack_require__(132);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<dialog :show.sync="showNoScroll" :scroll="false" class="mz-dialog-transparent">
	// 			<div class="mz-award-top">
	// 				<p class="mz-dialog-title">积分说明</p>
	// 			</div>
	//
	// 			<div class="mz-award-box">
	// 				<div style="padding-bottom: 10px">
	// 					<p>原始积分100分</p>
	// 					<p>报名活动-30分</p>
	// 					<p class="mz-award-supply">(坚持完成该活动全部打卡,返还积分)</p>
	// 					<p>每日打卡+2分</p>
	// 					<p>评论+1分</p>
	// 					<p class="mz-award-supply">(评论次数不限定,封顶20分)</p>
	// 				</div>
	// 				<m-button type="success" large @click="awardIntroduce">
	// 					了解了
	// 				</m-button>
	// 			</div>
	// 	</dialog>
	// </template>
	//
	// <style>
	//
	// .mz-award-supply{
	// 	color: #FE7F85;
	// }
	// .mz-dialog-transparent .weui_dialog{
	// 	background: transparent;
	// 	width: 75%;
	// }
	// .mz-dialog-title{
	// 	color: #fff;
	// 	line-height: 42px;
	// 	font-size:1.6rem;
	// }
	// .mz-award-box{
	// 	background: #fff7e6;
	// 	border: 1px solid #eca409;
	// 	border-radius: 4px;
	// 	position: relative;
	// 	padding: 20px 10px;
	// 	margin: 40px 10px 0 10px;
	// }
	// .mz-award-top{
	// 	background-image: url("/images/award.png");
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 100%;
	// 	height: 50px;
	// 	top:0;
	// 	left:0;
	// 	right:0;
	// 	position: absolute;
	// 	z-index:99999
	// }
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			dialog: _index2.default,
			MButton: _button2.default
		},
		data: function data() {
			return {
				showNoScroll: false
			};
		},
		methods: {
			awardIntroduce: function awardIntroduce() {
				this.showNoScroll = !this.showNoScroll;
			}
		},
		events: {
			'showDialog': function showDialog() {
				this.awardIntroduce();
			}
		}
	};
	// </script>

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "\n<dialog :show.sync=\"showNoScroll\" :scroll=\"false\" class=\"mz-dialog-transparent\">\n\t\t<div class=\"mz-award-top\">\n\t\t\t<p class=\"mz-dialog-title\">积分说明</p>\n\t\t</div>\n\n\t\t<div class=\"mz-award-box\">\n\t\t\t<div style=\"padding-bottom: 10px\">\n\t\t\t\t<p>原始积分100分</p>\n\t\t\t\t<p>报名活动-30分</p>\n\t\t\t\t<p class=\"mz-award-supply\">(坚持完成该活动全部打卡,返还积分)</p>\n\t\t\t\t<p>每日打卡+2分</p>\n\t\t\t\t<p>评论+1分</p>\n\t\t\t\t<p class=\"mz-award-supply\">(评论次数不限定,封顶20分)</p>\n\t\t\t</div>\n\t\t\t<m-button type=\"success\" large @click=\"awardIntroduce\">\n\t\t\t\t了解了\n\t\t\t</m-button>\n\t\t</div>\n</dialog>\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.removeChildInfo = exports.setChildInfo = exports.alterUserInfoSecondQuery = exports.alterUserInfoFirstQuery = exports.deleteChildInfoQuery = exports.alterChildInfoQuery = exports.childUpdateQuery = exports.userUpInfoQuery = exports.childInfoQuery = exports.userInfoQuery = undefined;

	var _user = __webpack_require__(255);

	var _user2 = _interopRequireDefault(_user);

	var _mutationTypes = __webpack_require__(80);

	var types = _interopRequireWildcard(_mutationTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Alex on 16/8/21.
	 */

	var userInfoQuery = exports.userInfoQuery = function userInfoQuery(_ref) {
		var dispatch = _ref.dispatch;

		return _user2.default.API_GET_USER_INFO().then(function (data) {
			dispatch(types.GET_USER_INFO, data);
		});
	};

	var childInfoQuery = exports.childInfoQuery = function childInfoQuery(_ref2) {
		var dispatch = _ref2.dispatch;

		return _user2.default.API_GET_CHILD_INFO().then(function (data) {
			dispatch(types.GET_CHILD_INFO, data);
		});
	};

	var userUpInfoQuery = exports.userUpInfoQuery = function userUpInfoQuery(_ref3) {
		var dispatch = _ref3.dispatch;

		return _user2.default.API_GET_USER_UP().then(function (data) {
			dispatch(types.GET_USER_UP, data);
		});
	};

	var childUpdateQuery = exports.childUpdateQuery = function childUpdateQuery(_ref4, nickname, gender, birthday, avatar) {
		var dispatch = _ref4.dispatch;

		return _user2.default.API_POST_USER_UPDATE(nickname, gender, birthday, avatar).then(function (data) {
			dispatch(types.POST_CHILD_UPDATE, data);
		});
	};

	var alterChildInfoQuery = exports.alterChildInfoQuery = function alterChildInfoQuery(_ref5, id, nickname, gender, birthday, avatar) {
		var dispatch = _ref5.dispatch;

		return _user2.default.API_POST_ALTER_CHILD_INFO(id, nickname, gender, birthday, avatar).then(function (data) {
			dispatch(types.POST_ALTER_CHILD_INFO, data);
		});
	};

	var deleteChildInfoQuery = exports.deleteChildInfoQuery = function deleteChildInfoQuery(_ref6, id) {
		var dispatch = _ref6.dispatch;

		dispatch(types.DELETE_CHILD_INFO, id);
	};

	var alterUserInfoFirstQuery = exports.alterUserInfoFirstQuery = function alterUserInfoFirstQuery(_ref7, data) {
		var dispatch = _ref7.dispatch;

		return _user2.default.API_PATCH_ALTER_USER_INFO_FIRST(data).then(function () {
			dispatch(types.UPDATE_USER_INFO, data);
		});
	};

	var alterUserInfoSecondQuery = exports.alterUserInfoSecondQuery = function alterUserInfoSecondQuery(_ref8, data) {
		var dispatch = _ref8.dispatch;

		return _user2.default.API_PATCH_ALTER_USER_INFO_SECOND(data).then(function (data) {});
	};

	var setChildInfo = exports.setChildInfo = function setChildInfo(_ref9, child) {
		var dispatch = _ref9.dispatch;

		dispatch(types.SET_EDIT_CHILD_INFO, child);
	};

	var removeChildInfo = exports.removeChildInfo = function removeChildInfo(_ref10) {
		var dispatch = _ref10.dispatch;

		dispatch(types.REMOVE_EDIT_CHILD_INFO);
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _resourse = __webpack_require__(84);

	exports.default = {
		API_GET_USER_INFO: function API_GET_USER_INFO() {
			return _resourse.userResource.get();
		},
		API_GET_JSSDK_CONFIG: function API_GET_JSSDK_CONFIG(debug, jsApiList) {
			return _resourse.weixinJSSDKResource.save({ debug: debug, jsApiList: jsApiList });
		},
		API_GET_CHILD_INFO: function API_GET_CHILD_INFO() {
			return _resourse.childResource.get();
		},
		API_GET_USER_UP: function API_GET_USER_UP() {
			return _resourse.userupResource.get();
		},
		API_POST_USER_UPDATE: function API_POST_USER_UPDATE(nickname, gender, birthday, avatar) {
			return _resourse.childUpdateResource.save({ nickname: nickname, gender: gender, birthday: birthday, avatar: avatar });
		},
		API_POST_ALTER_CHILD_INFO: function API_POST_ALTER_CHILD_INFO(id, nickname, gender, birthday, avatar) {
			return _resourse.alterChildInfoResource.save({ id: id }, { nickname: nickname, gender: gender, birthday: birthday, avatar: avatar });
		},
		API_DELETE_CHILD_INFO: function API_DELETE_CHILD_INFO(id) {
			return _resourse.deleteChildInfoResource.delete({ id: id });
		},
		API_PATCH_ALTER_USER_INFO_FIRST: function API_PATCH_ALTER_USER_INFO_FIRST(data) {
			return _resourse.alterUserInfo_first.save({}, data);
		},
		API_PATCH_ALTER_USER_INFO_SECOND: function API_PATCH_ALTER_USER_INFO_SECOND(data) {
			return _resourse.alterUserInfo_second.save({}, data);
		},
		API_UPDATE_USER_HEADIMG: function API_UPDATE_USER_HEADIMG(id) {
			return _resourse.headImgResource.get({ id: id });
		}
	}; /**
	    * Created by Alex on 16/8/21.
	    */

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getUserInfo = getUserInfo;
	exports.getChildInfo = getChildInfo;
	exports.getUserUpInfo = getUserUpInfo;
	exports.postChildUpdate = postChildUpdate;
	exports.postAlterChildInfo = postAlterChildInfo;
	exports.getEditChildInfo = getEditChildInfo;
	exports.getOpreationStatus = getOpreationStatus;

	var _store = __webpack_require__(58);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getUserInfo() {
		return _store2.default.state.user.userInfo;
	} /**
	   * Created by Alex on 16/8/21.
	   */

	function getChildInfo() {
		return _store2.default.state.user.childInfo;
	}

	function getUserUpInfo() {
		return _store2.default.state.user.userUpInfo;
	}

	function postChildUpdate() {
		return _store2.default.state.user.childUpdate;
	}

	function postAlterChildInfo() {
		return _store2.default.state.user.alterChildInfo;
	}

	function getEditChildInfo() {
		return _store2.default.state.user.child;
	}

	function getOpreationStatus() {
		return _store2.default.state.user.status;
	}

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<scroller v-ref:scroller\n          lock-x\n\t\t\t\t\tuse-pulldown\n\t\t\t\t\t@pulldown:loading=\"refresh\">\n\n\t<div style=\"padding-bottom: 10px\">\n\t\t<div class=\"mz-center-cover\" v-if=\"items\">\n\n\t\t\t<div class=\"mz-center-name\">\n\t\t\t\t{{user.user_name}}\n\t\t\t</div>\n\n\t\t\t<div class=\"mz-flex mz-container\">\n\t\t\t\t<div class=\"mz-flex\">\n\t\t\t\t\t\t<div class=\"mz-center-info mz-pop\" v-link=\"{name:'info'}\">\n\t\t\t\t\t\t\t\t完善资料\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mz-center-avatar mz-item\">\n\t\t\t\t\t<div class=\"mz-center-crown\"></div>\n\t\t\t\t\t<img :src=\"user.user_avatar\" class=\"mz-center-img-avatar\"><!--\n\t\t\t\t--></div>\n\t\t\t\t<div class=\"mz-flex\">\n\t\t\t\t\t<div class=\"mz-center-billboard mz-pop\" v-link=\"{name:'billboard'}\">\n\t\t\t\t\t\t\t打卡<br>排行榜\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mz-signature mz-center-item\">\n\t\t\t\t个人战绩: 坚持打卡<span class=\"mz-bold\">{{user.duration}}</span>天,累计打卡<span class=\"mz-bold\">{{user.signin_count}}</span>次\n\t\t\t</div>\n\n\t\t\t<div class=\"mz-center-point mz-center-item\">\n\t\t\t\t<span class=\"mz-billboard-level\" style=\"margin-right: 8px\">v{{user.score_level}}</span>{{user.score}}积分<span style=\"display: block\"></span>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"mz-center-item\">\n\t\t\t\t<a href=\"javascript:;\" class=\"mz-href\" @click=\"awardIntroduce\"> 积分奖励说明</a>\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t\t<loader v-ref:loader\n\t\t         @on-refresh=\"query\">\n\t\t</loader>\n\n\t\t<card v-for=\"item in items\"\n\t\t\t\t\t:zan=\"item.agree_count\"\n\t\t\t\t\t:comments=\"item.comment_count\"\n\t\t\t\t\t:title=\"item.activity_title\"\n\t\t\t\t\t:content=\"item.text\"\n\t\t\t\t\t:cover=\"item.image_url\"\n\t\t\t\t\t:activity-id=\"item.activity_id\"\n\t\t\t\t\t:sign-id=\"item.signin_id\"\n\t\t\t\t\t:checked=\"item.my_agree === 1 ? true: false\"\n\t\t\t\t\t@on-loaded=\"pass(item)\"\n\t\t\t\t\t:date=\"item.signin_time\">\n\t\t</card>\n\t</div>\n</scroller>\n\n<dialog></dialog>\n</div>\n";

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(259)
	__vue_script__ = __webpack_require__(260)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(282)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2485dba2/info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 259 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(261);

	var _index2 = _interopRequireDefault(_index);

	var _groupTitle = __webpack_require__(262);

	var _groupTitle2 = _interopRequireDefault(_groupTitle);

	var _index3 = __webpack_require__(266);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(267);

	var _index6 = _interopRequireDefault(_index5);

	var _cardCenterContent = __webpack_require__(268);

	var _cardCenterContent2 = _interopRequireDefault(_cardCenterContent);

	var _index7 = __webpack_require__(117);

	var _index8 = _interopRequireDefault(_index7);

	var _userGetter = __webpack_require__(256);

	var _userAction = __webpack_require__(254);

	var _UpdateChildInfo = __webpack_require__(273);

	var _UpdateChildInfo2 = _interopRequireDefault(_UpdateChildInfo);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				list: [],
				ac: ['江苏省', '苏州市', '吴中区'],
				showPOP: false
			};
		},
		components: {
			GroupTitle: _groupTitle2.default,
			Group: _index2.default,
			Cell: _index4.default,
			Panel: _index6.default,
			CardCenter: _cardCenterContent2.default,
			Scroller: _index8.default,
			upload: _UpdateChildInfo2.default,
			loader: _loading2.default
		},
		vuex: {
			getters: {
				user: _userGetter.getUserUpInfo,
				items: _userGetter.getChildInfo
			},
			actions: {
				childInfoQuery: _userAction.childInfoQuery,
				setChildInfo: _userAction.setChildInfo,
				alterUserInfoFirstQuery: _userAction.alterUserInfoFirstQuery
			}
		},
		ready: function ready() {
			if (this.items.length === 0) {
				this.query();
			}
		},
		methods: {
			add: function add() {
				this.$router.go({ name: 'update' });
			},
			edit: function edit(child) {
				this.setChildInfo(child);
				this.$router.go({ name: 'update' });
			},
			query: function query() {
				var _self = this;
				this.$refs.loader.OnLoading();
				this.childInfoQuery().then(function () {
					if (_self.items.length === 0) {
						_self.$refs.loader.OnEmpty();
					} else {
						_self.$refs.loader.OnHide();
					}
				}).catch(function () {
					_self.$refs.loader.OnError();
				});
			},
			updateHeadImg: function updateHeadImg() {
				var _self = this;
				window.wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function success(res) {
						var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						window.wx.uploadImage({
							localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
							isShowProgressTips: 1, // 默认为1，显示进度提示
							success: function success(res) {
								var serverId = res.serverId; // 返回图片的服务器端ID
								_activityService2.default.getUrlByServerId(serverId.toString()).then(function (data) {
									if (data.data.state == '10000') {
										_self.updaeUserInfo(data.data.url);
									} else {
										_self.$dispatch('error', data.data.message);
									}
								});
							}

						});
					}
				});
			},

			updaeUserInfo: function updaeUserInfo(url) {
				this.$dispatch('loading');
				var _self = this;
				this.alterUserInfoFirstQuery({ headImgUrl: url }).then(function () {
					_self.$dispatch('loading');
					_self.$dispatch('success', '修改头像成功');
				}).catch(function () {
					_self.$dispatch('loading');
					if (err.status === 400) {
						_self.$dispatch('error', err.data.error_message);
					} else if (err.status === 0) {
						_self.$dispatch('error', '请求超时请重试');
					} else {
						_self.$dispatch('error', '内容错误请重试');
					}
				});
			}
		},
		watch: {
			items: function items() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			}
		}
	};
	// </script>
	// <template>
	// 	<div>
	// 	<scroller v-ref:scroller lock-x>
	// 		<div style="padding-bottom: 30px">
	// 			<!--个人信息 start-->
	// 			<group style="margin: 0">
	//
	// 				<group-title type="success">个人信息</group-title>
	//
	// 				<cell title="头像">
	//
	// 					<div slot="value">
	// 						<img :src="user.user_avatar" @click="updateHeadImg" width="33">
	// 					</div>
	//
	// 				</cell>
	//
	// 				<cell title="昵称" is-link
	// 					  :value="user.user_name"
	// 					  v-link="{name:'userUpdate',query: {title:'昵称',value: user.user_name,type: '1'}}">
	//
	// 				</cell>
	//
	// 				<cell title="性别"
	// 					  is-link
	// 					  :value="user.sex == 1 ? '男' : '女'"
	// 					  v-link="{name:'userUpdate', query: {title: '性别', value: user.sex,type: '2'}}">
	//
	// 				</cell>
	//
	// 				<cell title="居住地"
	// 					  is-link
	// 					  :value="user.address"
	// 					  v-link="{name: 'userUpdate', query: {title: '居住地', value: user.address,type: '3'}}">
	//
	// 				</cell>
	//
	// 			</group>
	// 			<!--个人信息 end-->
	//
	// 			<!--孩子信息 start-->
	// 			<group>
	//
	// 				<group-title type="glass">孩子信息</group-title>
	//
	// 				<loader v-ref:loader
	// 				        @on-refresh="query">
	// 				</loader>
	//
	// 				<card-center type="2" v-for="item in items"
	// 				             :nickname="item.nickname"
	// 				             :birthday="item.birthday"
	// 				             :id="item.id"
	// 				             :gender="item.gender"
	// 				             :avatar="item.avatar"
	// 				             @on-edit="edit(item)">
	// 				</card-center>
	//
	// 				<div class="mz-center mz-text-center" @click="add">
	// 					<div  class="mz-icon mz-icon-addChild mz-text-center">添加孩子信息</div>
	// 				</div>
	// 			</group>
	// 			<!--孩子信息 end-->
	// 		</div>
	// 	</scroller>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-center{
	// 	margin:15px;
	// 	padding:5px;
	// 	border:1px solid #b0d160;
	// }
	//
	// </style>
	//
	// <script>

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxGroup=e():t.vuxGroup=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,titleColor:String}}},function(t,e){},function(t,e){t.exports="<div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class=\"{'vux-no-group-title':!title}\"> <slot></slot> </div> </div>"},function(t,e,o){var r,i;o(2),r=o(1),i=o(3),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(263)
	__vue_script__ = __webpack_require__(264)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/group/group-title.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(265)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-63d521b3/group-title.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 263 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 264 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz_cells_title" :class="classes">
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz_cells_title{
	// 	color: #fff;
	// 	padding: 10px 15px;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			type: {
				type: String
			}
		},
		computed: {
			classes: function classes() {
				return ["mz-" + this.type];
			}
		}
	};

	// </script>
	//
	//

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz_cells_title\" :class=\"classes\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuxCell=n():t.vuxCell=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(75)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(50),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6),o=e(12);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(8),o=e(30),i=e(24),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(22)("wks"),o=e(13),i=e(1).Symbol,u="function"==typeof i,f=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};f.store=r},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(35),o=e(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(6).f,o=e(2),i=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(22)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(14),i=e(18),u=e(26),f=e(6).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(14),i=e(47),u=e(5),f="prototype",c=function(t,n,e){var s,a,l,p=t&c.F,y=t&c.G,v=t&c.S,d=t&c.P,h=t&c.B,x=t&c.W,b=y?o:o[n]||(o[n]={}),m=b[f],g=y?r:v?r[n]:(r[n]||{})[f];y&&(e=n);for(s in e)a=!p&&g&&void 0!==g[s],a&&s in b||(l=a?g[s]:e[s],b[s]=y&&"function"!=typeof g[s]?e[s]:h&&a?i(l,r):x&&g[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[s]=l,t&c.R&&m&&!m[s]&&u(m,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){t.exports=!e(4)&&!e(9)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(18),o=e(29),i=e(36),u=e(5),f=e(2),c=e(17),s=e(52),a=e(20),l=e(59),p=e(7)("iterator"),y=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",h="values",x=function(){return this};t.exports=function(t,n,e,b,m,g,_){s(e,n,b);var w,O,S,j=function(t){if(!y&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",E=m==h,k=!1,M=t.prototype,A=M[p]||M[v]||m&&M[m],F=A||j(m),T=m?E?j("entries"):F:void 0,I="Array"==n?M.entries||A:A;if(I&&(S=l(I.call(new t)),S!==Object.prototype&&(a(S,P,!0),r||f(S,p)||u(S,p,x))),E&&A&&A.name!==h&&(k=!0,F=function(){return A.call(this)}),r&&!_||!y&&!k&&M[p]||u(M,p,F),c[n]=F,c[P]=x,m)if(w={values:E?F:j(h),keys:g?F:j(d),entries:T},_)for(O in w)O in M||i(M,O,w[O]);else o(o.P+o.F*(y||k),n,w);return w}},function(t,n,e){var r=e(8),o=e(56),i=e(16),u=e(21)("IE_PROTO"),f=function(){},c="prototype",s=function(){var t,n=e(28)("iframe"),r=i.length,o=">";for(n.style.display="none",e(49).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),s=t.F;r--;)delete s[c][i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(35),o=e(16).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=e(3),i=e(46)(!1),u=e(21)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,s=[];for(e in f)e!=u&&r(f,e)&&s.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(76),i=r(o),u=e(38);n["default"]={components:{InlineDesc:i["default"]},props:{title:String,value:String,isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,u.go)(this.link,this.$router)}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,n){if(!/^javas/.test(t)&&t){var e="object"===("undefined"==typeof t?"undefined":(0,f["default"])(t))||n&&"string"==typeof t&&!/http/.test(t);e?n.go(t):window.location.href=t}}function i(t,n){return!n||n._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,f["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(n,"__esModule",{value:!0});var u=e(41),f=r(u);n.go=o,n.getUrl=i},function(t,n,e){t.exports={"default":e(42),__esModule:!0}},function(t,n,e){t.exports={"default":e(43),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(40),i=r(o),u=e(39),f=r(u),c="function"==typeof f["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(i["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){e(67),e(65),e(68),e(69),t.exports=e(14).Symbol},function(t,n,e){e(66),e(70),t.exports=e(26).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(3),o=e(62),i=e(61);t.exports=function(t){return function(n,e,u){var f,c=r(n),s=o(c.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if(f=c[a++],f!=f)return!0}else for(;s>a;a++)if((t||a in c)&&c[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11),o=e(34),i=e(19);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,s=0;f.length>s;)c.call(t,u=f[s++])&&n.push(u);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(32),o=e(12),i=e(20),u={};e(5)(u,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(11),o=e(3);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(13)("meta"),o=e(10),i=e(2),u=e(6).f,f=0,c=Object.isExtensible||function(){return!0},s=!e(9)(function(){return c(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;a(t)}return t[r].w},y=function(t){return s&&v.NEED&&c(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:y}},function(t,n,e){var r=e(6),o=e(8),i=e(11);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(19),o=e(12),i=e(3),u=e(24),f=e(2),c=e(30),s=Object.getOwnPropertyDescriptor;n.f=e(4)?s:function(t,n){if(t=i(t),n=u(n,!0),c)try{return s(t,n)}catch(e){}return f(t,n)?o(!r.f.call(t,n),t[n]):void 0}},function(t,n,e){var r=e(3),o=e(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(63),i=e(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(23),o=e(15);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),s=f.length;return 0>c||c>=s?t?"":void 0:(i=f.charCodeAt(c),55296>i||i>56319||c+1===s||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(45),o=e(53),i=e(17),u=e(3);t.exports=e(31)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r=e(60)(!0);e(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(4),u=e(29),f=e(36),c=e(55).KEY,s=e(9),a=e(22),l=e(20),p=e(13),y=e(7),v=e(26),d=e(25),h=e(54),x=e(48),b=e(51),m=e(8),g=e(3),_=e(24),w=e(12),O=e(32),S=e(58),j=e(57),P=e(6),E=e(11),k=j.f,M=P.f,A=S.f,F=r.Symbol,T=r.JSON,I=T&&T.stringify,N="prototype",C=y("_hidden"),L=y("toPrimitive"),D={}.propertyIsEnumerable,R=a("symbol-registry"),W=a("symbols"),J=a("op-symbols"),B=Object[N],G="function"==typeof F,K=r.QObject,z=!K||!K[N]||!K[N].findChild,U=i&&s(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(B,n);r&&delete B[n],M(t,n,e),r&&t!==B&&M(B,n,r)}:M,Y=function(t){var n=W[t]=O(F[N]);return n._k=t,n},Q=G&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},$=function(t,n,e){return t===B&&$(J,n,e),m(t),n=_(n,!0),m(e),o(W,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=O(e,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),U(t,n,e)):M(t,n,e)},q=function(t,n){m(t);for(var e,r=x(n=g(n)),o=0,i=r.length;i>o;)$(t,e=r[o++],n[e]);return t},H=function(t,n){return void 0===n?O(t):q(O(t),n)},V=function(t){var n=D.call(this,t=_(t,!0));return this===B&&o(W,t)&&!o(J,t)?!1:n||!o(this,t)||!o(W,t)||o(this,C)&&this[C][t]?n:!0},X=function(t,n){if(t=g(t),n=_(n,!0),t!==B||!o(W,n)||o(J,n)){var e=k(t,n);return!e||!o(W,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=A(g(t)),r=[],i=0;e.length>i;)o(W,n=e[i++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===B,r=A(e?J:g(t)),i=[],u=0;r.length>u;)o(W,n=r[u++])&&(e?o(B,n):!0)&&i.push(W[n]);return i};G||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===B&&n.call(J,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),U(this,t,w(1,e))};return i&&z&&U(B,t,{configurable:!0,set:n}),Y(t)},f(F[N],"toString",function(){return this._k}),j.f=X,P.f=$,e(33).f=S.f=Z,e(19).f=V,e(34).f=tt,i&&!e(18)&&f(B,"propertyIsEnumerable",V,!0),v.f=function(t){return Y(y(t))}),u(u.G+u.W+u.F*!G,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)y(nt[et++]);for(var nt=E(y.store),et=0;nt.length>et;)d(nt[et++]);u(u.S+u.F*!G,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=F(t)},keyFor:function(t){if(Q(t))return h(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!G,"Object",{create:H,defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),T&&u(u.S+u.F*(!G||s(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Q(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&b(n)||(n=function(t,n){return e&&(n=e.call(this,t,n)),Q(n)?void 0:n}),r[1]=n,I.apply(T,r)}}}),F[N][L]||e(5)(F[N],L,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(25)("asyncIterator")},function(t,n,e){e(25)("observable")},function(t,n,e){e(64);for(var r=e(1),o=e(5),i=e(17),u=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;5>c;c++){var s=f[c],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n){},function(t,n){},function(t,n){t.exports="<div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> </div>"},function(t,n){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,n,e){var r,o;e(71),r=e(37),o=e(73),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,n,e){var r,o;e(72),o=e(74),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxPanel=e():t.vuxPanel=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(73)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(50),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(30),i=n(24),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(35),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,o=n(2),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(22)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(14),i=n(18),u=n(26),c=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(14),i=n(47),u=n(5),c="prototype",f=function(t,e,n){var s,a,l,p=t&f.F,d=t&f.G,v=t&f.S,y=t&f.P,h=t&f.B,m=t&f.W,_=d?o:o[e]||(o[e]={}),b=_[c],x=d?r:v?r[e]:(r[e]||{})[c];d&&(n=e);for(s in n)a=!p&&x&&void 0!==x[s],a&&s in _||(l=a?x[s]:n[s],_[s]=d&&"function"!=typeof x[s]?n[s]:h&&a?i(l,r):m&&x[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((_.virtual||(_.virtual={}))[s]=l,t&f.R&&b&&!b[s]&&u(b,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),o=n(29),i=n(36),u=n(5),c=n(2),f=n(17),s=n(52),a=n(20),l=n(59),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",y="keys",h="values",m=function(){return this};t.exports=function(t,e,n,_,b,x,g){s(n,e,_);var w,O,S,j=function(t){if(!d&&t in M)return M[t];switch(t){case y:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",P=b==h,E=!1,M=t.prototype,C=M[p]||M[v]||b&&M[b],F=C||j(b),I=b?P?j("entries"):F:void 0,A="Array"==e?M.entries||C:C;if(A&&(S=l(A.call(new t)),S!==Object.prototype&&(a(S,k,!0),r||c(S,p)||u(S,p,m))),P&&C&&C.name!==h&&(E=!0,F=function(){return C.call(this)}),r&&!g||!d&&!E&&M[p]||u(M,p,F),f[e]=F,f[k]=m,b)if(w={values:P?F:j(h),keys:x?F:j(y),entries:I},g)for(O in w)O in M||i(M,O,w[O]);else o(o.P+o.F*(d||E),e,w);return w}},function(t,e,n){var r=n(8),o=n(56),i=n(16),u=n(21)("IE_PROTO"),c=function(){},f="prototype",s=function(){var t,e=n(28)("iframe"),r=i.length,o=">";for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),s=t.F;r--;)delete s[f][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[f]=r(t),n=new c,c[f]=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(35),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=n(3),i=n(46)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38);e["default"]={props:{header:String,footer:Object,list:Array,type:{type:String,"default":"1"}},methods:{getUrl:function(t){return(0,r.getUrl)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),(0,r.go)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),(0,r.go)(t.url,this.$router)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,c["default"])(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,c["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(41),c=r(u);e.go=o,e.getUrl=i},function(t,e,n){t.exports={"default":n(42),__esModule:!0}},function(t,e,n){t.exports={"default":n(43),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(40),i=r(o),u=n(39),c=r(u),f="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};e["default"]="function"==typeof c["default"]&&"symbol"===f(i["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,e,n){n(67),n(65),n(68),n(69),t.exports=n(14).Symbol},function(t,e,n){n(66),n(70),t.exports=n(26).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(3),o=n(62),i=n(61);t.exports=function(t){return function(e,n,u){var c,f=r(e),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(44);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(34),i=n(19);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(32),o=n(12),i=n(20),u={};n(5)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11),o=n(3);t.exports=function(t,e){for(var n,i=o(t),u=r(i),c=u.length,f=0;c>f;)if(i[n=u[f++]]===e)return n}},function(t,e,n){var r=n(13)("meta"),o=n(10),i=n(2),u=n(6).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";a(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&f(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(6),o=n(8),i=n(11);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){var r=n(19),o=n(12),i=n(3),u=n(24),c=n(2),f=n(30),s=Object.getOwnPropertyDescriptor;e.f=n(4)?s:function(t,e){if(t=i(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}return c(t,e)?o(!r.f.call(t,e),t[e]):void 0}},function(t,e,n){var r=n(3),o=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(2),o=n(63),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(23),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),s=c.length;return 0>f||f>=s?t?"":void 0:(i=c.charCodeAt(f),55296>i||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(45),o=n(53),i=n(17),u=n(3);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(4),u=n(29),c=n(36),f=n(55).KEY,s=n(9),a=n(22),l=n(20),p=n(13),d=n(7),v=n(26),y=n(25),h=n(54),m=n(48),_=n(51),b=n(8),x=n(3),g=n(24),w=n(12),O=n(32),S=n(58),j=n(57),k=n(6),P=n(11),E=j.f,M=k.f,C=S.f,F=r.Symbol,I=r.JSON,A=I&&I.stringify,T="prototype",N=d("_hidden"),U=d("toPrimitive"),L={}.propertyIsEnumerable,R=a("symbol-registry"),W=a("symbols"),$=a("op-symbols"),D=Object[T],J="function"==typeof F,G=r.QObject,K=!G||!G[T]||!G[T].findChild,z=i&&s(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(D,e);r&&delete D[e],M(t,e,n),r&&t!==D&&M(D,e,r)}:M,B=function(t){var e=W[t]=O(F[T]);return e._k=t,e},H=J&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,e,n){return t===D&&Y($,e,n),b(t),e=g(e,!0),b(n),o(W,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,N)||M(t,N,w(1,{})),t[N][e]=!0),z(t,e,n)):M(t,e,n)},Q=function(t,e){b(t);for(var n,r=m(e=x(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?O(t):Q(O(t),e)},V=function(t){var e=L.call(this,t=g(t,!0));return this===D&&o(W,t)&&!o($,t)?!1:e||!o(this,t)||!o(W,t)||o(this,N)&&this[N][t]?e:!0},X=function(t,e){if(t=x(t),e=g(e,!0),t!==D||!o(W,e)||o($,e)){var n=E(t,e);return!n||!o(W,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=C(x(t)),r=[],i=0;n.length>i;)o(W,e=n[i++])||e==N||e==f||r.push(e);return r},tt=function(t){for(var e,n=t===D,r=C(n?$:x(t)),i=[],u=0;r.length>u;)o(W,e=r[u++])&&(n?o(D,e):!0)&&i.push(W[e]);return i};J||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call($,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),z(this,t,w(1,n))};return i&&K&&z(D,t,{configurable:!0,set:e}),B(t)},c(F[T],"toString",function(){return this._k}),j.f=X,k.f=Y,n(33).f=S.f=Z,n(19).f=V,n(34).f=tt,i&&!n(18)&&c(D,"propertyIsEnumerable",V,!0),v.f=function(t){return B(d(t))}),u(u.G+u.W+u.F*!J,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=P(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=F(t)},keyFor:function(t){if(H(t))return h(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!J,"Object",{create:q,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),I&&u(u.S+u.F*(!J||s(function(){var t=F();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),H(e)?void 0:e}),r[1]=e,A.apply(I,r)}}}),F[T][U]||n(5)(F[T],U,F[T].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){n(64);for(var r=n(1),o=n(5),i=n(17),u=n(7)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;5>f;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e){},function(t,e){t.exports='<div class="weui_panel weui_panel_access"> <div class=weui_panel_hd v-if=header @click=onClickHeader v-html=header></div> <div class=weui_panel_bd> <a :href=getUrl(item.url) v-for="item in list" @click.prevent=onItemClick(item) class="weui_media_box weui_media_appmsg" v-if="type === \'1\'"> <div class=weui_media_hd v-if=item.src> <img class=weui_media_appmsg_thumb :src=item.src alt=""> </div> <div class=weui_media_bd> <h4 class=weui_media_title>{{item.title}}</h4> <p class=weui_media_desc>{{item.desc}}</p> </div> </a> <div class="weui_media_box weui_media_text" v-for="item in list" @click.prevent=onItemClick(item) v-if="type === \'2\'"> <h4 class=weui_media_title>{{item.title}}</h4> <p class=weui_media_desc>{{item.desc}}</p> </div> <div class="weui_media_box weui_media_small_appmsg"> <div class="weui_cells weui_cells_access"> <a class=weui_cell :href=getUrl(item.url) v-for="item in list" @click.prevent=onItemClick(item) v-if="type === \'3\'"> <div class=weui_cell_hd> <img :src=item.src alt="" style=width:20px;margin-right:5px;display:block> </div> <div class="weui_cell_bd weui_cell_primary"> <p>{{item.title}}</p> </div> <span class=weui_cell_ft></span> </a> </div> </div> </div> <a class=weui_panel_ft :href=getUrl(footer.url) v-if="footer && type !== \'3\'" @click.prevent=onClickFooter v-html=footer.title></a> </div>'},function(t,e,n){var r,o;n(71),r=n(37),o=n(72),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(269)
	__vue_script__ = __webpack_require__(270)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/card/cardCenterContent.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(272)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-49b4ee8c/cardCenterContent.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 269 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _userAction = __webpack_require__(254);

	var _userService = __webpack_require__(271);

	var _userService2 = _interopRequireDefault(_userService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div>
	//     <div style="margin:15px;padding:5px;border:1px solid #b0d160;display:flex;align-items:center;justify-content:space-between">
	//         <div style="display:flex;">
	//             <span style="margin-right:15px;width:50px;height:50px;display:inline-block">
	//             <img style="width:100%;height:100%;border-radius:50%;border:1px solid #b0d160;" :src="avatar||'http://static.youku.com/user/img/avatar/310/39.jpg'"></span>
	//             <div class="selfinfo">
	//               <span>小名:{{nickname}}</span>
	//               <span>生日:{{birthday | timestamp2date}}</span>
	//             </div>
	//         </div>
	//         <div class="infoicon">
	//             <span style="color:#FFBA29;font-size:25px;" class="mz-icon mz-icon-edit" @click="edit"></span>
	//             <span style="font-size:25px" class="mz-icon mz-icon-delete" @click="delete"></span>
	//         </div>
	//     </div>
	//   </div>
	// </template>
	// <style>
	// .vux-center-v, .vux-center-h, .vux-center {
	//     display: flex;
	// }
	//
	// .vux-center-v, .vux-center {
	//     align-items: center;
	// }
	//
	// .vux-center-h, .vux-center {
	//     justify-content: center;
	// }
	// .mz-icon-addChild{
	//     color: #b0d160;
	// }
	// .mz-icon-addChild:before{
	//     content: '\E911';
	//     padding-right:6px;
	// }
	// .mz-icon-delete{
	//     color: #FE7F85;
	// }
	// .mz-icon-delete:before{
	//     content: '\E907';
	// }
	// .selfinfo{
	//     display: flex;
	//     flex-flow: column wrap;
	// }
	// .selfinfo span{
	//     white-space: nowrap;
	//     width:8em;
	//     overflow:hidden;
	//     text-overflow:ellipsis;
	// }
	// .infoicon{
	//     display: flex;
	//     flex-flow:row nowrap;
	// }
	// .infoicon span{
	//     margin:5px;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			birthday: Number,
			nickname: String,
			gender: String,
			id: Number,
			avatar: String
		},
		vuex: {
			actions: {
				deleteChildInfoQuery: _userAction.deleteChildInfoQuery
			}
		},
		methods: {
			delete: function _delete() {
				this.$dispatch('confirm', '个人信息', '确认删除' + this.nickname + '的信息么', this.confirm);
			},
			confirm: function confirm() {
				var _self = this;
				this.$dispatch('loading');
				_userService2.default.deleteChildInfo(this.id).then(function () {
					_self.deleteChildInfoQuery(_self.id);
					_self.$dispatch('loading');
					_self.$dispatch('success', '删除成功');
				}).catch(function (err) {
					_self.$dispatch('loading');
					if (err.status === 400) {
						_self.$dispatch('error', err.data.error_message);
					} else if (err.status === 0) {
						_self.$dispatch('error', '请求超时请重试');
					} else {
						_self.$dispatch('error', '内容错误请重试');
					}
				});
			},
			edit: function edit() {
				this.$emit('on-edit');
			}
		}
	};
	// </script>

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _user = __webpack_require__(255);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		deleteChildInfo: function deleteChildInfo(id) {
			return _user2.default.API_DELETE_CHILD_INFO(id);
		}
	}; /**
	    * Created by Alex on 16/8/29.
	    */

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div style=\"margin:15px;padding:5px;border:1px solid #b0d160;display:flex;align-items:center;justify-content:space-between\">\n      <div style=\"display:flex;\">\n          <span style=\"margin-right:15px;width:50px;height:50px;display:inline-block\">\n          <img style=\"width:100%;height:100%;border-radius:50%;border:1px solid #b0d160;\" :src=\"avatar||'http://static.youku.com/user/img/avatar/310/39.jpg'\"></span>\n          <div class=\"selfinfo\">\n            <span>小名:{{nickname}}</span>\n            <span>生日:{{birthday | timestamp2date}}</span>\n          </div>\n      </div>\n      <div class=\"infoicon\">\n          <span style=\"color:#FFBA29;font-size:25px;\" class=\"mz-icon mz-icon-edit\" @click=\"edit\"></span>\n          <span style=\"font-size:25px\" class=\"mz-icon mz-icon-delete\" @click=\"delete\"></span>\n      </div>\n  </div>\n</div>\n";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(274)
	__vue_script__ = __webpack_require__(275)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dialog/UpdateChildInfo.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4b712b1e/UpdateChildInfo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 274 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(261);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(276);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(137);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(138);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(277);

	var _index10 = _interopRequireDefault(_index9);

	var _index11 = __webpack_require__(278);

	var _index12 = _interopRequireDefault(_index11);

	var _index13 = __webpack_require__(279);

	var _index14 = _interopRequireDefault(_index13);

	var _index15 = __webpack_require__(266);

	var _index16 = _interopRequireDefault(_index15);

	var _userAction = __webpack_require__(254);

	var _index17 = __webpack_require__(181);

	var _index18 = _interopRequireDefault(_index17);

	var _userGetter = __webpack_require__(256);

	var _timestamp2date = __webpack_require__(280);

	var _timestamp2date2 = _interopRequireDefault(_timestamp2date);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				radio001: ['男', '女'],
				sex: this.child.gender === 'female' ? '0' : '1',
				birthday: this.child.birthday,
				sexValue: this.child.gender === 'female' ? '女' : '男',
				value: '',
				birthdayValue: (0, _timestamp2date2.default)(this.child.birthday),
				nickname: this.child.nickname,
				id: this.child.id,
				avatar: this.child.avatar
			};
		},

		vuex: {
			actions: {
				childUpdateQuery: _userAction.childUpdateQuery,
				alterChildInfoQuery: _userAction.alterChildInfoQuery,
				removeChildInfo: _userAction.removeChildInfo
			},
			getters: {
				child: _userGetter.getEditChildInfo,
				type: _userGetter.getOpreationStatus
			}
		},
		props: {
			showPOP: Boolean
		},
		components: {
			Group: _index2.default,
			Cell: _index16.default,
			xInput: _index4.default,
			xButton: _index14.default,
			Radio: _index10.default,
			DateTime: _index12.default,
			toast: _index6.default,
			loading: _index8.default,
			popup: _index18.default
		},
		route: {
			deactivate: function deactivate(transition) {
				this.removeChildInfo();
				transition.next();
			}
		},
		methods: {
			change: function change(value) {
				this.sex = value == '男' ? '1' : '0';
			},
			edit: function edit() {
				var _self = this;
				this.$dispatch('loading');
				this.alterChildInfoQuery(this.id, this.nickname, this.sex, this.birthday, this.avatar).then(function () {
					_self.$dispatch('loading');
					_self.$dispatch('success', '修改成功');
					window.history.back();
				}, function (err) {
					_self.$dispatch('loading');
					if (err.status === 400) {
						_self.$dispatch('error', err.data.error_message);
					} else if (err.status === 0) {
						_self.$dispatch('error', '请求超时请重试');
					} else {
						_self.$dispatch('error', '内容错误请重试');
					}
				});
			},
			save: function save() {
				var _self = this;
				this.$dispatch('loading');
				this.childUpdateQuery(this.nickname, this.sex, this.birthday, this.avatar).then(function () {
					_self.$dispatch('loading');
					_self.$dispatch('success', '新增成功');
					window.history.back();
				}, function (err) {
					_self.$dispatch('loading');
					if (err.status === 400) {
						_self.$dispatch('error', err.data.error_message);
					} else if (err.status === 0) {
						_self.$dispatch('error', '请求超时请重试');
					} else {
						_self.$dispatch('error', '内容错误请重试');
					}
				});
			},
			updateInfo: function updateInfo() {
				if (this.nickname.length > 16) {
					this.$dispatch('error', '姓名长度不能超过16个字符');
					return;
				}
				if (this.validate()) {
					this.type === 'EDIT' ? this.edit() : this.save();
				}
			},
			changebirth: function changebirth(value) {
				this.birthday = value;
			},
			changename: function changename(value) {
				this.nickname = value;
			},
			cancel: function cancel() {
				window.history.back();
			},
			validate: function validate() {
				if (!this.nickname) {
					this.$dispatch('error', '小名不能为空');
					return false;
				}
				if (!this.sex) {
					this.$dispatch('error', '请选择性别');
					return false;
				}
				if (!this.birthday) {
					this.$dispatch('error', '请选择出生日期');
					return false;
				}
				return true;
			},
			updateHeadImg: function updateHeadImg() {
				var _self = this;
				window.wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function success(res) {
						var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						window.wx.uploadImage({
							localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
							isShowProgressTips: 1, // 默认为1，显示进度提示
							success: function success(res) {
								var serverId = res.serverId; // 返回图片的服务器端ID
								_activityService2.default.getUrlByServerId(serverId.toString()).then(function (data) {
									if (data.data.state == '10000') {
										_self.$dispatch('success', '图片上传成功');
										_self.avatar = data.data.url;
									} else {
										_self.$dispatch('error', data.data.message);
									}
								});
							}

						});
					}
				});
			}
		}
	};
	// </script>
	// <template>
	//     <div>
	// 		<group>
	// 			<cell title="头像">
	// 				<div slot="value">
	// 					<img :src="avatar || 'http://static.youku.com/user/img/avatar/310/39.jpg' " @click="updateHeadImg" width="33">
	// 				</div>
	// 			</cell>
	// 		</group>
	//
	//     <group title="小名">
	//         <x-input placeholder="请输入姓名" type="text"  :value.sync="nickname"></x-input>
	//     </group>
	//
	//     <group title="性别">
	//         <radio :options="radio001" :value.sync="sexValue" @on-change="change"></radio>
	//     </group>
	//
	//     <group title="生日">
	//         <date-time :value.sync="birthdayValue"
	//                    placeholder="请选择日期"
	//                    format="YYYY-MM-DD"
	//                    @on-change="changebirth"
	//                    title="选择日期"
	//                    year-row="{value}年"
	//                    month-row="{value}月"
	//                    day-row="{value}日"
	//                    confirm-text="完成"
	//                    cancel-text="取消">
	//
	//         </date-time>
	//     </group>
	//
	//     <group>
	//         <x-button type="primary" @click="updateInfo">确认</x-button>
	//
	// 	      <x-button type="red" @click="cancel">取消</x-button>
	//     </group>
	//     </div>
	// </template>
	// <style>
	//     .weui_btn_primary{
	//         background-color:#72e4dc;
	//     }
	// </style>
	// <script>

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxXInput=e():t.vuxXInput=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(54)},function(t,e){"use strict";function n(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28),i=n(7);t.exports=function(t){return r(i(t))}},function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];for(var n in e)"undefined"==typeof t[n]&&(t[n]=e[n]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(15),o=r(i),u=n(13),a=r(u),s=n(52),l=r(s),f=n(53),c=r(f),d=n(46),p=r(d),h=n(48),v=r(h),x={email:{fn:p["default"],msg:"邮箱格式"},"china-mobile":{fn:function(t){return(0,v["default"])(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e["default"]={ready:function(){this.title||this.placeholder||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[a["default"]],components:{Icon:l["default"],InlineDesc:c["default"]},props:{title:{type:String,"default":""},placeholder:String,value:{type:String,"default":"",twoWay:!0},name:String,readonly:{type:Boolean,"default":!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,"default":!0},equalWith:String,type:{type:String,"default":"text"},textAlign:String,autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false"},computed:{pattern:function(){return"number"===this.keyboard||"china-mobile"===this.isType?"[0-9]*":void 0},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,o["default"])(this.errors).length>0},inputStyle:function(){return this.textAlign?{textAlign:this.textAlign}:void 0}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var t=(0,o["default"])(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var t=x[this.isType];if(t){if(this.valid=t.fn(this.value),!this.valid)return void(this.errors.format=t.msg+"格式不对哦~");delete this.errors.format}if(this.min){if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),void(this.valid=!1);delete this.errors.min}if(this.max){if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var t=this.dirty||this.value.length>=this.equalWith.length;return t&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function y(){var y={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return y},watch:{focus:function(t){t&&this.$els.input.focus()},valid:function(){this.getError()},value:function(t){this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=r(i);e["default"]={mixins:[o["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,n){t.exports={"default":n(16),__esModule:!0}},function(t,e,n){n(41),t.exports=n(2).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(9),i=n(37),o=n(36);t.exports=function(t){return function(e,n,u){var a,s=r(e),l=i(s.length),f=o(u,l);if(t&&n!=n){for(;l>f;)if(a=s[f++],a!=a)return!0}else for(;l>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(6),i=n(5).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5),i=n(2),o=n(21),u=n(26),a="prototype",s=function(t,e,n){var l,f,c,d=t&s.F,p=t&s.G,h=t&s.S,v=t&s.P,x=t&s.B,y=t&s.W,_=p?i:i[e]||(i[e]={}),m=_[a],g=p?r:h?r[e]:(r[e]||{})[a];p&&(n=e);for(l in n)f=!d&&g&&void 0!==g[l],f&&l in _||(c=f?g[l]:n[l],_[l]=p&&"function"!=typeof g[l]?n[l]:x&&f?o(c,r):y&&g[l]==c?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(c):v&&"function"==typeof c?o(Function.call,c):c,v&&((_.virtual||(_.virtual={}))[l]=c,t&s.R&&m&&!m[l]&&u(m,l,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(29),i=n(33);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(18),i=n(27),o=n(39),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(25),i=n(9),o=n(19)(!1),u=n(34)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),s=0,l=[];for(n in a)n!=u&&r(a,n)&&l.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var r=n(30),i=n(23);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(24),i=n(2),o=n(4);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(35)("keys"),i=n(40);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(5),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),0>t?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(38),i=n(31);n(32)("keys",function(){return function(t){return i(r(t))}})},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){(0,a["default"])(t);var n=void 0,r=void 0;"object"===("undefined"==typeof e?"undefined":o(e))?(n=e.min||0,r=e.max):(n=arguments[1],r=arguments[2]);var i=encodeURI(t).split(/%..|./).length-1;return i>=n&&("undefined"==typeof r||r>=i)}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e["default"]=i;var u=n(1),a=r(u);t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if((0,u["default"])(t),e=(0,s["default"])(e,p),e.allow_display_name){var n=t.match(h);n&&(t=n[1])}var r=t.split("@"),i=r.pop(),o=r.join("@"),a=i.toLowerCase();if("gmail.com"!==a&&"googlemail.com"!==a||(o=o.replace(/\./g,"").toLowerCase()),!(0,f["default"])(o,{max:64})||!(0,f["default"])(i,{max:256}))return!1;if(!(0,d["default"])(i,{require_tld:e.require_tld}))return!1;if('"'===o[0])return o=o.slice(1,o.length-1),e.allow_utf8_local_part?_.test(o):x.test(o);for(var l=e.allow_utf8_local_part?y:v,c=o.split("."),m=0;m<c.length;m++)if(!l.test(c[m]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var o=n(1),u=r(o),a=n(10),s=r(a),l=n(45),f=r(l),c=n(47),d=r(c),p={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){(0,u["default"])(t),e=(0,s["default"])(e,l),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=t.split(".");if(e.require_tld){var r=n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r))return!1}for(var i,o=0;o<n.length;o++){if(i=n[o],e.allow_underscores&&(i=i.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(i))return!1;if(/[\uff01-\uff5e]/.test(i))return!1;if("-"===i[0]||"-"===i[i.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var o=n(1),u=r(o),a=n(10),s=r(a),l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){return(0,u["default"])(t),e in a?a[e].test(t):!1}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var o=n(1),u=r(o),a={"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};t.exports=e["default"]},function(t,e){t.exports="<i class={{className}}></i>"},function(t,e){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,e){t.exports='<div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: labelWidth + \'em\'}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :autocomplete=autocomplete :autocapitalize=autocapitalize :autocorrect=autocorrect :spellcheck=spellcheck :style=inputStyle :type=type :name=name :pattern=pattern :placeholder=placeholder :readonly=readonly v-model=value @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div>'},function(t,e,n){var r,i;n(42),r=n(11),i=n(49),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var r,i;n(44),i=n(50),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){var r,i;n(43),r=n(12),i=n(51),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxRadio=e():t.vuxRadio=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(75)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(52),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(30),i=n(24),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(35),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,o=n(2),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(22)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(14),i=n(18),u=n(26),c=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(14),i=n(49),u=n(5),c="prototype",f=function(t,e,n){var s,a,l,p=t&f.F,d=t&f.G,v=t&f.S,y=t&f.P,h=t&f.B,b=t&f.W,_=d?o:o[e]||(o[e]={}),x=_[c],g=d?r:v?r[e]:(r[e]||{})[c];d&&(n=e);for(s in n)a=!p&&g&&void 0!==g[s],a&&s in _||(l=a?g[s]:n[s],_[s]=d&&"function"!=typeof g[s]?n[s]:h&&a?i(l,r):b&&g[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((_.virtual||(_.virtual={}))[s]=l,t&f.R&&x&&!x[s]&&u(x,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),o=n(29),i=n(36),u=n(5),c=n(2),f=n(17),s=n(54),a=n(20),l=n(61),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",y="keys",h="values",b=function(){return this};t.exports=function(t,e,n,_,x,g,m){s(n,e,_);var w,O,S,j=function(t){if(!d&&t in k)return k[t];switch(t){case y:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",E=x==h,M=!1,k=t.prototype,F=k[p]||k[v]||x&&k[x],A=F||j(x),T=x?E?j("entries"):A:void 0,N="Array"==e?k.entries||F:F;if(N&&(S=l(N.call(new t)),S!==Object.prototype&&(a(S,P,!0),r||c(S,p)||u(S,p,b))),E&&F&&F.name!==h&&(M=!0,A=function(){return F.call(this)}),r&&!m||!d&&!M&&k[p]||u(k,p,A),f[e]=A,f[P]=b,x)if(w={values:E?A:j(h),keys:g?A:j(y),entries:T},m)for(O in w)O in k||i(k,O,w[O]);else o(o.P+o.F*(d||M),e,w);return w}},function(t,e,n){var r=n(8),o=n(58),i=n(16),u=n(21)("IE_PROTO"),c=function(){},f="prototype",s=function(){var t,e=n(28)("iframe"),r=i.length,o=">";for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),s=t.F;r--;)delete s[f][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[f]=r(t),n=new c,c[f]=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(35),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=n(3),i=n(48)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){for(var n=t.length;n--;)if(t[n]===e)return!0;return!1}Object.defineProperty(e,"__esModule",{value:!0});var i=n(39),u=r(i),c=n(38);e["default"]={mixins:[u["default"]],filters:{getValue:c.getValue,getKey:c.getKey},props:{options:{type:Array,required:!0},value:{type:String,twoWay:!0},fillMode:{type:Boolean,"default":!1},fillPlaceholder:{type:String,"default":"其他"},fillLabel:{type:String,"default":"其他"}},ready:function(){this.handleChangeEvent=!0},methods:{onFocus:function(){this.value=this.fillValue||"",this.isFocus=!0}},watch:{value:function(t){var e=o(this.options,t);""!==t&&e&&(this.fillValue=""),this.$emit("on-change",t)},fillValue:function(t){this.fillMode&&this.isFocus&&(this.value=t)}},data:function(){return{fillValue:"",isFocus:!1}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getKey=e.getValue=void 0;var o=n(43),i=r(o);e.getValue=function(t){return"object"===("undefined"==typeof t?"undefined":(0,i["default"])(t))?t.value:t},e.getKey=function(t){return"object"===("undefined"==typeof t?"undefined":(0,i["default"])(t))?t.key:t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(40),i=r(o);e["default"]={mixins:[i["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,n){t.exports={"default":n(44),__esModule:!0}},function(t,e,n){t.exports={"default":n(45),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(42),i=r(o),u=n(41),c=r(u),f="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};e["default"]="function"==typeof c["default"]&&"symbol"===f(i["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,e,n){n(69),n(67),n(70),n(71),t.exports=n(14).Symbol},function(t,e,n){n(68),n(72),t.exports=n(26).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(3),o=n(64),i=n(63);t.exports=function(t){return function(e,n,u){var c,f=r(e),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(46);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(34),i=n(19);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(32),o=n(12),i=n(20),u={};n(5)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11),o=n(3);t.exports=function(t,e){for(var n,i=o(t),u=r(i),c=u.length,f=0;c>f;)if(i[n=u[f++]]===e)return n}},function(t,e,n){var r=n(13)("meta"),o=n(10),i=n(2),u=n(6).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";a(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&f(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(6),o=n(8),i=n(11);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){var r=n(19),o=n(12),i=n(3),u=n(24),c=n(2),f=n(30),s=Object.getOwnPropertyDescriptor;e.f=n(4)?s:function(t,e){if(t=i(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}return c(t,e)?o(!r.f.call(t,e),t[e]):void 0}},function(t,e,n){var r=n(3),o=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(2),o=n(65),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(23),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),s=c.length;return 0>f||f>=s?t?"":void 0:(i=c.charCodeAt(f),55296>i||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(47),o=n(55),i=n(17),u=n(3);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(62)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(4),u=n(29),c=n(36),f=n(57).KEY,s=n(9),a=n(22),l=n(20),p=n(13),d=n(7),v=n(26),y=n(25),h=n(56),b=n(50),_=n(53),x=n(8),g=n(3),m=n(24),w=n(12),O=n(32),S=n(60),j=n(59),P=n(6),E=n(11),M=j.f,k=P.f,F=S.f,A=r.Symbol,T=r.JSON,N=T&&T.stringify,I="prototype",C=d("_hidden"),V=d("toPrimitive"),K={}.propertyIsEnumerable,L=a("symbol-registry"),R=a("symbols"),W=a("op-symbols"),D=Object[I],B="function"==typeof A,J=r.QObject,G=!J||!J[I]||!J[I].findChild,q=i&&s(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(D,e);r&&delete D[e],k(t,e,n),r&&t!==D&&k(D,e,r)}:k,z=function(t){var e=R[t]=O(A[I]);return e._k=t,e},Y=B&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},$=function(t,e,n){return t===D&&$(W,e,n),x(t),e=m(e,!0),x(n),o(R,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,C)||k(t,C,w(1,{})),t[C][e]=!0),q(t,e,n)):k(t,e,n)},Q=function(t,e){x(t);for(var n,r=b(e=g(e)),o=0,i=r.length;i>o;)$(t,n=r[o++],e[n]);return t},U=function(t,e){return void 0===e?O(t):Q(O(t),e)},H=function(t){var e=K.call(this,t=m(t,!0));return this===D&&o(R,t)&&!o(W,t)?!1:e||!o(this,t)||!o(R,t)||o(this,C)&&this[C][t]?e:!0},X=function(t,e){if(t=g(t),e=m(e,!0),t!==D||!o(R,e)||o(W,e)){var n=M(t,e);return!n||!o(R,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=F(g(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==C||e==f||r.push(e);return r},tt=function(t){for(var e,n=t===D,r=F(n?W:g(t)),i=[],u=0;r.length>u;)o(R,e=r[u++])&&(n?o(D,e):!0)&&i.push(R[e]);return i};B||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(W,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),q(this,t,w(1,n))};return i&&G&&q(D,t,{configurable:!0,set:e}),z(t)},c(A[I],"toString",function(){return this._k}),j.f=X,P.f=$,n(33).f=S.f=Z,n(19).f=H,n(34).f=tt,i&&!n(18)&&c(D,"propertyIsEnumerable",H,!0),v.f=function(t){return z(d(t))}),u(u.G+u.W+u.F*!B,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=E(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!B,"Symbol",{"for":function(t){return o(L,t+="")?L[t]:L[t]=A(t)},keyFor:function(t){if(Y(t))return h(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!B,"Object",{create:U,defineProperty:$,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),T&&u(u.S+u.F*(!B||s(function(){var t=A();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Y(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),Y(e)?void 0:e}),r[1]=e,N.apply(T,r)}}}),A[I][V]||n(5)(A[I],V,A[I].valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){n(66);for(var r=n(1),o=n(5),i=n(17),u=n(7)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;5>f;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e){},function(t,e){t.exports='<div class=weui_cells_radio> <label class="weui_cell weui_cell_radio weui_check_label" for=radio_{{uuid}}_{{index}} v-for="(index,one) in options"> <div class="weui_cell_bd weui_cell_primary"> <p>{{one | getValue}}</p> </div> <div class=weui_cell_ft> <input type=radio class=weui_check v-model=value id=radio_{{uuid}}_{{index}} value="{{one | getKey}}"> <span class=weui_icon_checked></span> </div> </label> <div class=weui_cell v-show=fillMode> <div class=weui_cell_hd><label for="" class=weui_label>{{fillLabel}}</label></div> <div class="weui_cell_bd weui_cell_primary"> <input class="weui_input needsclick" type=text v-model=fillValue placeholder={{fillPlaceholder}} @blur="isFocus=false" @focus=onFocus()> </div> <div class=weui_cell_ft v-show="value===\'\' && !isFocus"> <i class=weui_icon_warn></i> </div> </div> </div>'},function(t,e,n){var r,o;n(73),r=n(37),o=n(74),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxDatetime=t():e.vuxDatetime=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(17)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=o(i),a=n(18),l=o(a),c=n(19),s=o(c),u=n(9),_=o(u);t["default"]={mixins:[_["default"]],components:{Group:l["default"],InlineDesc:s["default"]},props:{format:{type:String,"default":"YYYY-MM-DD"},title:{type:String,required:!0},value:{type:String,"default":""},inlineDesc:String,placeholder:String,minYear:Number,maxYear:Number,confirmText:{type:String,"default":"ok"},cancelText:{type:String,"default":"cancel"},yearRow:{type:String,"default":"{value}"},monthRow:{type:String,"default":"{value}"},dayRow:{type:String,"default":"{value}"},hourRow:{type:String,"default":"{value}"},minuteRow:{type:String,"default":"{value}"}},ready:function(){var e=this.uuid;this.$el.setAttribute("id","vux-datetime-"+e),this.render()},computed:{pickerOptions:function(){var e=this,t={trigger:"#vux-datetime-"+this.uuid,format:this.format,value:this.value,output:".vux-datetime-value",confirmText:this.confirmText,cancelText:e.cancelText,yearRow:this.yearRow,monthRow:this.monthRow,dayRow:this.dayRow,hourRow:this.hourRow,minuteRow:this.minuteRow,onConfirm:function(t){e.value=t}};return this.minYear&&(t.minYear=this.minYear),this.maxYear&&(t.maxYear=this.maxYear),t}},methods:{render:function(){this.picker&&this.picker.destroy(),this.picker=new r["default"](this.pickerOptions)}},watch:{value:function(e){this.$emit("on-change",e)}},beforeDestroy:function(){this.picker.destroy()}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,titleColor:String}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n,o){var i=new u["default"](e,{data:t,defaultValue:n,onSelect:o});return i}function r(){g||(g=(0,_.toElement)(d),h.appendChild(g),g.addEventListener("click",function(){c&&c.hide()},!1)),g.style.display="block",setTimeout(function(){g&&(g.style.opacity=.5)},0)}function a(){g&&(g.style.opacity=0,setTimeout(function(){g&&(g.style.display="none")},f))}function l(e){var t=this;t.config={},t.value=e.value||"",(0,_.each)(T,function(n,o){t.config[n]=e[n]||o});var n=t.config.trigger;if(n){var o=t.config.output||n;n=t.trigger=(0,_.getElement)(n),o=t.output=(0,_.getElement)(o),n.addEventListener("click",function(e){e.preventDefault(),t.show(t.value)},!1)}}Object.defineProperty(t,"__esModule",{value:!0});var c,s=n(7),u=o(s),_=n(5),d='<div class="dp-mask"></div>',p='<div class="dp-container">\n  <div class="dp-header">\n    <div class="dp-item dp-left" data-role="cancel">cancel</div>\n    <div class="dp-item dp-center"></div>\n    <div class="dp-item dp-right" data-role="confirm">ok</div>\n  </div>\n  <div class="dp-content">\n    <div class="dp-item" data-role="year"></div>\n    <div class="dp-item" data-role="month"></div>\n    <div class="dp-item" data-role="day"></div>\n    <div class="dp-item" data-role="hour"></div>\n    <div class="dp-item" data-role="minute"></div>\n  </div>\n</div>',f=100,v=300,m={year:["YYYY"],month:["MM","M"],day:["DD","D"],hour:["HH","H"],minute:["mm","m"]},h=document.body,g=null,y=new Date,T={template:p,trigger:null,output:null,currentYear:y.getFullYear(),currentMonth:y.getMonth()+1,minYear:2e3,maxYear:2030,yearRow:"{value}",monthRow:"{value}",dayRow:"{value}",hourRow:"{value}",minuteRow:"{value}",format:"YYYY-MM-DD",value:y.getFullYear()+"-"+(y.getMonth()+1)+"-"+y.getDate(),onSelect:function(){},onConfirm:function(){},onShow:function(){},onHide:function(){},confirmText:"ok",cancelText:"cancel"};l.prototype={_show:function(e){var t=this;t.container.style.display="block",(0,_.each)(m,function(n){t[n+"Scroller"]&&t[n+"Scroller"].select((0,_.trimZero)(e[n]),!1)}),setTimeout(function(){t.container.style["-webkit-transform"]="translateY(0)",t.container.style.transform="translateY(0)"},0)},show:function(e){var t=this,n=t.config;c=t;var o=t.valueMap=(0,_.parseDate)(n.format,e||n.value),a={};if((0,_.each)(m,function(e,t){a[e]=1===t.length?o[t[0]]:o[t[0]]||o[t[1]]}),t.container)t._show(a);else{var l=t.container=(0,_.toElement)(n.template);h.appendChild(l),t.container.style.display="block",l.addEventListener("touchstart",function(e){},!1),(0,_.each)(m,function(e){var o=t.find("[data-role="+e+"]");if(void 0===a[e])return void(0,_.removeElement)(o);var r;r="day"===e?t._makeData(e,(0,_.trimZero)(a.year),(0,_.trimZero)(a.month)):t._makeData(e),t[e+"Scroller"]=i(o,r,(0,_.trimZero)(a[e]),function(o){n.onSelect.call(t,e,o);var i;if(t.dayScroller)if("year"===e){var r=t.monthScroller?t.monthScroller.value:n.currentMonth;i=t.dayScroller.value,t._setDayScroller(o,r,i)}else if("month"===e){var a=t.yearScroller?t.yearScroller.value:n.currentYear;i=t.dayScroller.value,t._setDayScroller(a,o,i)}})}),t.renderText||(t.config.confirmText&&(t.find("[data-role=confirm]").innerText=t.config.confirmText),t.config.cancelText&&(t.find("[data-role=cancel]").innerText=t.config.cancelText),t.renderText=!0),this._show(a),t.find("[data-role=cancel]").addEventListener("click",function(e){e.preventDefault(),t.hide()},!1),t.find("[data-role=confirm]").addEventListener("click",function(e){e.preventDefault(),t.confirm()},!1)}r(),n.onShow.call(t)},_makeData:function(e,t,n){var o,i,r=this.config,a=this.valueMap,l=m[e],c=[];"year"===e?(o=r.minYear,i=r.maxYear):"month"===e?(o=1,i=12):"day"===e?(o=1,i=(0,_.getMaxDay)(t,n)):"hour"===e?(o=0,i=23):"minute"===e&&(o=0,i=59);for(var s=o;i>=s;s++){var u;if("year"===e)u=(0,_.parseRow)(r.yearRow,s);else{var d=a[l[0]]?(0,_.addZero)(s):s;u=(0,_.parseRow)(r[e+"Row"],d)}c.push({name:u,value:s})}return c},_setDayScroller:function(e,t,n){var o=this,r=(0,_.getMaxDay)(e,t);n>r&&(n=r),o.dayScroller.destroy();var a=o.find("[data-role=day]");o.dayScroller=i(a,o._makeData("day",e,t),n,function(e){o.config.onSelect.call(o,"day",e)})},find:function(e){return this.container.querySelector(e)},hide:function(){var e=this;e.container.style.removeProperty("transform"),e.container.style.removeProperty("-webkit-transform"),setTimeout(function(){e.container.style.display="none"},v),a(),e.config.onHide.call(e)},select:function(e,t){this[e+"Scroller"].select(t,!1)},destroy:function(){var e=this;(0,_.removeElement)(g),(0,_.removeElement)(e.container),g=null,e.container=null},getValue:function(){function e(e,t,n){if(e){var i=e.value;t&&(o=o.replace(new RegExp(t,"g"),(0,_.addZero)(i))),n&&(o=o.replace(new RegExp(n,"g"),(0,_.trimZero)(i)))}}var t=this,n=t.config,o=n.format;return(0,_.each)(m,function(n,o){e(t[n+"Scroller"],o[0],o[1])}),o},confirm:function(){var e=this,t=e.getValue();this.value=t,e.config.onConfirm.call(e,t)!==!1&&e.hide()}},t["default"]=l},function(e,t){"use strict";e.exports=function(e,t){var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours()%12===0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},o={0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"};/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"/u661f/u671f":"/u5468":"")+o[e.getDay()+""]));for(var i in n)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return t}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t.call(e[n],n,e[n])===!1)break}function r(e){return e=String(e),e=e?parseFloat(e.replace(/^0+/g,"")):"",e=e||0,e+=""}function a(e){return e=String(e),e.length<2?"0"+e:e}function l(e){return e%100!==0&&e%4===0||e%400===0}function c(e,t){return e=parseFloat(e),t=parseFloat(t),2===t?l(e)?29:28:[4,6,9,11].indexOf(t)>=0?30:31}function s(e,t){return e.replace(/\{value\}/g,t)}function u(e,t){var n=e.split(/[^A-Za-z]+/),o=t.split(/\D+/);if(n.length!==o.length){var i=(0,v["default"])(new Date,e);o=i.split(/\D+/)}for(var r={},a=0;a<n.length;a++)n[a]&&(r[n[a]]=o[a]);return r}function _(e){return"string"==typeof e?document.querySelector(e):e}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function p(e){e&&e.parentNode.removeChild(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.each=i,t.trimZero=r,t.addZero=a,t.isLeapYear=l,t.getMaxDay=c,t.parseRow=s,t.parseDate=u,t.getElement=_,t.toElement=d,t.removeElement=p;var f=n(4),v=o(f)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Date.now||function(){return+new Date},o={},i=1,r=60,a=1e3;t["default"]={requestAnimationFrame:function(){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame;return function(t,n){e(t,n)}}(),stop:function(e){var t=null!=o[e];return t&&(o[e]=null),t},isRunning:function(e){return null!=o[e]},start:function l(e,t,c,s,u,_){var d=this,l=n(),p=l,f=0,v=0,m=i++;if(_||(_=document.body),m%20===0){var h={};for(var g in o)h[g]=!0;o=h}var y=function T(i){var h=i!==!0,g=n();if(!o[m]||t&&!t(m))return o[m]=null,void(c&&c(r-v/((g-l)/a),m,!1));if(h)for(var y=Math.round((g-p)/(a/r))-1,x=0;x<Math.min(y,4);x++)T(!0),v++;s&&(f=(g-l)/s,f>1&&(f=1));var S=u?u(f):f;e(S,g,h)!==!1&&1!==f||!h?h&&(p=g,d.requestAnimationFrame(T,_)):(o[m]=null,c&&c(r-v/((g-l)/a),m,1===f||null==s))};return o[m]=!0,d.requestAnimationFrame(y,_),m}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(6),r=o(i),a=n(8),l='\n<div class="scroller-component" data-role="component">\n  <div class="scroller-mask" data-role="mask"></div>\n  <div class="scroller-indicator" data-role="indicator"></div>\n  <div class="scroller-content" data-role="content"></div>\n</div>\n',c=function(e,t){var n=this;t=t||{},n.options={itemClass:"scroller-item",onSelect:function(){},defaultValue:0,data:[]};for(var o in t)void 0!==t[o]&&(n.options[o]=t[o]);n.__container=(0,a.getElement)(e);var i=document.createElement("div");i.innerHTML=t.template||l;var r=n.__component=i.querySelector("[data-role=component]"),c=n.__content=r.querySelector("[data-role=content]"),s=r.querySelector("[data-role=indicator]"),u=n.options.data,_="";u.length&&u[0].constructor===Object?u.forEach(function(e){_+='<div class="'+n.options.itemClass+'" data-value="'+e.value+'">'+e.name+"</div>"}):u.forEach(function(e){_+='<div class="'+n.options.itemClass+'" data-value="'+e+'">'+e+"</div>"}),c.innerHTML=_,n.__container.appendChild(r),n.__itemHeight=parseInt((0,a.getComputedStyle)(s,"height"),10),n.__callback=t.callback||function(e){c.style.webkitTransform="translate3d(0, "+-e+"px, 0)"};var d=r.getBoundingClientRect();n.__clientTop=d.top+r.clientTop||0,n.__setDimensions(r.clientHeight,c.offsetHeight),0===r.clientHeight&&n.__setDimensions(parseInt((0,a.getComputedStyle)(r,"height"),10),204),n.select(n.options.defaultValue,!1),r.addEventListener("touchstart",function(e){e.target.tagName.match(/input|textarea|select/i)||(e.preventDefault(),n.__doTouchStart(e.touches,e.timeStamp))},!1),r.addEventListener("touchmove",function(e){n.__doTouchMove(e.touches,e.timeStamp)},!1),r.addEventListener("touchend",function(e){n.__doTouchEnd(e.timeStamp)},!1)},s={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,__setDimensions:function(e,t){var n=this;n.__clientHeight=e,n.__contentHeight=t;var o=n.options.data.length,i=Math.round(n.__clientHeight/n.__itemHeight);n.__minScrollTop=-n.__itemHeight*(i/2),n.__maxScrollTop=n.__minScrollTop+o*n.__itemHeight-.1},selectByIndex:function(e,t){var n=this;0>e||e>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+e*n.__itemHeight,n.scrollTo(n.__scrollTop,t),n.__selectItem(n.__content.children[e]))},select:function(e,t){for(var n=this,o=n.__content.children,i=0,r=o.length;r>i;i++)if(o[i].dataset.value===e)return void n.selectByIndex(i,t);n.selectByIndex(0,t)},getValue:function(){return this.value},scrollTo:function(e,t){var n=this;return t=void 0===t?!0:t,n.__isDecelerating&&(r["default"].stop(n.__isDecelerating),n.__isDecelerating=!1),e=Math.round(e/n.__itemHeight)*n.__itemHeight,e=Math.max(Math.min(n.__maxScrollTop,e),n.__minScrollTop),e!==n.__scrollTop&&t?void n.__publish(e,250):(n.__publish(e),void n.__scrollingComplete())},destroy:function(){this.__component.parentNode&&this.__component.parentNode.removeChild(this.__component)},__selectItem:function(e){var t=this,n=t.options.itemClass+"-selected",o=t.__content.querySelector("."+n);o&&o.classList.remove(n),e.classList.add(n),null!==t.value&&(t.__prevValue=t.value),t.value=e.dataset.value},__scrollingComplete:function(){var e=this,t=Math.round((e.__scrollTop-e.__minScrollTop-e.__itemHeight/2)/e.__itemHeight);e.__selectItem(e.__content.children[t]),null!==e.__prevValue&&e.__prevValue!==e.value&&e.options.onSelect(e.value)},__doTouchStart:function(e,t){var n=this;if(null==e.length)throw new Error("Invalid touch list: "+e);if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);n.__interruptedAnimation=!0,n.__isDecelerating&&(r["default"].stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(r["default"].stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var o,i=1===e.length;o=i?e[0].pageY:Math.abs(e[0].pageY+e[1].pageY)/2,n.__initialTouchTop=o,n.__lastTouchTop=o,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollY=!i,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!i,n.__isSingleTouch=i,n.__positions=[]},__doTouchMove:function(e,t,n){var o=this;if(null==e.length)throw new Error("Invalid touch list: "+e);if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(o.__isTracking){var i;i=2===e.length?Math.abs(e[0].pageY+e[1].pageY)/2:e[0].pageY;var r=o.__positions;if(o.__isDragging){var a=i-o.__lastTouchTop,l=o.__scrollTop;if(o.__enableScrollY){l-=a;var c=o.__minScrollTop,s=o.__maxScrollTop;(l>s||c>l)&&(l=l>s?s:c)}r.length>40&&r.splice(0,20),r.push(l,t),o.__publish(l)}else{var u=0,_=5,d=Math.abs(i-o.__initialTouchTop);o.__enableScrollY=d>=u,r.push(o.__scrollTop,t),o.__isDragging=o.__enableScrollY&&d>=_,o.__isDragging&&(o.__interruptedAnimation=!1)}o.__lastTouchTop=i,o.__lastTouchMove=t,o.__lastScale=n}},__doTouchEnd:function(e){var t=this;if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(t.__isTracking){if(t.__isTracking=!1,t.__isDragging&&(t.__isDragging=!1,t.__isSingleTouch&&e-t.__lastTouchMove<=100)){for(var n=t.__positions,o=n.length-1,i=o,r=o;r>0&&n[r]>t.__lastTouchMove-100;r-=2)i=r;if(i!==o){var a=n[o]-n[i],l=t.__scrollTop-n[i-1];t.__decelerationVelocityY=l/a*(1e3/60);var c=4;Math.abs(t.__decelerationVelocityY)>c&&t.__startDeceleration(e)}}t.__isDecelerating||t.scrollTo(t.__scrollTop),t.__positions.length=0}},__publish:function(e,t){var n=this,o=n.__isAnimating;if(o&&(r["default"].stop(o),n.__isAnimating=!1),t){n.__scheduledTop=e;var i=n.__scrollTop,l=e-i,c=function(e,t,o){n.__scrollTop=i+l*e,n.__callback&&n.__callback(n.__scrollTop)},s=function(e){return n.__isAnimating===e},u=function(e,t,o){t===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||o)&&n.__scrollingComplete()};n.__isAnimating=r["default"].start(c,s,u,t,o?a.easeOutCubic:a.easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=e,n.__callback&&n.__callback(e)},__startDeceleration:function(e){var t=this;t.__minDecelerationScrollTop=t.__minScrollTop,t.__maxDecelerationScrollTop=t.__maxScrollTop;var n=function(e,n,o){t.__stepThroughDeceleration(o)},o=.5,i=function(){var e=Math.abs(t.__decelerationVelocityY)>=o;return e||(t.__didDecelerationComplete=!0),e},a=function(e,n,o){return t.__isDecelerating=!1,t.__scrollTop<=t.__minScrollTop||t.__scrollTop>=t.__maxScrollTop?void t.scrollTo(t.__scrollTop):void(t.__didDecelerationComplete&&t.__scrollingComplete())};t.__isDecelerating=r["default"].start(n,i,a)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollTop+t.__decelerationVelocityY,o=Math.max(Math.min(t.__maxDecelerationScrollTop,n),t.__minDecelerationScrollTop);o!==n&&(n=o,t.__decelerationVelocityY=0),Math.abs(t.__decelerationVelocityY)<=1?Math.abs(n%t.__itemHeight)<1&&(t.__decelerationVelocityY=0):t.__decelerationVelocityY*=.95,t.__publish(n)}};for(var u in s)c.prototype[u]=s[u];e.exports=c},function(e,t){"use strict";function n(e){return"string"==typeof e?document.querySelector(e):e}function o(e,t){var n=window.getComputedStyle(e);return n[t]||""}function i(e){return Math.pow(e-1,3)+1}function r(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)}Object.defineProperty(t,"__esModule",{value:!0}),t.getElement=n,t.getComputedStyle=o,t.easeOutCubic=i,t.easeInOutCubic=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),r=o(i);t["default"]={mixins:[r["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports='<a class=weui_cell href=javascript:> <div class="weui_cell_bd weui_cell_primary"> <p>{{title}}</p> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_ft with_arrow vux-datetime-value">{{value || placeholder}}</div> </a>'},function(e,t){e.exports="<div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class=\"{'vux-no-group-title':!title}\"> <slot></slot> </div> </div>"},function(e,t){e.exports="<span class=vux-label-desc><slot></slot></span>"},function(e,t,n){var o,i;n(12),o=n(1),i=n(14),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,n){var o,i;n(11),o=n(2),i=n(15),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,n){var o,i;n(13),i=n(16),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxXButton=e():t.vuxXButton=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:{"default":"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},function(t,e){},function(t,e){t.exports="<button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button>"},function(t,e,o){var n,s;o(2),n=o(1),s=o(3),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});

/***/ },
/* 280 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  if (value == undefined) return '';
	  var date = new Date(value);
	  return value ? date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getDate().toString() : '无';
	};

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n    <div>\n\t\t<group>\n\t\t\t<cell title=\"头像\">\n\t\t\t\t<div slot=\"value\">\n\t\t\t\t\t<img :src=\"avatar || 'http://static.youku.com/user/img/avatar/310/39.jpg' \" @click=\"updateHeadImg\" width=\"33\">\n\t\t\t\t</div>\n\t\t\t</cell>\n\t\t</group>\n\n    <group title=\"小名\">\n        <x-input placeholder=\"请输入姓名\" type=\"text\"  :value.sync=\"nickname\"></x-input>\n    </group>\n\n    <group title=\"性别\">\n        <radio :options=\"radio001\" :value.sync=\"sexValue\" @on-change=\"change\"></radio>\n    </group>\n\n    <group title=\"生日\">\n        <date-time :value.sync=\"birthdayValue\"\n                   placeholder=\"请选择日期\"\n                   format=\"YYYY-MM-DD\"\n                   @on-change=\"changebirth\"\n                   title=\"选择日期\"\n                   year-row=\"{value}年\"\n                   month-row=\"{value}月\"\n                   day-row=\"{value}日\"\n                   confirm-text=\"完成\"\n                   cancel-text=\"取消\">\n\n        </date-time>\n    </group>\n\n    <group>\n        <x-button type=\"primary\" @click=\"updateInfo\">确认</x-button>\n\n\t      <x-button type=\"red\" @click=\"cancel\">取消</x-button>\n    </group>\n    </div>\n";

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<scroller v-ref:scroller lock-x>\n\t<div style=\"padding-bottom: 30px\">\n\t\t<!--个人信息 start-->\n\t\t<group style=\"margin: 0\">\n\n\t\t\t<group-title type=\"success\">个人信息</group-title>\n\n\t\t\t<cell title=\"头像\">\n\n\t\t\t\t<div slot=\"value\">\n\t\t\t\t\t<img :src=\"user.user_avatar\" @click=\"updateHeadImg\" width=\"33\">\n\t\t\t\t</div>\n\n\t\t\t</cell>\n\n\t\t\t<cell title=\"昵称\" is-link\n\t\t\t\t  :value=\"user.user_name\"\n\t\t\t\t  v-link=\"{name:'userUpdate',query: {title:'昵称',value: user.user_name,type: '1'}}\">\n\n\t\t\t</cell>\n\n\t\t\t<cell title=\"性别\"\n\t\t\t\t  is-link\n\t\t\t\t  :value=\"user.sex == 1 ? '男' : '女'\"\n\t\t\t\t  v-link=\"{name:'userUpdate', query: {title: '性别', value: user.sex,type: '2'}}\">\n\n\t\t\t</cell>\n\n\t\t\t<cell title=\"居住地\"\n\t\t\t\t  is-link\n\t\t\t\t  :value=\"user.address\"\n\t\t\t\t  v-link=\"{name: 'userUpdate', query: {title: '居住地', value: user.address,type: '3'}}\">\n\n\t\t\t</cell>\n\n\t\t</group>\n\t\t<!--个人信息 end-->\n\n\t\t<!--孩子信息 start-->\n\t\t<group>\n\n\t\t\t<group-title type=\"glass\">孩子信息</group-title>\n\n\t\t\t<loader v-ref:loader\n\t\t\t        @on-refresh=\"query\">\n\t\t\t</loader>\n\n\t\t\t<card-center type=\"2\" v-for=\"item in items\"\n\t\t\t             :nickname=\"item.nickname\"\n\t\t\t             :birthday=\"item.birthday\"\n\t\t\t             :id=\"item.id\"\n\t\t\t             :gender=\"item.gender\"\n\t\t\t             :avatar=\"item.avatar\"\n\t\t\t             @on-edit=\"edit(item)\">\n\t\t\t</card-center>\n\n\t\t\t<div class=\"mz-center mz-text-center\" @click=\"add\">\n\t\t\t\t<div  class=\"mz-icon mz-icon-addChild mz-text-center\">添加孩子信息</div>\n\t\t\t</div>\n\t\t</group>\n\t\t<!--孩子信息 end-->\n\t</div>\n</scroller>\n</div>\n";

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(284)
	__vue_script__ = __webpack_require__(285)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/sign.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(291)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-14b2a16c/sign.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 284 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _avatarItem = __webpack_require__(44);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _contentWithTitle = __webpack_require__(153);

	var _contentWithTitle2 = _interopRequireDefault(_contentWithTitle);

	var _iconItem = __webpack_require__(48);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _cardWithAvatar = __webpack_require__(157);

	var _cardWithAvatar2 = _interopRequireDefault(_cardWithAvatar);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	var _footerButton = __webpack_require__(165);

	var _footerButton2 = _interopRequireDefault(_footerButton);

	var _index3 = __webpack_require__(286);

	var _index4 = _interopRequireDefault(_index3);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _tabItem = __webpack_require__(287);

	var _tabItem2 = _interopRequireDefault(_tabItem);

	var _HalfItem = __webpack_require__(174);

	var _HalfItem2 = _interopRequireDefault(_HalfItem);

	var _upload = __webpack_require__(178);

	var _upload2 = _interopRequireDefault(_upload);

	var _promise = __webpack_require__(97);

	var _promise2 = _interopRequireDefault(_promise);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _activityAction = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			avatarItem: _avatarItem2.default,
			wrap: _contentWithTitle2.default,
			iconItem: _iconItem2.default,
			card: _cardWithAvatar2.default,
			scroller: _index2.default,
			fButton: _footerButton2.default,
			alert: _index4.default,
			tab: _tabItem2.default,
			halfItem: _HalfItem2.default,
			upload: _upload2.default,
			loading: _loading2.default
		},
		data: function data() {
			return {
				showMessage: false,
				message: '',
				showUpload: false,
				items: [],
				activity: {},
				page: 1
			};
		},
		vuex: {
			actions: {
				setSignInfo: _activityAction.setSignInfo
			}
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
			}
		},
		methods: {
			query: function query() {
				var _self = this;
				this.$refs.loading.OnLoading();
				_promise2.default.all([_activityService2.default.getActivityInfo(this.id), _activityService2.default.getActivitySignList(this.id, this.page)]).then(function (data) {
					_self.activity = data[0].data;
					_self.items = data[1].data.list;
					_self.$refs.loading.OnHide();
					_self.fresh();
					if (data[1].data.page_end === 1) {
						_self.$nextTick(function () {
							_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid);
						});
					}
					_self.page++;
				}).catch(function (err) {
					console.log(err);
					_self.$refs.loading.OnError();
				});
			},

			fresh: function fresh() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			},

			loadMore: function loadMore(uuid) {
				var _self = this;

				_activityService2.default.getActivitySignList(this.id, this.page, this.size).then(function (data) {
					if (data.data.page_end === 1) {
						_self.$broadcast('pullup:disable', uuid);
					}
					_self.page++;
					if (data.data) _self.items = _self.items.concat(data.data.list);
					_self.$broadcast('pullup:reset', uuid);
				}).catch(function () {
					_self.$broadcast('pullup:reset', uuid);
				});
			},

			success: function success() {
				this.activity.signin = 1;
				this.activity.signin_count++;
			},
			sign: function sign() {
				this.$router.go({ name: 'upload' });
			},
			pass: function pass(info) {
				this.setSignInfo(info);
			}
		},
		ready: function ready() {
			this.query();
		}
	};
	// </script>
	// <template>
	// 	<loading v-ref:loading @on-refresh="query"></loading>
	//
	// 	<div v-if="activity.info && items">
	//
	// 		<scroller v-ref:scroller
	// 		          lock-x
	// 		          use-pullup
	// 		          @pullup:loading="loadMore"
	// 		          style="position: absolute;top:0;left: 0;right: 0;bottom: 50px"
	// 		          height="auto" >
	//
	// 			<div class="mz-sign" style="padding-bottom: 10px">
	//
	// 				<tab :title="activity.info.title" @on-fresh="fresh">
	// 					<div class="mz-item-cover">
	// 						<avatar-item :avatar-url="activity.info.sponsor_avatar" >
	// 							<h4>{{activity.info.sponsor_name}}</h4>
	// 							<p>发起了活动: {{activity.info.title}}</p>
	// 							<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>
	// 							<p>报名截至时间:{{activity.info.end_time}}</p>
	// 							<!--<p>每人保证金: 100元</p>-->
	// 						</avatar-item>
	// 					</div>
	//
	// 					<wrap title="活动介绍:" type="success"  >
	// 						<p>{{activity.info.desc || '无活动介绍'}}</p>
	// 					</wrap>
	//
	// 					<wrap title="相关课程:" type="warn">
	// 						<half-item
	// 										v-for="course in activity.info.resource_list"
	// 										:url="course.image_url"
	// 										:title="course.link_text"
	// 										:href="course.link_url">
	// 						</half-item>
	// 					</wrap>
	// 				</tab>
	//
	// 				<div class="mz-content-container" style="margin-top: 10px">
	// 					<icon-item type="people">已报名人数:<span v-if="activity.info">{{activity.info.signup_number}}</span></icon-item>
	// 					<icon-item type="people">今日已打卡人数:{{activity.signin_count}}</icon-item>
	// 					<!--<icon-item type="money">每人保证金</icon-item>-->
	// 					<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
	// 				</div>
	//
	// 				<card   v-for="item in items"
	// 								:head-img-url="item.user_avatar"
	// 								:cover="item.image_url"
	// 								:zan="item.agree_count"
	// 								:comments="item.comment_count"
	// 								:content="item.text"
	// 								:activity-id="item.activity_id"
	// 								:sign-id="item.signin_id"
	// 								:checked="item.my_agree === 1?true:false"
	// 							  @on-loaded="pass(item)"
	// 								:date="item.signin_time"
	// 								:name="item.user_name">
	// 				</card>
	//
	// 			</div>
	// 		</scroller>
	//
	// 		<f-button type="glass"
	// 							:action="activity.signin===1?'今日已打卡': '我要打卡'"
	// 							:disable="activity.signin===1?true: false"
	// 							@on-confirm="sign">
	// 		</f-button>
	//
	// 	</div>
	// </template>
	//
	// <style>
	// 	.mz-item-cover{
	// 		padding: 10px 13px 0 13px;
	// 		background: #fff;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxAlert=o():t.vuxAlert=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(7)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var s=e(8),n=i(s);o["default"]={components:{Dialog:n["default"]},props:{show:Boolean,title:{type:String,required:!0},buttonText:{type:String,"default":"OK"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onHide:function(){this.show=!1}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){},function(t,o){},function(t,o){t.exports='<dialog class=weui_dialog_alert :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog primary" @click=onHide>{{buttonText}}</a> </div> </dialog>'},function(t,o){t.exports='<div class=weui_dialog_alert v-show=show :transition=maskTransition @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)"></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(t,o,e){var i,s;e(3),i=e(1),s=e(5),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,o,e){var i,s;e(4),i=e(2),s=e(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(288)
	__vue_script__ = __webpack_require__(289)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/tabItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(290)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-bda4e1ba/tabItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 288 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div style="margin-bottom: 10px">
	// 		<div class="mz-tab-item-header">
	// 			<span class="mz-tab-item-title">活动:{{title}}</span>
	// 			<span class="mz-absolute-right mz-arrow"  :class="classes" @click="toggle">{{state}}</span>
	// 		</div>
	// 		<div v-if="show">
	// 			<slot></slot>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-tab-item-header{
	// 	background: #72e4dc;
	// 	height: 40px;
	// 	padding: 0  10px;
	// 	line-height: 40px;
	// 	display: flex;
	// 	justify-content:space-between;
	// }
	// .mz-tab-item-title{
	// 	color: #fff;
	// 	font-size: 1.4rem;
	// 	max-width: 70%;
	// 	display: -webkit-box;
	// 	-webkit-box-orient:vertical;
	// 	overflow: hidden;
	// 	word-break: break-all;
	// 	text-overflow:ellipsis;
	// 	-webkit-line-clamp:1;
	// }
	// .mz-arrow{
	// 	position: relative;
	// 	padding-right: 5px;
	// 	margin-right:10px;
	// }
	// .mz-arrow-top:before{
	// 	content:' ';
	// 	position: absolute;
	// 	top: 18px;
	// 	left :100%;
	// 	display: block;
	// 	height: 5px;
	// 	width: 5px;
	// 	color:#333;
	// 	border-bottom: 1px solid #333;
	// 	border-right: 1px solid #333;
	// 	transform: rotate(-135deg);
	// }
	// .mz-arrow-down:before{
	// 	content:' ';
	// 	position: absolute;
	// 	top: 15px;
	// 	left:100%;
	// 	display: block;
	// 	height: 5px;
	// 	width: 5px;
	// 	color:#333;
	// 	border-bottom: 1px solid #333;
	// 	border-right: 1px solid #333;
	// 	transform: rotate(45deg);
	// }
	// </style>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				show: false,
				state: '查看详情',
				type: 'down'
			};
		},
		props: {
			title: String
		},
		computed: {
			classes: function classes() {
				return ['mz-arrow-' + this.type];
			}
		},
		methods: {
			toggle: function toggle() {
				this.show = !this.show;
				this.state = this.show === true ? '收起' : '查看详情';
				this.type = this.show === true ? 'top' : 'down';
				this.$emit('on-fresh');
			}
		}
	};
	// </script>

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"margin-bottom: 10px\">\n\t<div class=\"mz-tab-item-header\">\n\t\t<span class=\"mz-tab-item-title\">活动:{{title}}</span>\n\t\t<span class=\"mz-absolute-right mz-arrow\"  :class=\"classes\" @click=\"toggle\">{{state}}</span>\n\t</div>\n\t<div v-if=\"show\">\n\t\t<slot></slot>\n\t</div>\n</div>\n";

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = "\n<loading v-ref:loading @on-refresh=\"query\"></loading>\n\n<div v-if=\"activity.info && items\">\n\n\t<scroller v-ref:scroller\n\t          lock-x\n\t          use-pullup\n\t          @pullup:loading=\"loadMore\"\n\t          style=\"position: absolute;top:0;left: 0;right: 0;bottom: 50px\"\n\t          height=\"auto\" >\n\n\t\t<div class=\"mz-sign\" style=\"padding-bottom: 10px\">\n\n\t\t\t<tab :title=\"activity.info.title\" @on-fresh=\"fresh\">\n\t\t\t\t<div class=\"mz-item-cover\">\n\t\t\t\t\t<avatar-item :avatar-url=\"activity.info.sponsor_avatar\" >\n\t\t\t\t\t\t<h4>{{activity.info.sponsor_name}}</h4>\n\t\t\t\t\t\t<p>发起了活动: {{activity.info.title}}</p>\n\t\t\t\t\t\t<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>\n\t\t\t\t\t\t<p>报名截至时间:{{activity.info.end_time}}</p>\n\t\t\t\t\t\t<!--<p>每人保证金: 100元</p>-->\n\t\t\t\t\t</avatar-item>\n\t\t\t\t</div>\n\n\t\t\t\t<wrap title=\"活动介绍:\" type=\"success\"  >\n\t\t\t\t\t<p>{{activity.info.desc || '无活动介绍'}}</p>\n\t\t\t\t</wrap>\n\n\t\t\t\t<wrap title=\"相关课程:\" type=\"warn\">\n\t\t\t\t\t<half-item\n\t\t\t\t\t\t\t\t\tv-for=\"course in activity.info.resource_list\"\n\t\t\t\t\t\t\t\t\t:url=\"course.image_url\"\n\t\t\t\t\t\t\t\t\t:title=\"course.link_text\"\n\t\t\t\t\t\t\t\t\t:href=\"course.link_url\">\n\t\t\t\t\t</half-item>\n\t\t\t\t</wrap>\n\t\t\t</tab>\n\n\t\t\t<div class=\"mz-content-container\" style=\"margin-top: 10px\">\n\t\t\t\t<icon-item type=\"people\">已报名人数:<span v-if=\"activity.info\">{{activity.info.signup_number}}</span></icon-item>\n\t\t\t\t<icon-item type=\"people\">今日已打卡人数:{{activity.signin_count}}</icon-item>\n\t\t\t\t<!--<icon-item type=\"money\">每人保证金</icon-item>-->\n\t\t\t\t<!--<icon-item type=\"gift\">剩余2人在坚持,每人可获得100元</icon-item>-->\n\t\t\t</div>\n\n\t\t\t<card   v-for=\"item in items\"\n\t\t\t\t\t\t\t:head-img-url=\"item.user_avatar\"\n\t\t\t\t\t\t\t:cover=\"item.image_url\"\n\t\t\t\t\t\t\t:zan=\"item.agree_count\"\n\t\t\t\t\t\t\t:comments=\"item.comment_count\"\n\t\t\t\t\t\t\t:content=\"item.text\"\n\t\t\t\t\t\t\t:activity-id=\"item.activity_id\"\n\t\t\t\t\t\t\t:sign-id=\"item.signin_id\"\n\t\t\t\t\t\t\t:checked=\"item.my_agree === 1?true:false\"\n\t\t\t\t\t\t  @on-loaded=\"pass(item)\"\n\t\t\t\t\t\t\t:date=\"item.signin_time\"\n\t\t\t\t\t\t\t:name=\"item.user_name\">\n\t\t\t</card>\n\n\t\t</div>\n\t</scroller>\n\n\t<f-button type=\"glass\"\n\t\t\t\t\t\t:action=\"activity.signin===1?'今日已打卡': '我要打卡'\"\n\t\t\t\t\t\t:disable=\"activity.signin===1?true: false\"\n\t\t\t\t\t\t@on-confirm=\"sign\">\n\t</f-button>\n\n</div>\n";

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(293)
	__vue_script__ = __webpack_require__(294)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/activityTimeline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(299)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-55834864/activityTimeline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 293 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _timeline = __webpack_require__(295);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _tabItem = __webpack_require__(287);

	var _tabItem2 = _interopRequireDefault(_tabItem);

	var _avatarItem = __webpack_require__(44);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _contentWithTitle = __webpack_require__(153);

	var _contentWithTitle2 = _interopRequireDefault(_contentWithTitle);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	var _HalfItem = __webpack_require__(174);

	var _HalfItem2 = _interopRequireDefault(_HalfItem);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _promise = __webpack_require__(97);

	var _promise2 = _interopRequireDefault(_promise);

	var _activityAction = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	// 	<loading v-ref:loading @on-refresh="query"></loading>
	//
	// 	<scroller v-ref:scroller lock-x
	// 	          use-pullup
	// 	          :pullup="disable"
	// 	          @pullup:loading="more"
	// 						 v-if="activity.info">
	//
	//
	//
	// 		<div style="padding-bottom: 10px;height: 100%">
	// 			<div >
	// 				<tab :title="activity.info.title" @on-fresh="fresh">
	// 					<div style="background: #fff;padding: 10px 15px">
	// 						<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg" >
	// 							<h4>{{activity.info.sponsor_name}}</h4>
	// 							<p>发起了活动: {{activity.info.title}}</p>
	// 							<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>
	// 							<p>报名截至时间:{{activity.info.end_time}}</p>
	// 							<!--<p>每人保证金: 100元</p>-->
	// 						</avatar-item>
	// 					</div>
	// 					<wrap title="活动介绍:" type="success"  >
	// 						<p>{{activity.info.desc | newLine}}</p>
	// 					</wrap>
	//
	// 					<wrap title="相关课程:" type="warn">
	// 						<half-item
	// 										v-for="course in activity.info.resource_list"
	// 										:url="course.image_url"
	// 										:title="course.link_text">
	// 						</half-item>
	// 					</wrap>
	// 				</tab>
	//
	// 				<timeline v-for="item in items"
	// 				          :title="item.text"
	// 									:url="item.image_url"
	// 									:zan="item.agree_count"
	// 									:comments="item.comment_count"
	// 									:sign-id="item.signin_id"
	// 									:activity-id="item.activity_id"
	// 									:checked="item.my_agree===1?true:false"
	// 									:date="item.signin_time"
	// 									@on-loaded="pass(item)">
	//
	// 				</timeline>
	// 			</div>
	// 	  </div>
	// 	</scroller>
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			timeline: _timeline2.default,
			tab: _tabItem2.default,
			avatarItem: _avatarItem2.default,
			wrap: _contentWithTitle2.default,
			scroller: _index2.default,
			halfItem: _HalfItem2.default,
			loading: _loading2.default
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
			}
		},
		vuex: {
			actions: {
				setSignInfo: _activityAction.setSignInfo
			}
		},
		data: function data() {
			return {
				activity: {},
				items: [],
				page: 1,
				size: 20
			};
		},
		methods: {
			fresh: function fresh() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			},
			query: function query() {
				var _self = this;
				this.$refs.loading.OnLoading();
				_promise2.default.all([_activityService2.default.getActivityCompletedInfo(this.id), _activityService2.default.getActivityTimeLine(this.id, this.page, this.size)]).then(function (data) {
					_self.$refs.loading.OnHide();
					_self.activity = data[0].data;
					_self.items = data[1].data.list;
					if (data[1].data.page_end === 1) {
						_self.$nextTick(function () {
							_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid);
						});
					}
				}).catch(function (err) {
					_self.$refs.loading.OnError();
				});
			},

			more: function more(uuid) {
				var _self = this;
				this.page++;
				_activityService2.default.getActivityTimeLine(this.id, this.page, this.size).then(function (data) {
					if (data.data.page_end === 1) {
						_self.$broadcast('pullup:disable', _self.$refs.scroller.uuid);
					}
					if (data.data) _self.items = _self.items.concat(data.data.list);
					_self.$broadcast('pullup:reset', uuid);
				});
			},

			pass: function pass(info) {
				this.setSignInfo(info);
			}
		},
		ready: function ready() {
			this.query();
		},
		watch: {
			items: function items() {
				this.fresh();
			}
		}
	};
	// </script>

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(296)
	__vue_script__ = __webpack_require__(297)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/timeline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(298)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2d883bb5/timeline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 296 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _commentItem = __webpack_require__(129);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	var _Image = __webpack_require__(140);

	var _Image2 = _interopRequireDefault(_Image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="mz-timeline-box">
	// 		<div>
	// 			<span class="mz-label-time mz-text-center" v-html="date.replace(' ','</br>')"></span>
	// 		</div>
	// 		<div class="mz-timeline-card">
	// 			<p v-html="title| newLine"></p>
	// 			<image-item :src="url"></image-item>
	// 			<comment :zan="zan"
	// 			         :comments="comments"
	// 			         :activity-id="activityId"
	// 			         :sign-id="signId"
	// 							 :checked="checked"
	// 								@on-loaded="loaded">
	// 			</comment>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-timeline-box{
	// 	background: #fff;
	// 	position:relative;
	// 	padding: 0 10px ;
	// 	display: flex;
	// }
	// .mz-timeline-card{
	// 	padding: 10px 0  10px 15px;
	// 	flex:1;
	// }
	// .mz-timeline-box:before{
	// 	content: '';
	// 	position: absolute;
	// 	top:  0;
	// 	bottom: 0;
	// 	left: 50px;
	// 	width: 1px;
	// 	background: #72e4dc;
	// }
	// .mz-label-time{
	// 	z-index:99;
	// 	background: #fff;
	// 	width: 80px;
	// 	display: inline-block;
	// 	word-break: break-all;
	// 	position: relative;
	// }
	// .mz-timeline-card h4{
	// 	font-size: 1.6rem;
	// }
	//
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			comment: _commentItem2.default,
			imageItem: _Image2.default
		},
		props: {
			title: String,
			date: String,
			url: String,
			zan: Number,
			comments: Number,
			signId: Number,
			activityId: Number,
			checked: Boolean
		},
		methods: {
			loaded: function loaded() {
				this.$emit('on-loaded');
			}
		}
	};
	// </script>

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-timeline-box\">\n\t<div>\n\t\t<span class=\"mz-label-time mz-text-center\" v-html=\"date.replace(' ','</br>')\"></span>\n\t</div>\n\t<div class=\"mz-timeline-card\">\n\t\t<p v-html=\"title| newLine\"></p>\n\t\t<image-item :src=\"url\"></image-item>\n\t\t<comment :zan=\"zan\"\n\t\t         :comments=\"comments\"\n\t\t         :activity-id=\"activityId\"\n\t\t         :sign-id=\"signId\"\n\t\t\t\t\t\t :checked=\"checked\"\n\t\t\t\t\t\t\t@on-loaded=\"loaded\">\n\t\t</comment>\n\t</div>\n</div>\n";

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "\n\n<loading v-ref:loading @on-refresh=\"query\"></loading>\n\n<scroller v-ref:scroller lock-x\n          use-pullup\n          :pullup=\"disable\"\n          @pullup:loading=\"more\"\n\t\t\t\t\t v-if=\"activity.info\">\n\n\n\n\t<div style=\"padding-bottom: 10px;height: 100%\">\n\t\t<div >\n\t\t\t<tab :title=\"activity.info.title\" @on-fresh=\"fresh\">\n\t\t\t\t<div style=\"background: #fff;padding: 10px 15px\">\n\t\t\t\t\t<avatar-item avatar-url=\"http://static.youku.com/user/img/avatar/310/39.jpg\" >\n\t\t\t\t\t\t<h4>{{activity.info.sponsor_name}}</h4>\n\t\t\t\t\t\t<p>发起了活动: {{activity.info.title}}</p>\n\t\t\t\t\t\t<p>活动时间: {{activity.info.start_time}} - {{activity.info.end_time}}</p>\n\t\t\t\t\t\t<p>报名截至时间:{{activity.info.end_time}}</p>\n\t\t\t\t\t\t<!--<p>每人保证金: 100元</p>-->\n\t\t\t\t\t</avatar-item>\n\t\t\t\t</div>\n\t\t\t\t<wrap title=\"活动介绍:\" type=\"success\"  >\n\t\t\t\t\t<p>{{activity.info.desc | newLine}}</p>\n\t\t\t\t</wrap>\n\n\t\t\t\t<wrap title=\"相关课程:\" type=\"warn\">\n\t\t\t\t\t<half-item\n\t\t\t\t\t\t\t\t\tv-for=\"course in activity.info.resource_list\"\n\t\t\t\t\t\t\t\t\t:url=\"course.image_url\"\n\t\t\t\t\t\t\t\t\t:title=\"course.link_text\">\n\t\t\t\t\t</half-item>\n\t\t\t\t</wrap>\n\t\t\t</tab>\n\n\t\t\t<timeline v-for=\"item in items\"\n\t\t\t          :title=\"item.text\"\n\t\t\t\t\t\t\t\t:url=\"item.image_url\"\n\t\t\t\t\t\t\t\t:zan=\"item.agree_count\"\n\t\t\t\t\t\t\t\t:comments=\"item.comment_count\"\n\t\t\t\t\t\t\t\t:sign-id=\"item.signin_id\"\n\t\t\t\t\t\t\t\t:activity-id=\"item.activity_id\"\n\t\t\t\t\t\t\t\t:checked=\"item.my_agree===1?true:false\"\n\t\t\t\t\t\t\t\t:date=\"item.signin_time\"\n\t\t\t\t\t\t\t\t@on-loaded=\"pass(item)\">\n\n\t\t\t</timeline>\n\t\t</div>\n  </div>\n</scroller>\n";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(301)
	__vue_script__ = __webpack_require__(302)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/alterInfo/userInfoModify.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(308)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5f228315/userInfoModify.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 301 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(279);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(276);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(261);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(137);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(277);

	var _index10 = _interopRequireDefault(_index9);

	var _index11 = __webpack_require__(303);

	var _index12 = _interopRequireDefault(_index11);

	var _list = __webpack_require__(304);

	var _list2 = _interopRequireDefault(_list);

	var _userAction = __webpack_require__(254);

	var _userGetter = __webpack_require__(256);

	var _value2name = __webpack_require__(305);

	var _value2name2 = _interopRequireDefault(_value2name);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div>
	//     <group>
	//         <x-input :title="title"
	//                  type="text"
	//                  :value.sync="value"
	//                  v-if="type == 1">
	//
	//         </x-input>
	//
	//         <radio v-if="type == 2"
	//                :options="radio001"
	//                :value.sync="value"
	//                @on-change="change">
	//
	//         </radio>
	//
	//         <address v-if="type == 3"
	//                  :title="title"
	//                  :value.sync="value"
	//                  raw-value
	//                  :list="addressData"
	//                  hide-district>
	//
	//         </address>
	//     </group>
	//
	//     <group>
	//
	//         <x-button type="primary"
	//                   @click="update"
	//         >
	//             确认修改
	//         </x-button>
	//
	//     </group>
	//
	//     <loading :show="show"></loading>
	//
	//     <toast type="text" :show.sync="show1" width="20em">请求失败，请重试</toast>
	//     </div>
	// </template>
	// <style>
	//
	// </style>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      type: Number,
	      radio001: ['男', '女'],
	      title: '',
	      value: '',
	      sex: Number,
	      obj: {},
	      addressData: _list2.default
	    };
	  },

	  components: {
	    xButton: _index2.default,
	    Group: _index6.default,
	    xInput: _index4.default,
	    Radio: _index10.default,
	    Address: _index12.default,
	    toast: _index8.default
	  },
	  route: {
	    data: function data(_ref) {
	      var _ref$to$query = _ref.to.query;
	      var title = _ref$to$query.title;
	      var value = _ref$to$query.value;
	      var type = _ref$to$query.type;

	      this.title = title;
	      this.value = value;
	      this.type = type;
	      //判断type，进来的是性别，转换为0,1
	      if (type == 2) {
	        this.sex = value;
	        this.value = value == 1 ? '男' : '女';
	      } else if (type == 3) {
	        this.value = value.split(' ');
	      }
	    }
	  },
	  vuex: {
	    actions: {
	      alterUserInfoFirstQuery: _userAction.alterUserInfoFirstQuery,
	      alterUserInfoSecondQuery: _userAction.alterUserInfoSecondQuery
	    },
	    getters: {
	      user: _userGetter.getUserUpInfo
	    }
	  },
	  methods: {
	    update: function update() {
	      if (this.type == 1) {
	        if (this.value.length > 16) {
	          this.$dispatch('error', '姓名长度不能超过16个字符');
	          return;
	        }
	      }
	      var _self = this;
	      this.$dispatch('loading');
	      //用于修改头像和昵称
	      if (this.type == 1 || this.type == 4) {
	        if (this.type == 1) {
	          this.obj.nickname = this.value;
	        } else {
	          this.obj.headImgUrl = this.value;
	        }
	        _self.alterUserInfoFirstQuery(this.obj).then(function () {
	          //判断类型修改本地数据
	          if (_self.type == 1) {
	            _self.user.user_name = _self.value;
	          } else {
	            _self.user.user_avatar = _self.value;
	          }
	          _self.$dispatch('loading');
	          _self.$dispatch('success', '修改成功');
	          window.history.back();
	        }).catch(function (err) {
	          _self.$dispatch('loading');
	          if (err.status === 400) {
	            _self.$dispatch('error', err.data.error_message);
	          } else if (err.status === 0) {
	            _self.$dispatch('error', '请求超时请重试');
	          } else {
	            _self.$dispatch('error', '内容错误请重试');
	          }
	        });
	      }
	      //用于修改地址和性别
	      else {
	          if (this.type == 2) {
	            this.obj.gender = this.sex;
	          } else {
	            this.value1 = (0, _value2name2.default)(this.value, _list2.default);
	            this.obj.location = this.value1.toString();
	          }
	          _self.alterUserInfoSecondQuery(this.obj).then(function () {
	            _self.$dispatch('loading');
	            _self.$dispatch('success', '修改成功');
	            //判断修改本地数据
	            if (_self.type == 2) {
	              _self.user.sex = _self.sex;
	            } else {
	              _self.user.address = _self.obj.location;
	            }
	            window.history.back();
	          }).catch(function (err) {
	            _self.$dispatch('loading');
	            if (err.status === 400) {
	              _self.$dispatch('error', err.data.error_message);
	            } else if (err.status === 0) {
	              _self.$dispatch('error', '请求超时请重试');
	            } else {
	              _self.$dispatch('error', '内容错误请重试');
	            }
	          });
	        }
	    },
	    change: function change(value) {
	      this.sex = value == '男' ? '1' : '0';
	    }
	  }
	};
	// </script>

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxAddress=e():t.vuxAddress=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(112)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(9),r=n(32),i=n(25),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return u(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(76),r=n(15);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(4),r=n(13);t.exports=n(2)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(23)("wks"),r=n(14),i=n(1).Symbol,u="function"==typeof i,s=t.exports=function(t){return o[t]||(o[t]=u&&i[t]||(u?i:r)("Symbol."+t))};s.store=o},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(11);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(37),r=n(16);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(1),r=n(8),i=n(73),u=n(6),s="prototype",a=function(t,e,n){var l,c,f,p=t&a.F,d=t&a.G,h=t&a.S,_=t&a.P,v=t&a.B,m=t&a.W,y=d?r:r[e]||(r[e]={}),g=y[s],x=d?o:h?o[e]:(o[e]||{})[s];d&&(n=e);for(l in n)c=!p&&x&&void 0!==x[l],c&&l in y||(f=c?x[l]:n[l],y[l]=d&&"function"!=typeof x[l]?n[l]:v&&c?i(f,o):m&&x[l]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[s]=t[s],e}(f):_&&"function"==typeof f?i(Function.call,f):f,_&&((y.virtual||(y.virtual={}))[l]=f,t&a.R&&g&&!g[l]&&u(g,l,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(4).f,r=n(3),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(23)("keys"),r=n(14);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(1),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(11);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(1),r=n(8),i=n(19),u=n(27),s=n(4).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){"use strict";function n(t,e,n){if("function"==typeof Array.prototype.find)return t.find(e,n);n=n||this;var o,r=t.length;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(o=0;r>o;o++)if(e.call(n,t[o],o,t))return t[o]}t.exports=n},function(t,e){t.exports=function(t,e){if(t.map)return t.map(e);for(var o=[],r=0;r<t.length;r++){var i=t[r];n.call(t,r)&&o.push(e(i,r,t))}return o};var n=Object.prototype.hasOwnProperty},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(11),r=n(1).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){t.exports=!n(2)&&!n(10)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var o=n(19),r=n(17),i=n(38),u=n(6),s=n(3),a=n(18),l=n(78),c=n(21),f=n(85),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",_="keys",v="values",m=function(){return this};t.exports=function(t,e,n,y,g,x,b){l(n,e,y);var w,S,T,O=function(t){if(!d&&t in C)return C[t];switch(t){case _:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",M=g==v,j=!1,C=t.prototype,D=C[p]||C[h]||g&&C[g],P=D||O(g),E=g?M?O("entries"):P:void 0,A="Array"==e?C.entries||D:D;if(A&&(T=f(A.call(new t)),T!==Object.prototype&&(c(T,k,!0),o||s(T,p)||u(T,p,m))),M&&D&&D.name!==v&&(j=!0,P=function(){return D.call(this)}),o&&!b||!d&&!j&&C[p]||u(C,p,P),a[e]=P,a[k]=m,g)if(w={values:M?P:O(v),keys:x?P:O(_),entries:E},b)for(S in w)S in C||i(C,S,w[S]);else r(r.P+r.F*(d||j),e,w);return w}},function(t,e,n){var o=n(9),r=n(82),i=n(16),u=n(22)("IE_PROTO"),s=function(){},a="prototype",l=function(){var t,e=n(31)("iframe"),o=i.length,r=">";for(e.style.display="none",n(75).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+r),t.close(),l=t.F;o--;)delete l[a][i[o]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[a]=o(t),n=new s,s[a]=null,n[u]=t):n=l(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(37),r=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(3),r=n(5),i=n(72)(!1),u=n(22)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),a=0,l=[];for(n in s)n!=u&&o(s,n)&&l.push(n);for(;e.length>a;)o(s,n=e[a++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){t.exports=n(6)},function(t,e,n){var o,r;o=n(44),r=n(106),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(99),o=n(45),r=n(107),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e){t.exports=function(t,e,o){if(t.filter)return t.filter(e,o);if(void 0===t||null===t)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var r=[],i=0;i<t.length;i++)if(n.call(t,i)){var u=t[i];e.call(o,u,i,t)&&r.push(u)}return r};var n=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(55),i=o(r),u=n(116),s=o(u);e["default"]={components:{PopupPicker:s["default"]},props:{title:{type:String,required:!0},value:{type:Array,"default":function(){return[]}},rawValue:Boolean,list:{type:Array,required:!0},inlineDesc:String,placeholder:String,hideDistrict:Boolean},beforeCompile:function(){if(this.value.length&&this.rawValue){var t=(0,i["default"])(this.value,this.list);/__/.test(t)?(console.error("Vux: Wrong address value",this.value),this.value=[]):this.value=t.split(" ")}},methods:{emitHide:function(t){this.$emit("on-hide",t)}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(114),i=o(r),u=n(58);e["default"]={components:{InlineDesc:i["default"]},props:{title:String,value:String,isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,u.go)(this.link,this.$router)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e["default"]={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(t){return"number"==typeof t?1>t?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(t[e]=this.$parent.gutter+"px",this.span)for(var o=0;o<n.length;o++)t[n[o]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),i=o(r),u=n(40),s=o(u),a=n(39),l=o(a),c=n(50),f=o(c);e["default"]={components:{Flexbox:s["default"],FlexboxItem:l["default"]},created:function(){if(0!==this.columns){var t=this.columns;this.store=new f["default"](this.data,t),this.data=this.store.getColumns(this.value)}},ready:function(){var t=this;this.$nextTick(function(){t.render(t.data,t.value)})},props:{data:{type:Array},columns:{type:Number,"default":0},value:{type:Array,twoWay:!0},itemClass:{type:String,"default":"scroller-item"}},methods:{getId:function(t){return"#vux-picker-"+this.uuid+"-"+t},render:function(t,e){this.count=this.data.length;var n=this;if(t&&t.length){var o=this.data.length;if(e.length<o)for(var r=0;o>r;r++)n.value.$set(r,t[r][0].value||t[r][0]);for(var u=function(o){n.scroller[o]&&n.scroller[o].destroy(),n.scroller[o]=new i["default"](n.getId(o),{data:t[o],defaultValue:e[o]||t[o][0].value,itemClass:n.item_class,onSelect:function(t){n.value.$set(o,t),n.$emit("on-change",n.getValue()),0!==n.columns&&n.renderChain(o+1)}}),n.value&&n.scroller[o].select(e[o])},s=0;s<t.length;s++)u(s)}},renderChain:function(t){if(0!==this.columns&&!(t>this.count-1)){var e=this,n=this.getId(t);this.scroller[t].destroy();var o=this.store.getChildren(e.getValue()[t-1]);this.scroller[t]=new i["default"](n,{data:o,itemClass:e.item_class,onSelect:function(n){e.value.$set(t,n),e.$emit("on-change",e.getValue()),e.renderChain(t+1)}}),this.value.$set(t,o[0].value),this.renderChain(t+1)}},getValue:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(this.scroller[e].value);return t}},data:function(){return{scroller:[],count:0,uuid:Math.random().toString(36).substring(3,8)}},watch:{value:function(t,e){if(0!==this.columns)t!==e&&(this.data=this.store.getColumns(t),this.$nextTick(function(){this.render(this.data,t)}));else for(var n=0;n<t.length;n++)this.scroller[n].value!==t[n]&&this.scroller[n].select(t[n])},data:function(t){var e=this;if("[object Array]"===Object.prototype.toString.call(t[0]))this.$nextTick(function(){e.render(t,e.value),e.$nextTick(function(){e.$emit("on-change",e.getValue())})});else if(0!==this.columns){var n=this.columns;this.store=new f["default"](t,n),this.data=this.store.getColumns(this.value)}}},beforeDestroy:function(){for(var t=0;t<this.count;t++)this.scroller[t].destroy(),this.scroller[t]=null}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(59),i=o(r),u=n(115),s=o(u),a=n(113),l=o(a),c=n(117),f=o(c),p=n(40),d=o(p),h=n(39),_=o(h),v=n(54),m=o(v),y=n(56),g=o(y),x=n(57),b=o(x),w=function(t){return JSON.parse((0,i["default"])(t))};e["default"]={mixins:[b["default"]],components:{Picker:s["default"],Cell:l["default"],Popup:f["default"],Flexbox:d["default"],FlexboxItem:_["default"]},filters:{array2string:m["default"],value2name:g["default"]},props:{title:String,data:{type:Array,"default":function(){return[]}},placeholder:String,columns:{type:Number,"default":0},value:{type:Array,"default":function(){return[]}},showName:Boolean,inlineDesc:String},methods:{onClick:function(){this.show=!0},onHide:function(t){this.show=!1,t&&(this.closeType=!0,this.value=w(this.tempValue)),t||(this.closeType=!1,this.tempValue=w(this.value))},onPopupHide:function(t){this.tempValue=w(this.value),this.$emit("on-hide",this.closeType)},onPickerChange:function(t){this.value=w(t)}},watch:{value:function(t){(0,i["default"])(t)!==(0,i["default"])(this.tempValue)&&(this.tempValue=w(t))}},data:function(){return{show:!1,tempValue:w(this.value),closeType:!1}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(53),i=o(r);e["default"]={props:{show:{type:Boolean,twoWay:!0},height:{type:String,"default":"auto"},hideOnBlur:{type:Boolean,"default":!0}},ready:function(){var t=this;this.popup=new i["default"]({container:t.$el,innerHTML:"",hideOnBlur:t.hideOnBlur,onOpen:function(e){t.fixSafariOverflowScrolling("auto"),t.show=!0},onClose:function(e){t.fixSafariOverflowScrolling("touch"),t.show=!1}}),this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling")},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var e=0;e<this.$overflowScrollingList.length;e++)this.$overflowScrollingList[e].style.webkitOverflowScrolling=t}},data:function(){return{hasFirstShow:!1}},watch:{show:function(t){t?(this.popup.show(),this.$emit("on-show"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1))}},beforeDestroy:function(){this.popup.destroy()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Date.now||function(){return+new Date},o={},r=1,i=60,u=1e3;e["default"]={requestAnimationFrame:function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame;return function(e,n){t(e,n)}}(),stop:function(t){var e=null!=o[t];return e&&(o[t]=null),e},isRunning:function(t){return null!=o[t]},start:function s(t,e,a,l,c,f){var p=this,s=n(),d=s,h=0,_=0,v=r++;if(f||(f=document.body),v%20===0){var m={};for(var y in o)m[y]=!0;o=m}var g=function x(r){var m=r!==!0,y=n();if(!o[v]||e&&!e(v))return o[v]=null,void(a&&a(i-_/((y-s)/u),v,!1));if(m)for(var g=Math.round((y-d)/(u/i))-1,b=0;b<Math.min(g,4);b++)x(!0),_++;l&&(h=(y-s)/l,h>1&&(h=1));var w=c?c(h):h;t(w,y,m)!==!1&&1!==h||!m?m&&(d=y,p.requestAnimationFrame(x,f)):(o[v]=null,a&&a(i-_/((y-s)/u),v,1===h||null==l))};return o[v]=!0,p.requestAnimationFrame(g,f),v}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(63),i=o(r),u=n(64),s=o(u),a=n(41),l=o(a),c=function(){function t(e,n){(0,i["default"])(this,t),this.data=e,this.count=n}return(0,s["default"])(t,[{key:"getChildren",value:function(t){return(0,l["default"])(this.data,function(e){return e.parent===t})}},{key:"getFirstColumn",value:function(){return(0,l["default"])(this.data,function(t){return!t.parent||0===t.parent})}},{key:"getColumns",value:function(t){for(var e=[],n=0;n<this.count;n++)if(0===n)e.push(this.getFirstColumn());else if(t[n])e.push(this.getChildren(t[n-1]));else{var o=e[n-1][0].value;e.push(this.getChildren(o))}return e}}]),t}();e["default"]=c},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var r=n(49),i=o(r),u=n(52),s='\n<div class="scroller-component" data-role="component">\n  <div class="scroller-mask" data-role="mask"></div>\n  <div class="scroller-indicator" data-role="indicator"></div>\n  <div class="scroller-content" data-role="content"></div>\n</div>\n',a=function(t,e){var n=this;e=e||{},n.options={itemClass:"scroller-item",onSelect:function(){},defaultValue:0,data:[]};for(var o in e)void 0!==e[o]&&(n.options[o]=e[o]);n.__container=(0,u.getElement)(t);var r=document.createElement("div");r.innerHTML=e.template||s;var i=n.__component=r.querySelector("[data-role=component]"),a=n.__content=i.querySelector("[data-role=content]"),l=i.querySelector("[data-role=indicator]"),c=n.options.data,f="";c.length&&c[0].constructor===Object?c.forEach(function(t){f+='<div class="'+n.options.itemClass+'" data-value="'+t.value+'">'+t.name+"</div>"}):c.forEach(function(t){f+='<div class="'+n.options.itemClass+'" data-value="'+t+'">'+t+"</div>"}),a.innerHTML=f,n.__container.appendChild(i),n.__itemHeight=parseInt((0,u.getComputedStyle)(l,"height"),10),n.__callback=e.callback||function(t){a.style.webkitTransform="translate3d(0, "+-t+"px, 0)"};var p=i.getBoundingClientRect();n.__clientTop=p.top+i.clientTop||0,n.__setDimensions(i.clientHeight,a.offsetHeight),0===i.clientHeight&&n.__setDimensions(parseInt((0,u.getComputedStyle)(i,"height"),10),204),n.select(n.options.defaultValue,!1),i.addEventListener("touchstart",function(t){t.target.tagName.match(/input|textarea|select/i)||(t.preventDefault(),n.__doTouchStart(t.touches,t.timeStamp))},!1),i.addEventListener("touchmove",function(t){n.__doTouchMove(t.touches,t.timeStamp)},!1),i.addEventListener("touchend",function(t){n.__doTouchEnd(t.timeStamp)},!1)},l={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,__setDimensions:function(t,e){var n=this;n.__clientHeight=t,n.__contentHeight=e;var o=n.options.data.length,r=Math.round(n.__clientHeight/n.__itemHeight);n.__minScrollTop=-n.__itemHeight*(r/2),n.__maxScrollTop=n.__minScrollTop+o*n.__itemHeight-.1},selectByIndex:function(t,e){var n=this;0>t||t>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+t*n.__itemHeight,n.scrollTo(n.__scrollTop,e),n.__selectItem(n.__content.children[t]))},select:function(t,e){for(var n=this,o=n.__content.children,r=0,i=o.length;i>r;r++)if(o[r].dataset.value===t)return void n.selectByIndex(r,e);n.selectByIndex(0,e)},getValue:function(){return this.value},scrollTo:function(t,e){var n=this;return e=void 0===e?!0:e,n.__isDecelerating&&(i["default"].stop(n.__isDecelerating),n.__isDecelerating=!1),t=Math.round(t/n.__itemHeight)*n.__itemHeight,t=Math.max(Math.min(n.__maxScrollTop,t),n.__minScrollTop),t!==n.__scrollTop&&e?void n.__publish(t,250):(n.__publish(t),void n.__scrollingComplete())},destroy:function(){this.__component.parentNode&&this.__component.parentNode.removeChild(this.__component)},__selectItem:function(t){var e=this,n=e.options.itemClass+"-selected",o=e.__content.querySelector("."+n);o&&o.classList.remove(n),t.classList.add(n),null!==e.value&&(e.__prevValue=e.value),e.value=t.dataset.value},__scrollingComplete:function(){var t=this,e=Math.round((t.__scrollTop-t.__minScrollTop-t.__itemHeight/2)/t.__itemHeight);t.__selectItem(t.__content.children[e]),null!==t.__prevValue&&t.__prevValue!==t.value&&t.options.onSelect(t.value)},__doTouchStart:function(t,e){var n=this;if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);n.__interruptedAnimation=!0,n.__isDecelerating&&(i["default"].stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(i["default"].stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var o,r=1===t.length;o=r?t[0].pageY:Math.abs(t[0].pageY+t[1].pageY)/2,n.__initialTouchTop=o,n.__lastTouchTop=o,n.__lastTouchMove=e,n.__lastScale=1,n.__enableScrollY=!r,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!r,n.__isSingleTouch=r,n.__positions=[]},__doTouchMove:function(t,e,n){var o=this;if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(o.__isTracking){var r;r=2===t.length?Math.abs(t[0].pageY+t[1].pageY)/2:t[0].pageY;var i=o.__positions;if(o.__isDragging){var u=r-o.__lastTouchTop,s=o.__scrollTop;if(o.__enableScrollY){s-=u;var a=o.__minScrollTop,l=o.__maxScrollTop;(s>l||a>s)&&(s=s>l?l:a)}i.length>40&&i.splice(0,20),i.push(s,e),o.__publish(s)}else{var c=0,f=5,p=Math.abs(r-o.__initialTouchTop);o.__enableScrollY=p>=c,i.push(o.__scrollTop,e),o.__isDragging=o.__enableScrollY&&p>=f,o.__isDragging&&(o.__interruptedAnimation=!1)}o.__lastTouchTop=r,o.__lastTouchMove=e,o.__lastScale=n}},__doTouchEnd:function(t){var e=this;if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging&&(e.__isDragging=!1,e.__isSingleTouch&&t-e.__lastTouchMove<=100)){for(var n=e.__positions,o=n.length-1,r=o,i=o;i>0&&n[i]>e.__lastTouchMove-100;i-=2)r=i;if(r!==o){var u=n[o]-n[r],s=e.__scrollTop-n[r-1];e.__decelerationVelocityY=s/u*(1e3/60);var a=4;Math.abs(e.__decelerationVelocityY)>a&&e.__startDeceleration(t)}}e.__isDecelerating||e.scrollTo(e.__scrollTop),e.__positions.length=0}},__publish:function(t,e){var n=this,o=n.__isAnimating;if(o&&(i["default"].stop(o),n.__isAnimating=!1),e){n.__scheduledTop=t;var r=n.__scrollTop,s=t-r,a=function(t,e,o){n.__scrollTop=r+s*t,n.__callback&&n.__callback(n.__scrollTop)},l=function(t){return n.__isAnimating===t},c=function(t,e,o){e===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||o)&&n.__scrollingComplete()};n.__isAnimating=i["default"].start(a,l,c,e,o?u.easeOutCubic:u.easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=t,n.__callback&&n.__callback(t)},__startDeceleration:function(t){var e=this;e.__minDecelerationScrollTop=e.__minScrollTop,e.__maxDecelerationScrollTop=e.__maxScrollTop;var n=function(t,n,o){e.__stepThroughDeceleration(o)},o=.5,r=function(){var t=Math.abs(e.__decelerationVelocityY)>=o;return t||(e.__didDecelerationComplete=!0),t},u=function(t,n,o){return e.__isDecelerating=!1,e.__scrollTop<=e.__minScrollTop||e.__scrollTop>=e.__maxScrollTop?void e.scrollTo(e.__scrollTop):void(e.__didDecelerationComplete&&e.__scrollingComplete())};e.__isDecelerating=i["default"].start(n,r,u)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollTop+e.__decelerationVelocityY,o=Math.max(Math.min(e.__maxDecelerationScrollTop,n),e.__minDecelerationScrollTop);o!==n&&(n=o,e.__decelerationVelocityY=0),Math.abs(e.__decelerationVelocityY)<=1?Math.abs(n%e.__itemHeight)<1&&(e.__decelerationVelocityY=0):e.__decelerationVelocityY*=.95,e.__publish(n)}};for(var c in l)a.prototype[c]=l[c];t.exports=a},function(t,e){"use strict";function n(t){return"string"==typeof t?document.querySelector(t):t}function o(t,e){var n=window.getComputedStyle(t);return n[e]||""}function r(t){return Math.pow(t-1,3)+1}function i(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}Object.defineProperty(e,"__esModule",{value:!0}),e.getElement=n,e.getComputedStyle=o,e.easeOutCubic=r,e.easeInOutCubic=i},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){this.uuid=Math.random().toString(36).substring(3,8),this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={input:t.input||"",container:document.querySelector(t.input)||"",innerHTML:t.innerHTML||"",hideOnBlur:t.hideOnBlur,onOpen:t.onOpen||function(){},onClose:t.onClose||function(){}}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var e=void 0;return e=t.container?t.container:document.createElement("div"),e.className="vux-popup-dialog vux-popup-dialog-"+this.uuid,t.container||document.body.appendChild(e),this.mask=document.querySelector(".vux-popup-mask"),this.container=document.querySelector(".vux-popup-dialog-"+this.uuid),this._bindEvents(),t=null,this};n.prototype.onClickMask=function(){this.hide(!1)},n.prototype._bindEvents=function(){this.params.hideOnBlur&&this.mask.addEventListener("click",this.onClickMask.bind(this),!1)},n.prototype.show=function(){this.mask.classList.add("vux-popup-show"),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this)},n.prototype.hide=function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||this.mask.classList.remove("vux-popup-show"),t===!1&&this.params.onClose&&this.params.onClose(this)},n.prototype.html=function(t){this.container.innerHTML=t},n.prototype.destroy=function(){this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)},e["default"]=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return 1===t.length?t[0]:t.join(" ")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){var n=(0,i["default"])(t,function(n,o){var r="";return 2===o?(r=(0,s["default"])(e,function(e){return e.name===t[1]})||{value:"__"},(0,s["default"])(e,function(t){return t.name===n&&t.parent===r.value})):(0,s["default"])(e,function(t){return t.name===n})});return(0,i["default"])(n,function(t){return t?t.value:"__"}).join(" ")};var r=n(29),i=o(r),u=n(28),s=o(u)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){var n=(0,i["default"])(t,function(t,n){return(0,s["default"])(e,function(e){return e.value===t})});return(0,i["default"])(n,function(t){return t.name}).join(" ").replace("--","")};var r=n(29),i=o(r),u=n(28),s=o(u)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,s["default"])(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,s["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(65),s=o(u);e.go=r,e.getUrl=i},function(t,e,n){t.exports={"default":n(66),__esModule:!0}},function(t,e,n){t.exports={"default":n(67),__esModule:!0}},function(t,e,n){t.exports={"default":n(68),__esModule:!0}},function(t,e,n){t.exports={"default":n(69),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(60),i=o(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(62),i=o(r),u=n(61),s=o(u),a="function"==typeof s["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":typeof t};e["default"]="function"==typeof s["default"]&&"symbol"===a(i["default"])?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e,n){var o=n(8),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){n(91);var o=n(8).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},function(t,e,n){n(94),n(92),n(95),n(96),t.exports=n(8).Symbol},function(t,e,n){n(93),n(97),t.exports=n(27).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var o=n(5),r=n(88),i=n(87);t.exports=function(t){return function(e,n,u){var s,a=o(e),l=r(a.length),c=i(u,l);if(t&&n!=n){for(;l>c;)if(s=a[c++],s!=s)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var o=n(70);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(12),r=n(36),i=n(20);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var u,s=n(t),a=i.f,l=0;s.length>l;)a.call(t,u=s[l++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var o=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(30);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){"use strict";var o=n(34),r=n(13),i=n(21),u={};n(6)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(u,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(12),r=n(5);t.exports=function(t,e){for(var n,i=r(t),u=o(i),s=u.length,a=0;s>a;)if(i[n=u[a++]]===e)return n}},function(t,e,n){var o=n(14)("meta"),r=n(11),i=n(3),u=n(4).f,s=0,a=Object.isExtensible||function(){return!0},l=!n(10)(function(){return a(Object.preventExtensions({}))}),c=function(t){u(t,o,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!a(t))return"F";if(!e)return"E";c(t)}return t[o].i},p=function(t,e){if(!i(t,o)){if(!a(t))return!0;if(!e)return!1;c(t)}return t[o].w},d=function(t){return l&&h.NEED&&a(t)&&!i(t,o)&&c(t),t},h=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:p,onFreeze:d}},function(t,e,n){var o=n(4),r=n(9),i=n(12);t.exports=n(2)?Object.defineProperties:function(t,e){r(t);for(var n,u=i(e),s=u.length,a=0;s>a;)o.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var o=n(20),r=n(13),i=n(5),u=n(25),s=n(3),a=n(32),l=Object.getOwnPropertyDescriptor;e.f=n(2)?l:function(t,e){if(t=i(t),e=u(e,!0),a)try{return l(t,e)}catch(n){}return s(t,e)?r(!o.f.call(t,e),t[e]):void 0}},function(t,e,n){var o=n(5),r=n(35).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?s(t):r(o(t))}},function(t,e,n){var o=n(3),r=n(89),i=n(22)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){
	return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var o=n(24),r=n(15);t.exports=function(t){return function(e,n){var i,u,s=String(r(e)),a=o(n),l=s.length;return 0>a||a>=l?t?"":void 0:(i=s.charCodeAt(a),55296>i||i>56319||a+1===l||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var o=n(24),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),0>t?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(24),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(15);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";var o=n(71),r=n(79),i=n(18),u=n(5);t.exports=n(33)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var o=n(17);o(o.S+o.F*!n(2),"Object",{defineProperty:n(4).f})},function(t,e){},function(t,e,n){"use strict";var o=n(86)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var o=n(1),r=n(3),i=n(2),u=n(17),s=n(38),a=n(81).KEY,l=n(10),c=n(23),f=n(21),p=n(14),d=n(7),h=n(27),_=n(26),v=n(80),m=n(74),y=n(77),g=n(9),x=n(5),b=n(25),w=n(13),S=n(34),T=n(84),O=n(83),k=n(4),M=n(12),j=O.f,C=k.f,D=T.f,P=o.Symbol,E=o.JSON,A=E&&E.stringify,I="prototype",H=d("_hidden"),N=d("toPrimitive"),V={}.propertyIsEnumerable,L=c("symbol-registry"),F=c("symbols"),$=c("op-symbols"),Y=Object[I],q="function"==typeof P,B=o.QObject,W=!B||!B[I]||!B[I].findChild,R=i&&l(function(){return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=j(Y,e);o&&delete Y[e],C(t,e,n),o&&t!==Y&&C(Y,e,o)}:C,J=function(t){var e=F[t]=S(P[I]);return e._k=t,e},z=q&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},G=function(t,e,n){return t===Y&&G($,e,n),g(t),e=b(e,!0),g(n),r(F,e)?(n.enumerable?(r(t,H)&&t[H][e]&&(t[H][e]=!1),n=S(n,{enumerable:w(0,!1)})):(r(t,H)||C(t,H,w(1,{})),t[H][e]=!0),R(t,e,n)):C(t,e,n)},K=function(t,e){g(t);for(var n,o=m(e=x(e)),r=0,i=o.length;i>r;)G(t,n=o[r++],e[n]);return t},U=function(t,e){return void 0===e?S(t):K(S(t),e)},Q=function(t){var e=V.call(this,t=b(t,!0));return this===Y&&r(F,t)&&!r($,t)?!1:e||!r(this,t)||!r(F,t)||r(this,H)&&this[H][t]?e:!0},X=function(t,e){if(t=x(t),e=b(e,!0),t!==Y||!r(F,e)||r($,e)){var n=j(t,e);return!n||!r(F,e)||r(t,H)&&t[H][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=D(x(t)),o=[],i=0;n.length>i;)r(F,e=n[i++])||e==H||e==a||o.push(e);return o},tt=function(t){for(var e,n=t===Y,o=D(n?$:x(t)),i=[],u=0;o.length>u;)r(F,e=o[u++])&&(n?r(Y,e):!0)&&i.push(F[e]);return i};q||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===Y&&e.call($,n),r(this,H)&&r(this[H],t)&&(this[H][t]=!1),R(this,t,w(1,n))};return i&&W&&R(Y,t,{configurable:!0,set:e}),J(t)},s(P[I],"toString",function(){return this._k}),O.f=X,k.f=G,n(35).f=T.f=Z,n(20).f=Q,n(36).f=tt,i&&!n(19)&&s(Y,"propertyIsEnumerable",Q,!0),h.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!q,{Symbol:P});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=M(d.store),nt=0;et.length>nt;)_(et[nt++]);u(u.S+u.F*!q,"Symbol",{"for":function(t){return r(L,t+="")?L[t]:L[t]=P(t)},keyFor:function(t){if(z(t))return v(L,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!q,"Object",{create:U,defineProperty:G,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),E&&u(u.S+u.F*(!q||l(function(){var t=P();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&y(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),z(e)?void 0:e}),o[1]=e,A.apply(E,o)}}}),P[I][N]||n(6)(P[I],N,P[I].valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){n(90);for(var o=n(1),r=n(6),i=n(18),u=n(7)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;5>a;a++){var l=s[a],c=o[l],f=c&&c.prototype;f&&!f[u]&&r(f,u,l),i[l]=i.Array}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports='<popup-picker :columns="hideDistrict ? 2 : 3" :data=list :title=title :value.sync=value show-name :inline-desc=inlineDesc :placeholder=placeholder @on-hide=emitHide @on-show="$emit(\'on-show\')"></popup-picker>'},function(t,e){t.exports="<div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> </div>"},function(t,e){t.exports="<div class=vux-flexbox-item :style=style> <slot></slot> </div>"},function(t,e){t.exports="<div class=vux-flexbox :class=\"{'vux-flex-col': orient === 'vertical', 'vux-flex-row': orient === 'horizontal'}\" :style=styles> <slot></slot> </div>"},function(t,e){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,e){t.exports="<div class=vux-picker> <flexbox :gutter=0> <flexbox-item v-for=\"(index, one) in data\" style=margin-left:0> <div class=vux-picker-item :id=\"'vux-picker-' + uuid + '-' + index\"></div> </flexbox-item> </flexbox> </div>"},function(t,e){t.exports='<cell :title=title primary=content is-link :inline-desc=inlineDesc @click=onClick> <span class=vux-popup-picker-value v-if="!showName && value.length">{{value | array2string}}</span> <span class=vux-popup-picker-value v-else="showName && value.length">{{value | value2name data}}</span> <span v-if="!value.length && placeholder" v-html=placeholder></span> </cell> <popup :show.sync=show class=vux-popup-picker :id="\'vux-popup-picker-\'+uuid" @on-hide=onPopupHide @on-show="$emit(\'on-show\')"> <div class=vux-popup-picker-container> <div class=vux-popup-picker-header> <flexbox> <flexbox-item style=text-align:left;padding-left:15px;line-height:44px @click=onHide(false)>取消</flexbox-item> <flexbox-item style=text-align:right;padding-right:15px;line-height:44px @click=onHide(true)>完成</flexbox-item> </flexbox> </div> <picker :data=data :value.sync=tempValue :columns=columns :container="\'#vux-popup-picker-\'+uuid" @on-change=onPickerChange></picker> </div> </popup>'},function(t,e){t.exports="<div v-show=show transition=vux-popup :style={height:height} class=vux-popup> <slot></slot> </div>"},function(t,e,n){var o,r;o=n(42),r=n(104),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(98),o=n(43),r=n(105),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(100),r=n(108),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(101),o=n(46),r=n(109),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(102),o=n(47),r=n(110),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(103),o=n(48),r=n(111),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "北京市",
			"value": "110000"
		},
		{
			"name": "天津市",
			"value": "120000"
		},
		{
			"name": "河北省",
			"value": "130000"
		},
		{
			"name": "山西省",
			"value": "140000"
		},
		{
			"name": "内蒙古自治区",
			"value": "150000"
		},
		{
			"name": "辽宁省",
			"value": "210000"
		},
		{
			"name": "吉林省",
			"value": "220000"
		},
		{
			"name": "黑龙江省",
			"value": "230000"
		},
		{
			"name": "上海市",
			"value": "310000"
		},
		{
			"name": "江苏省",
			"value": "320000"
		},
		{
			"name": "浙江省",
			"value": "330000"
		},
		{
			"name": "安徽省",
			"value": "340000"
		},
		{
			"name": "福建省",
			"value": "350000"
		},
		{
			"name": "江西省",
			"value": "360000"
		},
		{
			"name": "山东省",
			"value": "370000"
		},
		{
			"name": "河南省",
			"value": "410000"
		},
		{
			"name": "湖北省",
			"value": "420000"
		},
		{
			"name": "湖南省",
			"value": "430000"
		},
		{
			"name": "广东省",
			"value": "440000"
		},
		{
			"name": "广西壮族自治区",
			"value": "450000"
		},
		{
			"name": "海南省",
			"value": "460000"
		},
		{
			"name": "重庆市",
			"value": "500000"
		},
		{
			"name": "四川省",
			"value": "510000"
		},
		{
			"name": "贵州省",
			"value": "520000"
		},
		{
			"name": "云南省",
			"value": "530000"
		},
		{
			"name": "西藏自治区",
			"value": "540000"
		},
		{
			"name": "陕西省",
			"value": "610000"
		},
		{
			"name": "甘肃省",
			"value": "620000"
		},
		{
			"name": "青海省",
			"value": "630000"
		},
		{
			"name": "宁夏回族自治区",
			"value": "640000"
		},
		{
			"name": "新疆维吾尔自治区",
			"value": "650000"
		},
		{
			"name": "北京市市辖区",
			"value": "110100",
			"parent": "110000"
		},
		{
			"name": "东城区",
			"value": "110101",
			"parent": "110100"
		},
		{
			"name": "西城区",
			"value": "110102",
			"parent": "110100"
		},
		{
			"name": "朝阳区",
			"value": "110105",
			"parent": "110100"
		},
		{
			"name": "丰台区",
			"value": "110106",
			"parent": "110100"
		},
		{
			"name": "石景山区",
			"value": "110107",
			"parent": "110100"
		},
		{
			"name": "海淀区",
			"value": "110108",
			"parent": "110100"
		},
		{
			"name": "门头沟区",
			"value": "110109",
			"parent": "110100"
		},
		{
			"name": "房山区",
			"value": "110111",
			"parent": "110100"
		},
		{
			"name": "通州区",
			"value": "110112",
			"parent": "110100"
		},
		{
			"name": "顺义区",
			"value": "110113",
			"parent": "110100"
		},
		{
			"name": "昌平区",
			"value": "110114",
			"parent": "110100"
		},
		{
			"name": "大兴区",
			"value": "110115",
			"parent": "110100"
		},
		{
			"name": "怀柔区",
			"value": "110116",
			"parent": "110100"
		},
		{
			"name": "平谷区",
			"value": "110117",
			"parent": "110100"
		},
		{
			"name": "密云区",
			"value": "110128",
			"parent": "110100"
		},
		{
			"name": "延庆区",
			"value": "110129",
			"parent": "110100"
		},
		{
			"name": "天津市市辖区",
			"value": "120100",
			"parent": "120000"
		},
		{
			"name": "天津市郊县",
			"value": "120200",
			"parent": "120000"
		},
		{
			"name": "和平区",
			"value": "120101",
			"parent": "120100"
		},
		{
			"name": "河东区",
			"value": "120102",
			"parent": "120100"
		},
		{
			"name": "河西区",
			"value": "120103",
			"parent": "120100"
		},
		{
			"name": "南开区",
			"value": "120104",
			"parent": "120100"
		},
		{
			"name": "河北区",
			"value": "120105",
			"parent": "120100"
		},
		{
			"name": "红桥区",
			"value": "120106",
			"parent": "120100"
		},
		{
			"name": "东丽区",
			"value": "120110",
			"parent": "120100"
		},
		{
			"name": "西青区",
			"value": "120111",
			"parent": "120100"
		},
		{
			"name": "津南区",
			"value": "120112",
			"parent": "120100"
		},
		{
			"name": "北辰区",
			"value": "120113",
			"parent": "120100"
		},
		{
			"name": "武清区",
			"value": "120114",
			"parent": "120100"
		},
		{
			"name": "宝坻区",
			"value": "120115",
			"parent": "120100"
		},
		{
			"name": "滨海新区",
			"value": "120116",
			"parent": "120100"
		},
		{
			"name": "宁河区",
			"value": "120117",
			"parent": "120100"
		},
		{
			"name": "静海区",
			"value": "120118",
			"parent": "120100"
		},
		{
			"name": "蓟县",
			"value": "120225",
			"parent": "120100"
		},
		{
			"name": "石家庄市",
			"value": "130100",
			"parent": "130000"
		},
		{
			"name": "唐山市",
			"value": "130200",
			"parent": "130000"
		},
		{
			"name": "秦皇岛市",
			"value": "130300",
			"parent": "130000"
		},
		{
			"name": "邯郸市",
			"value": "130400",
			"parent": "130000"
		},
		{
			"name": "邢台市",
			"value": "130500",
			"parent": "130000"
		},
		{
			"name": "保定市",
			"value": "130600",
			"parent": "130000"
		},
		{
			"name": "张家口市",
			"value": "130700",
			"parent": "130000"
		},
		{
			"name": "承德市",
			"value": "130800",
			"parent": "130000"
		},
		{
			"name": "沧州市",
			"value": "130900",
			"parent": "130000"
		},
		{
			"name": "廊坊市",
			"value": "131000",
			"parent": "130000"
		},
		{
			"name": "衡水市",
			"value": "131100",
			"parent": "130000"
		},
		{
			"name": "长安区",
			"value": "130102",
			"parent": "130100"
		},
		{
			"name": "桥西区",
			"value": "130104",
			"parent": "130100"
		},
		{
			"name": "新华区",
			"value": "130105",
			"parent": "130100"
		},
		{
			"name": "井陉矿区",
			"value": "130107",
			"parent": "130100"
		},
		{
			"name": "裕华区",
			"value": "130108",
			"parent": "130100"
		},
		{
			"name": "藁城区",
			"value": "130109",
			"parent": "130100"
		},
		{
			"name": "鹿泉区",
			"value": "130110",
			"parent": "130100"
		},
		{
			"name": "栾城区",
			"value": "130111",
			"parent": "130100"
		},
		{
			"name": "井陉县",
			"value": "130121",
			"parent": "130100"
		},
		{
			"name": "正定县",
			"value": "130123",
			"parent": "130100"
		},
		{
			"name": "行唐县",
			"value": "130125",
			"parent": "130100"
		},
		{
			"name": "灵寿县",
			"value": "130126",
			"parent": "130100"
		},
		{
			"name": "高邑县",
			"value": "130127",
			"parent": "130100"
		},
		{
			"name": "深泽县",
			"value": "130128",
			"parent": "130100"
		},
		{
			"name": "赞皇县",
			"value": "130129",
			"parent": "130100"
		},
		{
			"name": "无极县",
			"value": "130130",
			"parent": "130100"
		},
		{
			"name": "平山县",
			"value": "130131",
			"parent": "130100"
		},
		{
			"name": "元氏县",
			"value": "130132",
			"parent": "130100"
		},
		{
			"name": "赵县",
			"value": "130133",
			"parent": "130100"
		},
		{
			"name": "辛集市",
			"value": "130181",
			"parent": "130100"
		},
		{
			"name": "晋州市",
			"value": "130183",
			"parent": "130100"
		},
		{
			"name": "新乐市",
			"value": "130184",
			"parent": "130100"
		},
		{
			"name": "路南区",
			"value": "130202",
			"parent": "130200"
		},
		{
			"name": "路北区",
			"value": "130203",
			"parent": "130200"
		},
		{
			"name": "古冶区",
			"value": "130204",
			"parent": "130200"
		},
		{
			"name": "开平区",
			"value": "130205",
			"parent": "130200"
		},
		{
			"name": "丰南区",
			"value": "130207",
			"parent": "130200"
		},
		{
			"name": "丰润区",
			"value": "130208",
			"parent": "130200"
		},
		{
			"name": "曹妃甸区",
			"value": "130209",
			"parent": "130200"
		},
		{
			"name": "滦县",
			"value": "130223",
			"parent": "130200"
		},
		{
			"name": "滦南县",
			"value": "130224",
			"parent": "130200"
		},
		{
			"name": "乐亭县",
			"value": "130225",
			"parent": "130200"
		},
		{
			"name": "迁西县",
			"value": "130227",
			"parent": "130200"
		},
		{
			"name": "玉田县",
			"value": "130229",
			"parent": "130200"
		},
		{
			"name": "遵化市",
			"value": "130281",
			"parent": "130200"
		},
		{
			"name": "迁安市",
			"value": "130283",
			"parent": "130200"
		},
		{
			"name": "海港区",
			"value": "130302",
			"parent": "130300"
		},
		{
			"name": "山海关区",
			"value": "130303",
			"parent": "130300"
		},
		{
			"name": "北戴河区",
			"value": "130304",
			"parent": "130300"
		},
		{
			"name": "抚宁区",
			"value": "130306",
			"parent": "130300"
		},
		{
			"name": "青龙满族自治县",
			"value": "130321",
			"parent": "130300"
		},
		{
			"name": "昌黎县",
			"value": "130322",
			"parent": "130300"
		},
		{
			"name": "卢龙县",
			"value": "130324",
			"parent": "130300"
		},
		{
			"name": "邯山区",
			"value": "130402",
			"parent": "130400"
		},
		{
			"name": "丛台区",
			"value": "130403",
			"parent": "130400"
		},
		{
			"name": "复兴区",
			"value": "130404",
			"parent": "130400"
		},
		{
			"name": "峰峰矿区",
			"value": "130406",
			"parent": "130400"
		},
		{
			"name": "邯郸县",
			"value": "130421",
			"parent": "130400"
		},
		{
			"name": "临漳县",
			"value": "130423",
			"parent": "130400"
		},
		{
			"name": "成安县",
			"value": "130424",
			"parent": "130400"
		},
		{
			"name": "大名县",
			"value": "130425",
			"parent": "130400"
		},
		{
			"name": "涉县",
			"value": "130426",
			"parent": "130400"
		},
		{
			"name": "磁县",
			"value": "130427",
			"parent": "130400"
		},
		{
			"name": "肥乡县",
			"value": "130428",
			"parent": "130400"
		},
		{
			"name": "永年县",
			"value": "130429",
			"parent": "130400"
		},
		{
			"name": "邱县",
			"value": "130430",
			"parent": "130400"
		},
		{
			"name": "鸡泽县",
			"value": "130431",
			"parent": "130400"
		},
		{
			"name": "广平县",
			"value": "130432",
			"parent": "130400"
		},
		{
			"name": "馆陶县",
			"value": "130433",
			"parent": "130400"
		},
		{
			"name": "魏县",
			"value": "130434",
			"parent": "130400"
		},
		{
			"name": "曲周县",
			"value": "130435",
			"parent": "130400"
		},
		{
			"name": "武安市",
			"value": "130481",
			"parent": "130400"
		},
		{
			"name": "桥东区",
			"value": "130502",
			"parent": "130500"
		},
		{
			"name": "桥西区",
			"value": "130503",
			"parent": "130500"
		},
		{
			"name": "邢台县",
			"value": "130521",
			"parent": "130500"
		},
		{
			"name": "临城县",
			"value": "130522",
			"parent": "130500"
		},
		{
			"name": "内丘县",
			"value": "130523",
			"parent": "130500"
		},
		{
			"name": "柏乡县",
			"value": "130524",
			"parent": "130500"
		},
		{
			"name": "隆尧县",
			"value": "130525",
			"parent": "130500"
		},
		{
			"name": "任县",
			"value": "130526",
			"parent": "130500"
		},
		{
			"name": "南和县",
			"value": "130527",
			"parent": "130500"
		},
		{
			"name": "宁晋县",
			"value": "130528",
			"parent": "130500"
		},
		{
			"name": "巨鹿县",
			"value": "130529",
			"parent": "130500"
		},
		{
			"name": "新河县",
			"value": "130530",
			"parent": "130500"
		},
		{
			"name": "广宗县",
			"value": "130531",
			"parent": "130500"
		},
		{
			"name": "平乡县",
			"value": "130532",
			"parent": "130500"
		},
		{
			"name": "威县",
			"value": "130533",
			"parent": "130500"
		},
		{
			"name": "清河县",
			"value": "130534",
			"parent": "130500"
		},
		{
			"name": "临西县",
			"value": "130535",
			"parent": "130500"
		},
		{
			"name": "南宫市",
			"value": "130581",
			"parent": "130500"
		},
		{
			"name": "沙河市",
			"value": "130582",
			"parent": "130500"
		},
		{
			"name": "竞秀区",
			"value": "130602",
			"parent": "130600"
		},
		{
			"name": "莲池区",
			"value": "130606",
			"parent": "130600"
		},
		{
			"name": "满城区",
			"value": "130607",
			"parent": "130600"
		},
		{
			"name": "清苑区",
			"value": "130608",
			"parent": "130600"
		},
		{
			"name": "徐水区",
			"value": "130609",
			"parent": "130600"
		},
		{
			"name": "涞水县",
			"value": "130623",
			"parent": "130600"
		},
		{
			"name": "阜平县",
			"value": "130624",
			"parent": "130600"
		},
		{
			"name": "定兴县",
			"value": "130626",
			"parent": "130600"
		},
		{
			"name": "唐县",
			"value": "130627",
			"parent": "130600"
		},
		{
			"name": "高阳县",
			"value": "130628",
			"parent": "130600"
		},
		{
			"name": "容城县",
			"value": "130629",
			"parent": "130600"
		},
		{
			"name": "涞源县",
			"value": "130630",
			"parent": "130600"
		},
		{
			"name": "望都县",
			"value": "130631",
			"parent": "130600"
		},
		{
			"name": "安新县",
			"value": "130632",
			"parent": "130600"
		},
		{
			"name": "易县",
			"value": "130633",
			"parent": "130600"
		},
		{
			"name": "曲阳县",
			"value": "130634",
			"parent": "130600"
		},
		{
			"name": "蠡县",
			"value": "130635",
			"parent": "130600"
		},
		{
			"name": "顺平县",
			"value": "130636",
			"parent": "130600"
		},
		{
			"name": "博野县",
			"value": "130637",
			"parent": "130600"
		},
		{
			"name": "雄县",
			"value": "130638",
			"parent": "130600"
		},
		{
			"name": "涿州市",
			"value": "130681",
			"parent": "130600"
		},
		{
			"name": "定州市",
			"value": "130682",
			"parent": "130600"
		},
		{
			"name": "安国市",
			"value": "130683",
			"parent": "130600"
		},
		{
			"name": "高碑店市",
			"value": "130684",
			"parent": "130600"
		},
		{
			"name": "桥东区",
			"value": "130702",
			"parent": "130700"
		},
		{
			"name": "桥西区",
			"value": "130703",
			"parent": "130700"
		},
		{
			"name": "宣化区",
			"value": "130705",
			"parent": "130700"
		},
		{
			"name": "下花园区",
			"value": "130706",
			"parent": "130700"
		},
		{
			"name": "宣化县",
			"value": "130721",
			"parent": "130700"
		},
		{
			"name": "张北县",
			"value": "130722",
			"parent": "130700"
		},
		{
			"name": "康保县",
			"value": "130723",
			"parent": "130700"
		},
		{
			"name": "沽源县",
			"value": "130724",
			"parent": "130700"
		},
		{
			"name": "尚义县",
			"value": "130725",
			"parent": "130700"
		},
		{
			"name": "蔚县",
			"value": "130726",
			"parent": "130700"
		},
		{
			"name": "阳原县",
			"value": "130727",
			"parent": "130700"
		},
		{
			"name": "怀安县",
			"value": "130728",
			"parent": "130700"
		},
		{
			"name": "万全县",
			"value": "130729",
			"parent": "130700"
		},
		{
			"name": "怀来县",
			"value": "130730",
			"parent": "130700"
		},
		{
			"name": "涿鹿县",
			"value": "130731",
			"parent": "130700"
		},
		{
			"name": "赤城县",
			"value": "130732",
			"parent": "130700"
		},
		{
			"name": "崇礼县",
			"value": "130733",
			"parent": "130700"
		},
		{
			"name": "双桥区",
			"value": "130802",
			"parent": "130800"
		},
		{
			"name": "双滦区",
			"value": "130803",
			"parent": "130800"
		},
		{
			"name": "鹰手营子矿区",
			"value": "130804",
			"parent": "130800"
		},
		{
			"name": "承德县",
			"value": "130821",
			"parent": "130800"
		},
		{
			"name": "兴隆县",
			"value": "130822",
			"parent": "130800"
		},
		{
			"name": "平泉县",
			"value": "130823",
			"parent": "130800"
		},
		{
			"name": "滦平县",
			"value": "130824",
			"parent": "130800"
		},
		{
			"name": "隆化县",
			"value": "130825",
			"parent": "130800"
		},
		{
			"name": "丰宁满族自治县",
			"value": "130826",
			"parent": "130800"
		},
		{
			"name": "宽城满族自治县",
			"value": "130827",
			"parent": "130800"
		},
		{
			"name": "围场满族蒙古族自治县",
			"value": "130828",
			"parent": "130800"
		},
		{
			"name": "新华区",
			"value": "130902",
			"parent": "130900"
		},
		{
			"name": "运河区",
			"value": "130903",
			"parent": "130900"
		},
		{
			"name": "沧县",
			"value": "130921",
			"parent": "130900"
		},
		{
			"name": "青县",
			"value": "130922",
			"parent": "130900"
		},
		{
			"name": "东光县",
			"value": "130923",
			"parent": "130900"
		},
		{
			"name": "海兴县",
			"value": "130924",
			"parent": "130900"
		},
		{
			"name": "盐山县",
			"value": "130925",
			"parent": "130900"
		},
		{
			"name": "肃宁县",
			"value": "130926",
			"parent": "130900"
		},
		{
			"name": "南皮县",
			"value": "130927",
			"parent": "130900"
		},
		{
			"name": "吴桥县",
			"value": "130928",
			"parent": "130900"
		},
		{
			"name": "献县",
			"value": "130929",
			"parent": "130900"
		},
		{
			"name": "孟村回族自治县",
			"value": "130930",
			"parent": "130900"
		},
		{
			"name": "泊头市",
			"value": "130981",
			"parent": "130900"
		},
		{
			"name": "任丘市",
			"value": "130982",
			"parent": "130900"
		},
		{
			"name": "黄骅市",
			"value": "130983",
			"parent": "130900"
		},
		{
			"name": "河间市",
			"value": "130984",
			"parent": "130900"
		},
		{
			"name": "安次区",
			"value": "131002",
			"parent": "131000"
		},
		{
			"name": "广阳区",
			"value": "131003",
			"parent": "131000"
		},
		{
			"name": "固安县",
			"value": "131022",
			"parent": "131000"
		},
		{
			"name": "永清县",
			"value": "131023",
			"parent": "131000"
		},
		{
			"name": "香河县",
			"value": "131024",
			"parent": "131000"
		},
		{
			"name": "大城县",
			"value": "131025",
			"parent": "131000"
		},
		{
			"name": "文安县",
			"value": "131026",
			"parent": "131000"
		},
		{
			"name": "大厂回族自治县",
			"value": "131028",
			"parent": "131000"
		},
		{
			"name": "霸州市",
			"value": "131081",
			"parent": "131000"
		},
		{
			"name": "三河市",
			"value": "131082",
			"parent": "131000"
		},
		{
			"name": "桃城区",
			"value": "131102",
			"parent": "131100"
		},
		{
			"name": "枣强县",
			"value": "131121",
			"parent": "131100"
		},
		{
			"name": "武邑县",
			"value": "131122",
			"parent": "131100"
		},
		{
			"name": "武强县",
			"value": "131123",
			"parent": "131100"
		},
		{
			"name": "饶阳县",
			"value": "131124",
			"parent": "131100"
		},
		{
			"name": "安平县",
			"value": "131125",
			"parent": "131100"
		},
		{
			"name": "故城县",
			"value": "131126",
			"parent": "131100"
		},
		{
			"name": "景县",
			"value": "131127",
			"parent": "131100"
		},
		{
			"name": "阜城县",
			"value": "131128",
			"parent": "131100"
		},
		{
			"name": "冀州市",
			"value": "131181",
			"parent": "131100"
		},
		{
			"name": "深州市",
			"value": "131182",
			"parent": "131100"
		},
		{
			"name": "太原市",
			"value": "140100",
			"parent": "140000"
		},
		{
			"name": "大同市",
			"value": "140200",
			"parent": "140000"
		},
		{
			"name": "阳泉市",
			"value": "140300",
			"parent": "140000"
		},
		{
			"name": "长治市",
			"value": "140400",
			"parent": "140000"
		},
		{
			"name": "晋城市",
			"value": "140500",
			"parent": "140000"
		},
		{
			"name": "朔州市",
			"value": "140600",
			"parent": "140000"
		},
		{
			"name": "晋中市",
			"value": "140700",
			"parent": "140000"
		},
		{
			"name": "运城市",
			"value": "140800",
			"parent": "140000"
		},
		{
			"name": "忻州市",
			"value": "140900",
			"parent": "140000"
		},
		{
			"name": "临汾市",
			"value": "141000",
			"parent": "140000"
		},
		{
			"name": "吕梁市",
			"value": "141100",
			"parent": "140000"
		},
		{
			"name": "小店区",
			"value": "140105",
			"parent": "140100"
		},
		{
			"name": "迎泽区",
			"value": "140106",
			"parent": "140100"
		},
		{
			"name": "杏花岭区",
			"value": "140107",
			"parent": "140100"
		},
		{
			"name": "尖草坪区",
			"value": "140108",
			"parent": "140100"
		},
		{
			"name": "万柏林区",
			"value": "140109",
			"parent": "140100"
		},
		{
			"name": "晋源区",
			"value": "140110",
			"parent": "140100"
		},
		{
			"name": "清徐县",
			"value": "140121",
			"parent": "140100"
		},
		{
			"name": "阳曲县",
			"value": "140122",
			"parent": "140100"
		},
		{
			"name": "娄烦县",
			"value": "140123",
			"parent": "140100"
		},
		{
			"name": "古交市",
			"value": "140181",
			"parent": "140100"
		},
		{
			"name": "城区",
			"value": "140202",
			"parent": "140200"
		},
		{
			"name": "矿区",
			"value": "140203",
			"parent": "140200"
		},
		{
			"name": "南郊区",
			"value": "140211",
			"parent": "140200"
		},
		{
			"name": "新荣区",
			"value": "140212",
			"parent": "140200"
		},
		{
			"name": "阳高县",
			"value": "140221",
			"parent": "140200"
		},
		{
			"name": "天镇县",
			"value": "140222",
			"parent": "140200"
		},
		{
			"name": "广灵县",
			"value": "140223",
			"parent": "140200"
		},
		{
			"name": "灵丘县",
			"value": "140224",
			"parent": "140200"
		},
		{
			"name": "浑源县",
			"value": "140225",
			"parent": "140200"
		},
		{
			"name": "左云县",
			"value": "140226",
			"parent": "140200"
		},
		{
			"name": "大同县",
			"value": "140227",
			"parent": "140200"
		},
		{
			"name": "城区",
			"value": "140302",
			"parent": "140300"
		},
		{
			"name": "矿区",
			"value": "140303",
			"parent": "140300"
		},
		{
			"name": "郊区",
			"value": "140311",
			"parent": "140300"
		},
		{
			"name": "平定县",
			"value": "140321",
			"parent": "140300"
		},
		{
			"name": "盂县",
			"value": "140322",
			"parent": "140300"
		},
		{
			"name": "城区",
			"value": "140402",
			"parent": "140400"
		},
		{
			"name": "郊区",
			"value": "140411",
			"parent": "140400"
		},
		{
			"name": "长治县",
			"value": "140421",
			"parent": "140400"
		},
		{
			"name": "襄垣县",
			"value": "140423",
			"parent": "140400"
		},
		{
			"name": "屯留县",
			"value": "140424",
			"parent": "140400"
		},
		{
			"name": "平顺县",
			"value": "140425",
			"parent": "140400"
		},
		{
			"name": "黎城县",
			"value": "140426",
			"parent": "140400"
		},
		{
			"name": "壶关县",
			"value": "140427",
			"parent": "140400"
		},
		{
			"name": "长子县",
			"value": "140428",
			"parent": "140400"
		},
		{
			"name": "武乡县",
			"value": "140429",
			"parent": "140400"
		},
		{
			"name": "沁县",
			"value": "140430",
			"parent": "140400"
		},
		{
			"name": "沁源县",
			"value": "140431",
			"parent": "140400"
		},
		{
			"name": "潞城市",
			"value": "140481",
			"parent": "140400"
		},
		{
			"name": "城区",
			"value": "140502",
			"parent": "140500"
		},
		{
			"name": "沁水县",
			"value": "140521",
			"parent": "140500"
		},
		{
			"name": "阳城县",
			"value": "140522",
			"parent": "140500"
		},
		{
			"name": "陵川县",
			"value": "140524",
			"parent": "140500"
		},
		{
			"name": "泽州县",
			"value": "140525",
			"parent": "140500"
		},
		{
			"name": "高平市",
			"value": "140581",
			"parent": "140500"
		},
		{
			"name": "朔城区",
			"value": "140602",
			"parent": "140600"
		},
		{
			"name": "平鲁区",
			"value": "140603",
			"parent": "140600"
		},
		{
			"name": "山阴县",
			"value": "140621",
			"parent": "140600"
		},
		{
			"name": "应县",
			"value": "140622",
			"parent": "140600"
		},
		{
			"name": "右玉县",
			"value": "140623",
			"parent": "140600"
		},
		{
			"name": "怀仁县",
			"value": "140624",
			"parent": "140600"
		},
		{
			"name": "榆次区",
			"value": "140702",
			"parent": "140700"
		},
		{
			"name": "榆社县",
			"value": "140721",
			"parent": "140700"
		},
		{
			"name": "左权县",
			"value": "140722",
			"parent": "140700"
		},
		{
			"name": "和顺县",
			"value": "140723",
			"parent": "140700"
		},
		{
			"name": "昔阳县",
			"value": "140724",
			"parent": "140700"
		},
		{
			"name": "寿阳县",
			"value": "140725",
			"parent": "140700"
		},
		{
			"name": "太谷县",
			"value": "140726",
			"parent": "140700"
		},
		{
			"name": "祁县",
			"value": "140727",
			"parent": "140700"
		},
		{
			"name": "平遥县",
			"value": "140728",
			"parent": "140700"
		},
		{
			"name": "灵石县",
			"value": "140729",
			"parent": "140700"
		},
		{
			"name": "介休市",
			"value": "140781",
			"parent": "140700"
		},
		{
			"name": "盐湖区",
			"value": "140802",
			"parent": "140800"
		},
		{
			"name": "临猗县",
			"value": "140821",
			"parent": "140800"
		},
		{
			"name": "万荣县",
			"value": "140822",
			"parent": "140800"
		},
		{
			"name": "闻喜县",
			"value": "140823",
			"parent": "140800"
		},
		{
			"name": "稷山县",
			"value": "140824",
			"parent": "140800"
		},
		{
			"name": "新绛县",
			"value": "140825",
			"parent": "140800"
		},
		{
			"name": "绛县",
			"value": "140826",
			"parent": "140800"
		},
		{
			"name": "垣曲县",
			"value": "140827",
			"parent": "140800"
		},
		{
			"name": "夏县",
			"value": "140828",
			"parent": "140800"
		},
		{
			"name": "平陆县",
			"value": "140829",
			"parent": "140800"
		},
		{
			"name": "芮城县",
			"value": "140830",
			"parent": "140800"
		},
		{
			"name": "永济市",
			"value": "140881",
			"parent": "140800"
		},
		{
			"name": "河津市",
			"value": "140882",
			"parent": "140800"
		},
		{
			"name": "忻府区",
			"value": "140902",
			"parent": "140900"
		},
		{
			"name": "定襄县",
			"value": "140921",
			"parent": "140900"
		},
		{
			"name": "五台县",
			"value": "140922",
			"parent": "140900"
		},
		{
			"name": "代县",
			"value": "140923",
			"parent": "140900"
		},
		{
			"name": "繁峙县",
			"value": "140924",
			"parent": "140900"
		},
		{
			"name": "宁武县",
			"value": "140925",
			"parent": "140900"
		},
		{
			"name": "静乐县",
			"value": "140926",
			"parent": "140900"
		},
		{
			"name": "神池县",
			"value": "140927",
			"parent": "140900"
		},
		{
			"name": "五寨县",
			"value": "140928",
			"parent": "140900"
		},
		{
			"name": "岢岚县",
			"value": "140929",
			"parent": "140900"
		},
		{
			"name": "河曲县",
			"value": "140930",
			"parent": "140900"
		},
		{
			"name": "保德县",
			"value": "140931",
			"parent": "140900"
		},
		{
			"name": "偏关县",
			"value": "140932",
			"parent": "140900"
		},
		{
			"name": "原平市",
			"value": "140981",
			"parent": "140900"
		},
		{
			"name": "尧都区",
			"value": "141002",
			"parent": "141000"
		},
		{
			"name": "曲沃县",
			"value": "141021",
			"parent": "141000"
		},
		{
			"name": "翼城县",
			"value": "141022",
			"parent": "141000"
		},
		{
			"name": "襄汾县",
			"value": "141023",
			"parent": "141000"
		},
		{
			"name": "洪洞县",
			"value": "141024",
			"parent": "141000"
		},
		{
			"name": "古县",
			"value": "141025",
			"parent": "141000"
		},
		{
			"name": "安泽县",
			"value": "141026",
			"parent": "141000"
		},
		{
			"name": "浮山县",
			"value": "141027",
			"parent": "141000"
		},
		{
			"name": "吉县",
			"value": "141028",
			"parent": "141000"
		},
		{
			"name": "乡宁县",
			"value": "141029",
			"parent": "141000"
		},
		{
			"name": "大宁县",
			"value": "141030",
			"parent": "141000"
		},
		{
			"name": "隰县",
			"value": "141031",
			"parent": "141000"
		},
		{
			"name": "永和县",
			"value": "141032",
			"parent": "141000"
		},
		{
			"name": "蒲县",
			"value": "141033",
			"parent": "141000"
		},
		{
			"name": "汾西县",
			"value": "141034",
			"parent": "141000"
		},
		{
			"name": "侯马市",
			"value": "141081",
			"parent": "141000"
		},
		{
			"name": "霍州市",
			"value": "141082",
			"parent": "141000"
		},
		{
			"name": "离石区",
			"value": "141102",
			"parent": "141100"
		},
		{
			"name": "文水县",
			"value": "141121",
			"parent": "141100"
		},
		{
			"name": "交城县",
			"value": "141122",
			"parent": "141100"
		},
		{
			"name": "兴县",
			"value": "141123",
			"parent": "141100"
		},
		{
			"name": "临县",
			"value": "141124",
			"parent": "141100"
		},
		{
			"name": "柳林县",
			"value": "141125",
			"parent": "141100"
		},
		{
			"name": "石楼县",
			"value": "141126",
			"parent": "141100"
		},
		{
			"name": "岚县",
			"value": "141127",
			"parent": "141100"
		},
		{
			"name": "方山县",
			"value": "141128",
			"parent": "141100"
		},
		{
			"name": "中阳县",
			"value": "141129",
			"parent": "141100"
		},
		{
			"name": "交口县",
			"value": "141130",
			"parent": "141100"
		},
		{
			"name": "孝义市",
			"value": "141181",
			"parent": "141100"
		},
		{
			"name": "汾阳市",
			"value": "141182",
			"parent": "141100"
		},
		{
			"name": "呼和浩特市",
			"value": "150100",
			"parent": "150000"
		},
		{
			"name": "包头市",
			"value": "150200",
			"parent": "150000"
		},
		{
			"name": "乌海市",
			"value": "150300",
			"parent": "150000"
		},
		{
			"name": "赤峰市",
			"value": "150400",
			"parent": "150000"
		},
		{
			"name": "通辽市",
			"value": "150500",
			"parent": "150000"
		},
		{
			"name": "鄂尔多斯市",
			"value": "150600",
			"parent": "150000"
		},
		{
			"name": "呼伦贝尔市",
			"value": "150700",
			"parent": "150000"
		},
		{
			"name": "巴彦淖尔市",
			"value": "150800",
			"parent": "150000"
		},
		{
			"name": "乌兰察布市",
			"value": "150900",
			"parent": "150000"
		},
		{
			"name": "兴安盟",
			"value": "152200",
			"parent": "150000"
		},
		{
			"name": "锡林郭勒盟",
			"value": "152500",
			"parent": "150000"
		},
		{
			"name": "阿拉善盟",
			"value": "152900",
			"parent": "150000"
		},
		{
			"name": "新城区",
			"value": "150102",
			"parent": "150100"
		},
		{
			"name": "回民区",
			"value": "150103",
			"parent": "150100"
		},
		{
			"name": "玉泉区",
			"value": "150104",
			"parent": "150100"
		},
		{
			"name": "赛罕区",
			"value": "150105",
			"parent": "150100"
		},
		{
			"name": "土默特左旗",
			"value": "150121",
			"parent": "150100"
		},
		{
			"name": "托克托县",
			"value": "150122",
			"parent": "150100"
		},
		{
			"name": "和林格尔县",
			"value": "150123",
			"parent": "150100"
		},
		{
			"name": "清水河县",
			"value": "150124",
			"parent": "150100"
		},
		{
			"name": "武川县",
			"value": "150125",
			"parent": "150100"
		},
		{
			"name": "东河区",
			"value": "150202",
			"parent": "150200"
		},
		{
			"name": "昆都仑区",
			"value": "150203",
			"parent": "150200"
		},
		{
			"name": "青山区",
			"value": "150204",
			"parent": "150200"
		},
		{
			"name": "石拐区",
			"value": "150205",
			"parent": "150200"
		},
		{
			"name": "白云鄂博矿区",
			"value": "150206",
			"parent": "150200"
		},
		{
			"name": "九原区",
			"value": "150207",
			"parent": "150200"
		},
		{
			"name": "土默特右旗",
			"value": "150221",
			"parent": "150200"
		},
		{
			"name": "固阳县",
			"value": "150222",
			"parent": "150200"
		},
		{
			"name": "达尔罕茂明安联合旗",
			"value": "150223",
			"parent": "150200"
		},
		{
			"name": "海勃湾区",
			"value": "150302",
			"parent": "150300"
		},
		{
			"name": "海南区",
			"value": "150303",
			"parent": "150300"
		},
		{
			"name": "乌达区",
			"value": "150304",
			"parent": "150300"
		},
		{
			"name": "红山区",
			"value": "150402",
			"parent": "150400"
		},
		{
			"name": "元宝山区",
			"value": "150403",
			"parent": "150400"
		},
		{
			"name": "松山区",
			"value": "150404",
			"parent": "150400"
		},
		{
			"name": "阿鲁科尔沁旗",
			"value": "150421",
			"parent": "150400"
		},
		{
			"name": "巴林左旗",
			"value": "150422",
			"parent": "150400"
		},
		{
			"name": "巴林右旗",
			"value": "150423",
			"parent": "150400"
		},
		{
			"name": "林西县",
			"value": "150424",
			"parent": "150400"
		},
		{
			"name": "克什克腾旗",
			"value": "150425",
			"parent": "150400"
		},
		{
			"name": "翁牛特旗",
			"value": "150426",
			"parent": "150400"
		},
		{
			"name": "喀喇沁旗",
			"value": "150428",
			"parent": "150400"
		},
		{
			"name": "宁城县",
			"value": "150429",
			"parent": "150400"
		},
		{
			"name": "敖汉旗",
			"value": "150430",
			"parent": "150400"
		},
		{
			"name": "科尔沁区",
			"value": "150502",
			"parent": "150500"
		},
		{
			"name": "科尔沁左翼中旗",
			"value": "150521",
			"parent": "150500"
		},
		{
			"name": "科尔沁左翼后旗",
			"value": "150522",
			"parent": "150500"
		},
		{
			"name": "开鲁县",
			"value": "150523",
			"parent": "150500"
		},
		{
			"name": "库伦旗",
			"value": "150524",
			"parent": "150500"
		},
		{
			"name": "奈曼旗",
			"value": "150525",
			"parent": "150500"
		},
		{
			"name": "扎鲁特旗",
			"value": "150526",
			"parent": "150500"
		},
		{
			"name": "霍林郭勒市",
			"value": "150581",
			"parent": "150500"
		},
		{
			"name": "东胜区",
			"value": "150602",
			"parent": "150600"
		},
		{
			"name": "达拉特旗",
			"value": "150621",
			"parent": "150600"
		},
		{
			"name": "准格尔旗",
			"value": "150622",
			"parent": "150600"
		},
		{
			"name": "鄂托克前旗",
			"value": "150623",
			"parent": "150600"
		},
		{
			"name": "鄂托克旗",
			"value": "150624",
			"parent": "150600"
		},
		{
			"name": "杭锦旗",
			"value": "150625",
			"parent": "150600"
		},
		{
			"name": "乌审旗",
			"value": "150626",
			"parent": "150600"
		},
		{
			"name": "伊金霍洛旗",
			"value": "150627",
			"parent": "150600"
		},
		{
			"name": "海拉尔区",
			"value": "150702",
			"parent": "150700"
		},
		{
			"name": "扎赉诺尔区",
			"value": "150703",
			"parent": "150700"
		},
		{
			"name": "阿荣旗",
			"value": "150721",
			"parent": "150700"
		},
		{
			"name": "莫力达瓦达斡尔族自治旗",
			"value": "150722",
			"parent": "150700"
		},
		{
			"name": "鄂伦春自治旗",
			"value": "150723",
			"parent": "150700"
		},
		{
			"name": "鄂温克族自治旗",
			"value": "150724",
			"parent": "150700"
		},
		{
			"name": "陈巴尔虎旗",
			"value": "150725",
			"parent": "150700"
		},
		{
			"name": "新巴尔虎左旗",
			"value": "150726",
			"parent": "150700"
		},
		{
			"name": "新巴尔虎右旗",
			"value": "150727",
			"parent": "150700"
		},
		{
			"name": "满洲里市",
			"value": "150781",
			"parent": "150700"
		},
		{
			"name": "牙克石市",
			"value": "150782",
			"parent": "150700"
		},
		{
			"name": "扎兰屯市",
			"value": "150783",
			"parent": "150700"
		},
		{
			"name": "额尔古纳市",
			"value": "150784",
			"parent": "150700"
		},
		{
			"name": "根河市",
			"value": "150785",
			"parent": "150700"
		},
		{
			"name": "临河区",
			"value": "150802",
			"parent": "150800"
		},
		{
			"name": "五原县",
			"value": "150821",
			"parent": "150800"
		},
		{
			"name": "磴口县",
			"value": "150822",
			"parent": "150800"
		},
		{
			"name": "乌拉特前旗",
			"value": "150823",
			"parent": "150800"
		},
		{
			"name": "乌拉特中旗",
			"value": "150824",
			"parent": "150800"
		},
		{
			"name": "乌拉特后旗",
			"value": "150825",
			"parent": "150800"
		},
		{
			"name": "杭锦后旗",
			"value": "150826",
			"parent": "150800"
		},
		{
			"name": "集宁区",
			"value": "150902",
			"parent": "150900"
		},
		{
			"name": "卓资县",
			"value": "150921",
			"parent": "150900"
		},
		{
			"name": "化德县",
			"value": "150922",
			"parent": "150900"
		},
		{
			"name": "商都县",
			"value": "150923",
			"parent": "150900"
		},
		{
			"name": "兴和县",
			"value": "150924",
			"parent": "150900"
		},
		{
			"name": "凉城县",
			"value": "150925",
			"parent": "150900"
		},
		{
			"name": "察哈尔右翼前旗",
			"value": "150926",
			"parent": "150900"
		},
		{
			"name": "察哈尔右翼中旗",
			"value": "150927",
			"parent": "150900"
		},
		{
			"name": "察哈尔右翼后旗",
			"value": "150928",
			"parent": "150900"
		},
		{
			"name": "四子王旗",
			"value": "150929",
			"parent": "150900"
		},
		{
			"name": "丰镇市",
			"value": "150981",
			"parent": "150900"
		},
		{
			"name": "乌兰浩特市",
			"value": "152201",
			"parent": "152200"
		},
		{
			"name": "阿尔山市",
			"value": "152202",
			"parent": "152200"
		},
		{
			"name": "科尔沁右翼前旗",
			"value": "152221",
			"parent": "152200"
		},
		{
			"name": "科尔沁右翼中旗",
			"value": "152222",
			"parent": "152200"
		},
		{
			"name": "扎赉特旗",
			"value": "152223",
			"parent": "152200"
		},
		{
			"name": "突泉县",
			"value": "152224",
			"parent": "152200"
		},
		{
			"name": "二连浩特市",
			"value": "152501",
			"parent": "152500"
		},
		{
			"name": "锡林浩特市",
			"value": "152502",
			"parent": "152500"
		},
		{
			"name": "阿巴嘎旗",
			"value": "152522",
			"parent": "152500"
		},
		{
			"name": "苏尼特左旗",
			"value": "152523",
			"parent": "152500"
		},
		{
			"name": "苏尼特右旗",
			"value": "152524",
			"parent": "152500"
		},
		{
			"name": "东乌珠穆沁旗",
			"value": "152525",
			"parent": "152500"
		},
		{
			"name": "西乌珠穆沁旗",
			"value": "152526",
			"parent": "152500"
		},
		{
			"name": "太仆寺旗",
			"value": "152527",
			"parent": "152500"
		},
		{
			"name": "镶黄旗",
			"value": "152528",
			"parent": "152500"
		},
		{
			"name": "正镶白旗",
			"value": "152529",
			"parent": "152500"
		},
		{
			"name": "正蓝旗",
			"value": "152530",
			"parent": "152500"
		},
		{
			"name": "多伦县",
			"value": "152531",
			"parent": "152500"
		},
		{
			"name": "阿拉善左旗",
			"value": "152921",
			"parent": "152900"
		},
		{
			"name": "阿拉善右旗",
			"value": "152922",
			"parent": "152900"
		},
		{
			"name": "额济纳旗",
			"value": "152923",
			"parent": "152900"
		},
		{
			"name": "沈阳市",
			"value": "210100",
			"parent": "210000"
		},
		{
			"name": "大连市",
			"value": "210200",
			"parent": "210000"
		},
		{
			"name": "鞍山市",
			"value": "210300",
			"parent": "210000"
		},
		{
			"name": "抚顺市",
			"value": "210400",
			"parent": "210000"
		},
		{
			"name": "本溪市",
			"value": "210500",
			"parent": "210000"
		},
		{
			"name": "丹东市",
			"value": "210600",
			"parent": "210000"
		},
		{
			"name": "锦州市",
			"value": "210700",
			"parent": "210000"
		},
		{
			"name": "营口市",
			"value": "210800",
			"parent": "210000"
		},
		{
			"name": "阜新市",
			"value": "210900",
			"parent": "210000"
		},
		{
			"name": "辽阳市",
			"value": "211000",
			"parent": "210000"
		},
		{
			"name": "盘锦市",
			"value": "211100",
			"parent": "210000"
		},
		{
			"name": "铁岭市",
			"value": "211200",
			"parent": "210000"
		},
		{
			"name": "朝阳市",
			"value": "211300",
			"parent": "210000"
		},
		{
			"name": "葫芦岛市",
			"value": "211400",
			"parent": "210000"
		},
		{
			"name": "和平区",
			"value": "210102",
			"parent": "210100"
		},
		{
			"name": "沈河区",
			"value": "210103",
			"parent": "210100"
		},
		{
			"name": "大东区",
			"value": "210104",
			"parent": "210100"
		},
		{
			"name": "皇姑区",
			"value": "210105",
			"parent": "210100"
		},
		{
			"name": "铁西区",
			"value": "210106",
			"parent": "210100"
		},
		{
			"name": "苏家屯区",
			"value": "210111",
			"parent": "210100"
		},
		{
			"name": "浑南区",
			"value": "210112",
			"parent": "210100"
		},
		{
			"name": "沈北新区",
			"value": "210113",
			"parent": "210100"
		},
		{
			"name": "于洪区",
			"value": "210114",
			"parent": "210100"
		},
		{
			"name": "辽中县",
			"value": "210122",
			"parent": "210100"
		},
		{
			"name": "康平县",
			"value": "210123",
			"parent": "210100"
		},
		{
			"name": "法库县",
			"value": "210124",
			"parent": "210100"
		},
		{
			"name": "新民市",
			"value": "210181",
			"parent": "210100"
		},
		{
			"name": "中山区",
			"value": "210202",
			"parent": "210200"
		},
		{
			"name": "西岗区",
			"value": "210203",
			"parent": "210200"
		},
		{
			"name": "沙河口区",
			"value": "210204",
			"parent": "210200"
		},
		{
			"name": "甘井子区",
			"value": "210211",
			"parent": "210200"
		},
		{
			"name": "旅顺口区",
			"value": "210212",
			"parent": "210200"
		},
		{
			"name": "金州区",
			"value": "210213",
			"parent": "210200"
		},
		{
			"name": "长海县",
			"value": "210224",
			"parent": "210200"
		},
		{
			"name": "瓦房店市",
			"value": "210281",
			"parent": "210200"
		},
		{
			"name": "普兰店市",
			"value": "210282",
			"parent": "210200"
		},
		{
			"name": "庄河市",
			"value": "210283",
			"parent": "210200"
		},
		{
			"name": "铁东区",
			"value": "210302",
			"parent": "210300"
		},
		{
			"name": "铁西区",
			"value": "210303",
			"parent": "210300"
		},
		{
			"name": "立山区",
			"value": "210304",
			"parent": "210300"
		},
		{
			"name": "千山区",
			"value": "210311",
			"parent": "210300"
		},
		{
			"name": "台安县",
			"value": "210321",
			"parent": "210300"
		},
		{
			"name": "岫岩满族自治县",
			"value": "210323",
			"parent": "210300"
		},
		{
			"name": "海城市",
			"value": "210381",
			"parent": "210300"
		},
		{
			"name": "新抚区",
			"value": "210402",
			"parent": "210400"
		},
		{
			"name": "东洲区",
			"value": "210403",
			"parent": "210400"
		},
		{
			"name": "望花区",
			"value": "210404",
			"parent": "210400"
		},
		{
			"name": "顺城区",
			"value": "210411",
			"parent": "210400"
		},
		{
			"name": "抚顺县",
			"value": "210421",
			"parent": "210400"
		},
		{
			"name": "新宾满族自治县",
			"value": "210422",
			"parent": "210400"
		},
		{
			"name": "清原满族自治县",
			"value": "210423",
			"parent": "210400"
		},
		{
			"name": "平山区",
			"value": "210502",
			"parent": "210500"
		},
		{
			"name": "溪湖区",
			"value": "210503",
			"parent": "210500"
		},
		{
			"name": "明山区",
			"value": "210504",
			"parent": "210500"
		},
		{
			"name": "南芬区",
			"value": "210505",
			"parent": "210500"
		},
		{
			"name": "本溪满族自治县",
			"value": "210521",
			"parent": "210500"
		},
		{
			"name": "桓仁满族自治县",
			"value": "210522",
			"parent": "210500"
		},
		{
			"name": "元宝区",
			"value": "210602",
			"parent": "210600"
		},
		{
			"name": "振兴区",
			"value": "210603",
			"parent": "210600"
		},
		{
			"name": "振安区",
			"value": "210604",
			"parent": "210600"
		},
		{
			"name": "宽甸满族自治县",
			"value": "210624",
			"parent": "210600"
		},
		{
			"name": "东港市",
			"value": "210681",
			"parent": "210600"
		},
		{
			"name": "凤城市",
			"value": "210682",
			"parent": "210600"
		},
		{
			"name": "古塔区",
			"value": "210702",
			"parent": "210700"
		},
		{
			"name": "凌河区",
			"value": "210703",
			"parent": "210700"
		},
		{
			"name": "太和区",
			"value": "210711",
			"parent": "210700"
		},
		{
			"name": "黑山县",
			"value": "210726",
			"parent": "210700"
		},
		{
			"name": "义县",
			"value": "210727",
			"parent": "210700"
		},
		{
			"name": "凌海市",
			"value": "210781",
			"parent": "210700"
		},
		{
			"name": "北镇市",
			"value": "210782",
			"parent": "210700"
		},
		{
			"name": "站前区",
			"value": "210802",
			"parent": "210800"
		},
		{
			"name": "西市区",
			"value": "210803",
			"parent": "210800"
		},
		{
			"name": "鲅鱼圈区",
			"value": "210804",
			"parent": "210800"
		},
		{
			"name": "老边区",
			"value": "210811",
			"parent": "210800"
		},
		{
			"name": "盖州市",
			"value": "210881",
			"parent": "210800"
		},
		{
			"name": "大石桥市",
			"value": "210882",
			"parent": "210800"
		},
		{
			"name": "海州区",
			"value": "210902",
			"parent": "210900"
		},
		{
			"name": "新邱区",
			"value": "210903",
			"parent": "210900"
		},
		{
			"name": "太平区",
			"value": "210904",
			"parent": "210900"
		},
		{
			"name": "清河门区",
			"value": "210905",
			"parent": "210900"
		},
		{
			"name": "细河区",
			"value": "210911",
			"parent": "210900"
		},
		{
			"name": "阜新蒙古族自治县",
			"value": "210921",
			"parent": "210900"
		},
		{
			"name": "彰武县",
			"value": "210922",
			"parent": "210900"
		},
		{
			"name": "白塔区",
			"value": "211002",
			"parent": "211000"
		},
		{
			"name": "文圣区",
			"value": "211003",
			"parent": "211000"
		},
		{
			"name": "宏伟区",
			"value": "211004",
			"parent": "211000"
		},
		{
			"name": "弓长岭区",
			"value": "211005",
			"parent": "211000"
		},
		{
			"name": "太子河区",
			"value": "211011",
			"parent": "211000"
		},
		{
			"name": "辽阳县",
			"value": "211021",
			"parent": "211000"
		},
		{
			"name": "灯塔市",
			"value": "211081",
			"parent": "211000"
		},
		{
			"name": "双台子区",
			"value": "211102",
			"parent": "211100"
		},
		{
			"name": "兴隆台区",
			"value": "211103",
			"parent": "211100"
		},
		{
			"name": "大洼县",
			"value": "211121",
			"parent": "211100"
		},
		{
			"name": "盘山县",
			"value": "211122",
			"parent": "211100"
		},
		{
			"name": "银州区",
			"value": "211202",
			"parent": "211200"
		},
		{
			"name": "清河区",
			"value": "211204",
			"parent": "211200"
		},
		{
			"name": "铁岭县",
			"value": "211221",
			"parent": "211200"
		},
		{
			"name": "西丰县",
			"value": "211223",
			"parent": "211200"
		},
		{
			"name": "昌图县",
			"value": "211224",
			"parent": "211200"
		},
		{
			"name": "调兵山市",
			"value": "211281",
			"parent": "211200"
		},
		{
			"name": "开原市",
			"value": "211282",
			"parent": "211200"
		},
		{
			"name": "双塔区",
			"value": "211302",
			"parent": "211300"
		},
		{
			"name": "龙城区",
			"value": "211303",
			"parent": "211300"
		},
		{
			"name": "朝阳县",
			"value": "211321",
			"parent": "211300"
		},
		{
			"name": "建平县",
			"value": "211322",
			"parent": "211300"
		},
		{
			"name": "喀喇沁左翼蒙古族自治县",
			"value": "211324",
			"parent": "211300"
		},
		{
			"name": "北票市",
			"value": "211381",
			"parent": "211300"
		},
		{
			"name": "凌源市",
			"value": "211382",
			"parent": "211300"
		},
		{
			"name": "连山区",
			"value": "211402",
			"parent": "211400"
		},
		{
			"name": "龙港区",
			"value": "211403",
			"parent": "211400"
		},
		{
			"name": "南票区",
			"value": "211404",
			"parent": "211400"
		},
		{
			"name": "绥中县",
			"value": "211421",
			"parent": "211400"
		},
		{
			"name": "建昌县",
			"value": "211422",
			"parent": "211400"
		},
		{
			"name": "兴城市",
			"value": "211481",
			"parent": "211400"
		},
		{
			"name": "长春市",
			"value": "220100",
			"parent": "220000"
		},
		{
			"name": "吉林市",
			"value": "220200",
			"parent": "220000"
		},
		{
			"name": "四平市",
			"value": "220300",
			"parent": "220000"
		},
		{
			"name": "辽源市",
			"value": "220400",
			"parent": "220000"
		},
		{
			"name": "通化市",
			"value": "220500",
			"parent": "220000"
		},
		{
			"name": "白山市",
			"value": "220600",
			"parent": "220000"
		},
		{
			"name": "松原市",
			"value": "220700",
			"parent": "220000"
		},
		{
			"name": "白城市",
			"value": "220800",
			"parent": "220000"
		},
		{
			"name": "延边朝鲜族自治州",
			"value": "222400",
			"parent": "220000"
		},
		{
			"name": "南关区",
			"value": "220102",
			"parent": "220100"
		},
		{
			"name": "宽城区",
			"value": "220103",
			"parent": "220100"
		},
		{
			"name": "朝阳区",
			"value": "220104",
			"parent": "220100"
		},
		{
			"name": "二道区",
			"value": "220105",
			"parent": "220100"
		},
		{
			"name": "绿园区",
			"value": "220106",
			"parent": "220100"
		},
		{
			"name": "双阳区",
			"value": "220112",
			"parent": "220100"
		},
		{
			"name": "九台区",
			"value": "220113",
			"parent": "220100"
		},
		{
			"name": "农安县",
			"value": "220122",
			"parent": "220100"
		},
		{
			"name": "榆树市",
			"value": "220182",
			"parent": "220100"
		},
		{
			"name": "德惠市",
			"value": "220183",
			"parent": "220100"
		},
		{
			"name": "昌邑区",
			"value": "220202",
			"parent": "220200"
		},
		{
			"name": "龙潭区",
			"value": "220203",
			"parent": "220200"
		},
		{
			"name": "船营区",
			"value": "220204",
			"parent": "220200"
		},
		{
			"name": "丰满区",
			"value": "220211",
			"parent": "220200"
		},
		{
			"name": "永吉县",
			"value": "220221",
			"parent": "220200"
		},
		{
			"name": "蛟河市",
			"value": "220281",
			"parent": "220200"
		},
		{
			"name": "桦甸市",
			"value": "220282",
			"parent": "220200"
		},
		{
			"name": "舒兰市",
			"value": "220283",
			"parent": "220200"
		},
		{
			"name": "磐石市",
			"value": "220284",
			"parent": "220200"
		},
		{
			"name": "铁西区",
			"value": "220302",
			"parent": "220300"
		},
		{
			"name": "铁东区",
			"value": "220303",
			"parent": "220300"
		},
		{
			"name": "梨树县",
			"value": "220322",
			"parent": "220300"
		},
		{
			"name": "伊通满族自治县",
			"value": "220323",
			"parent": "220300"
		},
		{
			"name": "公主岭市",
			"value": "220381",
			"parent": "220300"
		},
		{
			"name": "双辽市",
			"value": "220382",
			"parent": "220300"
		},
		{
			"name": "龙山区",
			"value": "220402",
			"parent": "220400"
		},
		{
			"name": "西安区",
			"value": "220403",
			"parent": "220400"
		},
		{
			"name": "东丰县",
			"value": "220421",
			"parent": "220400"
		},
		{
			"name": "东辽县",
			"value": "220422",
			"parent": "220400"
		},
		{
			"name": "东昌区",
			"value": "220502",
			"parent": "220500"
		},
		{
			"name": "二道江区",
			"value": "220503",
			"parent": "220500"
		},
		{
			"name": "通化县",
			"value": "220521",
			"parent": "220500"
		},
		{
			"name": "辉南县",
			"value": "220523",
			"parent": "220500"
		},
		{
			"name": "柳河县",
			"value": "220524",
			"parent": "220500"
		},
		{
			"name": "梅河口市",
			"value": "220581",
			"parent": "220500"
		},
		{
			"name": "集安市",
			"value": "220582",
			"parent": "220500"
		},
		{
			"name": "浑江区",
			"value": "220602",
			"parent": "220600"
		},
		{
			"name": "江源区",
			"value": "220605",
			"parent": "220600"
		},
		{
			"name": "抚松县",
			"value": "220621",
			"parent": "220600"
		},
		{
			"name": "靖宇县",
			"value": "220622",
			"parent": "220600"
		},
		{
			"name": "长白朝鲜族自治县",
			"value": "220623",
			"parent": "220600"
		},
		{
			"name": "临江市",
			"value": "220681",
			"parent": "220600"
		},
		{
			"name": "宁江区",
			"value": "220702",
			"parent": "220700"
		},
		{
			"name": "前郭尔罗斯蒙古族自治县",
			"value": "220721",
			"parent": "220700"
		},
		{
			"name": "长岭县",
			"value": "220722",
			"parent": "220700"
		},
		{
			"name": "乾安县",
			"value": "220723",
			"parent": "220700"
		},
		{
			"name": "扶余市",
			"value": "220781",
			"parent": "220700"
		},
		{
			"name": "洮北区",
			"value": "220802",
			"parent": "220800"
		},
		{
			"name": "镇赉县",
			"value": "220821",
			"parent": "220800"
		},
		{
			"name": "通榆县",
			"value": "220822",
			"parent": "220800"
		},
		{
			"name": "洮南市",
			"value": "220881",
			"parent": "220800"
		},
		{
			"name": "大安市",
			"value": "220882",
			"parent": "220800"
		},
		{
			"name": "延吉市",
			"value": "222401",
			"parent": "222400"
		},
		{
			"name": "图们市",
			"value": "222402",
			"parent": "222400"
		},
		{
			"name": "敦化市",
			"value": "222403",
			"parent": "222400"
		},
		{
			"name": "珲春市",
			"value": "222404",
			"parent": "222400"
		},
		{
			"name": "龙井市",
			"value": "222405",
			"parent": "222400"
		},
		{
			"name": "和龙市",
			"value": "222406",
			"parent": "222400"
		},
		{
			"name": "汪清县",
			"value": "222424",
			"parent": "222400"
		},
		{
			"name": "安图县",
			"value": "222426",
			"parent": "222400"
		},
		{
			"name": "哈尔滨市",
			"value": "230100",
			"parent": "230000"
		},
		{
			"name": "齐齐哈尔市",
			"value": "230200",
			"parent": "230000"
		},
		{
			"name": "鸡西市",
			"value": "230300",
			"parent": "230000"
		},
		{
			"name": "鹤岗市",
			"value": "230400",
			"parent": "230000"
		},
		{
			"name": "双鸭山市",
			"value": "230500",
			"parent": "230000"
		},
		{
			"name": "大庆市",
			"value": "230600",
			"parent": "230000"
		},
		{
			"name": "伊春市",
			"value": "230700",
			"parent": "230000"
		},
		{
			"name": "佳木斯市",
			"value": "230800",
			"parent": "230000"
		},
		{
			"name": "七台河市",
			"value": "230900",
			"parent": "230000"
		},
		{
			"name": "牡丹江市",
			"value": "231000",
			"parent": "230000"
		},
		{
			"name": "黑河市",
			"value": "231100",
			"parent": "230000"
		},
		{
			"name": "绥化市",
			"value": "231200",
			"parent": "230000"
		},
		{
			"name": "大兴安岭地区",
			"value": "232700",
			"parent": "230000"
		},
		{
			"name": "道里区",
			"value": "230102",
			"parent": "230100"
		},
		{
			"name": "南岗区",
			"value": "230103",
			"parent": "230100"
		},
		{
			"name": "道外区",
			"value": "230104",
			"parent": "230100"
		},
		{
			"name": "平房区",
			"value": "230108",
			"parent": "230100"
		},
		{
			"name": "松北区",
			"value": "230109",
			"parent": "230100"
		},
		{
			"name": "香坊区",
			"value": "230110",
			"parent": "230100"
		},
		{
			"name": "呼兰区",
			"value": "230111",
			"parent": "230100"
		},
		{
			"name": "阿城区",
			"value": "230112",
			"parent": "230100"
		},
		{
			"name": "双城区",
			"value": "230113",
			"parent": "230100"
		},
		{
			"name": "依兰县",
			"value": "230123",
			"parent": "230100"
		},
		{
			"name": "方正县",
			"value": "230124",
			"parent": "230100"
		},
		{
			"name": "宾县",
			"value": "230125",
			"parent": "230100"
		},
		{
			"name": "巴彦县",
			"value": "230126",
			"parent": "230100"
		},
		{
			"name": "木兰县",
			"value": "230127",
			"parent": "230100"
		},
		{
			"name": "通河县",
			"value": "230128",
			"parent": "230100"
		},
		{
			"name": "延寿县",
			"value": "230129",
			"parent": "230100"
		},
		{
			"name": "尚志市",
			"value": "230183",
			"parent": "230100"
		},
		{
			"name": "五常市",
			"value": "230184",
			"parent": "230100"
		},
		{
			"name": "龙沙区",
			"value": "230202",
			"parent": "230200"
		},
		{
			"name": "建华区",
			"value": "230203",
			"parent": "230200"
		},
		{
			"name": "铁锋区",
			"value": "230204",
			"parent": "230200"
		},
		{
			"name": "昂昂溪区",
			"value": "230205",
			"parent": "230200"
		},
		{
			"name": "富拉尔基区",
			"value": "230206",
			"parent": "230200"
		},
		{
			"name": "碾子山区",
			"value": "230207",
			"parent": "230200"
		},
		{
			"name": "梅里斯达斡尔族区",
			"value": "230208",
			"parent": "230200"
		},
		{
			"name": "龙江县",
			"value": "230221",
			"parent": "230200"
		},
		{
			"name": "依安县",
			"value": "230223",
			"parent": "230200"
		},
		{
			"name": "泰来县",
			"value": "230224",
			"parent": "230200"
		},
		{
			"name": "甘南县",
			"value": "230225",
			"parent": "230200"
		},
		{
			"name": "富裕县",
			"value": "230227",
			"parent": "230200"
		},
		{
			"name": "克山县",
			"value": "230229",
			"parent": "230200"
		},
		{
			"name": "克东县",
			"value": "230230",
			"parent": "230200"
		},
		{
			"name": "拜泉县",
			"value": "230231",
			"parent": "230200"
		},
		{
			"name": "讷河市",
			"value": "230281",
			"parent": "230200"
		},
		{
			"name": "鸡冠区",
			"value": "230302",
			"parent": "230300"
		},
		{
			"name": "恒山区",
			"value": "230303",
			"parent": "230300"
		},
		{
			"name": "滴道区",
			"value": "230304",
			"parent": "230300"
		},
		{
			"name": "梨树区",
			"value": "230305",
			"parent": "230300"
		},
		{
			"name": "城子河区",
			"value": "230306",
			"parent": "230300"
		},
		{
			"name": "麻山区",
			"value": "230307",
			"parent": "230300"
		},
		{
			"name": "鸡东县",
			"value": "230321",
			"parent": "230300"
		},
		{
			"name": "虎林市",
			"value": "230381",
			"parent": "230300"
		},
		{
			"name": "密山市",
			"value": "230382",
			"parent": "230300"
		},
		{
			"name": "向阳区",
			"value": "230402",
			"parent": "230400"
		},
		{
			"name": "工农区",
			"value": "230403",
			"parent": "230400"
		},
		{
			"name": "南山区",
			"value": "230404",
			"parent": "230400"
		},
		{
			"name": "兴安区",
			"value": "230405",
			"parent": "230400"
		},
		{
			"name": "东山区",
			"value": "230406",
			"parent": "230400"
		},
		{
			"name": "兴山区",
			"value": "230407",
			"parent": "230400"
		},
		{
			"name": "萝北县",
			"value": "230421",
			"parent": "230400"
		},
		{
			"name": "绥滨县",
			"value": "230422",
			"parent": "230400"
		},
		{
			"name": "尖山区",
			"value": "230502",
			"parent": "230500"
		},
		{
			"name": "岭东区",
			"value": "230503",
			"parent": "230500"
		},
		{
			"name": "四方台区",
			"value": "230505",
			"parent": "230500"
		},
		{
			"name": "宝山区",
			"value": "230506",
			"parent": "230500"
		},
		{
			"name": "集贤县",
			"value": "230521",
			"parent": "230500"
		},
		{
			"name": "友谊县",
			"value": "230522",
			"parent": "230500"
		},
		{
			"name": "宝清县",
			"value": "230523",
			"parent": "230500"
		},
		{
			"name": "饶河县",
			"value": "230524",
			"parent": "230500"
		},
		{
			"name": "萨尔图区",
			"value": "230602",
			"parent": "230600"
		},
		{
			"name": "龙凤区",
			"value": "230603",
			"parent": "230600"
		},
		{
			"name": "让胡路区",
			"value": "230604",
			"parent": "230600"
		},
		{
			"name": "红岗区",
			"value": "230605",
			"parent": "230600"
		},
		{
			"name": "大同区",
			"value": "230606",
			"parent": "230600"
		},
		{
			"name": "肇州县",
			"value": "230621",
			"parent": "230600"
		},
		{
			"name": "肇源县",
			"value": "230622",
			"parent": "230600"
		},
		{
			"name": "林甸县",
			"value": "230623",
			"parent": "230600"
		},
		{
			"name": "杜尔伯特蒙古族自治县",
			"value": "230624",
			"parent": "230600"
		},
		{
			"name": "伊春区",
			"value": "230702",
			"parent": "230700"
		},
		{
			"name": "南岔区",
			"value": "230703",
			"parent": "230700"
		},
		{
			"name": "友好区",
			"value": "230704",
			"parent": "230700"
		},
		{
			"name": "西林区",
			"value": "230705",
			"parent": "230700"
		},
		{
			"name": "翠峦区",
			"value": "230706",
			"parent": "230700"
		},
		{
			"name": "新青区",
			"value": "230707",
			"parent": "230700"
		},
		{
			"name": "美溪区",
			"value": "230708",
			"parent": "230700"
		},
		{
			"name": "金山屯区",
			"value": "230709",
			"parent": "230700"
		},
		{
			"name": "五营区",
			"value": "230710",
			"parent": "230700"
		},
		{
			"name": "乌马河区",
			"value": "230711",
			"parent": "230700"
		},
		{
			"name": "汤旺河区",
			"value": "230712",
			"parent": "230700"
		},
		{
			"name": "带岭区",
			"value": "230713",
			"parent": "230700"
		},
		{
			"name": "乌伊岭区",
			"value": "230714",
			"parent": "230700"
		},
		{
			"name": "红星区",
			"value": "230715",
			"parent": "230700"
		},
		{
			"name": "上甘岭区",
			"value": "230716",
			"parent": "230700"
		},
		{
			"name": "嘉荫县",
			"value": "230722",
			"parent": "230700"
		},
		{
			"name": "铁力市",
			"value": "230781",
			"parent": "230700"
		},
		{
			"name": "向阳区",
			"value": "230803",
			"parent": "230800"
		},
		{
			"name": "前进区",
			"value": "230804",
			"parent": "230800"
		},
		{
			"name": "东风区",
			"value": "230805",
			"parent": "230800"
		},
		{
			"name": "郊区",
			"value": "230811",
			"parent": "230800"
		},
		{
			"name": "桦南县",
			"value": "230822",
			"parent": "230800"
		},
		{
			"name": "桦川县",
			"value": "230826",
			"parent": "230800"
		},
		{
			"name": "汤原县",
			"value": "230828",
			"parent": "230800"
		},
		{
			"name": "抚远县",
			"value": "230833",
			"parent": "230800"
		},
		{
			"name": "同江市",
			"value": "230881",
			"parent": "230800"
		},
		{
			"name": "富锦市",
			"value": "230882",
			"parent": "230800"
		},
		{
			"name": "新兴区",
			"value": "230902",
			"parent": "230900"
		},
		{
			"name": "桃山区",
			"value": "230903",
			"parent": "230900"
		},
		{
			"name": "茄子河区",
			"value": "230904",
			"parent": "230900"
		},
		{
			"name": "勃利县",
			"value": "230921",
			"parent": "230900"
		},
		{
			"name": "东安区",
			"value": "231002",
			"parent": "231000"
		},
		{
			"name": "阳明区",
			"value": "231003",
			"parent": "231000"
		},
		{
			"name": "爱民区",
			"value": "231004",
			"parent": "231000"
		},
		{
			"name": "西安区",
			"value": "231005",
			"parent": "231000"
		},
		{
			"name": "东宁县",
			"value": "231024",
			"parent": "231000"
		},
		{
			"name": "林口县",
			"value": "231025",
			"parent": "231000"
		},
		{
			"name": "绥芬河市",
			"value": "231081",
			"parent": "231000"
		},
		{
			"name": "海林市",
			"value": "231083",
			"parent": "231000"
		},
		{
			"name": "宁安市",
			"value": "231084",
			"parent": "231000"
		},
		{
			"name": "穆棱市",
			"value": "231085",
			"parent": "231000"
		},
		{
			"name": "爱辉区",
			"value": "231102",
			"parent": "231100"
		},
		{
			"name": "嫩江县",
			"value": "231121",
			"parent": "231100"
		},
		{
			"name": "逊克县",
			"value": "231123",
			"parent": "231100"
		},
		{
			"name": "孙吴县",
			"value": "231124",
			"parent": "231100"
		},
		{
			"name": "北安市",
			"value": "231181",
			"parent": "231100"
		},
		{
			"name": "五大连池市",
			"value": "231182",
			"parent": "231100"
		},
		{
			"name": "北林区",
			"value": "231202",
			"parent": "231200"
		},
		{
			"name": "望奎县",
			"value": "231221",
			"parent": "231200"
		},
		{
			"name": "兰西县",
			"value": "231222",
			"parent": "231200"
		},
		{
			"name": "青冈县",
			"value": "231223",
			"parent": "231200"
		},
		{
			"name": "庆安县",
			"value": "231224",
			"parent": "231200"
		},
		{
			"name": "明水县",
			"value": "231225",
			"parent": "231200"
		},
		{
			"name": "绥棱县",
			"value": "231226",
			"parent": "231200"
		},
		{
			"name": "安达市",
			"value": "231281",
			"parent": "231200"
		},
		{
			"name": "肇东市",
			"value": "231282",
			"parent": "231200"
		},
		{
			"name": "海伦市",
			"value": "231283",
			"parent": "231200"
		},
		{
			"name": "加格达奇区",
			"value": "232701",
			"parent": "232700"
		},
		{
			"name": "呼玛县",
			"value": "232721",
			"parent": "232700"
		},
		{
			"name": "塔河县",
			"value": "232722",
			"parent": "232700"
		},
		{
			"name": "漠河县",
			"value": "232723",
			"parent": "232700"
		},
		{
			"name": "上海市市辖区",
			"value": "310100",
			"parent": "310000"
		},
		{
			"name": "上海市郊县",
			"value": "310200",
			"parent": "310000"
		},
		{
			"name": "黄浦区",
			"value": "310101",
			"parent": "310100"
		},
		{
			"name": "徐汇区",
			"value": "310104",
			"parent": "310100"
		},
		{
			"name": "长宁区",
			"value": "310105",
			"parent": "310100"
		},
		{
			"name": "静安区",
			"value": "310106",
			"parent": "310100"
		},
		{
			"name": "普陀区",
			"value": "310107",
			"parent": "310100"
		},
		{
			"name": "闸北区",
			"value": "310108",
			"parent": "310100"
		},
		{
			"name": "虹口区",
			"value": "310109",
			"parent": "310100"
		},
		{
			"name": "杨浦区",
			"value": "310110",
			"parent": "310100"
		},
		{
			"name": "闵行区",
			"value": "310112",
			"parent": "310100"
		},
		{
			"name": "宝山区",
			"value": "310113",
			"parent": "310100"
		},
		{
			"name": "嘉定区",
			"value": "310114",
			"parent": "310100"
		},
		{
			"name": "浦东新区",
			"value": "310115",
			"parent": "310100"
		},
		{
			"name": "金山区",
			"value": "310116",
			"parent": "310100"
		},
		{
			"name": "松江区",
			"value": "310117",
			"parent": "310100"
		},
		{
			"name": "青浦区",
			"value": "310118",
			"parent": "310100"
		},
		{
			"name": "奉贤区",
			"value": "310120",
			"parent": "310100"
		},
		{
			"name": "崇明县",
			"value": "310230",
			"parent": "310100"
		},
		{
			"name": "南京市",
			"value": "320100",
			"parent": "320000"
		},
		{
			"name": "无锡市",
			"value": "320200",
			"parent": "320000"
		},
		{
			"name": "徐州市",
			"value": "320300",
			"parent": "320000"
		},
		{
			"name": "常州市",
			"value": "320400",
			"parent": "320000"
		},
		{
			"name": "苏州市",
			"value": "320500",
			"parent": "320000"
		},
		{
			"name": "南通市",
			"value": "320600",
			"parent": "320000"
		},
		{
			"name": "连云港市",
			"value": "320700",
			"parent": "320000"
		},
		{
			"name": "淮安市",
			"value": "320800",
			"parent": "320000"
		},
		{
			"name": "盐城市",
			"value": "320900",
			"parent": "320000"
		},
		{
			"name": "扬州市",
			"value": "321000",
			"parent": "320000"
		},
		{
			"name": "镇江市",
			"value": "321100",
			"parent": "320000"
		},
		{
			"name": "泰州市",
			"value": "321200",
			"parent": "320000"
		},
		{
			"name": "宿迁市",
			"value": "321300",
			"parent": "320000"
		},
		{
			"name": "玄武区",
			"value": "320102",
			"parent": "320100"
		},
		{
			"name": "秦淮区",
			"value": "320104",
			"parent": "320100"
		},
		{
			"name": "建邺区",
			"value": "320105",
			"parent": "320100"
		},
		{
			"name": "鼓楼区",
			"value": "320106",
			"parent": "320100"
		},
		{
			"name": "浦口区",
			"value": "320111",
			"parent": "320100"
		},
		{
			"name": "栖霞区",
			"value": "320113",
			"parent": "320100"
		},
		{
			"name": "雨花台区",
			"value": "320114",
			"parent": "320100"
		},
		{
			"name": "江宁区",
			"value": "320115",
			"parent": "320100"
		},
		{
			"name": "六合区",
			"value": "320116",
			"parent": "320100"
		},
		{
			"name": "溧水区",
			"value": "320117",
			"parent": "320100"
		},
		{
			"name": "高淳区",
			"value": "320118",
			"parent": "320100"
		},
		{
			"name": "崇安区",
			"value": "320202",
			"parent": "320200"
		},
		{
			"name": "南长区",
			"value": "320203",
			"parent": "320200"
		},
		{
			"name": "北塘区",
			"value": "320204",
			"parent": "320200"
		},
		{
			"name": "锡山区",
			"value": "320205",
			"parent": "320200"
		},
		{
			"name": "惠山区",
			"value": "320206",
			"parent": "320200"
		},
		{
			"name": "滨湖区",
			"value": "320211",
			"parent": "320200"
		},
		{
			"name": "江阴市",
			"value": "320281",
			"parent": "320200"
		},
		{
			"name": "宜兴市",
			"value": "320282",
			"parent": "320200"
		},
		{
			"name": "鼓楼区",
			"value": "320302",
			"parent": "320300"
		},
		{
			"name": "云龙区",
			"value": "320303",
			"parent": "320300"
		},
		{
			"name": "贾汪区",
			"value": "320305",
			"parent": "320300"
		},
		{
			"name": "泉山区",
			"value": "320311",
			"parent": "320300"
		},
		{
			"name": "铜山区",
			"value": "320312",
			"parent": "320300"
		},
		{
			"name": "丰县",
			"value": "320321",
			"parent": "320300"
		},
		{
			"name": "沛县",
			"value": "320322",
			"parent": "320300"
		},
		{
			"name": "睢宁县",
			"value": "320324",
			"parent": "320300"
		},
		{
			"name": "新沂市",
			"value": "320381",
			"parent": "320300"
		},
		{
			"name": "邳州市",
			"value": "320382",
			"parent": "320300"
		},
		{
			"name": "天宁区",
			"value": "320402",
			"parent": "320400"
		},
		{
			"name": "钟楼区",
			"value": "320404",
			"parent": "320400"
		},
		{
			"name": "新北区",
			"value": "320411",
			"parent": "320400"
		},
		{
			"name": "武进区",
			"value": "320412",
			"parent": "320400"
		},
		{
			"name": "金坛区",
			"value": "320413",
			"parent": "320400"
		},
		{
			"name": "溧阳市",
			"value": "320481",
			"parent": "320400"
		},
		{
			"name": "虎丘区",
			"value": "320505",
			"parent": "320500"
		},
		{
			"name": "吴中区",
			"value": "320506",
			"parent": "320500"
		},
		{
			"name": "相城区",
			"value": "320507",
			"parent": "320500"
		},
		{
			"name": "姑苏区",
			"value": "320508",
			"parent": "320500"
		},
		{
			"name": "吴江区",
			"value": "320509",
			"parent": "320500"
		},
		{
			"name": "常熟市",
			"value": "320581",
			"parent": "320500"
		},
		{
			"name": "张家港市",
			"value": "320582",
			"parent": "320500"
		},
		{
			"name": "昆山市",
			"value": "320583",
			"parent": "320500"
		},
		{
			"name": "太仓市",
			"value": "320585",
			"parent": "320500"
		},
		{
			"name": "崇川区",
			"value": "320602",
			"parent": "320600"
		},
		{
			"name": "港闸区",
			"value": "320611",
			"parent": "320600"
		},
		{
			"name": "通州区",
			"value": "320612",
			"parent": "320600"
		},
		{
			"name": "海安县",
			"value": "320621",
			"parent": "320600"
		},
		{
			"name": "如东县",
			"value": "320623",
			"parent": "320600"
		},
		{
			"name": "启东市",
			"value": "320681",
			"parent": "320600"
		},
		{
			"name": "如皋市",
			"value": "320682",
			"parent": "320600"
		},
		{
			"name": "海门市",
			"value": "320684",
			"parent": "320600"
		},
		{
			"name": "连云区",
			"value": "320703",
			"parent": "320700"
		},
		{
			"name": "海州区",
			"value": "320706",
			"parent": "320700"
		},
		{
			"name": "赣榆区",
			"value": "320707",
			"parent": "320700"
		},
		{
			"name": "东海县",
			"value": "320722",
			"parent": "320700"
		},
		{
			"name": "灌云县",
			"value": "320723",
			"parent": "320700"
		},
		{
			"name": "灌南县",
			"value": "320724",
			"parent": "320700"
		},
		{
			"name": "清河区",
			"value": "320802",
			"parent": "320800"
		},
		{
			"name": "淮安区",
			"value": "320803",
			"parent": "320800"
		},
		{
			"name": "淮阴区",
			"value": "320804",
			"parent": "320800"
		},
		{
			"name": "清浦区",
			"value": "320811",
			"parent": "320800"
		},
		{
			"name": "涟水县",
			"value": "320826",
			"parent": "320800"
		},
		{
			"name": "洪泽县",
			"value": "320829",
			"parent": "320800"
		},
		{
			"name": "盱眙县",
			"value": "320830",
			"parent": "320800"
		},
		{
			"name": "金湖县",
			"value": "320831",
			"parent": "320800"
		},
		{
			"name": "亭湖区",
			"value": "320902",
			"parent": "320900"
		},
		{
			"name": "盐都区",
			"value": "320903",
			"parent": "320900"
		},
		{
			"name": "大丰区",
			"value": "320904",
			"parent": "320900"
		},
		{
			"name": "响水县",
			"value": "320921",
			"parent": "320900"
		},
		{
			"name": "滨海县",
			"value": "320922",
			"parent": "320900"
		},
		{
			"name": "阜宁县",
			"value": "320923",
			"parent": "320900"
		},
		{
			"name": "射阳县",
			"value": "320924",
			"parent": "320900"
		},
		{
			"name": "建湖县",
			"value": "320925",
			"parent": "320900"
		},
		{
			"name": "东台市",
			"value": "320981",
			"parent": "320900"
		},
		{
			"name": "广陵区",
			"value": "321002",
			"parent": "321000"
		},
		{
			"name": "邗江区",
			"value": "321003",
			"parent": "321000"
		},
		{
			"name": "江都区",
			"value": "321012",
			"parent": "321000"
		},
		{
			"name": "宝应县",
			"value": "321023",
			"parent": "321000"
		},
		{
			"name": "仪征市",
			"value": "321081",
			"parent": "321000"
		},
		{
			"name": "高邮市",
			"value": "321084",
			"parent": "321000"
		},
		{
			"name": "京口区",
			"value": "321102",
			"parent": "321100"
		},
		{
			"name": "润州区",
			"value": "321111",
			"parent": "321100"
		},
		{
			"name": "丹徒区",
			"value": "321112",
			"parent": "321100"
		},
		{
			"name": "丹阳市",
			"value": "321181",
			"parent": "321100"
		},
		{
			"name": "扬中市",
			"value": "321182",
			"parent": "321100"
		},
		{
			"name": "句容市",
			"value": "321183",
			"parent": "321100"
		},
		{
			"name": "海陵区",
			"value": "321202",
			"parent": "321200"
		},
		{
			"name": "高港区",
			"value": "321203",
			"parent": "321200"
		},
		{
			"name": "姜堰区",
			"value": "321204",
			"parent": "321200"
		},
		{
			"name": "兴化市",
			"value": "321281",
			"parent": "321200"
		},
		{
			"name": "靖江市",
			"value": "321282",
			"parent": "321200"
		},
		{
			"name": "泰兴市",
			"value": "321283",
			"parent": "321200"
		},
		{
			"name": "宿城区",
			"value": "321302",
			"parent": "321300"
		},
		{
			"name": "宿豫区",
			"value": "321311",
			"parent": "321300"
		},
		{
			"name": "沭阳县",
			"value": "321322",
			"parent": "321300"
		},
		{
			"name": "泗阳县",
			"value": "321323",
			"parent": "321300"
		},
		{
			"name": "泗洪县",
			"value": "321324",
			"parent": "321300"
		},
		{
			"name": "杭州市",
			"value": "330100",
			"parent": "330000"
		},
		{
			"name": "宁波市",
			"value": "330200",
			"parent": "330000"
		},
		{
			"name": "温州市",
			"value": "330300",
			"parent": "330000"
		},
		{
			"name": "嘉兴市",
			"value": "330400",
			"parent": "330000"
		},
		{
			"name": "湖州市",
			"value": "330500",
			"parent": "330000"
		},
		{
			"name": "绍兴市",
			"value": "330600",
			"parent": "330000"
		},
		{
			"name": "金华市",
			"value": "330700",
			"parent": "330000"
		},
		{
			"name": "衢州市",
			"value": "330800",
			"parent": "330000"
		},
		{
			"name": "舟山市",
			"value": "330900",
			"parent": "330000"
		},
		{
			"name": "台州市",
			"value": "331000",
			"parent": "330000"
		},
		{
			"name": "丽水市",
			"value": "331100",
			"parent": "330000"
		},
		{
			"name": "上城区",
			"value": "330102",
			"parent": "330100"
		},
		{
			"name": "下城区",
			"value": "330103",
			"parent": "330100"
		},
		{
			"name": "江干区",
			"value": "330104",
			"parent": "330100"
		},
		{
			"name": "拱墅区",
			"value": "330105",
			"parent": "330100"
		},
		{
			"name": "西湖区",
			"value": "330106",
			"parent": "330100"
		},
		{
			"name": "滨江区",
			"value": "330108",
			"parent": "330100"
		},
		{
			"name": "萧山区",
			"value": "330109",
			"parent": "330100"
		},
		{
			"name": "余杭区",
			"value": "330110",
			"parent": "330100"
		},
		{
			"name": "富阳区",
			"value": "330111",
			"parent": "330100"
		},
		{
			"name": "桐庐县",
			"value": "330122",
			"parent": "330100"
		},
		{
			"name": "淳安县",
			"value": "330127",
			"parent": "330100"
		},
		{
			"name": "建德市",
			"value": "330182",
			"parent": "330100"
		},
		{
			"name": "临安市",
			"value": "330185",
			"parent": "330100"
		},
		{
			"name": "海曙区",
			"value": "330203",
			"parent": "330200"
		},
		{
			"name": "江东区",
			"value": "330204",
			"parent": "330200"
		},
		{
			"name": "江北区",
			"value": "330205",
			"parent": "330200"
		},
		{
			"name": "北仑区",
			"value": "330206",
			"parent": "330200"
		},
		{
			"name": "镇海区",
			"value": "330211",
			"parent": "330200"
		},
		{
			"name": "鄞州区",
			"value": "330212",
			"parent": "330200"
		},
		{
			"name": "象山县",
			"value": "330225",
			"parent": "330200"
		},
		{
			"name": "宁海县",
			"value": "330226",
			"parent": "330200"
		},
		{
			"name": "余姚市",
			"value": "330281",
			"parent": "330200"
		},
		{
			"name": "慈溪市",
			"value": "330282",
			"parent": "330200"
		},
		{
			"name": "奉化市",
			"value": "330283",
			"parent": "330200"
		},
		{
			"name": "鹿城区",
			"value": "330302",
			"parent": "330300"
		},
		{
			"name": "龙湾区",
			"value": "330303",
			"parent": "330300"
		},
		{
			"name": "瓯海区",
			"value": "330304",
			"parent": "330300"
		},
		{
			"name": "洞头区",
			"value": "330305",
			"parent": "330300"
		},
		{
			"name": "永嘉县",
			"value": "330324",
			"parent": "330300"
		},
		{
			"name": "平阳县",
			"value": "330326",
			"parent": "330300"
		},
		{
			"name": "苍南县",
			"value": "330327",
			"parent": "330300"
		},
		{
			"name": "文成县",
			"value": "330328",
			"parent": "330300"
		},
		{
			"name": "泰顺县",
			"value": "330329",
			"parent": "330300"
		},
		{
			"name": "瑞安市",
			"value": "330381",
			"parent": "330300"
		},
		{
			"name": "乐清市",
			"value": "330382",
			"parent": "330300"
		},
		{
			"name": "南湖区",
			"value": "330402",
			"parent": "330400"
		},
		{
			"name": "秀洲区",
			"value": "330411",
			"parent": "330400"
		},
		{
			"name": "嘉善县",
			"value": "330421",
			"parent": "330400"
		},
		{
			"name": "海盐县",
			"value": "330424",
			"parent": "330400"
		},
		{
			"name": "海宁市",
			"value": "330481",
			"parent": "330400"
		},
		{
			"name": "平湖市",
			"value": "330482",
			"parent": "330400"
		},
		{
			"name": "桐乡市",
			"value": "330483",
			"parent": "330400"
		},
		{
			"name": "吴兴区",
			"value": "330502",
			"parent": "330500"
		},
		{
			"name": "南浔区",
			"value": "330503",
			"parent": "330500"
		},
		{
			"name": "德清县",
			"value": "330521",
			"parent": "330500"
		},
		{
			"name": "长兴县",
			"value": "330522",
			"parent": "330500"
		},
		{
			"name": "安吉县",
			"value": "330523",
			"parent": "330500"
		},
		{
			"name": "越城区",
			"value": "330602",
			"parent": "330600"
		},
		{
			"name": "柯桥区",
			"value": "330603",
			"parent": "330600"
		},
		{
			"name": "上虞区",
			"value": "330604",
			"parent": "330600"
		},
		{
			"name": "新昌县",
			"value": "330624",
			"parent": "330600"
		},
		{
			"name": "诸暨市",
			"value": "330681",
			"parent": "330600"
		},
		{
			"name": "嵊州市",
			"value": "330683",
			"parent": "330600"
		},
		{
			"name": "婺城区",
			"value": "330702",
			"parent": "330700"
		},
		{
			"name": "金东区",
			"value": "330703",
			"parent": "330700"
		},
		{
			"name": "武义县",
			"value": "330723",
			"parent": "330700"
		},
		{
			"name": "浦江县",
			"value": "330726",
			"parent": "330700"
		},
		{
			"name": "磐安县",
			"value": "330727",
			"parent": "330700"
		},
		{
			"name": "兰溪市",
			"value": "330781",
			"parent": "330700"
		},
		{
			"name": "义乌市",
			"value": "330782",
			"parent": "330700"
		},
		{
			"name": "东阳市",
			"value": "330783",
			"parent": "330700"
		},
		{
			"name": "永康市",
			"value": "330784",
			"parent": "330700"
		},
		{
			"name": "柯城区",
			"value": "330802",
			"parent": "330800"
		},
		{
			"name": "衢江区",
			"value": "330803",
			"parent": "330800"
		},
		{
			"name": "常山县",
			"value": "330822",
			"parent": "330800"
		},
		{
			"name": "开化县",
			"value": "330824",
			"parent": "330800"
		},
		{
			"name": "龙游县",
			"value": "330825",
			"parent": "330800"
		},
		{
			"name": "江山市",
			"value": "330881",
			"parent": "330800"
		},
		{
			"name": "定海区",
			"value": "330902",
			"parent": "330900"
		},
		{
			"name": "普陀区",
			"value": "330903",
			"parent": "330900"
		},
		{
			"name": "岱山县",
			"value": "330921",
			"parent": "330900"
		},
		{
			"name": "嵊泗县",
			"value": "330922",
			"parent": "330900"
		},
		{
			"name": "椒江区",
			"value": "331002",
			"parent": "331000"
		},
		{
			"name": "黄岩区",
			"value": "331003",
			"parent": "331000"
		},
		{
			"name": "路桥区",
			"value": "331004",
			"parent": "331000"
		},
		{
			"name": "玉环县",
			"value": "331021",
			"parent": "331000"
		},
		{
			"name": "三门县",
			"value": "331022",
			"parent": "331000"
		},
		{
			"name": "天台县",
			"value": "331023",
			"parent": "331000"
		},
		{
			"name": "仙居县",
			"value": "331024",
			"parent": "331000"
		},
		{
			"name": "温岭市",
			"value": "331081",
			"parent": "331000"
		},
		{
			"name": "临海市",
			"value": "331082",
			"parent": "331000"
		},
		{
			"name": "莲都区",
			"value": "331102",
			"parent": "331100"
		},
		{
			"name": "青田县",
			"value": "331121",
			"parent": "331100"
		},
		{
			"name": "缙云县",
			"value": "331122",
			"parent": "331100"
		},
		{
			"name": "遂昌县",
			"value": "331123",
			"parent": "331100"
		},
		{
			"name": "松阳县",
			"value": "331124",
			"parent": "331100"
		},
		{
			"name": "云和县",
			"value": "331125",
			"parent": "331100"
		},
		{
			"name": "庆元县",
			"value": "331126",
			"parent": "331100"
		},
		{
			"name": "景宁畲族自治县",
			"value": "331127",
			"parent": "331100"
		},
		{
			"name": "龙泉市",
			"value": "331181",
			"parent": "331100"
		},
		{
			"name": "合肥市",
			"value": "340100",
			"parent": "340000"
		},
		{
			"name": "芜湖市",
			"value": "340200",
			"parent": "340000"
		},
		{
			"name": "蚌埠市",
			"value": "340300",
			"parent": "340000"
		},
		{
			"name": "淮南市",
			"value": "340400",
			"parent": "340000"
		},
		{
			"name": "马鞍山市",
			"value": "340500",
			"parent": "340000"
		},
		{
			"name": "淮北市",
			"value": "340600",
			"parent": "340000"
		},
		{
			"name": "铜陵市",
			"value": "340700",
			"parent": "340000"
		},
		{
			"name": "安庆市",
			"value": "340800",
			"parent": "340000"
		},
		{
			"name": "黄山市",
			"value": "341000",
			"parent": "340000"
		},
		{
			"name": "滁州市",
			"value": "341100",
			"parent": "340000"
		},
		{
			"name": "阜阳市",
			"value": "341200",
			"parent": "340000"
		},
		{
			"name": "宿州市",
			"value": "341300",
			"parent": "340000"
		},
		{
			"name": "六安市",
			"value": "341500",
			"parent": "340000"
		},
		{
			"name": "亳州市",
			"value": "341600",
			"parent": "340000"
		},
		{
			"name": "池州市",
			"value": "341700",
			"parent": "340000"
		},
		{
			"name": "宣城市",
			"value": "341800",
			"parent": "340000"
		},
		{
			"name": "瑶海区",
			"value": "340102",
			"parent": "340100"
		},
		{
			"name": "庐阳区",
			"value": "340103",
			"parent": "340100"
		},
		{
			"name": "蜀山区",
			"value": "340104",
			"parent": "340100"
		},
		{
			"name": "包河区",
			"value": "340111",
			"parent": "340100"
		},
		{
			"name": "长丰县",
			"value": "340121",
			"parent": "340100"
		},
		{
			"name": "肥东县",
			"value": "340122",
			"parent": "340100"
		},
		{
			"name": "肥西县",
			"value": "340123",
			"parent": "340100"
		},
		{
			"name": "庐江县",
			"value": "340124",
			"parent": "340100"
		},
		{
			"name": "巢湖市",
			"value": "340181",
			"parent": "340100"
		},
		{
			"name": "镜湖区",
			"value": "340202",
			"parent": "340200"
		},
		{
			"name": "弋江区",
			"value": "340203",
			"parent": "340200"
		},
		{
			"name": "鸠江区",
			"value": "340207",
			"parent": "340200"
		},
		{
			"name": "三山区",
			"value": "340208",
			"parent": "340200"
		},
		{
			"name": "芜湖县",
			"value": "340221",
			"parent": "340200"
		},
		{
			"name": "繁昌县",
			"value": "340222",
			"parent": "340200"
		},
		{
			"name": "南陵县",
			"value": "340223",
			"parent": "340200"
		},
		{
			"name": "无为县",
			"value": "340225",
			"parent": "340200"
		},
		{
			"name": "龙子湖区",
			"value": "340302",
			"parent": "340300"
		},
		{
			"name": "蚌山区",
			"value": "340303",
			"parent": "340300"
		},
		{
			"name": "禹会区",
			"value": "340304",
			"parent": "340300"
		},
		{
			"name": "淮上区",
			"value": "340311",
			"parent": "340300"
		},
		{
			"name": "怀远县",
			"value": "340321",
			"parent": "340300"
		},
		{
			"name": "五河县",
			"value": "340322",
			"parent": "340300"
		},
		{
			"name": "固镇县",
			"value": "340323",
			"parent": "340300"
		},
		{
			"name": "大通区",
			"value": "340402",
			"parent": "340400"
		},
		{
			"name": "田家庵区",
			"value": "340403",
			"parent": "340400"
		},
		{
			"name": "谢家集区",
			"value": "340404",
			"parent": "340400"
		},
		{
			"name": "八公山区",
			"value": "340405",
			"parent": "340400"
		},
		{
			"name": "潘集区",
			"value": "340406",
			"parent": "340400"
		},
		{
			"name": "凤台县",
			"value": "340421",
			"parent": "340400"
		},
		{
			"name": "花山区",
			"value": "340503",
			"parent": "340500"
		},
		{
			"name": "雨山区",
			"value": "340504",
			"parent": "340500"
		},
		{
			"name": "博望区",
			"value": "340506",
			"parent": "340500"
		},
		{
			"name": "当涂县",
			"value": "340521",
			"parent": "340500"
		},
		{
			"name": "含山县",
			"value": "340522",
			"parent": "340500"
		},
		{
			"name": "和县",
			"value": "340523",
			"parent": "340500"
		},
		{
			"name": "杜集区",
			"value": "340602",
			"parent": "340600"
		},
		{
			"name": "相山区",
			"value": "340603",
			"parent": "340600"
		},
		{
			"name": "烈山区",
			"value": "340604",
			"parent": "340600"
		},
		{
			"name": "濉溪县",
			"value": "340621",
			"parent": "340600"
		},
		{
			"name": "铜官山区",
			"value": "340702",
			"parent": "340700"
		},
		{
			"name": "狮子山区",
			"value": "340703",
			"parent": "340700"
		},
		{
			"name": "郊区",
			"value": "340711",
			"parent": "340700"
		},
		{
			"name": "铜陵县",
			"value": "340721",
			"parent": "340700"
		},
		{
			"name": "迎江区",
			"value": "340802",
			"parent": "340800"
		},
		{
			"name": "大观区",
			"value": "340803",
			"parent": "340800"
		},
		{
			"name": "宜秀区",
			"value": "340811",
			"parent": "340800"
		},
		{
			"name": "怀宁县",
			"value": "340822",
			"parent": "340800"
		},
		{
			"name": "枞阳县",
			"value": "340823",
			"parent": "340800"
		},
		{
			"name": "潜山县",
			"value": "340824",
			"parent": "340800"
		},
		{
			"name": "太湖县",
			"value": "340825",
			"parent": "340800"
		},
		{
			"name": "宿松县",
			"value": "340826",
			"parent": "340800"
		},
		{
			"name": "望江县",
			"value": "340827",
			"parent": "340800"
		},
		{
			"name": "岳西县",
			"value": "340828",
			"parent": "340800"
		},
		{
			"name": "桐城市",
			"value": "340881",
			"parent": "340800"
		},
		{
			"name": "屯溪区",
			"value": "341002",
			"parent": "341000"
		},
		{
			"name": "黄山区",
			"value": "341003",
			"parent": "341000"
		},
		{
			"name": "徽州区",
			"value": "341004",
			"parent": "341000"
		},
		{
			"name": "歙县",
			"value": "341021",
			"parent": "341000"
		},
		{
			"name": "休宁县",
			"value": "341022",
			"parent": "341000"
		},
		{
			"name": "黟县",
			"value": "341023",
			"parent": "341000"
		},
		{
			"name": "祁门县",
			"value": "341024",
			"parent": "341000"
		},
		{
			"name": "琅琊区",
			"value": "341102",
			"parent": "341100"
		},
		{
			"name": "南谯区",
			"value": "341103",
			"parent": "341100"
		},
		{
			"name": "来安县",
			"value": "341122",
			"parent": "341100"
		},
		{
			"name": "全椒县",
			"value": "341124",
			"parent": "341100"
		},
		{
			"name": "定远县",
			"value": "341125",
			"parent": "341100"
		},
		{
			"name": "凤阳县",
			"value": "341126",
			"parent": "341100"
		},
		{
			"name": "天长市",
			"value": "341181",
			"parent": "341100"
		},
		{
			"name": "明光市",
			"value": "341182",
			"parent": "341100"
		},
		{
			"name": "颍州区",
			"value": "341202",
			"parent": "341200"
		},
		{
			"name": "颍东区",
			"value": "341203",
			"parent": "341200"
		},
		{
			"name": "颍泉区",
			"value": "341204",
			"parent": "341200"
		},
		{
			"name": "临泉县",
			"value": "341221",
			"parent": "341200"
		},
		{
			"name": "太和县",
			"value": "341222",
			"parent": "341200"
		},
		{
			"name": "阜南县",
			"value": "341225",
			"parent": "341200"
		},
		{
			"name": "颍上县",
			"value": "341226",
			"parent": "341200"
		},
		{
			"name": "界首市",
			"value": "341282",
			"parent": "341200"
		},
		{
			"name": "埇桥区",
			"value": "341302",
			"parent": "341300"
		},
		{
			"name": "砀山县",
			"value": "341321",
			"parent": "341300"
		},
		{
			"name": "萧县",
			"value": "341322",
			"parent": "341300"
		},
		{
			"name": "灵璧县",
			"value": "341323",
			"parent": "341300"
		},
		{
			"name": "泗县",
			"value": "341324",
			"parent": "341300"
		},
		{
			"name": "金安区",
			"value": "341502",
			"parent": "341500"
		},
		{
			"name": "裕安区",
			"value": "341503",
			"parent": "341500"
		},
		{
			"name": "寿县",
			"value": "341521",
			"parent": "341500"
		},
		{
			"name": "霍邱县",
			"value": "341522",
			"parent": "341500"
		},
		{
			"name": "舒城县",
			"value": "341523",
			"parent": "341500"
		},
		{
			"name": "金寨县",
			"value": "341524",
			"parent": "341500"
		},
		{
			"name": "霍山县",
			"value": "341525",
			"parent": "341500"
		},
		{
			"name": "谯城区",
			"value": "341602",
			"parent": "341600"
		},
		{
			"name": "涡阳县",
			"value": "341621",
			"parent": "341600"
		},
		{
			"name": "蒙城县",
			"value": "341622",
			"parent": "341600"
		},
		{
			"name": "利辛县",
			"value": "341623",
			"parent": "341600"
		},
		{
			"name": "贵池区",
			"value": "341702",
			"parent": "341700"
		},
		{
			"name": "东至县",
			"value": "341721",
			"parent": "341700"
		},
		{
			"name": "石台县",
			"value": "341722",
			"parent": "341700"
		},
		{
			"name": "青阳县",
			"value": "341723",
			"parent": "341700"
		},
		{
			"name": "宣州区",
			"value": "341802",
			"parent": "341800"
		},
		{
			"name": "郎溪县",
			"value": "341821",
			"parent": "341800"
		},
		{
			"name": "广德县",
			"value": "341822",
			"parent": "341800"
		},
		{
			"name": "泾县",
			"value": "341823",
			"parent": "341800"
		},
		{
			"name": "绩溪县",
			"value": "341824",
			"parent": "341800"
		},
		{
			"name": "旌德县",
			"value": "341825",
			"parent": "341800"
		},
		{
			"name": "宁国市",
			"value": "341881",
			"parent": "341800"
		},
		{
			"name": "福州市",
			"value": "350100",
			"parent": "350000"
		},
		{
			"name": "厦门市",
			"value": "350200",
			"parent": "350000"
		},
		{
			"name": "莆田市",
			"value": "350300",
			"parent": "350000"
		},
		{
			"name": "三明市",
			"value": "350400",
			"parent": "350000"
		},
		{
			"name": "泉州市",
			"value": "350500",
			"parent": "350000"
		},
		{
			"name": "漳州市",
			"value": "350600",
			"parent": "350000"
		},
		{
			"name": "南平市",
			"value": "350700",
			"parent": "350000"
		},
		{
			"name": "龙岩市",
			"value": "350800",
			"parent": "350000"
		},
		{
			"name": "宁德市",
			"value": "350900",
			"parent": "350000"
		},
		{
			"name": "鼓楼区",
			"value": "350102",
			"parent": "350100"
		},
		{
			"name": "台江区",
			"value": "350103",
			"parent": "350100"
		},
		{
			"name": "仓山区",
			"value": "350104",
			"parent": "350100"
		},
		{
			"name": "马尾区",
			"value": "350105",
			"parent": "350100"
		},
		{
			"name": "晋安区",
			"value": "350111",
			"parent": "350100"
		},
		{
			"name": "闽侯县",
			"value": "350121",
			"parent": "350100"
		},
		{
			"name": "连江县",
			"value": "350122",
			"parent": "350100"
		},
		{
			"name": "罗源县",
			"value": "350123",
			"parent": "350100"
		},
		{
			"name": "闽清县",
			"value": "350124",
			"parent": "350100"
		},
		{
			"name": "永泰县",
			"value": "350125",
			"parent": "350100"
		},
		{
			"name": "平潭县",
			"value": "350128",
			"parent": "350100"
		},
		{
			"name": "福清市",
			"value": "350181",
			"parent": "350100"
		},
		{
			"name": "长乐市",
			"value": "350182",
			"parent": "350100"
		},
		{
			"name": "思明区",
			"value": "350203",
			"parent": "350200"
		},
		{
			"name": "海沧区",
			"value": "350205",
			"parent": "350200"
		},
		{
			"name": "湖里区",
			"value": "350206",
			"parent": "350200"
		},
		{
			"name": "集美区",
			"value": "350211",
			"parent": "350200"
		},
		{
			"name": "同安区",
			"value": "350212",
			"parent": "350200"
		},
		{
			"name": "翔安区",
			"value": "350213",
			"parent": "350200"
		},
		{
			"name": "城厢区",
			"value": "350302",
			"parent": "350300"
		},
		{
			"name": "涵江区",
			"value": "350303",
			"parent": "350300"
		},
		{
			"name": "荔城区",
			"value": "350304",
			"parent": "350300"
		},
		{
			"name": "秀屿区",
			"value": "350305",
			"parent": "350300"
		},
		{
			"name": "仙游县",
			"value": "350322",
			"parent": "350300"
		},
		{
			"name": "梅列区",
			"value": "350402",
			"parent": "350400"
		},
		{
			"name": "三元区",
			"value": "350403",
			"parent": "350400"
		},
		{
			"name": "明溪县",
			"value": "350421",
			"parent": "350400"
		},
		{
			"name": "清流县",
			"value": "350423",
			"parent": "350400"
		},
		{
			"name": "宁化县",
			"value": "350424",
			"parent": "350400"
		},
		{
			"name": "大田县",
			"value": "350425",
			"parent": "350400"
		},
		{
			"name": "尤溪县",
			"value": "350426",
			"parent": "350400"
		},
		{
			"name": "沙县",
			"value": "350427",
			"parent": "350400"
		},
		{
			"name": "将乐县",
			"value": "350428",
			"parent": "350400"
		},
		{
			"name": "泰宁县",
			"value": "350429",
			"parent": "350400"
		},
		{
			"name": "建宁县",
			"value": "350430",
			"parent": "350400"
		},
		{
			"name": "永安市",
			"value": "350481",
			"parent": "350400"
		},
		{
			"name": "鲤城区",
			"value": "350502",
			"parent": "350500"
		},
		{
			"name": "丰泽区",
			"value": "350503",
			"parent": "350500"
		},
		{
			"name": "洛江区",
			"value": "350504",
			"parent": "350500"
		},
		{
			"name": "泉港区",
			"value": "350505",
			"parent": "350500"
		},
		{
			"name": "惠安县",
			"value": "350521",
			"parent": "350500"
		},
		{
			"name": "安溪县",
			"value": "350524",
			"parent": "350500"
		},
		{
			"name": "永春县",
			"value": "350525",
			"parent": "350500"
		},
		{
			"name": "德化县",
			"value": "350526",
			"parent": "350500"
		},
		{
			"name": "金门县",
			"value": "350527",
			"parent": "350500"
		},
		{
			"name": "石狮市",
			"value": "350581",
			"parent": "350500"
		},
		{
			"name": "晋江市",
			"value": "350582",
			"parent": "350500"
		},
		{
			"name": "南安市",
			"value": "350583",
			"parent": "350500"
		},
		{
			"name": "芗城区",
			"value": "350602",
			"parent": "350600"
		},
		{
			"name": "龙文区",
			"value": "350603",
			"parent": "350600"
		},
		{
			"name": "云霄县",
			"value": "350622",
			"parent": "350600"
		},
		{
			"name": "漳浦县",
			"value": "350623",
			"parent": "350600"
		},
		{
			"name": "诏安县",
			"value": "350624",
			"parent": "350600"
		},
		{
			"name": "长泰县",
			"value": "350625",
			"parent": "350600"
		},
		{
			"name": "东山县",
			"value": "350626",
			"parent": "350600"
		},
		{
			"name": "南靖县",
			"value": "350627",
			"parent": "350600"
		},
		{
			"name": "平和县",
			"value": "350628",
			"parent": "350600"
		},
		{
			"name": "华安县",
			"value": "350629",
			"parent": "350600"
		},
		{
			"name": "龙海市",
			"value": "350681",
			"parent": "350600"
		},
		{
			"name": "延平区",
			"value": "350702",
			"parent": "350700"
		},
		{
			"name": "建阳区",
			"value": "350703",
			"parent": "350700"
		},
		{
			"name": "顺昌县",
			"value": "350721",
			"parent": "350700"
		},
		{
			"name": "浦城县",
			"value": "350722",
			"parent": "350700"
		},
		{
			"name": "光泽县",
			"value": "350723",
			"parent": "350700"
		},
		{
			"name": "松溪县",
			"value": "350724",
			"parent": "350700"
		},
		{
			"name": "政和县",
			"value": "350725",
			"parent": "350700"
		},
		{
			"name": "邵武市",
			"value": "350781",
			"parent": "350700"
		},
		{
			"name": "武夷山市",
			"value": "350782",
			"parent": "350700"
		},
		{
			"name": "建瓯市",
			"value": "350783",
			"parent": "350700"
		},
		{
			"name": "新罗区",
			"value": "350802",
			"parent": "350800"
		},
		{
			"name": "永定区",
			"value": "350803",
			"parent": "350800"
		},
		{
			"name": "长汀县",
			"value": "350821",
			"parent": "350800"
		},
		{
			"name": "上杭县",
			"value": "350823",
			"parent": "350800"
		},
		{
			"name": "武平县",
			"value": "350824",
			"parent": "350800"
		},
		{
			"name": "连城县",
			"value": "350825",
			"parent": "350800"
		},
		{
			"name": "漳平市",
			"value": "350881",
			"parent": "350800"
		},
		{
			"name": "蕉城区",
			"value": "350902",
			"parent": "350900"
		},
		{
			"name": "霞浦县",
			"value": "350921",
			"parent": "350900"
		},
		{
			"name": "古田县",
			"value": "350922",
			"parent": "350900"
		},
		{
			"name": "屏南县",
			"value": "350923",
			"parent": "350900"
		},
		{
			"name": "寿宁县",
			"value": "350924",
			"parent": "350900"
		},
		{
			"name": "周宁县",
			"value": "350925",
			"parent": "350900"
		},
		{
			"name": "柘荣县",
			"value": "350926",
			"parent": "350900"
		},
		{
			"name": "福安市",
			"value": "350981",
			"parent": "350900"
		},
		{
			"name": "福鼎市",
			"value": "350982",
			"parent": "350900"
		},
		{
			"name": "南昌市",
			"value": "360100",
			"parent": "360000"
		},
		{
			"name": "景德镇市",
			"value": "360200",
			"parent": "360000"
		},
		{
			"name": "萍乡市",
			"value": "360300",
			"parent": "360000"
		},
		{
			"name": "九江市",
			"value": "360400",
			"parent": "360000"
		},
		{
			"name": "新余市",
			"value": "360500",
			"parent": "360000"
		},
		{
			"name": "鹰潭市",
			"value": "360600",
			"parent": "360000"
		},
		{
			"name": "赣州市",
			"value": "360700",
			"parent": "360000"
		},
		{
			"name": "吉安市",
			"value": "360800",
			"parent": "360000"
		},
		{
			"name": "宜春市",
			"value": "360900",
			"parent": "360000"
		},
		{
			"name": "抚州市",
			"value": "361000",
			"parent": "360000"
		},
		{
			"name": "上饶市",
			"value": "361100",
			"parent": "360000"
		},
		{
			"name": "东湖区",
			"value": "360102",
			"parent": "360100"
		},
		{
			"name": "西湖区",
			"value": "360103",
			"parent": "360100"
		},
		{
			"name": "青云谱区",
			"value": "360104",
			"parent": "360100"
		},
		{
			"name": "湾里区",
			"value": "360105",
			"parent": "360100"
		},
		{
			"name": "青山湖区",
			"value": "360111",
			"parent": "360100"
		},
		{
			"name": "新建区",
			"value": "360112",
			"parent": "360100"
		},
		{
			"name": "南昌县",
			"value": "360121",
			"parent": "360100"
		},
		{
			"name": "安义县",
			"value": "360123",
			"parent": "360100"
		},
		{
			"name": "进贤县",
			"value": "360124",
			"parent": "360100"
		},
		{
			"name": "昌江区",
			"value": "360202",
			"parent": "360200"
		},
		{
			"name": "珠山区",
			"value": "360203",
			"parent": "360200"
		},
		{
			"name": "浮梁县",
			"value": "360222",
			"parent": "360200"
		},
		{
			"name": "乐平市",
			"value": "360281",
			"parent": "360200"
		},
		{
			"name": "安源区",
			"value": "360302",
			"parent": "360300"
		},
		{
			"name": "湘东区",
			"value": "360313",
			"parent": "360300"
		},
		{
			"name": "莲花县",
			"value": "360321",
			"parent": "360300"
		},
		{
			"name": "上栗县",
			"value": "360322",
			"parent": "360300"
		},
		{
			"name": "芦溪县",
			"value": "360323",
			"parent": "360300"
		},
		{
			"name": "庐山区",
			"value": "360402",
			"parent": "360400"
		},
		{
			"name": "浔阳区",
			"value": "360403",
			"parent": "360400"
		},
		{
			"name": "九江县",
			"value": "360421",
			"parent": "360400"
		},
		{
			"name": "武宁县",
			"value": "360423",
			"parent": "360400"
		},
		{
			"name": "修水县",
			"value": "360424",
			"parent": "360400"
		},
		{
			"name": "永修县",
			"value": "360425",
			"parent": "360400"
		},
		{
			"name": "德安县",
			"value": "360426",
			"parent": "360400"
		},
		{
			"name": "星子县",
			"value": "360427",
			"parent": "360400"
		},
		{
			"name": "都昌县",
			"value": "360428",
			"parent": "360400"
		},
		{
			"name": "湖口县",
			"value": "360429",
			"parent": "360400"
		},
		{
			"name": "彭泽县",
			"value": "360430",
			"parent": "360400"
		},
		{
			"name": "瑞昌市",
			"value": "360481",
			"parent": "360400"
		},
		{
			"name": "共青城市",
			"value": "360482",
			"parent": "360400"
		},
		{
			"name": "渝水区",
			"value": "360502",
			"parent": "360500"
		},
		{
			"name": "分宜县",
			"value": "360521",
			"parent": "360500"
		},
		{
			"name": "月湖区",
			"value": "360602",
			"parent": "360600"
		},
		{
			"name": "余江县",
			"value": "360622",
			"parent": "360600"
		},
		{
			"name": "贵溪市",
			"value": "360681",
			"parent": "360600"
		},
		{
			"name": "章贡区",
			"value": "360702",
			"parent": "360700"
		},
		{
			"name": "南康区",
			"value": "360703",
			"parent": "360700"
		},
		{
			"name": "赣县",
			"value": "360721",
			"parent": "360700"
		},
		{
			"name": "信丰县",
			"value": "360722",
			"parent": "360700"
		},
		{
			"name": "大余县",
			"value": "360723",
			"parent": "360700"
		},
		{
			"name": "上犹县",
			"value": "360724",
			"parent": "360700"
		},
		{
			"name": "崇义县",
			"value": "360725",
			"parent": "360700"
		},
		{
			"name": "安远县",
			"value": "360726",
			"parent": "360700"
		},
		{
			"name": "龙南县",
			"value": "360727",
			"parent": "360700"
		},
		{
			"name": "定南县",
			"value": "360728",
			"parent": "360700"
		},
		{
			"name": "全南县",
			"value": "360729",
			"parent": "360700"
		},
		{
			"name": "宁都县",
			"value": "360730",
			"parent": "360700"
		},
		{
			"name": "于都县",
			"value": "360731",
			"parent": "360700"
		},
		{
			"name": "兴国县",
			"value": "360732",
			"parent": "360700"
		},
		{
			"name": "会昌县",
			"value": "360733",
			"parent": "360700"
		},
		{
			"name": "寻乌县",
			"value": "360734",
			"parent": "360700"
		},
		{
			"name": "石城县",
			"value": "360735",
			"parent": "360700"
		},
		{
			"name": "瑞金市",
			"value": "360781",
			"parent": "360700"
		},
		{
			"name": "吉州区",
			"value": "360802",
			"parent": "360800"
		},
		{
			"name": "青原区",
			"value": "360803",
			"parent": "360800"
		},
		{
			"name": "吉安县",
			"value": "360821",
			"parent": "360800"
		},
		{
			"name": "吉水县",
			"value": "360822",
			"parent": "360800"
		},
		{
			"name": "峡江县",
			"value": "360823",
			"parent": "360800"
		},
		{
			"name": "新干县",
			"value": "360824",
			"parent": "360800"
		},
		{
			"name": "永丰县",
			"value": "360825",
			"parent": "360800"
		},
		{
			"name": "泰和县",
			"value": "360826",
			"parent": "360800"
		},
		{
			"name": "遂川县",
			"value": "360827",
			"parent": "360800"
		},
		{
			"name": "万安县",
			"value": "360828",
			"parent": "360800"
		},
		{
			"name": "安福县",
			"value": "360829",
			"parent": "360800"
		},
		{
			"name": "永新县",
			"value": "360830",
			"parent": "360800"
		},
		{
			"name": "井冈山市",
			"value": "360881",
			"parent": "360800"
		},
		{
			"name": "袁州区",
			"value": "360902",
			"parent": "360900"
		},
		{
			"name": "奉新县",
			"value": "360921",
			"parent": "360900"
		},
		{
			"name": "万载县",
			"value": "360922",
			"parent": "360900"
		},
		{
			"name": "上高县",
			"value": "360923",
			"parent": "360900"
		},
		{
			"name": "宜丰县",
			"value": "360924",
			"parent": "360900"
		},
		{
			"name": "靖安县",
			"value": "360925",
			"parent": "360900"
		},
		{
			"name": "铜鼓县",
			"value": "360926",
			"parent": "360900"
		},
		{
			"name": "丰城市",
			"value": "360981",
			"parent": "360900"
		},
		{
			"name": "樟树市",
			"value": "360982",
			"parent": "360900"
		},
		{
			"name": "高安市",
			"value": "360983",
			"parent": "360900"
		},
		{
			"name": "临川区",
			"value": "361002",
			"parent": "361000"
		},
		{
			"name": "南城县",
			"value": "361021",
			"parent": "361000"
		},
		{
			"name": "黎川县",
			"value": "361022",
			"parent": "361000"
		},
		{
			"name": "南丰县",
			"value": "361023",
			"parent": "361000"
		},
		{
			"name": "崇仁县",
			"value": "361024",
			"parent": "361000"
		},
		{
			"name": "乐安县",
			"value": "361025",
			"parent": "361000"
		},
		{
			"name": "宜黄县",
			"value": "361026",
			"parent": "361000"
		},
		{
			"name": "金溪县",
			"value": "361027",
			"parent": "361000"
		},
		{
			"name": "资溪县",
			"value": "361028",
			"parent": "361000"
		},
		{
			"name": "东乡县",
			"value": "361029",
			"parent": "361000"
		},
		{
			"name": "广昌县",
			"value": "361030",
			"parent": "361000"
		},
		{
			"name": "信州区",
			"value": "361102",
			"parent": "361100"
		},
		{
			"name": "广丰区",
			"value": "361103",
			"parent": "361100"
		},
		{
			"name": "上饶县",
			"value": "361121",
			"parent": "361100"
		},
		{
			"name": "玉山县",
			"value": "361123",
			"parent": "361100"
		},
		{
			"name": "铅山县",
			"value": "361124",
			"parent": "361100"
		},
		{
			"name": "横峰县",
			"value": "361125",
			"parent": "361100"
		},
		{
			"name": "弋阳县",
			"value": "361126",
			"parent": "361100"
		},
		{
			"name": "余干县",
			"value": "361127",
			"parent": "361100"
		},
		{
			"name": "鄱阳县",
			"value": "361128",
			"parent": "361100"
		},
		{
			"name": "万年县",
			"value": "361129",
			"parent": "361100"
		},
		{
			"name": "婺源县",
			"value": "361130",
			"parent": "361100"
		},
		{
			"name": "德兴市",
			"value": "361181",
			"parent": "361100"
		},
		{
			"name": "济南市",
			"value": "370100",
			"parent": "370000"
		},
		{
			"name": "青岛市",
			"value": "370200",
			"parent": "370000"
		},
		{
			"name": "淄博市",
			"value": "370300",
			"parent": "370000"
		},
		{
			"name": "枣庄市",
			"value": "370400",
			"parent": "370000"
		},
		{
			"name": "东营市",
			"value": "370500",
			"parent": "370000"
		},
		{
			"name": "烟台市",
			"value": "370600",
			"parent": "370000"
		},
		{
			"name": "潍坊市",
			"value": "370700",
			"parent": "370000"
		},
		{
			"name": "济宁市",
			"value": "370800",
			"parent": "370000"
		},
		{
			"name": "泰安市",
			"value": "370900",
			"parent": "370000"
		},
		{
			"name": "威海市",
			"value": "371000",
			"parent": "370000"
		},
		{
			"name": "日照市",
			"value": "371100",
			"parent": "370000"
		},
		{
			"name": "莱芜市",
			"value": "371200",
			"parent": "370000"
		},
		{
			"name": "临沂市",
			"value": "371300",
			"parent": "370000"
		},
		{
			"name": "德州市",
			"value": "371400",
			"parent": "370000"
		},
		{
			"name": "聊城市",
			"value": "371500",
			"parent": "370000"
		},
		{
			"name": "滨州市",
			"value": "371600",
			"parent": "370000"
		},
		{
			"name": "菏泽市",
			"value": "371700",
			"parent": "370000"
		},
		{
			"name": "历下区",
			"value": "370102",
			"parent": "370100"
		},
		{
			"name": "市中区",
			"value": "370103",
			"parent": "370100"
		},
		{
			"name": "槐荫区",
			"value": "370104",
			"parent": "370100"
		},
		{
			"name": "天桥区",
			"value": "370105",
			"parent": "370100"
		},
		{
			"name": "历城区",
			"value": "370112",
			"parent": "370100"
		},
		{
			"name": "长清区",
			"value": "370113",
			"parent": "370100"
		},
		{
			"name": "平阴县",
			"value": "370124",
			"parent": "370100"
		},
		{
			"name": "济阳县",
			"value": "370125",
			"parent": "370100"
		},
		{
			"name": "商河县",
			"value": "370126",
			"parent": "370100"
		},
		{
			"name": "章丘市",
			"value": "370181",
			"parent": "370100"
		},
		{
			"name": "市南区",
			"value": "370202",
			"parent": "370200"
		},
		{
			"name": "市北区",
			"value": "370203",
			"parent": "370200"
		},
		{
			"name": "黄岛区",
			"value": "370211",
			"parent": "370200"
		},
		{
			"name": "崂山区",
			"value": "370212",
			"parent": "370200"
		},
		{
			"name": "李沧区",
			"value": "370213",
			"parent": "370200"
		},
		{
			"name": "城阳区",
			"value": "370214",
			"parent": "370200"
		},
		{
			"name": "胶州市",
			"value": "370281",
			"parent": "370200"
		},
		{
			"name": "即墨市",
			"value": "370282",
			"parent": "370200"
		},
		{
			"name": "平度市",
			"value": "370283",
			"parent": "370200"
		},
		{
			"name": "莱西市",
			"value": "370285",
			"parent": "370200"
		},
		{
			"name": "淄川区",
			"value": "370302",
			"parent": "370300"
		},
		{
			"name": "张店区",
			"value": "370303",
			"parent": "370300"
		},
		{
			"name": "博山区",
			"value": "370304",
			"parent": "370300"
		},
		{
			"name": "临淄区",
			"value": "370305",
			"parent": "370300"
		},
		{
			"name": "周村区",
			"value": "370306",
			"parent": "370300"
		},
		{
			"name": "桓台县",
			"value": "370321",
			"parent": "370300"
		},
		{
			"name": "高青县",
			"value": "370322",
			"parent": "370300"
		},
		{
			"name": "沂源县",
			"value": "370323",
			"parent": "370300"
		},
		{
			"name": "市中区",
			"value": "370402",
			"parent": "370400"
		},
		{
			"name": "薛城区",
			"value": "370403",
			"parent": "370400"
		},
		{
			"name": "峄城区",
			"value": "370404",
			"parent": "370400"
		},
		{
			"name": "台儿庄区",
			"value": "370405",
			"parent": "370400"
		},
		{
			"name": "山亭区",
			"value": "370406",
			"parent": "370400"
		},
		{
			"name": "滕州市",
			"value": "370481",
			"parent": "370400"
		},
		{
			"name": "东营区",
			"value": "370502",
			"parent": "370500"
		},
		{
			"name": "河口区",
			"value": "370503",
			"parent": "370500"
		},
		{
			"name": "垦利县",
			"value": "370521",
			"parent": "370500"
		},
		{
			"name": "利津县",
			"value": "370522",
			"parent": "370500"
		},
		{
			"name": "广饶县",
			"value": "370523",
			"parent": "370500"
		},
		{
			"name": "芝罘区",
			"value": "370602",
			"parent": "370600"
		},
		{
			"name": "福山区",
			"value": "370611",
			"parent": "370600"
		},
		{
			"name": "牟平区",
			"value": "370612",
			"parent": "370600"
		},
		{
			"name": "莱山区",
			"value": "370613",
			"parent": "370600"
		},
		{
			"name": "长岛县",
			"value": "370634",
			"parent": "370600"
		},
		{
			"name": "龙口市",
			"value": "370681",
			"parent": "370600"
		},
		{
			"name": "莱阳市",
			"value": "370682",
			"parent": "370600"
		},
		{
			"name": "莱州市",
			"value": "370683",
			"parent": "370600"
		},
		{
			"name": "蓬莱市",
			"value": "370684",
			"parent": "370600"
		},
		{
			"name": "招远市",
			"value": "370685",
			"parent": "370600"
		},
		{
			"name": "栖霞市",
			"value": "370686",
			"parent": "370600"
		},
		{
			"name": "海阳市",
			"value": "370687",
			"parent": "370600"
		},
		{
			"name": "潍城区",
			"value": "370702",
			"parent": "370700"
		},
		{
			"name": "寒亭区",
			"value": "370703",
			"parent": "370700"
		},
		{
			"name": "坊子区",
			"value": "370704",
			"parent": "370700"
		},
		{
			"name": "奎文区",
			"value": "370705",
			"parent": "370700"
		},
		{
			"name": "临朐县",
			"value": "370724",
			"parent": "370700"
		},
		{
			"name": "昌乐县",
			"value": "370725",
			"parent": "370700"
		},
		{
			"name": "青州市",
			"value": "370781",
			"parent": "370700"
		},
		{
			"name": "诸城市",
			"value": "370782",
			"parent": "370700"
		},
		{
			"name": "寿光市",
			"value": "370783",
			"parent": "370700"
		},
		{
			"name": "安丘市",
			"value": "370784",
			"parent": "370700"
		},
		{
			"name": "高密市",
			"value": "370785",
			"parent": "370700"
		},
		{
			"name": "昌邑市",
			"value": "370786",
			"parent": "370700"
		},
		{
			"name": "任城区",
			"value": "370811",
			"parent": "370800"
		},
		{
			"name": "兖州区",
			"value": "370812",
			"parent": "370800"
		},
		{
			"name": "微山县",
			"value": "370826",
			"parent": "370800"
		},
		{
			"name": "鱼台县",
			"value": "370827",
			"parent": "370800"
		},
		{
			"name": "金乡县",
			"value": "370828",
			"parent": "370800"
		},
		{
			"name": "嘉祥县",
			"value": "370829",
			"parent": "370800"
		},
		{
			"name": "汶上县",
			"value": "370830",
			"parent": "370800"
		},
		{
			"name": "泗水县",
			"value": "370831",
			"parent": "370800"
		},
		{
			"name": "梁山县",
			"value": "370832",
			"parent": "370800"
		},
		{
			"name": "曲阜市",
			"value": "370881",
			"parent": "370800"
		},
		{
			"name": "邹城市",
			"value": "370883",
			"parent": "370800"
		},
		{
			"name": "泰山区",
			"value": "370902",
			"parent": "370900"
		},
		{
			"name": "岱岳区",
			"value": "370911",
			"parent": "370900"
		},
		{
			"name": "宁阳县",
			"value": "370921",
			"parent": "370900"
		},
		{
			"name": "东平县",
			"value": "370923",
			"parent": "370900"
		},
		{
			"name": "新泰市",
			"value": "370982",
			"parent": "370900"
		},
		{
			"name": "肥城市",
			"value": "370983",
			"parent": "370900"
		},
		{
			"name": "环翠区",
			"value": "371002",
			"parent": "371000"
		},
		{
			"name": "文登区",
			"value": "371003",
			"parent": "371000"
		},
		{
			"name": "荣成市",
			"value": "371082",
			"parent": "371000"
		},
		{
			"name": "乳山市",
			"value": "371083",
			"parent": "371000"
		},
		{
			"name": "东港区",
			"value": "371102",
			"parent": "371100"
		},
		{
			"name": "岚山区",
			"value": "371103",
			"parent": "371100"
		},
		{
			"name": "五莲县",
			"value": "371121",
			"parent": "371100"
		},
		{
			"name": "莒县",
			"value": "371122",
			"parent": "371100"
		},
		{
			"name": "莱城区",
			"value": "371202",
			"parent": "371200"
		},
		{
			"name": "钢城区",
			"value": "371203",
			"parent": "371200"
		},
		{
			"name": "兰山区",
			"value": "371302",
			"parent": "371300"
		},
		{
			"name": "罗庄区",
			"value": "371311",
			"parent": "371300"
		},
		{
			"name": "河东区",
			"value": "371312",
			"parent": "371300"
		},
		{
			"name": "沂南县",
			"value": "371321",
			"parent": "371300"
		},
		{
			"name": "郯城县",
			"value": "371322",
			"parent": "371300"
		},
		{
			"name": "沂水县",
			"value": "371323",
			"parent": "371300"
		},
		{
			"name": "兰陵县",
			"value": "371324",
			"parent": "371300"
		},
		{
			"name": "费县",
			"value": "371325",
			"parent": "371300"
		},
		{
			"name": "平邑县",
			"value": "371326",
			"parent": "371300"
		},
		{
			"name": "莒南县",
			"value": "371327",
			"parent": "371300"
		},
		{
			"name": "蒙阴县",
			"value": "371328",
			"parent": "371300"
		},
		{
			"name": "临沭县",
			"value": "371329",
			"parent": "371300"
		},
		{
			"name": "德城区",
			"value": "371402",
			"parent": "371400"
		},
		{
			"name": "陵城区",
			"value": "371403",
			"parent": "371400"
		},
		{
			"name": "宁津县",
			"value": "371422",
			"parent": "371400"
		},
		{
			"name": "庆云县",
			"value": "371423",
			"parent": "371400"
		},
		{
			"name": "临邑县",
			"value": "371424",
			"parent": "371400"
		},
		{
			"name": "齐河县",
			"value": "371425",
			"parent": "371400"
		},
		{
			"name": "平原县",
			"value": "371426",
			"parent": "371400"
		},
		{
			"name": "夏津县",
			"value": "371427",
			"parent": "371400"
		},
		{
			"name": "武城县",
			"value": "371428",
			"parent": "371400"
		},
		{
			"name": "乐陵市",
			"value": "371481",
			"parent": "371400"
		},
		{
			"name": "禹城市",
			"value": "371482",
			"parent": "371400"
		},
		{
			"name": "东昌府区",
			"value": "371502",
			"parent": "371500"
		},
		{
			"name": "阳谷县",
			"value": "371521",
			"parent": "371500"
		},
		{
			"name": "莘县",
			"value": "371522",
			"parent": "371500"
		},
		{
			"name": "茌平县",
			"value": "371523",
			"parent": "371500"
		},
		{
			"name": "东阿县",
			"value": "371524",
			"parent": "371500"
		},
		{
			"name": "冠县",
			"value": "371525",
			"parent": "371500"
		},
		{
			"name": "高唐县",
			"value": "371526",
			"parent": "371500"
		},
		{
			"name": "临清市",
			"value": "371581",
			"parent": "371500"
		},
		{
			"name": "滨城区",
			"value": "371602",
			"parent": "371600"
		},
		{
			"name": "沾化区",
			"value": "371603",
			"parent": "371600"
		},
		{
			"name": "惠民县",
			"value": "371621",
			"parent": "371600"
		},
		{
			"name": "阳信县",
			"value": "371622",
			"parent": "371600"
		},
		{
			"name": "无棣县",
			"value": "371623",
			"parent": "371600"
		},
		{
			"name": "博兴县",
			"value": "371625",
			"parent": "371600"
		},
		{
			"name": "邹平县",
			"value": "371626",
			"parent": "371600"
		},
		{
			"name": "牡丹区",
			"value": "371702",
			"parent": "371700"
		},
		{
			"name": "曹县",
			"value": "371721",
			"parent": "371700"
		},
		{
			"name": "单县",
			"value": "371722",
			"parent": "371700"
		},
		{
			"name": "成武县",
			"value": "371723",
			"parent": "371700"
		},
		{
			"name": "巨野县",
			"value": "371724",
			"parent": "371700"
		},
		{
			"name": "郓城县",
			"value": "371725",
			"parent": "371700"
		},
		{
			"name": "鄄城县",
			"value": "371726",
			"parent": "371700"
		},
		{
			"name": "定陶县",
			"value": "371727",
			"parent": "371700"
		},
		{
			"name": "东明县",
			"value": "371728",
			"parent": "371700"
		},
		{
			"name": "郑州市",
			"value": "410100",
			"parent": "410000"
		},
		{
			"name": "开封市",
			"value": "410200",
			"parent": "410000"
		},
		{
			"name": "洛阳市",
			"value": "410300",
			"parent": "410000"
		},
		{
			"name": "平顶山市",
			"value": "410400",
			"parent": "410000"
		},
		{
			"name": "安阳市",
			"value": "410500",
			"parent": "410000"
		},
		{
			"name": "鹤壁市",
			"value": "410600",
			"parent": "410000"
		},
		{
			"name": "新乡市",
			"value": "410700",
			"parent": "410000"
		},
		{
			"name": "焦作市",
			"value": "410800",
			"parent": "410000"
		},
		{
			"name": "濮阳市",
			"value": "410900",
			"parent": "410000"
		},
		{
			"name": "许昌市",
			"value": "411000",
			"parent": "410000"
		},
		{
			"name": "漯河市",
			"value": "411100",
			"parent": "410000"
		},
		{
			"name": "三门峡市",
			"value": "411200",
			"parent": "410000"
		},
		{
			"name": "南阳市",
			"value": "411300",
			"parent": "410000"
		},
		{
			"name": "商丘市",
			"value": "411400",
			"parent": "410000"
		},
		{
			"name": "信阳市",
			"value": "411500",
			"parent": "410000"
		},
		{
			"name": "周口市",
			"value": "411600",
			"parent": "410000"
		},
		{
			"name": "驻马店市",
			"value": "411700",
			"parent": "410000"
		},
		{
			"name": "济源市",
			"value": "419001",
			"parent": "410000"
		},
		{
			"name": "中原区",
			"value": "410102",
			"parent": "410100"
		},
		{
			"name": "二七区",
			"value": "410103",
			"parent": "410100"
		},
		{
			"name": "管城回族区",
			"value": "410104",
			"parent": "410100"
		},
		{
			"name": "金水区",
			"value": "410105",
			"parent": "410100"
		},
		{
			"name": "上街区",
			"value": "410106",
			"parent": "410100"
		},
		{
			"name": "惠济区",
			"value": "410108",
			"parent": "410100"
		},
		{
			"name": "中牟县",
			"value": "410122",
			"parent": "410100"
		},
		{
			"name": "巩义市",
			"value": "410181",
			"parent": "410100"
		},
		{
			"name": "荥阳市",
			"value": "410182",
			"parent": "410100"
		},
		{
			"name": "新密市",
			"value": "410183",
			"parent": "410100"
		},
		{
			"name": "新郑市",
			"value": "410184",
			"parent": "410100"
		},
		{
			"name": "登封市",
			"value": "410185",
			"parent": "410100"
		},
		{
			"name": "龙亭区",
			"value": "410202",
			"parent": "410200"
		},
		{
			"name": "顺河回族区",
			"value": "410203",
			"parent": "410200"
		},
		{
			"name": "鼓楼区",
			"value": "410204",
			"parent": "410200"
		},
		{
			"name": "禹王台区",
			"value": "410205",
			"parent": "410200"
		},
		{
			"name": "祥符区",
			"value": "410212",
			"parent": "410200"
		},
		{
			"name": "杞县",
			"value": "410221",
			"parent": "410200"
		},
		{
			"name": "通许县",
			"value": "410222",
			"parent": "410200"
		},
		{
			"name": "尉氏县",
			"value": "410223",
			"parent": "410200"
		},
		{
			"name": "兰考县",
			"value": "410225",
			"parent": "410200"
		},
		{
			"name": "老城区",
			"value": "410302",
			"parent": "410300"
		},
		{
			"name": "西工区",
			"value": "410303",
			"parent": "410300"
		},
		{
			"name": "瀍河回族区",
			"value": "410304",
			"parent": "410300"
		},
		{
			"name": "涧西区",
			"value": "410305",
			"parent": "410300"
		},
		{
			"name": "吉利区",
			"value": "410306",
			"parent": "410300"
		},
		{
			"name": "洛龙区",
			"value": "410311",
			"parent": "410300"
		},
		{
			"name": "孟津县",
			"value": "410322",
			"parent": "410300"
		},
		{
			"name": "新安县",
			"value": "410323",
			"parent": "410300"
		},
		{
			"name": "栾川县",
			"value": "410324",
			"parent": "410300"
		},
		{
			"name": "嵩县",
			"value": "410325",
			"parent": "410300"
		},
		{
			"name": "汝阳县",
			"value": "410326",
			"parent": "410300"
		},
		{
			"name": "宜阳县",
			"value": "410327",
			"parent": "410300"
		},
		{
			"name": "洛宁县",
			"value": "410328",
			"parent": "410300"
		},
		{
			"name": "伊川县",
			"value": "410329",
			"parent": "410300"
		},
		{
			"name": "偃师市",
			"value": "410381",
			"parent": "410300"
		},
		{
			"name": "新华区",
			"value": "410402",
			"parent": "410400"
		},
		{
			"name": "卫东区",
			"value": "410403",
			"parent": "410400"
		},
		{
			"name": "石龙区",
			"value": "410404",
			"parent": "410400"
		},
		{
			"name": "湛河区",
			"value": "410411",
			"parent": "410400"
		},
		{
			"name": "宝丰县",
			"value": "410421",
			"parent": "410400"
		},
		{
			"name": "叶县",
			"value": "410422",
			"parent": "410400"
		},
		{
			"name": "鲁山县",
			"value": "410423",
			"parent": "410400"
		},
		{
			"name": "郏县",
			"value": "410425",
			"parent": "410400"
		},
		{
			"name": "舞钢市",
			"value": "410481",
			"parent": "410400"
		},
		{
			"name": "汝州市",
			"value": "410482",
			"parent": "410400"
		},
		{
			"name": "文峰区",
			"value": "410502",
			"parent": "410500"
		},
		{
			"name": "北关区",
			"value": "410503",
			"parent": "410500"
		},
		{
			"name": "殷都区",
			"value": "410505",
			"parent": "410500"
		},
		{
			"name": "龙安区",
			"value": "410506",
			"parent": "410500"
		},
		{
			"name": "安阳县",
			"value": "410522",
			"parent": "410500"
		},
		{
			"name": "汤阴县",
			"value": "410523",
			"parent": "410500"
		},
		{
			"name": "滑县",
			"value": "410526",
			"parent": "410500"
		},
		{
			"name": "内黄县",
			"value": "410527",
			"parent": "410500"
		},
		{
			"name": "林州市",
			"value": "410581",
			"parent": "410500"
		},
		{
			"name": "鹤山区",
			"value": "410602",
			"parent": "410600"
		},
		{
			"name": "山城区",
			"value": "410603",
			"parent": "410600"
		},
		{
			"name": "淇滨区",
			"value": "410611",
			"parent": "410600"
		},
		{
			"name": "浚县",
			"value": "410621",
			"parent": "410600"
		},
		{
			"name": "淇县",
			"value": "410622",
			"parent": "410600"
		},
		{
			"name": "红旗区",
			"value": "410702",
			"parent": "410700"
		},
		{
			"name": "卫滨区",
			"value": "410703",
			"parent": "410700"
		},
		{
			"name": "凤泉区",
			"value": "410704",
			"parent": "410700"
		},
		{
			"name": "牧野区",
			"value": "410711",
			"parent": "410700"
		},
		{
			"name": "新乡县",
			"value": "410721",
			"parent": "410700"
		},
		{
			"name": "获嘉县",
			"value": "410724",
			"parent": "410700"
		},
		{
			"name": "原阳县",
			"value": "410725",
			"parent": "410700"
		},
		{
			"name": "延津县",
			"value": "410726",
			"parent": "410700"
		},
		{
			"name": "封丘县",
			"value": "410727",
			"parent": "410700"
		},
		{
			"name": "长垣县",
			"value": "410728",
			"parent": "410700"
		},
		{
			"name": "卫辉市",
			"value": "410781",
			"parent": "410700"
		},
		{
			"name": "辉县市",
			"value": "410782",
			"parent": "410700"
		},
		{
			"name": "解放区",
			"value": "410802",
			"parent": "410800"
		},
		{
			"name": "中站区",
			"value": "410803",
			"parent": "410800"
		},
		{
			"name": "马村区",
			"value": "410804",
			"parent": "410800"
		},
		{
			"name": "山阳区",
			"value": "410811",
			"parent": "410800"
		},
		{
			"name": "修武县",
			"value": "410821",
			"parent": "410800"
		},
		{
			"name": "博爱县",
			"value": "410822",
			"parent": "410800"
		},
		{
			"name": "武陟县",
			"value": "410823",
			"parent": "410800"
		},
		{
			"name": "温县",
			"value": "410825",
			"parent": "410800"
		},
		{
			"name": "沁阳市",
			"value": "410882",
			"parent": "410800"
		},
		{
			"name": "孟州市",
			"value": "410883",
			"parent": "410800"
		},
		{
			"name": "华龙区",
			"value": "410902",
			"parent": "410900"
		},
		{
			"name": "清丰县",
			"value": "410922",
			"parent": "410900"
		},
		{
			"name": "南乐县",
			"value": "410923",
			"parent": "410900"
		},
		{
			"name": "范县",
			"value": "410926",
			"parent": "410900"
		},
		{
			"name": "台前县",
			"value": "410927",
			"parent": "410900"
		},
		{
			"name": "濮阳县",
			"value": "410928",
			"parent": "410900"
		},
		{
			"name": "魏都区",
			"value": "411002",
			"parent": "411000"
		},
		{
			"name": "许昌县",
			"value": "411023",
			"parent": "411000"
		},
		{
			"name": "鄢陵县",
			"value": "411024",
			"parent": "411000"
		},
		{
			"name": "襄城县",
			"value": "411025",
			"parent": "411000"
		},
		{
			"name": "禹州市",
			"value": "411081",
			"parent": "411000"
		},
		{
			"name": "长葛市",
			"value": "411082",
			"parent": "411000"
		},
		{
			"name": "源汇区",
			"value": "411102",
			"parent": "411100"
		},
		{
			"name": "郾城区",
			"value": "411103",
			"parent": "411100"
		},
		{
			"name": "召陵区",
			"value": "411104",
			"parent": "411100"
		},
		{
			"name": "舞阳县",
			"value": "411121",
			"parent": "411100"
		},
		{
			"name": "临颍县",
			"value": "411122",
			"parent": "411100"
		},
		{
			"name": "湖滨区",
			"value": "411202",
			"parent": "411200"
		},
		{
			"name": "陕州区",
			"value": "411203",
			"parent": "411200"
		},
		{
			"name": "渑池县",
			"value": "411221",
			"parent": "411200"
		},
		{
			"name": "卢氏县",
			"value": "411224",
			"parent": "411200"
		},
		{
			"name": "义马市",
			"value": "411281",
			"parent": "411200"
		},
		{
			"name": "灵宝市",
			"value": "411282",
			"parent": "411200"
		},
		{
			"name": "宛城区",
			"value": "411302",
			"parent": "411300"
		},
		{
			"name": "卧龙区",
			"value": "411303",
			"parent": "411300"
		},
		{
			"name": "南召县",
			"value": "411321",
			"parent": "411300"
		},
		{
			"name": "方城县",
			"value": "411322",
			"parent": "411300"
		},
		{
			"name": "西峡县",
			"value": "411323",
			"parent": "411300"
		},
		{
			"name": "镇平县",
			"value": "411324",
			"parent": "411300"
		},
		{
			"name": "内乡县",
			"value": "411325",
			"parent": "411300"
		},
		{
			"name": "淅川县",
			"value": "411326",
			"parent": "411300"
		},
		{
			"name": "社旗县",
			"value": "411327",
			"parent": "411300"
		},
		{
			"name": "唐河县",
			"value": "411328",
			"parent": "411300"
		},
		{
			"name": "新野县",
			"value": "411329",
			"parent": "411300"
		},
		{
			"name": "桐柏县",
			"value": "411330",
			"parent": "411300"
		},
		{
			"name": "邓州市",
			"value": "411381",
			"parent": "411300"
		},
		{
			"name": "梁园区",
			"value": "411402",
			"parent": "411400"
		},
		{
			"name": "睢阳区",
			"value": "411403",
			"parent": "411400"
		},
		{
			"name": "民权县",
			"value": "411421",
			"parent": "411400"
		},
		{
			"name": "睢县",
			"value": "411422",
			"parent": "411400"
		},
		{
			"name": "宁陵县",
			"value": "411423",
			"parent": "411400"
		},
		{
			"name": "柘城县",
			"value": "411424",
			"parent": "411400"
		},
		{
			"name": "虞城县",
			"value": "411425",
			"parent": "411400"
		},
		{
			"name": "夏邑县",
			"value": "411426",
			"parent": "411400"
		},
		{
			"name": "永城市",
			"value": "411481",
			"parent": "411400"
		},
		{
			"name": "浉河区",
			"value": "411502",
			"parent": "411500"
		},
		{
			"name": "平桥区",
			"value": "411503",
			"parent": "411500"
		},
		{
			"name": "罗山县",
			"value": "411521",
			"parent": "411500"
		},
		{
			"name": "光山县",
			"value": "411522",
			"parent": "411500"
		},
		{
			"name": "新县",
			"value": "411523",
			"parent": "411500"
		},
		{
			"name": "商城县",
			"value": "411524",
			"parent": "411500"
		},
		{
			"name": "固始县",
			"value": "411525",
			"parent": "411500"
		},
		{
			"name": "潢川县",
			"value": "411526",
			"parent": "411500"
		},
		{
			"name": "淮滨县",
			"value": "411527",
			"parent": "411500"
		},
		{
			"name": "息县",
			"value": "411528",
			"parent": "411500"
		},
		{
			"name": "川汇区",
			"value": "411602",
			"parent": "411600"
		},
		{
			"name": "扶沟县",
			"value": "411621",
			"parent": "411600"
		},
		{
			"name": "西华县",
			"value": "411622",
			"parent": "411600"
		},
		{
			"name": "商水县",
			"value": "411623",
			"parent": "411600"
		},
		{
			"name": "沈丘县",
			"value": "411624",
			"parent": "411600"
		},
		{
			"name": "郸城县",
			"value": "411625",
			"parent": "411600"
		},
		{
			"name": "淮阳县",
			"value": "411626",
			"parent": "411600"
		},
		{
			"name": "太康县",
			"value": "411627",
			"parent": "411600"
		},
		{
			"name": "鹿邑县",
			"value": "411628",
			"parent": "411600"
		},
		{
			"name": "项城市",
			"value": "411681",
			"parent": "411600"
		},
		{
			"name": "驿城区",
			"value": "411702",
			"parent": "411700"
		},
		{
			"name": "西平县",
			"value": "411721",
			"parent": "411700"
		},
		{
			"name": "上蔡县",
			"value": "411722",
			"parent": "411700"
		},
		{
			"name": "平舆县",
			"value": "411723",
			"parent": "411700"
		},
		{
			"name": "正阳县",
			"value": "411724",
			"parent": "411700"
		},
		{
			"name": "确山县",
			"value": "411725",
			"parent": "411700"
		},
		{
			"name": "泌阳县",
			"value": "411726",
			"parent": "411700"
		},
		{
			"name": "汝南县",
			"value": "411727",
			"parent": "411700"
		},
		{
			"name": "遂平县",
			"value": "411728",
			"parent": "411700"
		},
		{
			"name": "新蔡县",
			"value": "411729",
			"parent": "411700"
		},
		{
			"name": "武汉市",
			"value": "420100",
			"parent": "420000"
		},
		{
			"name": "黄石市",
			"value": "420200",
			"parent": "420000"
		},
		{
			"name": "十堰市",
			"value": "420300",
			"parent": "420000"
		},
		{
			"name": "宜昌市",
			"value": "420500",
			"parent": "420000"
		},
		{
			"name": "襄阳市",
			"value": "420600",
			"parent": "420000"
		},
		{
			"name": "鄂州市",
			"value": "420700",
			"parent": "420000"
		},
		{
			"name": "荆门市",
			"value": "420800",
			"parent": "420000"
		},
		{
			"name": "孝感市",
			"value": "420900",
			"parent": "420000"
		},
		{
			"name": "荆州市",
			"value": "421000",
			"parent": "420000"
		},
		{
			"name": "黄冈市",
			"value": "421100",
			"parent": "420000"
		},
		{
			"name": "咸宁市",
			"value": "421200",
			"parent": "420000"
		},
		{
			"name": "随州市",
			"value": "421300",
			"parent": "420000"
		},
		{
			"name": "恩施土家族苗族自治州",
			"value": "422800",
			"parent": "420000"
		},
		{
			"name": "仙桃市",
			"value": "429004",
			"parent": "420000"
		},
		{
			"name": "潜江市",
			"value": "429005",
			"parent": "420000"
		},
		{
			"name": "天门市",
			"value": "429006",
			"parent": "420000"
		},
		{
			"name": "神农架林区",
			"value": "429021",
			"parent": "420000"
		},
		{
			"name": "江岸区",
			"value": "420102",
			"parent": "420100"
		},
		{
			"name": "江汉区",
			"value": "420103",
			"parent": "420100"
		},
		{
			"name": "硚口区",
			"value": "420104",
			"parent": "420100"
		},
		{
			"name": "汉阳区",
			"value": "420105",
			"parent": "420100"
		},
		{
			"name": "武昌区",
			"value": "420106",
			"parent": "420100"
		},
		{
			"name": "青山区",
			"value": "420107",
			"parent": "420100"
		},
		{
			"name": "洪山区",
			"value": "420111",
			"parent": "420100"
		},
		{
			"name": "东西湖区",
			"value": "420112",
			"parent": "420100"
		},
		{
			"name": "汉南区",
			"value": "420113",
			"parent": "420100"
		},
		{
			"name": "蔡甸区",
			"value": "420114",
			"parent": "420100"
		},
		{
			"name": "江夏区",
			"value": "420115",
			"parent": "420100"
		},
		{
			"name": "黄陂区",
			"value": "420116",
			"parent": "420100"
		},
		{
			"name": "新洲区",
			"value": "420117",
			"parent": "420100"
		},
		{
			"name": "黄石港区",
			"value": "420202",
			"parent": "420200"
		},
		{
			"name": "西塞山区",
			"value": "420203",
			"parent": "420200"
		},
		{
			"name": "下陆区",
			"value": "420204",
			"parent": "420200"
		},
		{
			"name": "铁山区",
			"value": "420205",
			"parent": "420200"
		},
		{
			"name": "阳新县",
			"value": "420222",
			"parent": "420200"
		},
		{
			"name": "大冶市",
			"value": "420281",
			"parent": "420200"
		},
		{
			"name": "茅箭区",
			"value": "420302",
			"parent": "420300"
		},
		{
			"name": "张湾区",
			"value": "420303",
			"parent": "420300"
		},
		{
			"name": "郧阳区",
			"value": "420304",
			"parent": "420300"
		},
		{
			"name": "郧西县",
			"value": "420322",
			"parent": "420300"
		},
		{
			"name": "竹山县",
			"value": "420323",
			"parent": "420300"
		},
		{
			"name": "竹溪县",
			"value": "420324",
			"parent": "420300"
		},
		{
			"name": "房县",
			"value": "420325",
			"parent": "420300"
		},
		{
			"name": "丹江口市",
			"value": "420381",
			"parent": "420300"
		},
		{
			"name": "西陵区",
			"value": "420502",
			"parent": "420500"
		},
		{
			"name": "伍家岗区",
			"value": "420503",
			"parent": "420500"
		},
		{
			"name": "点军区",
			"value": "420504",
			"parent": "420500"
		},
		{
			"name": "猇亭区",
			"value": "420505",
			"parent": "420500"
		},
		{
			"name": "夷陵区",
			"value": "420506",
			"parent": "420500"
		},
		{
			"name": "远安县",
			"value": "420525",
			"parent": "420500"
		},
		{
			"name": "兴山县",
			"value": "420526",
			"parent": "420500"
		},
		{
			"name": "秭归县",
			"value": "420527",
			"parent": "420500"
		},
		{
			"name": "长阳土家族自治县",
			"value": "420528",
			"parent": "420500"
		},
		{
			"name": "五峰土家族自治县",
			"value": "420529",
			"parent": "420500"
		},
		{
			"name": "宜都市",
			"value": "420581",
			"parent": "420500"
		},
		{
			"name": "当阳市",
			"value": "420582",
			"parent": "420500"
		},
		{
			"name": "枝江市",
			"value": "420583",
			"parent": "420500"
		},
		{
			"name": "襄城区",
			"value": "420602",
			"parent": "420600"
		},
		{
			"name": "樊城区",
			"value": "420606",
			"parent": "420600"
		},
		{
			"name": "襄州区",
			"value": "420607",
			"parent": "420600"
		},
		{
			"name": "南漳县",
			"value": "420624",
			"parent": "420600"
		},
		{
			"name": "谷城县",
			"value": "420625",
			"parent": "420600"
		},
		{
			"name": "保康县",
			"value": "420626",
			"parent": "420600"
		},
		{
			"name": "老河口市",
			"value": "420682",
			"parent": "420600"
		},
		{
			"name": "枣阳市",
			"value": "420683",
			"parent": "420600"
		},
		{
			"name": "宜城市",
			"value": "420684",
			"parent": "420600"
		},
		{
			"name": "梁子湖区",
			"value": "420702",
			"parent": "420700"
		},
		{
			"name": "华容区",
			"value": "420703",
			"parent": "420700"
		},
		{
			"name": "鄂城区",
			"value": "420704",
			"parent": "420700"
		},
		{
			"name": "东宝区",
			"value": "420802",
			"parent": "420800"
		},
		{
			"name": "掇刀区",
			"value": "420804",
			"parent": "420800"
		},
		{
			"name": "京山县",
			"value": "420821",
			"parent": "420800"
		},
		{
			"name": "沙洋县",
			"value": "420822",
			"parent": "420800"
		},
		{
			"name": "钟祥市",
			"value": "420881",
			"parent": "420800"
		},
		{
			"name": "孝南区",
			"value": "420902",
			"parent": "420900"
		},
		{
			"name": "孝昌县",
			"value": "420921",
			"parent": "420900"
		},
		{
			"name": "大悟县",
			"value": "420922",
			"parent": "420900"
		},
		{
			"name": "云梦县",
			"value": "420923",
			"parent": "420900"
		},
		{
			"name": "应城市",
			"value": "420981",
			"parent": "420900"
		},
		{
			"name": "安陆市",
			"value": "420982",
			"parent": "420900"
		},
		{
			"name": "汉川市",
			"value": "420984",
			"parent": "420900"
		},
		{
			"name": "沙市区",
			"value": "421002",
			"parent": "421000"
		},
		{
			"name": "荆州区",
			"value": "421003",
			"parent": "421000"
		},
		{
			"name": "公安县",
			"value": "421022",
			"parent": "421000"
		},
		{
			"name": "监利县",
			"value": "421023",
			"parent": "421000"
		},
		{
			"name": "江陵县",
			"value": "421024",
			"parent": "421000"
		},
		{
			"name": "石首市",
			"value": "421081",
			"parent": "421000"
		},
		{
			"name": "洪湖市",
			"value": "421083",
			"parent": "421000"
		},
		{
			"name": "松滋市",
			"value": "421087",
			"parent": "421000"
		},
		{
			"name": "黄州区",
			"value": "421102",
			"parent": "421100"
		},
		{
			"name": "团风县",
			"value": "421121",
			"parent": "421100"
		},
		{
			"name": "红安县",
			"value": "421122",
			"parent": "421100"
		},
		{
			"name": "罗田县",
			"value": "421123",
			"parent": "421100"
		},
		{
			"name": "英山县",
			"value": "421124",
			"parent": "421100"
		},
		{
			"name": "浠水县",
			"value": "421125",
			"parent": "421100"
		},
		{
			"name": "蕲春县",
			"value": "421126",
			"parent": "421100"
		},
		{
			"name": "黄梅县",
			"value": "421127",
			"parent": "421100"
		},
		{
			"name": "麻城市",
			"value": "421181",
			"parent": "421100"
		},
		{
			"name": "武穴市",
			"value": "421182",
			"parent": "421100"
		},
		{
			"name": "咸安区",
			"value": "421202",
			"parent": "421200"
		},
		{
			"name": "嘉鱼县",
			"value": "421221",
			"parent": "421200"
		},
		{
			"name": "通城县",
			"value": "421222",
			"parent": "421200"
		},
		{
			"name": "崇阳县",
			"value": "421223",
			"parent": "421200"
		},
		{
			"name": "通山县",
			"value": "421224",
			"parent": "421200"
		},
		{
			"name": "赤壁市",
			"value": "421281",
			"parent": "421200"
		},
		{
			"name": "曾都区",
			"value": "421303",
			"parent": "421300"
		},
		{
			"name": "随县",
			"value": "421321",
			"parent": "421300"
		},
		{
			"name": "广水市",
			"value": "421381",
			"parent": "421300"
		},
		{
			"name": "恩施市",
			"value": "422801",
			"parent": "422800"
		},
		{
			"name": "利川市",
			"value": "422802",
			"parent": "422800"
		},
		{
			"name": "建始县",
			"value": "422822",
			"parent": "422800"
		},
		{
			"name": "巴东县",
			"value": "422823",
			"parent": "422800"
		},
		{
			"name": "宣恩县",
			"value": "422825",
			"parent": "422800"
		},
		{
			"name": "咸丰县",
			"value": "422826",
			"parent": "422800"
		},
		{
			"name": "来凤县",
			"value": "422827",
			"parent": "422800"
		},
		{
			"name": "鹤峰县",
			"value": "422828",
			"parent": "422800"
		},
		{
			"name": "长沙市",
			"value": "430100",
			"parent": "430000"
		},
		{
			"name": "株洲市",
			"value": "430200",
			"parent": "430000"
		},
		{
			"name": "湘潭市",
			"value": "430300",
			"parent": "430000"
		},
		{
			"name": "衡阳市",
			"value": "430400",
			"parent": "430000"
		},
		{
			"name": "邵阳市",
			"value": "430500",
			"parent": "430000"
		},
		{
			"name": "岳阳市",
			"value": "430600",
			"parent": "430000"
		},
		{
			"name": "常德市",
			"value": "430700",
			"parent": "430000"
		},
		{
			"name": "张家界市",
			"value": "430800",
			"parent": "430000"
		},
		{
			"name": "益阳市",
			"value": "430900",
			"parent": "430000"
		},
		{
			"name": "郴州市",
			"value": "431000",
			"parent": "430000"
		},
		{
			"name": "永州市",
			"value": "431100",
			"parent": "430000"
		},
		{
			"name": "怀化市",
			"value": "431200",
			"parent": "430000"
		},
		{
			"name": "娄底市",
			"value": "431300",
			"parent": "430000"
		},
		{
			"name": "湘西土家族苗族自治州",
			"value": "433100",
			"parent": "430000"
		},
		{
			"name": "芙蓉区",
			"value": "430102",
			"parent": "430100"
		},
		{
			"name": "天心区",
			"value": "430103",
			"parent": "430100"
		},
		{
			"name": "岳麓区",
			"value": "430104",
			"parent": "430100"
		},
		{
			"name": "开福区",
			"value": "430105",
			"parent": "430100"
		},
		{
			"name": "雨花区",
			"value": "430111",
			"parent": "430100"
		},
		{
			"name": "望城区",
			"value": "430112",
			"parent": "430100"
		},
		{
			"name": "长沙县",
			"value": "430121",
			"parent": "430100"
		},
		{
			"name": "宁乡县",
			"value": "430124",
			"parent": "430100"
		},
		{
			"name": "浏阳市",
			"value": "430181",
			"parent": "430100"
		},
		{
			"name": "荷塘区",
			"value": "430202",
			"parent": "430200"
		},
		{
			"name": "芦淞区",
			"value": "430203",
			"parent": "430200"
		},
		{
			"name": "石峰区",
			"value": "430204",
			"parent": "430200"
		},
		{
			"name": "天元区",
			"value": "430211",
			"parent": "430200"
		},
		{
			"name": "株洲县",
			"value": "430221",
			"parent": "430200"
		},
		{
			"name": "攸县",
			"value": "430223",
			"parent": "430200"
		},
		{
			"name": "茶陵县",
			"value": "430224",
			"parent": "430200"
		},
		{
			"name": "炎陵县",
			"value": "430225",
			"parent": "430200"
		},
		{
			"name": "醴陵市",
			"value": "430281",
			"parent": "430200"
		},
		{
			"name": "雨湖区",
			"value": "430302",
			"parent": "430300"
		},
		{
			"name": "岳塘区",
			"value": "430304",
			"parent": "430300"
		},
		{
			"name": "湘潭县",
			"value": "430321",
			"parent": "430300"
		},
		{
			"name": "湘乡市",
			"value": "430381",
			"parent": "430300"
		},
		{
			"name": "韶山市",
			"value": "430382",
			"parent": "430300"
		},
		{
			"name": "珠晖区",
			"value": "430405",
			"parent": "430400"
		},
		{
			"name": "雁峰区",
			"value": "430406",
			"parent": "430400"
		},
		{
			"name": "石鼓区",
			"value": "430407",
			"parent": "430400"
		},
		{
			"name": "蒸湘区",
			"value": "430408",
			"parent": "430400"
		},
		{
			"name": "南岳区",
			"value": "430412",
			"parent": "430400"
		},
		{
			"name": "衡阳县",
			"value": "430421",
			"parent": "430400"
		},
		{
			"name": "衡南县",
			"value": "430422",
			"parent": "430400"
		},
		{
			"name": "衡山县",
			"value": "430423",
			"parent": "430400"
		},
		{
			"name": "衡东县",
			"value": "430424",
			"parent": "430400"
		},
		{
			"name": "祁东县",
			"value": "430426",
			"parent": "430400"
		},
		{
			"name": "耒阳市",
			"value": "430481",
			"parent": "430400"
		},
		{
			"name": "常宁市",
			"value": "430482",
			"parent": "430400"
		},
		{
			"name": "双清区",
			"value": "430502",
			"parent": "430500"
		},
		{
			"name": "大祥区",
			"value": "430503",
			"parent": "430500"
		},
		{
			"name": "北塔区",
			"value": "430511",
			"parent": "430500"
		},
		{
			"name": "邵东县",
			"value": "430521",
			"parent": "430500"
		},
		{
			"name": "新邵县",
			"value": "430522",
			"parent": "430500"
		},
		{
			"name": "邵阳县",
			"value": "430523",
			"parent": "430500"
		},
		{
			"name": "隆回县",
			"value": "430524",
			"parent": "430500"
		},
		{
			"name": "洞口县",
			"value": "430525",
			"parent": "430500"
		},
		{
			"name": "绥宁县",
			"value": "430527",
			"parent": "430500"
		},
		{
			"name": "新宁县",
			"value": "430528",
			"parent": "430500"
		},
		{
			"name": "城步苗族自治县",
			"value": "430529",
			"parent": "430500"
		},
		{
			"name": "武冈市",
			"value": "430581",
			"parent": "430500"
		},
		{
			"name": "岳阳楼区",
			"value": "430602",
			"parent": "430600"
		},
		{
			"name": "云溪区",
			"value": "430603",
			"parent": "430600"
		},
		{
			"name": "君山区",
			"value": "430611",
			"parent": "430600"
		},
		{
			"name": "岳阳县",
			"value": "430621",
			"parent": "430600"
		},
		{
			"name": "华容县",
			"value": "430623",
			"parent": "430600"
		},
		{
			"name": "湘阴县",
			"value": "430624",
			"parent": "430600"
		},
		{
			"name": "平江县",
			"value": "430626",
			"parent": "430600"
		},
		{
			"name": "汨罗市",
			"value": "430681",
			"parent": "430600"
		},
		{
			"name": "临湘市",
			"value": "430682",
			"parent": "430600"
		},
		{
			"name": "武陵区",
			"value": "430702",
			"parent": "430700"
		},
		{
			"name": "鼎城区",
			"value": "430703",
			"parent": "430700"
		},
		{
			"name": "安乡县",
			"value": "430721",
			"parent": "430700"
		},
		{
			"name": "汉寿县",
			"value": "430722",
			"parent": "430700"
		},
		{
			"name": "澧县",
			"value": "430723",
			"parent": "430700"
		},
		{
			"name": "临澧县",
			"value": "430724",
			"parent": "430700"
		},
		{
			"name": "桃源县",
			"value": "430725",
			"parent": "430700"
		},
		{
			"name": "石门县",
			"value": "430726",
			"parent": "430700"
		},
		{
			"name": "津市市",
			"value": "430781",
			"parent": "430700"
		},
		{
			"name": "永定区",
			"value": "430802",
			"parent": "430800"
		},
		{
			"name": "武陵源区",
			"value": "430811",
			"parent": "430800"
		},
		{
			"name": "慈利县",
			"value": "430821",
			"parent": "430800"
		},
		{
			"name": "桑植县",
			"value": "430822",
			"parent": "430800"
		},
		{
			"name": "资阳区",
			"value": "430902",
			"parent": "430900"
		},
		{
			"name": "赫山区",
			"value": "430903",
			"parent": "430900"
		},
		{
			"name": "南县",
			"value": "430921",
			"parent": "430900"
		},
		{
			"name": "桃江县",
			"value": "430922",
			"parent": "430900"
		},
		{
			"name": "安化县",
			"value": "430923",
			"parent": "430900"
		},
		{
			"name": "沅江市",
			"value": "430981",
			"parent": "430900"
		},
		{
			"name": "北湖区",
			"value": "431002",
			"parent": "431000"
		},
		{
			"name": "苏仙区",
			"value": "431003",
			"parent": "431000"
		},
		{
			"name": "桂阳县",
			"value": "431021",
			"parent": "431000"
		},
		{
			"name": "宜章县",
			"value": "431022",
			"parent": "431000"
		},
		{
			"name": "永兴县",
			"value": "431023",
			"parent": "431000"
		},
		{
			"name": "嘉禾县",
			"value": "431024",
			"parent": "431000"
		},
		{
			"name": "临武县",
			"value": "431025",
			"parent": "431000"
		},
		{
			"name": "汝城县",
			"value": "431026",
			"parent": "431000"
		},
		{
			"name": "桂东县",
			"value": "431027",
			"parent": "431000"
		},
		{
			"name": "安仁县",
			"value": "431028",
			"parent": "431000"
		},
		{
			"name": "资兴市",
			"value": "431081",
			"parent": "431000"
		},
		{
			"name": "零陵区",
			"value": "431102",
			"parent": "431100"
		},
		{
			"name": "冷水滩区",
			"value": "431103",
			"parent": "431100"
		},
		{
			"name": "祁阳县",
			"value": "431121",
			"parent": "431100"
		},
		{
			"name": "东安县",
			"value": "431122",
			"parent": "431100"
		},
		{
			"name": "双牌县",
			"value": "431123",
			"parent": "431100"
		},
		{
			"name": "道县",
			"value": "431124",
			"parent": "431100"
		},
		{
			"name": "江永县",
			"value": "431125",
			"parent": "431100"
		},
		{
			"name": "宁远县",
			"value": "431126",
			"parent": "431100"
		},
		{
			"name": "蓝山县",
			"value": "431127",
			"parent": "431100"
		},
		{
			"name": "新田县",
			"value": "431128",
			"parent": "431100"
		},
		{
			"name": "江华瑶族自治县",
			"value": "431129",
			"parent": "431100"
		},
		{
			"name": "鹤城区",
			"value": "431202",
			"parent": "431200"
		},
		{
			"name": "中方县",
			"value": "431221",
			"parent": "431200"
		},
		{
			"name": "沅陵县",
			"value": "431222",
			"parent": "431200"
		},
		{
			"name": "辰溪县",
			"value": "431223",
			"parent": "431200"
		},
		{
			"name": "溆浦县",
			"value": "431224",
			"parent": "431200"
		},
		{
			"name": "会同县",
			"value": "431225",
			"parent": "431200"
		},
		{
			"name": "麻阳苗族自治县",
			"value": "431226",
			"parent": "431200"
		},
		{
			"name": "新晃侗族自治县",
			"value": "431227",
			"parent": "431200"
		},
		{
			"name": "芷江侗族自治县",
			"value": "431228",
			"parent": "431200"
		},
		{
			"name": "靖州苗族侗族自治县",
			"value": "431229",
			"parent": "431200"
		},
		{
			"name": "通道侗族自治县",
			"value": "431230",
			"parent": "431200"
		},
		{
			"name": "洪江市",
			"value": "431281",
			"parent": "431200"
		},
		{
			"name": "娄星区",
			"value": "431302",
			"parent": "431300"
		},
		{
			"name": "双峰县",
			"value": "431321",
			"parent": "431300"
		},
		{
			"name": "新化县",
			"value": "431322",
			"parent": "431300"
		},
		{
			"name": "冷水江市",
			"value": "431381",
			"parent": "431300"
		},
		{
			"name": "涟源市",
			"value": "431382",
			"parent": "431300"
		},
		{
			"name": "吉首市",
			"value": "433101",
			"parent": "433100"
		},
		{
			"name": "泸溪县",
			"value": "433122",
			"parent": "433100"
		},
		{
			"name": "凤凰县",
			"value": "433123",
			"parent": "433100"
		},
		{
			"name": "花垣县",
			"value": "433124",
			"parent": "433100"
		},
		{
			"name": "保靖县",
			"value": "433125",
			"parent": "433100"
		},
		{
			"name": "古丈县",
			"value": "433126",
			"parent": "433100"
		},
		{
			"name": "永顺县",
			"value": "433127",
			"parent": "433100"
		},
		{
			"name": "龙山县",
			"value": "433130",
			"parent": "433100"
		},
		{
			"name": "广州市",
			"value": "440100",
			"parent": "440000"
		},
		{
			"name": "韶关市",
			"value": "440200",
			"parent": "440000"
		},
		{
			"name": "深圳市",
			"value": "440300",
			"parent": "440000"
		},
		{
			"name": "珠海市",
			"value": "440400",
			"parent": "440000"
		},
		{
			"name": "汕头市",
			"value": "440500",
			"parent": "440000"
		},
		{
			"name": "佛山市",
			"value": "440600",
			"parent": "440000"
		},
		{
			"name": "江门市",
			"value": "440700",
			"parent": "440000"
		},
		{
			"name": "湛江市",
			"value": "440800",
			"parent": "440000"
		},
		{
			"name": "茂名市",
			"value": "440900",
			"parent": "440000"
		},
		{
			"name": "肇庆市",
			"value": "441200",
			"parent": "440000"
		},
		{
			"name": "惠州市",
			"value": "441300",
			"parent": "440000"
		},
		{
			"name": "梅州市",
			"value": "441400",
			"parent": "440000"
		},
		{
			"name": "汕尾市",
			"value": "441500",
			"parent": "440000"
		},
		{
			"name": "河源市",
			"value": "441600",
			"parent": "440000"
		},
		{
			"name": "阳江市",
			"value": "441700",
			"parent": "440000"
		},
		{
			"name": "清远市",
			"value": "441800",
			"parent": "440000"
		},
		{
			"name": "东莞市",
			"value": "441900",
			"parent": "440000"
		},
		{
			"name": "中山市",
			"value": "442000",
			"parent": "440000"
		},
		{
			"name": "潮州市",
			"value": "445100",
			"parent": "440000"
		},
		{
			"name": "揭阳市",
			"value": "445200",
			"parent": "440000"
		},
		{
			"name": "云浮市",
			"value": "445300",
			"parent": "440000"
		},
		{
			"name": "荔湾区",
			"value": "440103",
			"parent": "440100"
		},
		{
			"name": "越秀区",
			"value": "440104",
			"parent": "440100"
		},
		{
			"name": "海珠区",
			"value": "440105",
			"parent": "440100"
		},
		{
			"name": "天河区",
			"value": "440106",
			"parent": "440100"
		},
		{
			"name": "白云区",
			"value": "440111",
			"parent": "440100"
		},
		{
			"name": "黄埔区",
			"value": "440112",
			"parent": "440100"
		},
		{
			"name": "番禺区",
			"value": "440113",
			"parent": "440100"
		},
		{
			"name": "花都区",
			"value": "440114",
			"parent": "440100"
		},
		{
			"name": "南沙区",
			"value": "440115",
			"parent": "440100"
		},
		{
			"name": "从化区",
			"value": "440117",
			"parent": "440100"
		},
		{
			"name": "增城区",
			"value": "440118",
			"parent": "440100"
		},
		{
			"name": "武江区",
			"value": "440203",
			"parent": "440200"
		},
		{
			"name": "浈江区",
			"value": "440204",
			"parent": "440200"
		},
		{
			"name": "曲江区",
			"value": "440205",
			"parent": "440200"
		},
		{
			"name": "始兴县",
			"value": "440222",
			"parent": "440200"
		},
		{
			"name": "仁化县",
			"value": "440224",
			"parent": "440200"
		},
		{
			"name": "翁源县",
			"value": "440229",
			"parent": "440200"
		},
		{
			"name": "乳源瑶族自治县",
			"value": "440232",
			"parent": "440200"
		},
		{
			"name": "新丰县",
			"value": "440233",
			"parent": "440200"
		},
		{
			"name": "乐昌市",
			"value": "440281",
			"parent": "440200"
		},
		{
			"name": "南雄市",
			"value": "440282",
			"parent": "440200"
		},
		{
			"name": "罗湖区",
			"value": "440303",
			"parent": "440300"
		},
		{
			"name": "福田区",
			"value": "440304",
			"parent": "440300"
		},
		{
			"name": "南山区",
			"value": "440305",
			"parent": "440300"
		},
		{
			"name": "宝安区",
			"value": "440306",
			"parent": "440300"
		},
		{
			"name": "龙岗区",
			"value": "440307",
			"parent": "440300"
		},
		{
			"name": "盐田区",
			"value": "440308",
			"parent": "440300"
		},
		{
			"name": "香洲区",
			"value": "440402",
			"parent": "440400"
		},
		{
			"name": "斗门区",
			"value": "440403",
			"parent": "440400"
		},
		{
			"name": "金湾区",
			"value": "440404",
			"parent": "440400"
		},
		{
			"name": "龙湖区",
			"value": "440507",
			"parent": "440500"
		},
		{
			"name": "金平区",
			"value": "440511",
			"parent": "440500"
		},
		{
			"name": "濠江区",
			"value": "440512",
			"parent": "440500"
		},
		{
			"name": "潮阳区",
			"value": "440513",
			"parent": "440500"
		},
		{
			"name": "潮南区",
			"value": "440514",
			"parent": "440500"
		},
		{
			"name": "澄海区",
			"value": "440515",
			"parent": "440500"
		},
		{
			"name": "南澳县",
			"value": "440523",
			"parent": "440500"
		},
		{
			"name": "禅城区",
			"value": "440604",
			"parent": "440600"
		},
		{
			"name": "南海区",
			"value": "440605",
			"parent": "440600"
		},
		{
			"name": "顺德区",
			"value": "440606",
			"parent": "440600"
		},
		{
			"name": "三水区",
			"value": "440607",
			"parent": "440600"
		},
		{
			"name": "高明区",
			"value": "440608",
			"parent": "440600"
		},
		{
			"name": "蓬江区",
			"value": "440703",
			"parent": "440700"
		},
		{
			"name": "江海区",
			"value": "440704",
			"parent": "440700"
		},
		{
			"name": "新会区",
			"value": "440705",
			"parent": "440700"
		},
		{
			"name": "台山市",
			"value": "440781",
			"parent": "440700"
		},
		{
			"name": "开平市",
			"value": "440783",
			"parent": "440700"
		},
		{
			"name": "鹤山市",
			"value": "440784",
			"parent": "440700"
		},
		{
			"name": "恩平市",
			"value": "440785",
			"parent": "440700"
		},
		{
			"name": "赤坎区",
			"value": "440802",
			"parent": "440800"
		},
		{
			"name": "霞山区",
			"value": "440803",
			"parent": "440800"
		},
		{
			"name": "坡头区",
			"value": "440804",
			"parent": "440800"
		},
		{
			"name": "麻章区",
			"value": "440811",
			"parent": "440800"
		},
		{
			"name": "遂溪县",
			"value": "440823",
			"parent": "440800"
		},
		{
			"name": "徐闻县",
			"value": "440825",
			"parent": "440800"
		},
		{
			"name": "廉江市",
			"value": "440881",
			"parent": "440800"
		},
		{
			"name": "雷州市",
			"value": "440882",
			"parent": "440800"
		},
		{
			"name": "吴川市",
			"value": "440883",
			"parent": "440800"
		},
		{
			"name": "茂南区",
			"value": "440902",
			"parent": "440900"
		},
		{
			"name": "电白区",
			"value": "440904",
			"parent": "440900"
		},
		{
			"name": "高州市",
			"value": "440981",
			"parent": "440900"
		},
		{
			"name": "化州市",
			"value": "440982",
			"parent": "440900"
		},
		{
			"name": "信宜市",
			"value": "440983",
			"parent": "440900"
		},
		{
			"name": "端州区",
			"value": "441202",
			"parent": "441200"
		},
		{
			"name": "鼎湖区",
			"value": "441203",
			"parent": "441200"
		},
		{
			"name": "高要区",
			"value": "441204",
			"parent": "441200"
		},
		{
			"name": "广宁县",
			"value": "441223",
			"parent": "441200"
		},
		{
			"name": "怀集县",
			"value": "441224",
			"parent": "441200"
		},
		{
			"name": "封开县",
			"value": "441225",
			"parent": "441200"
		},
		{
			"name": "德庆县",
			"value": "441226",
			"parent": "441200"
		},
		{
			"name": "四会市",
			"value": "441284",
			"parent": "441200"
		},
		{
			"name": "惠城区",
			"value": "441302",
			"parent": "441300"
		},
		{
			"name": "惠阳区",
			"value": "441303",
			"parent": "441300"
		},
		{
			"name": "博罗县",
			"value": "441322",
			"parent": "441300"
		},
		{
			"name": "惠东县",
			"value": "441323",
			"parent": "441300"
		},
		{
			"name": "龙门县",
			"value": "441324",
			"parent": "441300"
		},
		{
			"name": "梅江区",
			"value": "441402",
			"parent": "441400"
		},
		{
			"name": "梅县区",
			"value": "441403",
			"parent": "441400"
		},
		{
			"name": "大埔县",
			"value": "441422",
			"parent": "441400"
		},
		{
			"name": "丰顺县",
			"value": "441423",
			"parent": "441400"
		},
		{
			"name": "五华县",
			"value": "441424",
			"parent": "441400"
		},
		{
			"name": "平远县",
			"value": "441426",
			"parent": "441400"
		},
		{
			"name": "蕉岭县",
			"value": "441427",
			"parent": "441400"
		},
		{
			"name": "兴宁市",
			"value": "441481",
			"parent": "441400"
		},
		{
			"name": "城区",
			"value": "441502",
			"parent": "441500"
		},
		{
			"name": "海丰县",
			"value": "441521",
			"parent": "441500"
		},
		{
			"name": "陆河县",
			"value": "441523",
			"parent": "441500"
		},
		{
			"name": "陆丰市",
			"value": "441581",
			"parent": "441500"
		},
		{
			"name": "源城区",
			"value": "441602",
			"parent": "441600"
		},
		{
			"name": "紫金县",
			"value": "441621",
			"parent": "441600"
		},
		{
			"name": "龙川县",
			"value": "441622",
			"parent": "441600"
		},
		{
			"name": "连平县",
			"value": "441623",
			"parent": "441600"
		},
		{
			"name": "和平县",
			"value": "441624",
			"parent": "441600"
		},
		{
			"name": "东源县",
			"value": "441625",
			"parent": "441600"
		},
		{
			"name": "江城区",
			"value": "441702",
			"parent": "441700"
		},
		{
			"name": "阳东区",
			"value": "441704",
			"parent": "441700"
		},
		{
			"name": "阳西县",
			"value": "441721",
			"parent": "441700"
		},
		{
			"name": "阳春市",
			"value": "441781",
			"parent": "441700"
		},
		{
			"name": "清城区",
			"value": "441802",
			"parent": "441800"
		},
		{
			"name": "清新区",
			"value": "441803",
			"parent": "441800"
		},
		{
			"name": "佛冈县",
			"value": "441821",
			"parent": "441800"
		},
		{
			"name": "阳山县",
			"value": "441823",
			"parent": "441800"
		},
		{
			"name": "连山壮族瑶族自治县",
			"value": "441825",
			"parent": "441800"
		},
		{
			"name": "连南瑶族自治县",
			"value": "441826",
			"parent": "441800"
		},
		{
			"name": "英德市",
			"value": "441881",
			"parent": "441800"
		},
		{
			"name": "连州市",
			"value": "441882",
			"parent": "441800"
		},
		{
			"name": "三元里",
			"value": "441900",
			"parent": "441900"
		},
		{
			"name": "湖滨北路",
			"value": "442000",
			"parent": "442000"
		},
		{
			"name": "湘桥区",
			"value": "445102",
			"parent": "445100"
		},
		{
			"name": "潮安区",
			"value": "445103",
			"parent": "445100"
		},
		{
			"name": "饶平县",
			"value": "445122",
			"parent": "445100"
		},
		{
			"name": "榕城区",
			"value": "445202",
			"parent": "445200"
		},
		{
			"name": "揭东区",
			"value": "445203",
			"parent": "445200"
		},
		{
			"name": "揭西县",
			"value": "445222",
			"parent": "445200"
		},
		{
			"name": "惠来县",
			"value": "445224",
			"parent": "445200"
		},
		{
			"name": "普宁市",
			"value": "445281",
			"parent": "445200"
		},
		{
			"name": "云城区",
			"value": "445302",
			"parent": "445300"
		},
		{
			"name": "云安区",
			"value": "445303",
			"parent": "445300"
		},
		{
			"name": "新兴县",
			"value": "445321",
			"parent": "445300"
		},
		{
			"name": "郁南县",
			"value": "445322",
			"parent": "445300"
		},
		{
			"name": "罗定市",
			"value": "445381",
			"parent": "445300"
		},
		{
			"name": "南宁市",
			"value": "450100",
			"parent": "450000"
		},
		{
			"name": "柳州市",
			"value": "450200",
			"parent": "450000"
		},
		{
			"name": "桂林市",
			"value": "450300",
			"parent": "450000"
		},
		{
			"name": "梧州市",
			"value": "450400",
			"parent": "450000"
		},
		{
			"name": "北海市",
			"value": "450500",
			"parent": "450000"
		},
		{
			"name": "防城港市",
			"value": "450600",
			"parent": "450000"
		},
		{
			"name": "钦州市",
			"value": "450700",
			"parent": "450000"
		},
		{
			"name": "贵港市",
			"value": "450800",
			"parent": "450000"
		},
		{
			"name": "玉林市",
			"value": "450900",
			"parent": "450000"
		},
		{
			"name": "百色市",
			"value": "451000",
			"parent": "450000"
		},
		{
			"name": "贺州市",
			"value": "451100",
			"parent": "450000"
		},
		{
			"name": "河池市",
			"value": "451200",
			"parent": "450000"
		},
		{
			"name": "来宾市",
			"value": "451300",
			"parent": "450000"
		},
		{
			"name": "崇左市",
			"value": "451400",
			"parent": "450000"
		},
		{
			"name": "兴宁区",
			"value": "450102",
			"parent": "450100"
		},
		{
			"name": "青秀区",
			"value": "450103",
			"parent": "450100"
		},
		{
			"name": "江南区",
			"value": "450105",
			"parent": "450100"
		},
		{
			"name": "西乡塘区",
			"value": "450107",
			"parent": "450100"
		},
		{
			"name": "良庆区",
			"value": "450108",
			"parent": "450100"
		},
		{
			"name": "邕宁区",
			"value": "450109",
			"parent": "450100"
		},
		{
			"name": "武鸣区",
			"value": "450110",
			"parent": "450100"
		},
		{
			"name": "隆安县",
			"value": "450123",
			"parent": "450100"
		},
		{
			"name": "马山县",
			"value": "450124",
			"parent": "450100"
		},
		{
			"name": "上林县",
			"value": "450125",
			"parent": "450100"
		},
		{
			"name": "宾阳县",
			"value": "450126",
			"parent": "450100"
		},
		{
			"name": "横县",
			"value": "450127",
			"parent": "450100"
		},
		{
			"name": "城中区",
			"value": "450202",
			"parent": "450200"
		},
		{
			"name": "鱼峰区",
			"value": "450203",
			"parent": "450200"
		},
		{
			"name": "柳南区",
			"value": "450204",
			"parent": "450200"
		},
		{
			"name": "柳北区",
			"value": "450205",
			"parent": "450200"
		},
		{
			"name": "柳江县",
			"value": "450221",
			"parent": "450200"
		},
		{
			"name": "柳城县",
			"value": "450222",
			"parent": "450200"
		},
		{
			"name": "鹿寨县",
			"value": "450223",
			"parent": "450200"
		},
		{
			"name": "融安县",
			"value": "450224",
			"parent": "450200"
		},
		{
			"name": "融水苗族自治县",
			"value": "450225",
			"parent": "450200"
		},
		{
			"name": "三江侗族自治县",
			"value": "450226",
			"parent": "450200"
		},
		{
			"name": "秀峰区",
			"value": "450302",
			"parent": "450300"
		},
		{
			"name": "叠彩区",
			"value": "450303",
			"parent": "450300"
		},
		{
			"name": "象山区",
			"value": "450304",
			"parent": "450300"
		},
		{
			"name": "七星区",
			"value": "450305",
			"parent": "450300"
		},
		{
			"name": "雁山区",
			"value": "450311",
			"parent": "450300"
		},
		{
			"name": "临桂区",
			"value": "450312",
			"parent": "450300"
		},
		{
			"name": "阳朔县",
			"value": "450321",
			"parent": "450300"
		},
		{
			"name": "灵川县",
			"value": "450323",
			"parent": "450300"
		},
		{
			"name": "全州县",
			"value": "450324",
			"parent": "450300"
		},
		{
			"name": "兴安县",
			"value": "450325",
			"parent": "450300"
		},
		{
			"name": "永福县",
			"value": "450326",
			"parent": "450300"
		},
		{
			"name": "灌阳县",
			"value": "450327",
			"parent": "450300"
		},
		{
			"name": "龙胜各族自治县",
			"value": "450328",
			"parent": "450300"
		},
		{
			"name": "资源县",
			"value": "450329",
			"parent": "450300"
		},
		{
			"name": "平乐县",
			"value": "450330",
			"parent": "450300"
		},
		{
			"name": "荔浦县",
			"value": "450331",
			"parent": "450300"
		},
		{
			"name": "恭城瑶族自治县",
			"value": "450332",
			"parent": "450300"
		},
		{
			"name": "万秀区",
			"value": "450403",
			"parent": "450400"
		},
		{
			"name": "长洲区",
			"value": "450405",
			"parent": "450400"
		},
		{
			"name": "龙圩区",
			"value": "450406",
			"parent": "450400"
		},
		{
			"name": "苍梧县",
			"value": "450421",
			"parent": "450400"
		},
		{
			"name": "藤县",
			"value": "450422",
			"parent": "450400"
		},
		{
			"name": "蒙山县",
			"value": "450423",
			"parent": "450400"
		},
		{
			"name": "岑溪市",
			"value": "450481",
			"parent": "450400"
		},
		{
			"name": "海城区",
			"value": "450502",
			"parent": "450500"
		},
		{
			"name": "银海区",
			"value": "450503",
			"parent": "450500"
		},
		{
			"name": "铁山港区",
			"value": "450512",
			"parent": "450500"
		},
		{
			"name": "合浦县",
			"value": "450521",
			"parent": "450500"
		},
		{
			"name": "港口区",
			"value": "450602",
			"parent": "450600"
		},
		{
			"name": "防城区",
			"value": "450603",
			"parent": "450600"
		},
		{
			"name": "上思县",
			"value": "450621",
			"parent": "450600"
		},
		{
			"name": "东兴市",
			"value": "450681",
			"parent": "450600"
		},
		{
			"name": "钦南区",
			"value": "450702",
			"parent": "450700"
		},
		{
			"name": "钦北区",
			"value": "450703",
			"parent": "450700"
		},
		{
			"name": "灵山县",
			"value": "450721",
			"parent": "450700"
		},
		{
			"name": "浦北县",
			"value": "450722",
			"parent": "450700"
		},
		{
			"name": "港北区",
			"value": "450802",
			"parent": "450800"
		},
		{
			"name": "港南区",
			"value": "450803",
			"parent": "450800"
		},
		{
			"name": "覃塘区",
			"value": "450804",
			"parent": "450800"
		},
		{
			"name": "平南县",
			"value": "450821",
			"parent": "450800"
		},
		{
			"name": "桂平市",
			"value": "450881",
			"parent": "450800"
		},
		{
			"name": "玉州区",
			"value": "450902",
			"parent": "450900"
		},
		{
			"name": "福绵区",
			"value": "450903",
			"parent": "450900"
		},
		{
			"name": "容县",
			"value": "450921",
			"parent": "450900"
		},
		{
			"name": "陆川县",
			"value": "450922",
			"parent": "450900"
		},
		{
			"name": "博白县",
			"value": "450923",
			"parent": "450900"
		},
		{
			"name": "兴业县",
			"value": "450924",
			"parent": "450900"
		},
		{
			"name": "北流市",
			"value": "450981",
			"parent": "450900"
		},
		{
			"name": "右江区",
			"value": "451002",
			"parent": "451000"
		},
		{
			"name": "田阳县",
			"value": "451021",
			"parent": "451000"
		},
		{
			"name": "田东县",
			"value": "451022",
			"parent": "451000"
		},
		{
			"name": "平果县",
			"value": "451023",
			"parent": "451000"
		},
		{
			"name": "德保县",
			"value": "451024",
			"parent": "451000"
		},
		{
			"name": "那坡县",
			"value": "451026",
			"parent": "451000"
		},
		{
			"name": "凌云县",
			"value": "451027",
			"parent": "451000"
		},
		{
			"name": "乐业县",
			"value": "451028",
			"parent": "451000"
		},
		{
			"name": "田林县",
			"value": "451029",
			"parent": "451000"
		},
		{
			"name": "西林县",
			"value": "451030",
			"parent": "451000"
		},
		{
			"name": "隆林各族自治县",
			"value": "451031",
			"parent": "451000"
		},
		{
			"name": "靖西市",
			"value": "451081",
			"parent": "451000"
		},
		{
			"name": "八步区",
			"value": "451102",
			"parent": "451100"
		},
		{
			"name": "昭平县",
			"value": "451121",
			"parent": "451100"
		},
		{
			"name": "钟山县",
			"value": "451122",
			"parent": "451100"
		},
		{
			"name": "富川瑶族自治县",
			"value": "451123",
			"parent": "451100"
		},
		{
			"name": "金城江区",
			"value": "451202",
			"parent": "451200"
		},
		{
			"name": "南丹县",
			"value": "451221",
			"parent": "451200"
		},
		{
			"name": "天峨县",
			"value": "451222",
			"parent": "451200"
		},
		{
			"name": "凤山县",
			"value": "451223",
			"parent": "451200"
		},
		{
			"name": "东兰县",
			"value": "451224",
			"parent": "451200"
		},
		{
			"name": "罗城仫佬族自治县",
			"value": "451225",
			"parent": "451200"
		},
		{
			"name": "环江毛南族自治县",
			"value": "451226",
			"parent": "451200"
		},
		{
			"name": "巴马瑶族自治县",
			"value": "451227",
			"parent": "451200"
		},
		{
			"name": "都安瑶族自治县",
			"value": "451228",
			"parent": "451200"
		},
		{
			"name": "大化瑶族自治县",
			"value": "451229",
			"parent": "451200"
		},
		{
			"name": "宜州市",
			"value": "451281",
			"parent": "451200"
		},
		{
			"name": "兴宾区",
			"value": "451302",
			"parent": "451300"
		},
		{
			"name": "忻城县",
			"value": "451321",
			"parent": "451300"
		},
		{
			"name": "象州县",
			"value": "451322",
			"parent": "451300"
		},
		{
			"name": "武宣县",
			"value": "451323",
			"parent": "451300"
		},
		{
			"name": "金秀瑶族自治县",
			"value": "451324",
			"parent": "451300"
		},
		{
			"name": "合山市",
			"value": "451381",
			"parent": "451300"
		},
		{
			"name": "江州区",
			"value": "451402",
			"parent": "451400"
		},
		{
			"name": "扶绥县",
			"value": "451421",
			"parent": "451400"
		},
		{
			"name": "宁明县",
			"value": "451422",
			"parent": "451400"
		},
		{
			"name": "龙州县",
			"value": "451423",
			"parent": "451400"
		},
		{
			"name": "大新县",
			"value": "451424",
			"parent": "451400"
		},
		{
			"name": "天等县",
			"value": "451425",
			"parent": "451400"
		},
		{
			"name": "凭祥市",
			"value": "451481",
			"parent": "451400"
		},
		{
			"name": "海口市",
			"value": "460100",
			"parent": "460000"
		},
		{
			"name": "三亚市",
			"value": "460200",
			"parent": "460000"
		},
		{
			"name": "三沙市",
			"value": "460300",
			"parent": "460000"
		},
		{
			"name": "儋州市",
			"value": "460400",
			"parent": "460000"
		},
		{
			"name": "五指山市",
			"value": "469001",
			"parent": "460000"
		},
		{
			"name": "琼海市",
			"value": "469002",
			"parent": "460000"
		},
		{
			"name": "文昌市",
			"value": "469005",
			"parent": "460000"
		},
		{
			"name": "万宁市",
			"value": "469006",
			"parent": "460000"
		},
		{
			"name": "东方市",
			"value": "469007",
			"parent": "460000"
		},
		{
			"name": "定安县",
			"value": "469021",
			"parent": "460000"
		},
		{
			"name": "屯昌县",
			"value": "469022",
			"parent": "460000"
		},
		{
			"name": "澄迈县",
			"value": "469023",
			"parent": "460000"
		},
		{
			"name": "临高县",
			"value": "469024",
			"parent": "460000"
		},
		{
			"name": "白沙黎族自治县",
			"value": "469025",
			"parent": "460000"
		},
		{
			"name": "昌江黎族自治县",
			"value": "469026",
			"parent": "460000"
		},
		{
			"name": "乐东黎族自治县",
			"value": "469027",
			"parent": "460000"
		},
		{
			"name": "陵水黎族自治县",
			"value": "469028",
			"parent": "460000"
		},
		{
			"name": "保亭黎族苗族自治县",
			"value": "469029",
			"parent": "460000"
		},
		{
			"name": "琼中黎族苗族自治县",
			"value": "469030",
			"parent": "460000"
		},
		{
			"name": "秀英区",
			"value": "460105",
			"parent": "460100"
		},
		{
			"name": "龙华区",
			"value": "460106",
			"parent": "460100"
		},
		{
			"name": "琼山区",
			"value": "460107",
			"parent": "460100"
		},
		{
			"name": "美兰区",
			"value": "460108",
			"parent": "460100"
		},
		{
			"name": "三亚湾",
			"value": "460200",
			"parent": "460200"
		},
		{
			"name": "海棠区",
			"value": "460202",
			"parent": "460200"
		},
		{
			"name": "吉阳区",
			"value": "460203",
			"parent": "460200"
		},
		{
			"name": "天涯区",
			"value": "460204",
			"parent": "460200"
		},
		{
			"name": "崖州区",
			"value": "460205",
			"parent": "460200"
		},
		{
			"name": "西沙群岛",
			"value": "460321",
			"parent": "460300"
		},
		{
			"name": "南沙群岛",
			"value": "460322",
			"parent": "460300"
		},
		{
			"name": "中沙群岛的岛礁及其海域",
			"value": "460323",
			"parent": "460300"
		},
		{
			"name": "重庆市市辖区",
			"value": "500100",
			"parent": "500000"
		},
		{
			"name": "重庆市郊县",
			"value": "500200",
			"parent": "500000"
		},
		{
			"name": "万州区",
			"value": "500101",
			"parent": "500100"
		},
		{
			"name": "涪陵区",
			"value": "500102",
			"parent": "500100"
		},
		{
			"name": "渝中区",
			"value": "500103",
			"parent": "500100"
		},
		{
			"name": "大渡口区",
			"value": "500104",
			"parent": "500100"
		},
		{
			"name": "江北区",
			"value": "500105",
			"parent": "500100"
		},
		{
			"name": "沙坪坝区",
			"value": "500106",
			"parent": "500100"
		},
		{
			"name": "九龙坡区",
			"value": "500107",
			"parent": "500100"
		},
		{
			"name": "南岸区",
			"value": "500108",
			"parent": "500100"
		},
		{
			"name": "北碚区",
			"value": "500109",
			"parent": "500100"
		},
		{
			"name": "綦江区",
			"value": "500110",
			"parent": "500100"
		},
		{
			"name": "大足区",
			"value": "500111",
			"parent": "500100"
		},
		{
			"name": "渝北区",
			"value": "500112",
			"parent": "500100"
		},
		{
			"name": "巴南区",
			"value": "500113",
			"parent": "500100"
		},
		{
			"name": "黔江区",
			"value": "500114",
			"parent": "500100"
		},
		{
			"name": "长寿区",
			"value": "500115",
			"parent": "500100"
		},
		{
			"name": "江津区",
			"value": "500116",
			"parent": "500100"
		},
		{
			"name": "合川区",
			"value": "500117",
			"parent": "500100"
		},
		{
			"name": "永川区",
			"value": "500118",
			"parent": "500100"
		},
		{
			"name": "南川区",
			"value": "500119",
			"parent": "500100"
		},
		{
			"name": "璧山区",
			"value": "500120",
			"parent": "500100"
		},
		{
			"name": "铜梁区",
			"value": "500151",
			"parent": "500100"
		},
		{
			"name": "潼南区",
			"value": "500152",
			"parent": "500100"
		},
		{
			"name": "荣昌区",
			"value": "500153",
			"parent": "500100"
		},
		{
			"name": "梁平县",
			"value": "500228",
			"parent": "500100"
		},
		{
			"name": "城口县",
			"value": "500229",
			"parent": "500100"
		},
		{
			"name": "丰都县",
			"value": "500230",
			"parent": "500100"
		},
		{
			"name": "垫江县",
			"value": "500231",
			"parent": "500100"
		},
		{
			"name": "武隆县",
			"value": "500232",
			"parent": "500100"
		},
		{
			"name": "忠县",
			"value": "500233",
			"parent": "500100"
		},
		{
			"name": "开县",
			"value": "500234",
			"parent": "500100"
		},
		{
			"name": "云阳县",
			"value": "500235",
			"parent": "500100"
		},
		{
			"name": "奉节县",
			"value": "500236",
			"parent": "500100"
		},
		{
			"name": "巫山县",
			"value": "500237",
			"parent": "500100"
		},
		{
			"name": "巫溪县",
			"value": "500238",
			"parent": "500100"
		},
		{
			"name": "石柱土家族自治县",
			"value": "500240",
			"parent": "500100"
		},
		{
			"name": "秀山土家族苗族自治县",
			"value": "500241",
			"parent": "500100"
		},
		{
			"name": "酉阳土家族苗族自治县",
			"value": "500242",
			"parent": "500100"
		},
		{
			"name": "彭水苗族土家族自治县",
			"value": "500243",
			"parent": "500100"
		},
		{
			"name": "成都市",
			"value": "510100",
			"parent": "510000"
		},
		{
			"name": "自贡市",
			"value": "510300",
			"parent": "510000"
		},
		{
			"name": "攀枝花市",
			"value": "510400",
			"parent": "510000"
		},
		{
			"name": "泸州市",
			"value": "510500",
			"parent": "510000"
		},
		{
			"name": "德阳市",
			"value": "510600",
			"parent": "510000"
		},
		{
			"name": "绵阳市",
			"value": "510700",
			"parent": "510000"
		},
		{
			"name": "广元市",
			"value": "510800",
			"parent": "510000"
		},
		{
			"name": "遂宁市",
			"value": "510900",
			"parent": "510000"
		},
		{
			"name": "内江市",
			"value": "511000",
			"parent": "510000"
		},
		{
			"name": "乐山市",
			"value": "511100",
			"parent": "510000"
		},
		{
			"name": "南充市",
			"value": "511300",
			"parent": "510000"
		},
		{
			"name": "眉山市",
			"value": "511400",
			"parent": "510000"
		},
		{
			"name": "宜宾市",
			"value": "511500",
			"parent": "510000"
		},
		{
			"name": "广安市",
			"value": "511600",
			"parent": "510000"
		},
		{
			"name": "达州市",
			"value": "511700",
			"parent": "510000"
		},
		{
			"name": "雅安市",
			"value": "511800",
			"parent": "510000"
		},
		{
			"name": "巴中市",
			"value": "511900",
			"parent": "510000"
		},
		{
			"name": "资阳市",
			"value": "512000",
			"parent": "510000"
		},
		{
			"name": "阿坝藏族羌族自治州",
			"value": "513200",
			"parent": "510000"
		},
		{
			"name": "甘孜藏族自治州",
			"value": "513300",
			"parent": "510000"
		},
		{
			"name": "凉山彝族自治州",
			"value": "513400",
			"parent": "510000"
		},
		{
			"name": "锦江区",
			"value": "510104",
			"parent": "510100"
		},
		{
			"name": "青羊区",
			"value": "510105",
			"parent": "510100"
		},
		{
			"name": "金牛区",
			"value": "510106",
			"parent": "510100"
		},
		{
			"name": "武侯区",
			"value": "510107",
			"parent": "510100"
		},
		{
			"name": "成华区",
			"value": "510108",
			"parent": "510100"
		},
		{
			"name": "龙泉驿区",
			"value": "510112",
			"parent": "510100"
		},
		{
			"name": "青白江区",
			"value": "510113",
			"parent": "510100"
		},
		{
			"name": "新都区",
			"value": "510114",
			"parent": "510100"
		},
		{
			"name": "温江区",
			"value": "510115",
			"parent": "510100"
		},
		{
			"name": "金堂县",
			"value": "510121",
			"parent": "510100"
		},
		{
			"name": "双流县",
			"value": "510122",
			"parent": "510100"
		},
		{
			"name": "郫县",
			"value": "510124",
			"parent": "510100"
		},
		{
			"name": "大邑县",
			"value": "510129",
			"parent": "510100"
		},
		{
			"name": "蒲江县",
			"value": "510131",
			"parent": "510100"
		},
		{
			"name": "新津县",
			"value": "510132",
			"parent": "510100"
		},
		{
			"name": "都江堰市",
			"value": "510181",
			"parent": "510100"
		},
		{
			"name": "彭州市",
			"value": "510182",
			"parent": "510100"
		},
		{
			"name": "邛崃市",
			"value": "510183",
			"parent": "510100"
		},
		{
			"name": "崇州市",
			"value": "510184",
			"parent": "510100"
		},
		{
			"name": "自流井区",
			"value": "510302",
			"parent": "510300"
		},
		{
			"name": "贡井区",
			"value": "510303",
			"parent": "510300"
		},
		{
			"name": "大安区",
			"value": "510304",
			"parent": "510300"
		},
		{
			"name": "沿滩区",
			"value": "510311",
			"parent": "510300"
		},
		{
			"name": "荣县",
			"value": "510321",
			"parent": "510300"
		},
		{
			"name": "富顺县",
			"value": "510322",
			"parent": "510300"
		},
		{
			"name": "东区",
			"value": "510402",
			"parent": "510400"
		},
		{
			"name": "西区",
			"value": "510403",
			"parent": "510400"
		},
		{
			"name": "仁和区",
			"value": "510411",
			"parent": "510400"
		},
		{
			"name": "米易县",
			"value": "510421",
			"parent": "510400"
		},
		{
			"name": "盐边县",
			"value": "510422",
			"parent": "510400"
		},
		{
			"name": "江阳区",
			"value": "510502",
			"parent": "510500"
		},
		{
			"name": "纳溪区",
			"value": "510503",
			"parent": "510500"
		},
		{
			"name": "龙马潭区",
			"value": "510504",
			"parent": "510500"
		},
		{
			"name": "泸县",
			"value": "510521",
			"parent": "510500"
		},
		{
			"name": "合江县",
			"value": "510522",
			"parent": "510500"
		},
		{
			"name": "叙永县",
			"value": "510524",
			"parent": "510500"
		},
		{
			"name": "古蔺县",
			"value": "510525",
			"parent": "510500"
		},
		{
			"name": "旌阳区",
			"value": "510603",
			"parent": "510600"
		},
		{
			"name": "中江县",
			"value": "510623",
			"parent": "510600"
		},
		{
			"name": "罗江县",
			"value": "510626",
			"parent": "510600"
		},
		{
			"name": "广汉市",
			"value": "510681",
			"parent": "510600"
		},
		{
			"name": "什邡市",
			"value": "510682",
			"parent": "510600"
		},
		{
			"name": "绵竹市",
			"value": "510683",
			"parent": "510600"
		},
		{
			"name": "涪城区",
			"value": "510703",
			"parent": "510700"
		},
		{
			"name": "游仙区",
			"value": "510704",
			"parent": "510700"
		},
		{
			"name": "三台县",
			"value": "510722",
			"parent": "510700"
		},
		{
			"name": "盐亭县",
			"value": "510723",
			"parent": "510700"
		},
		{
			"name": "安县",
			"value": "510724",
			"parent": "510700"
		},
		{
			"name": "梓潼县",
			"value": "510725",
			"parent": "510700"
		},
		{
			"name": "北川羌族自治县",
			"value": "510726",
			"parent": "510700"
		},
		{
			"name": "平武县",
			"value": "510727",
			"parent": "510700"
		},
		{
			"name": "江油市",
			"value": "510781",
			"parent": "510700"
		},
		{
			"name": "利州区",
			"value": "510802",
			"parent": "510800"
		},
		{
			"name": "昭化区",
			"value": "510811",
			"parent": "510800"
		},
		{
			"name": "朝天区",
			"value": "510812",
			"parent": "510800"
		},
		{
			"name": "旺苍县",
			"value": "510821",
			"parent": "510800"
		},
		{
			"name": "青川县",
			"value": "510822",
			"parent": "510800"
		},
		{
			"name": "剑阁县",
			"value": "510823",
			"parent": "510800"
		},
		{
			"name": "苍溪县",
			"value": "510824",
			"parent": "510800"
		},
		{
			"name": "船山区",
			"value": "510903",
			"parent": "510900"
		},
		{
			"name": "安居区",
			"value": "510904",
			"parent": "510900"
		},
		{
			"name": "蓬溪县",
			"value": "510921",
			"parent": "510900"
		},
		{
			"name": "射洪县",
			"value": "510922",
			"parent": "510900"
		},
		{
			"name": "大英县",
			"value": "510923",
			"parent": "510900"
		},
		{
			"name": "市中区",
			"value": "511002",
			"parent": "511000"
		},
		{
			"name": "东兴区",
			"value": "511011",
			"parent": "511000"
		},
		{
			"name": "威远县",
			"value": "511024",
			"parent": "511000"
		},
		{
			"name": "资中县",
			"value": "511025",
			"parent": "511000"
		},
		{
			"name": "隆昌县",
			"value": "511028",
			"parent": "511000"
		},
		{
			"name": "市中区",
			"value": "511102",
			"parent": "511100"
		},
		{
			"name": "沙湾区",
			"value": "511111",
			"parent": "511100"
		},
		{
			"name": "五通桥区",
			"value": "511112",
			"parent": "511100"
		},
		{
			"name": "金口河区",
			"value": "511113",
			"parent": "511100"
		},
		{
			"name": "犍为县",
			"value": "511123",
			"parent": "511100"
		},
		{
			"name": "井研县",
			"value": "511124",
			"parent": "511100"
		},
		{
			"name": "夹江县",
			"value": "511126",
			"parent": "511100"
		},
		{
			"name": "沐川县",
			"value": "511129",
			"parent": "511100"
		},
		{
			"name": "峨边彝族自治县",
			"value": "511132",
			"parent": "511100"
		},
		{
			"name": "马边彝族自治县",
			"value": "511133",
			"parent": "511100"
		},
		{
			"name": "峨眉山市",
			"value": "511181",
			"parent": "511100"
		},
		{
			"name": "顺庆区",
			"value": "511302",
			"parent": "511300"
		},
		{
			"name": "高坪区",
			"value": "511303",
			"parent": "511300"
		},
		{
			"name": "嘉陵区",
			"value": "511304",
			"parent": "511300"
		},
		{
			"name": "南部县",
			"value": "511321",
			"parent": "511300"
		},
		{
			"name": "营山县",
			"value": "511322",
			"parent": "511300"
		},
		{
			"name": "蓬安县",
			"value": "511323",
			"parent": "511300"
		},
		{
			"name": "仪陇县",
			"value": "511324",
			"parent": "511300"
		},
		{
			"name": "西充县",
			"value": "511325",
			"parent": "511300"
		},
		{
			"name": "阆中市",
			"value": "511381",
			"parent": "511300"
		},
		{
			"name": "东坡区",
			"value": "511402",
			"parent": "511400"
		},
		{
			"name": "彭山区",
			"value": "511403",
			"parent": "511400"
		},
		{
			"name": "仁寿县",
			"value": "511421",
			"parent": "511400"
		},
		{
			"name": "洪雅县",
			"value": "511423",
			"parent": "511400"
		},
		{
			"name": "丹棱县",
			"value": "511424",
			"parent": "511400"
		},
		{
			"name": "青神县",
			"value": "511425",
			"parent": "511400"
		},
		{
			"name": "翠屏区",
			"value": "511502",
			"parent": "511500"
		},
		{
			"name": "南溪区",
			"value": "511503",
			"parent": "511500"
		},
		{
			"name": "宜宾县",
			"value": "511521",
			"parent": "511500"
		},
		{
			"name": "江安县",
			"value": "511523",
			"parent": "511500"
		},
		{
			"name": "长宁县",
			"value": "511524",
			"parent": "511500"
		},
		{
			"name": "高县",
			"value": "511525",
			"parent": "511500"
		},
		{
			"name": "珙县",
			"value": "511526",
			"parent": "511500"
		},
		{
			"name": "筠连县",
			"value": "511527",
			"parent": "511500"
		},
		{
			"name": "兴文县",
			"value": "511528",
			"parent": "511500"
		},
		{
			"name": "屏山县",
			"value": "511529",
			"parent": "511500"
		},
		{
			"name": "广安区",
			"value": "511602",
			"parent": "511600"
		},
		{
			"name": "前锋区",
			"value": "511603",
			"parent": "511600"
		},
		{
			"name": "岳池县",
			"value": "511621",
			"parent": "511600"
		},
		{
			"name": "武胜县",
			"value": "511622",
			"parent": "511600"
		},
		{
			"name": "邻水县",
			"value": "511623",
			"parent": "511600"
		},
		{
			"name": "华蓥市",
			"value": "511681",
			"parent": "511600"
		},
		{
			"name": "通川区",
			"value": "511702",
			"parent": "511700"
		},
		{
			"name": "达川区",
			"value": "511703",
			"parent": "511700"
		},
		{
			"name": "宣汉县",
			"value": "511722",
			"parent": "511700"
		},
		{
			"name": "开江县",
			"value": "511723",
			"parent": "511700"
		},
		{
			"name": "大竹县",
			"value": "511724",
			"parent": "511700"
		},
		{
			"name": "渠县",
			"value": "511725",
			"parent": "511700"
		},
		{
			"name": "万源市",
			"value": "511781",
			"parent": "511700"
		},
		{
			"name": "雨城区",
			"value": "511802",
			"parent": "511800"
		},
		{
			"name": "名山区",
			"value": "511803",
			"parent": "511800"
		},
		{
			"name": "荥经县",
			"value": "511822",
			"parent": "511800"
		},
		{
			"name": "汉源县",
			"value": "511823",
			"parent": "511800"
		},
		{
			"name": "石棉县",
			"value": "511824",
			"parent": "511800"
		},
		{
			"name": "天全县",
			"value": "511825",
			"parent": "511800"
		},
		{
			"name": "芦山县",
			"value": "511826",
			"parent": "511800"
		},
		{
			"name": "宝兴县",
			"value": "511827",
			"parent": "511800"
		},
		{
			"name": "巴州区",
			"value": "511902",
			"parent": "511900"
		},
		{
			"name": "恩阳区",
			"value": "511903",
			"parent": "511900"
		},
		{
			"name": "通江县",
			"value": "511921",
			"parent": "511900"
		},
		{
			"name": "南江县",
			"value": "511922",
			"parent": "511900"
		},
		{
			"name": "平昌县",
			"value": "511923",
			"parent": "511900"
		},
		{
			"name": "雁江区",
			"value": "512002",
			"parent": "512000"
		},
		{
			"name": "安岳县",
			"value": "512021",
			"parent": "512000"
		},
		{
			"name": "乐至县",
			"value": "512022",
			"parent": "512000"
		},
		{
			"name": "简阳市",
			"value": "512081",
			"parent": "512000"
		},
		{
			"name": "汶川县",
			"value": "513221",
			"parent": "513200"
		},
		{
			"name": "理县",
			"value": "513222",
			"parent": "513200"
		},
		{
			"name": "茂县",
			"value": "513223",
			"parent": "513200"
		},
		{
			"name": "松潘县",
			"value": "513224",
			"parent": "513200"
		},
		{
			"name": "九寨沟县",
			"value": "513225",
			"parent": "513200"
		},
		{
			"name": "金川县",
			"value": "513226",
			"parent": "513200"
		},
		{
			"name": "小金县",
			"value": "513227",
			"parent": "513200"
		},
		{
			"name": "黑水县",
			"value": "513228",
			"parent": "513200"
		},
		{
			"name": "马尔康县",
			"value": "513229",
			"parent": "513200"
		},
		{
			"name": "壤塘县",
			"value": "513230",
			"parent": "513200"
		},
		{
			"name": "阿坝县",
			"value": "513231",
			"parent": "513200"
		},
		{
			"name": "若尔盖县",
			"value": "513232",
			"parent": "513200"
		},
		{
			"name": "红原县",
			"value": "513233",
			"parent": "513200"
		},
		{
			"name": "康定市",
			"value": "513301",
			"parent": "513300"
		},
		{
			"name": "泸定县",
			"value": "513322",
			"parent": "513300"
		},
		{
			"name": "丹巴县",
			"value": "513323",
			"parent": "513300"
		},
		{
			"name": "九龙县",
			"value": "513324",
			"parent": "513300"
		},
		{
			"name": "雅江县",
			"value": "513325",
			"parent": "513300"
		},
		{
			"name": "道孚县",
			"value": "513326",
			"parent": "513300"
		},
		{
			"name": "炉霍县",
			"value": "513327",
			"parent": "513300"
		},
		{
			"name": "甘孜县",
			"value": "513328",
			"parent": "513300"
		},
		{
			"name": "新龙县",
			"value": "513329",
			"parent": "513300"
		},
		{
			"name": "德格县",
			"value": "513330",
			"parent": "513300"
		},
		{
			"name": "白玉县",
			"value": "513331",
			"parent": "513300"
		},
		{
			"name": "石渠县",
			"value": "513332",
			"parent": "513300"
		},
		{
			"name": "色达县",
			"value": "513333",
			"parent": "513300"
		},
		{
			"name": "理塘县",
			"value": "513334",
			"parent": "513300"
		},
		{
			"name": "巴塘县",
			"value": "513335",
			"parent": "513300"
		},
		{
			"name": "乡城县",
			"value": "513336",
			"parent": "513300"
		},
		{
			"name": "稻城县",
			"value": "513337",
			"parent": "513300"
		},
		{
			"name": "得荣县",
			"value": "513338",
			"parent": "513300"
		},
		{
			"name": "西昌市",
			"value": "513401",
			"parent": "513400"
		},
		{
			"name": "木里藏族自治县",
			"value": "513422",
			"parent": "513400"
		},
		{
			"name": "盐源县",
			"value": "513423",
			"parent": "513400"
		},
		{
			"name": "德昌县",
			"value": "513424",
			"parent": "513400"
		},
		{
			"name": "会理县",
			"value": "513425",
			"parent": "513400"
		},
		{
			"name": "会东县",
			"value": "513426",
			"parent": "513400"
		},
		{
			"name": "宁南县",
			"value": "513427",
			"parent": "513400"
		},
		{
			"name": "普格县",
			"value": "513428",
			"parent": "513400"
		},
		{
			"name": "布拖县",
			"value": "513429",
			"parent": "513400"
		},
		{
			"name": "金阳县",
			"value": "513430",
			"parent": "513400"
		},
		{
			"name": "昭觉县",
			"value": "513431",
			"parent": "513400"
		},
		{
			"name": "喜德县",
			"value": "513432",
			"parent": "513400"
		},
		{
			"name": "冕宁县",
			"value": "513433",
			"parent": "513400"
		},
		{
			"name": "越西县",
			"value": "513434",
			"parent": "513400"
		},
		{
			"name": "甘洛县",
			"value": "513435",
			"parent": "513400"
		},
		{
			"name": "美姑县",
			"value": "513436",
			"parent": "513400"
		},
		{
			"name": "雷波县",
			"value": "513437",
			"parent": "513400"
		},
		{
			"name": "贵阳市",
			"value": "520100",
			"parent": "520000"
		},
		{
			"name": "六盘水市",
			"value": "520200",
			"parent": "520000"
		},
		{
			"name": "遵义市",
			"value": "520300",
			"parent": "520000"
		},
		{
			"name": "安顺市",
			"value": "520400",
			"parent": "520000"
		},
		{
			"name": "毕节市",
			"value": "520500",
			"parent": "520000"
		},
		{
			"name": "铜仁市",
			"value": "520600",
			"parent": "520000"
		},
		{
			"name": "黔西南布依族苗族自治州",
			"value": "522300",
			"parent": "520000"
		},
		{
			"name": "黔东南苗族侗族自治州",
			"value": "522600",
			"parent": "520000"
		},
		{
			"name": "黔南布依族苗族自治州",
			"value": "522700",
			"parent": "520000"
		},
		{
			"name": "南明区",
			"value": "520102",
			"parent": "520100"
		},
		{
			"name": "云岩区",
			"value": "520103",
			"parent": "520100"
		},
		{
			"name": "花溪区",
			"value": "520111",
			"parent": "520100"
		},
		{
			"name": "乌当区",
			"value": "520112",
			"parent": "520100"
		},
		{
			"name": "白云区",
			"value": "520113",
			"parent": "520100"
		},
		{
			"name": "观山湖区",
			"value": "520115",
			"parent": "520100"
		},
		{
			"name": "开阳县",
			"value": "520121",
			"parent": "520100"
		},
		{
			"name": "息烽县",
			"value": "520122",
			"parent": "520100"
		},
		{
			"name": "修文县",
			"value": "520123",
			"parent": "520100"
		},
		{
			"name": "清镇市",
			"value": "520181",
			"parent": "520100"
		},
		{
			"name": "钟山区",
			"value": "520201",
			"parent": "520200"
		},
		{
			"name": "六枝特区",
			"value": "520203",
			"parent": "520200"
		},
		{
			"name": "水城县",
			"value": "520221",
			"parent": "520200"
		},
		{
			"name": "盘县",
			"value": "520222",
			"parent": "520200"
		},
		{
			"name": "红花岗区",
			"value": "520302",
			"parent": "520300"
		},
		{
			"name": "汇川区",
			"value": "520303",
			"parent": "520300"
		},
		{
			"name": "遵义县",
			"value": "520321",
			"parent": "520300"
		},
		{
			"name": "桐梓县",
			"value": "520322",
			"parent": "520300"
		},
		{
			"name": "绥阳县",
			"value": "520323",
			"parent": "520300"
		},
		{
			"name": "正安县",
			"value": "520324",
			"parent": "520300"
		},
		{
			"name": "道真仡佬族苗族自治县",
			"value": "520325",
			"parent": "520300"
		},
		{
			"name": "务川仡佬族苗族自治县",
			"value": "520326",
			"parent": "520300"
		},
		{
			"name": "凤冈县",
			"value": "520327",
			"parent": "520300"
		},
		{
			"name": "湄潭县",
			"value": "520328",
			"parent": "520300"
		},
		{
			"name": "余庆县",
			"value": "520329",
			"parent": "520300"
		},
		{
			"name": "习水县",
			"value": "520330",
			"parent": "520300"
		},
		{
			"name": "赤水市",
			"value": "520381",
			"parent": "520300"
		},
		{
			"name": "仁怀市",
			"value": "520382",
			"parent": "520300"
		},
		{
			"name": "西秀区",
			"value": "520402",
			"parent": "520400"
		},
		{
			"name": "平坝区",
			"value": "520403",
			"parent": "520400"
		},
		{
			"name": "普定县",
			"value": "520422",
			"parent": "520400"
		},
		{
			"name": "镇宁布依族苗族自治县",
			"value": "520423",
			"parent": "520400"
		},
		{
			"name": "关岭布依族苗族自治县",
			"value": "520424",
			"parent": "520400"
		},
		{
			"name": "紫云苗族布依族自治县",
			"value": "520425",
			"parent": "520400"
		},
		{
			"name": "七星关区",
			"value": "520502",
			"parent": "520500"
		},
		{
			"name": "大方县",
			"value": "520521",
			"parent": "520500"
		},
		{
			"name": "黔西县",
			"value": "520522",
			"parent": "520500"
		},
		{
			"name": "金沙县",
			"value": "520523",
			"parent": "520500"
		},
		{
			"name": "织金县",
			"value": "520524",
			"parent": "520500"
		},
		{
			"name": "纳雍县",
			"value": "520525",
			"parent": "520500"
		},
		{
			"name": "威宁彝族回族苗族自治县",
			"value": "520526",
			"parent": "520500"
		},
		{
			"name": "赫章县",
			"value": "520527",
			"parent": "520500"
		},
		{
			"name": "碧江区",
			"value": "520602",
			"parent": "520600"
		},
		{
			"name": "万山区",
			"value": "520603",
			"parent": "520600"
		},
		{
			"name": "江口县",
			"value": "520621",
			"parent": "520600"
		},
		{
			"name": "玉屏侗族自治县",
			"value": "520622",
			"parent": "520600"
		},
		{
			"name": "石阡县",
			"value": "520623",
			"parent": "520600"
		},
		{
			"name": "思南县",
			"value": "520624",
			"parent": "520600"
		},
		{
			"name": "印江土家族苗族自治县",
			"value": "520625",
			"parent": "520600"
		},
		{
			"name": "德江县",
			"value": "520626",
			"parent": "520600"
		},
		{
			"name": "沿河土家族自治县",
			"value": "520627",
			"parent": "520600"
		},
		{
			"name": "松桃苗族自治县",
			"value": "520628",
			"parent": "520600"
		},
		{
			"name": "兴义市",
			"value": "522301",
			"parent": "522300"
		},
		{
			"name": "兴仁县",
			"value": "522322",
			"parent": "522300"
		},
		{
			"name": "普安县",
			"value": "522323",
			"parent": "522300"
		},
		{
			"name": "晴隆县",
			"value": "522324",
			"parent": "522300"
		},
		{
			"name": "贞丰县",
			"value": "522325",
			"parent": "522300"
		},
		{
			"name": "望谟县",
			"value": "522326",
			"parent": "522300"
		},
		{
			"name": "册亨县",
			"value": "522327",
			"parent": "522300"
		},
		{
			"name": "安龙县",
			"value": "522328",
			"parent": "522300"
		},
		{
			"name": "凯里市",
			"value": "522601",
			"parent": "522600"
		},
		{
			"name": "黄平县",
			"value": "522622",
			"parent": "522600"
		},
		{
			"name": "施秉县",
			"value": "522623",
			"parent": "522600"
		},
		{
			"name": "三穗县",
			"value": "522624",
			"parent": "522600"
		},
		{
			"name": "镇远县",
			"value": "522625",
			"parent": "522600"
		},
		{
			"name": "岑巩县",
			"value": "522626",
			"parent": "522600"
		},
		{
			"name": "天柱县",
			"value": "522627",
			"parent": "522600"
		},
		{
			"name": "锦屏县",
			"value": "522628",
			"parent": "522600"
		},
		{
			"name": "剑河县",
			"value": "522629",
			"parent": "522600"
		},
		{
			"name": "台江县",
			"value": "522630",
			"parent": "522600"
		},
		{
			"name": "黎平县",
			"value": "522631",
			"parent": "522600"
		},
		{
			"name": "榕江县",
			"value": "522632",
			"parent": "522600"
		},
		{
			"name": "从江县",
			"value": "522633",
			"parent": "522600"
		},
		{
			"name": "雷山县",
			"value": "522634",
			"parent": "522600"
		},
		{
			"name": "麻江县",
			"value": "522635",
			"parent": "522600"
		},
		{
			"name": "丹寨县",
			"value": "522636",
			"parent": "522600"
		},
		{
			"name": "都匀市",
			"value": "522701",
			"parent": "522700"
		},
		{
			"name": "福泉市",
			"value": "522702",
			"parent": "522700"
		},
		{
			"name": "荔波县",
			"value": "522722",
			"parent": "522700"
		},
		{
			"name": "贵定县",
			"value": "522723",
			"parent": "522700"
		},
		{
			"name": "瓮安县",
			"value": "522725",
			"parent": "522700"
		},
		{
			"name": "独山县",
			"value": "522726",
			"parent": "522700"
		},
		{
			"name": "平塘县",
			"value": "522727",
			"parent": "522700"
		},
		{
			"name": "罗甸县",
			"value": "522728",
			"parent": "522700"
		},
		{
			"name": "长顺县",
			"value": "522729",
			"parent": "522700"
		},
		{
			"name": "龙里县",
			"value": "522730",
			"parent": "522700"
		},
		{
			"name": "惠水县",
			"value": "522731",
			"parent": "522700"
		},
		{
			"name": "三都水族自治县",
			"value": "522732",
			"parent": "522700"
		},
		{
			"name": "昆明市",
			"value": "530100",
			"parent": "530000"
		},
		{
			"name": "曲靖市",
			"value": "530300",
			"parent": "530000"
		},
		{
			"name": "玉溪市",
			"value": "530400",
			"parent": "530000"
		},
		{
			"name": "保山市",
			"value": "530500",
			"parent": "530000"
		},
		{
			"name": "昭通市",
			"value": "530600",
			"parent": "530000"
		},
		{
			"name": "丽江市",
			"value": "530700",
			"parent": "530000"
		},
		{
			"name": "普洱市",
			"value": "530800",
			"parent": "530000"
		},
		{
			"name": "临沧市",
			"value": "530900",
			"parent": "530000"
		},
		{
			"name": "楚雄彝族自治州",
			"value": "532300",
			"parent": "530000"
		},
		{
			"name": "红河哈尼族彝族自治州",
			"value": "532500",
			"parent": "530000"
		},
		{
			"name": "文山壮族苗族自治州",
			"value": "532600",
			"parent": "530000"
		},
		{
			"name": "西双版纳傣族自治州",
			"value": "532800",
			"parent": "530000"
		},
		{
			"name": "大理白族自治州",
			"value": "532900",
			"parent": "530000"
		},
		{
			"name": "德宏傣族景颇族自治州",
			"value": "533100",
			"parent": "530000"
		},
		{
			"name": "怒江傈僳族自治州",
			"value": "533300",
			"parent": "530000"
		},
		{
			"name": "迪庆藏族自治州",
			"value": "533400",
			"parent": "530000"
		},
		{
			"name": "五华区",
			"value": "530102",
			"parent": "530100"
		},
		{
			"name": "盘龙区",
			"value": "530103",
			"parent": "530100"
		},
		{
			"name": "官渡区",
			"value": "530111",
			"parent": "530100"
		},
		{
			"name": "西山区",
			"value": "530112",
			"parent": "530100"
		},
		{
			"name": "东川区",
			"value": "530113",
			"parent": "530100"
		},
		{
			"name": "呈贡区",
			"value": "530114",
			"parent": "530100"
		},
		{
			"name": "晋宁县",
			"value": "530122",
			"parent": "530100"
		},
		{
			"name": "富民县",
			"value": "530124",
			"parent": "530100"
		},
		{
			"name": "宜良县",
			"value": "530125",
			"parent": "530100"
		},
		{
			"name": "石林彝族自治县",
			"value": "530126",
			"parent": "530100"
		},
		{
			"name": "嵩明县",
			"value": "530127",
			"parent": "530100"
		},
		{
			"name": "禄劝彝族苗族自治县",
			"value": "530128",
			"parent": "530100"
		},
		{
			"name": "寻甸回族彝族自治县",
			"value": "530129",
			"parent": "530100"
		},
		{
			"name": "安宁市",
			"value": "530181",
			"parent": "530100"
		},
		{
			"name": "麒麟区",
			"value": "530302",
			"parent": "530300"
		},
		{
			"name": "马龙县",
			"value": "530321",
			"parent": "530300"
		},
		{
			"name": "陆良县",
			"value": "530322",
			"parent": "530300"
		},
		{
			"name": "师宗县",
			"value": "530323",
			"parent": "530300"
		},
		{
			"name": "罗平县",
			"value": "530324",
			"parent": "530300"
		},
		{
			"name": "富源县",
			"value": "530325",
			"parent": "530300"
		},
		{
			"name": "会泽县",
			"value": "530326",
			"parent": "530300"
		},
		{
			"name": "沾益县",
			"value": "530328",
			"parent": "530300"
		},
		{
			"name": "宣威市",
			"value": "530381",
			"parent": "530300"
		},
		{
			"name": "红塔区",
			"value": "530402",
			"parent": "530400"
		},
		{
			"name": "江川县",
			"value": "530421",
			"parent": "530400"
		},
		{
			"name": "澄江县",
			"value": "530422",
			"parent": "530400"
		},
		{
			"name": "通海县",
			"value": "530423",
			"parent": "530400"
		},
		{
			"name": "华宁县",
			"value": "530424",
			"parent": "530400"
		},
		{
			"name": "易门县",
			"value": "530425",
			"parent": "530400"
		},
		{
			"name": "峨山彝族自治县",
			"value": "530426",
			"parent": "530400"
		},
		{
			"name": "新平彝族傣族自治县",
			"value": "530427",
			"parent": "530400"
		},
		{
			"name": "元江哈尼族彝族傣族自治县",
			"value": "530428",
			"parent": "530400"
		},
		{
			"name": "隆阳区",
			"value": "530502",
			"parent": "530500"
		},
		{
			"name": "施甸县",
			"value": "530521",
			"parent": "530500"
		},
		{
			"name": "龙陵县",
			"value": "530523",
			"parent": "530500"
		},
		{
			"name": "昌宁县",
			"value": "530524",
			"parent": "530500"
		},
		{
			"name": "腾冲市",
			"value": "530581",
			"parent": "530500"
		},
		{
			"name": "昭阳区",
			"value": "530602",
			"parent": "530600"
		},
		{
			"name": "鲁甸县",
			"value": "530621",
			"parent": "530600"
		},
		{
			"name": "巧家县",
			"value": "530622",
			"parent": "530600"
		},
		{
			"name": "盐津县",
			"value": "530623",
			"parent": "530600"
		},
		{
			"name": "大关县",
			"value": "530624",
			"parent": "530600"
		},
		{
			"name": "永善县",
			"value": "530625",
			"parent": "530600"
		},
		{
			"name": "绥江县",
			"value": "530626",
			"parent": "530600"
		},
		{
			"name": "镇雄县",
			"value": "530627",
			"parent": "530600"
		},
		{
			"name": "彝良县",
			"value": "530628",
			"parent": "530600"
		},
		{
			"name": "威信县",
			"value": "530629",
			"parent": "530600"
		},
		{
			"name": "水富县",
			"value": "530630",
			"parent": "530600"
		},
		{
			"name": "古城区",
			"value": "530702",
			"parent": "530700"
		},
		{
			"name": "玉龙纳西族自治县",
			"value": "530721",
			"parent": "530700"
		},
		{
			"name": "永胜县",
			"value": "530722",
			"parent": "530700"
		},
		{
			"name": "华坪县",
			"value": "530723",
			"parent": "530700"
		},
		{
			"name": "宁蒗彝族自治县",
			"value": "530724",
			"parent": "530700"
		},
		{
			"name": "思茅区",
			"value": "530802",
			"parent": "530800"
		},
		{
			"name": "宁洱哈尼族彝族自治县",
			"value": "530821",
			"parent": "530800"
		},
		{
			"name": "墨江哈尼族自治县",
			"value": "530822",
			"parent": "530800"
		},
		{
			"name": "景东彝族自治县",
			"value": "530823",
			"parent": "530800"
		},
		{
			"name": "景谷傣族彝族自治县",
			"value": "530824",
			"parent": "530800"
		},
		{
			"name": "镇沅彝族哈尼族拉祜族自治县",
			"value": "530825",
			"parent": "530800"
		},
		{
			"name": "江城哈尼族彝族自治县",
			"value": "530826",
			"parent": "530800"
		},
		{
			"name": "孟连傣族拉祜族佤族自治县",
			"value": "530827",
			"parent": "530800"
		},
		{
			"name": "澜沧拉祜族自治县",
			"value": "530828",
			"parent": "530800"
		},
		{
			"name": "西盟佤族自治县",
			"value": "530829",
			"parent": "530800"
		},
		{
			"name": "临翔区",
			"value": "530902",
			"parent": "530900"
		},
		{
			"name": "凤庆县",
			"value": "530921",
			"parent": "530900"
		},
		{
			"name": "云县",
			"value": "530922",
			"parent": "530900"
		},
		{
			"name": "永德县",
			"value": "530923",
			"parent": "530900"
		},
		{
			"name": "镇康县",
			"value": "530924",
			"parent": "530900"
		},
		{
			"name": "双江拉祜族佤族布朗族傣族自治县",
			"value": "530925",
			"parent": "530900"
		},
		{
			"name": "耿马傣族佤族自治县",
			"value": "530926",
			"parent": "530900"
		},
		{
			"name": "沧源佤族自治县",
			"value": "530927",
			"parent": "530900"
		},
		{
			"name": "楚雄市",
			"value": "532301",
			"parent": "532300"
		},
		{
			"name": "双柏县",
			"value": "532322",
			"parent": "532300"
		},
		{
			"name": "牟定县",
			"value": "532323",
			"parent": "532300"
		},
		{
			"name": "南华县",
			"value": "532324",
			"parent": "532300"
		},
		{
			"name": "姚安县",
			"value": "532325",
			"parent": "532300"
		},
		{
			"name": "大姚县",
			"value": "532326",
			"parent": "532300"
		},
		{
			"name": "永仁县",
			"value": "532327",
			"parent": "532300"
		},
		{
			"name": "元谋县",
			"value": "532328",
			"parent": "532300"
		},
		{
			"name": "武定县",
			"value": "532329",
			"parent": "532300"
		},
		{
			"name": "禄丰县",
			"value": "532331",
			"parent": "532300"
		},
		{
			"name": "个旧市",
			"value": "532501",
			"parent": "532500"
		},
		{
			"name": "开远市",
			"value": "532502",
			"parent": "532500"
		},
		{
			"name": "蒙自市",
			"value": "532503",
			"parent": "532500"
		},
		{
			"name": "弥勒市",
			"value": "532504",
			"parent": "532500"
		},
		{
			"name": "屏边苗族自治县",
			"value": "532523",
			"parent": "532500"
		},
		{
			"name": "建水县",
			"value": "532524",
			"parent": "532500"
		},
		{
			"name": "石屏县",
			"value": "532525",
			"parent": "532500"
		},
		{
			"name": "泸西县",
			"value": "532527",
			"parent": "532500"
		},
		{
			"name": "元阳县",
			"value": "532528",
			"parent": "532500"
		},
		{
			"name": "红河县",
			"value": "532529",
			"parent": "532500"
		},
		{
			"name": "金平苗族瑶族傣族自治县",
			"value": "532530",
			"parent": "532500"
		},
		{
			"name": "绿春县",
			"value": "532531",
			"parent": "532500"
		},
		{
			"name": "河口瑶族自治县",
			"value": "532532",
			"parent": "532500"
		},
		{
			"name": "文山市",
			"value": "532601",
			"parent": "532600"
		},
		{
			"name": "砚山县",
			"value": "532622",
			"parent": "532600"
		},
		{
			"name": "西畴县",
			"value": "532623",
			"parent": "532600"
		},
		{
			"name": "麻栗坡县",
			"value": "532624",
			"parent": "532600"
		},
		{
			"name": "马关县",
			"value": "532625",
			"parent": "532600"
		},
		{
			"name": "丘北县",
			"value": "532626",
			"parent": "532600"
		},
		{
			"name": "广南县",
			"value": "532627",
			"parent": "532600"
		},
		{
			"name": "富宁县",
			"value": "532628",
			"parent": "532600"
		},
		{
			"name": "景洪市",
			"value": "532801",
			"parent": "532800"
		},
		{
			"name": "勐海县",
			"value": "532822",
			"parent": "532800"
		},
		{
			"name": "勐腊县",
			"value": "532823",
			"parent": "532800"
		},
		{
			"name": "大理市",
			"value": "532901",
			"parent": "532900"
		},
		{
			"name": "漾濞彝族自治县",
			"value": "532922",
			"parent": "532900"
		},
		{
			"name": "祥云县",
			"value": "532923",
			"parent": "532900"
		},
		{
			"name": "宾川县",
			"value": "532924",
			"parent": "532900"
		},
		{
			"name": "弥渡县",
			"value": "532925",
			"parent": "532900"
		},
		{
			"name": "南涧彝族自治县",
			"value": "532926",
			"parent": "532900"
		},
		{
			"name": "巍山彝族回族自治县",
			"value": "532927",
			"parent": "532900"
		},
		{
			"name": "永平县",
			"value": "532928",
			"parent": "532900"
		},
		{
			"name": "云龙县",
			"value": "532929",
			"parent": "532900"
		},
		{
			"name": "洱源县",
			"value": "532930",
			"parent": "532900"
		},
		{
			"name": "剑川县",
			"value": "532931",
			"parent": "532900"
		},
		{
			"name": "鹤庆县",
			"value": "532932",
			"parent": "532900"
		},
		{
			"name": "瑞丽市",
			"value": "533102",
			"parent": "533100"
		},
		{
			"name": "芒市",
			"value": "533103",
			"parent": "533100"
		},
		{
			"name": "梁河县",
			"value": "533122",
			"parent": "533100"
		},
		{
			"name": "盈江县",
			"value": "533123",
			"parent": "533100"
		},
		{
			"name": "陇川县",
			"value": "533124",
			"parent": "533100"
		},
		{
			"name": "泸水县",
			"value": "533321",
			"parent": "533300"
		},
		{
			"name": "福贡县",
			"value": "533323",
			"parent": "533300"
		},
		{
			"name": "贡山独龙族怒族自治县",
			"value": "533324",
			"parent": "533300"
		},
		{
			"name": "兰坪白族普米族自治县",
			"value": "533325",
			"parent": "533300"
		},
		{
			"name": "香格里拉市",
			"value": "533401",
			"parent": "533400"
		},
		{
			"name": "德钦县",
			"value": "533422",
			"parent": "533400"
		},
		{
			"name": "维西傈僳族自治县",
			"value": "533423",
			"parent": "533400"
		},
		{
			"name": "拉萨市",
			"value": "540100",
			"parent": "540000"
		},
		{
			"name": "日喀则市",
			"value": "540200",
			"parent": "540000"
		},
		{
			"name": "昌都市",
			"value": "540300",
			"parent": "540000"
		},
		{
			"name": "林芝市",
			"value": "540400",
			"parent": "540000"
		},
		{
			"name": "山南地区",
			"value": "542200",
			"parent": "540000"
		},
		{
			"name": "那曲地区",
			"value": "542400",
			"parent": "540000"
		},
		{
			"name": "阿里地区",
			"value": "542500",
			"parent": "540000"
		},
		{
			"name": "城关区",
			"value": "540102",
			"parent": "540100"
		},
		{
			"name": "林周县",
			"value": "540121",
			"parent": "540100"
		},
		{
			"name": "当雄县",
			"value": "540122",
			"parent": "540100"
		},
		{
			"name": "尼木县",
			"value": "540123",
			"parent": "540100"
		},
		{
			"name": "曲水县",
			"value": "540124",
			"parent": "540100"
		},
		{
			"name": "堆龙德庆县",
			"value": "540125",
			"parent": "540100"
		},
		{
			"name": "达孜县",
			"value": "540126",
			"parent": "540100"
		},
		{
			"name": "墨竹工卡县",
			"value": "540127",
			"parent": "540100"
		},
		{
			"name": "桑珠孜区",
			"value": "540202",
			"parent": "540200"
		},
		{
			"name": "南木林县",
			"value": "540221",
			"parent": "540200"
		},
		{
			"name": "江孜县",
			"value": "540222",
			"parent": "540200"
		},
		{
			"name": "定日县",
			"value": "540223",
			"parent": "540200"
		},
		{
			"name": "萨迦县",
			"value": "540224",
			"parent": "540200"
		},
		{
			"name": "拉孜县",
			"value": "540225",
			"parent": "540200"
		},
		{
			"name": "昂仁县",
			"value": "540226",
			"parent": "540200"
		},
		{
			"name": "谢通门县",
			"value": "540227",
			"parent": "540200"
		},
		{
			"name": "白朗县",
			"value": "540228",
			"parent": "540200"
		},
		{
			"name": "仁布县",
			"value": "540229",
			"parent": "540200"
		},
		{
			"name": "康马县",
			"value": "540230",
			"parent": "540200"
		},
		{
			"name": "定结县",
			"value": "540231",
			"parent": "540200"
		},
		{
			"name": "仲巴县",
			"value": "540232",
			"parent": "540200"
		},
		{
			"name": "亚东县",
			"value": "540233",
			"parent": "540200"
		},
		{
			"name": "吉隆县",
			"value": "540234",
			"parent": "540200"
		},
		{
			"name": "聂拉木县",
			"value": "540235",
			"parent": "540200"
		},
		{
			"name": "萨嘎县",
			"value": "540236",
			"parent": "540200"
		},
		{
			"name": "岗巴县",
			"value": "540237",
			"parent": "540200"
		},
		{
			"name": "卡若区",
			"value": "540302",
			"parent": "540300"
		},
		{
			"name": "江达县",
			"value": "540321",
			"parent": "540300"
		},
		{
			"name": "贡觉县",
			"value": "540322",
			"parent": "540300"
		},
		{
			"name": "类乌齐县",
			"value": "540323",
			"parent": "540300"
		},
		{
			"name": "丁青县",
			"value": "540324",
			"parent": "540300"
		},
		{
			"name": "察雅县",
			"value": "540325",
			"parent": "540300"
		},
		{
			"name": "八宿县",
			"value": "540326",
			"parent": "540300"
		},
		{
			"name": "左贡县",
			"value": "540327",
			"parent": "540300"
		},
		{
			"name": "芒康县",
			"value": "540328",
			"parent": "540300"
		},
		{
			"name": "洛隆县",
			"value": "540329",
			"parent": "540300"
		},
		{
			"name": "边坝县",
			"value": "540330",
			"parent": "540300"
		},
		{
			"name": "巴宜区",
			"value": "540402",
			"parent": "540400"
		},
		{
			"name": "工布江达县",
			"value": "540421",
			"parent": "540400"
		},
		{
			"name": "米林县",
			"value": "540422",
			"parent": "540400"
		},
		{
			"name": "墨脱县",
			"value": "540423",
			"parent": "540400"
		},
		{
			"name": "波密县",
			"value": "540424",
			"parent": "540400"
		},
		{
			"name": "察隅县",
			"value": "540425",
			"parent": "540400"
		},
		{
			"name": "朗县",
			"value": "540426",
			"parent": "540400"
		},
		{
			"name": "乃东县",
			"value": "542221",
			"parent": "542200"
		},
		{
			"name": "扎囊县",
			"value": "542222",
			"parent": "542200"
		},
		{
			"name": "贡嘎县",
			"value": "542223",
			"parent": "542200"
		},
		{
			"name": "桑日县",
			"value": "542224",
			"parent": "542200"
		},
		{
			"name": "琼结县",
			"value": "542225",
			"parent": "542200"
		},
		{
			"name": "曲松县",
			"value": "542226",
			"parent": "542200"
		},
		{
			"name": "措美县",
			"value": "542227",
			"parent": "542200"
		},
		{
			"name": "洛扎县",
			"value": "542228",
			"parent": "542200"
		},
		{
			"name": "加查县",
			"value": "542229",
			"parent": "542200"
		},
		{
			"name": "隆子县",
			"value": "542231",
			"parent": "542200"
		},
		{
			"name": "错那县",
			"value": "542232",
			"parent": "542200"
		},
		{
			"name": "浪卡子县",
			"value": "542233",
			"parent": "542200"
		},
		{
			"name": "那曲县",
			"value": "542421",
			"parent": "542400"
		},
		{
			"name": "嘉黎县",
			"value": "542422",
			"parent": "542400"
		},
		{
			"name": "比如县",
			"value": "542423",
			"parent": "542400"
		},
		{
			"name": "聂荣县",
			"value": "542424",
			"parent": "542400"
		},
		{
			"name": "安多县",
			"value": "542425",
			"parent": "542400"
		},
		{
			"name": "申扎县",
			"value": "542426",
			"parent": "542400"
		},
		{
			"name": "索县",
			"value": "542427",
			"parent": "542400"
		},
		{
			"name": "班戈县",
			"value": "542428",
			"parent": "542400"
		},
		{
			"name": "巴青县",
			"value": "542429",
			"parent": "542400"
		},
		{
			"name": "尼玛县",
			"value": "542430",
			"parent": "542400"
		},
		{
			"name": "双湖县",
			"value": "542431",
			"parent": "542400"
		},
		{
			"name": "普兰县",
			"value": "542521",
			"parent": "542500"
		},
		{
			"name": "札达县",
			"value": "542522",
			"parent": "542500"
		},
		{
			"name": "噶尔县",
			"value": "542523",
			"parent": "542500"
		},
		{
			"name": "日土县",
			"value": "542524",
			"parent": "542500"
		},
		{
			"name": "革吉县",
			"value": "542525",
			"parent": "542500"
		},
		{
			"name": "改则县",
			"value": "542526",
			"parent": "542500"
		},
		{
			"name": "措勤县",
			"value": "542527",
			"parent": "542500"
		},
		{
			"name": "西安市",
			"value": "610100",
			"parent": "610000"
		},
		{
			"name": "铜川市",
			"value": "610200",
			"parent": "610000"
		},
		{
			"name": "宝鸡市",
			"value": "610300",
			"parent": "610000"
		},
		{
			"name": "咸阳市",
			"value": "610400",
			"parent": "610000"
		},
		{
			"name": "渭南市",
			"value": "610500",
			"parent": "610000"
		},
		{
			"name": "延安市",
			"value": "610600",
			"parent": "610000"
		},
		{
			"name": "汉中市",
			"value": "610700",
			"parent": "610000"
		},
		{
			"name": "榆林市",
			"value": "610800",
			"parent": "610000"
		},
		{
			"name": "安康市",
			"value": "610900",
			"parent": "610000"
		},
		{
			"name": "商洛市",
			"value": "611000",
			"parent": "610000"
		},
		{
			"name": "新城区",
			"value": "610102",
			"parent": "610100"
		},
		{
			"name": "碑林区",
			"value": "610103",
			"parent": "610100"
		},
		{
			"name": "莲湖区",
			"value": "610104",
			"parent": "610100"
		},
		{
			"name": "灞桥区",
			"value": "610111",
			"parent": "610100"
		},
		{
			"name": "未央区",
			"value": "610112",
			"parent": "610100"
		},
		{
			"name": "雁塔区",
			"value": "610113",
			"parent": "610100"
		},
		{
			"name": "阎良区",
			"value": "610114",
			"parent": "610100"
		},
		{
			"name": "临潼区",
			"value": "610115",
			"parent": "610100"
		},
		{
			"name": "长安区",
			"value": "610116",
			"parent": "610100"
		},
		{
			"name": "高陵区",
			"value": "610117",
			"parent": "610100"
		},
		{
			"name": "蓝田县",
			"value": "610122",
			"parent": "610100"
		},
		{
			"name": "周至县",
			"value": "610124",
			"parent": "610100"
		},
		{
			"name": "户县",
			"value": "610125",
			"parent": "610100"
		},
		{
			"name": "王益区",
			"value": "610202",
			"parent": "610200"
		},
		{
			"name": "印台区",
			"value": "610203",
			"parent": "610200"
		},
		{
			"name": "耀州区",
			"value": "610204",
			"parent": "610200"
		},
		{
			"name": "宜君县",
			"value": "610222",
			"parent": "610200"
		},
		{
			"name": "渭滨区",
			"value": "610302",
			"parent": "610300"
		},
		{
			"name": "金台区",
			"value": "610303",
			"parent": "610300"
		},
		{
			"name": "陈仓区",
			"value": "610304",
			"parent": "610300"
		},
		{
			"name": "凤翔县",
			"value": "610322",
			"parent": "610300"
		},
		{
			"name": "岐山县",
			"value": "610323",
			"parent": "610300"
		},
		{
			"name": "扶风县",
			"value": "610324",
			"parent": "610300"
		},
		{
			"name": "眉县",
			"value": "610326",
			"parent": "610300"
		},
		{
			"name": "陇县",
			"value": "610327",
			"parent": "610300"
		},
		{
			"name": "千阳县",
			"value": "610328",
			"parent": "610300"
		},
		{
			"name": "麟游县",
			"value": "610329",
			"parent": "610300"
		},
		{
			"name": "凤县",
			"value": "610330",
			"parent": "610300"
		},
		{
			"name": "太白县",
			"value": "610331",
			"parent": "610300"
		},
		{
			"name": "秦都区",
			"value": "610402",
			"parent": "610400"
		},
		{
			"name": "杨陵区",
			"value": "610403",
			"parent": "610400"
		},
		{
			"name": "渭城区",
			"value": "610404",
			"parent": "610400"
		},
		{
			"name": "三原县",
			"value": "610422",
			"parent": "610400"
		},
		{
			"name": "泾阳县",
			"value": "610423",
			"parent": "610400"
		},
		{
			"name": "乾县",
			"value": "610424",
			"parent": "610400"
		},
		{
			"name": "礼泉县",
			"value": "610425",
			"parent": "610400"
		},
		{
			"name": "永寿县",
			"value": "610426",
			"parent": "610400"
		},
		{
			"name": "彬县",
			"value": "610427",
			"parent": "610400"
		},
		{
			"name": "长武县",
			"value": "610428",
			"parent": "610400"
		},
		{
			"name": "旬邑县",
			"value": "610429",
			"parent": "610400"
		},
		{
			"name": "淳化县",
			"value": "610430",
			"parent": "610400"
		},
		{
			"name": "武功县",
			"value": "610431",
			"parent": "610400"
		},
		{
			"name": "兴平市",
			"value": "610481",
			"parent": "610400"
		},
		{
			"name": "临渭区",
			"value": "610502",
			"parent": "610500"
		},
		{
			"name": "华县",
			"value": "610521",
			"parent": "610500"
		},
		{
			"name": "潼关县",
			"value": "610522",
			"parent": "610500"
		},
		{
			"name": "大荔县",
			"value": "610523",
			"parent": "610500"
		},
		{
			"name": "合阳县",
			"value": "610524",
			"parent": "610500"
		},
		{
			"name": "澄城县",
			"value": "610525",
			"parent": "610500"
		},
		{
			"name": "蒲城县",
			"value": "610526",
			"parent": "610500"
		},
		{
			"name": "白水县",
			"value": "610527",
			"parent": "610500"
		},
		{
			"name": "富平县",
			"value": "610528",
			"parent": "610500"
		},
		{
			"name": "韩城市",
			"value": "610581",
			"parent": "610500"
		},
		{
			"name": "华阴市",
			"value": "610582",
			"parent": "610500"
		},
		{
			"name": "宝塔区",
			"value": "610602",
			"parent": "610600"
		},
		{
			"name": "延长县",
			"value": "610621",
			"parent": "610600"
		},
		{
			"name": "延川县",
			"value": "610622",
			"parent": "610600"
		},
		{
			"name": "子长县",
			"value": "610623",
			"parent": "610600"
		},
		{
			"name": "安塞县",
			"value": "610624",
			"parent": "610600"
		},
		{
			"name": "志丹县",
			"value": "610625",
			"parent": "610600"
		},
		{
			"name": "吴起县",
			"value": "610626",
			"parent": "610600"
		},
		{
			"name": "甘泉县",
			"value": "610627",
			"parent": "610600"
		},
		{
			"name": "富县",
			"value": "610628",
			"parent": "610600"
		},
		{
			"name": "洛川县",
			"value": "610629",
			"parent": "610600"
		},
		{
			"name": "宜川县",
			"value": "610630",
			"parent": "610600"
		},
		{
			"name": "黄龙县",
			"value": "610631",
			"parent": "610600"
		},
		{
			"name": "黄陵县",
			"value": "610632",
			"parent": "610600"
		},
		{
			"name": "汉台区",
			"value": "610702",
			"parent": "610700"
		},
		{
			"name": "南郑县",
			"value": "610721",
			"parent": "610700"
		},
		{
			"name": "城固县",
			"value": "610722",
			"parent": "610700"
		},
		{
			"name": "洋县",
			"value": "610723",
			"parent": "610700"
		},
		{
			"name": "西乡县",
			"value": "610724",
			"parent": "610700"
		},
		{
			"name": "勉县",
			"value": "610725",
			"parent": "610700"
		},
		{
			"name": "宁强县",
			"value": "610726",
			"parent": "610700"
		},
		{
			"name": "略阳县",
			"value": "610727",
			"parent": "610700"
		},
		{
			"name": "镇巴县",
			"value": "610728",
			"parent": "610700"
		},
		{
			"name": "留坝县",
			"value": "610729",
			"parent": "610700"
		},
		{
			"name": "佛坪县",
			"value": "610730",
			"parent": "610700"
		},
		{
			"name": "榆阳区",
			"value": "610802",
			"parent": "610800"
		},
		{
			"name": "神木县",
			"value": "610821",
			"parent": "610800"
		},
		{
			"name": "府谷县",
			"value": "610822",
			"parent": "610800"
		},
		{
			"name": "横山县",
			"value": "610823",
			"parent": "610800"
		},
		{
			"name": "靖边县",
			"value": "610824",
			"parent": "610800"
		},
		{
			"name": "定边县",
			"value": "610825",
			"parent": "610800"
		},
		{
			"name": "绥德县",
			"value": "610826",
			"parent": "610800"
		},
		{
			"name": "米脂县",
			"value": "610827",
			"parent": "610800"
		},
		{
			"name": "佳县",
			"value": "610828",
			"parent": "610800"
		},
		{
			"name": "吴堡县",
			"value": "610829",
			"parent": "610800"
		},
		{
			"name": "清涧县",
			"value": "610830",
			"parent": "610800"
		},
		{
			"name": "子洲县",
			"value": "610831",
			"parent": "610800"
		},
		{
			"name": "汉滨区",
			"value": "610902",
			"parent": "610900"
		},
		{
			"name": "汉阴县",
			"value": "610921",
			"parent": "610900"
		},
		{
			"name": "石泉县",
			"value": "610922",
			"parent": "610900"
		},
		{
			"name": "宁陕县",
			"value": "610923",
			"parent": "610900"
		},
		{
			"name": "紫阳县",
			"value": "610924",
			"parent": "610900"
		},
		{
			"name": "岚皋县",
			"value": "610925",
			"parent": "610900"
		},
		{
			"name": "平利县",
			"value": "610926",
			"parent": "610900"
		},
		{
			"name": "镇坪县",
			"value": "610927",
			"parent": "610900"
		},
		{
			"name": "旬阳县",
			"value": "610928",
			"parent": "610900"
		},
		{
			"name": "白河县",
			"value": "610929",
			"parent": "610900"
		},
		{
			"name": "商州区",
			"value": "611002",
			"parent": "611000"
		},
		{
			"name": "洛南县",
			"value": "611021",
			"parent": "611000"
		},
		{
			"name": "丹凤县",
			"value": "611022",
			"parent": "611000"
		},
		{
			"name": "商南县",
			"value": "611023",
			"parent": "611000"
		},
		{
			"name": "山阳县",
			"value": "611024",
			"parent": "611000"
		},
		{
			"name": "镇安县",
			"value": "611025",
			"parent": "611000"
		},
		{
			"name": "柞水县",
			"value": "611026",
			"parent": "611000"
		},
		{
			"name": "兰州市",
			"value": "620100",
			"parent": "620000"
		},
		{
			"name": "嘉峪关市",
			"value": "620200",
			"parent": "620000"
		},
		{
			"name": "金昌市",
			"value": "620300",
			"parent": "620000"
		},
		{
			"name": "白银市",
			"value": "620400",
			"parent": "620000"
		},
		{
			"name": "天水市",
			"value": "620500",
			"parent": "620000"
		},
		{
			"name": "武威市",
			"value": "620600",
			"parent": "620000"
		},
		{
			"name": "张掖市",
			"value": "620700",
			"parent": "620000"
		},
		{
			"name": "平凉市",
			"value": "620800",
			"parent": "620000"
		},
		{
			"name": "酒泉市",
			"value": "620900",
			"parent": "620000"
		},
		{
			"name": "庆阳市",
			"value": "621000",
			"parent": "620000"
		},
		{
			"name": "定西市",
			"value": "621100",
			"parent": "620000"
		},
		{
			"name": "陇南市",
			"value": "621200",
			"parent": "620000"
		},
		{
			"name": "临夏回族自治州",
			"value": "622900",
			"parent": "620000"
		},
		{
			"name": "甘南藏族自治州",
			"value": "623000",
			"parent": "620000"
		},
		{
			"name": "城关区",
			"value": "620102",
			"parent": "620100"
		},
		{
			"name": "七里河区",
			"value": "620103",
			"parent": "620100"
		},
		{
			"name": "西固区",
			"value": "620104",
			"parent": "620100"
		},
		{
			"name": "安宁区",
			"value": "620105",
			"parent": "620100"
		},
		{
			"name": "红古区",
			"value": "620111",
			"parent": "620100"
		},
		{
			"name": "永登县",
			"value": "620121",
			"parent": "620100"
		},
		{
			"name": "皋兰县",
			"value": "620122",
			"parent": "620100"
		},
		{
			"name": "榆中县",
			"value": "620123",
			"parent": "620100"
		},
		{
			"name": "金川区",
			"value": "620302",
			"parent": "620300"
		},
		{
			"name": "永昌县",
			"value": "620321",
			"parent": "620300"
		},
		{
			"name": "白银区",
			"value": "620402",
			"parent": "620400"
		},
		{
			"name": "平川区",
			"value": "620403",
			"parent": "620400"
		},
		{
			"name": "靖远县",
			"value": "620421",
			"parent": "620400"
		},
		{
			"name": "会宁县",
			"value": "620422",
			"parent": "620400"
		},
		{
			"name": "景泰县",
			"value": "620423",
			"parent": "620400"
		},
		{
			"name": "秦州区",
			"value": "620502",
			"parent": "620500"
		},
		{
			"name": "麦积区",
			"value": "620503",
			"parent": "620500"
		},
		{
			"name": "清水县",
			"value": "620521",
			"parent": "620500"
		},
		{
			"name": "秦安县",
			"value": "620522",
			"parent": "620500"
		},
		{
			"name": "甘谷县",
			"value": "620523",
			"parent": "620500"
		},
		{
			"name": "武山县",
			"value": "620524",
			"parent": "620500"
		},
		{
			"name": "张家川回族自治县",
			"value": "620525",
			"parent": "620500"
		},
		{
			"name": "凉州区",
			"value": "620602",
			"parent": "620600"
		},
		{
			"name": "民勤县",
			"value": "620621",
			"parent": "620600"
		},
		{
			"name": "古浪县",
			"value": "620622",
			"parent": "620600"
		},
		{
			"name": "天祝藏族自治县",
			"value": "620623",
			"parent": "620600"
		},
		{
			"name": "甘州区",
			"value": "620702",
			"parent": "620700"
		},
		{
			"name": "肃南裕固族自治县",
			"value": "620721",
			"parent": "620700"
		},
		{
			"name": "民乐县",
			"value": "620722",
			"parent": "620700"
		},
		{
			"name": "临泽县",
			"value": "620723",
			"parent": "620700"
		},
		{
			"name": "高台县",
			"value": "620724",
			"parent": "620700"
		},
		{
			"name": "山丹县",
			"value": "620725",
			"parent": "620700"
		},
		{
			"name": "崆峒区",
			"value": "620802",
			"parent": "620800"
		},
		{
			"name": "泾川县",
			"value": "620821",
			"parent": "620800"
		},
		{
			"name": "灵台县",
			"value": "620822",
			"parent": "620800"
		},
		{
			"name": "崇信县",
			"value": "620823",
			"parent": "620800"
		},
		{
			"name": "华亭县",
			"value": "620824",
			"parent": "620800"
		},
		{
			"name": "庄浪县",
			"value": "620825",
			"parent": "620800"
		},
		{
			"name": "静宁县",
			"value": "620826",
			"parent": "620800"
		},
		{
			"name": "肃州区",
			"value": "620902",
			"parent": "620900"
		},
		{
			"name": "金塔县",
			"value": "620921",
			"parent": "620900"
		},
		{
			"name": "瓜州县",
			"value": "620922",
			"parent": "620900"
		},
		{
			"name": "肃北蒙古族自治县",
			"value": "620923",
			"parent": "620900"
		},
		{
			"name": "阿克塞哈萨克族自治县",
			"value": "620924",
			"parent": "620900"
		},
		{
			"name": "玉门市",
			"value": "620981",
			"parent": "620900"
		},
		{
			"name": "敦煌市",
			"value": "620982",
			"parent": "620900"
		},
		{
			"name": "西峰区",
			"value": "621002",
			"parent": "621000"
		},
		{
			"name": "庆城县",
			"value": "621021",
			"parent": "621000"
		},
		{
			"name": "环县",
			"value": "621022",
			"parent": "621000"
		},
		{
			"name": "华池县",
			"value": "621023",
			"parent": "621000"
		},
		{
			"name": "合水县",
			"value": "621024",
			"parent": "621000"
		},
		{
			"name": "正宁县",
			"value": "621025",
			"parent": "621000"
		},
		{
			"name": "宁县",
			"value": "621026",
			"parent": "621000"
		},
		{
			"name": "镇原县",
			"value": "621027",
			"parent": "621000"
		},
		{
			"name": "安定区",
			"value": "621102",
			"parent": "621100"
		},
		{
			"name": "通渭县",
			"value": "621121",
			"parent": "621100"
		},
		{
			"name": "陇西县",
			"value": "621122",
			"parent": "621100"
		},
		{
			"name": "渭源县",
			"value": "621123",
			"parent": "621100"
		},
		{
			"name": "临洮县",
			"value": "621124",
			"parent": "621100"
		},
		{
			"name": "漳县",
			"value": "621125",
			"parent": "621100"
		},
		{
			"name": "岷县",
			"value": "621126",
			"parent": "621100"
		},
		{
			"name": "武都区",
			"value": "621202",
			"parent": "621200"
		},
		{
			"name": "成县",
			"value": "621221",
			"parent": "621200"
		},
		{
			"name": "文县",
			"value": "621222",
			"parent": "621200"
		},
		{
			"name": "宕昌县",
			"value": "621223",
			"parent": "621200"
		},
		{
			"name": "康县",
			"value": "621224",
			"parent": "621200"
		},
		{
			"name": "西和县",
			"value": "621225",
			"parent": "621200"
		},
		{
			"name": "礼县",
			"value": "621226",
			"parent": "621200"
		},
		{
			"name": "徽县",
			"value": "621227",
			"parent": "621200"
		},
		{
			"name": "两当县",
			"value": "621228",
			"parent": "621200"
		},
		{
			"name": "临夏市",
			"value": "622901",
			"parent": "622900"
		},
		{
			"name": "临夏县",
			"value": "622921",
			"parent": "622900"
		},
		{
			"name": "康乐县",
			"value": "622922",
			"parent": "622900"
		},
		{
			"name": "永靖县",
			"value": "622923",
			"parent": "622900"
		},
		{
			"name": "广河县",
			"value": "622924",
			"parent": "622900"
		},
		{
			"name": "和政县",
			"value": "622925",
			"parent": "622900"
		},
		{
			"name": "东乡族自治县",
			"value": "622926",
			"parent": "622900"
		},
		{
			"name": "积石山保安族东乡族撒拉族自治县",
			"value": "622927",
			"parent": "622900"
		},
		{
			"name": "合作市",
			"value": "623001",
			"parent": "623000"
		},
		{
			"name": "临潭县",
			"value": "623021",
			"parent": "623000"
		},
		{
			"name": "卓尼县",
			"value": "623022",
			"parent": "623000"
		},
		{
			"name": "舟曲县",
			"value": "623023",
			"parent": "623000"
		},
		{
			"name": "迭部县",
			"value": "623024",
			"parent": "623000"
		},
		{
			"name": "玛曲县",
			"value": "623025",
			"parent": "623000"
		},
		{
			"name": "碌曲县",
			"value": "623026",
			"parent": "623000"
		},
		{
			"name": "夏河县",
			"value": "623027",
			"parent": "623000"
		},
		{
			"name": "西宁市",
			"value": "630100",
			"parent": "630000"
		},
		{
			"name": "海东市",
			"value": "630200",
			"parent": "630000"
		},
		{
			"name": "海北藏族自治州",
			"value": "632200",
			"parent": "630000"
		},
		{
			"name": "黄南藏族自治州",
			"value": "632300",
			"parent": "630000"
		},
		{
			"name": "海南藏族自治州",
			"value": "632500",
			"parent": "630000"
		},
		{
			"name": "果洛藏族自治州",
			"value": "632600",
			"parent": "630000"
		},
		{
			"name": "玉树藏族自治州",
			"value": "632700",
			"parent": "630000"
		},
		{
			"name": "海西蒙古族藏族自治州",
			"value": "632800",
			"parent": "630000"
		},
		{
			"name": "城东区",
			"value": "630102",
			"parent": "630100"
		},
		{
			"name": "城中区",
			"value": "630103",
			"parent": "630100"
		},
		{
			"name": "城西区",
			"value": "630104",
			"parent": "630100"
		},
		{
			"name": "城北区",
			"value": "630105",
			"parent": "630100"
		},
		{
			"name": "大通回族土族自治县",
			"value": "630121",
			"parent": "630100"
		},
		{
			"name": "湟中县",
			"value": "630122",
			"parent": "630100"
		},
		{
			"name": "湟源县",
			"value": "630123",
			"parent": "630100"
		},
		{
			"name": "乐都区",
			"value": "630202",
			"parent": "630200"
		},
		{
			"name": "平安区",
			"value": "630203",
			"parent": "630200"
		},
		{
			"name": "民和回族土族自治县",
			"value": "630222",
			"parent": "630200"
		},
		{
			"name": "互助土族自治县",
			"value": "630223",
			"parent": "630200"
		},
		{
			"name": "化隆回族自治县",
			"value": "630224",
			"parent": "630200"
		},
		{
			"name": "循化撒拉族自治县",
			"value": "630225",
			"parent": "630200"
		},
		{
			"name": "门源回族自治县",
			"value": "632221",
			"parent": "632200"
		},
		{
			"name": "祁连县",
			"value": "632222",
			"parent": "632200"
		},
		{
			"name": "海晏县",
			"value": "632223",
			"parent": "632200"
		},
		{
			"name": "刚察县",
			"value": "632224",
			"parent": "632200"
		},
		{
			"name": "同仁县",
			"value": "632321",
			"parent": "632300"
		},
		{
			"name": "尖扎县",
			"value": "632322",
			"parent": "632300"
		},
		{
			"name": "泽库县",
			"value": "632323",
			"parent": "632300"
		},
		{
			"name": "河南蒙古族自治县",
			"value": "632324",
			"parent": "632300"
		},
		{
			"name": "共和县",
			"value": "632521",
			"parent": "632500"
		},
		{
			"name": "同德县",
			"value": "632522",
			"parent": "632500"
		},
		{
			"name": "贵德县",
			"value": "632523",
			"parent": "632500"
		},
		{
			"name": "兴海县",
			"value": "632524",
			"parent": "632500"
		},
		{
			"name": "贵南县",
			"value": "632525",
			"parent": "632500"
		},
		{
			"name": "玛沁县",
			"value": "632621",
			"parent": "632600"
		},
		{
			"name": "班玛县",
			"value": "632622",
			"parent": "632600"
		},
		{
			"name": "甘德县",
			"value": "632623",
			"parent": "632600"
		},
		{
			"name": "达日县",
			"value": "632624",
			"parent": "632600"
		},
		{
			"name": "久治县",
			"value": "632625",
			"parent": "632600"
		},
		{
			"name": "玛多县",
			"value": "632626",
			"parent": "632600"
		},
		{
			"name": "玉树市",
			"value": "632701",
			"parent": "632700"
		},
		{
			"name": "杂多县",
			"value": "632722",
			"parent": "632700"
		},
		{
			"name": "称多县",
			"value": "632723",
			"parent": "632700"
		},
		{
			"name": "治多县",
			"value": "632724",
			"parent": "632700"
		},
		{
			"name": "囊谦县",
			"value": "632725",
			"parent": "632700"
		},
		{
			"name": "曲麻莱县",
			"value": "632726",
			"parent": "632700"
		},
		{
			"name": "格尔木市",
			"value": "632801",
			"parent": "632800"
		},
		{
			"name": "德令哈市",
			"value": "632802",
			"parent": "632800"
		},
		{
			"name": "乌兰县",
			"value": "632821",
			"parent": "632800"
		},
		{
			"name": "都兰县",
			"value": "632822",
			"parent": "632800"
		},
		{
			"name": "天峻县",
			"value": "632823",
			"parent": "632800"
		},
		{
			"name": "海西蒙古族藏族自治州直辖",
			"value": "632825",
			"parent": "632800"
		},
		{
			"name": "银川市",
			"value": "640100",
			"parent": "640000"
		},
		{
			"name": "石嘴山市",
			"value": "640200",
			"parent": "640000"
		},
		{
			"name": "吴忠市",
			"value": "640300",
			"parent": "640000"
		},
		{
			"name": "固原市",
			"value": "640400",
			"parent": "640000"
		},
		{
			"name": "中卫市",
			"value": "640500",
			"parent": "640000"
		},
		{
			"name": "兴庆区",
			"value": "640104",
			"parent": "640100"
		},
		{
			"name": "西夏区",
			"value": "640105",
			"parent": "640100"
		},
		{
			"name": "金凤区",
			"value": "640106",
			"parent": "640100"
		},
		{
			"name": "永宁县",
			"value": "640121",
			"parent": "640100"
		},
		{
			"name": "贺兰县",
			"value": "640122",
			"parent": "640100"
		},
		{
			"name": "灵武市",
			"value": "640181",
			"parent": "640100"
		},
		{
			"name": "大武口区",
			"value": "640202",
			"parent": "640200"
		},
		{
			"name": "惠农区",
			"value": "640205",
			"parent": "640200"
		},
		{
			"name": "平罗县",
			"value": "640221",
			"parent": "640200"
		},
		{
			"name": "利通区",
			"value": "640302",
			"parent": "640300"
		},
		{
			"name": "红寺堡区",
			"value": "640303",
			"parent": "640300"
		},
		{
			"name": "盐池县",
			"value": "640323",
			"parent": "640300"
		},
		{
			"name": "同心县",
			"value": "640324",
			"parent": "640300"
		},
		{
			"name": "青铜峡市",
			"value": "640381",
			"parent": "640300"
		},
		{
			"name": "原州区",
			"value": "640402",
			"parent": "640400"
		},
		{
			"name": "西吉县",
			"value": "640422",
			"parent": "640400"
		},
		{
			"name": "隆德县",
			"value": "640423",
			"parent": "640400"
		},
		{
			"name": "泾源县",
			"value": "640424",
			"parent": "640400"
		},
		{
			"name": "彭阳县",
			"value": "640425",
			"parent": "640400"
		},
		{
			"name": "沙坡头区",
			"value": "640502",
			"parent": "640500"
		},
		{
			"name": "中宁县",
			"value": "640521",
			"parent": "640500"
		},
		{
			"name": "海原县",
			"value": "640522",
			"parent": "640500"
		},
		{
			"name": "乌鲁木齐市",
			"value": "650100",
			"parent": "650000"
		},
		{
			"name": "克拉玛依市",
			"value": "650200",
			"parent": "650000"
		},
		{
			"name": "吐鲁番市",
			"value": "650400",
			"parent": "650000"
		},
		{
			"name": "哈密地区",
			"value": "652200",
			"parent": "650000"
		},
		{
			"name": "昌吉回族自治州",
			"value": "652300",
			"parent": "650000"
		},
		{
			"name": "博尔塔拉蒙古自治州",
			"value": "652700",
			"parent": "650000"
		},
		{
			"name": "巴音郭楞蒙古自治州",
			"value": "652800",
			"parent": "650000"
		},
		{
			"name": "阿克苏地区",
			"value": "652900",
			"parent": "650000"
		},
		{
			"name": "克孜勒苏柯尔克孜自治州",
			"value": "653000",
			"parent": "650000"
		},
		{
			"name": "喀什地区",
			"value": "653100",
			"parent": "650000"
		},
		{
			"name": "和田地区",
			"value": "653200",
			"parent": "650000"
		},
		{
			"name": "伊犁哈萨克自治州",
			"value": "654000",
			"parent": "650000"
		},
		{
			"name": "塔城地区",
			"value": "654200",
			"parent": "650000"
		},
		{
			"name": "阿勒泰地区",
			"value": "654300",
			"parent": "650000"
		},
		{
			"name": "石河子市",
			"value": "659001",
			"parent": "650000"
		},
		{
			"name": "阿拉尔市",
			"value": "659002",
			"parent": "650000"
		},
		{
			"name": "图木舒克市",
			"value": "659003",
			"parent": "650000"
		},
		{
			"name": "五家渠市",
			"value": "659004",
			"parent": "650000"
		},
		{
			"name": "北屯市",
			"value": "659005",
			"parent": "650000"
		},
		{
			"name": "铁门关市",
			"value": "659006",
			"parent": "650000"
		},
		{
			"name": "双河市",
			"value": "659007",
			"parent": "650000"
		},
		{
			"name": "可克达拉市",
			"value": "659008",
			"parent": "650000"
		},
		{
			"name": "天山区",
			"value": "650102",
			"parent": "650100"
		},
		{
			"name": "沙依巴克区",
			"value": "650103",
			"parent": "650100"
		},
		{
			"name": "新市区",
			"value": "650104",
			"parent": "650100"
		},
		{
			"name": "水磨沟区",
			"value": "650105",
			"parent": "650100"
		},
		{
			"name": "头屯河区",
			"value": "650106",
			"parent": "650100"
		},
		{
			"name": "达坂城区",
			"value": "650107",
			"parent": "650100"
		},
		{
			"name": "米东区",
			"value": "650109",
			"parent": "650100"
		},
		{
			"name": "乌鲁木齐县",
			"value": "650121",
			"parent": "650100"
		},
		{
			"name": "独山子区",
			"value": "650202",
			"parent": "650200"
		},
		{
			"name": "克拉玛依区",
			"value": "650203",
			"parent": "650200"
		},
		{
			"name": "白碱滩区",
			"value": "650204",
			"parent": "650200"
		},
		{
			"name": "乌尔禾区",
			"value": "650205",
			"parent": "650200"
		},
		{
			"name": "高昌区",
			"value": "650402",
			"parent": "650400"
		},
		{
			"name": "鄯善县",
			"value": "650421",
			"parent": "650400"
		},
		{
			"name": "托克逊县",
			"value": "650422",
			"parent": "650400"
		},
		{
			"name": "哈密市",
			"value": "652201",
			"parent": "652200"
		},
		{
			"name": "巴里坤哈萨克自治县",
			"value": "652222",
			"parent": "652200"
		},
		{
			"name": "伊吾县",
			"value": "652223",
			"parent": "652200"
		},
		{
			"name": "昌吉市",
			"value": "652301",
			"parent": "652300"
		},
		{
			"name": "阜康市",
			"value": "652302",
			"parent": "652300"
		},
		{
			"name": "呼图壁县",
			"value": "652323",
			"parent": "652300"
		},
		{
			"name": "玛纳斯县",
			"value": "652324",
			"parent": "652300"
		},
		{
			"name": "奇台县",
			"value": "652325",
			"parent": "652300"
		},
		{
			"name": "吉木萨尔县",
			"value": "652327",
			"parent": "652300"
		},
		{
			"name": "木垒哈萨克自治县",
			"value": "652328",
			"parent": "652300"
		},
		{
			"name": "博乐市",
			"value": "652701",
			"parent": "652700"
		},
		{
			"name": "阿拉山口市",
			"value": "652702",
			"parent": "652700"
		},
		{
			"name": "精河县",
			"value": "652722",
			"parent": "652700"
		},
		{
			"name": "温泉县",
			"value": "652723",
			"parent": "652700"
		},
		{
			"name": "库尔勒市",
			"value": "652801",
			"parent": "652800"
		},
		{
			"name": "轮台县",
			"value": "652822",
			"parent": "652800"
		},
		{
			"name": "尉犁县",
			"value": "652823",
			"parent": "652800"
		},
		{
			"name": "若羌县",
			"value": "652824",
			"parent": "652800"
		},
		{
			"name": "且末县",
			"value": "652825",
			"parent": "652800"
		},
		{
			"name": "焉耆回族自治县",
			"value": "652826",
			"parent": "652800"
		},
		{
			"name": "和静县",
			"value": "652827",
			"parent": "652800"
		},
		{
			"name": "和硕县",
			"value": "652828",
			"parent": "652800"
		},
		{
			"name": "博湖县",
			"value": "652829",
			"parent": "652800"
		},
		{
			"name": "阿克苏市",
			"value": "652901",
			"parent": "652900"
		},
		{
			"name": "温宿县",
			"value": "652922",
			"parent": "652900"
		},
		{
			"name": "库车县",
			"value": "652923",
			"parent": "652900"
		},
		{
			"name": "沙雅县",
			"value": "652924",
			"parent": "652900"
		},
		{
			"name": "新和县",
			"value": "652925",
			"parent": "652900"
		},
		{
			"name": "拜城县",
			"value": "652926",
			"parent": "652900"
		},
		{
			"name": "乌什县",
			"value": "652927",
			"parent": "652900"
		},
		{
			"name": "阿瓦提县",
			"value": "652928",
			"parent": "652900"
		},
		{
			"name": "柯坪县",
			"value": "652929",
			"parent": "652900"
		},
		{
			"name": "阿图什市",
			"value": "653001",
			"parent": "653000"
		},
		{
			"name": "阿克陶县",
			"value": "653022",
			"parent": "653000"
		},
		{
			"name": "阿合奇县",
			"value": "653023",
			"parent": "653000"
		},
		{
			"name": "乌恰县",
			"value": "653024",
			"parent": "653000"
		},
		{
			"name": "喀什市",
			"value": "653101",
			"parent": "653100"
		},
		{
			"name": "疏附县",
			"value": "653121",
			"parent": "653100"
		},
		{
			"name": "疏勒县",
			"value": "653122",
			"parent": "653100"
		},
		{
			"name": "英吉沙县",
			"value": "653123",
			"parent": "653100"
		},
		{
			"name": "泽普县",
			"value": "653124",
			"parent": "653100"
		},
		{
			"name": "莎车县",
			"value": "653125",
			"parent": "653100"
		},
		{
			"name": "叶城县",
			"value": "653126",
			"parent": "653100"
		},
		{
			"name": "麦盖提县",
			"value": "653127",
			"parent": "653100"
		},
		{
			"name": "岳普湖县",
			"value": "653128",
			"parent": "653100"
		},
		{
			"name": "伽师县",
			"value": "653129",
			"parent": "653100"
		},
		{
			"name": "巴楚县",
			"value": "653130",
			"parent": "653100"
		},
		{
			"name": "塔什库尔干塔吉克自治县",
			"value": "653131",
			"parent": "653100"
		},
		{
			"name": "和田市",
			"value": "653201",
			"parent": "653200"
		},
		{
			"name": "和田县",
			"value": "653221",
			"parent": "653200"
		},
		{
			"name": "墨玉县",
			"value": "653222",
			"parent": "653200"
		},
		{
			"name": "皮山县",
			"value": "653223",
			"parent": "653200"
		},
		{
			"name": "洛浦县",
			"value": "653224",
			"parent": "653200"
		},
		{
			"name": "策勒县",
			"value": "653225",
			"parent": "653200"
		},
		{
			"name": "于田县",
			"value": "653226",
			"parent": "653200"
		},
		{
			"name": "民丰县",
			"value": "653227",
			"parent": "653200"
		},
		{
			"name": "伊宁市",
			"value": "654002",
			"parent": "654000"
		},
		{
			"name": "奎屯市",
			"value": "654003",
			"parent": "654000"
		},
		{
			"name": "霍尔果斯市",
			"value": "654004",
			"parent": "654000"
		},
		{
			"name": "伊宁县",
			"value": "654021",
			"parent": "654000"
		},
		{
			"name": "察布查尔锡伯自治县",
			"value": "654022",
			"parent": "654000"
		},
		{
			"name": "霍城县",
			"value": "654023",
			"parent": "654000"
		},
		{
			"name": "巩留县",
			"value": "654024",
			"parent": "654000"
		},
		{
			"name": "新源县",
			"value": "654025",
			"parent": "654000"
		},
		{
			"name": "昭苏县",
			"value": "654026",
			"parent": "654000"
		},
		{
			"name": "特克斯县",
			"value": "654027",
			"parent": "654000"
		},
		{
			"name": "尼勒克县",
			"value": "654028",
			"parent": "654000"
		},
		{
			"name": "塔城市",
			"value": "654201",
			"parent": "654200"
		},
		{
			"name": "乌苏市",
			"value": "654202",
			"parent": "654200"
		},
		{
			"name": "额敏县",
			"value": "654221",
			"parent": "654200"
		},
		{
			"name": "沙湾县",
			"value": "654223",
			"parent": "654200"
		},
		{
			"name": "托里县",
			"value": "654224",
			"parent": "654200"
		},
		{
			"name": "裕民县",
			"value": "654225",
			"parent": "654200"
		},
		{
			"name": "和布克赛尔蒙古自治县",
			"value": "654226",
			"parent": "654200"
		},
		{
			"name": "阿勒泰市",
			"value": "654301",
			"parent": "654300"
		},
		{
			"name": "布尔津县",
			"value": "654321",
			"parent": "654300"
		},
		{
			"name": "富蕴县",
			"value": "654322",
			"parent": "654300"
		},
		{
			"name": "福海县",
			"value": "654323",
			"parent": "654300"
		},
		{
			"name": "哈巴河县",
			"value": "654324",
			"parent": "654300"
		},
		{
			"name": "青河县",
			"value": "654325",
			"parent": "654300"
		},
		{
			"name": "吉木乃县",
			"value": "654326",
			"parent": "654300"
		},
		{
			"name": "中西區",
			"value": "810001",
			"parent": "810000"
		},
		{
			"name": "灣仔區",
			"value": "810002",
			"parent": "810000"
		},
		{
			"name": "東區",
			"value": "810003",
			"parent": "810000"
		},
		{
			"name": "南區",
			"value": "810004",
			"parent": "810000"
		},
		{
			"name": "油尖旺區",
			"value": "810005",
			"parent": "810000"
		},
		{
			"name": "深水埗區",
			"value": "810006",
			"parent": "810000"
		},
		{
			"name": "九龍城區",
			"value": "810007",
			"parent": "810000"
		},
		{
			"name": "黃大仙區",
			"value": "810008",
			"parent": "810000"
		},
		{
			"name": "觀塘區",
			"value": "810009",
			"parent": "810000"
		},
		{
			"name": "荃灣區",
			"value": "810010",
			"parent": "810000"
		},
		{
			"name": "屯門區",
			"value": "810011",
			"parent": "810000"
		},
		{
			"name": "元朗區",
			"value": "810012",
			"parent": "810000"
		},
		{
			"name": "北區",
			"value": "810013",
			"parent": "810000"
		},
		{
			"name": "大埔區",
			"value": "810014",
			"parent": "810000"
		},
		{
			"name": "西貢區",
			"value": "810015",
			"parent": "810000"
		},
		{
			"name": "沙田區",
			"value": "810016",
			"parent": "810000"
		},
		{
			"name": "葵青區",
			"value": "810017",
			"parent": "810000"
		},
		{
			"name": "離島區",
			"value": "810018",
			"parent": "810000"
		},
		{
			"name": "花地瑪堂區",
			"value": "820001",
			"parent": "820000"
		},
		{
			"name": "花王堂區",
			"value": "820002",
			"parent": "820000"
		},
		{
			"name": "望德堂區",
			"value": "820003",
			"parent": "820000"
		},
		{
			"name": "大堂區",
			"value": "820004",
			"parent": "820000"
		},
		{
			"name": "風順堂區",
			"value": "820005",
			"parent": "820000"
		},
		{
			"name": "嘉模堂區",
			"value": "820006",
			"parent": "820000"
		},
		{
			"name": "路氹填海區",
			"value": "820007",
			"parent": "820000"
		},
		{
			"name": "聖方濟各堂區",
			"value": "820008",
			"parent": "820000"
		},
		{
			"name": "--",
			"value": "120200--",
			"parent": "120200"
		},
		{
			"name": "--",
			"value": "310200--",
			"parent": "310200"
		},
		{
			"name": "--",
			"value": "429004--",
			"parent": "429004"
		},
		{
			"name": "--",
			"value": "429005--",
			"parent": "429005"
		},
		{
			"name": "--",
			"value": "429006--",
			"parent": "429006"
		},
		{
			"name": "--",
			"value": "659001--",
			"parent": "659001"
		},
		{
			"name": "--",
			"value": "659002--",
			"parent": "659002"
		},
		{
			"name": "--",
			"value": "659003--",
			"parent": "659003"
		},
		{
			"name": "--",
			"value": "659004--",
			"parent": "659004"
		},
		{
			"name": "--",
			"value": "659005--",
			"parent": "659005"
		},
		{
			"name": "--",
			"value": "659006--",
			"parent": "659006"
		},
		{
			"name": "--",
			"value": "659007--",
			"parent": "659007"
		},
		{
			"name": "--",
			"value": "659008--",
			"parent": "659008"
		},
		{
			"name": "--",
			"value": "500200--",
			"parent": "500200"
		},
		{
			"name": "--",
			"value": "429021--",
			"parent": "429021"
		},
		{
			"name": "--",
			"value": "419001--",
			"parent": "419001"
		},
		{
			"name": "--",
			"value": "460400--",
			"parent": "460400"
		},
		{
			"name": "--",
			"value": "469001--",
			"parent": "469001"
		},
		{
			"name": "--",
			"value": "469002--",
			"parent": "469002"
		},
		{
			"name": "--",
			"value": "469005--",
			"parent": "469005"
		},
		{
			"name": "--",
			"value": "469006--",
			"parent": "469006"
		},
		{
			"name": "--",
			"value": "469007--",
			"parent": "469007"
		},
		{
			"name": "--",
			"value": "469021--",
			"parent": "469021"
		},
		{
			"name": "--",
			"value": "469022--",
			"parent": "469022"
		},
		{
			"name": "--",
			"value": "469023--",
			"parent": "469023"
		},
		{
			"name": "--",
			"value": "469024--",
			"parent": "469024"
		},
		{
			"name": "--",
			"value": "469025--",
			"parent": "469025"
		},
		{
			"name": "--",
			"value": "469026--",
			"parent": "469026"
		},
		{
			"name": "--",
			"value": "469027--",
			"parent": "469027"
		},
		{
			"name": "--",
			"value": "469028--",
			"parent": "469028"
		},
		{
			"name": "--",
			"value": "469029--",
			"parent": "469029"
		},
		{
			"name": "--",
			"value": "469030--",
			"parent": "469030"
		}
	];

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (value, list) {
		var rs = map(value, function (one, index) {
			return find(list, function (item) {
				return item.value === one;
			});
		});
		return map(rs, function (one) {
			return one.name;
		}).join(' ').replace('--', '');
	};

	/**
	 * Created by Alex on 16/8/30.
	 */

	var map = __webpack_require__(306);
	var find = __webpack_require__(307);

/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = function (xs, f) {
	    if (xs.map) return xs.map(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        var x = xs[i];
	        if (hasOwn.call(xs, i)) res.push(f(x, i, xs));
	    }
	    return res;
	};

	var hasOwn = Object.prototype.hasOwnProperty;


/***/ },
/* 307 */
/***/ function(module, exports) {

	'use strict';

	function find(array, predicate, context) {
	  if (typeof Array.prototype.find === 'function') {
	    return array.find(predicate, context);
	  }

	  context = context || this;
	  var length = array.length;
	  var i;

	  if (typeof predicate !== 'function') {
	    throw new TypeError(predicate + ' is not a function');
	  }

	  for (i = 0; i < length; i++) {
	    if (predicate.call(context, array[i], i, array)) {
	      return array[i];
	    }
	  }
	}

	module.exports = find;


/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<group>\n    <x-input :title=\"title\"\n             type=\"text\"\n             :value.sync=\"value\"\n             v-if=\"type == 1\">\n\n    </x-input>\n\n    <radio v-if=\"type == 2\"\n           :options=\"radio001\"\n           :value.sync=\"value\"\n           @on-change=\"change\">\n\n    </radio>\n\n    <address v-if=\"type == 3\"\n             :title=\"title\"\n             :value.sync=\"value\"\n             raw-value\n             :list=\"addressData\"\n             hide-district>\n\n    </address>\n</group>\n\n<group>\n\n    <x-button type=\"primary\"\n              @click=\"update\"\n    >\n        确认修改\n    </x-button>\n\n</group>\n\n<loading :show=\"show\"></loading>\n\n<toast type=\"text\" :show.sync=\"show1\" width=\"20em\">请求失败，请重试</toast>\n</div>\n";

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(310)
	__vue_script__ = __webpack_require__(311)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/comment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(316)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6c406680/comment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 310 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _avatarItem = __webpack_require__(44);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _commentList = __webpack_require__(312);

	var _commentList2 = _interopRequireDefault(_commentList);

	var _loading = __webpack_require__(111);

	var _loading2 = _interopRequireDefault(_loading);

	var _Image = __webpack_require__(140);

	var _Image2 = _interopRequireDefault(_Image);

	var _activityGetter = __webpack_require__(57);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	var _activityAction = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<scroller lock-x v-ref:scroller>
	// 		<div>
	// 			<div class="mz-item-cover">
	// 				<avatar-item :avatar-url="info.user_avatar" :name="info.user_name">
	// 					<h4>{{info.activity_title}}</h4>
	// 					<p>{{info.text}}</p>
	// 					<image-item :src="info.image_url"></image-item>
	// 					<span v-if="info.signin_time">{{info.signin_time| friendlyTime}}</span>
	//
	// 				</avatar-item>
	// 			</div>
	//
	// 			<div class="mz-comment-title-bar">
	// 				<span>评论 {{info.comment_count}}</span>
	// 				<div>
	// 					<i class="mz-icon-large mz-icon-good" style="margin-right: 20px"  :class="{'mz-checked': checked}" @click="toggle">赞</i>
	// 					<i class="mz-icon-large mz-icon-write" @click="comment">写评论</i>
	// 				</div>
	// 			</div>
	// 			<div style="background: #fff">
	// 				<loader v-ref:loading
	// 				        @on-refresh="query">
	// 				</loader>
	//
	// 				<comment-list v-for="item in items.commentList"
	// 				              :name="item.user_name"
	// 				              :src="item.src"
	// 				              :content="item.text | newLine"
	// 											v-if="items">
	// 				</comment-list>
	// 			</div>
	//
	// 		</div>
	// 	</scroller>
	// </template>
	//
	// <style>
	// .mz-comment-title-bar{
	// 	margin-top: 10px;
	// 	padding: 12px;
	// 	background: #fff;
	// 	font-size: 1.4rem;
	// 	font-weight: 400;
	// }
	// .mz-state{
	// 	background: #fff;
	// 	padding: 0 13px;
	// 	border-top:1px solid #e3e3e3;
	// }
	// .mz-comment-title-bar{
	// 	display: flex;
	// 	justify-content: space-between;
	// 	border-bottom: 1px solid #e3e3e3;
	// }
	// .mz-icon-write:before{
	// 	content:'\e906';
	// 	padding-right: 6px;
	// }
	// .mz-icon-large{
	// 	font-family: "MOZI";
	// 	display: inline-block;
	// 	font-style: normal;
	// 	font-size: 1.4rem;
	// 	color: #666;
	// }
	// .mz-checked.mz-icon-large{
	// 	color:#FE7F85;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			avatarItem: _avatarItem2.default,
			commentList: _commentList2.default,
			loader: _loading2.default,
			imageItem: _Image2.default,
			scroller: _index2.default
		},
		vuex: {
			getters: {
				info: _activityGetter.getSignInfo,
				items: _activityGetter.getLastCommentInfo
			},
			actions: {
				setLastCommentInfo: _activityAction.setLastCommentInfo
			}
		},
		route: {
			data: function data(_ref) {
				var _ref$to$params = _ref.to.params;
				var activityId = _ref$to$params.activityId;
				var signId = _ref$to$params.signId;

				this.activityId = activityId;
				this.signId = signId;
			}
		},
		data: function data() {
			return {
				checked: false
			};
		},
		methods: {
			query: function query() {
				var _self = this;
				_self.$refs.loading.OnLoading();
				_activityService2.default.getMessageList(this.activityId, this.signId).then(function (data) {
					_self.setLastCommentInfo(_self.info, data.data.list, _self.activityId, _self.signId);
					if (data.data.list.length === 0) {
						_self.$refs.loading.OnEmpty();
					} else {
						_self.$refs.loading.OnHide();
					}
				}).catch(function (err) {
					console.log(err);
					_self.$refs.loading.OnError();
				});
			},
			toggle: function toggle() {
				if (!this.checked) {
					_activityService2.default.ZAN(this.activityId, this.signId);
					this.checked = !this.checked;
				}
			},
			comment: function comment() {
				this.$router.go({ name: 'publish' });
			}
		},
		ready: function ready() {
			this.checked = this.info.my_agree === 1 ? true : false;
			if (this.activityId === this.items.activityId && this.signId === this.items.signId && this.items.commentList && this.items.commentList.length > 0) {
				this.query();
			} else {
				this.setLastCommentInfo(this.info, [], this.activityId, this.signId);
				this.query();
			}
		},
		watch: {
			items: function items() {
				var _this = this;

				this.$nextTick(function () {
					_this.$refs.scroller.reset();
				});
			}
		}
	};
	// </script>

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(313)
	__vue_script__ = __webpack_require__(314)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/list/commentList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(315)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1559b203/commentList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 313 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 314 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-comment-list">
	// 		<img :src="src">
	// 		<div class="mz-comment-item">
	// 			<div class="mz-comment-name">{{name}}</div>
	// 			<div v-html="toHtml(content)"></div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style>
	// .mz-comment-list{
	// 	position: relative;
	// 	padding: 10px 12px;
	// 	display: flex;
	// 	background: #fff;
	// 	border-bottom:1px solid #e3e3e3;
	// }
	// .mz-comment-list img{
	// 	display: block;
	// 	width: 34px;
	// 	height: 34px;
	// 	margin-right: 12px;
	//
	// }
	// .mz-comment-item{
	// 	flex: 1;
	// }
	// .mz-comment-name{
	// 	font-weight: 400px;
	// }
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			name: String,
			content: String
		},
		methods: {
			toHtml: function toHtml(str) {
				var regRN = /\r/g;
				return str.replace(regRN, "<br />");
			}
		}
	};
	// </script>

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-comment-list\">\n\t<img :src=\"src\">\n\t<div class=\"mz-comment-item\">\n\t\t<div class=\"mz-comment-name\">{{name}}</div>\n\t\t<div v-html=\"toHtml(content)\"></div>\n\t</div>\n</div>\n";

/***/ },
/* 316 */
/***/ function(module, exports) {

	module.exports = "\n<scroller lock-x v-ref:scroller>\n\t<div>\n\t\t<div class=\"mz-item-cover\">\n\t\t\t<avatar-item :avatar-url=\"info.user_avatar\" :name=\"info.user_name\">\n\t\t\t\t<h4>{{info.activity_title}}</h4>\n\t\t\t\t<p>{{info.text}}</p>\n\t\t\t\t<image-item :src=\"info.image_url\"></image-item>\n\t\t\t\t<span v-if=\"info.signin_time\">{{info.signin_time| friendlyTime}}</span>\n\n\t\t\t</avatar-item>\n\t\t</div>\n\n\t\t<div class=\"mz-comment-title-bar\">\n\t\t\t<span>评论 {{info.comment_count}}</span>\n\t\t\t<div>\n\t\t\t\t<i class=\"mz-icon-large mz-icon-good\" style=\"margin-right: 20px\"  :class=\"{'mz-checked': checked}\" @click=\"toggle\">赞</i>\n\t\t\t\t<i class=\"mz-icon-large mz-icon-write\" @click=\"comment\">写评论</i>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"background: #fff\">\n\t\t\t<loader v-ref:loading\n\t\t\t        @on-refresh=\"query\">\n\t\t\t</loader>\n\n\t\t\t<comment-list v-for=\"item in items.commentList\"\n\t\t\t              :name=\"item.user_name\"\n\t\t\t              :src=\"item.src\"\n\t\t\t              :content=\"item.text | newLine\"\n\t\t\t\t\t\t\t\t\t\tv-if=\"items\">\n\t\t\t</comment-list>\n\t\t</div>\n\n\t</div>\n</scroller>\n";

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(318)
	__vue_script__ = __webpack_require__(319)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/publish.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(320)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6b8785a0/publish.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 318 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(261);

	var _index2 = _interopRequireDefault(_index);

	var _textarea = __webpack_require__(182);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _button = __webpack_require__(132);

	var _button2 = _interopRequireDefault(_button);

	var _activityService = __webpack_require__(136);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _activityAction = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				content: ''
			};
		},
		components: {
			group: _index2.default,
			xTextarea: _textarea2.default,
			tButton: _button2.default
		},
		vuex: {
			actions: {
				pushLastCommentSign: _activityAction.pushLastCommentSign
			}
		},
		route: {
			data: function data(_ref) {
				var _ref$to$params = _ref.to.params;
				var activityId = _ref$to$params.activityId;
				var signId = _ref$to$params.signId;

				this.activityId = activityId;
				this.signId = signId;
			}
		},
		methods: {
			submit: function submit() {
				var _self = this;
				if (this.content.length > 0) {
					this.$dispatch('loading');
					_activityService2.default.commit(this.activityId, this.signId, this.content).then(function (data) {
						_self.$dispatch('loading');
						if (data.data.result === 0) {
							_self.pushLastCommentSign(data.data);
							_self.$dispatch('success', '评论成功');
							window.history.back();
						} else {
							_self.$dispatch('error', '评论失败');
						}
					}).catch(function (err) {
						_self.$dispatch('loading');
						if (err.status === 400) {
							_self.$dispatch('error', err.data.error_message);
						} else if (err.status === 0) {
							_self.$dispatch('error', '请求超时请重试');
						} else {
							_self.$dispatch('error', '内容错误请重试');
						}
					});
				}
			}
		}
	};
	// </script>
	// <template>
	// 	<group>
	// 		<x-textarea :max="200" placeholder="请输入评论内容" :value.sync="content"></x-textarea>
	// 	</group>
	//
	// 	<div style="margin-top: 30px">
	// 		<t-button full type="success" @click="submit">发表评论</t-button>
	// 	</div>
	//
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>

/***/ },
/* 320 */
/***/ function(module, exports) {

	module.exports = "\n<group>\n\t<x-textarea :max=\"200\" placeholder=\"请输入评论内容\" :value.sync=\"content\"></x-textarea>\n</group>\n\n<div style=\"margin-top: 30px\">\n\t<t-button full type=\"success\" @click=\"submit\">发表评论</t-button>\n</div>\n\n";

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(322)
	__vue_script__ = __webpack_require__(323)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(324)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2faeaaa0/text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 322 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 323 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div v-for="a in list">
	// 		{{a}}
	// 	</div>
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>
	var list = [];
	for (var a = 0; a < 100; a++) {
		list.push(a);
	}
	exports.default = {
		data: function data() {
			return {
				list: list
			};
		}
	};
	// </script>

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = "\n<div v-for=\"a in list\">\n\t{{a}}\n</div>\n";

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(326)
	__vue_script__ = __webpack_require__(327)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(339)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d0246b0e/abstract.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 326 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(58);

	var _store2 = _interopRequireDefault(_store);

	var _userAction = __webpack_require__(254);

	var _activityGetter = __webpack_require__(57);

	var _weixinService = __webpack_require__(328);

	var _index = __webpack_require__(138);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(137);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(329);

	var _index6 = _interopRequireDefault(_index5);

	var _tips = __webpack_require__(330);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		store: _store2.default,
		components: {
			tips: _tips2.default,
			loading: _index2.default
		},
		vuex: {
			actions: {
				userUpInfoQuery: _userAction.userUpInfoQuery,
				childInfoQuery: _userAction.childInfoQuery
			},
			getters: {
				direction: _activityGetter.getDirection
			}
		},
		ready: function ready() {
			(0, _weixinService.jssdkConfigInit)(false, ['uploadImage', 'chooseImage', 'previewImage']);
			this.userUpInfoQuery();
		},
		events: {
			loading: function loading(message) {
				this.$refs.tips.toggleLoading(message);
			},

			error: function error(message) {
				this.$refs.tips.toggleAlert(message);
			},

			success: function success(message) {
				this.$refs.tips.toggleToast(message);
			},

			confirm: function confirm(title, message, callback) {
				this.$refs.tips.setTitle(title);
				this.$refs.tips.toggleConfirm(message, callback);
			}
		}
	};
	// </script>
	// <template>
	// 	<div>
	//
<<<<<<< HEAD
	// 		<router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
	// 					 transition-model="out-in"
	// 					 keep-alive
	// 		>
=======
	// 		<router-view>
>>>>>>> 6f50f2127bf0302eb0bb3ed1258d5074fafd7158
	// 		</router-view>
	//
	// 		<tips v-ref:tips></tips>
	// 	</div>
	// </template>
	//
	// <style>
	// 	html,body{
	// 		font-size: 10px;
	// 		height: 100%;
	// 		position: relative;
	// 		margin: 0;
	// 		padding: 0;
	// 		background: #fff7e6;
	// 		overflow: hidden;
	// 	}
	// 	@font-face {
	// 		font-family: 'MOZI';
	// 		src: url('/font/icomoon.eot');
	// 		src: url('/font/icomoon.eot?#iefix') format('embedded-opentype'),
	// 		url('/font/icomoon.woff') format('woff'),
	// 		url('/font/icomoon.ttf') format('truetype'),
	// 		url('/font/icomoon.svg#Taidii') format('svg');
	// 		font-weight: normal;
	// 		font-style: normal;
	// 	}
	// 	/*.vux-pop-out-transition,*/
	// 	/*.vux-pop-in-transition {*/
	// 		/*width: 100%;*/
	// 		/*animation-duration: 0.5s;*/
	// 		/*animation-fill-mode: both;*/
	// 		/*backface-visibility: hidden;*/
	// 	/*}*/
	// 	/*.vux-pop-out-enter,*/
	// 	/*.vux-pop-out-leave,*/
	// 	/*.vux-pop-in-enter,*/
	// 	/*.vux-pop-in-leave {*/
	// 		/*will-change: transform;*/
	// 		/*height: 100%;*/
	// 		/*position: absolute;*/
	// 		/*left: 0;*/
	// 	/*}*/
	// 	/*.vux-pop-out-enter {*/
	// 		/*animation-name: popInLeft;*/
	// 	/*}*/
	// 	/*.vux-pop-out-leave {*/
	// 		/*animation-name: popOutRight;*/
	// 	/*}*/
	// 	/*.vux-pop-in-enter {*/
	// 		/*perspective: 1000;*/
	// 		/*animation-name: popInRight;*/
	// 	/*}*/
	// 	/*.vux-pop-in-leave {*/
	// 		/*animation-name: popOutLeft;*/
	// 	/*}*/
	// 	/*@keyframes popInLeft {*/
	// 		/*from {*/
	// 			/*transform: translate3d(-100%, 0, 0);*/
	// 		/*}*/
	// 		/*to {*/
	// 			/*transform: translate3d(0, 0, 0);*/
	// 		/*}*/
	// 	/*}*/
	// 	/*@keyframes popOutLeft {*/
	// 		/*from {*/
	// 			/*transform: translate3d(0, 0, 0);*/
	// 		/*}*/
	// 		/*to {*/
	// 			/*transform: translate3d(-100%, 0, 0);*/
	// 		/*}*/
	// 	/*}*/
	// 	/*@keyframes popInRight {*/
	// 		/*from {*/
	// 			/*transform: translate3d(100%, 0, 0);*/
	// 		/*}*/
	// 		/*to {*/
	// 			/*transform: translate3d(0, 0, 0);*/
	// 		/*}*/
	// 	/*}*/
	// 	/*@keyframes popOutRight {*/
	// 		/*from {*/
	// 			/*transform: translate3d(0, 0, 0);*/
	// 		/*}*/
	// 		/*to {*/
	// 			/*transform: translate3d(100%, 0, 0);*/
	// 		/*}*/
	// 	/*}*/
	// </style>
	//
	// <script>

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.jssdkConfigInit = undefined;

	var _user = __webpack_require__(255);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var jssdkConfigInit = exports.jssdkConfigInit = function jssdkConfigInit(debug, jsApiList) {
		return _user2.default.API_GET_JSSDK_CONFIG(debug, jsApiList).then(function (data) {
			window.wx.config(data.data);
		}, function () {
			_user2.default.API_GET_JSSDK_CONFIG(debug, jsApiList).then(function (data) {
				window.wx.config(data.data);
			});
		});
	}; /**
	    * Created by Alex on 16/8/21.
	    */

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxConfirm=o():t.vuxConfirm=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(7)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(8),s=i(n);o["default"]={components:{Dialog:s["default"]},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,"default":"confirm"},cancelText:{type:String,"default":"cancel"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){},function(t,o){},function(t,o){t.exports='<dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog>'},function(t,o){t.exports='<div class=weui_dialog_alert v-show=show :transition=maskTransition @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)"></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(t,o,e){var i,n;e(3),i=e(1),n=e(5),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var i,n;e(4),i=e(2),n=e(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(331)
	__vue_script__ = __webpack_require__(332)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/tips/tips.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(338)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-83183430/tips.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 331 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(286);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(138);

	var _index4 = _interopRequireDefault(_index3);

	var _toast = __webpack_require__(333);

	var _toast2 = _interopRequireDefault(_toast);

	var _index5 = __webpack_require__(329);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import toast from '../../../node_modules/vux/src/components/toast/index.vue'
	// <template>
	//
	// 	<!--提示框 start-->
	// 	<alert :show.sync="alertLayer" button-text="知道了" :title="title">{{alertMessage}}</alert>
	//
	// 	<loading :show="loadingLayer" text="数据提交中"></loading>
	//
	// 	<toast :show.sync="toastLayer" :time="1000">{{toastMessage}}</toast>
	//
	// 	<confirm :show.sync="confirmLayer" cancel-text="取消" confirm-text="确定" :title="title" @on-confirm="confirm">{{confirmMessage}}</confirm>
	// 	<!--提示框 end-->
	//
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			alert: _index2.default,
			loading: _index4.default,
			toast: _toast2.default,
			confirm: _index6.default
		},
		data: function data() {
			return {
				toastMessage: '', //提示信息(成功)
				alertMessage: '', //提示信息(失败)
				confirmMessage: '', //确认信息
				confirmLayer: false, //确认框
				alertLayer: false, //提示框(失败)
				toastLayer: false, //提示框(成功)
				loadingLayer: false, //loading
				title: '',
				confirm: {}
			};
		},
		methods: {
			toggleAlert: function toggleAlert(message) {
				this.alertMessage = message;
				this.alertLayer = !this.alertLayer;
			},
			toggleConfirm: function toggleConfirm(message, callback) {
				this.confirmMessage = message;
				this.confirmLayer = !this.confirmLayer;
				this.confirm = callback;
			},
			toggleToast: function toggleToast(message) {
				this.toastMessage = message;
				this.toastLayer = !this.toastLayer;
			},
			toggleLoading: function toggleLoading() {
				this.loadingLayer = !this.loadingLayer;
			},
			setTitle: function setTitle(title) {
				this.title = title;
			}
		}
	};
	// </script>

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(334)
	__vue_script__ = __webpack_require__(336)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/tips/toast.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(337)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-698c2427/toast.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(335);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(186)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toast.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toast.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(185)();
	// imports


	// module
	exports.push([module.id, ".vux-fade-transition {\n  opacity: 1;\n  -webkit-transition: opacity linear 0.2s;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter,\n.vux-fade-leave {\n  opacity: 0;\n}\n.vux-dialog-transition {\n  opacity: 1;\n  -webkit-transition-duration: .4s;\n          transition-duration: .4s;\n  -webkit-transform: translate(-50%, -50%) scale(1) !important;\n          transform: translate(-50%, -50%) scale(1) !important;\n  -webkit-transition-property: opacity, -webkit-transform!important;\n  transition-property: opacity, -webkit-transform!important;\n  transition-property: transform, opacity!important;\n  transition-property: transform, opacity, -webkit-transform!important;\n}\n.vux-dialog-enter,\n.vux-dialog-leave {\n  opacity: 0;\n}\n.vux-dialog-enter {\n  -webkit-transform: translate(-50%, -50%) scale(1.185) !important;\n          transform: translate(-50%, -50%) scale(1.185) !important;\n}\n.vux-dialog-leave {\n  -webkit-transform: translate(-50%, -50%) scale(1) !important;\n          transform: translate(-50%, -50%) scale(1) !important;\n}\n.weui_mask {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.weui_mask_transition {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  -webkit-transition: background .3s;\n  transition: background .3s;\n}\n.weui_fade_toggle {\n  background: rgba(0, 0, 0, 0.6);\n}\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"weui\";\n  src: url('data:application/octet-stream;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJAKEx1AAABfAAAAFZjbWFw64JcfgAAAhQAAAI0Z2x5ZvCBJt8AAARsAAAHLGhlYWQIuM5WAAAA4AAAADZoaGVhCC0D+AAAALwAAAAkaG10eDqYAAAAAAHUAAAAQGxvY2EO3AzsAAAESAAAACJtYXhwAR4APgAAARgAAAAgbmFtZeNcHtgAAAuYAAAB5nBvc3RP98ExAAANgAAAANYAAQAAA+gAAABaA+gAAP//A+kAAQAAAAAAAAAAAAAAAAAAABAAAQAAAAEAAKZXmK1fDzz1AAsD6AAAAADS2MTEAAAAANLYxMQAAAAAA+kD6QAAAAgAAgAAAAAAAAABAAAAEAAyAAQAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQOqAZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6gHqDwPoAAAAWgPpAAAAAAABAAAAAAAAAAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAAAAAUAAAADAAAALAAAAAQAAAFwAAEAAAAAAGoAAwABAAAALAADAAoAAAFwAAQAPgAAAAQABAABAADqD///AADqAf//AAAAAQAEAAAAAQACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAMQAAAAAAAAADwAA6gEAAOoBAAAAAQAA6gIAAOoCAAAAAgAA6gMAAOoDAAAAAwAA6gQAAOoEAAAABAAA6gUAAOoFAAAABQAA6gYAAOoGAAAABgAA6gcAAOoHAAAABwAA6ggAAOoIAAAACAAA6gkAAOoJAAAACQAA6goAAOoKAAAACgAA6gsAAOoLAAAACwAA6gwAAOoMAAAADAAA6g0AAOoNAAAADQAA6g4AAOoOAAAADgAA6g8AAOoPAAAADwAAAAAALgBmAKIA3gEaAV4BtgHkAgoCRgKIAtIDFANOA5YAAAACAAAAAAOvA60ACwAXAAABDgEHHgEXPgE3LgEDLgEnPgE3HgEXDgEB9bz5BQX5vLv5BQX5u6zjBQXjrKvjBQXjA60F+by7+gQE+ru8+fy0BOSrq+QEBOSrq+QAAAIAAAAAA7MDswALACEAAAEOAQceARc+ATcuAQMHBiIvASY2OwERNDY7ATIWFREzMhYB7rn7BQX7ucL+BQX+JHYPJg92DgwYXQsHJggKXRgMA7MF/sK5+wUF+7nC/v31mhISmhIaARcICwsI/ukaAAADAAAAAAOtA6sACwAZACIAAAEOAQceARc+ATcuAQMUBisBIiY1ETY3MxYXJy4BNDYyFhQGAfC49gUF9ri++gUF+poKBxwHCgEILAgBHxMZGSYZGQOrBfq+uPYFBfa4vvr9dQcKCgcBGggBAQg5ARklGRklGQAAAAACAAAAAAOSA8IADQAfAAABDgEHERYEFzYkNxEuARMBBi8BJj8BNh8BFjclNh8BFgH0gchUCQEDkZEBAwlUyHr+vwQDlAMCFQMDegMEAScEAxMDA8IePRz+w9TwJCTw1AE9HD3+3f7DAgOZBAMcBANdAgL2AwMTBAADAAAAAAOCA7AADQAZACIAAAEOAQcRHgEXPgE3ES4BBzMWFQcGByMmLwE0EyImNDYyFhQGAfV7wVEJ+YuL+QlRwZIuCQoBBCIEAQogDhISHBISA7AdOxr+z8vnIyPnywExGjv3AQjYBAEBBNgI/rETHBISHBMAAAACAAAAAAO9A70AFwAjAAABLgE/AT4BHwEWMjclNhYXJxYUBwEGJiclJgAnBgAHFgAXNgABIAUCBQMFEAdiBxIGARMHEQYCBgb+0AYQBgIcBf79x77/AAUFAQC+xwEDAccGEQcEBwIFTAQF5QYBBgIGEAb+1QYBBqzHAQMFBf79x77/AAUFAQAABAAAAAADrwOtAAsAFwAtADEAAAEOAQceARc+ATcuAQMuASc+ATceARcOARMFDgEvASYGDwEGFh8BFjI3AT4BJiIXFjEXAfW8+QUF+by7+QUF+bus4wUF46yr4wUF4yv+9gcRBmAGDwUDBQEGfQUQBgElBQELDxQBAQOtBfm8u/oEBPq7vPn8tATkq6vkBATkq6vkAiLdBQEFSQUCBgQHEQaABgUBIQUPCwQBAQAAAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUIGQzLDSALAh0MHgsNCgr9uQscCwGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAIAAAAAA7gDuAALABEAAAEGAgceARc2JDcmABMhETMRMwHuvP0FBf28xQEABQX/ADr+2i35A7gF/wDFvP0FBf28xQEA/d4BTv7fAAAEAAAAAAOvA60AAwAPABsAIQAAARYxFwMOAQceARc+ATcuAQMuASc+ATceARcOAQMjFTM1IwLlAQHyvPkFBfm8u/kFBfm7rOMFBeOsq+MFBePZJP3ZAoMBAQEsBfm8u/oEBPq7vPn8tATkq6vkBATkq6vkAi39JAADAAAAAAPDA8MACwAbACQAAAEGAAcWABc2ADcmAAczMhYVAw4BKwEiJicDNDYTIiY0NjIWFAYB7sD+/AUFAQTAyQEHBQX++d42CAoOAQUEKgQFAQ4KIxMaGiYaGgPDBf75ycD+/AUFAQTAyQEH5woI/tMEBgYEASwIC/4oGicZGScaAAAEAAAAAAPAA8AACAASAB4AKgAAAT4BNCYiBhQWFyMVMxEjFTM1IwMGAAcWBBc+ATcmAgMuASc+ATceARcOAQH0GCEhMCEhUY85Ock6K83++AQEAQjNuf8FBf/Hq+MEBOOrq+MEBOMCoAEgMSAgMSA6Hf7EHBwCsQT++M25/wUF/7nNAQj8pwTjq6vjBATjq6vjAAAAAwAAAAADpwOnAAsAFwAjAAABBycHFwcXNxc3JzcDDgEHHgEXPgE3LgEDLgEnPgE3HgEXDgECjpqaHJqaHJqaHJqatrn1BQX1ubn1BQX1uajfBATfqKjfBATfAqqamhyamhyamhyamgEZBfW5ufUFBfW5ufX8xwTfqKjfBATfqKjfAAAAAwAAAAAD6QPpABEAHQAeAAABDgEjLgEnPgE3HgEXFAYHAQcBPgE3LgEnDgEHHgEXAo41gEmq4gQE4qqq4gQvKwEjOf3giLUDA7WIiLUDBLSIASMrLwTiqqriBATiqkmANP7dOQEZA7WIiLUDA7WIiLUDAAACAAAAAAPoA+gACwAnAAABBgAHFgAXNgA3JgADFg4BIi8BBwYuATQ/AScmPgEyHwE3Nh4BFA8BAfTU/uUFBQEb1NQBGwUF/uUDCgEUGwqiqAobEwqoogoBFBsKoqgKGxMKqAPoBf7l1NT+5QUFARvU1AEb/WgKGxMKqKIKARQbCqKoChsTCqiiCgEUGwqiAAAAABAAxgABAAAAAAABAAQAAAABAAAAAAACAAcABAABAAAAAAADAAQACwABAAAAAAAEAAQADwABAAAAAAAFAAsAEwABAAAAAAAGAAQAHgABAAAAAAAKACsAIgABAAAAAAALABMATQADAAEECQABAAgAYAADAAEECQACAA4AaAADAAEECQADAAgAdgADAAEECQAEAAgAfgADAAEECQAFABYAhgADAAEECQAGAAgAnAADAAEECQAKAFYApAADAAEECQALACYA+ndldWlSZWd1bGFyd2V1aXdldWlWZXJzaW9uIDEuMHdldWlHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQB3AGUAdQBpAFIAZQBnAHUAbABhAHIAdwBlAHUAaQB3AGUAdQBpAFYAZQByAHMAaQBvAG4AIAAxAC4AMAB3AGUAdQBpAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERAAZjaXJjbGUIZG93bmxvYWQEaW5mbwxzYWZlX3N1Y2Nlc3MJc2FmZV93YXJuB3N1Y2Nlc3MOc3VjY2Vzc19jaXJjbGURc3VjY2Vzc19ub19jaXJjbGUHd2FpdGluZw53YWl0aW5nX2NpcmNsZQR3YXJuC2luZm9fY2lyY2xlBmNhbmNlbAZzZWFyY2gFY2xvc2UAAAAA') format('truetype');\n}\n[class^=\"weui_icon_\"]:before,\n[class*=\" weui_icon_\"]:before {\n  font-family: \"weui\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  vertical-align: middle;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n.weui_icon_circle:before {\n  content: \"\\EA01\";\n}\n/* '' */\n.weui_icon_download:before {\n  content: \"\\EA02\";\n}\n/* '' */\n.weui_icon_info:before {\n  content: \"\\EA03\";\n}\n/* '' */\n.weui_icon_safe_success:before {\n  content: \"\\EA04\";\n}\n/* '' */\n.weui_icon_safe_warn:before {\n  content: \"\\EA05\";\n}\n/* '' */\n.weui_icon_success:before {\n  content: \"\\EA06\";\n}\n/* '' */\n.weui_icon_success_circle:before {\n  content: \"\\EA07\";\n}\n/* '' */\n.weui_icon_success_no_circle:before {\n  content: \"\\EA08\";\n}\n/* '' */\n.weui_icon_waiting:before {\n  content: \"\\EA09\";\n}\n/* '' */\n.weui_icon_waiting_circle:before {\n  content: \"\\EA0A\";\n}\n/* '' */\n.weui_icon_warn:before {\n  content: \"\\EA0B\";\n}\n/* '' */\n.weui_icon_info_circle:before {\n  content: \"\\EA0C\";\n}\n/* '' */\n.weui_icon_cancel:before {\n  content: \"\\EA0D\";\n}\n/* '' */\n.weui_icon_search:before {\n  content: \"\\EA0E\";\n}\n/* '' */\n.weui_icon_clear:before {\n  content: \"\\EA0F\";\n}\n/* '' */\n[class^=\"weui_icon_\"]:before,\n[class*=\" weui_icon_\"]:before {\n  margin: 0;\n}\n.weui_icon_success:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_waiting:before {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui_icon_warn:before {\n  font-size: 23px;\n  color: #F43530;\n}\n.weui_icon_info:before {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui_icon_success_circle:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_success_no_circle:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_waiting_circle:before {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui_icon_circle:before {\n  font-size: 23px;\n  color: #C9C9C9;\n}\n.weui_icon_download:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_info_circle:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_safe_success:before {\n  color: #09BB07;\n}\n.weui_icon_safe_warn:before {\n  color: #FFBE00;\n}\n.weui_icon_cancel:before {\n  color: #F43530;\n  font-size: 22px;\n}\n.weui_icon_search:before {\n  color: #B2B2B2;\n  font-size: 14px;\n}\n.weui_icon_clear:before {\n  color: #B2B2B2;\n  font-size: 14px;\n}\n.weui_icon_msg:before {\n  font-size: 104px;\n}\n.weui_icon_warn.weui_icon_msg:before {\n  color: #F76260;\n}\n.weui_icon_safe:before {\n  font-size: 104px;\n}\n.weui_toast {\n  position: fixed;\n  z-index: 50000;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n.weui_icon_toast {\n  margin: 22px 0 0;\n  display: block;\n}\n.weui_icon_toast:before {\n  content: '\\EA08';\n  color: #FFFFFF;\n  font-size: 55px;\n}\n.weui_toast_content {\n  margin: 0 0 15px;\n}\n.weui_loading_toast .weui_toast_content {\n  margin-top: 64%;\n  font-size: 14px;\n}\n.weui_loading {\n  position: absolute;\n  width: 0px;\n  z-index: 1;\n  left: 50%;\n  top: 38%;\n}\n.weui_loading_leaf {\n  position: absolute;\n  top: -1px;\n  opacity: 0.25;\n}\n.weui_loading_leaf:before {\n  content: \" \";\n  position: absolute;\n  width: 8.14px;\n  height: 3.08px;\n  background: #d1d1d5;\n  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n  border-radius: 1px;\n  -webkit-transform-origin: left 50% 0px;\n          transform-origin: left 50% 0px;\n}\n.weui_loading_leaf_0 {\n  -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;\n          animation: opacity-60-25-0-12 1.25s linear infinite;\n}\n.weui_loading_leaf_0:before {\n  -webkit-transform: rotate(0deg) translate(7.92px, 0px);\n          transform: rotate(0deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_1 {\n  -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;\n          animation: opacity-60-25-1-12 1.25s linear infinite;\n}\n.weui_loading_leaf_1:before {\n  -webkit-transform: rotate(30deg) translate(7.92px, 0px);\n          transform: rotate(30deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_2 {\n  -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;\n          animation: opacity-60-25-2-12 1.25s linear infinite;\n}\n.weui_loading_leaf_2:before {\n  -webkit-transform: rotate(60deg) translate(7.92px, 0px);\n          transform: rotate(60deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_3 {\n  -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;\n          animation: opacity-60-25-3-12 1.25s linear infinite;\n}\n.weui_loading_leaf_3:before {\n  -webkit-transform: rotate(90deg) translate(7.92px, 0px);\n          transform: rotate(90deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_4 {\n  -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;\n          animation: opacity-60-25-4-12 1.25s linear infinite;\n}\n.weui_loading_leaf_4:before {\n  -webkit-transform: rotate(120deg) translate(7.92px, 0px);\n          transform: rotate(120deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_5 {\n  -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;\n          animation: opacity-60-25-5-12 1.25s linear infinite;\n}\n.weui_loading_leaf_5:before {\n  -webkit-transform: rotate(150deg) translate(7.92px, 0px);\n          transform: rotate(150deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_6 {\n  -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;\n          animation: opacity-60-25-6-12 1.25s linear infinite;\n}\n.weui_loading_leaf_6:before {\n  -webkit-transform: rotate(180deg) translate(7.92px, 0px);\n          transform: rotate(180deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_7 {\n  -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;\n          animation: opacity-60-25-7-12 1.25s linear infinite;\n}\n.weui_loading_leaf_7:before {\n  -webkit-transform: rotate(210deg) translate(7.92px, 0px);\n          transform: rotate(210deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_8 {\n  -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;\n          animation: opacity-60-25-8-12 1.25s linear infinite;\n}\n.weui_loading_leaf_8:before {\n  -webkit-transform: rotate(240deg) translate(7.92px, 0px);\n          transform: rotate(240deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_9 {\n  -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;\n          animation: opacity-60-25-9-12 1.25s linear infinite;\n}\n.weui_loading_leaf_9:before {\n  -webkit-transform: rotate(270deg) translate(7.92px, 0px);\n          transform: rotate(270deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_10 {\n  -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;\n          animation: opacity-60-25-10-12 1.25s linear infinite;\n}\n.weui_loading_leaf_10:before {\n  -webkit-transform: rotate(300deg) translate(7.92px, 0px);\n          transform: rotate(300deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_11 {\n  -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;\n          animation: opacity-60-25-11-12 1.25s linear infinite;\n}\n.weui_loading_leaf_11:before {\n  -webkit-transform: rotate(330deg) translate(7.92px, 0px);\n          transform: rotate(330deg) translate(7.92px, 0px);\n}\n@-webkit-keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n@-webkit-keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n@-webkit-keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958333333333;\n  }\n}\n.weui_toast {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin-left: 0!important;\n}\n.weui_toast_forbidden {\n  color: #F76260;\n}\n.weui_toast.weui_toast_text {\n  min-height: 0;\n}\n.weui_toast_text .weui_toast_content {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 15px;\n}\n.weui_toast_success .weui_icon_toast:before {\n  content: \"\\EA08\";\n}\n.weui_toast_cancel .weui_icon_toast:before {\n  content: \"\\EA0D\";\n}\n.weui_toast_forbidden .weui_icon_toast:before {\n  content: \"\\EA0B\";\n  color: #F76260;\n}\n", ""]);

	// exports


/***/ },
/* 336 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="vux-toast">
	// 		<!--<div class="weui_mask_transparent" v-show="show"></div>-->
	// 		<div class="weui_toast" :style="{width: width}" :class="toastClass" v-show="show" :transition="transition">
	// 			<i class="weui_icon_toast" v-show="type !== 'text'"></i>
	// 			<p class="weui_toast_content" v-if="text" v-html="text"></p>
	// 			<p class="weui_toast_content" v-else><slot></slot></p>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang="less">
	// 	@import '../../../node_modules/vux/src/styles/transition.less';
	// 	@import '../../../node_modules/vux/src/styles/weui/widget/weui_tips/weui_mask';
	// 	@import '../../../node_modules/vux/src/styles/weui/icon/weui_icon_font';
	// 	@import '../../../node_modules/vux/src/styles/weui/widget/weui_tips/weui_toast';
	//
	// 	.weui_toast {
	// 		transform: translateX(-50%);
	// 		margin-left: 0!important;
	// 	}
	// 	.weui_toast_forbidden {
	// 		color: #F76260;
	// 	}
	// 	.weui_toast.weui_toast_text{
	// 		min-height: 0;
	// 	}
	// 	.weui_toast_text .weui_toast_content {
	// 		margin: 0;
	// 		padding-top: 10px;
	// 		padding-bottom: 10px;
	// 		border-radius: 15px;
	// 	}
	// 	.weui_toast_success .weui_icon_toast:before {
	// 		content: "\EA08";
	// 	}
	// 	.weui_toast_cancel .weui_icon_toast:before {
	// 		content: "\EA0D";
	// 	}
	// 	.weui_toast_forbidden .weui_icon_toast:before {
	// 		content: "\EA0B";
	// 		color: #F76260;
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			time: {
				type: Number,
				default: 2000
			},
			type: {
				type: String,
				default: 'success'
			},
			transition: {
				type: String,
				default: 'vux-fade'
			},
			width: {
				type: String,
				default: '7.6em'
			},
			text: String
		},
		computed: {
			toastClass: function toastClass() {
				return {
					'weui_toast_forbidden': this.type === 'warn',
					'weui_toast_cancel': this.type === 'cancel',
					'weui_toast_success': this.type === 'success',
					'weui_toast_text': this.type === 'text'
				};
			}
		},
		watch: {
			show: function show(val) {
				var _this = this;

				if (val) {
					clearTimeout(this.timeout);
					this.timeout = setTimeout(function () {
						_this.show = false;
						_this.$emit('on-hide');
					}, this.time);
				}
			}
		}
	};
	// </script>

/***/ },
/* 337 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vux-toast\">\n\t<!--<div class=\"weui_mask_transparent\" v-show=\"show\"></div>-->\n\t<div class=\"weui_toast\" :style=\"{width: width}\" :class=\"toastClass\" v-show=\"show\" :transition=\"transition\">\n\t\t<i class=\"weui_icon_toast\" v-show=\"type !== 'text'\"></i>\n\t\t<p class=\"weui_toast_content\" v-if=\"text\" v-html=\"text\"></p>\n\t\t<p class=\"weui_toast_content\" v-else><slot></slot></p>\n\t</div>\n</div>\n";

/***/ },
/* 338 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "\n<div>\n\n\t<router-view :transition=\"'vux-pop-' + (direction === 'forward' ? 'in' : 'out')\"\n\t\t\t\t transition-model=\"out-in\"\n\t\t\t\t keep-alive\n\t>\n\t</router-view>\n\n<tips v-ref:tips></tips>\n</div>\n";
=======
	module.exports = "\n\n<!--提示框 start-->\n<alert :show.sync=\"alertLayer\" button-text=\"知道了\" :title=\"title\">{{alertMessage}}</alert>\n\n<loading :show=\"loadingLayer\" text=\"数据提交中\"></loading>\n\n<toast :show.sync=\"toastLayer\" :time=\"1000\">{{toastMessage}}</toast>\n\n<confirm :show.sync=\"confirmLayer\" cancel-text=\"取消\" confirm-text=\"确定\" :title=\"title\" @on-confirm=\"confirm\">{{confirmMessage}}</confirm>\n<!--提示框 end-->\n\n";
>>>>>>> 6f50f2127bf0302eb0bb3ed1258d5074fafd7158

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n\n\t<router-view>\n\t</router-view>\n\n\t<tips v-ref:tips></tips>\n</div>\n";

/***/ },
/* 340 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (time) {
		var date = typeof time === 'number' ? new Date(time) : new Date((time || '').replace(/-/g, '/'));
		var diff = (new Date().getTime() - date.getTime()) / 1000;
		var dayDiff = Math.floor(diff / 86400);

		var isValidDate = Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());

		if (!isValidDate) {
			console.error('not a valid date');
		}
		var formatDate = function formatDate(date) {
			var today = new Date(date);
			var year = today.getFullYear();
			var month = ('0' + (today.getMonth() + 1)).slice(-2);
			var day = ('0' + today.getDate()).slice(-2);
			var hour = today.getHours();
			var minute = today.getMinutes();
			var second = today.getSeconds();
			return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		};

		if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
			return formatDate(date);
		}

		return dayDiff === 0 && (diff < 60 && '刚刚' || diff < 120 && '1分钟前' || diff < 3600 && Math.floor(diff / 60) + '分钟前' || diff < 7200 && '1小时前' || diff < 86400 && Math.floor(diff / 3600) + '小时前') || dayDiff === 1 && '昨天' || dayDiff < 7 && dayDiff + '天前' || dayDiff < 31 && Math.ceil(dayDiff / 7) + '周前';
	};

/***/ },
/* 341 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (str) {
	  var regRN = /\r\n|\r|\n/g;
	  return str ? str.replace(regRN, "<br />") : '';
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ }
]);