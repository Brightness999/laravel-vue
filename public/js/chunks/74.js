(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-timeline',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-video-player */ "./node_modules/vue-video-player/dist/vue-video-player.js");
/* harmony import */ var vue_video_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_video_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_timeline_VxTimeline_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/timeline/VxTimeline.vue */ "./resources/js/src/components/timeline/VxTimeline.vue");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    videoPlayer: vue_video_player__WEBPACK_IMPORTED_MODULE_1__["videoPlayer"],
    VxTimeline: _components_timeline_VxTimeline_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      // card 1
      card_1: {},
      card_2: {},
      card_3: {},
      card_4: {},
      card_5: {},
      card_6: {},
      card_7: {},
      card_8: {},
      chatLog: [],
      chatMsgInput: '',
      card_9: {},
      timelineData: [{
        color: 'primary',
        icon: 'PlusIcon',
        title: 'New Task Added',
        desc: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        time: '25 Days Ago'
      }, {
        color: 'warning',
        icon: 'AlertCircleIcon',
        title: 'Task Update Found',
        desc: 'Cupcake gummi bears soufflé caramels candy',
        time: '15 Days Ago'
      }, {
        color: 'success',
        icon: 'CheckIcon',
        title: 'Task Finished',
        desc: 'Candy ice cream cake. Halvah gummi bears',
        time: '20 mins ago'
      }],
      name: '',
      email: '',
      msg: '',
      playerOptions: {},
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  mounted: function mounted() {
    var scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
    scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
  },
  created: function created() {
    var _this = this;

    // Card 1
    this.$http.get('/api/users/pixinvent/product/1').then(function (response) {
      _this.card_1 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 2

    this.$http.get('/api/users/pixinvent/product/sales/1').then(function (response) {
      _this.card_2 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 3

    this.$http.get('/api/users/pixinvent/product/goals/1').then(function (response) {
      _this.card_3 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 4

    this.$http.get('/api/users/89').then(function (response) {
      _this.card_4 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 5

    this.$http.get('/api/users/58').then(function (response) {
      _this.card_5 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 6

    this.$http.get('/api/users/16').then(function (response) {
      _this.card_6 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 7

    this.$http.get('/api/place/18').then(function (response) {
      _this.card_7 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 8

    this.$http.get('/api/place/76/weather').then(function (response) {
      _this.card_8 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Chat Log

    this.$http.get('/api/chat/demo-1/log').then(function (response) {
      _this.chatLog = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Card 9

    this.$http.get('/api/item/12/review').then(function (response) {
      _this.card_9 = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Player Options

    this.$http.get('/api/card/card-basic/player-option').then(function (response) {
      _this.playerOptions = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxTimeline.scss\n  Description: Styles for vx-timeline component\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir=ltr] .vx-timeline {\n  margin-left: 1.5rem;\n  padding-left: 40px;\n  border-left: 2px solid #E5E8EB;\n}\n[dir=rtl] .vx-timeline {\n  margin-right: 1.5rem;\n  padding-right: 40px;\n  border-right: 2px solid #E5E8EB;\n}\n[dir] .theme-dark .vx-timeline {\n  border-color: #414561;\n}\n.vx-timeline li {\n  position: relative;\n}\n[dir] .vx-timeline li {\n  margin-bottom: 20px;\n}\n.vx-timeline li .timeline-icon {\n  position: absolute;\n  top: 0;\n}\n[dir] .vx-timeline li .timeline-icon {\n  border-radius: 50%;\n  padding: 0.75rem;\n  padding-bottom: 0.4rem;\n}\n[dir=ltr] .vx-timeline li .timeline-icon {\n  left: -4.3rem;\n}\n[dir=rtl] .vx-timeline li .timeline-icon {\n  right: -4.3rem;\n}\n.vx-timeline li .activity-desc {\n  font-size: 0.9rem;\n}\n.vx-timeline li .activity-e-time {\n  font-size: 0.8rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#demo-basic-card .overlay-card .vx-card__collapsible-content {\n  max-height: 485px;\n}\n#demo-basic-card .chat-card-log {\n  height: 360px;\n}\n[dir] #demo-basic-card .chat-card-log .chat-sent-msg {\n  background-color: #f2f4f7 !important;\n}\n#demo-basic-card .card-video .video-js {\n  height: 370px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTimeline.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBasic.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=template&id=0a954b3e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=template&id=0a954b3e& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "vx-timeline" },
    _vm._l(_vm.data, function(item) {
      return _c("li", { key: item.title }, [
        _c(
          "div",
          { staticClass: "timeline-icon", class: "bg-" + item.color },
          [
            _c("feather-icon", {
              attrs: {
                icon: item.icon,
                svgClasses: "text-white stroke-current w-5 h-5"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "timeline-info" }, [
          _c("p", { staticClass: "font-semibold" }, [
            _vm._v(_vm._s(item.title))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "activity-desc" }, [
            _vm._v(_vm._s(item.desc))
          ])
        ]),
        _vm._v(" "),
        _c("small", { staticClass: "text-grey activity-e-time" }, [
          _vm._v(_vm._s(item.time))
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=template&id=490e6bf0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=template&id=490e6bf0& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "demo-basic-card" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
        [
          _c("vx-card", [
            _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
              _c("img", {
                staticClass: "responsive card-img-top",
                attrs: { src: _vm.card_1.img, alt: "content-img" }
              })
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "mb-2" }, [
              _vm._v(_vm._s(_vm.card_1.title))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-grey" }, [
              _vm._v(_vm._s(_vm.card_1.subtitle))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-grey" }, [
              _vm._v(_vm._s(_vm.card_1.subtitle_2))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-between flex-wrap" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mt-4 mr-2 shadow-lg",
                    attrs: {
                      type: "gradient",
                      color: "#7367F0",
                      "gradient-color-secondary": "#CE9FFC"
                    }
                  },
                  [_vm._v("Download")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "mt-4",
                    attrs: { type: "border", color: "#b9b9b9" }
                  },
                  [_vm._v("View All")]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            [
              _c("img", {
                staticClass: "responsive rounded-lg",
                attrs: { src: _vm.card_2.img, alt: "content-img" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "my-6" }, [
                _c("h5", { staticClass: "mb-2" }, [
                  _vm._v(_vm._s(_vm.card_2.title))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(_vm.card_2.subtitle))
                ])
              ]),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-between flex-wrap" }, [
                _c("span", [
                  _c("p", { staticClass: "text-xl" }, [
                    _vm._v(_vm._s(_vm.card_2.footer_text_left_value))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_2.footer_text_left_label))
                  ])
                ]),
                _vm._v(" "),
                _c("span", [
                  _c("p", { staticClass: "text-xl" }, [
                    _vm._v(_vm._s(_vm.card_2.footer_text_right_value))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_2.footer_text_right_label))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
        [
          _c("vx-card", [
            _c("img", {
              staticClass: "responsive rounded-lg",
              attrs: { src: _vm.card_3.img, alt: "content-img" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "my-6" }, [
              _c("h5", { staticClass: "mb-2" }, [
                _vm._v(_vm._s(_vm.card_3.title))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c("div", { staticClass: "flex justify-between" }, [
                  _c("small", { staticClass: "font-semibold" }, [
                    _vm._v(_vm._s(_vm.card_3.current_progress))
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_3.progress_goal))
                  ])
                ]),
                _vm._v(" "),
                _c("vs-progress", {
                  staticClass: "block mt-1 shadow-md",
                  attrs: { percent: _vm.card_3.progress_done_per }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-between flex-wrap" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mt-4 mr-2 shadow-lg",
                    attrs: {
                      type: "gradient",
                      color: "#7367F0",
                      "gradient-color-secondary": "#CE9FFC"
                    }
                  },
                  [_vm._v(_vm._s(_vm.card_3.btn_left_text))]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "mt-4",
                    attrs: { type: "border", color: "#b9b9b9" }
                  },
                  [_vm._v(_vm._s(_vm.card_3.btn_right_text))]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "p-2" },
            [
              _c("vs-avatar", {
                staticClass: "mx-auto mb-6 block",
                attrs: { size: "80px", src: _vm.card_4.userImg }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c("h4", [_vm._v(_vm._s(_vm.card_4.name))]),
                _vm._v(" "),
                _c("p", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(_vm.card_4.profession))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-between flex-wrap" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "mt-4 mr-2 shadow-lg",
                      attrs: {
                        type: "gradient",
                        color: "#7367F0",
                        "gradient-color-secondary": "#CE9FFC"
                      }
                    },
                    [_vm._v(_vm._s(_vm.card_4.btn_1_text))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mt-4",
                      attrs: { type: "border", color: "#b9b9b9" }
                    },
                    [_vm._v(_vm._s(_vm.card_4.btn_2_text))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "footer" },
                [
                  _c("vs-divider"),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex justify-between" }, [
                    _c(
                      "span",
                      { staticClass: "flex items-center" },
                      [
                        _c("feather-icon", {
                          attrs: {
                            icon: _vm.card_4.footer_text_1_icon,
                            svgClasses: "h-5 w-5 text-warning stroke-current"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2" }, [
                          _vm._v(_vm._s(_vm.card_4.footer_text_1))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "flex items-center" },
                      [
                        _c("feather-icon", {
                          attrs: {
                            icon: _vm.card_4.footer_text_2_icon,
                            svgClasses: "h-5 w-5 text-primary stroke-current"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2" }, [
                          _vm._v(_vm._s(_vm.card_4.footer_text_2))
                        ])
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "p-2" },
            [
              _c("div", { staticClass: "text-center" }, [
                _c("h4", [_vm._v(_vm._s(_vm.card_5.name))]),
                _vm._v(" "),
                _c("p", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(_vm.card_5.profession))
                ])
              ]),
              _vm._v(" "),
              _c("vs-avatar", {
                staticClass: "mx-auto my-6 block",
                attrs: { size: "80px", src: _vm.card_5.userImg }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-between text-center" }, [
                _c("span", [
                  _c("p", { staticClass: "text-xl font-semibold" }, [
                    _vm._v(_vm._s(_vm.card_5.user_meta_1_title))
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_5.user_meta_1_label))
                  ])
                ]),
                _vm._v(" "),
                _c("span", [
                  _c("p", { staticClass: "text-xl font-semibold" }, [
                    _vm._v(_vm._s(_vm.card_5.user_meta_2_title))
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_5.user_meta_2_label))
                  ])
                ]),
                _vm._v(" "),
                _c("span", [
                  _c("p", { staticClass: "text-xl font-semibold" }, [
                    _vm._v(_vm._s(_vm.card_5.user_meta_3_title))
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-grey" }, [
                    _vm._v(_vm._s(_vm.card_5.user_meta_3_label))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "w-full mt-6",
                  attrs: {
                    type: "gradient",
                    color: "#7367F0",
                    "gradient-color-secondary": "#CE9FFC"
                  }
                },
                [_vm._v(_vm._s(_vm.card_5.btn_text))]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "p-2" },
            [
              _c("vs-avatar", {
                staticClass: "mx-auto mb-6 block",
                attrs: { size: "80px", src: _vm.card_6.userImg }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c("h4", [_vm._v(_vm._s(_vm.card_6.name))]),
                _vm._v(" "),
                _c("p", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(_vm.card_6.profession))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4 mt-base" },
                [
                  _c("div", { staticClass: "flex justify-between" }, [
                    _c("small", { staticClass: "font-semibold" }, [
                      _vm._v(_vm._s(_vm.card_6.current_progress))
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-grey" }, [
                      _vm._v(_vm._s(_vm.card_6.progress_goal))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vs-progress", {
                    staticClass: "block mt-1 shadow-md",
                    attrs: { percent: _vm.card_6.progress_done_per }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-between flex-wrap" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "mt-4 mr-2 shadow-lg",
                      attrs: {
                        type: "gradient",
                        color: "#7367F0",
                        "gradient-color-secondary": "#CE9FFC"
                      }
                    },
                    [_vm._v(_vm._s(_vm.card_6.btn_left_text))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mt-4",
                      attrs: { type: "border", color: "#b9b9b9" }
                    },
                    [_vm._v(_vm._s(_vm.card_6.btn_right_text))]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "overlay-card overflow-hidden" },
            [
              _c("template", { slot: "no-body" }, [
                _c("img", {
                  staticClass: "responsive",
                  attrs: {
                    src: _vm.card_7.overlay_img,
                    alt: "user-profile-cover"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "card-overlay text-white flex flex-col justify-between"
                  },
                  [
                    _c("h4", { staticClass: "text-white mb-4" }, [
                      _vm._v(_vm._s(_vm.card_7.title))
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.card_7.text))])
                  ]
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "overlay-card overflow-hidden" },
            [
              _c("template", { slot: "no-body" }, [
                _c("img", {
                  staticClass: "responsive blur-1",
                  attrs: {
                    src: _vm.card_8.overlay_img,
                    alt: "user-profile-cover"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-overlay text-white" }, [
                  _c(
                    "div",
                    { staticClass: "flex flex-col justify-between h-full" },
                    [
                      _c("div", { staticClass: "text-center mt-8 w-full" }, [
                        _c(
                          "h3",
                          { staticClass: "text-white mb-2 tracking-wide" },
                          [_vm._v(_vm._s(_vm.card_8.weather))]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-6" }, [
                          _vm._v(_vm._s(_vm.card_8.place_name))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "flex justify-around" },
                          [
                            _c("feather-icon", {
                              attrs: {
                                icon: _vm.card_8.weather_icon,
                                svgClasses: "w-24 h-24 text-white"
                              }
                            }),
                            _vm._v(" "),
                            _c("h2", { staticClass: "text-white text-big" }, [
                              _vm._v(_vm._s(_vm.card_8.temperature) + " "),
                              _c("sup", { staticClass: "text-2xl" }, [
                                _vm._v("o")
                              ])
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center w-full" },
                        _vm._l(_vm.card_8.meta, function(meta) {
                          return _c(
                            "div",
                            {
                              key: meta.label,
                              staticClass:
                                "flex justify-between px-8 mb-8 text-xl"
                            },
                            [
                              _c("span", [_vm._v(_vm._s(meta.label))]),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(meta.value))])
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "overflow-hidden", attrs: { title: "Chat" } },
            [
              _c("template", { slot: "no-body" }, [
                _c(
                  "div",
                  { staticClass: "chat-card-log" },
                  [
                    _c(
                      _vm.scrollbarTag,
                      {
                        key: _vm.$vs.rtl,
                        ref: "chatLogPS",
                        tag: "component",
                        staticClass: "scroll-area pt-6 px-6",
                        attrs: { settings: _vm.settings }
                      },
                      [
                        _c(
                          "ul",
                          { ref: "chatLog" },
                          _vm._l(_vm.chatLog, function(msg, index) {
                            return _c(
                              "li",
                              {
                                key: index,
                                staticClass: "flex items-start",
                                class: {
                                  "flex-row-reverse": msg.isSent,
                                  "mt-4": index
                                }
                              },
                              [
                                _c("vs-avatar", {
                                  staticClass: "m-0 flex-shrink-0",
                                  class: msg.isSent ? "ml-3" : "mr-3",
                                  attrs: { size: "40px", src: msg.senderImg }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md",
                                    class: {
                                      "chat-sent-msg bg-primary-gradient text-white":
                                        msg.isSent,
                                      "border border-solid d-theme-border-grey-light": !msg.isSent
                                    }
                                  },
                                  [_c("span", [_vm._v(_vm._s(msg.msg))])]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex bg-white p-6 chat-input-container" },
                  [
                    _c("vs-input", {
                      staticClass: "mr-3 w-full",
                      attrs: { placeholder: "Type Your Message" },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          _vm.chatMsgInput = ""
                        }
                      },
                      model: {
                        value: _vm.chatMsgInput,
                        callback: function($$v) {
                          _vm.chatMsgInput = $$v
                        },
                        expression: "chatMsgInput"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-button", {
                      attrs: { "icon-pack": "feather", icon: "icon-send" },
                      on: {
                        click: function($event) {
                          _vm.chatMsgInput = ""
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 sm:w-1/2 mb-base" },
        [
          _vm.card_9.title
            ? _c(
                "vx-card",
                {
                  attrs: {
                    title: _vm.card_9.title,
                    subtitle: _vm.card_9.subtitle
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "actions" },
                    [
                      _c("feather-icon", {
                        attrs: {
                          icon: "MoreVerticalIcon",
                          svgClasses: "w-6 h-6 text-grey"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "responsive rounded-lg",
                    attrs: { src: _vm.card_9.img, alt: "content-img" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex mt-6 flex-wrap" }, [
                    _c(
                      "span",
                      { staticClass: "flex mr-6" },
                      [
                        _c("feather-icon", {
                          staticClass: "cursor-pointer",
                          attrs: {
                            icon: "ThumbsUpIcon",
                            svgClasses: "text-success stroke-current h-6 w-6"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2" }, [
                          _vm._v(_vm._s(_vm.card_9.meta.likes))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "flex mr-6" },
                      [
                        _c("feather-icon", {
                          staticClass: "cursor-pointer",
                          attrs: {
                            icon: "MessageSquareIcon",
                            svgClasses: "text-primary stroke-current h-6 w-6"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2" }, [
                          _vm._v(_vm._s(_vm.card_9.meta.comments))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "flex mr-6" },
                      [
                        _c("feather-icon", {
                          staticClass: "cursor-pointer",
                          attrs: {
                            icon: "ThumbsDownIcon",
                            svgClasses: "text-danger stroke-current h-6 w-6"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2" }, [
                          _vm._v(_vm._s(_vm.card_9.meta.dislikes))
                        ])
                      ],
                      1
                    )
                  ])
                ],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-2/3 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "overflow-hidden" },
            [
              _c(
                "template",
                { slot: "no-body" },
                [
                  _c("video-player", {
                    ref: "player",
                    staticClass: "media-video-player card-video",
                    attrs: { options: _vm.playerOptions }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Activity Timeline" } },
            [_c("vx-timeline", { attrs: { data: _vm.timelineData } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Contact Form" } },
            [
              _c("vs-input", {
                staticClass: "w-full mb-4",
                attrs: { placeholder: "Name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full mb-4",
                attrs: { placeholder: "Email", type: "email" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("vs-textarea", {
                attrs: { label: "Message" },
                model: {
                  value: _vm.msg,
                  callback: function($$v) {
                    _vm.msg = $$v
                  },
                  expression: "msg"
                }
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mr-4",
                  on: {
                    click: function($event) {
                      _vm.name = _vm.email = _vm.msg = ""
                    }
                  }
                },
                [_vm._v("Submit")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mt-3",
                  attrs: { type: "border", color: "warning" },
                  on: {
                    click: function($event) {
                      _vm.name = _vm.email = _vm.msg = ""
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row match-height" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            [
              _c(
                "vs-tabs",
                [
                  _c("vs-tab", { attrs: { "vs-label": "HTML" } }, [
                    _c("div", { staticClass: "mt-3" }, [
                      _c("p", [
                        _vm._v(
                          "Lollipop chocolate cake muffin pudding biscuit cheesecake. Pudding biscuit caramels jelly beans caramels. Pie macaroon wafer danish sweet caramels. Icing jelly-o cotton candy sweet roll brownie marshmallow marzipan icing. Candy canes apple pie icing. Tart macaroon pastry caramels chocolate bar. Gummies cupcake sesame snaps chocolate cookie sugar plum bear claw. Cheesecake chocolate cake dessert bear claw candy tiramisu soufflé."
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vs-tab", { attrs: { "vs-label": "JS" } }, [
                    _c("div", { staticClass: "mt-3" }, [
                      _c("p", [
                        _vm._v(
                          "Wafer sesame snaps toffee brownie liquorice danish icing fruitcake croissant. Gingerbread chocolate cake danish pie gingerbread. Muffin donut fruitcake powder jelly lemon drops cheesecake. Croissant oat cake carrot cake tiramisu halvah. Cupcake cupcake wafer muffin topping danish cheesecake croissant. Liquorice donut liquorice lollipop sesame snaps lollipop ice cream macaroon danish. Cupcake chocolate cake chupa chups gummi bears macaroon."
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vs-tab", { attrs: { "vs-label": "OUTPUT" } }, [
                    _c("div", { staticClass: "mt-3" }, [
                      _c("p", [
                        _vm._v(
                          "Cookie cheesecake fruitcake sweet roll gummi bears marzipan marshmallow marshmallow. Cheesecake muffin jujubes chocolate cake carrot cake jujubes croissant. Cake toffee carrot cake topping oat cake lemon drops toffee toffee marzipan. Gingerbread toffee marshmallow marshmallow caramels brownie donut cake. Cheesecake candy topping tart cotton candy chocolate bar jujubes powder chupa chups. Cupcake candy soufflé jelly beans. Icing lollipop tiramisu oat cake dessert."
                        )
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            [
              _c(
                "template",
                { slot: "no-body" },
                [
                  _c(
                    "vs-tabs",
                    {
                      attrs: { "vs-position": "left", "vs-alignment": "fixed" }
                    },
                    [
                      _c("vs-tab", { attrs: { "vs-label": "Features" } }, [
                        _c("div", { staticClass: "mt-1 pl-2" }, [
                          _c("p", [
                            _vm._v(
                              "Powder halvah dragée. Powder cupcake bear claw cookie sugar plum. Danish sesame snaps sugar plum brownie. Carrot cake fruitcake chocolate cake jelly beans toffee. Icing chocolate brownie. Biscuit candy canes jelly-o bonbon wafer jujubes. Chocolate cake sweet roll jelly-o chocolate bar. Liquorice tootsie roll ice cream sweet. Candy pie donut caramels bonbon macaroon dragée chupa chups gingerbread. Dragée fruitcake jujubes. Brownie caramels muffin caramels jelly apple pie."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vs-tab", { attrs: { "vs-label": "Products" } }, [
                        _c("div", { staticClass: "mt-1 pl-2" }, [
                          _c("p", [
                            _vm._v(
                              "Cotton candy dessert dragée bonbon jelly beans icing sweet roll. Sesame snaps cake dessert chupa chups sweet powder biscuit. Jelly beans caramels croissant cheesecake. Liquorice chocolate cake macaroon cake. Fruitcake croissant carrot cake cookie halvah sesame snaps toffee. Cake tootsie roll cake jelly beans croissant sugar plum jujubes. Bear claw sesame snaps lollipop. Pudding biscuit donut sweet roll pie apple pie wafer jelly beans brownie. Lemon drops ice cream candy canes soufflé muffin."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vs-tab", { attrs: { "vs-label": "Updates" } }, [
                        _c("div", { staticClass: "mt-1 pl-2" }, [
                          _c("p", [
                            _vm._v(
                              "Bear claw sesame snaps lollipop. Pudding biscuit donut sweet roll pie apple pie wafer jelly beans brownie. Lemon drops ice cream candy canes soufflé muffin. Caramels cookie macaroon sweet roll muffin liquorice brownie pie. Cupcake tootsie roll cupcake candy brownie icing bear claw jujubes cupcake. Marzipan pastry sesame snaps cotton candy chocolate cake tiramisu. Wafer apple pie cotton candy cotton candy icing."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vs-tab", { attrs: { "vs-label": "Links" } }, [
                        _c("div", { staticClass: "mt-1 pl-2" }, [
                          _c("p", [
                            _vm._v(
                              "Gingerbread dessert apple pie. Bear claw cake ice cream cookie. Toffee jujubes jelly beans cookie muffin. Wafer sugar plum bonbon sweet roll chocolate cake pie tootsie roll jelly chocolate. Apple pie oat cake chocolate cake toffee lollipop sesame snaps chocolate bar. Chocolate liquorice pudding fruitcake toffee topping liquorice. Wafer topping cotton candy dessert carrot cake cotton candy. Pudding chocolate cake dragée cupcake. Pastry marzipan donut. Ice cream chocolate tart chupa chups liquorice marshmallow sweet roll jelly soufflé."
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [
          _c(
            "vx-card",
            [
              _c(
                "vs-tabs",
                { attrs: { "vs-alignment": "fixed", alignment: "fixed" } },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        "vs-label": "Profile",
                        "vs-icon": "account_circle"
                      }
                    },
                    [
                      _c("div", { staticClass: "mt-3" }, [
                        _c("p", [
                          _vm._v(
                            "Liquorice croissant chocolate chocolate cake. Bonbon dessert carrot cake fruitcake pudding sugar plum sweet gummies bear claw. Gummies marshmallow chocolate cake. Jelly icing cake carrot cake. Gummies marshmallow chocolate carrot cake lemon drops. Soufflé gingerbread cupcake chupa chups dragée halvah toffee liquorice. Jelly-o pie ice cream ice cream pudding sweet. "
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    { attrs: { "vs-label": "Messages", "vs-icon": "message" } },
                    [
                      _c("div", { staticClass: "mt-3" }, [
                        _c("p", [
                          _vm._v(
                            "Jelly-o soufflé danish jelly-o jujubes oat cake caramels chocolate. Danish jelly chocolate bar jelly jujubes gummies halvah. Candy jujubes jujubes cheesecake bear claw sesame snaps cheesecake gingerbread. Toffee bonbon candy canes macaroon candy lollipop dragée. Brownie lemon drops chocolate cake pastry jelly biscuit."
                          )
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 md:mt-0 mt-base" },
        [
          _c(
            "vx-card",
            [
              _c(
                "template",
                { slot: "no-body" },
                [
                  _c(
                    "vs-tabs",
                    { attrs: { "vs-position": "left", alignment: "fixed" } },
                    [
                      _c(
                        "vs-tab",
                        {
                          attrs: {
                            "vs-label": "Features",
                            "vs-icon": "extension"
                          }
                        },
                        [
                          _c("div", { staticClass: "mt-1 pl-2" }, [
                            _c("p", [
                              _vm._v(
                                "Chocolate cake brownie candy canes marzipan. Chocolate cake powder jujubes bonbon tart cake bonbon sweet roll. Carrot cake sweet dragée ice cream pie candy canes sesame snaps tart halvah. Lemon drops pastry tart candy. Caramels jelly beans dessert dessert cupcake lollipop cake cotton candy. Pudding chupa chups ice cream tiramisu liquorice. Lollipop jelly pie tiramisu pudding marshmallow."
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-tab",
                        {
                          attrs: { "vs-label": "Products", "vs-icon": "store" }
                        },
                        [
                          _c("div", { staticClass: "mt-1 pl-2" }, [
                            _c("p", [
                              _vm._v(
                                "Bear claw liquorice candy liquorice chocolate cake wafer. Gummi bears muffin cake icing pastry marshmallow lemon drops sweet chocolate. Marzipan apple pie jelly beans marshmallow jelly-o. Brownie danish bear claw. Dragée oat cake marzipan fruitcake caramels croissant tootsie roll cupcake sesame snaps. Cheesecake jujubes gingerbread apple pie bonbon caramels chocolate bar."
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-tab",
                        {
                          attrs: { "vs-label": "Updates", "vs-icon": "get_app" }
                        },
                        [
                          _c("div", { staticClass: "mt-1 pl-2" }, [
                            _c("p", [
                              _vm._v(
                                "Cheesecake pie lollipop dragée candy icing jujubes fruitcake. Apple pie caramels apple pie gingerbread danish candy canes brownie liquorice topping. Icing dragée donut jelly caramels cake. Toffee gummi bears ice cream apple pie. Jujubes candy marzipan lollipop tiramisu biscuit apple pie liquorice. Lemon drops icing gummies cake marshmallow. "
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-tab",
                        { attrs: { "vs-label": "Links", "vs-icon": "link" } },
                        [
                          _c("div", { staticClass: "mt-1 pl-2" }, [
                            _c("p", [
                              _vm._v(
                                "Brownie marshmallow halvah wafer tart jelly. Chocolate cake apple pie halvah brownie pastry icing pudding marshmallow. Jelly beans candy canes sesame snaps chocolate cake sesame snaps chocolate cake candy tiramisu. Caramels sesame snaps candy canes cheesecake. Chocolate bar pie pastry liquorice tart. Cupcake biscuit cupcake halvah tiramisu muffin."
                              )
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/timeline/VxTimeline.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/timeline/VxTimeline.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxTimeline_vue_vue_type_template_id_0a954b3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxTimeline.vue?vue&type=template&id=0a954b3e& */ "./resources/js/src/components/timeline/VxTimeline.vue?vue&type=template&id=0a954b3e&");
/* harmony import */ var _VxTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxTimeline.vue?vue&type=script&lang=js& */ "./resources/js/src/components/timeline/VxTimeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxTimeline.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxTimeline_vue_vue_type_template_id_0a954b3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxTimeline_vue_vue_type_template_id_0a954b3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/timeline/VxTimeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/timeline/VxTimeline.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/timeline/VxTimeline.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTimeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTimeline.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/timeline/VxTimeline.vue?vue&type=template&id=0a954b3e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/timeline/VxTimeline.vue?vue&type=template&id=0a954b3e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_template_id_0a954b3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTimeline.vue?vue&type=template&id=0a954b3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/timeline/VxTimeline.vue?vue&type=template&id=0a954b3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_template_id_0a954b3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTimeline_vue_vue_type_template_id_0a954b3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardBasic.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardBasic.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardBasic_vue_vue_type_template_id_490e6bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardBasic.vue?vue&type=template&id=490e6bf0& */ "./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=template&id=490e6bf0&");
/* harmony import */ var _CardBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardBasic.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardBasic_vue_vue_type_template_id_490e6bf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardBasic_vue_vue_type_template_id_490e6bf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ui-elements/card/CardBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBasic.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=template&id=490e6bf0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=template&id=490e6bf0& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_template_id_490e6bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBasic.vue?vue&type=template&id=490e6bf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardBasic.vue?vue&type=template&id=490e6bf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_template_id_490e6bf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBasic_vue_vue_type_template_id_490e6bf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 5:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);