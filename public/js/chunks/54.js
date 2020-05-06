(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsDefault_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsDefault.vue */ "./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue");
/* harmony import */ var _NotificationsPosition_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsPosition.vue */ "./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue");
/* harmony import */ var _NotificationsIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationsIcon.vue */ "./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue");
/* harmony import */ var _NotificationsFixedAndFunctionClick_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationsFixedAndFunctionClick.vue */ "./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue");
/* harmony import */ var _NotificationsTime_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationsTime.vue */ "./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NotificationsDefault: _NotificationsDefault_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NotificationsPosition: _NotificationsPosition_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationsIcon: _NotificationsIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NotificationsFixedAndFunctionClick: _NotificationsFixedAndFunctionClick_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NotificationsTime: _NotificationsTime_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    random: function random() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      var color = "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
      this.$vs.notify({
        title: 'Color',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        color: color
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    myFunction: function myFunction() {
      var _this = this;

      this.$vs.notify({
        title: 'Function click',
        text: 'Click on me to execute function',
        color: 'primary',
        fixed: true,
        click: function click() {
          // Secondary function
          _this.$vs.notify({
            title: 'Secondary function',
            text: 'Executed the function when clicking',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    randomIcon: function randomIcon() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      var color = "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
      this.$vs.notify({
        title: 'Icon Award',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        color: color,
        icon: 'icon-award',
        iconPack: 'feather'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      listPosition: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left']
    };
  },
  methods: {
    randomCenter: function randomCenter() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      var color = "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
      this.$vs.notify({
        title: 'Position top-center',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        color: color,
        position: 'top-center'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=template&id=fd54ff16&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=template&id=fd54ff16& ***!
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
  return _c(
    "div",
    { attrs: { id: "notifications-demo" } },
    [
      _c("p", { staticClass: "mb-4" }, [
        _vm._v("Nice, simple, and interactive notifications")
      ]),
      _vm._v(" "),
      _c("notifications-default"),
      _vm._v(" "),
      _c("notifications-position"),
      _vm._v(" "),
      _c("notifications-icon"),
      _vm._v(" "),
      _c("notifications-fixed-and-function-click"),
      _vm._v(" "),
      _c("notifications-time")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=template&id=f6bd1088&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=template&id=f6bd1088& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Default", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("To add a notification we have the global function "),
        _c("code", [_vm._v("$vs.notify")]),
        _vm._v(". The first parameter is a "),
        _c("code", [_vm._v("json")]),
        _vm._v(
          " with all the necessary attributes, or if we only want the standard notification we can only add a string with the text of the notification"
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Primary",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "primary"
                  })
                }
              }
            },
            [_vm._v("Notification Primary")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Success",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "success"
                  })
                }
              }
            },
            [_vm._v("Notification Success")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "danger", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Danger",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "danger"
                  })
                }
              }
            },
            [_vm._v("Notification Danger")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "warning", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Warning",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "warning"
                  })
                }
              }
            },
            [_vm._v("Notification Warning")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "dark", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "dark",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "dark"
                  })
                }
              }
            },
            [_vm._v("Notification Dark")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "gradient" },
              on: {
                click: function($event) {
                  return _vm.random()
                }
              }
            },
            [_vm._v("Notification Random Color")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n    <div class="demo-alignment">\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Primary\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'primary\'})"\n        color="primary"\n        type="flat">Notification Primary</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Success\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'success\'})"\n        color="success"\n        type="flat">Notification Success</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Danger\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'danger\'})"\n        color="danger"\n        type="flat">Notification Danger</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Warning\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'warning\'})"\n        color="warning"\n        type="flat">Notification Warning</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'dark\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'dark\'})"\n        color="dark"\n        type="flat">Notification Dark</vs-button>\n\n      <vs-button @click="random()" color="success" type="gradient">Notification Random Color</vs-button>\n    </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    random() {\n      function getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n      }\n      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n\n      this.$vs.notify({\n        title: \'Color\',\n        text: \'Lorem ipsum dolor sit amet, consectetur\',\n        color: color\n      })\n\n    },\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Fixed and function click", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: "
        ),
        _c("code", [_vm._v("click:()=>{ ... }")])
      ]),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mt-4",
          attrs: { type: "gradient", color: "success" },
          on: {
            click: function($event) {
              return _vm.myFunction()
            }
          }
        },
        [_vm._v("Run Example")]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n<template>\n  <vs-button @click=\"myFunction()\" type=\"gradient\" color=\"success\" class=\"my-4\">Run Example</vs-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    myFunction() {\n      this.$vs.notify({\n        title: 'Function click',\n        text: 'Click on me to execute function',\n        color: 'primary',\n        fixed: true,\n        click: () => {\n          // Secondary function\n          this.$vs.notify({\n            title: 'Secondary function',\n            text: 'Executed the function when clicking',\n            color: 'success',\n            iconPack: 'feather',\n            icon: 'icon-check'\n          })\n        },\n      })\n    },\n  }\n}\n</script>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=template&id=41eff3e4&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=template&id=41eff3e4& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Icon", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "Notifications can include icons to improve the user experience and to construct a more pleasant and intuitive notification. To make this, use the "
        ),
        _c("code", [_vm._v("icon")]),
        _vm._v(" property. A practical example would be: "),
        _c("code", [_vm._v("icon: 'chat'")])
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5",
          attrs: { color: "primary", icon: "new_releases", active: "true" }
        },
        [
          _c("p", [
            _vm._v(
              "Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "
            ),
            _c(
              "a",
              {
                attrs: { href: "https://material.io/icons/", target: "_blank" }
              },
              [_vm._v("Material Icons page")]
            ),
            _vm._v(".")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Icon mail",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "primary",
                    iconPack: "feather",
                    icon: "icon-mail"
                  })
                }
              }
            },
            [_vm._v("Icon Mail")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Icon mail",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "success",
                    iconPack: "feather",
                    icon: "icon-check"
                  })
                }
              }
            },
            [_vm._v("Icon check_box")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "danger", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Icon mail",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "danger",
                    iconPack: "feather",
                    icon: "icon-heart"
                  })
                }
              }
            },
            [_vm._v("Icon favorite")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "warning", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Icon mail",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "warning",
                    iconPack: "feather",
                    icon: "icon-alert-circle"
                  })
                }
              }
            },
            [_vm._v("Icon error")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "dark", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Icon mail",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "dark",
                    iconPack: "feather",
                    icon: "icon-message-square"
                  })
                }
              }
            },
            [_vm._v("Icon chat")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "gradient" },
              on: {
                click: function($event) {
                  return _vm.randomIcon()
                }
              }
            },
            [_vm._v("Icon Random Color")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n<template>\n  <div class=\"demo-alignment\">\n\n    <vs-button color=\"primary\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon:'icon-mail'})\">Icon Mail</vs-button>\n\n    <vs-button color=\"success\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'success',\n        iconPack: 'feather',\n        icon:'icon-check'})\">Icon check_box</vs-button>\n\n    <vs-button color=\"danger\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'danger',\n        iconPack: 'feather',\n        icon:'icon-heart'})\">Icon favorite</vs-button>\n\n    <vs-button color=\"warning\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'warning',\n        iconPack: 'feather',\n        icon:'icon-alert-circle'})\">Icon error</vs-button>\n\n    <vs-button color=\"dark\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'dark',\n        iconPack: 'feather',\n        icon:'icon-message-square'})\">Icon chat</vs-button>\n\n      <vs-button @click=\"randomIcon()\" color=\"success\" type=\"gradient\">Icon Random Color</vs-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    randomIcon() {\n      function getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n      }\n      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n\n      this.$vs.notify({ title: &apos;Icon mail&apos;, text: &apos;Lorem ipsum dolor sit amet, consectetur&apos;, color: color, icon: &apos;verified_user&apos; })\n    }\n  }\n}\n</script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=template&id=3af7843e&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=template&id=3af7843e& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Position", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "We can change the place where the notification appears with the property position. A practical example would be: position: 'top-right'. The supported values are"
        )
      ]),
      _vm._v(" "),
      _c("vx-list", { staticClass: "mt-3", attrs: { list: _vm.listPosition } }),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mb-1",
          attrs: { icon: "warning", active: "true", color: "warning" }
        },
        [
          _c("span", [
            _vm._v("The default notifications appear "),
            _c("code", [_vm._v("bottom-right")]),
            _vm._v(
              ", it is not necessary to add the position property if it is the desired position"
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Position Default",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "primary"
                  })
                }
              }
            },
            [_vm._v("Position Default")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Position top-right",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "success",
                    position: "top-right"
                  })
                }
              }
            },
            [_vm._v("Position Top Right")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "danger", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Position top-left",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "danger",
                    position: "top-left"
                  })
                }
              }
            },
            [_vm._v("Position Top Left")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "warning", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Position bottom-left",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "warning",
                    position: "bottom-left"
                  })
                }
              }
            },
            [_vm._v("Position Bottom Left")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "dark", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Position bottom-center",
                    text: "Lorem ipsum dolor sit amet, consectetur",
                    color: "dark",
                    position: "bottom-center"
                  })
                }
              }
            },
            [_vm._v(" Position Bottom Center")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "gradient" },
              on: {
                click: function($event) {
                  return _vm.randomCenter()
                }
              }
            },
            [_vm._v("Position Top Center Random Color")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n<template>\n  <div class=\"demo-alignment\">\n\n      <vs-button color=\"primary\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position Default',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'primary'})\">Position Default</vs-button>\n\n      <vs-button color=\"success\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position top-right',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'success',\n          position:'top-right'})\">Position Top Right</vs-button>\n\n      <vs-button color=\"danger\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position top-left',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'danger',\n          position:'top-left'})\">Position Top Left</vs-button>\n\n      <vs-button color=\"warning\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position bottom-left',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'warning',\n          position:'bottom-left'})\">Position Bottom Left</vs-button>\n\n      <vs-button color=\"dark\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position bottom-center',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'dark',\n          position:'bottom-center'})\"> Position Bottom Center</vs-button>\n\n      <vs-button @click=\"randomCenter()\" color=\"success\" type=\"gradient\">Position Top Center Random Color</vs-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    randomCenter() {\n      function getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n      }\n      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n      this.$vs.notify({ title: 'Position top-center', text: 'Lorem ipsum dolor sit amet, consectetur', color: color, position: 'top-center' })\n    }\n  }\n}\n</script>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue?vue&type=template&id=e19c5b3c&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue?vue&type=template&id=e19c5b3c& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Time", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "You can change the total time that the notification stays on the screen with the "
        ),
        _c("code", [_vm._v("time")]),
        _vm._v(" property. Example: "),
        _c("code", [_vm._v("time: 4000")])
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5",
          attrs: { color: "primary", icon: "new_releases", active: "true" }
        },
        [
          _c("p", [
            _vm._v("By default the notifications have a time of "),
            _c("strong", [_vm._v("2000")]),
            _vm._v(" (2s)")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.$vs.notify({
                    title: "Time default",
                    text: "Lorem ipsum dolor sit amet consectetur",
                    color: "primary",
                    iconPack: "feather",
                    icon: "icon-clock"
                  })
                }
              }
            },
            [_vm._v("Time default")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  _vm.$vs.notify({
                    time: 4000,
                    title: "Time 4s (4000)",
                    text: "Lorem ipsum dolor sit amet consectetur",
                    color: "primary",
                    iconPack: "feather",
                    icon: "icon-clock"
                  })
                }
              }
            },
            [_vm._v("Time 4s (4000)")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  _vm.$vs.notify({
                    time: 8000,
                    title: "Time 8s (8000)",
                    text: "Lorem ipsum dolor sit amet consectetur",
                    color: "primary",
                    iconPack: "feather",
                    icon: "icon-clock"
                  })
                }
              }
            },
            [_vm._v("Time 8s (8000)")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n<template>\n  <div class=\"demo-alignment\">\n\n    <vs-button @click=\"$vs.notify({\n        title:'Time default',\n        text:'Lorem ipsum dolor sit amet consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon: 'icon-clock'\n        })\" color=\"primary\" type=\"flat\">Time default</vs-button>\n\n    <vs-button @click=\"$vs.notify({\n        time:4000,\n        title:'Time 4s (4000)',\n        text:'Lorem ipsum dolor sit amet consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon: 'icon-clock'\n        })\" color=\"primary\" type=\"flat\">Time 4s (4000)</vs-button>\n\n    <vs-button @click=\"$vs.notify({\n        time:8000,\n        title:'Time 8s (8000)',\n        text:'Lorem ipsum dolor sit amet consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon: 'icon-clock'\n        })\" color=\"primary\" type=\"flat\">Time 8s (8000)</vs-button>\n  </div>\n</template>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/Notifications.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/Notifications.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_fd54ff16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=fd54ff16& */ "./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=template&id=fd54ff16&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_fd54ff16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notifications_vue_vue_type_template_id_fd54ff16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/notifications/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=template&id=fd54ff16&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=template&id=fd54ff16& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_fd54ff16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=template&id=fd54ff16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/Notifications.vue?vue&type=template&id=fd54ff16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_fd54ff16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_fd54ff16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsDefault_vue_vue_type_template_id_f6bd1088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsDefault.vue?vue&type=template&id=f6bd1088& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=template&id=f6bd1088&");
/* harmony import */ var _NotificationsDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationsDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationsDefault_vue_vue_type_template_id_f6bd1088___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationsDefault_vue_vue_type_template_id_f6bd1088___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=template&id=f6bd1088&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=template&id=f6bd1088& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsDefault_vue_vue_type_template_id_f6bd1088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsDefault.vue?vue&type=template&id=f6bd1088& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsDefault.vue?vue&type=template&id=f6bd1088&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsDefault_vue_vue_type_template_id_f6bd1088___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsDefault_vue_vue_type_template_id_f6bd1088___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsFixedAndFunctionClick_vue_vue_type_template_id_aeaf2c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70&");
/* harmony import */ var _NotificationsFixedAndFunctionClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationsFixedAndFunctionClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationsFixedAndFunctionClick_vue_vue_type_template_id_aeaf2c70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationsFixedAndFunctionClick_vue_vue_type_template_id_aeaf2c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsFixedAndFunctionClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsFixedAndFunctionClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsFixedAndFunctionClick_vue_vue_type_template_id_aeaf2c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsFixedAndFunctionClick.vue?vue&type=template&id=aeaf2c70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsFixedAndFunctionClick_vue_vue_type_template_id_aeaf2c70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsFixedAndFunctionClick_vue_vue_type_template_id_aeaf2c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsIcon_vue_vue_type_template_id_41eff3e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsIcon.vue?vue&type=template&id=41eff3e4& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=template&id=41eff3e4&");
/* harmony import */ var _NotificationsIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationsIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationsIcon_vue_vue_type_template_id_41eff3e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationsIcon_vue_vue_type_template_id_41eff3e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=template&id=41eff3e4&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=template&id=41eff3e4& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsIcon_vue_vue_type_template_id_41eff3e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsIcon.vue?vue&type=template&id=41eff3e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsIcon.vue?vue&type=template&id=41eff3e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsIcon_vue_vue_type_template_id_41eff3e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsIcon_vue_vue_type_template_id_41eff3e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsPosition_vue_vue_type_template_id_3af7843e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsPosition.vue?vue&type=template&id=3af7843e& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=template&id=3af7843e&");
/* harmony import */ var _NotificationsPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsPosition.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationsPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationsPosition_vue_vue_type_template_id_3af7843e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationsPosition_vue_vue_type_template_id_3af7843e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsPosition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=template&id=3af7843e&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=template&id=3af7843e& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsPosition_vue_vue_type_template_id_3af7843e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsPosition.vue?vue&type=template&id=3af7843e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsPosition.vue?vue&type=template&id=3af7843e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsPosition_vue_vue_type_template_id_3af7843e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsPosition_vue_vue_type_template_id_3af7843e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsTime_vue_vue_type_template_id_e19c5b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsTime.vue?vue&type=template&id=e19c5b3c& */ "./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue?vue&type=template&id=e19c5b3c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NotificationsTime_vue_vue_type_template_id_e19c5b3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationsTime_vue_vue_type_template_id_e19c5b3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue?vue&type=template&id=e19c5b3c&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue?vue&type=template&id=e19c5b3c& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsTime_vue_vue_type_template_id_e19c5b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationsTime.vue?vue&type=template&id=e19c5b3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/notifications/NotificationsTime.vue?vue&type=template&id=e19c5b3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsTime_vue_vue_type_template_id_e19c5b3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationsTime_vue_vue_type_template_id_e19c5b3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);