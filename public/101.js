(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apexChartData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexChartData.js */ "./resources/js/src/views/charts-and-maps/charts/apex-charts/apexChartData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      apexChatData: _apexChartData_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348& ***!
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
  return _c("div", { attrs: { id: "extra-component-chartist-demo" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Line Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "line",
                  height: "350",
                  options: _vm.apexChatData.lineChartSimple.chartOptions,
                  series: _vm.apexChatData.lineChartSimple.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.lineChartSimpleCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Line Area Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "area",
                  height: "350",
                  options: _vm.apexChatData.lineAreaChartSpline.chartOptions,
                  series: _vm.apexChatData.lineAreaChartSpline.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.lineAreaChartSplineCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Column Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "bar",
                  height: "350",
                  options: _vm.apexChatData.columnChart.chartOptions,
                  series: _vm.apexChatData.columnChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.columnChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Bar Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "bar",
                  height: "350",
                  options: _vm.apexChatData.barChart.chartOptions,
                  series: _vm.apexChatData.barChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.barChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Mixed Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "line",
                  height: "350",
                  options: _vm.apexChatData.mixedChart.chartOptions,
                  series: _vm.apexChatData.mixedChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.mixedChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Candlestick Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "candlestick",
                  height: "350",
                  options: _vm.apexChatData.candlestickChart.chartOptions,
                  series: _vm.apexChatData.candlestickChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.candlestickChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "3D Bubble Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "bubble",
                  height: "350",
                  options: _vm.apexChatData.bubbleChart.chartOptions,
                  series: _vm.apexChatData.bubbleChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.bubbleChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Scatter Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "scatter",
                  height: "350",
                  options: _vm.apexChatData.scatterChart.chartOptions,
                  series: _vm.apexChatData.scatterChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.scatterChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Heat Map Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "heatmap",
                  height: "350",
                  options: _vm.apexChatData.heatMapChart.chartOptions,
                  series: _vm.apexChatData.heatMapChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.heatMapChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Pie Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "pie",
                  height: "350",
                  options: _vm.apexChatData.pieChart.chartOptions,
                  series: _vm.apexChatData.pieChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.pieChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Donut Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "donut",
                  height: "350",
                  options: _vm.apexChatData.donutChart.chartOptions,
                  series: _vm.apexChatData.donutChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.donutChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Radial Bar Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "radialBar",
                  height: "350",
                  options: _vm.apexChatData.radialBarChart.chartOptions,
                  series: _vm.apexChatData.radialBarChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.radialBarChartCode) +
                    "\n                    "
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Radar Chart", "code-toggler": "" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "radar",
                  height: "350",
                  options: _vm.apexChatData.radarChart.chartOptions,
                  series: _vm.apexChatData.radarChart.series
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "codeContainer" }, [
                _vm._v(
                  "\n" +
                    _vm._s(_vm.apexChatData.radarChartCode) +
                    "\n                    "
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("A Vue.js component for ApexCharts. Read full documnetation "),
      _c(
        "a",
        {
          attrs: {
            href: "https://apexcharts.com/docs/installation/",
            target: "_blank",
            rel: "nofollow"
          }
        },
        [_vm._v("here")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApexCharts.vue?vue&type=template&id=7af1a348& */ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&");
/* harmony import */ var _ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApexCharts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApexCharts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApexCharts.vue?vue&type=template&id=7af1a348& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/apex-charts/ApexCharts.vue?vue&type=template&id=7af1a348&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexCharts_vue_vue_type_template_id_7af1a348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/apex-charts/apexChartData.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/apex-charts/apexChartData.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
    File Name: apexChartData.vue
    Description: Data shown by charts
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }

  return series;
}

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    i++;
  }

  return series;
}

var themeColors = ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'];
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chartOptions: {
      chart: {
        height: 350,
        zoom: {
          enabled: false
        }
      },
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    }
  },
  lineChartSimpleCode: "<template>\n  <vue-apex-charts type=\"line\" height=\"350\" :options=\"lineChartSimple.chartOptions\" :series=\"lineChartSimple.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      lineChartSimple: {\n        series: [{\n          name: \"Desktops\",\n          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]\n        }],\n        chartOptions: {\n          chart: {\n            height: 350,\n            zoom: {\n              enabled: false\n            }\n          },\n          colors: themeColors,\n          dataLabels: {\n            enabled: false\n          },\n          stroke: {\n            curve: 'straight'\n          },\n          title: {\n            text: 'Product Trends by Month',\n            align: 'left'\n          },\n          grid: {\n            row: {\n              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns\n              opacity: 0.5\n            },\n          },\n          xaxis: {\n            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],\n          }\n        }\n      }\n    }\n  }\n</script>",
  lineAreaChartSpline: {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chartOptions: {
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      colors: themeColors,
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00']
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    }
  },
  lineAreaChartSplineCode: "<template>\n  <vue-apex-charts type=\"area\" height=\"350\" :options=\"lineAreaChartSpline.chartOptions\" :series=\"lineAreaChartSpline.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      lineAreaChartSpline: {\n        series: [{\n            name: 'series1',\n            data: [31, 40, 28, 51, 42, 109, 100]\n          }, {\n            name: 'series2',\n            data: [11, 32, 45, 32, 34, 52, 41]\n        }],\n        chartOptions: {\n          dataLabels: {\n            enabled: false\n          },\n          stroke: {\n            curve: 'smooth'\n          },\n          colors: themeColors,\n          xaxis: {\n            type: 'datetime',\n            categories: [\"2018-09-19T00:00:00\", \"2018-09-19T01:30:00\", \"2018-09-19T02:30:00\",\n              \"2018-09-19T03:30:00\", \"2018-09-19T04:30:00\", \"2018-09-19T05:30:00\",\n              \"2018-09-19T06:30:00\"\n            ],\n          },\n          tooltip: {\n            x: {\n              format: 'dd/MM/yy HH:mm'\n            },\n\n          }\n        }\n      }\n    }\n  }\n</script>",
  columnChart: {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chartOptions: {
      colors: themeColors,
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '55%'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return "$ ".concat(val, " thousands");
          }
        }
      }
    }
  },
  columnChartCode: "<template>\n  <vue-apex-charts type=\"bar\" height=\"350\" :options=\"columnChart.chartOptions\" :series=\"columnChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      columnChart: {\n        series: [{\n            name: 'Net Profit',\n            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]\n          }, {\n            name: 'Revenue',\n            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]\n          }, {\n            name: 'Free Cash Flow',\n            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]\n        }],\n        chartOptions: {\n          colors: themeColors,\n          plotOptions: {\n            bar: {\n              horizontal: false,\n              endingShape: 'rounded',\n              columnWidth: '55%',\n            },\n          },\n          dataLabels: {\n            enabled: false\n          },\n          stroke: {\n            show: true,\n            width: 2,\n            colors: ['transparent']\n          },\n\n          xaxis: {\n            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],\n          },\n          yaxis: {\n            title: {\n              text: '$ (thousands)'\n            }\n          },\n          fill: {\n            opacity: 1\n\n          },\n          tooltip: {\n            y: {\n              formatter: function(val) {\n                return \"$ \" + val + \" thousands\"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n</script>",
  barChart: {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chartOptions: {
      colors: themeColors,
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany']
      }
    }
  },
  barChartCode: "<template>\n  <vue-apex-charts type=\"bar\" height=\"350\" :options=\"barChart.chartOptions\" :series=\"barChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      barChart: {\n        series: [{\n            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]\n        }],\n        chartOptions: {\n          colors: themeColors,\n          plotOptions: {\n            bar: {\n              horizontal: true,\n            }\n          },\n          dataLabels: {\n            enabled: false\n          },\n          xaxis: {\n            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',\n              'United States', 'China', 'Germany'\n            ],\n          }\n        }\n      }\n    }\n  }\n</script>",
  mixedChart: {
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chartOptions: {
      colors: themeColors,
      chart: {
        stacked: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: 'Points'
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function formatter(y) {
            if (typeof y !== 'undefined') {
              return "".concat(y.toFixed(0), " points");
            }

            return y;
          }
        }
      }
    }
  },
  mixedChartCode: "<template>\n  <vue-apex-charts type=\"line\" height=\"350\" :options=\"mixedChart.chartOptions\" :series=\"mixedChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      mixedChart: {\n        series: [{\n            name: 'TEAM A',\n            type: 'column',\n            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]\n          }, {\n            name: 'TEAM B',\n            type: 'area',\n            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]\n          }, {\n            name: 'TEAM C',\n            type: 'line',\n            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]\n        }],\n        chartOptions: {\n          colors: themeColors,\n          chart: {\n            stacked: false,\n          },\n          stroke: {\n            width: [0, 2, 5],\n            curve: 'smooth'\n          },\n          plotOptions: {\n            bar: {\n              columnWidth: '50%'\n            }\n          },\n\n          fill: {\n            opacity: [0.85, 0.25, 1],\n            gradient: {\n              inverseColors: false,\n              shade: 'light',\n              type: \"vertical\",\n              opacityFrom: 0.85,\n              opacityTo: 0.55,\n              stops: [0, 100, 100, 100]\n            }\n          },\n          labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],\n          markers: {\n            size: 0\n          },\n          xaxis: {\n            type: 'datetime'\n          },\n          yaxis: {\n            title: {\n              text: 'Points',\n            },\n            min: 0\n          },\n          tooltip: {\n            shared: true,\n            intersect: false,\n            y: {\n              formatter: function(y) {\n                if (typeof y !== \"undefined\") {\n                  return y.toFixed(0) + \" points\";\n                }\n                return y;\n\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n</script>",
  candlestickChart: {
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      }, {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      }, {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      }, {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      }, {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      }, {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      }, {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      }, {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      }, {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      }, {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      }, {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      }, {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      }, {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      }, {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      }, {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      }, {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      }, {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      }, {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      }, {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      }, {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      }, {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      }, {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      }, {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      }, {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      }, {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      }, {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      }, {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      }, {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      }, {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      }, {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      }, {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      }, {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      }, {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      }, {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      }, {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      }, {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      }, {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      }, {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      }, {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      }, {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      }, {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      }, {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      }, {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      }, {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      }, {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      }, {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      }, {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      }, {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      }, {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      }, {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      }, {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      }, {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
      }, {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
      }, {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
      }, {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
      }, {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      }, {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
      }, {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      }, {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
      }, {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
      }]
    }],
    chartOptions: {
      colors: themeColors,
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    }
  },
  candlestickChartCode: "<template>\n  <vue-apex-charts type=\"candlestick\" height=\"350\" :options=\"candlestickChart.chartOptions\" :series=\"candlestickChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      candlestickChart: {\n        series: [{\n          data: [{ x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },\n            { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },\n            { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },\n            { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },\n            { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },\n            { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },\n            { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },\n            { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },\n            { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },\n            { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },\n            { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },\n            { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },\n            { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },\n            { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },\n            { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },\n            { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },\n            { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },\n            { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },\n            { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },\n            { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },\n            { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },\n            { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },\n            { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },\n            { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },\n            { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },\n            { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },\n            { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },\n            { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },\n            { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },\n            { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },\n            { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },\n            { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },\n            { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },\n            { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },\n            { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },\n            { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },\n            { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },\n            { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },\n            { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },\n            { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },\n            { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },\n            { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },\n            { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },\n            { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },\n            { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },\n            { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },\n            { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },\n            { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },\n            { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },\n            { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },\n            { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },\n            { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },\n            { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },\n            { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },\n            { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },\n            { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },\n            { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },\n            { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },\n            { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },\n            { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },\n          ]\n        }],\n        chartOptions: {\n          colors: themeColors,\n          xaxis: {\n            type: 'datetime'\n          },\n          yaxis: {\n            tooltip: {\n              enabled: true\n            }\n          }\n        }\n      }\n    }\n  }\n</script>",
  bubbleChart: {
    series: [{
      name: 'Product1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }, {
      name: 'Product2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }, {
      name: 'Product3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }, {
      name: 'Product4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }],
    chartOptions: {
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient'
      },
      xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
          rotate: 0
        }
      },
      yaxis: {
        max: 70
      },
      theme: {
        palette: 'palette2'
      }
    }
  },
  bubbleChartCode: "<template>\n  <vue-apex-charts type=\"bubble\" height=\"350\" :options=\"bubbleChart.chartOptions\" :series=\"bubbleChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      bubbleChart: {\n        series: [{\n            name: 'Product1',\n            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {\n              min: 10,\n              max: 60\n            })\n          },\n          {\n            name: 'Product2',\n            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {\n              min: 10,\n              max: 60\n            })\n          },\n          {\n            name: 'Product3',\n            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {\n              min: 10,\n              max: 60\n            })\n          },\n          {\n            name: 'Product4',\n            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {\n              min: 10,\n              max: 60\n            })\n          }\n        ],\n        chartOptions: {\n          colors: themeColors,\n          dataLabels: {\n            enabled: false\n          },\n          fill: {\n            type: 'gradient',\n          },\n          xaxis: {\n            tickAmount: 12,\n            type: 'datetime',\n\n            labels: {\n              rotate: 0,\n            }\n          },\n          yaxis: {\n            max: 70\n          },\n          theme: {\n            palette: 'palette2'\n          }\n        }\n      }\n    }\n  }\n</script>",
  scatterChart: {
    series: [{
      name: 'SAMPLE A',
      data: [[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
    }, {
      name: 'SAMPLE B',
      data: [[6.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
    }, {
      name: 'SAMPLE C',
      data: [[21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
    }],
    chartOptions: {
      colors: themeColors,
      chart: {
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 10
      },
      yaxis: {
        tickAmount: 7
      }
    }
  },
  scatterChartCode: "<template>\n  <vue-apex-charts type=\"scatter\" height=\"350\" :options=\"scatterChart.chartOptions\" :series=\"scatterChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      scatterChart: {\n        series: [{\n          name: \"SAMPLE A\",\n          data: [\n            [16.4, 5.4],\n            [21.7, 2],\n            [25.4, 3],\n            [19, 2],\n            [10.9, 1],\n            [13.6, 3.2],\n            [10.9, 7.4],\n            [10.9, 0],\n            [10.9, 8.2],\n            [16.4, 0],\n            [16.4, 1.8],\n            [13.6, 0.3],\n            [13.6, 0],\n            [29.9, 0],\n            [27.1, 2.3],\n            [16.4, 0],\n            [13.6, 3.7],\n            [10.9, 5.2],\n            [16.4, 6.5],\n            [10.9, 0],\n            [24.5, 7.1],\n            [10.9, 0],\n            [8.1, 4.7],\n            [19, 0],\n            [21.7, 1.8],\n            [27.1, 0],\n            [24.5, 0],\n            [27.1, 0],\n            [29.9, 1.5],\n            [27.1, 0.8],\n            [22.1, 2]\n          ]\n        }, {\n          name: \"SAMPLE B\",\n          data: [\n            [6.4, 13.4],\n            [1.7, 11],\n            [5.4, 8],\n            [9, 17],\n            [1.9, 4],\n            [3.6, 12.2],\n            [1.9, 14.4],\n            [1.9, 9],\n            [1.9, 13.2],\n            [1.4, 7],\n            [6.4, 8.8],\n            [3.6, 4.3],\n            [1.6, 10],\n            [9.9, 2],\n            [7.1, 15],\n            [1.4, 0],\n            [3.6, 13.7],\n            [1.9, 15.2],\n            [6.4, 16.5],\n            [0.9, 10],\n            [4.5, 17.1],\n            [10.9, 10],\n            [0.1, 14.7],\n            [9, 10],\n            [12.7, 11.8],\n            [2.1, 10],\n            [2.5, 10],\n            [27.1, 10],\n            [2.9, 11.5],\n            [7.1, 10.8],\n            [2.1, 12]\n          ]\n        }, {\n          name: \"SAMPLE C\",\n          data: [\n            [21.7, 3],\n            [23.6, 3.5],\n            [24.6, 3],\n            [29.9, 3],\n            [21.7, 20],\n            [23, 2],\n            [10.9, 3],\n            [28, 4],\n            [27.1, 0.3],\n            [16.4, 4],\n            [13.6, 0],\n            [19, 5],\n            [22.4, 3],\n            [24.5, 3],\n            [32.6, 3],\n            [27.1, 4],\n            [29.6, 6],\n            [31.6, 8],\n            [21.6, 5],\n            [20.9, 4],\n            [22.4, 0],\n            [32.6, 10.3],\n            [29.7, 20.8],\n            [24.5, 0.8],\n            [21.4, 0],\n            [21.7, 6.9],\n            [28.6, 7.7],\n            [15.4, 0],\n            [18.1, 0],\n            [33.4, 0],\n            [16.4, 0]\n          ]\n        }],\n        chartOptions: {\n          colors: themeColors,\n          chart: {\n            zoom: {\n              enabled: true,\n              type: 'xy'\n            }\n          },\n          xaxis: {\n            tickAmount: 10,\n          },\n          yaxis: {\n            tickAmount: 7\n          }\n        }\n      }\n    }\n  }\n</script>",
  heatMapChart: {
    series: [{
      name: 'Metric1',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric2',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric3',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric4',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric5',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric6',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric7',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric8',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }, {
      name: 'Metric9',
      data: generateDataHeatMap(18, {
        min: 0,
        max: 90
      })
    }],
    chartOptions: {
      dataLabels: {
        enabled: false
      },
      colors: ['#7367F0']
    }
  },
  heatMapChartCode: "<template>\n  <vue-apex-charts type=\"heatmap\" height=\"350\" :options=\"heatMapChart.chartOptions\" :series=\"heatMapChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      heatMapChart: {\n        series: [{\n            name: 'Metric1',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric2',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric3',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric4',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric5',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric6',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric7',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric8',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          },\n          {\n            name: 'Metric9',\n            data: generateDataHeatMap(18, {\n              min: 0,\n              max: 90\n            })\n          }\n          ],\n        chartOptions: {\n          colors: themeColors,\n          dataLabels: {\n            enabled: false\n          },\n          colors: [\"#008FFB\"],\n        }\n      }\n    }\n  }\n</script>",
  pieChart: {
    series: [44, 55, 13, 43],
    chartOptions: {
      labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      colors: themeColors,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  },
  pieChartCode: "<template>\n  <vue-apex-charts type=\"pie\" height=\"350\" :options=\"pieChart.chartOptions\" :series=\"pieChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      pieChart: {\n        series: [44, 55, 13, 43],\n        chartOptions: {\n          labels: ['Team A', 'Team B', 'Team C', 'Team D'],\n          colors: themeColors,\n          responsive: [{\n            breakpoint: 480,\n            options: {\n              chart: {\n                width: 200\n              },\n              legend: {\n                position: 'bottom'\n              }\n            }\n          }]\n        }\n      }\n    }\n  }\n</script>",
  donutChart: {
    series: [44, 55, 41, 17],
    chartOptions: {
      colors: themeColors,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  },
  donutChartCode: "<template>\n  <vue-apex-charts type=\"donut\" height=\"350\" :options=\"donutChart.chartOptions\" :series=\"donutChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      donutChart: {\n        series: [44, 55, 41, 17],\n        chartOptions: {\n          colors: themeColors,\n          responsive: [{\n            breakpoint: 480,\n            options: {\n              chart: {\n                width: 200\n              },\n              legend: {\n                position: 'bottom'\n              }\n            }\n          }]\n        }\n      }\n    }\n  }\n</script>",
  radialBarChart: {
    series: [44, 55, 67, 83],
    chartOptions: {
      colors: themeColors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function formatter() {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
    }
  },
  radialBarChartCode: "<template>\n  <vue-apex-charts type=\"radialBar\" height=\"350\" :options=\"radialBarChart.chartOptions\" :series=\"radialBarChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      radialBarChart: {\n        series: [44, 55, 67, 83],\n        chartOptions: {\n          colors: themeColors,\n          plotOptions: {\n            radialBar: {\n              dataLabels: {\n                name: {\n                  fontSize: '22px',\n                },\n                value: {\n                  fontSize: '16px',\n                },\n                total: {\n                  show: true,\n                  label: 'Total',\n                  formatter: function(w) {\n                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function\n                    return 249\n                  }\n                }\n              }\n            }\n          },\n          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],\n        }\n      }\n    }\n  }\n</script>",
  radarChart: {
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20]
    }],
    chartOptions: {
      colors: themeColors,
      labels: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  },
  radarChartCode: "<template>\n  <vue-apex-charts type=\"radar\" height=\"350\" :options=\"radarChart.chartOptions\" :series=\"radarChart.series\"></vue-apex-charts>\n</template>\n\n<script>\n  data() {\n    return {\n      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']\n      radarChart: {\n        series: [{\n          name: 'Series 1',\n          data: [80, 50, 30, 40, 100, 20],\n        }],\n        chartOptions: {\n          colors: themeColors,\n          labels: ['January', 'February', 'March', 'April', 'May', 'June'],\n        }\n      }\n    }\n  }\n</script>"
});

/***/ })

}]);