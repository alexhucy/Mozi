webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	var _abstract = __webpack_require__(177);

	var _abstract2 = _interopRequireDefault(_abstract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Alex on 16/8/4.
	 */

	/**
	 * Created by Alex on 16/6/3.
	 */

	var FastClick = __webpack_require__(184);

	FastClick.attach(document.body);

	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default();

	(0, _router2.default)(router);

	router.start(_abstract2.default, '#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _dynamics = __webpack_require__(16);

	var _dynamics2 = _interopRequireDefault(_dynamics);

	var _mysign = __webpack_require__(94);

	var _mysign2 = _interopRequireDefault(_mysign);

	var _billboard = __webpack_require__(114);

	var _billboard2 = _interopRequireDefault(_billboard);

	var _index3 = __webpack_require__(118);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(145);

	var _index6 = _interopRequireDefault(_index5);

	var _info = __webpack_require__(157);

	var _info2 = _interopRequireDefault(_info);

	var _upload = __webpack_require__(169);

	var _upload2 = _interopRequireDefault(_upload);

	var _sign = __webpack_require__(173);

	var _sign2 = _interopRequireDefault(_sign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			'/item/:id/signup': {
				name: 'upload',
				component: _upload2.default
			}
		});

		router.redirect({
			'*': '/'
		});
	}; /**
	    * Created by Alex on 16/8/4.
	    */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
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
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(8);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(9);

	var _index4 = _interopRequireDefault(_index3);

	var _footer = __webpack_require__(10);

	var _footer2 = _interopRequireDefault(_footer);

	var _index5 = __webpack_require__(14);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// <template>
	// 	<tab>
	// 		<tab-item :selected="$route.name == 'dynamics'" v-link="{name:'dynamics'}">一周活动</tab-item>
	// 		<tab-item :selected="$route.name == 'mysign'" v-link="{name:'mysign'}">我的打卡</tab-item>
	// 	</tab>
	//
	//
	// 	<scroller lock-x height="auto" style="position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;" >
	// 		<div>
	// 			<router-view>
	//
	// 			</router-view>
	// 		</div>
	// 	</scroller>
	//
	//
	// 	<foot></foot>
	// </template>
	//
	// <style>
	//  .mz-item h4{
	// 	 font-size: 1.4rem;
	//  }
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			tab: _index2.default,
			tabItem: _index4.default,
			foot: _footer2.default,
			scroller: _index6.default
		}
	};
	// </script>

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxTab=e():t.vuxTab=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e["default"]={mixins:[i.parentMixin],ready:function(){var t=this;setTimeout(function(){t.hasReady=!0},0)},props:{lineWidth:{type:Number,"default":3},activeColor:{type:String,"default":"#04be02"},defaultColor:{type:String,"default":"#666"},animate:{type:Boolean,"default":!0}},computed:{barLeft:function(){return this.index*(100/this.number)+"%"},barRight:function(){return(this.number-this.index-1)*(100/this.number)+"%"},barStyle:function(){return{left:this.barLeft,right:this.barRight,display:"block",backgroundColor:this.activeColor,height:this.lineWidth+"px",transition:this.hasReady?null:"none"}},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{index:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].index=e,t[e].selected&&(this.index=e)}}},props:{index:{type:Number,"default":0}},watch:{index:function(t,e){this.$children[e].selected=!1,this.$children[t].selected=!0}},data:function(){return{number:this.$children.length}}},i={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(t){t&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};e.parentMixin=n,e.childMixin=i},function(t,e){},function(t,e){t.exports="<div class=vux-tab :class=\"{'vux-tab-no-animate': !animate}\"> <slot></slot> <div v-if=animate class=vux-tab-ink-bar :class=barClass :style=barStyle></div> </div>"},function(t,e,n){var i,r;n(3),i=n(1),r=n(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxTabItem=t():e.vuxTabItem=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t["default"]={mixins:[i.childMixin],props:{activeClass:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.selected?this.$parent.activeColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].index=t,e[t].selected&&(this.index=t)}}},props:{index:{type:Number,"default":0}},watch:{index:function(e,t){this.$children[t].selected=!1,this.$children[e].selected=!0}},data:function(){return{number:this.$children.length}}},i={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(e){e&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};t.parentMixin=n,t.childMixin=i},function(e,t){e.exports="<div class=vux-tab-item :class=\"[selected ? activeClass : '', {'vux-tab-selected': selected}]\" :style=style @click=onItemClick> <slot></slot> </div>"},function(e,t,n){var i,o;i=n(1),o=n(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}])});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
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
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-footer\">\n\t<span v-link=\"{name:'center'}\">个人中心</span>\n</div>\n";

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n\n<tab>\n\t<tab-item :selected=\"$route.name == 'dynamics'\" v-link=\"{name:'dynamics'}\">一周活动</tab-item>\n\t<tab-item :selected=\"$route.name == 'mysign'\" v-link=\"{name:'mysign'}\">我的打卡</tab-item>\n</tab>\n\n\n<scroller lock-x height=\"auto\" style=\"position:absolute;top: 44px;bottom: 60px;right:0px;left:0px;\" >\n\t<div>\n\t\t<router-view>\n\n\t\t</router-view>\n\t</div>\n</scroller>\n\n\n<foot></foot>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/dynamics.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(93)
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
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _dynamicsCard = __webpack_require__(19);

	var _dynamicsCard2 = _interopRequireDefault(_dynamicsCard);

	var _activityGetter = __webpack_require__(39);

	var _activityAction = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			card: _dynamicsCard2.default
		},
		vuex: {
			actions: {
				activityListQuery: _activityAction.activityListQuery
			},
			getters: {
				items: _activityGetter.getActivityList
			}
		},
		ready: function ready() {
			this.activityListQuery();
		}
	};
	// </script>
	//
	// <template>
	// 	<card v-for="item in items" :title="item.title"
	// 				:time-range="item.start_time+' —— '+item.end_time"
	// 				:number="item.signup_number"
	// 		  		:money="item.deposit"
	// 		  		:course="item.course_desc"
	// 		  		:id="item.activity_id"
	// 	>
	// 	</card>
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/dynamicsCard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
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
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBottomShadow = __webpack_require__(22);

	var _boxWithBottomShadow2 = _interopRequireDefault(_boxWithBottomShadow);

	var _avatarItem = __webpack_require__(26);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _iconItem = __webpack_require__(30);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _recommend = __webpack_require__(34);

	var _recommend2 = _interopRequireDefault(_recommend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<card type="success">
	// 		<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg" v-link="{name:'book',params:{id:id}}">
	// 			<h4>{{title}}</h4>
	// 			<icon-item>活动时间: {{timeRange}}</icon-item>
	// 			<icon-item>每人交保证金: {{money}}</icon-item>
	// 			<icon-item>报名截至时间: {{lastTime}}</icon-item>
	// 			<icon-item>已报名人数: {{number}}人</icon-item>
	// 		</avatar-item>
	//
	// 		<recommend-item>
	// 			<div slot="title">
	// 				相关教程:
	// 			</div>
	// 			<div slot="container">
	// 				<a href="#">{{course}}</a>
	// 			</div>
	// 		</recommend-item>
	// 	</card>
	// </template>
	//
	// <style>
	//
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
			title: String,
			timeRange: String,
			lastTime: Number,
			number: Number,
			money: Number,
			course: String,
			id: Number
		}
	};
	// </script>

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/container/boxWithBottomShadow.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
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
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */
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
	// 	padding: 15px 15px 0;
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-card vux-1px-r\" :class=\"classes\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/avatarItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
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
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-item mz-item-avatar">
	// 		<img :src="avatarUrl">
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
	// 		padding:10px 0 15px 60px;
	// 	}
	// 	.mz-item.mz-item-avatar img{
	// 		position:absolute;
	// 		top:4px;
	// 		left: 0;
	// 		max-height: 50px;
	// 		max-width: 50px;
	// 		width: 100%;
	// 		height: 100%;
	// 		border-radius: 50%;
	// 	}
	//
	// </style>
	//
	// <script>
	exports.default = {
		props: {
			avatarUrl: {
				type: String
			}
		}
	};
	// </script>

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-item mz-item-avatar\">\n\t<img :src=\"avatarUrl\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/iconItem.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-68b4b03e/iconItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-item mz-item-icon\">\n\t<i class=\"mz-icon mz-icon-left\" :class=\"classes\"></i>\n\t<slot></slot>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/recommend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
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
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */
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
	// 		font-size: 1.3rem;
	// 	}
	// </style>
	//
	// <script>
	exports.default = {};
	// </script>

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-item mz-recommend\">\n\t<div class=\"mz-recommend-title\">\n\t\t<slot name=\"title\"></slot>\n\t</div>\n\t<slot name=\"container\"></slot>\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<card type=\"success\">\n\t<avatar-item avatar-url=\"http://static.youku.com/user/img/avatar/310/39.jpg\" v-link=\"{name:'book',params:{id:id}}\">\n\t\t<h4>{{title}}</h4>\n\t\t<icon-item>活动时间: {{timeRange}}</icon-item>\n\t\t<icon-item>每人交保证金: {{money}}</icon-item>\n\t\t<icon-item>报名截至时间: {{lastTime}}</icon-item>\n\t\t<icon-item>已报名人数: {{number}}人</icon-item>\n\t</avatar-item>\n\n\t<recommend-item>\n\t\t<div slot=\"title\">\n\t\t\t相关教程:\n\t\t</div>\n\t\t<div slot=\"container\">\n\t\t\t<a href=\"#\">{{course}}</a>\n\t\t</div>\n\t</recommend-item>\n</card>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getActivityList = getActivityList;
	exports.getActivity = getActivity;
	exports.getSignList = getSignList;
	exports.getMessageList = getMessageList;

	var _store = __webpack_require__(40);

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

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(41);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _activity = __webpack_require__(42);

	var _activity2 = _interopRequireDefault(_activity);

	var _user = __webpack_require__(63);

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
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(43);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations; /**
	                 * Created by Alex on 16/8/19.
	                 */


	var _mutationTypes = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		activityList: [],
		activity: {},
		signList: [],
		messageList: []
	};

	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_LIST, function (state, list) {
		state.activityList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_INFO, function (state, activity) {
		state.activity = activity.data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_SIGN_LIST, function (state, list) {
		state.signList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.BOOK_ACTIVITY, function (state, list) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ZAN_ACTIVITY, function (state, list) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SIGN_ACTIVITY, function (state, list) {}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_ACTIVITY_MESSAGE_LIST, function (state, list) {
		state.messageList = list.data.list;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.COMMIT_ACTIVITY_MESSAGE, function (state) {}), _mutations);

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(44);

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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	var $Object = __webpack_require__(49).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(47);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(57), 'Object', {defineProperty: __webpack_require__(53).f});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(48)
	  , core      = __webpack_require__(49)
	  , ctx       = __webpack_require__(50)
	  , hide      = __webpack_require__(52)
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
/* 48 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 49 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(51);
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
/* 51 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(53)
	  , createDesc = __webpack_require__(61);
	module.exports = __webpack_require__(57) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(54)
	  , IE8_DOM_DEFINE = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(60)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(57) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(57) && !__webpack_require__(58)(function(){
	  return Object.defineProperty(__webpack_require__(59)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(58)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55)
	  , document = __webpack_require__(48).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(55);
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
/* 61 */
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
/* 62 */
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

	var GET_USER_INFO = exports.GET_USER_INFO = 'GET_USER_INFO';

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(43);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutationTypes = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = {
		userInfo: {}
	}; /**
	    * Created by Alex on 16/8/21.
	    */

	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.GET_USER_INFO, function (state, data) {
		state.userInfo = data.data;
	});

	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.activityMessageQuery = exports.activitySignListQuery = exports.activityQuery = exports.activityListQuery = undefined;

	var _activity = __webpack_require__(65);

	var _activity2 = _interopRequireDefault(_activity);

	var _mutationTypes = __webpack_require__(62);

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

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _resourse = __webpack_require__(66);

	exports.default = {
		API_GET_ACTIVITY_LIST: function API_GET_ACTIVITY_LIST() {
			return _resourse.activityListResource.get();
		},

		API_GET_ACTIVITY: function API_GET_ACTIVITY(id) {
			return _resourse.activityResource.get({ activity_id: id });
		},

		API_GET_SIGN_LIST: function API_GET_SIGN_LIST(id) {
			return _resourse.signListResource.get({ activity_id: id });
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
		}

	}; /**
	    * Created by tao on 2016/8/19.
	    */

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.weixinJSSDKResource = exports.userResource = exports.messageListResource = exports.messageResource = exports.agreeResource = exports.signResource = exports.signUpResource = exports.signListResource = exports.activityResource = exports.activityListResource = undefined;

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _reactCookie = __webpack_require__(67);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Alex on 16/8/19.
	 */

	var VueResource = __webpack_require__(69);
	_vue2.default.use(VueResource);
	_vue2.default.http.options.timeout = 10000;

	_vue2.default.http.options.emulateJSON = true;
	// 添加token
	_vue2.default.http.interceptors.push({
		request: function request(_request) {
			// 这里对请求体进行处理
			var cookies = _reactCookie2.default.load('Authorization');
			_request.headers = _request.headers || {};
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

	var userResource = exports.userResource = _vue2.default.resource(API_ROOT + '/api/self-info/'); // 获取个人信息
	var weixinJSSDKResource = exports.weixinJSSDKResource = _vue2.default.resource(API_ROOT + '/wechat/jsconfig/');

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(68);

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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */

	function install(Vue) {

	    var _ = __webpack_require__(70);

	    _.config = Vue.config;
	    _.warning = Vue.util.warn;
	    _.nextTick = Vue.util.nextTick;

	    Vue.url = __webpack_require__(71);
	    Vue.http = __webpack_require__(77);
	    Vue.resource = __webpack_require__(92);
	    Vue.Promise = __webpack_require__(79);

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
/* 70 */
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for URL templating.
	 */

	var _ = __webpack_require__(70);
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
	    __webpack_require__(72),
	    __webpack_require__(74),
	    __webpack_require__(75),
	    __webpack_require__(76)
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * URL Template (RFC 6570) Transform.
	 */

	var UrlTemplate = __webpack_require__(73);

	module.exports = function (options) {

	    var variables = [], url = UrlTemplate.expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	};


/***/ },
/* 73 */
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Legacy Transform.
	 */

	var _ = __webpack_require__(70);

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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Query Parameter Transform.
	 */

	var _ = __webpack_require__(70);

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Root Prefix Transform.
	 */

	var _ = __webpack_require__(70);

	module.exports = function (options, next) {

	    var url = next(options);

	    if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for sending network requests.
	 */

	var _ = __webpack_require__(70);
	var Client = __webpack_require__(78);
	var Promise = __webpack_require__(79);
	var interceptor = __webpack_require__(82);
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
	    __webpack_require__(83),
	    __webpack_require__(84),
	    __webpack_require__(85),
	    __webpack_require__(87),
	    __webpack_require__(88),
	    __webpack_require__(89),
	    __webpack_require__(90)
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Base client.
	 */

	var _ = __webpack_require__(70);
	var Promise = __webpack_require__(79);
	var xhrClient = __webpack_require__(81);

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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Promise adapter.
	 */

	var _ = __webpack_require__(70);
	var PromiseObj = window.Promise || __webpack_require__(80);

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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var _ = __webpack_require__(70);

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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XMLHttp client.
	 */

	var _ = __webpack_require__(70);
	var Promise = __webpack_require__(79);

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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Interceptor factory.
	 */

	var _ = __webpack_require__(70);
	var Promise = __webpack_require__(79);

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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Before Interceptor.
	 */

	var _ = __webpack_require__(70);

	module.exports = {

	    request: function (request) {

	        if (_.isFunction(request.beforeSend)) {
	            request.beforeSend.call(this, request);
	        }

	        return request;
	    }

	};


/***/ },
/* 84 */
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP Interceptor.
	 */

	var jsonpClient = __webpack_require__(86);

	module.exports = {

	    request: function (request) {

	        if (request.method == 'JSONP') {
	            request.client = jsonpClient;
	        }

	        return request;
	    }

	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP client.
	 */

	var _ = __webpack_require__(70);
	var Promise = __webpack_require__(79);

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
/* 87 */
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Mime Interceptor.
	 */

	var _ = __webpack_require__(70);

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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Header Interceptor.
	 */

	var _ = __webpack_require__(70);

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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * CORS Interceptor.
	 */

	var _ = __webpack_require__(70);
	var xdrClient = __webpack_require__(91);
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XDomain client (Internet Explorer).
	 */

	var _ = __webpack_require__(70);
	var Promise = __webpack_require__(79);

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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for interacting with RESTful services.
	 */

	var _ = __webpack_require__(70);

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
/* 93 */
/***/ function(module, exports) {

	module.exports = "\n<card v-for=\"item in items\" :title=\"item.title\"\n\t\t\t:time-range=\"item.start_time+' —— '+item.end_time\"\n\t\t\t:number=\"item.signup_number\"\n\t  \t\t:money=\"item.deposit\"\n\t  \t\t:course=\"item.course_desc\"\n\t  \t\t:id=\"item.activity_id\"\n>\n</card>\n";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(95)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/mysign.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(113)
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _signCard = __webpack_require__(96);

	var _signCard2 = _interopRequireDefault(_signCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			card: _signCard2.default
		}
	};
	// </script>
	// <template>
	// 	<card label="今日已打卡"
	// 				type="ready"
	// 				title="任务一:连续12天打卡计划"
	// 				content="坚持阅读12天,今天收获满满的,非常充实的一天!"
	// 				:zan="12"
	// 				:comments="123"
	// 				url="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png"
	// 				:activity-id="1"
	// 				:sign-id="2">
	// 	</card>
	//
	// 	<card label="任务失败"
	// 	      type="failed"
	// 	      title="任务一:连续12天打卡计划"
	// 	      content="坚持阅读12天,今天收获满满的,非常充实的一天!"
	// 	      :zan="12"
	// 	      :comments="123"
	// 	      url="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png">
	// 	</card>
	//
	// 	<card label="任务完成"
	// 	      type="complete"
	// 	      title="任务一:连续12天打卡计划"
	// 	      content="坚持阅读12天,今天收获满满的,非常充实的一天!"
	// 	      :zan="12"
	// 	      :comments="123"
	// 	      url="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png"
	// 				:activity-id="1"
	// 				:sign-id="2">
	// 	</card>
	// </template>
	//
	// <script>

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(97)
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/index/signCard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(112)
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
/* 97 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBottomShadow = __webpack_require__(22);

	var _boxWithBottomShadow2 = _interopRequireDefault(_boxWithBottomShadow);

	var _cardLabel = __webpack_require__(99);

	var _cardLabel2 = _interopRequireDefault(_cardLabel);

	var _commentItem = __webpack_require__(103);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			card: _boxWithBottomShadow2.default,
			cl: _cardLabel2.default,
			comment: _commentItem2.default
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
			signId: Number
		}
	};
	// </script>
	// <template>
	// 	<card :type="type" >
	// 		<cl top right :type="type"
	// 		    :height="25"
	// 		    :width="73">
	// 			{{label}}
	// 		</cl>
	//
	// 		<div v-link="{name:'sign',params:{id:1}}">
	// 			<h4>{{title}}</h4>
	// 			<p>{{state}}</p>
	// 			<p>{{content}}</p>
	// 			<div class="mz-photo" :style="{backgroundImage:'url('+ url +')' }">
	// 			</div>
	// 		</div>
	//
	// 		<comment :zan="zan"
	// 					   :comments="comments"
	// 		         :activity-id="activityId"
	// 		         :sign-id="signId">
	// 		</comment>
	// 	</card>
	// </template>
	//
	// <style>
	// 	.mz-card .mz-photo{
	// 		height: 141px;
	// 		background-repeat: no-repeat;
	// 		background-size: cover;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(100)
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/label/cardLabel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
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
/* 100 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 101 */
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
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-label\" v-bind:class=\"classes\"\n\t\t\t\t\t\t\t\t\t\t\tv-bind:style=\"{height:height+'px',width:width+'px',lineHeight:height+'px'}\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(104)
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/item/commentItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(111)
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
/* 104 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _button = __webpack_require__(106);

	var _button2 = _interopRequireDefault(_button);

	var _activityService = __webpack_require__(110);

	var _activityService2 = _interopRequireDefault(_activityService);

	var _activityAction = __webpack_require__(64);

	var _activityGetter = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div style="padding: 8px 0">
	// 		<div class="mz-item-comment clear-fix">
	// 			<i class="mz-icon mz-icon-comment mz-pull-right"  @click="commitToggle">{{comments}}</i>
	// 			<i class="mz-icon mz-icon-good mz-pull-right mz-space-15" @click="toggle">{{zan}}</i>
	// 		</div>
	// 		<div class="mz-commit-box" v-if="showCommit">
	// 			<div>
	// 				<p v-for="item in commits">{{item.user_name}}:{{item.text}}</p>
	// 			</div>
	// 			<textarea class="mz-commit" placeholder="我想说两句" v-model="content"></textarea>
	// 			<t-button min type="ready" @click="submit">提交</t-button>
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
	// 		content: "\e913";.
	// 		padding-right:6px;
	// 	}
	// 	.clear-fix{
	// 		overflow:auto;
	// 		_height:1%
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		components: {
			TButton: _button2.default
		},
		data: function data() {
			return {
				showCommit: false,
				content: ''
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
			}
		},
		methods: {
			toggle: function toggle() {
				_activityService2.default.ZAN(this.activityId, this.signId);
			},
			commitToggle: function commitToggle() {
				this.showCommit = !this.showCommit;
				if (this.showCommit) {
					this.activityMessageQuery(this.activityId, this.signId);
				}
			},
			submit: function submit() {
				console.log(this.content);
				_activityService2.default.commit(this.activityId, this.signId, this.content);
			}
		},
		vuex: {
			actions: {
				activityMessageQuery: _activityAction.activityMessageQuery
			},
			getters: {
				commits: _activityGetter.getMessageList
			}
		}
	};
	// </script>

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(107)
	__vue_script__ = __webpack_require__(108)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(109)
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
/* 107 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 108 */
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
/* 109 */
/***/ function(module, exports) {

	module.exports = "\n<button class=\"mz-button\" :class=\"classes\">\n\t<slot></slot>\n</button>\n";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _activity = __webpack_require__(65);

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
		}
	}; /**
	    * Created by Alex on 16/8/21.
	    */

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"padding: 8px 0\">\n\t<div class=\"mz-item-comment clear-fix\">\n\t\t<i class=\"mz-icon mz-icon-comment mz-pull-right\"  @click=\"commitToggle\">{{comments}}</i>\n\t\t<i class=\"mz-icon mz-icon-good mz-pull-right mz-space-15\" @click=\"toggle\">{{zan}}</i>\n\t</div>\n\t<div class=\"mz-commit-box\" v-if=\"showCommit\">\n\t\t<div>\n\t\t\t<p v-for=\"item in commits\">{{item.user_name}}:{{item.text}}</p>\n\t\t</div>\n\t\t<textarea class=\"mz-commit\" placeholder=\"我想说两句\" v-model=\"content\"></textarea>\n\t\t<t-button min type=\"ready\" @click=\"submit\">提交</t-button>\n\t</div>\n</div>\n";

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n<card :type=\"type\" >\n\t<cl top right :type=\"type\"\n\t    :height=\"25\"\n\t    :width=\"73\">\n\t\t{{label}}\n\t</cl>\n\n\t<div v-link=\"{name:'sign',params:{id:1}}\">\n\t\t<h4>{{title}}</h4>\n\t\t<p>{{state}}</p>\n\t\t<p>{{content}}</p>\n\t\t<div class=\"mz-photo\" :style=\"{backgroundImage:'url('+ url +')' }\">\n\t\t</div>\n\t</div>\n\n\t<comment :zan=\"zan\"\n\t\t\t\t   :comments=\"comments\"\n\t         :activity-id=\"activityId\"\n\t         :sign-id=\"signId\">\n\t</comment>\n</card>\n";

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "\n<card label=\"今日已打卡\"\n\t\t\ttype=\"ready\"\n\t\t\ttitle=\"任务一:连续12天打卡计划\"\n\t\t\tcontent=\"坚持阅读12天,今天收获满满的,非常充实的一天!\"\n\t\t\t:zan=\"12\"\n\t\t\t:comments=\"123\"\n\t\t\turl=\"http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png\"\n\t\t\t:activity-id=\"1\"\n\t\t\t:sign-id=\"2\">\n</card>\n\n<card label=\"任务失败\"\n      type=\"failed\"\n      title=\"任务一:连续12天打卡计划\"\n      content=\"坚持阅读12天,今天收获满满的,非常充实的一天!\"\n      :zan=\"12\"\n      :comments=\"123\"\n      url=\"http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png\">\n</card>\n\n<card label=\"任务完成\"\n      type=\"complete\"\n      title=\"任务一:连续12天打卡计划\"\n      content=\"坚持阅读12天,今天收获满满的,非常充实的一天!\"\n      :zan=\"12\"\n      :comments=\"123\"\n      url=\"http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png\"\n\t\t\t:activity-id=\"1\"\n\t\t\t:sign-id=\"2\">\n</card>\n";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(115)
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/billboard.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
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
/* 115 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div class="mz-billboard mz-item">
	// 		<div class="mz-billboard-top-1">
	// 			<i class="mz-billboard-rank">NO.1</i>
	// 			<div class="mz-billboard-avatar">
	// 					<img src="/images/crown.png" class="mz-billboard-top-1-crown">
	// 					<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-billboard-img-avatar">
	// 				  <div class="mz-billboard-top-1-decorate">
	// 					  sunShine
	// 				  </div>
	// 			</div>
	// 		</div>
	//
	// 		<div class="mz-billboard-item mz-item-odds">
	// 			<span class="mz-billboard-item-rank-number">NO.2</span>
	// 			<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-billboard-img-avatar">
	// 			<div>
	// 				<p class="mz-billboard-name">张三v4</p>
	// 				<p class="mz-billboard-point">积分:23000</p>
	// 			</div>
	// 		</div>
	//
	// 		<div class="mz-billboard-item mz-item-even">
	// 			<span class="mz-billboard-item-rank-number">NO.3</span>
	// 			<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-billboard-img-avatar">
	// 			<div>
	// 				<p class="mz-billboard-name">张三v4</p>
	// 				<p class="mz-billboard-point">积分:23000</p>
	// 			</div>
	// 		</div>
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
	// </style>
	//
	// <script>
	exports.default = {};
	// </script>

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-billboard mz-item\">\n\t<div class=\"mz-billboard-top-1\">\n\t\t<i class=\"mz-billboard-rank\">NO.1</i>\n\t\t<div class=\"mz-billboard-avatar\">\n\t\t\t\t<img src=\"/images/crown.png\" class=\"mz-billboard-top-1-crown\">\n\t\t\t\t<img src=\"http://static.youku.com/user/img/avatar/310/39.jpg\" class=\"mz-billboard-img-avatar\">\n\t\t\t  <div class=\"mz-billboard-top-1-decorate\">\n\t\t\t\t  sunShine\n\t\t\t  </div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"mz-billboard-item mz-item-odds\">\n\t\t<span class=\"mz-billboard-item-rank-number\">NO.2</span>\n\t\t<img src=\"http://static.youku.com/user/img/avatar/310/39.jpg\" class=\"mz-billboard-img-avatar\">\n\t\t<div>\n\t\t\t<p class=\"mz-billboard-name\">张三v4</p>\n\t\t\t<p class=\"mz-billboard-point\">积分:23000</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"mz-billboard-item mz-item-even\">\n\t\t<span class=\"mz-billboard-item-rank-number\">NO.3</span>\n\t\t<img src=\"http://static.youku.com/user/img/avatar/310/39.jpg\" class=\"mz-billboard-img-avatar\">\n\t\t<div>\n\t\t\t<p class=\"mz-billboard-name\">张三v4</p>\n\t\t\t<p class=\"mz-billboard-point\">积分:23000</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(119)
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/index.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-143eddb3/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 119 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _avatarItem = __webpack_require__(26);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _contentWithTitle = __webpack_require__(121);

	var _contentWithTitle2 = _interopRequireDefault(_contentWithTitle);

	var _iconItem = __webpack_require__(30);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _cardWithAvatar = __webpack_require__(125);

	var _cardWithAvatar2 = _interopRequireDefault(_cardWithAvatar);

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	var _footerButton = __webpack_require__(133);

	var _footerButton2 = _interopRequireDefault(_footerButton);

	var _confirm = __webpack_require__(137);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _activityAction = __webpack_require__(64);

	var _activityGetter = __webpack_require__(39);

	var _index3 = __webpack_require__(142);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(143);

	var _index6 = _interopRequireDefault(_index5);

	var _activityService = __webpack_require__(110);

	var _activityService2 = _interopRequireDefault(_activityService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto">
	// 		<div class="mz-sign">
	// 			<div class="mz-item-cover">
	// 				<avatar-item :avatar-url="activityInfo.info.sponsor_avatar" v-if="activityInfo.info">
	// 					<h4>{{activityInfo.info.sponsor_name}}</h4>
	// 					<p>发起了活动: {{activityInfo.info.title}}</p>
	// 					<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>
	// 					<p>报名截至时间:{{activityInfo.info.start_time}}</p>
	// 					<!--<p>每人保证金: {{activityInfo.deposit}}元</p>-->
	// 				</avatar-item>
	// 			</div>
	//
	// 			<wrap title="活动介绍:" type="success">
	// 				<p v-if="activityInfo.info">{{activityInfo.info.desc}}</p>
	// 			</wrap>
	//
	// 			<wrap title="相关课程:" type="warn" v-if="activityInfo.info">
	//
	// 			</wrap>
	//
	// 			<div class="mz-content-container" style="margin-top: 10px">
	// 				<icon-item type="people">已报名人数:{{activityInfo.signup}}</icon-item>
	// 				<!--<icon-item type="money">每人保证金</icon-item>-->
	// 				<!--<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>-->
	// 			</div>
	//
	// 			<card v-for="item in signList"
	// 			      :head-img-url="item.user_avatar"
	// 						:cover="item.image_url"
	// 						:zan="item.agree_count"
	// 						:comments="item.comment_count"
	// 						:content="item.text"
	// 						:activity-id="12"
	// 						:sign-id="12">
	// 			</card>
	//
	// 		</div>
	// 	</scroller>
	//
	// 	<f-button type="success"
	// 						action="我要报名">
	//
	// 	</f-button>
	//
	// 	<dialog></dialog>
	//
	// 	<confirm :show.sync="show" title="活动报名" @on-confirm="onConfirm">
	// 		<p style="text-align:center;" v-if="activityInfo.info">确定参加{{activityInfo.info.title}}</p>
	// 	</confirm>
	//
	// 	<alert :show.sync="showError" title="报名失败">{{errorMessage}}</alert>
	//
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
	exports.default = {
		data: function data() {
			return {
				id: Number,
				show: false,
				showError: false,
				errorMessage: ''
			};
		},

		components: {
			avatarItem: _avatarItem2.default,
			wrap: _contentWithTitle2.default,
			iconItem: _iconItem2.default,
			card: _cardWithAvatar2.default,
			scroller: _index2.default,
			fButton: _footerButton2.default,
			confirm: _index4.default,
			dialog: _confirm2.default,
			alert: _index6.default
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
				this.activityQuery(id);
				this.activitySignListQuery(id);
			}
		},
		vuex: {
			actions: {
				activityQuery: _activityAction.activityQuery,
				activitySignListQuery: _activityAction.activitySignListQuery
			},
			getters: {
				activityInfo: _activityGetter.getActivity,
				signList: _activityGetter.getSignList
			}
		},
		events: {
			DO: function DO() {
				this.show = true;
			},
			confirm: function confirm() {
				this.$router.go({ name: 'upload' });
			}
		},
		methods: {
			onConfirm: function onConfirm() {
				var _self = this;
				_activityService2.default.book(this.id).then(function (data) {
					_self.$broadcast('showDialog');
				}).catch(function (err) {
					_self.errorMessage = '内部错误, 请重试!';
					_self.showError = true;
				});
			}
		}
	};
	// </script>

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(122)
	__vue_script__ = __webpack_require__(123)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/container/contentWithTitle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(124)
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
/* 122 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 123 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="mz-content-wrap">
	// 		<div class="mz-content-header" :class="classesLight">
	// 			<div class="mz-content-title" :class="classes">
	// 				{{title}}
	// 			</div>
	// 		</div>
	//
	// 		<div class="mz-content-container">
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
/* 124 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-content-wrap\">\n\t<div class=\"mz-content-header\" :class=\"classesLight\">\n\t\t<div class=\"mz-content-title\" :class=\"classes\">\n\t\t\t{{title}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"mz-content-container\">\n\t\t<slot></slot>\n\t</div>\n</div>\n\n";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(126)
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/card/cardWithAvatar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(132)
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
/* 126 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBorder = __webpack_require__(128);

	var _boxWithBorder2 = _interopRequireDefault(_boxWithBorder);

	var _avatarItem = __webpack_require__(26);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _commentItem = __webpack_require__(103);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			box: _boxWithBorder2.default,
			avatarItem: _avatarItem2.default,
			comment: _commentItem2.default
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
			}
		}
	};
	// </script>
	// <template>
	// 	<box type = "success">
	// 		<avatar-item :avatar-url="headImgUrl">
	// 			<h4>{{title}}</h4>
	// 			<p>{{content}}</p>
	// 			<div class="mz-photo" :style="{backgroundImage:'url('+ cover +')'}"></div>
	// 		</avatar-item>
	//
	// 		<comment :zan="zan"
	// 		         :comments="comments"
	// 		         :activity-id="activityId"
	// 		         :sign-id="signId">
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(129)
	__vue_script__ = __webpack_require__(130)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/container/boxWithBorder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(131)
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
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 130 */
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
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-card\" :class=\"classes\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "\n<box type = \"success\">\n\t<avatar-item :avatar-url=\"headImgUrl\">\n\t\t<h4>{{title}}</h4>\n\t\t<p>{{content}}</p>\n\t\t<div class=\"mz-photo\" :style=\"{backgroundImage:'url('+ cover +')'}\"></div>\n\t</avatar-item>\n\n\t<comment :zan=\"zan\"\n\t         :comments=\"comments\"\n\t         :activity-id=\"activityId\"\n\t         :sign-id=\"signId\">\n\t</comment>\n</box>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(134)
	__vue_script__ = __webpack_require__(135)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button/footerButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(136)
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
/* 134 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 135 */
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
				default: true
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
				this.$dispatch('DO');
			},
			back: function back() {
				window.history.back();
			}
		}
	};
	// </script>

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-footer-flex\" :class=\"classes\">\n\t<div class=\"mz-footer-button mz-footer-left\" @click=\"back\">\n\t\t<i class=\"mz-icon-eye mz-icon\">我再看看</i>\n\t</div>\n\t<div class=\"mz-footer-button mz-footer-right\" @click=\"do\">\n\t\t<i class=\"mz-icon-people mz-icon\">{{action}}</i>\n\t</div>\n</div>\n";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(138)
	__vue_script__ = __webpack_require__(139)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dialog/confirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(141)
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
/* 138 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(140);

	var _index2 = _interopRequireDefault(_index);

	var _button = __webpack_require__(106);

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
	// 				<h4>支付成功</h4>
	// 			</div>
	//
	// 			<m-button type="glass" large @click="confirm">
	// 				我要打卡
	// 			</m-button>
	//
	// 			<m-button type="success" large @click="hidden">
	// 				随便看看
	// 			</m-button>
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
			hidden: function hidden() {
				this.showNoScroll = !this.showNoScroll;
			},
			confirm: function confirm() {
				this.$dispatch('confirm');
			}
		},
		events: {
			'showDialog': function showDialog() {
				this.hidden();
			}
		}
	};
	// </script>

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	!function(o,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxDialog=t():o.vuxDialog=t()}(this,function(){return function(o){function t(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return o[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var e={};return t.m=o,t.c=e,t.p="",t(0)}([function(o,t,e){o.exports=e(4)},function(o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(o){this.$emit(o?"on-show":"on-hide")}}}},function(o,t){},function(o,t){o.exports='<div class=weui_dialog_alert v-show=show :transition=maskTransition @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)"></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(o,t,e){var i,n;e(2),i=e(1),n=e(3),o.exports=i||{},o.exports.__esModule&&(o.exports=o.exports["default"]),n&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=n)}])});

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "\n<dialog :show.sync=\"showNoScroll\" :scroll=\"false\">\n\t<div class=\"mz-dialog-box\">\n\n\t\t<div class=\"mz-dialog-success\">\n\t\t\t<div class=\"mz-dialog-tip\">\n\n\t\t\t</div>\n\t\t\t<h4>支付成功</h4>\n\t\t</div>\n\n\t\t<m-button type=\"glass\" large @click=\"confirm\">\n\t\t\t我要打卡\n\t\t</m-button>\n\n\t\t<m-button type=\"success\" large @click=\"hidden\">\n\t\t\t随便看看\n\t\t</m-button>\n\t</div>\n</dialog>\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxConfirm=o():t.vuxConfirm=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(7)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(8),s=i(n);o["default"]={components:{Dialog:s["default"]},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,"default":"confirm"},cancelText:{type:String,"default":"cancel"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){},function(t,o){},function(t,o){t.exports='<dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog>'},function(t,o){t.exports='<div class=weui_dialog_alert v-show=show :transition=maskTransition @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)"></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(t,o,e){var i,n;e(3),i=e(1),n=e(5),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var i,n;e(4),i=e(2),n=e(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxAlert=o():t.vuxAlert=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(7)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var s=e(8),n=i(s);o["default"]={components:{Dialog:n["default"]},props:{show:Boolean,title:{type:String,required:!0},buttonText:{type:String,"default":"OK"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onHide:function(){this.show=!1}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,"default":!0}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){},function(t,o){},function(t,o){t.exports='<dialog class=weui_dialog_alert :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog primary" @click=onHide>{{buttonText}}</a> </div> </dialog>'},function(t,o){t.exports='<div class=weui_dialog_alert v-show=show :transition=maskTransition @touchmove="!this.scroll && $event.preventDefault()"> <div class=weui_mask @click="hideOnBlur && (show = false)"></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>'},function(t,o,e){var i,s;e(3),i=e(1),s=e(5),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,o,e){var i,s;e(4),i=e(2),s=e(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n<scroller lock-x style=\"position: absolute;top:0;left: 0;right: 0;bottom: 50px\" height=\"auto\">\n\t<div class=\"mz-sign\">\n\t\t<div class=\"mz-item-cover\">\n\t\t\t<avatar-item :avatar-url=\"activityInfo.info.sponsor_avatar\" v-if=\"activityInfo.info\">\n\t\t\t\t<h4>{{activityInfo.info.sponsor_name}}</h4>\n\t\t\t\t<p>发起了活动: {{activityInfo.info.title}}</p>\n\t\t\t\t<p>活动时间: {{activityInfo.info.start_time}} - {{activityInfo.info.end_time}}</p>\n\t\t\t\t<p>报名截至时间:{{activityInfo.info.start_time}}</p>\n\t\t\t\t<!--<p>每人保证金: {{activityInfo.deposit}}元</p>-->\n\t\t\t</avatar-item>\n\t\t</div>\n\n\t\t<wrap title=\"活动介绍:\" type=\"success\">\n\t\t\t<p v-if=\"activityInfo.info\">{{activityInfo.info.desc}}</p>\n\t\t</wrap>\n\n\t\t<wrap title=\"相关课程:\" type=\"warn\" v-if=\"activityInfo.info\">\n\n\t\t</wrap>\n\n\t\t<div class=\"mz-content-container\" style=\"margin-top: 10px\">\n\t\t\t<icon-item type=\"people\">已报名人数:{{activityInfo.signup}}</icon-item>\n\t\t\t<!--<icon-item type=\"money\">每人保证金</icon-item>-->\n\t\t\t<!--<icon-item type=\"gift\">剩余2人在坚持,每人可获得100元</icon-item>-->\n\t\t</div>\n\n\t\t<card v-for=\"item in signList\"\n\t\t      :head-img-url=\"item.user_avatar\"\n\t\t\t\t\t:cover=\"item.image_url\"\n\t\t\t\t\t:zan=\"item.agree_count\"\n\t\t\t\t\t:comments=\"item.comment_count\"\n\t\t\t\t\t:content=\"item.text\"\n\t\t\t\t\t:activity-id=\"12\"\n\t\t\t\t\t:sign-id=\"12\">\n\t\t</card>\n\n\t</div>\n</scroller>\n\n<f-button type=\"success\"\n\t\t\t\t\taction=\"我要报名\">\n\n</f-button>\n\n<dialog></dialog>\n\n<confirm :show.sync=\"show\" title=\"活动报名\" @on-confirm=\"onConfirm\">\n\t<p style=\"text-align:center;\" v-if=\"activityInfo.info\">确定参加{{activityInfo.info.title}}</p>\n</confirm>\n\n<alert :show.sync=\"showError\" title=\"报名失败\">{{errorMessage}}</alert>\n\n";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(146)
	__vue_script__ = __webpack_require__(147)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/index.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-156a7ae4/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 146 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cardWithoutAvatar = __webpack_require__(148);

	var _cardWithoutAvatar2 = _interopRequireDefault(_cardWithoutAvatar);

	var _awardDialog = __webpack_require__(152);

	var _awardDialog2 = _interopRequireDefault(_awardDialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="mz-center-cover">
	// 		<div class="mz-center-name">
	// 			张三
	// 		</div>
	//
	// 		<div class="mz-flex mz-container">
	// 			<div class="mz-flex">
	// 					<div class="mz-center-info mz-pop" v-link="{name:'info'}">
	// 							完善资料
	// 					</div>
	// 			</div>
	// 			<div class="mz-center-avatar mz-item">
	// 				<div class="mz-center-crown">小白</div>
	// 				<img src="http://static.youku.com/user/img/avatar/310/39.jpg" class="mz-center-img-avatar"><!--
	// 			--></div>
	// 			<div class="mz-flex">
	// 				<div class="mz-center-billboard mz-pop" v-link="{name:'billboard'}">
	// 						积分<br>排行榜
	// 				</div>
	// 			</div>
	// 		</div>
	//
	// 		<div class="mz-signature mz-center-item">
	// 			个人战绩: 坚持打卡<span class="mz-bold">10</span>天
	// 		</div>
	//
	// 		<div class="mz-center-point mz-center-item">
	// 			1234积分
	// 		</div>
	//
	// 		<div class="mz-center-item">
	// 			<a href="javascript:;" class="mz-href" @click="awardIntroduce"> 积分奖励说明</a>
	// 		</div>
	// 	</div>
	//
	// 	<card :zan="123"
	// 				:comments="12"
	// 				title="连续12天打卡"
	// 				content="连续12天打卡"
	// 				cover="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png"
	// 				:activity-id="2"
	// 				:sign-id="2">
	//
	// 	</card>
	//
	// 	<dialog></dialog>
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
	exports.default = {
		components: {
			card: _cardWithoutAvatar2.default,
			dialog: _awardDialog2.default
		},
		methods: {
			awardIntroduce: function awardIntroduce() {
				this.$broadcast('showDialog');
			}
		}
	};
	// </script>

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(149)
	__vue_script__ = __webpack_require__(150)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/card/cardWithoutAvatar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(151)
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
/* 149 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _boxWithBorder = __webpack_require__(128);

	var _boxWithBorder2 = _interopRequireDefault(_boxWithBorder);

	var _commentItem = __webpack_require__(103);

	var _commentItem2 = _interopRequireDefault(_commentItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<box type = "success">
	// 		<h4>{{title}}</h4>
	// 		<p>{{content}}</p>
	// 		<div class="mz-photo"  :style="{backgroundImage:'url('+ cover +')'}"></div>
	//
	// 		<comment :zan="zan"
	// 		         :comments="comments"
	// 		         :activity-id="activityId"
	// 		         :sign-id="signId">
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
			comment: _commentItem2.default
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
			}

		}
	};
	// </script>

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "\n<box type = \"success\">\n\t<h4>{{title}}</h4>\n\t<p>{{content}}</p>\n\t<div class=\"mz-photo\"  :style=\"{backgroundImage:'url('+ cover +')'}\"></div>\n\n\t<comment :zan=\"zan\"\n\t         :comments=\"comments\"\n\t         :activity-id=\"activityId\"\n\t         :sign-id=\"signId\">\n\n\t</comment>\n</box>\n";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(153)
	__vue_script__ = __webpack_require__(154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/awardDialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(155)
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
/* 153 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(140);

	var _index2 = _interopRequireDefault(_index);

	var _button = __webpack_require__(106);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<dialog :show.sync="showNoScroll" :scroll="false" class="mz-dialog-transparent">
	// 			<div class="mz-award-top">
	// 				<p class="mz-dialog-title">积分奖励说明</p>
	// 			</div>
	//
	// 			<div class="mz-award-box">
	// 				<div style="padding-bottom: 10px">
	// 					<p>参加活动+1分</p>
	// 					<p>每日打卡+1分</p>
	// 					<p>完成一个活动+5分</p>
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
	//
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
/* 155 */
/***/ function(module, exports) {

	module.exports = "\n<dialog :show.sync=\"showNoScroll\" :scroll=\"false\" class=\"mz-dialog-transparent\">\n\t\t<div class=\"mz-award-top\">\n\t\t\t<p class=\"mz-dialog-title\">积分奖励说明</p>\n\t\t</div>\n\n\t\t<div class=\"mz-award-box\">\n\t\t\t<div style=\"padding-bottom: 10px\">\n\t\t\t\t<p>参加活动+1分</p>\n\t\t\t\t<p>每日打卡+1分</p>\n\t\t\t\t<p>完成一个活动+5分</p>\n\t\t\t</div>\n\t\t\t<m-button type=\"success\" large @click=\"awardIntroduce\">\n\t\t\t\t了解了\n\t\t\t</m-button>\n\t\t</div>\n</dialog>\n";

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-center-cover\">\n\t<div class=\"mz-center-name\">\n\t\t张三\n\t</div>\n\n\t<div class=\"mz-flex mz-container\">\n\t\t<div class=\"mz-flex\">\n\t\t\t\t<div class=\"mz-center-info mz-pop\" v-link=\"{name:'info'}\">\n\t\t\t\t\t\t完善资料\n\t\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"mz-center-avatar mz-item\">\n\t\t\t<div class=\"mz-center-crown\">小白</div>\n\t\t\t<img src=\"http://static.youku.com/user/img/avatar/310/39.jpg\" class=\"mz-center-img-avatar\"><!--\n\t\t--></div>\n\t\t<div class=\"mz-flex\">\n\t\t\t<div class=\"mz-center-billboard mz-pop\" v-link=\"{name:'billboard'}\">\n\t\t\t\t\t积分<br>排行榜\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"mz-signature mz-center-item\">\n\t\t个人战绩: 坚持打卡<span class=\"mz-bold\">10</span>天\n\t</div>\n\n\t<div class=\"mz-center-point mz-center-item\">\n\t\t1234积分\n\t</div>\n\n\t<div class=\"mz-center-item\">\n\t\t<a href=\"javascript:;\" class=\"mz-href\" @click=\"awardIntroduce\"> 积分奖励说明</a>\n\t</div>\n</div>\n\n<card :zan=\"123\"\n\t\t\t:comments=\"12\"\n\t\t\ttitle=\"连续12天打卡\"\n\t\t\tcontent=\"连续12天打卡\"\n\t\t\tcover=\"http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png\"\n\t\t\t:activity-id=\"2\"\n\t\t\t:sign-id=\"2\">\n\n</card>\n\n<dialog></dialog>\n";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(158)
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/me/info.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-2485dba2/info.vue"
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

	var _index = __webpack_require__(160);

	var _index2 = _interopRequireDefault(_index);

	var _groupTitle = __webpack_require__(161);

	var _groupTitle2 = _interopRequireDefault(_groupTitle);

	var _index3 = __webpack_require__(165);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(166);

	var _index6 = _interopRequireDefault(_index5);

	var _userGetter = __webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			GroupTitle: _groupTitle2.default,
			Group: _index2.default,
			Cell: _index4.default,
			Panel: _index6.default
		},
		vuex: {
			getters: {
				user: _userGetter.getUserInfo
			}
		}
	};
	// </script>
	// <template>
	// 	<group style="margin: 0">
	// 		<group-title type="success">个人信息</group-title>
	// 		<cell title="头像">
	// 			<div slot="value">
	// 				<img :src="user.headImgUrl" width="33">
	// 			</div>
	// 		</cell>
	// 		<cell title="昵称" is-link :value="user.nickname"></cell>
	// 		<cell title="性别" is-link></cell>
	// 		<cell title="居住地" is-link></cell>
	// 		<cell title="手机号" is-link></cell>
	// 	</group>
	//
	// 	<group>
	// 		<group-title type="glass">孩子信息</group-title>
	// 	</group>
	//
	// </template>
	//
	// <style>
	//
	// </style>
	//
	// <script>

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxGroup=e():t.vuxGroup=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,titleColor:String}}},function(t,e){},function(t,e){t.exports="<div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class=\"{'vux-no-group-title':!title}\"> <slot></slot> </div> </div>"},function(t,e,o){var r,i;o(2),r=o(1),i=o(3),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(162)
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/group/group-title.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-63d521b3/group-title.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 163 */
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
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz_cells_title\" :class=\"classes\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuxCell=n():t.vuxCell=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(75)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(50),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6),o=e(12);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(8),o=e(30),i=e(24),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(22)("wks"),o=e(13),i=e(1).Symbol,u="function"==typeof i,f=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};f.store=r},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(35),o=e(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(6).f,o=e(2),i=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(22)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(14),i=e(18),u=e(26),f=e(6).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(14),i=e(47),u=e(5),f="prototype",c=function(t,n,e){var s,a,l,p=t&c.F,y=t&c.G,v=t&c.S,d=t&c.P,h=t&c.B,x=t&c.W,b=y?o:o[n]||(o[n]={}),m=b[f],g=y?r:v?r[n]:(r[n]||{})[f];y&&(e=n);for(s in e)a=!p&&g&&void 0!==g[s],a&&s in b||(l=a?g[s]:e[s],b[s]=y&&"function"!=typeof g[s]?e[s]:h&&a?i(l,r):x&&g[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[s]=l,t&c.R&&m&&!m[s]&&u(m,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){t.exports=!e(4)&&!e(9)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(18),o=e(29),i=e(36),u=e(5),f=e(2),c=e(17),s=e(52),a=e(20),l=e(59),p=e(7)("iterator"),y=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",h="values",x=function(){return this};t.exports=function(t,n,e,b,m,g,_){s(e,n,b);var w,O,S,j=function(t){if(!y&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",E=m==h,k=!1,M=t.prototype,A=M[p]||M[v]||m&&M[m],F=A||j(m),T=m?E?j("entries"):F:void 0,I="Array"==n?M.entries||A:A;if(I&&(S=l(I.call(new t)),S!==Object.prototype&&(a(S,P,!0),r||f(S,p)||u(S,p,x))),E&&A&&A.name!==h&&(k=!0,F=function(){return A.call(this)}),r&&!_||!y&&!k&&M[p]||u(M,p,F),c[n]=F,c[P]=x,m)if(w={values:E?F:j(h),keys:g?F:j(d),entries:T},_)for(O in w)O in M||i(M,O,w[O]);else o(o.P+o.F*(y||k),n,w);return w}},function(t,n,e){var r=e(8),o=e(56),i=e(16),u=e(21)("IE_PROTO"),f=function(){},c="prototype",s=function(){var t,n=e(28)("iframe"),r=i.length,o=">";for(n.style.display="none",e(49).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),s=t.F;r--;)delete s[c][i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(35),o=e(16).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=e(3),i=e(46)(!1),u=e(21)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,s=[];for(e in f)e!=u&&r(f,e)&&s.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(76),i=r(o),u=e(38);n["default"]={components:{InlineDesc:i["default"]},props:{title:String,value:String,isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,u.go)(this.link,this.$router)}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,n){if(!/^javas/.test(t)&&t){var e="object"===("undefined"==typeof t?"undefined":(0,f["default"])(t))||n&&"string"==typeof t&&!/http/.test(t);e?n.go(t):window.location.href=t}}function i(t,n){return!n||n._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,f["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(n,"__esModule",{value:!0});var u=e(41),f=r(u);n.go=o,n.getUrl=i},function(t,n,e){t.exports={"default":e(42),__esModule:!0}},function(t,n,e){t.exports={"default":e(43),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(40),i=r(o),u=e(39),f=r(u),c="function"==typeof f["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(i["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){e(67),e(65),e(68),e(69),t.exports=e(14).Symbol},function(t,n,e){e(66),e(70),t.exports=e(26).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(3),o=e(62),i=e(61);t.exports=function(t){return function(n,e,u){var f,c=r(n),s=o(c.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if(f=c[a++],f!=f)return!0}else for(;s>a;a++)if((t||a in c)&&c[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11),o=e(34),i=e(19);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,s=0;f.length>s;)c.call(t,u=f[s++])&&n.push(u);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(32),o=e(12),i=e(20),u={};e(5)(u,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(11),o=e(3);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(13)("meta"),o=e(10),i=e(2),u=e(6).f,f=0,c=Object.isExtensible||function(){return!0},s=!e(9)(function(){return c(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;a(t)}return t[r].w},y=function(t){return s&&v.NEED&&c(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:y}},function(t,n,e){var r=e(6),o=e(8),i=e(11);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(19),o=e(12),i=e(3),u=e(24),f=e(2),c=e(30),s=Object.getOwnPropertyDescriptor;n.f=e(4)?s:function(t,n){if(t=i(t),n=u(n,!0),c)try{return s(t,n)}catch(e){}return f(t,n)?o(!r.f.call(t,n),t[n]):void 0}},function(t,n,e){var r=e(3),o=e(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(63),i=e(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(23),o=e(15);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),s=f.length;return 0>c||c>=s?t?"":void 0:(i=f.charCodeAt(c),55296>i||i>56319||c+1===s||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(45),o=e(53),i=e(17),u=e(3);t.exports=e(31)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r=e(60)(!0);e(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(4),u=e(29),f=e(36),c=e(55).KEY,s=e(9),a=e(22),l=e(20),p=e(13),y=e(7),v=e(26),d=e(25),h=e(54),x=e(48),b=e(51),m=e(8),g=e(3),_=e(24),w=e(12),O=e(32),S=e(58),j=e(57),P=e(6),E=e(11),k=j.f,M=P.f,A=S.f,F=r.Symbol,T=r.JSON,I=T&&T.stringify,N="prototype",C=y("_hidden"),L=y("toPrimitive"),D={}.propertyIsEnumerable,R=a("symbol-registry"),W=a("symbols"),J=a("op-symbols"),B=Object[N],G="function"==typeof F,K=r.QObject,z=!K||!K[N]||!K[N].findChild,U=i&&s(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(B,n);r&&delete B[n],M(t,n,e),r&&t!==B&&M(B,n,r)}:M,Y=function(t){var n=W[t]=O(F[N]);return n._k=t,n},Q=G&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},$=function(t,n,e){return t===B&&$(J,n,e),m(t),n=_(n,!0),m(e),o(W,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=O(e,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),U(t,n,e)):M(t,n,e)},q=function(t,n){m(t);for(var e,r=x(n=g(n)),o=0,i=r.length;i>o;)$(t,e=r[o++],n[e]);return t},H=function(t,n){return void 0===n?O(t):q(O(t),n)},V=function(t){var n=D.call(this,t=_(t,!0));return this===B&&o(W,t)&&!o(J,t)?!1:n||!o(this,t)||!o(W,t)||o(this,C)&&this[C][t]?n:!0},X=function(t,n){if(t=g(t),n=_(n,!0),t!==B||!o(W,n)||o(J,n)){var e=k(t,n);return!e||!o(W,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=A(g(t)),r=[],i=0;e.length>i;)o(W,n=e[i++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===B,r=A(e?J:g(t)),i=[],u=0;r.length>u;)o(W,n=r[u++])&&(e?o(B,n):!0)&&i.push(W[n]);return i};G||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===B&&n.call(J,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),U(this,t,w(1,e))};return i&&z&&U(B,t,{configurable:!0,set:n}),Y(t)},f(F[N],"toString",function(){return this._k}),j.f=X,P.f=$,e(33).f=S.f=Z,e(19).f=V,e(34).f=tt,i&&!e(18)&&f(B,"propertyIsEnumerable",V,!0),v.f=function(t){return Y(y(t))}),u(u.G+u.W+u.F*!G,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)y(nt[et++]);for(var nt=E(y.store),et=0;nt.length>et;)d(nt[et++]);u(u.S+u.F*!G,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=F(t)},keyFor:function(t){if(Q(t))return h(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!G,"Object",{create:H,defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),T&&u(u.S+u.F*(!G||s(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Q(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&b(n)||(n=function(t,n){return e&&(n=e.call(this,t,n)),Q(n)?void 0:n}),r[1]=n,I.apply(T,r)}}}),F[N][L]||e(5)(F[N],L,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(25)("asyncIterator")},function(t,n,e){e(25)("observable")},function(t,n,e){e(64);for(var r=e(1),o=e(5),i=e(17),u=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;5>c;c++){var s=f[c],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n){},function(t,n){},function(t,n){t.exports="<div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> </div>"},function(t,n){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,n,e){var r,o;e(71),r=e(37),o=e(73),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,n,e){var r,o;e(72),o=e(74),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxPanel=e():t.vuxPanel=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(73)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(50),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(30),i=n(24),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(35),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,o=n(2),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(22)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(14),i=n(18),u=n(26),c=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(14),i=n(47),u=n(5),c="prototype",f=function(t,e,n){var s,a,l,p=t&f.F,d=t&f.G,v=t&f.S,y=t&f.P,h=t&f.B,m=t&f.W,_=d?o:o[e]||(o[e]={}),b=_[c],x=d?r:v?r[e]:(r[e]||{})[c];d&&(n=e);for(s in n)a=!p&&x&&void 0!==x[s],a&&s in _||(l=a?x[s]:n[s],_[s]=d&&"function"!=typeof x[s]?n[s]:h&&a?i(l,r):m&&x[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((_.virtual||(_.virtual={}))[s]=l,t&f.R&&b&&!b[s]&&u(b,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),o=n(29),i=n(36),u=n(5),c=n(2),f=n(17),s=n(52),a=n(20),l=n(59),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",y="keys",h="values",m=function(){return this};t.exports=function(t,e,n,_,b,x,g){s(n,e,_);var w,O,S,j=function(t){if(!d&&t in M)return M[t];switch(t){case y:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",P=b==h,E=!1,M=t.prototype,C=M[p]||M[v]||b&&M[b],F=C||j(b),I=b?P?j("entries"):F:void 0,A="Array"==e?M.entries||C:C;if(A&&(S=l(A.call(new t)),S!==Object.prototype&&(a(S,k,!0),r||c(S,p)||u(S,p,m))),P&&C&&C.name!==h&&(E=!0,F=function(){return C.call(this)}),r&&!g||!d&&!E&&M[p]||u(M,p,F),f[e]=F,f[k]=m,b)if(w={values:P?F:j(h),keys:x?F:j(y),entries:I},g)for(O in w)O in M||i(M,O,w[O]);else o(o.P+o.F*(d||E),e,w);return w}},function(t,e,n){var r=n(8),o=n(56),i=n(16),u=n(21)("IE_PROTO"),c=function(){},f="prototype",s=function(){var t,e=n(28)("iframe"),r=i.length,o=">";for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),s=t.F;r--;)delete s[f][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[f]=r(t),n=new c,c[f]=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(35),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=n(3),i=n(46)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38);e["default"]={props:{header:String,footer:Object,list:Array,type:{type:String,"default":"1"}},methods:{getUrl:function(t){return(0,r.getUrl)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),(0,r.go)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),(0,r.go)(t.url,this.$router)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,c["default"])(t))||e&&"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,c["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(41),c=r(u);e.go=o,e.getUrl=i},function(t,e,n){t.exports={"default":n(42),__esModule:!0}},function(t,e,n){t.exports={"default":n(43),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(40),i=r(o),u=n(39),c=r(u),f="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};e["default"]="function"==typeof c["default"]&&"symbol"===f(i["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,e,n){n(67),n(65),n(68),n(69),t.exports=n(14).Symbol},function(t,e,n){n(66),n(70),t.exports=n(26).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(3),o=n(62),i=n(61);t.exports=function(t){return function(e,n,u){var c,f=r(e),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(44);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(34),i=n(19);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(32),o=n(12),i=n(20),u={};n(5)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11),o=n(3);t.exports=function(t,e){for(var n,i=o(t),u=r(i),c=u.length,f=0;c>f;)if(i[n=u[f++]]===e)return n}},function(t,e,n){var r=n(13)("meta"),o=n(10),i=n(2),u=n(6).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";a(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&f(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(6),o=n(8),i=n(11);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){var r=n(19),o=n(12),i=n(3),u=n(24),c=n(2),f=n(30),s=Object.getOwnPropertyDescriptor;e.f=n(4)?s:function(t,e){if(t=i(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}return c(t,e)?o(!r.f.call(t,e),t[e]):void 0}},function(t,e,n){var r=n(3),o=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(2),o=n(63),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(23),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),s=c.length;return 0>f||f>=s?t?"":void 0:(i=c.charCodeAt(f),55296>i||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(45),o=n(53),i=n(17),u=n(3);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(4),u=n(29),c=n(36),f=n(55).KEY,s=n(9),a=n(22),l=n(20),p=n(13),d=n(7),v=n(26),y=n(25),h=n(54),m=n(48),_=n(51),b=n(8),x=n(3),g=n(24),w=n(12),O=n(32),S=n(58),j=n(57),k=n(6),P=n(11),E=j.f,M=k.f,C=S.f,F=r.Symbol,I=r.JSON,A=I&&I.stringify,T="prototype",N=d("_hidden"),U=d("toPrimitive"),L={}.propertyIsEnumerable,R=a("symbol-registry"),W=a("symbols"),$=a("op-symbols"),D=Object[T],J="function"==typeof F,G=r.QObject,K=!G||!G[T]||!G[T].findChild,z=i&&s(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(D,e);r&&delete D[e],M(t,e,n),r&&t!==D&&M(D,e,r)}:M,B=function(t){var e=W[t]=O(F[T]);return e._k=t,e},H=J&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,e,n){return t===D&&Y($,e,n),b(t),e=g(e,!0),b(n),o(W,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,N)||M(t,N,w(1,{})),t[N][e]=!0),z(t,e,n)):M(t,e,n)},Q=function(t,e){b(t);for(var n,r=m(e=x(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?O(t):Q(O(t),e)},V=function(t){var e=L.call(this,t=g(t,!0));return this===D&&o(W,t)&&!o($,t)?!1:e||!o(this,t)||!o(W,t)||o(this,N)&&this[N][t]?e:!0},X=function(t,e){if(t=x(t),e=g(e,!0),t!==D||!o(W,e)||o($,e)){var n=E(t,e);return!n||!o(W,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=C(x(t)),r=[],i=0;n.length>i;)o(W,e=n[i++])||e==N||e==f||r.push(e);return r},tt=function(t){for(var e,n=t===D,r=C(n?$:x(t)),i=[],u=0;r.length>u;)o(W,e=r[u++])&&(n?o(D,e):!0)&&i.push(W[e]);return i};J||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call($,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),z(this,t,w(1,n))};return i&&K&&z(D,t,{configurable:!0,set:e}),B(t)},c(F[T],"toString",function(){return this._k}),j.f=X,k.f=Y,n(33).f=S.f=Z,n(19).f=V,n(34).f=tt,i&&!n(18)&&c(D,"propertyIsEnumerable",V,!0),v.f=function(t){return B(d(t))}),u(u.G+u.W+u.F*!J,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=P(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=F(t)},keyFor:function(t){if(H(t))return h(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!J,"Object",{create:q,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),I&&u(u.S+u.F*(!J||s(function(){var t=F();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),H(e)?void 0:e}),r[1]=e,A.apply(I,r)}}}),F[T][U]||n(5)(F[T],U,F[T].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){n(64);for(var r=n(1),o=n(5),i=n(17),u=n(7)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;5>f;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,e){},function(t,e){t.exports='<div class="weui_panel weui_panel_access"> <div class=weui_panel_hd v-if=header @click=onClickHeader v-html=header></div> <div class=weui_panel_bd> <a :href=getUrl(item.url) v-for="item in list" @click.prevent=onItemClick(item) class="weui_media_box weui_media_appmsg" v-if="type === \'1\'"> <div class=weui_media_hd v-if=item.src> <img class=weui_media_appmsg_thumb :src=item.src alt=""> </div> <div class=weui_media_bd> <h4 class=weui_media_title>{{item.title}}</h4> <p class=weui_media_desc>{{item.desc}}</p> </div> </a> <div class="weui_media_box weui_media_text" v-for="item in list" @click.prevent=onItemClick(item) v-if="type === \'2\'"> <h4 class=weui_media_title>{{item.title}}</h4> <p class=weui_media_desc>{{item.desc}}</p> </div> <div class="weui_media_box weui_media_small_appmsg"> <div class="weui_cells weui_cells_access"> <a class=weui_cell :href=getUrl(item.url) v-for="item in list" @click.prevent=onItemClick(item) v-if="type === \'3\'"> <div class=weui_cell_hd> <img :src=item.src alt="" style=width:20px;margin-right:5px;display:block> </div> <div class="weui_cell_bd weui_cell_primary"> <p>{{item.title}}</p> </div> <span class=weui_cell_ft></span> </a> </div> </div> </div> <a class=weui_panel_ft :href=getUrl(footer.url) v-if="footer && type !== \'3\'" @click.prevent=onClickFooter v-html=footer.title></a> </div>'},function(t,e,n){var r,o;n(71),r=n(37),o=n(72),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUserInfo = getUserInfo;

	var _store = __webpack_require__(40);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getUserInfo() {
	  return _store2.default.state.user.userInfo;
	} /**
	   * Created by Alex on 16/8/21.
	   */

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n<group style=\"margin: 0\">\n\t<group-title type=\"success\">个人信息</group-title>\n\t<cell title=\"头像\">\n\t\t<div slot=\"value\">\n\t\t\t<img :src=\"user.headImgUrl\" width=\"33\">\n\t\t</div>\n\t</cell>\n\t<cell title=\"昵称\" is-link :value=\"user.nickname\"></cell>\n\t<cell title=\"性别\" is-link></cell>\n\t<cell title=\"居住地\" is-link></cell>\n\t<cell title=\"手机号\" is-link></cell>\n</group>\n\n<group>\n\t<group-title type=\"glass\">孩子信息</group-title>\n</group>\n\n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(170)
	__vue_script__ = __webpack_require__(171)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/upload.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(172)
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

	var _button = __webpack_require__(106);

	var _button2 = _interopRequireDefault(_button);

	var _activityService = __webpack_require__(110);

	var _activityService2 = _interopRequireDefault(_activityService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="mz-box-upload mz-wrap mz-container">
	// 		<textarea placeholder="这一刻的想法..." v-model="content"></textarea>
	// 		<div class="mz-flex">
	// 			<i class="mz-icon mz-icon-add"  @click="upload"></i>
	//
	// 			<div style="flex: 1;margin-left: 10px">
	// 				<span style="color:#eca409;font-size: 1.6rem">上传图证</span>
	// 				<p>每位用户每次打卡限制上传一张图片</p>
	// 			</div>
	//
	// 		</div>
	// 	</div>
	//
	// 	<div style="margin-top: 30px">
	// 		<m-button type="success" large @click="submit">确认</m-button>
	// 	</div>
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
				content: ''
			};
		},
		components: {
			mButton: _button2.default
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
			}
		},
		methods: {
			upload: function upload() {
				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function success(res) {
						var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
					}
				});
			},

			submit: function submit() {
				_activityService2.default.sign(this.id, '', this.content).then(function () {}).catch();
			}
		}
	};
	// </script>

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mz-box-upload mz-wrap mz-container\">\n\t<textarea placeholder=\"这一刻的想法...\" v-model=\"content\"></textarea>\n\t<div class=\"mz-flex\">\n\t\t<i class=\"mz-icon mz-icon-add\"  @click=\"upload\"></i>\n\n\t\t<div style=\"flex: 1;margin-left: 10px\">\n\t\t\t<span style=\"color:#eca409;font-size: 1.6rem\">上传图证</span>\n\t\t\t<p>每位用户每次打卡限制上传一张图片</p>\n\t\t</div>\n\n\t</div>\n</div>\n\n<div style=\"margin-top: 30px\">\n\t<m-button type=\"success\" large @click=\"submit\">确认</m-button>\n</div>\n";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(174)
	__vue_script__ = __webpack_require__(175)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/sign/sign.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(176)
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
/* 174 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _avatarItem = __webpack_require__(26);

	var _avatarItem2 = _interopRequireDefault(_avatarItem);

	var _contentWithTitle = __webpack_require__(121);

	var _contentWithTitle2 = _interopRequireDefault(_contentWithTitle);

	var _iconItem = __webpack_require__(30);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _cardWithAvatar = __webpack_require__(125);

	var _cardWithAvatar2 = _interopRequireDefault(_cardWithAvatar);

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	var _footerButton = __webpack_require__(133);

	var _footerButton2 = _interopRequireDefault(_footerButton);

	var _index3 = __webpack_require__(143);

	var _index4 = _interopRequireDefault(_index3);

	var _activityService = __webpack_require__(110);

	var _activityService2 = _interopRequireDefault(_activityService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<scroller lock-x style="position: absolute;top:0;left: 0;right: 0;bottom: 50px" height="auto">
	// 		<div class="mz-sign">
	// 			<div class="mz-item-cover">
	// 				<avatar-item avatar-url="http://static.youku.com/user/img/avatar/310/39.jpg">
	// 					<h4>墨子家</h4>
	// 					<p>发起了活动: 《100天阅读计划》</p>
	// 					<p>活动时间: 07月28日 - 08月16日</p>
	// 					<p>报名截至时间:08月16日</p>
	// 					<p>每人保证金: 100元</p>
	// 				</avatar-item>
	// 			</div>
	//
	// 			<wrap title="活动介绍:" type="success">
	// 				打卡规则:三天为一个周期学完一课,一个月十节课,三个月结束初级A班所有课程。
	// 			</wrap>
	//
	// 			<wrap title="相关课程:" type="warn">
	//
	// 			</wrap>
	//
	// 			<div class="mz-content-container" style="margin-top: 10px">
	// 				<icon-item type="people">已报名人数:3</icon-item>
	// 				<icon-item type="money">每人保证金</icon-item>
	// 				<icon-item type="gift">剩余2人在坚持,每人可获得100元</icon-item>
	// 			</div>
	//
	// 			<card
	// 							head-img-url="http://static.youku.com/user/img/avatar/310/39.jpg"
	// 							cover="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png"
	// 							:zan="2"
	// 							:comments="12"
	// 							:sign-id="2"
	// 							:activity-id="2">
	// 			</card>
	//
	// 		</div>
	// 	</scroller>
	//
	// 	<f-button type="glass"
	// 						action="今日已打卡">
	// 	</f-button>
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
	exports.default = {
		components: {
			avatarItem: _avatarItem2.default,
			wrap: _contentWithTitle2.default,
			iconItem: _iconItem2.default,
			card: _cardWithAvatar2.default,
			scroller: _index2.default,
			fButton: _footerButton2.default,
			alert: _index4.default
		},
		data: function data() {
			return {
				showMessage: false,
				message: ''
			};
		},
		route: {
			data: function data(_ref) {
				var id = _ref.to.params.id;

				this.id = id;
			}
		},
		events: {
			DO: function DO() {
				this.$router.go({ name: 'upload' });
			}
		}
	};
	// </script>

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "\n<scroller lock-x style=\"position: absolute;top:0;left: 0;right: 0;bottom: 50px\" height=\"auto\">\n\t<div class=\"mz-sign\">\n\t\t<div class=\"mz-item-cover\">\n\t\t\t<avatar-item avatar-url=\"http://static.youku.com/user/img/avatar/310/39.jpg\">\n\t\t\t\t<h4>墨子家</h4>\n\t\t\t\t<p>发起了活动: 《100天阅读计划》</p>\n\t\t\t\t<p>活动时间: 07月28日 - 08月16日</p>\n\t\t\t\t<p>报名截至时间:08月16日</p>\n\t\t\t\t<p>每人保证金: 100元</p>\n\t\t\t</avatar-item>\n\t\t</div>\n\n\t\t<wrap title=\"活动介绍:\" type=\"success\">\n\t\t\t打卡规则:三天为一个周期学完一课,一个月十节课,三个月结束初级A班所有课程。\n\t\t</wrap>\n\n\t\t<wrap title=\"相关课程:\" type=\"warn\">\n\n\t\t</wrap>\n\n\t\t<div class=\"mz-content-container\" style=\"margin-top: 10px\">\n\t\t\t<icon-item type=\"people\">已报名人数:3</icon-item>\n\t\t\t<icon-item type=\"money\">每人保证金</icon-item>\n\t\t\t<icon-item type=\"gift\">剩余2人在坚持,每人可获得100元</icon-item>\n\t\t</div>\n\n\t\t<card\n\t\t\t\t\t\thead-img-url=\"http://static.youku.com/user/img/avatar/310/39.jpg\"\n\t\t\t\t\t\tcover=\"http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png\"\n\t\t\t\t\t\t:zan=\"2\"\n\t\t\t\t\t\t:comments=\"12\"\n\t\t\t\t\t\t:sign-id=\"2\"\n\t\t\t\t\t\t:activity-id=\"2\">\n\t\t</card>\n\n\t</div>\n</scroller>\n\n<f-button type=\"glass\"\n\t\t\t\t\taction=\"今日已打卡\">\n</f-button>\n";

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(178)
	__vue_script__ = __webpack_require__(179)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(183)
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
/* 178 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(40);

	var _store2 = _interopRequireDefault(_store);

	var _userAction = __webpack_require__(180);

	var _weixinService = __webpack_require__(182);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		store: _store2.default,
		vuex: {
			actions: {
				userInfoQuery: _userAction.userInfoQuery
			}
		},
		ready: function ready() {
			this.userInfoQuery();
			(0, _weixinService.jssdkConfigInit)(false, ['uploadImage', 'chooseImage']);
		}
	};
	// </script>
	// <template>
	// 	<div>
	// 		<router-view></router-view>
	// 	</div>
	//
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
	// </style>
	//
	// <script>

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.userInfoQuery = undefined;

	var _user = __webpack_require__(181);

	var _user2 = _interopRequireDefault(_user);

	var _mutationTypes = __webpack_require__(62);

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

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _resourse = __webpack_require__(66);

	exports.default = {
		API_GET_USER_INFO: function API_GET_USER_INFO() {
			return _resourse.userResource.get();
		},
		API_GET_JSSDK_CONFIG: function API_GET_JSSDK_CONFIG(debug, jsApiList) {
			return _resourse.weixinJSSDKResource.save({ debug: debug, jsApiList: jsApiList });
		}
	}; /**
	    * Created by Alex on 16/8/21.
	    */

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.jssdkConfigInit = undefined;

	var _user = __webpack_require__(181);

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
/* 183 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n\t<router-view></router-view>\n</div>\n\n";

/***/ },
/* 184 */
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