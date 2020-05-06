(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-instantsearch */ "./node_modules/vue-instantsearch/dist/vue-instantsearch.esm.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ItemGridView: function ItemGridView() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./components/ItemGridView.vue */ "./resources/js/src/views/apps/eCommerce/components/ItemGridView.vue"));
    },
    ItemListView: function ItemListView() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./components/ItemListView.vue */ "./resources/js/src/views/apps/eCommerce/components/ItemListView.vue"));
    },
    AisClearRefinements: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisClearRefinements"],
    AisConfigure: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisConfigure"],
    AisHierarchicalMenu: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisHierarchicalMenu"],
    AisHits: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisHits"],
    AisInstantSearch: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisInstantSearch"],
    AisNumericMenu: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisNumericMenu"],
    AisPagination: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisPagination"],
    AisRangeInput: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisRangeInput"],
    AisRatingMenu: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisRatingMenu"],
    AisRefinementList: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisRefinementList"],
    AisSearchBox: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisSearchBox"],
    AisSortBy: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisSortBy"],
    AisStats: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisStats"]
  },
  data: function data() {
    return {
      searchClient: algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default()('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: 'item-grid-view',
      numericItems: [{
        label: 'All'
      }, {
        label: '<= $10',
        end: 10
      }, {
        label: '$10 - $100',
        start: 10,
        end: 100
      }, {
        label: '$100 - $500',
        start: 100,
        end: 500
      }, {
        label: '>= $500',
        start: 500
      }],
      algoliaCategories: ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2', 'hierarchicalCategories.lvl3']
    };
  },
  computed: {
    toValue: function toValue() {
      return function (value, range) {
        return [value.min !== null ? value.min : range.min, value.max !== null ? value.max : range.max];
      };
    },
    // GRID VIEW
    isInCart: function isInCart() {
      var _this = this;

      return function (itemId) {
        return _this.$store.getters['eCommerce/isInCart'](itemId);
      };
    },
    isInWishList: function isInWishList() {
      var _this2 = this;

      return function (itemId) {
        return _this2.$store.getters['eCommerce/isInWishList'](itemId);
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  watch: {
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  methods: {
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false;
      } else {
        this.isFilterSidebarActive = this.clickNotClose = true;
      }
    },
    // GRID VIEW - ACTIONS
    toggleFilterSidebar: function toggleFilterSidebar() {
      if (this.clickNotClose) return;
      this.isFilterSidebarActive = !this.isFilterSidebarActive;
    },
    toggleItemInWishList: function toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item);
    },
    additemInCart: function additemInCart(item) {
      this.$store.dispatch('eCommerce/additemInCart', item);
    },
    cartButtonClicked: function cartButtonClicked(item) {
      this.isInCart(item.objectID) ? this.$router.push('/apps/eCommerce/checkout').catch(function () {}) : this.additemInCart(item);
    }
  },
  created: function created() {
    this.setSidebarWidth();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#algolia-instant-search-demo .algolia-header .algolia-filters-label {\n  width: calc(260px + 2.4rem);\n}\n#algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  position: relative;\n}\n[dir=ltr] #algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  float: left;\n}\n[dir=rtl] #algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  float: right;\n}\n[dir] #algolia-instant-search-demo .algolia-search-input-right-aligned-icon {\n  padding: 1rem 1.5rem;\n}\n#algolia-instant-search-demo .algolia-price-slider {\n  min-width: unset;\n}\n#algolia-instant-search-demo .item-view-primary-action-btn {\n  color: #2c2c2c !important;\n  min-width: 50%;\n}\n[dir] #algolia-instant-search-demo .item-view-primary-action-btn {\n  background-color: #f6f6f6;\n}\n#algolia-instant-search-demo .item-view-secondary-action-btn {\n  min-width: 50%;\n}\n[dir] .theme-dark #algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  background-color: #10163a;\n}\n@media (min-width: 992px) {\n[dir] .vs-sidebar-rounded .vs-sidebar {\n    border-radius: 0.5rem;\n}\n[dir] .vs-sidebar-rounded .vs-sidebar--items {\n    border-radius: 0.5rem;\n}\n}\n@media (max-width: 992px) {\n#algolia-content-container .vs-sidebar {\n    position: absolute !important;\n}\n[dir] #algolia-content-container .vs-sidebar {\n    float: none !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=template&id=23854758&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=template&id=23854758& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "ais-instant-search",
        {
          attrs: {
            "search-client": _vm.searchClient,
            "index-name": "instant_search",
            id: "algolia-instant-search-demo"
          }
        },
        [
          _c("ais-configure", { attrs: { hitsPerPage: 9 } }),
          _vm._v(" "),
          _c("div", { staticClass: "algolia-header mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex md:items-end items-center justify-between flex-wrap"
              },
              [
                _c("feather-icon", {
                  staticClass: "inline-flex lg:hidden cursor-pointer mr-4",
                  attrs: { icon: "MenuIcon" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.toggleFilterSidebar($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "lg:inline-flex hidden font-semibold algolia-filters-label"
                  },
                  [_vm._v("Filters")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-between items-end flex-grow" },
                  [
                    _c("ais-stats", {
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var hitsPerPage = ref.hitsPerPage
                            var nbPages = ref.nbPages
                            var nbHits = ref.nbHits
                            var page = ref.page
                            var processingTimeMS = ref.processingTimeMS
                            var query = ref.query
                            return _c(
                              "p",
                              { staticClass: "font-semibold md:block hidden" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(nbHits) +
                                    " results found in " +
                                    _vm._s(processingTimeMS) +
                                    "ms\n                        "
                                )
                              ]
                            )
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex flex-wrap" },
                      [
                        _c("ais-sort-by", {
                          attrs: {
                            items: [
                              { value: "instant_search", label: "Featured" },
                              {
                                value: "instant_search_price_asc",
                                label: "Lowest Price"
                              },
                              {
                                value: "instant_search_price_desc",
                                label: "Highest Price"
                              }
                            ]
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var items = ref.items
                                var currentRefinement = ref.currentRefinement
                                var refine = ref.refine
                                return _c(
                                  "vs-select",
                                  {
                                    staticClass:
                                      "mr-4 vs-input-shadow-drop vs-select-no-border d-theme-input-dark-bg w-48",
                                    attrs: { value: currentRefinement },
                                    on: {
                                      input: function(val) {
                                        return refine(val)
                                      }
                                    }
                                  },
                                  _vm._l(items, function(item) {
                                    return _c("vs-select-item", {
                                      key: item.value,
                                      attrs: {
                                        value: item.value,
                                        text: item.label
                                      }
                                    })
                                  }),
                                  1
                                )
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("feather-icon", {
                              staticClass:
                                "p-2 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer",
                              attrs: {
                                icon: "GridIcon",
                                svgClasses: {
                                  "text-primary stroke-current":
                                    _vm.currentItemView == "item-grid-view"
                                }
                              },
                              on: {
                                click: function($event) {
                                  _vm.currentItemView = "item-grid-view"
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "p-2 ml-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer hidden sm:inline-flex",
                              attrs: {
                                icon: "ListIcon",
                                svgClasses: {
                                  "text-primary stroke-current":
                                    _vm.currentItemView == "item-list-view"
                                }
                              },
                              on: {
                                click: function($event) {
                                  _vm.currentItemView = "item-list-view"
                                }
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "relative clearfix",
              attrs: { id: "algolia-content-container" }
            },
            [
              _c(
                "vs-sidebar",
                {
                  staticClass:
                    "items-no-padding vs-sidebar-rounded background-absolute",
                  attrs: {
                    parent: "#algolia-content-container",
                    "click-not-close": _vm.clickNotClose,
                    "hidden-background": _vm.clickNotClose
                  },
                  model: {
                    value: _vm.isFilterSidebarActive,
                    callback: function($$v) {
                      _vm.isFilterSidebarActive = $$v
                    },
                    expression: "isFilterSidebarActive"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "p-6 filter-container" },
                    [
                      _c("h6", { staticClass: "font-bold mb-3" }, [
                        _vm._v("Multi Range")
                      ]),
                      _vm._v(" "),
                      _c("ais-numeric-menu", {
                        attrs: { attribute: "price", items: _vm.numericItems },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var items = ref.items
                              var refine = ref.refine
                              var createURL = ref.createURL
                              return _c(
                                "ul",
                                {},
                                _vm._l(items, function(item) {
                                  return _c(
                                    "li",
                                    {
                                      key: item.value,
                                      staticClass:
                                        "flex items-center cursor-pointer py-1",
                                      on: {
                                        click: function($event) {
                                          return refine(item.value)
                                        }
                                      }
                                    },
                                    [
                                      _c("feather-icon", {
                                        attrs: {
                                          icon: "CircleIcon",
                                          svgClasses: [
                                            {
                                              "text-primary fill-current":
                                                item.isRefined
                                            },
                                            "h-5 w-5"
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "ml-2",
                                          class: {
                                            "text-primary": item.isRefined
                                          }
                                        },
                                        [_vm._v(_vm._s(item.label))]
                                      )
                                    ],
                                    1
                                  )
                                }),
                                0
                              )
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("h6", { staticClass: "font-bold mb-3" }, [
                        _vm._v("Price Slider")
                      ]),
                      _vm._v(" "),
                      _c("ais-range-input", {
                        attrs: { attribute: "price" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var currentRefinement = ref.currentRefinement
                              var range = ref.range
                              var refine = ref.refine
                              return _c(
                                "div",
                                {},
                                [
                                  _c("vs-slider", {
                                    staticClass: "algolia-price-slider",
                                    attrs: {
                                      "text-fixed": "$",
                                      min: range.min,
                                      max: range.max,
                                      value: _vm.toValue(
                                        currentRefinement,
                                        range
                                      )
                                    },
                                    on: {
                                      input: function($event) {
                                        return refine({
                                          min: $event[0],
                                          max: $event[1]
                                        })
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("h6", { staticClass: "font-bold mb-4" }, [
                        _vm._v("Category")
                      ]),
                      _vm._v(" "),
                      _c("ais-hierarchical-menu", {
                        attrs: { attributes: _vm.algoliaCategories },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var items = ref.items
                              var refine = ref.refine
                              return _c("div", {}, [
                                _c(
                                  "ul",
                                  _vm._l(items, function(item) {
                                    return _c(
                                      "li",
                                      {
                                        key: item.value,
                                        staticClass:
                                          "flex items-center cursor-pointer py-1",
                                        on: {
                                          click: function($event) {
                                            return refine(item.value)
                                          }
                                        }
                                      },
                                      [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "CircleIcon",
                                            svgClasses: [
                                              {
                                                "text-primary fill-current":
                                                  item.isRefined
                                              },
                                              "h-5 w-5"
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "ml-2",
                                            class: {
                                              "text-primary": item.isRefined
                                            }
                                          },
                                          [_vm._v(_vm._s(item.label))]
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  0
                                )
                              ])
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("h6", { staticClass: "font-bold mb-4" }, [
                        _vm._v("Brand")
                      ]),
                      _vm._v(" "),
                      _c("ais-refinement-list", {
                        attrs: { attribute: "brand" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var items = ref.items
                              var isFromSearch = ref.isFromSearch
                              var refine = ref.refine
                              return _c("div", {}, [
                                _c(
                                  "ul",
                                  [
                                    isFromSearch && !items.length
                                      ? _c("li", [_vm._v("No results.")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(items, function(item) {
                                      return _c(
                                        "li",
                                        {
                                          key: item.value,
                                          staticClass:
                                            "mb-2 flex items-center justify-between"
                                        },
                                        [
                                          _c(
                                            "vs-checkbox",
                                            {
                                              staticClass: "ml-0",
                                              on: {
                                                click: function($event) {
                                                  return refine(item.value)
                                                }
                                              },
                                              model: {
                                                value: item.isRefined,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    item,
                                                    "isRefined",
                                                    $$v
                                                  )
                                                },
                                                expression: "item.isRefined"
                                              }
                                            },
                                            [_vm._v(_vm._s(item.label))]
                                          ),
                                          _vm._v(" "),
                                          _c("span", [
                                            _vm._v(_vm._s(item.count))
                                          ])
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
                              ])
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("h6", { staticClass: "font-bold mb-3" }, [
                        _vm._v("Rating")
                      ]),
                      _vm._v(" "),
                      _c("ais-rating-menu", {
                        attrs: { attribute: "rating" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var items = ref.items
                              var refine = ref.refine
                              var createURL = ref.createURL
                              return _c(
                                "ul",
                                {},
                                _vm._l(items, function(item) {
                                  return _c(
                                    "li",
                                    { key: item.value, staticClass: "mb-2" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex justify-between items-center",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return refine(item.value)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex items-center flex-wrap"
                                            },
                                            [
                                              _vm._l(item.stars, function(
                                                full,
                                                index
                                              ) {
                                                return _c("feather-icon", {
                                                  key: index,
                                                  attrs: {
                                                    icon: "StarIcon",
                                                    svgClasses: [
                                                      {
                                                        "text-warning": full,
                                                        "text-grey": !full,
                                                        "ml-1": index
                                                      },
                                                      "cursor-pointer stroke-current h-6 w-6"
                                                    ]
                                                  }
                                                })
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "ml-2" },
                                                [_vm._v("& up")]
                                              )
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c("span", [
                                            _vm._v(
                                              "(" + _vm._s(item.count) + ")"
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("ais-clear-refinements", {
                        staticClass: "flex justify-center",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var canRefine = ref.canRefine
                              var refine = ref.refine
                              var createURL = ref.createURL
                              return _c(
                                "vs-button",
                                {
                                  staticClass: "w-full",
                                  attrs: { disabled: !canRefine },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return refine($event)
                                    }
                                  }
                                },
                                [_vm._v("Remove Filters")]
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { class: { "sidebar-spacer-with-margin": _vm.clickNotClose } },
                [
                  _c("ais-search-box", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var currentRefinement = ref.currentRefinement
                          var isSearchStalled = ref.isSearchStalled
                          var refine = ref.refine
                          return _c("div", {}, [
                            _c(
                              "div",
                              { staticClass: "relative mb-8" },
                              [
                                _c("vs-input", {
                                  staticClass:
                                    "w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg",
                                  attrs: {
                                    placeholder: "Search here",
                                    size: "large"
                                  },
                                  on: {
                                    input: function($event) {
                                      return refine($event)
                                    },
                                    keyup: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "esc",
                                          27,
                                          $event.key,
                                          ["Esc", "Escape"]
                                        )
                                      ) {
                                        return null
                                      }
                                      return refine("")
                                    }
                                  },
                                  model: {
                                    value: currentRefinement,
                                    callback: function($$v) {
                                      currentRefinement = $$v
                                    },
                                    expression: "currentRefinement"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "mt-4 text-grey",
                                    attrs: { hidden: !isSearchStalled }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2 align-middle",
                                      attrs: {
                                        icon: "ClockIcon",
                                        svgClasses: "w-4 h-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Loading...")])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !currentRefinement,
                                        expression: "!currentRefinement"
                                      }
                                    ],
                                    staticClass:
                                      "absolute top-0 right-0 py-4 px-6",
                                    attrs: { slot: "submit-icon" },
                                    slot: "submit-icon"
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "SearchIcon",
                                        svgClasses: "h-6 w-6"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: currentRefinement,
                                        expression: "currentRefinement"
                                      }
                                    ],
                                    staticClass:
                                      "absolute top-0 right-0 py-4 px-6",
                                    attrs: { slot: "reset-icon" },
                                    slot: "reset-icon"
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "XIcon",
                                        svgClasses: "h-6 w-6 cursor-pointer"
                                      },
                                      on: {
                                        click: function($event) {
                                          return refine("")
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("ais-hits", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var items = ref.items
                          return _c(
                            "div",
                            {},
                            [
                              _vm.currentItemView == "item-grid-view"
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "items-grid-view vx-row match-height"
                                      },
                                      _vm._l(items, function(item) {
                                        return _c(
                                          "div",
                                          {
                                            key: item.objectID,
                                            staticClass:
                                              "vx-col lg:w-1/3 sm:w-1/2 w-full"
                                          },
                                          [
                                            _c(
                                              "item-grid-view",
                                              { attrs: { item: item } },
                                              [
                                                _c(
                                                  "template",
                                                  { slot: "action-buttons" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "flex flex-wrap"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.toggleItemInWishList(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("feather-icon", {
                                                              attrs: {
                                                                icon:
                                                                  "HeartIcon",
                                                                svgClasses: [
                                                                  {
                                                                    "text-danger fill-current": _vm.isInWishList(
                                                                      item.objectID
                                                                    )
                                                                  },
                                                                  "h-4 w-4"
                                                                ]
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "text-sm font-semibold ml-2"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "WISHLIST"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.cartButtonClicked(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("feather-icon", {
                                                              attrs: {
                                                                icon:
                                                                  "ShoppingBagIcon",
                                                                svgClasses:
                                                                  "h-4 w-4"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.isInCart(
                                                              item.objectID
                                                            )
                                                              ? _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "text-sm font-semibold ml-2"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "VIEW IN CART"
                                                                    )
                                                                  ]
                                                                )
                                                              : _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "text-sm font-semibold ml-2"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "ADD TO CART"
                                                                    )
                                                                  ]
                                                                )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                : _vm._l(items, function(item) {
                                    return _c(
                                      "div",
                                      {
                                        key: item.objectID,
                                        staticClass: "items-list-view mb-base"
                                      },
                                      [
                                        _c(
                                          "item-list-view",
                                          { attrs: { item: item } },
                                          [
                                            _c(
                                              "template",
                                              { slot: "action-buttons" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3",
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.toggleItemInWishList(
                                                          item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "HeartIcon",
                                                        svgClasses: [
                                                          {
                                                            "text-danger fill-current": _vm.isInWishList(
                                                              item.objectID
                                                            )
                                                          },
                                                          "h-4 w-4"
                                                        ]
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-sm font-semibold ml-2"
                                                      },
                                                      [_vm._v("WISHLIST")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "item-view-secondary-action-btn bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer",
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.cartButtonClicked(
                                                          item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "ShoppingBagIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.isInCart(item.objectID)
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-sm font-semibold ml-2"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "VIEW IN CART"
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-sm font-semibold ml-2"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "ADD TO CART"
                                                            )
                                                          ]
                                                        )
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  })
                            ],
                            2
                          )
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("ais-pagination", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var currentRefinement = ref.currentRefinement
                          var nbPages = ref.nbPages
                          var pages = ref.pages
                          var isFirstPage = ref.isFirstPage
                          var isLastPage = ref.isLastPage
                          var refine = ref.refine
                          var createURL = ref.createURL
                          return _c(
                            "div",
                            {},
                            [
                              _c("vs-pagination", {
                                attrs: {
                                  total: nbPages,
                                  max: 7,
                                  value: currentRefinement + 1
                                },
                                on: {
                                  input: function(val) {
                                    refine(val - 1)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "flex mt-4 mx-auto h-8",
                    attrs: {
                      src: __webpack_require__(/*! @assets/images/pages/eCommerce/Algolia-logo.png */ "./resources/assets/images/pages/eCommerce/Algolia-logo.png"),
                      alt: "algolia-logo"
                    }
                  })
                ],
                1
              )
            ],
            1
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

/***/ "./resources/assets/images/pages/eCommerce/Algolia-logo.png":
/*!******************************************************************!*\
  !*** ./resources/assets/images/pages/eCommerce/Algolia-logo.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Algolia-logo.png?224640caab6194bdfc027e442bb2374c";

/***/ }),

/***/ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/apps/eCommerce/ECommerceShop.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceShop_vue_vue_type_template_id_23854758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=template&id=23854758& */ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=template&id=23854758&");
/* harmony import */ var _ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceShop_vue_vue_type_template_id_23854758___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceShop_vue_vue_type_template_id_23854758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/eCommerce/ECommerceShop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=template&id=23854758&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=template&id=23854758& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_23854758___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=template&id=23854758& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/eCommerce/ECommerceShop.vue?vue&type=template&id=23854758&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_23854758___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_23854758___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);