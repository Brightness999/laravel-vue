(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertDefault_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertDefault.vue */ "./resources/js/src/views/components/vuesax/alert/AlertDefault.vue");
/* harmony import */ var _AlertTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertTitle.vue */ "./resources/js/src/views/components/vuesax/alert/AlertTitle.vue");
/* harmony import */ var _AlertColor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertColor.vue */ "./resources/js/src/views/components/vuesax/alert/AlertColor.vue");
/* harmony import */ var _AlertClosable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlertClosable.vue */ "./resources/js/src/views/components/vuesax/alert/AlertClosable.vue");
/* harmony import */ var _AlertIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertIcon.vue */ "./resources/js/src/views/components/vuesax/alert/AlertIcon.vue");
/* harmony import */ var _AlertExample_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AlertExample.vue */ "./resources/js/src/views/components/vuesax/alert/AlertExample.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
    AlertDefault: _AlertDefault_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AlertTitle: _AlertTitle_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AlertColor: _AlertColor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AlertClosable: _AlertClosable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AlertIcon: _AlertIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AlertExample: _AlertExample_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
      active1: true,
      active2: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      value1: ''
    };
  },
  computed: {
    inputValid: function inputValid() {
      if (/^\d+$/.test(this.value1)) {
        return false;
      } else {
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=template&id=2a770f5d&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=template&id=2a770f5d& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "alert-demo" } },
    [
      _c("alert-default"),
      _vm._v(" "),
      _c("alert-title"),
      _vm._v(" "),
      _c("alert-color"),
      _vm._v(" "),
      _c("alert-closable"),
      _vm._v(" "),
      _c("alert-icon"),
      _vm._v(" "),
      _c("alert-example")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=template&id=2fe36de4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=template&id=2fe36de4& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Closable", "code-toggler": "" } },
    [
      _c("p", { staticClass: "mb-2" }, [
        _vm._v("You can show and hide the alert by means of "),
        _c("code", [_vm._v("active.sync")]),
        _vm._v(" and a Boolean bind as value")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("The property to determine if the alert can be closed is "),
        _c("code", [_vm._v("closable")])
      ]),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mt-5 mr-4 mb-4",
          attrs: { color: "primary", type: "filled" },
          on: {
            click: function($event) {
              _vm.active1 = !_vm.active1
            }
          }
        },
        [_vm._v(_vm._s(!_vm.active1 ? "Open Alert" : "Close Alert") + " 1")]
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "mb-5",
          attrs: { color: "primary", type: "filled" },
          on: {
            click: function($event) {
              _vm.active2 = !_vm.active2
            }
          }
        },
        [_vm._v(_vm._s(!_vm.active2 ? "Open Alert" : "Close Alert") + " 2")]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          attrs: {
            active: _vm.active1,
            closable: "",
            "icon-pack": "feather",
            "close-icon": "icon-x"
          },
          on: {
            "update:active": function($event) {
              _vm.active1 = $event
            }
          }
        },
        [
          _vm._v(
            "\n            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "my-5" }, [
        _vm._v(
          "You can also change the icon used for the close buton on the alerts"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          attrs: {
            active: _vm.active2,
            closable: "",
            "close-icon": "icon-x-circle",
            "icon-pack": "feather"
          },
          on: {
            "update:active": function($event) {
              _vm.active2 = $event
            }
          }
        },
        [
          _vm._v(
            "\n            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-button @click="active1=!active1">' +
            _vm._s(!_vm.active1 ? "Open Alert" : "Close Alert") +
            ' 1</vs-button>\n<vs-button @click="active2=!active2">' +
            _vm._s(!_vm.active2 ? "Open Alert" : "Close Alert") +
            ' 2</vs-button>\n\n<vs-alert :active.sync="active1" closable icon-pack="feather" close-icon="icon-x">\n  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n\n<vs-alert :active.sync="active2" closable close-icon="icon-x-circle" icon-pack="feather">\n  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertColor.vue?vue&type=template&id=e5d12294&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertColor.vue?vue&type=template&id=e5d12294& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Color", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("You can change the color of the alert with the property "),
        _c("code", [_vm._v("color")]),
        _vm._v(". You are able to use the Main Colors or "),
        _c("strong", [_vm._v("RGB")]),
        _vm._v(" and "),
        _c("strong", [_vm._v("HEX")]),
        _vm._v(" colors")
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "my-5",
          attrs: { icon: "warning", active: "true", color: "warning" }
        },
        [
          _c("span", [
            _vm._v("Only "),
            _c("strong", [_vm._v("RGB")]),
            _vm._v(" and "),
            _c("strong", [_vm._v("HEX")]),
            _vm._v(" colors are supported.")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-3",
          attrs: { color: "success", title: "Success", active: "true" }
        },
        [
          _vm._v(
            "\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-3",
          attrs: { color: "danger", title: "Danger", active: "true" }
        },
        [
          _vm._v(
            "\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-3",
          attrs: { color: "warning", title: "Warning", active: "true" }
        },
        [
          _vm._v(
            "\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-3",
          attrs: { color: "dark", title: "Dark", active: "true" }
        },
        [
          _vm._v(
            "\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-3",
          attrs: { color: "rgb(41, 147, 138)", title: "RGB", active: "true" }
        },
        [
          _vm._v(
            "\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-3",
          attrs: { color: "#842993", title: "HEX", active: "true" }
        },
        [
          _vm._v(
            "\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-alert color="success" title="Success" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="danger" title="Danger" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="warning" title="Warning" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="dark" title="Dark" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="rgb(41, 147, 138)" title="RGB" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="#842993" title="HEX" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertDefault.vue?vue&type=template&id=e1565858&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertDefault.vue?vue&type=template&id=e1565858& ***!
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
    { attrs: { title: "Default", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("To add a notification use the "),
        _c("code", [_vm._v("vs-alert")]),
        _vm._v(
          " component. For the main parameter, pass the active property that determines if the "
        ),
        _c("code", [_vm._v("alert")]),
        _vm._v(" is visible or not")
      ]),
      _vm._v(" "),
      _c("vs-alert", { staticClass: "mt-5", attrs: { active: "true" } }, [
        _vm._v(
          "\n        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        "
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-alert active="true">\n    Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=template&id=3592527d&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=template&id=3592527d& ***!
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
    { attrs: { title: "Example", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "An example would be to have an input and when a condition is met show the "
        ),
        _c("strong", [_vm._v("vs-alert")])
      ]),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "my-4",
        attrs: { label: "Enter only numbers", placeholder: "0123456789" },
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      }),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          attrs: {
            active: _vm.inputValid,
            color: "danger",
            "icon-pack": "feather",
            icon: "icon-info"
          }
        },
        [
          _c("span", [
            _vm._v("the value is "),
            _c("b", [_vm._v("invalid")]),
            _vm._v(" you can only enter numbers")
          ])
        ]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <vs-input label="Enter only numbers" placeholder="0123456789" v-model="value1" class="my-4" />\n  <vs-alert :active="inputValid" color="danger" icon-pack="feather" icon="icon-info">\n    <span>the value is <b>invalid</b> you can only enter numbers</span>\n  </vs-alert>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: \'\',\n    }\n  },\n  computed: {\n    inputValid() {\n      if (/^\\d+$/.test(this.value1)) {\n        return false\n      } else {\n        return true\n      }\n    }\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertIcon.vue?vue&type=template&id=25103e14&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertIcon.vue?vue&type=template&id=25103e14& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          "You can add to the alert a descriptive icon with the property "
        ),
        _c("code", [_vm._v("icon")]),
        _vm._v(
          " and as a value the icon name of the icon in the currently selected icon pack. (Default is "
        ),
        _c(
          "a",
          {
            attrs: {
              href: "https://material.io/icons/",
              target: "_blank",
              rel: "nofollow"
            }
          },
          [_vm._v("Material Icons")]
        ),
        _vm._v(")")
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5",
          attrs: { active: "true", "icon-pack": "feather", icon: "icon-star" }
        },
        [
          _vm._v(
            "\n            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">\n  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertTitle.vue?vue&type=template&id=d09041aa&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/alert/AlertTitle.vue?vue&type=template&id=d09041aa& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Title", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("Add a title to the alert with the property "),
        _c("code", [_vm._v("title")])
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5 text-warning",
          attrs: {
            title: "Lorem ipsum dolor sit amet",
            color: "rgb(231, 154, 23)",
            active: "true"
          }
        },
        [
          _vm._v(
            "\n        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true" class="mt-5 text-warning">\n    Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/Alert.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/Alert.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_2a770f5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=2a770f5d& */ "./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=template&id=2a770f5d&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_2a770f5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_2a770f5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=template&id=2a770f5d&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=template&id=2a770f5d& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_2a770f5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=2a770f5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/Alert.vue?vue&type=template&id=2a770f5d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_2a770f5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_2a770f5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertClosable.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertClosable.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertClosable_vue_vue_type_template_id_2fe36de4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertClosable.vue?vue&type=template&id=2fe36de4& */ "./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=template&id=2fe36de4&");
/* harmony import */ var _AlertClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertClosable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertClosable_vue_vue_type_template_id_2fe36de4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertClosable_vue_vue_type_template_id_2fe36de4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/AlertClosable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertClosable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=template&id=2fe36de4&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=template&id=2fe36de4& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertClosable_vue_vue_type_template_id_2fe36de4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertClosable.vue?vue&type=template&id=2fe36de4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertClosable.vue?vue&type=template&id=2fe36de4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertClosable_vue_vue_type_template_id_2fe36de4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertClosable_vue_vue_type_template_id_2fe36de4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertColor.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertColor.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertColor_vue_vue_type_template_id_e5d12294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertColor.vue?vue&type=template&id=e5d12294& */ "./resources/js/src/views/components/vuesax/alert/AlertColor.vue?vue&type=template&id=e5d12294&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AlertColor_vue_vue_type_template_id_e5d12294___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertColor_vue_vue_type_template_id_e5d12294___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/AlertColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertColor.vue?vue&type=template&id=e5d12294&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertColor.vue?vue&type=template&id=e5d12294& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_template_id_e5d12294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertColor.vue?vue&type=template&id=e5d12294& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertColor.vue?vue&type=template&id=e5d12294&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_template_id_e5d12294___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertColor_vue_vue_type_template_id_e5d12294___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertDefault.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertDefault.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertDefault_vue_vue_type_template_id_e1565858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertDefault.vue?vue&type=template&id=e1565858& */ "./resources/js/src/views/components/vuesax/alert/AlertDefault.vue?vue&type=template&id=e1565858&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AlertDefault_vue_vue_type_template_id_e1565858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertDefault_vue_vue_type_template_id_e1565858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/AlertDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertDefault.vue?vue&type=template&id=e1565858&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertDefault.vue?vue&type=template&id=e1565858& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_template_id_e1565858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertDefault.vue?vue&type=template&id=e1565858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertDefault.vue?vue&type=template&id=e1565858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_template_id_e1565858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDefault_vue_vue_type_template_id_e1565858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertExample.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertExample.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertExample_vue_vue_type_template_id_3592527d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertExample.vue?vue&type=template&id=3592527d& */ "./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=template&id=3592527d&");
/* harmony import */ var _AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertExample.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertExample_vue_vue_type_template_id_3592527d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertExample_vue_vue_type_template_id_3592527d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/AlertExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=template&id=3592527d&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=template&id=3592527d& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_template_id_3592527d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertExample.vue?vue&type=template&id=3592527d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertExample.vue?vue&type=template&id=3592527d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_template_id_3592527d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertExample_vue_vue_type_template_id_3592527d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertIcon.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertIcon.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertIcon_vue_vue_type_template_id_25103e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertIcon.vue?vue&type=template&id=25103e14& */ "./resources/js/src/views/components/vuesax/alert/AlertIcon.vue?vue&type=template&id=25103e14&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AlertIcon_vue_vue_type_template_id_25103e14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertIcon_vue_vue_type_template_id_25103e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/AlertIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertIcon.vue?vue&type=template&id=25103e14&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertIcon.vue?vue&type=template&id=25103e14& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_template_id_25103e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertIcon.vue?vue&type=template&id=25103e14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertIcon.vue?vue&type=template&id=25103e14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_template_id_25103e14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertIcon_vue_vue_type_template_id_25103e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertTitle.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertTitle.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertTitle_vue_vue_type_template_id_d09041aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertTitle.vue?vue&type=template&id=d09041aa& */ "./resources/js/src/views/components/vuesax/alert/AlertTitle.vue?vue&type=template&id=d09041aa&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AlertTitle_vue_vue_type_template_id_d09041aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertTitle_vue_vue_type_template_id_d09041aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/alert/AlertTitle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/alert/AlertTitle.vue?vue&type=template&id=d09041aa&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/alert/AlertTitle.vue?vue&type=template&id=d09041aa& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_template_id_d09041aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertTitle.vue?vue&type=template&id=d09041aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/alert/AlertTitle.vue?vue&type=template&id=d09041aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_template_id_d09041aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTitle_vue_vue_type_template_id_d09041aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);