(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/LockScreen.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/LockScreen.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      value1: '',
      value2: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/LockScreen.vue?vue&type=template&id=9d3d2668&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/LockScreen.vue?vue&type=template&id=9d3d2668& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter justify-center items-center"
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
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
                _c("div", { staticClass: "vx-row no-gutter" }, [
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
                          src: __webpack_require__(/*! @assets/images/pages/lock-screen.png */ "./resources/assets/images/pages/lock-screen.png"),
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
                        "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "p-8" },
                        [
                          _c("div", { staticClass: "vx-card__title mb-8" }, [
                            _c("h4", { staticClass: "mb-4" }, [
                              _vm._v("Your Session is locked")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-input", {
                            staticClass: "w-full mb-6",
                            attrs: {
                              "icon-no-border": "",
                              icon: "icon icon-user",
                              "icon-pack": "feather",
                              "label-placeholder": "Username"
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
                              "icon-no-border": "",
                              icon: "icon icon-lock",
                              "icon-pack": "feather",
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
                          _c(
                            "div",
                            { staticClass: "flex justify-between flex-wrap" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "mb-4",
                                  attrs: { to: "/pages/login" }
                                },
                                [_vm._v("Are you not John Doe?")]
                              ),
                              _vm._v(" "),
                              _c("vs-button", { staticClass: "ml-2" }, [
                                _vm._v("Unlock")
                              ])
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/lock-screen.png":
/*!*******************************************************!*\
  !*** ./resources/assets/images/pages/lock-screen.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/lock-screen.png?a5c1191d35dc747cc3e272413cef740e";

/***/ }),

/***/ "./resources/js/src/views/pages/LockScreen.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/LockScreen.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LockScreen_vue_vue_type_template_id_9d3d2668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LockScreen.vue?vue&type=template&id=9d3d2668& */ "./resources/js/src/views/pages/LockScreen.vue?vue&type=template&id=9d3d2668&");
/* harmony import */ var _LockScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LockScreen.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/LockScreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LockScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LockScreen_vue_vue_type_template_id_9d3d2668___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LockScreen_vue_vue_type_template_id_9d3d2668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/LockScreen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/LockScreen.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/LockScreen.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LockScreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/LockScreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/LockScreen.vue?vue&type=template&id=9d3d2668&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/LockScreen.vue?vue&type=template&id=9d3d2668& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_template_id_9d3d2668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LockScreen.vue?vue&type=template&id=9d3d2668& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/LockScreen.vue?vue&type=template&id=9d3d2668&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_template_id_9d3d2668___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LockScreen_vue_vue_type_template_id_9d3d2668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);