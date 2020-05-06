(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingDefault_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingDefault.vue */ "./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue");
/* harmony import */ var _LoadingType_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingType.vue */ "./resources/js/src/views/components/vuesax/loading/LoadingType.vue");
/* harmony import */ var _LoadingColor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingColor.vue */ "./resources/js/src/views/components/vuesax/loading/LoadingColor.vue");
/* harmony import */ var _LoadingBackground_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingBackground.vue */ "./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue");
/* harmony import */ var _LoadingContained_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingContained.vue */ "./resources/js/src/views/components/vuesax/loading/LoadingContained.vue");
//
//
//
//
//
//
//
//
//
//
//
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
    LoadingDefault: _LoadingDefault_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    LoadingType: _LoadingType_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LoadingColor: _LoadingColor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LoadingBackground: _LoadingBackground_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LoadingContained: _LoadingContained_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      backgroundLoading: '#22c16b'
    };
  },
  methods: {
    openLoadingBackground: function openLoadingBackground() {
      var _this = this;

      this.$vs.loading({
        background: this.backgroundLoading,
        color: 'rgb(255, 255, 255)'
      });
      setTimeout(function () {
        _this.$vs.loading.close();
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      colorLoading: '#ff8000'
    };
  },
  methods: {
    openLoadingColor: function openLoadingColor() {
      var _this = this;

      this.$vs.loading({
        color: this.colorLoading
      });
      setTimeout(function () {
        _this.$vs.loading.close();
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      backgroundLoading: 'primary',
      colorLoading: '#fff'
    };
  },
  methods: {
    openLoadingContained: function openLoadingContained() {
      var _this = this;

      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-with-loading',
        scale: 0.45
      });
      setTimeout(function () {
        _this.$vs.loading.close('#button-with-loading > .con-vs-loading');
      }, 3000);
    },
    openLoadingInDiv: function openLoadingInDiv() {
      var _this2 = this;

      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      });
      setTimeout(function () {
        _this2.$vs.loading.close('#div-with-loading > .con-vs-loading');
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    openLoading: function openLoading() {
      var _this = this;

      this.$vs.loading();
      setTimeout(function () {
        _this.$vs.loading.close();
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      types: ['default', 'point', 'radius', 'corners', 'border', 'sound', 'material'],
      activeLoading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.types.forEach(function (type) {
      _this.$vs.loading({
        container: "#loading-".concat(type),
        type: type,
        text: type
      });
    });
  },
  methods: {
    openLoading: function openLoading(type) {
      var _this2 = this;

      this.activeLoading = true;
      this.$vs.loading({
        type: type
      });
      setTimeout(function () {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: loading.scss\n    Description: Loading page styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n#loading-demo .fill-row-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n#loading-demo .fill-row-loading .loading-example {\n  width: 120px;\n  height: 120px;\n  transition: all 0.3s ease;\n}\n[dir] #loading-demo .fill-row-loading .loading-example {\n  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 8px;\n  cursor: pointer;\n}\n[dir=ltr] #loading-demo .fill-row-loading .loading-example {\n  float: left;\n}\n[dir=rtl] #loading-demo .fill-row-loading .loading-example {\n  float: right;\n}\n[dir] .theme-dark #loading-demo .fill-row-loading .loading-example {\n  box-shadow: 0px 5px 20px 0px #0C112E;\n}\n#loading-demo .fill-row-loading .loading-example .con-vs-loading {\n  z-index: 10;\n}\n[dir] #loading-demo .fill-row-loading .loading-example:hover {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);\n  transform: translate(0, 4px);\n}\n#loading-demo .fill-row-loading .loading-example h4 {\n  z-index: 40000;\n  position: relative;\n}\n[dir] #loading-demo .fill-row-loading .loading-example h4 {\n  text-align: center;\n  padding: 10px;\n  margin-bottom: 0;\n}\n#loading-demo .fill-row-loading .loading-example.activeLoading {\n  opacity: 0 !important;\n}\n[dir] #loading-demo .fill-row-loading .loading-example.activeLoading {\n  transform: scale(0.5);\n}\n#loading-demo .contained-example-container {\n  flex-basis: 100%;\n  justify-content: flex-start;\n}\n#loading-demo .contained-example-container > div {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir] #loading-demo .contained-example-container > div {\n  padding: 20px;\n  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n[dir] .theme-dark #loading-demo .contained-example-container > div {\n  box-shadow: 0px 5px 20px 0px #0C112E;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=template&id=e8294c46&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=template&id=e8294c46& ***!
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
    "div",
    { attrs: { id: "loading-demo" } },
    [
      _c("loading-default"),
      _vm._v(" "),
      _c("loading-type"),
      _vm._v(" "),
      _c("loading-color"),
      _vm._v(" "),
      _c("loading-background"),
      _vm._v(" "),
      _c("loading-contained")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=template&id=3e5fa1eb&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=template&id=3e5fa1eb& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Background", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "If you need to change the background of the loading, you can use the property "
        ),
        _c("code", [_vm._v("background")])
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5",
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
        "div",
        { staticClass: "demo-alignment mt-3" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.backgroundLoading,
                expression: "backgroundLoading"
              }
            ],
            attrs: { type: "color", name: "", value: "" },
            domProps: { value: _vm.backgroundLoading },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.backgroundLoading = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "gradient", color: "success" },
              on: { click: _vm.openLoadingBackground }
            },
            [_vm._v("Success")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template lang="html">\n  <div class="demo-alignment">\n\n    <input type="color" v-model="backgroundLoading" name="" value="">\n    <vs-button @click="openLoadingBackground" type="gradient" color="success">Success</vs-button>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      backgroundLoading: \'#22c16b\',\n    }\n  },\n  methods: {\n    openLoadingBackground() {\n      this.$vs.loading({ background: this.backgroundLoading, color: \'rgb(255, 255, 255)\' })\n      setTimeout(() => {\n        this.$vs.loading.close()\n      }, 3000);\n    },\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=template&id=152db436&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=template&id=152db436& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        _vm._v("You can change the color of the loading with the property "),
        _c("code", [_vm._v("color")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment mt-3" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.colorLoading,
                expression: "colorLoading"
              }
            ],
            attrs: { type: "color", name: "", value: "" },
            domProps: { value: _vm.colorLoading },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.colorLoading = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "filled", color: _vm.colorLoading },
              on: { click: _vm.openLoadingColor }
            },
            [_vm._v("Loading")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template lang="html">\n  <div class="demo-alignment">\n\n    <input type="color" v-model="colorLoading" name="" value="">\n    <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Loading</vs-button>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      colorLoading: \'#ff8000\',\n    }\n  },\n  methods: {\n    openLoadingColor() {\n      this.$vs.loading({ color: this.colorLoading })\n      setTimeout(() => {\n        this.$vs.loading.close()\n      }, 2000);\n    },\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=template&id=316f1874&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=template&id=316f1874& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Contained", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("To add a loading within a container, call the "),
        _c("code", [_vm._v("$vs.loading()")]),
        _vm._v(" global function passing the "),
        _c("code", [_vm._v("container")]),
        _vm._v(" and the "),
        _c("code", [_vm._v("scale")]),
        _vm._v(" parameters. When you want to remove it we have "),
        _c("code", [_vm._v("$vs.loading.close()")]),
        _vm._v(", passing the same "),
        _c("code", [_vm._v("container")]),
        _vm._v(" parameter")
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5",
          attrs: { icon: "new_releases", active: "true" }
        },
        [
          _c("p", [
            _vm._v(
              "For the examples, the request or the delay is simulated with "
            ),
            _c("code", [_vm._v("setTimeout")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment mt-3" },
        [
          _c(
            "vs-button",
            {
              ref: "loadableButton",
              staticClass: "vs-con-loading__container",
              attrs: { id: "button-with-loading", type: "relief" },
              on: { click: _vm.openLoadingContained }
            },
            [_vm._v("\n        Button with Loading\n      ")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            { attrs: { type: "relief" }, on: { click: _vm.openLoadingInDiv } },
            [_vm._v("Div with Loading")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "contained-example-container" }, [
            _c(
              "div",
              {
                staticClass: "vs-con-loading__container",
                attrs: { id: "div-with-loading" }
              },
              [_vm._v("Load Me!")]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="openLoadingContained" type="relief">\n    Button with Loading\n  </vs-button>\n  <vs-button @click="openLoadingInDiv" type="relief">Div with Loading</vs-button>\n\n  <div class="contained-example-container">\n    <div id="div-with-loading" class="vs-con-loading__container">Load Me!</div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      backgroundLoading:\'primary\',\n      colorLoading:\'#fff\',\n    }\n  },\n  methods:{\n    openLoadingContained(){\n      this.$vs.loading({\n        background: this.backgroundLoading,\n        color: this.colorLoading,\n        container: "#button-with-loading",\n        scale: 0.45\n      })\n      setTimeout( ()=> {\n        this.$vs.loading.close("#button-with-loading > .con-vs-loading")\n      }, 3000);\n    },\n    openLoadingInDiv(){\n      this.$vs.loading({\n        container: \'#div-with-loading\',\n        scale: 0.6\n      })\n      setTimeout( ()=> {\n        this.$vs.loading.close(\'#div-with-loading > .con-vs-loading\')\n      }, 3000);\n    },\n  }\n}\n</script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=template&id=6aefb954&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=template&id=6aefb954& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
        _vm._v(
          "To add a loading in any part of your application we have the global function "
        ),
        _c("code", [_vm._v("$vs.loading()")]),
        _vm._v(", and then when you want to remove it we have "),
        _c("code", [_vm._v("$vs.loading.close()")])
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
              "For the examples, the request or the delay is simulated with "
            ),
            _c("code", [_vm._v("setTimeout")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c(
            "vs-button",
            {
              attrs: { type: "filled", color: "primary" },
              on: { click: _vm.openLoading }
            },
            [_vm._v("Loading Default")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="demo-alignment">\n    <vs-button @click="openLoading" type="filled" color="primary">Loading Default</vs-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods:{\n    openLoading(){\n      this.$vs.loading()\n      setTimeout( ()=> {\n        this.$vs.loading.close()\n      }, 2000);\n    },\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=template&id=db221492&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=template&id=db221492& ***!
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
    { attrs: { title: "Type", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "You can change the type of animation with the type property and the animations so far are:"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "demo-alignment" }, [
        _c(
          "div",
          { staticClass: "fill-row-loading" },
          _vm._l(_vm.types, function(type) {
            return _c("div", {
              key: type,
              staticClass: "vs-con-loading__container loading-example",
              class: { activeLoading: _vm.activeLoading },
              attrs: { id: ["loading-" + type] },
              on: {
                click: function($event) {
                  return _vm.openLoading(type)
                }
              }
            })
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template lang="html">\n  <div class="demo-alignment">\n      <div class="fill-row-loading">\n        <div :class="{\'activeLoading\':activeLoading}" @click="openLoading(type)" v-for="type in types" :id="[`loading-${type}`]" class="vs-con-loading__container loading-example">\n        </div>\n      </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    types:[\n      \'default\',\n      \'point\',\n      \'radius\',\n      \'corners\',\n      \'border\',\n      \'sound\',\n      \'material\',\n    ],\n    activeLoading:false,\n  }),\n  mounted(){\n    this.types.forEach((type)=>{\n      this.$vs.loading({\n        container: `#loading-${type}`,\n        type,\n        text:type\n      })\n    })\n  },\n  methods:{\n    openLoading(type){\n      this.activeLoading = true\n      this.$vs.loading({\n        type:type,\n      })\n      setTimeout( ()=> {\n        this.activeLoading = false\n        this.$vs.loading.close()\n      }, 3000);\n    },\n  }\n}\n</script>\n\n<style lang="scss">\n.fill-row-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  .loading-example {\n    width: 120px;\n    float: left;\n    height: 120px;\n    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);\n    border-radius: 10px;\n    margin: 8px;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    &:hover {\n      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);\n      transform: translate(0, 4px);\n    }\n    h4 {\n      z-index: 40000;\n      position: relative;\n      text-align: center;\n      padding: 10px;\n    }\n    &.activeLoading {\n      opacity: 0 !important;\n      transform: scale(0.5);\n    }\n  }\n}\n</style>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/Loading.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/Loading.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading_vue_vue_type_template_id_e8294c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=e8294c46& */ "./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=template&id=e8294c46&");
/* harmony import */ var _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loading_vue_vue_type_template_id_e8294c46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loading_vue_vue_type_template_id_e8294c46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/loading/Loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=template&id=e8294c46&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=template&id=e8294c46& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_e8294c46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=template&id=e8294c46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/Loading.vue?vue&type=template&id=e8294c46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_e8294c46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_e8294c46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingBackground_vue_vue_type_template_id_3e5fa1eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingBackground.vue?vue&type=template&id=3e5fa1eb& */ "./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=template&id=3e5fa1eb&");
/* harmony import */ var _LoadingBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingBackground.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadingBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingBackground_vue_vue_type_template_id_3e5fa1eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingBackground_vue_vue_type_template_id_3e5fa1eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/loading/LoadingBackground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingBackground.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=template&id=3e5fa1eb&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=template&id=3e5fa1eb& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_template_id_3e5fa1eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingBackground.vue?vue&type=template&id=3e5fa1eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingBackground.vue?vue&type=template&id=3e5fa1eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_template_id_3e5fa1eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingBackground_vue_vue_type_template_id_3e5fa1eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingColor.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingColor.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingColor_vue_vue_type_template_id_152db436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingColor.vue?vue&type=template&id=152db436& */ "./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=template&id=152db436&");
/* harmony import */ var _LoadingColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingColor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadingColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingColor_vue_vue_type_template_id_152db436___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingColor_vue_vue_type_template_id_152db436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/loading/LoadingColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingColor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=template&id=152db436&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=template&id=152db436& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingColor_vue_vue_type_template_id_152db436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingColor.vue?vue&type=template&id=152db436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingColor.vue?vue&type=template&id=152db436&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingColor_vue_vue_type_template_id_152db436___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingColor_vue_vue_type_template_id_152db436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingContained.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingContained.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingContained_vue_vue_type_template_id_316f1874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingContained.vue?vue&type=template&id=316f1874& */ "./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=template&id=316f1874&");
/* harmony import */ var _LoadingContained_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingContained.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadingContained_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingContained_vue_vue_type_template_id_316f1874___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingContained_vue_vue_type_template_id_316f1874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/loading/LoadingContained.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingContained_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingContained.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingContained_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=template&id=316f1874&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=template&id=316f1874& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingContained_vue_vue_type_template_id_316f1874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingContained.vue?vue&type=template&id=316f1874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingContained.vue?vue&type=template&id=316f1874&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingContained_vue_vue_type_template_id_316f1874___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingContained_vue_vue_type_template_id_316f1874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingDefault_vue_vue_type_template_id_6aefb954___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingDefault.vue?vue&type=template&id=6aefb954& */ "./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=template&id=6aefb954&");
/* harmony import */ var _LoadingDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadingDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingDefault_vue_vue_type_template_id_6aefb954___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingDefault_vue_vue_type_template_id_6aefb954___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/loading/LoadingDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=template&id=6aefb954&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=template&id=6aefb954& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingDefault_vue_vue_type_template_id_6aefb954___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingDefault.vue?vue&type=template&id=6aefb954& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingDefault.vue?vue&type=template&id=6aefb954&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingDefault_vue_vue_type_template_id_6aefb954___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingDefault_vue_vue_type_template_id_6aefb954___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingType.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingType.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingType_vue_vue_type_template_id_db221492___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingType.vue?vue&type=template&id=db221492& */ "./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=template&id=db221492&");
/* harmony import */ var _LoadingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingType.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingType_vue_vue_type_template_id_db221492___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingType_vue_vue_type_template_id_db221492___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/loading/LoadingType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=template&id=db221492&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=template&id=db221492& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingType_vue_vue_type_template_id_db221492___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingType.vue?vue&type=template&id=db221492& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/loading/LoadingType.vue?vue&type=template&id=db221492&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingType_vue_vue_type_template_id_db221492___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingType_vue_vue_type_template_id_db221492___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);