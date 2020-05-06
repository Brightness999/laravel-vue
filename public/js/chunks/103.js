(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      article: {
        title: 'Dessert halvah carrot cake sweet?',
        lastUpdated: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
        img: __webpack_require__(/*! @assets/images/pages/kb-article.jpg */ "./resources/assets/images/pages/kb-article.jpg"),
        topics: ['Pastry jelly chocolate bar caramels', 'Donut chupa chups oat cake', 'Marshmallow icing topping toffee caramels dessert carrot cake']
      },
      relatedQuestions: [{
        'id': 0,
        'question': 'Cake icing gummi bears?',
        'answerUrl': '/pages/knowledge-base/category/question'
      }, {
        'id': 1,
        'question': 'Jelly soufflé apple pie?',
        'answerUrl': '/pages/knowledge-base/category/question'
      }, {
        'id': 2,
        'question': 'Soufflé apple pie ice cream cotton?',
        'answerUrl': '/pages/knowledge-base/category/question'
      }, {
        'id': 3,
        'question': 'Powder wafer brownie?',
        'answerUrl': '/pages/knowledge-base/category/question'
      }, {
        'id': 4,
        'question': 'Toffee donut dragée cotton candy?',
        'answerUrl': '/pages/knowledge-base/category/question'
      }, {
        'id': 5,
        'question': 'Soufflé chupa chups chocolate bar?',
        'answerUrl': '/pages/knowledge-base/category/question'
      }]
    };
  },
  mounted: function mounted() {
    this.$emit('changeRouteTitle', 'Question');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "knowledge-base-article" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/5 lg:w-1/4" },
        [
          _c("vx-card", { attrs: { title: "Related Questions" } }, [
            _c(
              "ul",
              { staticClass: "bordered-items" },
              _vm._l(_vm.relatedQuestions, function(que) {
                return _c(
                  "li",
                  { key: que.id, staticClass: "py-2" },
                  [
                    _c("router-link", { attrs: { to: que.answerUrl } }, [
                      _vm._v(_vm._s(que.question))
                    ])
                  ],
                  1
                )
              }),
              0
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0" },
        [
          _c(
            "vx-card",
            [
              _c("div", { staticClass: "article-title mb-6" }, [
                _c("h1", [_vm._v(_vm._s(_vm.article.title))]),
                _vm._v(" "),
                _c("p", { staticClass: "mt-1" }, [
                  _vm._v("Last updated on "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("date")(_vm.article.lastUpdated, true))
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Pastry jelly chocolate bar caramels fruitcake gummies marshmallow lemon drops. Powder cupcake topping muffin carrot cake croissant soufflé sugar plum sweet roll. Cotton candy ice cream gummies biscuit bonbon biscuit. Icing pastry bonbon. Sweet roll chocolate cake liquorice jelly beans caramels jelly cookie caramels. Pastry candy canes cake powder lollipop tootsie roll sugar plum. Cake cotton candy dragée danish. Muffin croissant sweet roll candy wafer marzipan cheesecake. Carrot cake toffee gummi bears gingerbread donut biscuit. Donut chupa chups oat cake cheesecake apple pie gummies marzipan icing cake. Macaroon jelly beans gummi bears carrot cake tiramisu liquorice. Sweet tootsie roll cookie marzipan brownie icing cookie jelly tart. Lollipop cookie tootsie roll candy canes."
                )
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "responsive my-3 rounded",
                attrs: { src: _vm.article.img, alt: "article-img" }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "mb-6" }, [
                _vm._v(
                  "Candy canes oat cake biscuit halvah ice cream. Marshmallow icing topping toffee caramels dessert carrot cake. Liquorice soufflé brownie sugar plum dessert cotton candy. Cupcake halvah topping oat cake soufflé pastry dragée pudding cotton candy."
                )
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-2" }, [_vm._v("Topics:")]),
              _vm._v(" "),
              _c("vx-list", { attrs: { list: _vm.article.topics } }),
              _vm._v(" "),
              _c("p", { staticClass: "mt-4" }, [
                _vm._v(
                  "Chocolate cake powder I love jelly beans lemon drops candy fruitcake. Sesame snaps sugar plum chocolate candy canes muffin. Wafer pastry topping croissant pudding dessert I love. Bonbon apple pie fruitcake candy canes I love. Lollipop sweet gingerbread I love I love dessert. I love halvah marshmallow pie jelly beans macaroon candy. Bonbon ice cream lollipop pie fruitcake oat cake. Topping marshmallow I love sesame snaps dragée. I love sesame snaps jelly. Chocolate sesame snaps jelly I love I love powder jelly-o."
                )
              ]),
              _vm._v(" "),
              _c("template", { slot: "footer" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "flex items-center",
                        attrs: { to: "/pages/knowledge-base/category/question" }
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-2",
                          attrs: {
                            icon: _vm.$vs.rtl
                              ? "ChevronsRightIcon"
                              : "ChevronsLeftIcon",
                            svgClasses: "h-4 w-4"
                          }
                        }),
                        _vm._v(" Previous Article")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "flex items-center",
                        attrs: { to: "/pages/knowledge-base/category/question" }
                      },
                      [
                        _vm._v("Next Article "),
                        _c("feather-icon", {
                          staticClass: "ml-2",
                          attrs: {
                            icon: _vm.$vs.rtl
                              ? "ChevronsLeftIcon"
                              : "ChevronsRightIcon",
                            svgClasses: "h-4 w-4"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
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

/***/ "./resources/assets/images/pages/kb-article.jpg":
/*!******************************************************!*\
  !*** ./resources/assets/images/pages/kb-article.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/kb-article.jpg?6977451ec062edae53cdc9e37d0d66fe";

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeBaseCategoryQuestion_vue_vue_type_template_id_8288d164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164& */ "./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164&");
/* harmony import */ var _KnowledgeBaseCategoryQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KnowledgeBaseCategoryQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeBaseCategoryQuestion_vue_vue_type_template_id_8288d164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KnowledgeBaseCategoryQuestion_vue_vue_type_template_id_8288d164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseCategoryQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseCategoryQuestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseCategoryQuestion_vue_vue_type_template_id_8288d164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBaseCategoryQuestion.vue?vue&type=template&id=8288d164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseCategoryQuestion_vue_vue_type_template_id_8288d164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBaseCategoryQuestion_vue_vue_type_template_id_8288d164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);