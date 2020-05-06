(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Faq.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      faqSearchQuery: '',
      faqFilter: 1,
      categories: [{
        id: 1,
        name: 'All',
        color: 'grey'
      }, {
        id: 2,
        name: 'General',
        color: 'primary'
      }, {
        id: 3,
        name: 'Licenses',
        color: 'success'
      }, {
        id: 4,
        name: 'Company usage',
        color: 'warning'
      }, {
        id: 5,
        name: 'Trademark use',
        color: 'danger'
      }],
      faqs: [{
        id: 1,
        categoryId: 2,
        question: 'What does royalty free mean?',
        ans: 'Royalty free means you just need to pay for rights to use the item once per end product. You don\'t need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses.'
      }, {
        id: 2,
        categoryId: 2,
        question: 'What do you mean by item and end product?',
        ans: 'The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app\'s interface.'
      }, {
        id: 3,
        categoryId: 2,
        question: 'Am I allowed to modify the item that I purchased?',
        ans: 'Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client.'
      }, {
        id: 4,
        categoryId: 2,
        question: 'What does non-exclusive mean?',
        ans: 'Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item.'
      }, {
        id: 5,
        categoryId: 3,
        question: 'Is the Regular License the same thing as an editorial license?',
        ans: 'No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that\'s sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer.'
      }, {
        id: 6,
        categoryId: 3,
        question: 'Which license do I need for an end product that is only accessible to paying users?',
        ans: 'If the end users need to pay to see the end product, you need an Extended License. There can be more than one end user as long as there is only one end product. Example: A website that requires money before you can access the content.'
      }, {
        id: 7,
        categoryId: 3,
        question: 'Which license do I need to use an item in a commercial?',
        ans: 'You only need a Regular License where the end product is an advertisement, as the audience does not have to pay to view it. It doesn\'t matter if the advertisement is for things that are being sold. Example: An After Effects template used to produce a TV commercial would only need the Regular License'
      }, {
        id: 8,
        categoryId: 3,
        question: 'Can I re-distribute an item? What about under an Extended License?',
        ans: 'No. You can\'t license items and then make them available to others "as-is" (that is, as a stand-alone item or as stock), regardless of which license you purchase. Example: You can\'t buy a business card template and distribute it as a template, source files and all.'
      }, {
        id: 9,
        categoryId: 4,
        question: 'Can multiple people within my company have access to the item?',
        ans: 'Yes. If you purchased a single-use license, access should only be given to people working on the single end product incorporating that item.'
      }, {
        id: 10,
        categoryId: 4,
        question: 'Can I store the item on an intranet so everyone has access?',
        ans: 'No, items must be stored in a location where only those who need them have access. If you purchased a single-use license, once the item has been used in a single end product, the only place you should store it is in the archive files for that end product.'
      }, {
        id: 11,
        categoryId: 5,
        question: 'Does this apply to all items from Envato Market?',
        ans: 'No. This only applies to items with real-world products and trademarks in the actual item. This is most likely in product mock-ups (graphics items), product promos (motion graphics project files) and 3D items. This does not apply to PhotoDune items, which are available for commercial use. This also does not apply to images of products and trademarks used illustratively in item previews, as they\'re not included in the item you download.'
      }, {
        id: 12,
        categoryId: 5,
        question: 'What does \'editorial use\' mean?',
        ans: 'Editorial use means using an item only for news or journalistic purposes like in blogs, magazine and newspaper editorial applications.'
      }, {
        id: 13,
        categoryId: 5,
        question: 'Is this item still \'royalty free\'?',
        ans: 'Yes. Royalty free means you pay for the item once for each end product, and you don\'t need to pay any additional or ongoing fees for each person who sees or uses it. This is separate to whether you need a clearance from the owner of rights in the real world product or trademark within an item.'
      }],
      supporters: [{
        id: 1,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-1.jpg */ "./resources/assets/images/portrait/small/avatar-s-1.jpg"),
        name: 'Boyce Shene',
        profession: 'Web Developer'
      }, {
        id: 2,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-2.jpg */ "./resources/assets/images/portrait/small/avatar-s-2.jpg"),
        name: 'Margie Sevy',
        profession: 'Web Designer'
      }, {
        id: 3,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-3.jpg */ "./resources/assets/images/portrait/small/avatar-s-3.jpg"),
        name: 'Cyndi Navas',
        profession: 'Web Developer'
      }, {
        id: 4,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-4.jpg */ "./resources/assets/images/portrait/small/avatar-s-4.jpg"),
        name: 'Chi Petrusky',
        profession: 'Web Developer'
      }, {
        id: 5,
        img: __webpack_require__(/*! @assets/images/portrait/small/avatar-s-5.jpg */ "./resources/assets/images/portrait/small/avatar-s-5.jpg"),
        name: 'Shanel Dumag',
        profession: 'Web Designer'
      }]
    };
  },
  computed: {
    filteredFaq: function filteredFaq() {
      var _this = this;

      return this.faqs.filter(function (faq) {
        if (_this.faqFilter === 1) return faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase());else if (_this.faqFilter === 2) return faq.categoryId === 2 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));else if (_this.faqFilter === 3) return faq.categoryId === 3 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));else if (_this.faqFilter === 4) return faq.categoryId === 4 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));else if (_this.faqFilter === 5) return faq.categoryId === 5 && (faq.question.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(_this.faqSearchQuery.toLowerCase()));
      });
    }
  },
  methods: {},
  components: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #faq-page .faq-jumbotron-content {\n  background-image: url(" + escape(__webpack_require__(/*! ../../../../assets/images/pages/faq.jpg */ "./resources/assets/images/pages/faq.jpg")) + ");\n  background-size: cover;\n}\n[dir] #faq-page .faq-bg {\n  background-color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=template&id=2cab95de&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Faq.vue?vue&type=template&id=2cab95de& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "faq-page" } }, [
    _c("div", { staticClass: "faq-jumbotron" }, [
      _c(
        "div",
        {
          staticClass:
            "faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base"
        },
        [
          _c("h1", { staticClass: "mb-1 text-white" }, [
            _vm._v("Have Any Questions?")
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
              placeholder: "Search",
              "icon-pack": "feather",
              icon: "icon-search",
              size: "large",
              "icon-no-border": ""
            },
            model: {
              value: _vm.faqSearchQuery,
              callback: function($$v) {
                _vm.faqSearchQuery = $$v
              },
              expression: "faqSearchQuery"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg" },
        [
          _c("vx-card", [
            _c("h4", [_vm._v("Table of Content")]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "faq-topics mt-4" },
              _vm._l(_vm.categories, function(category) {
                return _c(
                  "li",
                  {
                    key: category.id,
                    staticClass: "p-2 font-medium flex items-center",
                    on: {
                      click: function($event) {
                        _vm.faqFilter = category.id
                      }
                    }
                  },
                  [
                    _c("div", {
                      staticClass: "h-3 w-3 rounded-full mr-2",
                      class: "bg-" + category.color
                    }),
                    _c("span", { staticClass: "cursor-pointer" }, [
                      _vm._v(_vm._s(category.name))
                    ])
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("h4", [_vm._v("Supporters")]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "faq-supporters mt-4" },
              _vm._l(_vm.supporters, function(supporter) {
                return _c("li", { key: supporter.id, staticClass: "mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "flex items-center" },
                    [
                      _c("vs-avatar", {
                        staticClass: "mr-3",
                        attrs: { src: supporter.img, size: "35px" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "leading-tight" }, [
                        _c("p", { staticClass: "font-semibold" }, [
                          _vm._v(_vm._s(supporter.name))
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v(_vm._s(supporter.profession))])
                      ])
                    ],
                    1
                  )
                ])
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
            "vs-collapse",
            { staticClass: "p-0", attrs: { accordion: "", type: "margin" } },
            _vm._l(_vm.filteredFaq, function(que, index) {
              return _c(
                "vs-collapse-item",
                {
                  key: que.id,
                  staticClass: "faq-bg rounded-lg",
                  class: { "mt-0": !index }
                },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("h5", [_vm._v(_vm._s(que.question))])
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(que.ans))])
                ]
              )
            }),
            1
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

/***/ "./resources/assets/images/pages/faq.jpg":
/*!***********************************************!*\
  !*** ./resources/assets/images/pages/faq.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/faq.jpg?8e0b3142b57a84b707601af3410dff91";

/***/ }),

/***/ "./resources/js/src/views/pages/Faq.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/pages/Faq.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq_vue_vue_type_template_id_2cab95de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=2cab95de& */ "./resources/js/src/views/pages/Faq.vue?vue&type=template&id=2cab95de&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_2cab95de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faq_vue_vue_type_template_id_2cab95de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Faq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Faq.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/Faq.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Faq.vue?vue&type=template&id=2cab95de&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Faq.vue?vue&type=template&id=2cab95de& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_2cab95de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=template&id=2cab95de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Faq.vue?vue&type=template&id=2cab95de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_2cab95de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_2cab95de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);