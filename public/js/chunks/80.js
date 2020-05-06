(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [{
        id: 1,
        title: 'Sales Automation',
        description: 'Muffin lemon drops chocolate carrot cake chocolate bar sweet roll.',
        graphic: __webpack_require__(/*! @assets/images/pages/graphic-1.png */ "./resources/assets/images/pages/graphic-1.png"),
        url: '/pages/knowledge-base/category'
      }, {
        id: 2,
        title: 'Marketing Automation',
        description: 'Gingerbread sesame snaps wafer soufflé. Macaroon brownie ice cream',
        graphic: __webpack_require__(/*! @assets/images/pages/graphic-2.png */ "./resources/assets/images/pages/graphic-2.png"),
        url: '/pages/knowledge-base/category'
      }, {
        id: 3,
        title: 'Marketing BI',
        description: 'cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.',
        graphic: __webpack_require__(/*! @assets/images/pages/graphic-3.png */ "./resources/assets/images/pages/graphic-3.png"),
        url: '/pages/knowledge-base/category'
      }, {
        id: 4,
        title: 'Personalization',
        description: 'Pudding oat cake carrot cake lemon drops gummies marshmallow.',
        graphic: __webpack_require__(/*! @assets/images/pages/graphic-4.png */ "./resources/assets/images/pages/graphic-4.png"),
        url: '/pages/knowledge-base/category'
      }, {
        id: 5,
        title: 'Email Marketing',
        description: 'Gummi bears pudding icing sweet caramels chocolate',
        graphic: __webpack_require__(/*! @assets/images/pages/graphic-5.png */ "./resources/assets/images/pages/graphic-5.png"),
        url: '/pages/knowledge-base/category'
      }, {
        id: 6,
        title: 'Demand Generation',
        description: 'Dragée jelly beans candy canes pudding cake wafer. Muffin croissant.',
        graphic: __webpack_require__(/*! @assets/images/pages/graphic-6.png */ "./resources/assets/images/pages/graphic-6.png"),
        url: '/pages/knowledge-base/category'
      }]
    };
  },
  computed: {
    filteredKB: function filteredKB() {
      var _this = this;

      return this.kb.filter(function (item) {
        return item.title.toLowerCase().includes(_this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(_this.knowledgeBaseSearchQuery.toLowerCase());
      });
    }
  },
  methods: {},
  components: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .knowledge-base-jumbotron-content {\n  background-image: url(" + escape(__webpack_require__(/*! ../../../../assets/images/pages/knowledge-base-cover.jpg */ "./resources/assets/images/pages/knowledge-base-cover.jpg")) + ");\n  background-size: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a& ***!
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
  return _c("div", { attrs: { id: "knowledge-base-page" } }, [
    _c("div", { staticClass: "knowledge-base-jumbotron" }, [
      _c(
        "div",
        {
          staticClass:
            "knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base"
        },
        [
          _c("h1", { staticClass: "mb-1 text-white" }, [
            _vm._v("Dedicated Source Used on Website")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white" }, [
            _vm._v(
              "Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer."
            )
          ]),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full mt-6",
            attrs: {
              "icon-no-border": "",
              placeholder: "Search Topic or Keyword",
              "icon-pack": "feather",
              icon: "icon-search",
              size: "large"
            },
            model: {
              value: _vm.knowledgeBaseSearchQuery,
              callback: function($$v) {
                _vm.knowledgeBaseSearchQuery = $$v
              },
              expression: "knowledgeBaseSearchQuery"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-row" },
      _vm._l(_vm.filteredKB, function(item) {
        return _c(
          "div",
          {
            key: item.id,
            staticClass: "vx-col w-full md:w-1/3 sm:w-1/2 mb-base",
            on: {
              click: function($event) {
                _vm.$router.push(item.url).catch(function() {})
              }
            }
          },
          [
            _c("vx-card", { staticClass: "text-center cursor-pointer" }, [
              _c("img", {
                staticClass: "mx-auto mb-4",
                attrs: { src: item.graphic, alt: "graphic", width: "180" }
              }),
              _vm._v(" "),
              _c("h4", { staticClass: "mb-2" }, [
                _vm._v(_vm._s(item.title.toUpperCase()))
              ]),
              _vm._v(" "),
              _c("small", [_vm._v(_vm._s(item.description))])
            ])
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/graphic-1.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-1.png?22b046f6fc2c8b16f16334eabab57831";

/***/ }),

/***/ "./resources/assets/images/pages/graphic-2.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-2.png?560d813bbfa933a94178e2cc12a486c6";

/***/ }),

/***/ "./resources/assets/images/pages/graphic-3.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-3.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-3.png?e88b80c08f4ace84500143771fb60340";

/***/ }),

/***/ "./resources/assets/images/pages/graphic-4.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-4.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-4.png?6ab88846ad3498bdc9b1f00cc2243315";

/***/ }),

/***/ "./resources/assets/images/pages/graphic-5.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-5.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-5.png?6e224f81e5f06c29aae270aae3b9ed83";

/***/ }),

/***/ "./resources/assets/images/pages/graphic-6.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-6.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-6.png?3ab06089c65139da847f10c7d64dc335";

/***/ }),

/***/ "./resources/assets/images/pages/knowledge-base-cover.jpg":
/*!****************************************************************!*\
  !*** ./resources/assets/images/pages/knowledge-base-cover.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/knowledge-base-cover.jpg?76a102a11e355a3e98ac0f72276eb90a";

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeBase.vue?vue&type=template&id=5a396a2a& */ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&");
/* harmony import */ var _KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeBase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnowledgeBase.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/KnowledgeBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=template&id=5a396a2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);