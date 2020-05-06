(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ResetPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ResetPassword.vue?vue&type=template&id=2e0cad45&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ResetPassword.vue?vue&type=template&id=2e0cad45& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "h-screen flex w-full bg-img" }, [
    _c(
      "div",
      {
        staticClass:
          "vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"
      },
      [
        _c("vx-card", [
          _c(
            "div",
            {
              staticClass: "full-page-bg-color",
              attrs: { slot: "no-body" },
              slot: "no-body"
            },
            [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                  },
                  [
                    _c("img", {
                      staticClass: "mx-auto",
                      attrs: {
                        src: __webpack_require__(/*! @assets/images/pages/reset-password.png */ "./resources/assets/images/pages/reset-password.png"),
                        alt: "login"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "p-8" },
                      [
                        _c("div", { staticClass: "vx-card__title mb-8" }, [
                          _c("h4", { staticClass: "mb-4" }, [
                            _vm._v("Reset Password")
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Please enter your new password.")])
                        ]),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mb-6",
                          attrs: {
                            type: "email",
                            "label-placeholder": "Email"
                          },
                          model: {
                            value: _vm.value1,
                            callback: function($$v) {
                              _vm.value1 = $$v
                            },
                            expression: "value1"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mb-6",
                          attrs: {
                            type: "password",
                            "label-placeholder": "Password"
                          },
                          model: {
                            value: _vm.value2,
                            callback: function($$v) {
                              _vm.value2 = $$v
                            },
                            expression: "value2"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mb-8",
                          attrs: {
                            type: "password",
                            "label-placeholder": "Confirm Password"
                          },
                          model: {
                            value: _vm.value3,
                            callback: function($$v) {
                              _vm.value3 = $$v
                            },
                            expression: "value3"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex flex-wrap justify-between flex-col-reverse sm:flex-row"
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass:
                                  "w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto",
                                attrs: { type: "border", to: "/pages/login" }
                              },
                              [_vm._v("Go Back To Login")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              { staticClass: "w-full sm:w-auto" },
                              [_vm._v("Reset")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/reset-password.png":
/*!**********************************************************!*\
  !*** ./resources/assets/images/pages/reset-password.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/reset-password.png?965156dace52dc1b319d6363d3040ff2";

/***/ }),

/***/ "./resources/js/src/views/pages/ResetPassword.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/ResetPassword.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_2e0cad45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=2e0cad45& */ "./resources/js/src/views/pages/ResetPassword.vue?vue&type=template&id=2e0cad45&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_2e0cad45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_2e0cad45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/ResetPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ResetPassword.vue?vue&type=template&id=2e0cad45&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ResetPassword.vue?vue&type=template&id=2e0cad45& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_2e0cad45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=2e0cad45& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ResetPassword.vue?vue&type=template&id=2e0cad45&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_2e0cad45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_2e0cad45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);