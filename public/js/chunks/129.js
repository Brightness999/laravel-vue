(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // Area charts
      subscribersGained: {},
      revenueGenerated: {},
      quarterlySales: {},
      ordersRecevied: {},
      // Line Charts
      siteTraffic: {},
      activeUsers: {},
      newsletter: {}
    };
  },
  created: function created() {
    var _this = this;

    // Subscribers gained
    this.$http.get('/api/card/card-statistics/subscribers').then(function (response) {
      _this.subscribersGained = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Revenue Generated

    this.$http.get('/api/card/card-statistics/revenue').then(function (response) {
      _this.revenueGenerated = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Sales

    this.$http.get('/api/card/card-statistics/sales').then(function (response) {
      _this.quarterlySales = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Orders

    this.$http.get('/api/card/card-statistics/orders').then(function (response) {
      _this.ordersRecevied = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Site Traffic gained

    this.$http.get('/api/card/card-statistics/site-traffic').then(function (response) {
      _this.siteTraffic = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Active Users

    this.$http.get('/api/card/card-statistics/active-users').then(function (response) {
      _this.activeUsers = response.data;
    }).catch(function (error) {
      console.log(error);
    }); // Site Traffic gained

    this.$http.get('/api/card/card-statistics/newsletter').then(function (response) {
      _this.newsletter = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/6" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "EyeIcon",
              statistic: "36.9k",
              statisticTitle: "Views"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/6" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "MessageSquareIcon",
              statisticTitle: "Comments",
              statistic: "12k",
              color: "success"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/6" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "ShoppingBagIcon",
              statistic: "978",
              statisticTitle: "Orders",
              color: "warning"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/6" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "HeartIcon",
              statistic: "26.8k",
              statisticTitle: "Favorited",
              color: "danger"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/6" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "SmileIcon",
              statistic: "689",
              statisticTitle: "Reviews",
              color: "success"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/6" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "TruckIcon",
              statistic: "2",
              statisticTitle: "Returns",
              color: "warning"
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
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "CpuIcon",
              "icon-right": "",
              statistic: "86%",
              statisticTitle: "CPU Usage"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "ServerIcon",
              "icon-right": "",
              statistic: "1.2gb",
              statisticTitle: "Memory Usage",
              color: "success"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "ActivityIcon",
              "icon-right": "",
              statistic: "0.1%",
              statisticTitle: "Downtime Ratio",
              color: "danger"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "AlertOctagonIcon",
              "icon-right": "",
              statistic: "13",
              statisticTitle: "Issues Found",
              color: "warning"
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
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _vm.subscribersGained.analyticsData
            ? _c("statistics-card-line", {
                staticClass: "mb-base",
                attrs: {
                  icon: "UsersIcon",
                  statistic: _vm._f("k_formatter")(
                    _vm.subscribersGained.analyticsData.subscribers
                  ),
                  statisticTitle: "Subscribers Gained",
                  chartData: _vm.subscribersGained.series,
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _vm.revenueGenerated.analyticsData
            ? _c("statistics-card-line", {
                staticClass: "mb-base",
                attrs: {
                  icon: "DollarSignIcon",
                  statistic: _vm._f("k_formatter")(
                    _vm.revenueGenerated.analyticsData.revenue
                  ),
                  statisticTitle: "Revenue Generated",
                  chartData: _vm.revenueGenerated.series,
                  color: "success",
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _vm.quarterlySales.analyticsData
            ? _c("statistics-card-line", {
                staticClass: "mb-base",
                attrs: {
                  icon: "ShoppingCartIcon",
                  statistic: _vm.quarterlySales.analyticsData.sales,
                  statisticTitle: "Quarterly Sales",
                  chartData: _vm.quarterlySales.series,
                  color: "danger",
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _vm.ordersRecevied.analyticsData
            ? _c("statistics-card-line", {
                staticClass: "mb-base",
                attrs: {
                  icon: "ShoppingBagIcon",
                  statistic: _vm._f("k_formatter")(
                    _vm.ordersRecevied.analyticsData.orders
                  ),
                  statisticTitle: "Orders Received",
                  chartData: _vm.ordersRecevied.series,
                  color: "warning",
                  type: "area"
                }
              })
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c("statistics-card-line", {
            staticClass: "md:mb-0 mb-base",
            attrs: {
              icon: "MonitorIcon",
              "icon-right": "",
              statistic: "78.9k",
              statisticTitle: "Site Traffic",
              chartData: _vm.siteTraffic.series
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c("statistics-card-line", {
            staticClass: "md:mb-0 mb-base",
            attrs: {
              icon: "UserCheckIcon",
              "icon-right": "",
              statistic: "659.8k",
              statisticTitle: "Active Users",
              chartData: _vm.activeUsers.series,
              color: "success"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "MailIcon",
              "icon-right": "",
              statistic: "28.7k",
              statisticTitle: "Newsletter",
              chartData: _vm.newsletter.series,
              color: "warning"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardStatistics.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardStatistics.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardStatistics.vue?vue&type=template&id=47852939& */ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&");
/* harmony import */ var _CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardStatistics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ui-elements/card/CardStatistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardStatistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardStatistics.vue?vue&type=template&id=47852939& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);