(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsGeneral_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsGeneral.vue */ "./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue");
/* harmony import */ var _UserSettingsChangePassword_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsChangePassword.vue */ "./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue");
/* harmony import */ var _UserSettingsInfo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettingsInfo.vue */ "./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue");
/* harmony import */ var _UserSettingsSocialLinks_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserSettingsSocialLinks.vue */ "./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue");
/* harmony import */ var _UserSettingsConnections_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserSettingsConnections.vue */ "./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue");
/* harmony import */ var _UserSettingsNotifications_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSettingsNotifications.vue */ "./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UserSettingsGeneral: _UserSettingsGeneral_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserSettingsChangePassword: _UserSettingsChangePassword_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserSettingsInfo: _UserSettingsInfo_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    UserSettingsSocialLinks: _UserSettingsSocialLinks_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserSettingsConnections: _UserSettingsConnections_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    UserSettingsNotifications: _UserSettingsNotifications_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      username: 'johny_01',
      name: this.$store.state.AppActiveUser.displayName,
      email: 'john@admin.com',
      company: 'SnowMash Technologies Pvt Ltd'
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      bio: this.$store.state.AppActiveUser.about,
      dob: null,
      country: 'USA',
      lang_known: ['English', 'Russian'],
      gender: 'male',
      mobile: '',
      website: '',
      // Options
      countryOptions: [{
        label: 'Australia',
        value: 'australia'
      }, {
        label: 'France',
        value: 'france'
      }, {
        label: 'Germany',
        value: 'germany'
      }, {
        label: 'India',
        value: 'india'
      }, {
        label: 'Jordan',
        value: 'jordan'
      }, {
        label: 'Morocco',
        value: 'morocco'
      }, {
        label: 'Portuguese',
        value: 'portuguese'
      }, {
        label: 'Syria',
        value: 'syria'
      }, {
        label: 'USA',
        value: 'usa'
      }],
      langOptions: [{
        label: 'English',
        value: 'english'
      }, {
        label: 'Spanish',
        value: 'spanish'
      }, {
        label: 'French',
        value: 'french'
      }, {
        label: 'Russian',
        value: 'russian'
      }, {
        label: 'German',
        value: 'german'
      }, {
        label: 'Arabic',
        value: 'arabic'
      }, {
        label: 'Sanskrit',
        value: 'sanskrit'
      }]
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      comment: true,
      answer: true,
      follow: false,
      news: false,
      product_update: false,
      blog: true
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      twitter: 'https://twitter.com/adoptionism744',
      facebook: 'https://www.facebook.com/adoptionism664',
      instagram: 'https://www.instagram.com/adopt-ionism744/',
      github: 'https://github.com/madop818',
      linkedin: 'https://codepen.io/adoptism243',
      slack: '@adoptionism744'
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=template&id=2e8453cd&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=template&id=2e8453cd& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "vs-tabs",
    {
      key: _vm.isSmallerScreen,
      staticClass: "tabs-shadow-none",
      attrs: {
        position: _vm.isSmallerScreen ? "top" : "left",
        id: "profile-tabs"
      }
    },
    [
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-user",
            label: !_vm.isSmallerScreen ? "General" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-general md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("user-settings-general")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-lock",
            label: !_vm.isSmallerScreen ? "Change Password" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("user-settings-change-password")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-info",
            label: !_vm.isSmallerScreen ? "Info" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-info md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("user-settings-info")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-github",
            label: !_vm.isSmallerScreen ? "Social Links" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-social-links md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("user-settings-social-links")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-link-2",
            label: !_vm.isSmallerScreen ? "Connections" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-text md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("user-settings-connections")],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-bell",
            label: !_vm.isSmallerScreen ? "Notifications" : ""
          }
        },
        [
          _c(
            "div",
            { staticClass: "tab-text md:ml-4 md:mt-0 mt-4 ml-0" },
            [_c("user-settings-notifications")],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": "Old Password" },
        model: {
          value: _vm.old_password,
          callback: function($$v) {
            _vm.old_password = $$v
          },
          expression: "old_password"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": "New Password" },
        model: {
          value: _vm.new_password,
          callback: function($$v) {
            _vm.new_password = $$v
          },
          expression: "new_password"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": "Confirm Password" },
        model: {
          value: _vm.confirm_new_password,
          callback: function($$v) {
            _vm.confirm_new_password = $$v
          },
          expression: "confirm_new_password"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c("vs-button", { staticClass: "ml-auto mt-2" }, [
            _vm._v("Save Changes")
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "ml-4 mt-2",
              attrs: { type: "border", color: "warning" }
            },
            [_vm._v("Reset")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=template&id=8531de10&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=template&id=8531de10& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap justify-between items-center mb-8" },
        [
          _c("div", [
            _c("p", [_vm._v("Account is connected with Google.")]),
            _vm._v(" "),
            _c("p", { staticClass: "font-medium mb-4" }, [
              _vm._v("john@gmail.com")
            ])
          ]),
          _vm._v(" "),
          _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
            _vm._v("Disconnect")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap justify-between items-center mb-base" },
        [
          _c("div", [
            _c("p", [_vm._v("Account is connected with facebook.")]),
            _vm._v(" "),
            _c("p", { staticClass: "font-medium mb-4" }, [
              _vm._v("@pixinvents")
            ])
          ]),
          _vm._v(" "),
          _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
            _vm._v("Disconnect")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mb-6 ml-auto",
          attrs: {
            color: "#00aaff",
            "icon-pack": "feather",
            icon: "icon-twitter"
          }
        },
        [_vm._v("Connected To Twitter")]
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "ml-auto",
          attrs: {
            color: "#405DE6",
            "icon-pack": "feather",
            icon: "icon-instagram"
          }
        },
        [_vm._v("Connected To Instagram")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=template&id=38f78eea&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=template&id=38f78eea& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center mb-base" },
        [
          _c("vs-avatar", {
            staticClass: "mr-4 mb-4",
            attrs: { src: _vm.activeUserInfo.photoURL, size: "70px" }
          }),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("vs-button", { staticClass: "mr-4 sm:mb-0 mb-2" }, [
                _vm._v("Upload photo")
              ]),
              _vm._v(" "),
              _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
                _vm._v("Remove")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-sm mt-2" }, [
                _vm._v("Allowed JPG, GIF or PNG. Max size of 800kB")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": "Username" },
        model: {
          value: _vm.username,
          callback: function($$v) {
            _vm.username = $$v
          },
          expression: "username"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: { "label-placeholder": "Name" },
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
        staticClass: "w-full",
        attrs: { "label-placeholder": "Email" },
        model: {
          value: _vm.email,
          callback: function($$v) {
            _vm.email = $$v
          },
          expression: "email"
        }
      }),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "h-full my-4",
          attrs: { "icon-pack": "feather", icon: "icon-info", color: "warning" }
        },
        [
          _c("span", [
            _vm._v("Your account is not verified. "),
            _c("a", { staticClass: "hover:underline", attrs: { href: "#" } }, [
              _vm._v("Resend Confirmation")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full my-base",
        attrs: { "label-placeholder": "Company" },
        model: {
          value: _vm.company,
          callback: function($$v) {
            _vm.company = $$v
          },
          expression: "company"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c("vs-button", { staticClass: "ml-auto mt-2" }, [
            _vm._v("Save Changes")
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "ml-4 mt-2",
              attrs: { type: "border", color: "warning" }
            },
            [_vm._v("Reset")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=template&id=1e04731b&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=template&id=1e04731b& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-textarea", {
        attrs: { label: "Bio", placeholder: "Your bio..." },
        model: {
          value: _vm.bio,
          callback: function($$v) {
            _vm.bio = $$v
          },
          expression: "bio"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Birth Date")]),
          _vm._v(" "),
          _c("flat-pickr", {
            staticClass: "w-full",
            attrs: { config: { dateFormat: "d F Y" } },
            model: {
              value: _vm.dob,
              callback: function($$v) {
                _vm.dob = $$v
              },
              expression: "dob"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Country")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              options: _vm.countryOptions,
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.country,
              callback: function($$v) {
                _vm.country = $$v
              },
              expression: "country"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Languages")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              multiple: "",
              closeOnSelect: false,
              options: _vm.langOptions,
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.lang_known,
              callback: function($$v) {
                _vm.lang_known = $$v
              },
              expression: "lang_known"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mt-8",
        attrs: { type: "number", "label-placeholder": "Mobile" },
        model: {
          value: _vm.mobile,
          callback: function($$v) {
            _vm.mobile = $$v
          },
          expression: "mobile"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mt-8",
        attrs: { "label-placeholder": "Website" },
        model: {
          value: _vm.website,
          callback: function($$v) {
            _vm.website = $$v
          },
          expression: "website"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mt-8 mb-base" }, [
        _c("label", { staticClass: "text-sm" }, [_vm._v("Gender")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-2" },
          [
            _c(
              "vs-radio",
              {
                staticClass: "mr-4",
                attrs: { "vs-value": "male" },
                model: {
                  value: _vm.gender,
                  callback: function($$v) {
                    _vm.gender = $$v
                  },
                  expression: "gender"
                }
              },
              [_vm._v("Male")]
            ),
            _vm._v(" "),
            _c(
              "vs-radio",
              {
                staticClass: "mr-4",
                attrs: { "vs-value": "female" },
                model: {
                  value: _vm.gender,
                  callback: function($$v) {
                    _vm.gender = $$v
                  },
                  expression: "gender"
                }
              },
              [_vm._v("Female")]
            ),
            _vm._v(" "),
            _c(
              "vs-radio",
              {
                attrs: { "vs-value": "other" },
                model: {
                  value: _vm.gender,
                  callback: function($$v) {
                    _vm.gender = $$v
                  },
                  expression: "gender"
                }
              },
              [_vm._v("Other")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c("vs-button", { staticClass: "ml-auto mt-2" }, [
            _vm._v("Save Changes")
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "ml-4 mt-2",
              attrs: { type: "border", color: "warning" }
            },
            [_vm._v("Reset")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=template&id=3777904b&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=template&id=3777904b& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { "no-shadow": "" } }, [
    _c("div", { staticClass: "mb-base" }, [
      _c("h6", { staticClass: "mb-4" }, [_vm._v("Activity")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.comment,
              callback: function($$v) {
                _vm.comment = $$v
              },
              expression: "comment"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Email me when someone comments onmy article")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.answer,
              callback: function($$v) {
                _vm.answer = $$v
              },
              expression: "answer"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Email me when someone answers on my form")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.follow,
              callback: function($$v) {
                _vm.follow = $$v
              },
              expression: "follow"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Email me hen someone follows me")
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c("h6", { staticClass: "mb-4" }, [_vm._v("Application")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.news,
              callback: function($$v) {
                _vm.news = $$v
              },
              expression: "news"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("News and announcements")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.product_update,
              callback: function($$v) {
                _vm.product_update = $$v
              },
              expression: "product_update"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Weekly product updates")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.blog,
              callback: function($$v) {
                _vm.blog = $$v
              },
              expression: "blog"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [_vm._v("Weekly blog digest")])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-wrap items-center justify-end mt-base" },
      [
        _c("vs-button", { staticClass: "ml-auto mt-2" }, [
          _vm._v("Save Changes")
        ]),
        _vm._v(" "),
        _c(
          "vs-button",
          {
            staticClass: "ml-4 mt-2",
            attrs: { type: "border", color: "warning" }
          },
          [_vm._v("Reset")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=595f7722&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=595f7722& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-twitter",
          label: "GitHub",
          "icon-no-border": ""
        },
        model: {
          value: _vm.twitter,
          callback: function($$v) {
            _vm.twitter = $$v
          },
          expression: "twitter"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-facebook",
          label: "GitHub",
          "icon-no-border": ""
        },
        model: {
          value: _vm.facebook,
          callback: function($$v) {
            _vm.facebook = $$v
          },
          expression: "facebook"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-instagram",
          label: "GitHub",
          "icon-no-border": ""
        },
        model: {
          value: _vm.instagram,
          callback: function($$v) {
            _vm.instagram = $$v
          },
          expression: "instagram"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-github",
          label: "GitHub",
          "icon-no-border": ""
        },
        model: {
          value: _vm.github,
          callback: function($$v) {
            _vm.github = $$v
          },
          expression: "github"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-linkedin",
          label: "GitHub",
          "icon-no-border": ""
        },
        model: {
          value: _vm.linkedin,
          callback: function($$v) {
            _vm.linkedin = $$v
          },
          expression: "linkedin"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mb-base",
        attrs: {
          "icon-pack": "feather",
          icon: "icon-slack",
          label: "GitHub",
          "icon-no-border": ""
        },
        model: {
          value: _vm.slack,
          callback: function($$v) {
            _vm.slack = $$v
          },
          expression: "slack"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c("vs-button", { staticClass: "ml-auto mt-2" }, [
            _vm._v("Save Changes")
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "ml-4 mt-2",
              attrs: { type: "border", color: "warning" }
            },
            [_vm._v("Reset")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettings.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettings.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettings_vue_vue_type_template_id_2e8453cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettings.vue?vue&type=template&id=2e8453cd& */ "./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=template&id=2e8453cd&");
/* harmony import */ var _UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettings.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSettings.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettings_vue_vue_type_template_id_2e8453cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettings_vue_vue_type_template_id_2e8453cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=template&id=2e8453cd&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=template&id=2e8453cd& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_template_id_2e8453cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettings.vue?vue&type=template&id=2e8453cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettings.vue?vue&type=template&id=2e8453cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_template_id_2e8453cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettings_vue_vue_type_template_id_2e8453cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsChangePassword_vue_vue_type_template_id_15c2b7d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0& */ "./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0&");
/* harmony import */ var _UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsChangePassword_vue_vue_type_template_id_15c2b7d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsChangePassword_vue_vue_type_template_id_15c2b7d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_template_id_15c2b7d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsChangePassword.vue?vue&type=template&id=15c2b7d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_template_id_15c2b7d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsChangePassword_vue_vue_type_template_id_15c2b7d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsConnections_vue_vue_type_template_id_8531de10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsConnections.vue?vue&type=template&id=8531de10& */ "./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=template&id=8531de10&");
/* harmony import */ var _UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsConnections.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsConnections_vue_vue_type_template_id_8531de10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsConnections_vue_vue_type_template_id_8531de10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettingsConnections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsConnections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=template&id=8531de10&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=template&id=8531de10& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_template_id_8531de10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsConnections.vue?vue&type=template&id=8531de10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsConnections.vue?vue&type=template&id=8531de10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_template_id_8531de10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsConnections_vue_vue_type_template_id_8531de10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsGeneral_vue_vue_type_template_id_38f78eea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsGeneral.vue?vue&type=template&id=38f78eea& */ "./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=template&id=38f78eea&");
/* harmony import */ var _UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsGeneral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsGeneral_vue_vue_type_template_id_38f78eea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsGeneral_vue_vue_type_template_id_38f78eea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=template&id=38f78eea&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=template&id=38f78eea& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_template_id_38f78eea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsGeneral.vue?vue&type=template&id=38f78eea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsGeneral.vue?vue&type=template&id=38f78eea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_template_id_38f78eea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsGeneral_vue_vue_type_template_id_38f78eea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsInfo_vue_vue_type_template_id_1e04731b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsInfo.vue?vue&type=template&id=1e04731b& */ "./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=template&id=1e04731b&");
/* harmony import */ var _UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsInfo_vue_vue_type_template_id_1e04731b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsInfo_vue_vue_type_template_id_1e04731b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettingsInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=template&id=1e04731b&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=template&id=1e04731b& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_template_id_1e04731b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsInfo.vue?vue&type=template&id=1e04731b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsInfo.vue?vue&type=template&id=1e04731b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_template_id_1e04731b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsInfo_vue_vue_type_template_id_1e04731b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsNotifications_vue_vue_type_template_id_3777904b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsNotifications.vue?vue&type=template&id=3777904b& */ "./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=template&id=3777904b&");
/* harmony import */ var _UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsNotifications.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsNotifications_vue_vue_type_template_id_3777904b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsNotifications_vue_vue_type_template_id_3777904b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=template&id=3777904b&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=template&id=3777904b& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_template_id_3777904b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsNotifications.vue?vue&type=template&id=3777904b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsNotifications.vue?vue&type=template&id=3777904b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_template_id_3777904b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsNotifications_vue_vue_type_template_id_3777904b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsSocialLinks_vue_vue_type_template_id_595f7722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsSocialLinks.vue?vue&type=template&id=595f7722& */ "./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=595f7722&");
/* harmony import */ var _UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSettingsSocialLinks.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSettingsSocialLinks_vue_vue_type_template_id_595f7722___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSettingsSocialLinks_vue_vue_type_template_id_595f7722___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsSocialLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=595f7722&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=595f7722& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_template_id_595f7722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSettingsSocialLinks.vue?vue&type=template&id=595f7722& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/user-settings/UserSettingsSocialLinks.vue?vue&type=template&id=595f7722&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_template_id_595f7722___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSettingsSocialLinks_vue_vue_type_template_id_595f7722___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);