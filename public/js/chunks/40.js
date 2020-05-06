(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipDefault_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipDefault.vue */ "./resources/js/src/views/components/vuesax/chip/ChipDefault.vue");
/* harmony import */ var _ChipColor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChipColor.vue */ "./resources/js/src/views/components/vuesax/chip/ChipColor.vue");
/* harmony import */ var _ChipTransparent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChipTransparent.vue */ "./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue");
/* harmony import */ var _ChipIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChipIcon.vue */ "./resources/js/src/views/components/vuesax/chip/ChipIcon.vue");
/* harmony import */ var _ChipClosable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChipClosable.vue */ "./resources/js/src/views/components/vuesax/chip/ChipClosable.vue");
/* harmony import */ var _ChipAddRemove_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChipAddRemove.vue */ "./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue");
/* harmony import */ var _ChipCustomizeCloseClearChipIcon_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChipCustomizeCloseClearChipIcon.vue */ "./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChipDefault: _ChipDefault_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChipColor: _ChipColor_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChipTransparent: _ChipTransparent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChipIcon: _ChipIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChipClosable: _ChipClosable_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChipAddRemove: _ChipAddRemove_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ChipCustomizeCloseClearChipIcon: _ChipCustomizeCloseClearChipIcon_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
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
      chips: ['Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Vuexy']
    };
  },
  methods: {
    remove: function remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=script&lang=js& ***!
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
//
//
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
      chips: ['Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Vuexy']
    };
  },
  methods: {
    reset: function reset() {
      this.chips = ['Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Vuexy'];
    },
    remove: function remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isDeleted: false,
      isDeleted2: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      chips: ['Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Vuexy']
    };
  },
  methods: {
    remove: function remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isDeleted: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=template&id=54c06ce3&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=template&id=54c06ce3& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "chip-demo" } },
    [
      _c("chip-default"),
      _vm._v(" "),
      _c("chip-color"),
      _vm._v(" "),
      _c("chip-transparent"),
      _vm._v(" "),
      _c("chip-icon"),
      _vm._v(" "),
      _c("chip-closable"),
      _vm._v(" "),
      _c("chip-add-remove"),
      _vm._v(" "),
      _c("chip-customize-close-clear-chip-icon")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=template&id=39666292&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=template&id=39666292& ***!
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
    { attrs: { title: "Add and Remove Items", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("You can add and remove chips with the "),
        _c("code", [_vm._v("vs-chips")]),
        _vm._v(" component. For the main parameter, pass the "),
        _c("code", [_vm._v("items")]),
        _vm._v(" property, which is an array representing each chip")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("div", { staticClass: "op-block mb-5" }, [
            _vm._v(" " + _vm._s(_vm.chips) + " ")
          ]),
          _vm._v(" "),
          _c(
            "vs-chips",
            {
              attrs: { color: "rgb(145, 32, 159)", placeholder: "New Element" },
              model: {
                value: _vm.chips,
                callback: function($$v) {
                  _vm.chips = $$v
                },
                expression: "chips"
              }
            },
            _vm._l(_vm.chips, function(chip, index) {
              return _c(
                "vs-chip",
                {
                  key: chip + "-" + index,
                  attrs: { closable: "" },
                  on: {
                    click: function($event) {
                      return _vm.remove(chip)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(chip) +
                      "\n                "
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="op-block mb-4"> ' +
            _vm._s("{{ chips }}") +
            ' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable>\n      ' +
            _vm._s("{{ chip }}") +
            "}\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n</script>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=template&id=7951e56a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=template&id=7951e56a& ***!
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
  return _c(
    "vx-card",
    { attrs: { title: "Closable", "code-toggler": "" } },
    [
      _c("p", [_vm._v("For making a chip closable")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _vm.chips.length == 0
            ? _c(
                "vs-button",
                { attrs: { type: "filled" }, on: { click: _vm.reset } },
                [_vm._v("Reset Chips")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.chips, function(chip, index) {
            return _c(
              "vs-chip",
              {
                key: index,
                attrs: { closable: "" },
                on: {
                  click: function($event) {
                    return _vm.remove(chip)
                  }
                }
              },
              [_vm._v(" " + _vm._s(chip) + " ")]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="demo-alignment">\n\n    <vs-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vs-button>\n    <vs-chip @click="remove(chip)" v-for="(chip, index) in chips" :key="index" closable> ' +
            _vm._s("{{ chip }}") +
            "} </vs-chip>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    reset () {\n      this.chips = [\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ]\n    },\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n</script>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=template&id=006cd620&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=template&id=006cd620& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("p", [_vm._v("Change the background color of the chip")]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "my-3",
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
        { staticClass: "demo-alignment" },
        [
          _c("vs-chip", { attrs: { color: "primary" } }, [
            _vm._v("\n                Basic Chip\n            ")
          ]),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "success" } },
            [
              _c("vs-avatar", { attrs: { text: "LD" } }),
              _vm._v("\n                Avatar Text\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "danger" } },
            [
              _c("vs-avatar"),
              _vm._v("\n                Avatar Icon\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "warning" } },
            [
              _c("vs-avatar", {
                attrs: { src: "https://randomuser.me/api/portraits/men/4.jpg" }
              }),
              _vm._v("\n                Avatar Image\n            ")
            ],
            1
          ),
          _vm._v(" "),
          !_vm.isDeleted
            ? _c(
                "vs-chip",
                {
                  attrs: { closable: "", color: "dark" },
                  on: {
                    click: function($event) {
                      _vm.isDeleted = true
                    }
                  }
                },
                [_vm._v("\n                Closable chip\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isDeleted2
            ? _c(
                "vs-chip",
                {
                  attrs: {
                    closable: "",
                    color: "#24c1a0",
                    "close-icon": "close"
                  },
                  on: {
                    click: function($event) {
                      _vm.isDeleted2 = true
                    }
                  }
                },
                [
                  _c("vs-avatar", {
                    attrs: {
                      src: "https://randomuser.me/api/portraits/men/16.jpg"
                    }
                  }),
                  _vm._v("\n                Closable chip\n            ")
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip color="primary">Basic Chip</vs-chip>\n\n    <vs-chip color="success">\n      <vs-avatar text="LD" />\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip color="danger">\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip color="warning">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable color="dark">\n      Closable chip\n    </vs-chip>\n\n    <vs-chip @click="isDeleted2=true" v-if="!isDeleted2" closable color="#24c1a0" close-icon="close">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n      isDeleted2: false,\n    }\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    {
      attrs: {
        title: "Customize Close and Clear Chips Icons",
        "code-toggler": ""
      }
    },
    [
      _c("p", [
        _vm._v(
          "You can change the icons used for the close button and the clear button when using multiple chips with the "
        ),
        _c("code", [_vm._v("vs-chips")]),
        _vm._v(" component.")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("For the main parameter, pass the "),
        _c("code", [_vm._v("close-icon")]),
        _vm._v(
          " property, which is the close icon that appears on each chip. You can change the Clear Chips button with the "
        ),
        _c("code", [_vm._v("remove-icon")]),
        _vm._v(" property")
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
              "Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "
            ),
            _c(
              "a",
              {
                attrs: { href: "https://material.io/icons/", target: "_blank" }
              },
              [_vm._v("Material Icons page")]
            ),
            _vm._v(".")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("div", { staticClass: "op-block mb-5" }, [
            _vm._v(" " + _vm._s(_vm.chips) + " ")
          ]),
          _vm._v(" "),
          _c(
            "vs-chips",
            {
              attrs: {
                color: "rgb(145, 32, 159)",
                placeholder: "New Element",
                "icon-pack": "feather",
                "remove-icon": "icon-trash-2"
              },
              model: {
                value: _vm.chips,
                callback: function($$v) {
                  _vm.chips = $$v
                },
                expression: "chips"
              }
            },
            _vm._l(_vm.chips, function(chip, index) {
              return _c(
                "vs-chip",
                {
                  key: chip + "-" + index,
                  attrs: {
                    closable: "",
                    "icon-pack": "feather",
                    "close-icon": "icon-trash-2"
                  },
                  on: {
                    click: function($event) {
                      return _vm.remove(chip)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(chip) +
                      "\n                "
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="op-block mb-4"> ' +
            _vm._s("{{ chips }}") +
            ' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" icon-pack="feather" remove-icon="icon-trash-2">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable\n      icon-pack="feather"\n      close-icon="icon-trash-2">\n      ' +
            _vm._s("{{ chip }}") +
            "\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n</script>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=template&id=1e16538e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=template&id=1e16538e& ***!
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
    { attrs: { title: "Default", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("Helps you represent simple data with colorful options")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c("vs-chip", [_vm._v("Basic Chip")]),
          _vm._v(" "),
          _c(
            "vs-chip",
            [
              _c("vs-avatar", { attrs: { text: "LD" } }),
              _vm._v("\n                Avatar Text\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            [
              _c("vs-avatar"),
              _vm._v("\n                Avatar Icon\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            [
              _c("vs-avatar", {
                attrs: { src: "https://randomuser.me/api/portraits/men/4.jpg" }
              }),
              _vm._v("\n                Avatar Image\n            ")
            ],
            1
          ),
          _vm._v(" "),
          !_vm.isDeleted
            ? _c(
                "vs-chip",
                {
                  attrs: { closable: "" },
                  on: {
                    click: function($event) {
                      _vm.isDeleted = true
                    }
                  }
                },
                [_vm._v("\n                Closable chip\n            ")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip>Basic Chip</vs-chip>\n\n    <vs-chip>\n      <vs-avatar text="LD"/>\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable>\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n    }\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipIcon.vue?vue&type=template&id=1da9e908&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipIcon.vue?vue&type=template&id=1da9e908& ***!
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
  return _c(
    "vx-card",
    { attrs: { title: "Icon", "code-toggler": "" } },
    [
      _c("p", [_vm._v("Add a nice icon to the chip")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-chip",
            [
              _c("vs-avatar", {
                attrs: { "icon-pack": "feather", icon: "icon-user" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Icon Default")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "primary" } },
            [
              _c("vs-avatar", {
                attrs: { "icon-pack": "feather", icon: "icon-send" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Icon send")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "success" } },
            [
              _c("vs-avatar", {
                attrs: { "icon-pack": "feather", icon: "icon-mail" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Icon markunread")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "danger" } },
            [
              _c("vs-avatar", {
                attrs: { "icon-pack": "feather", icon: "icon-slash" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Icon block")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "warning" } },
            [
              _c("vs-avatar", {
                attrs: { "icon-pack": "feather", icon: "icon-battery" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Icon battery_alert")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { color: "dark" } },
            [
              _c("vs-avatar", {
                attrs: { "icon-pack": "feather", icon: "icon-edit" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Icon edit")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<div class="demo-alignment">\n\n  <vs-chip>\n    <vs-avatar icon-pack="feather" icon="icon-user" />\n    <span>Icon Default</span>\n  </vs-chip>\n\n  <vs-chip color="primary">\n    <vs-avatar icon-pack="feather" icon="icon-send" />\n    <span>Icon send</span>\n  </vs-chip>\n\n  <vs-chip color="success">\n    <vs-avatar icon-pack="feather" icon="icon-mail" />\n    <span>Icon markunread</span>\n  </vs-chip>\n\n  <vs-chip color="danger">\n    <vs-avatar icon-pack="feather" icon="icon-slash" />\n    <span>Icon block</span>\n  </vs-chip>\n\n  <vs-chip color="warning">\n    <vs-avatar icon-pack="feather" icon="icon-battery" />\n    <span>Icon battery_alert</span>\n  </vs-chip>\n\n  <vs-chip color="dark">\n    <vs-avatar icon-pack="feather" icon="icon-edit" />\n    <span>Icon edit</span>\n  </vs-chip>\n</div>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue?vue&type=template&id=3dbc479f&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue?vue&type=template&id=3dbc479f& ***!
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
    { attrs: { title: "Transparent", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("You can create transparent chip using "),
        _c("code", [_vm._v("transparent")]),
        _vm._v(" prop.")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c("vs-chip", { attrs: { transparent: "", color: "primary" } }, [
            _vm._v("\n        Basic Chip\n      ")
          ]),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { transparent: "", color: "success" } },
            [
              _c("vs-avatar", { attrs: { text: "LD" } }),
              _vm._v("\n        Avatar Text\n      ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { transparent: "", color: "danger" } },
            [_c("vs-avatar"), _vm._v("\n        Avatar Icon\n      ")],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { transparent: "", color: "warning" } },
            [
              _c("vs-avatar", {
                attrs: { src: "https://randomuser.me/api/portraits/men/4.jpg" }
              }),
              _vm._v("\n        Avatar Image\n      ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            { attrs: { transparent: "", closable: "", color: "dark" } },
            [_vm._v("\n        Closable chip\n      ")]
          ),
          _vm._v(" "),
          _c(
            "vs-chip",
            {
              attrs: {
                transparent: "",
                closable: "",
                color: "#24c1a0",
                "close-icon": "close"
              }
            },
            [
              _c("vs-avatar", {
                attrs: { src: "https://randomuser.me/api/portraits/men/16.jpg" }
              }),
              _vm._v("\n        Closable chip\n      ")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <div class="demo-alignment">\n    <vs-chip transparent color="primary">\n      Basic Chip\n    </vs-chip>\n    <vs-chip transparent color="success">\n      <vs-avatar text="LD"/>\n      Avatar Text\n    </vs-chip>\n    <vs-chip transparent color="danger">\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n    <vs-chip transparent color="warning">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>\n      Avatar Image\n    </vs-chip >\n    <vs-chip transparent closable color="dark">\n      Closable chip\n    </vs-chip>\n    <vs-chip transparent closable color="#24c1a0" close-icon="close">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg"/>\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/Chip.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/Chip.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chip_vue_vue_type_template_id_54c06ce3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chip.vue?vue&type=template&id=54c06ce3& */ "./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=template&id=54c06ce3&");
/* harmony import */ var _Chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chip.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chip_vue_vue_type_template_id_54c06ce3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chip_vue_vue_type_template_id_54c06ce3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/Chip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=template&id=54c06ce3&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=template&id=54c06ce3& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_template_id_54c06ce3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chip.vue?vue&type=template&id=54c06ce3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/Chip.vue?vue&type=template&id=54c06ce3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_template_id_54c06ce3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chip_vue_vue_type_template_id_54c06ce3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipAddRemove_vue_vue_type_template_id_39666292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipAddRemove.vue?vue&type=template&id=39666292& */ "./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=template&id=39666292&");
/* harmony import */ var _ChipAddRemove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChipAddRemove.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChipAddRemove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChipAddRemove_vue_vue_type_template_id_39666292___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipAddRemove_vue_vue_type_template_id_39666292___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipAddRemove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipAddRemove.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipAddRemove_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=template&id=39666292&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=template&id=39666292& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipAddRemove_vue_vue_type_template_id_39666292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipAddRemove.vue?vue&type=template&id=39666292& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipAddRemove.vue?vue&type=template&id=39666292&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipAddRemove_vue_vue_type_template_id_39666292___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipAddRemove_vue_vue_type_template_id_39666292___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipClosable.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipClosable.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipClosable_vue_vue_type_template_id_7951e56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipClosable.vue?vue&type=template&id=7951e56a& */ "./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=template&id=7951e56a&");
/* harmony import */ var _ChipClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChipClosable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChipClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChipClosable_vue_vue_type_template_id_7951e56a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipClosable_vue_vue_type_template_id_7951e56a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipClosable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipClosable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipClosable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=template&id=7951e56a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=template&id=7951e56a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipClosable_vue_vue_type_template_id_7951e56a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipClosable.vue?vue&type=template&id=7951e56a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipClosable.vue?vue&type=template&id=7951e56a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipClosable_vue_vue_type_template_id_7951e56a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipClosable_vue_vue_type_template_id_7951e56a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipColor.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipColor.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipColor_vue_vue_type_template_id_006cd620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipColor.vue?vue&type=template&id=006cd620& */ "./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=template&id=006cd620&");
/* harmony import */ var _ChipColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChipColor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChipColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChipColor_vue_vue_type_template_id_006cd620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipColor_vue_vue_type_template_id_006cd620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipColor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=template&id=006cd620&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=template&id=006cd620& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipColor_vue_vue_type_template_id_006cd620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipColor.vue?vue&type=template&id=006cd620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipColor.vue?vue&type=template&id=006cd620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipColor_vue_vue_type_template_id_006cd620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipColor_vue_vue_type_template_id_006cd620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipCustomizeCloseClearChipIcon_vue_vue_type_template_id_0edefcac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac& */ "./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac&");
/* harmony import */ var _ChipCustomizeCloseClearChipIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChipCustomizeCloseClearChipIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChipCustomizeCloseClearChipIcon_vue_vue_type_template_id_0edefcac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipCustomizeCloseClearChipIcon_vue_vue_type_template_id_0edefcac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipCustomizeCloseClearChipIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipCustomizeCloseClearChipIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipCustomizeCloseClearChipIcon_vue_vue_type_template_id_0edefcac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipCustomizeCloseClearChipIcon.vue?vue&type=template&id=0edefcac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipCustomizeCloseClearChipIcon_vue_vue_type_template_id_0edefcac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipCustomizeCloseClearChipIcon_vue_vue_type_template_id_0edefcac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipDefault.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipDefault.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipDefault_vue_vue_type_template_id_1e16538e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipDefault.vue?vue&type=template&id=1e16538e& */ "./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=template&id=1e16538e&");
/* harmony import */ var _ChipDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChipDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChipDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChipDefault_vue_vue_type_template_id_1e16538e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipDefault_vue_vue_type_template_id_1e16538e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=template&id=1e16538e&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=template&id=1e16538e& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipDefault_vue_vue_type_template_id_1e16538e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipDefault.vue?vue&type=template&id=1e16538e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipDefault.vue?vue&type=template&id=1e16538e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipDefault_vue_vue_type_template_id_1e16538e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipDefault_vue_vue_type_template_id_1e16538e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipIcon.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipIcon.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipIcon_vue_vue_type_template_id_1da9e908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipIcon.vue?vue&type=template&id=1da9e908& */ "./resources/js/src/views/components/vuesax/chip/ChipIcon.vue?vue&type=template&id=1da9e908&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ChipIcon_vue_vue_type_template_id_1da9e908___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipIcon_vue_vue_type_template_id_1da9e908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipIcon.vue?vue&type=template&id=1da9e908&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipIcon.vue?vue&type=template&id=1da9e908& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipIcon_vue_vue_type_template_id_1da9e908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipIcon.vue?vue&type=template&id=1da9e908& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipIcon.vue?vue&type=template&id=1da9e908&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipIcon_vue_vue_type_template_id_1da9e908___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipIcon_vue_vue_type_template_id_1da9e908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChipTransparent_vue_vue_type_template_id_3dbc479f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChipTransparent.vue?vue&type=template&id=3dbc479f& */ "./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue?vue&type=template&id=3dbc479f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ChipTransparent_vue_vue_type_template_id_3dbc479f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChipTransparent_vue_vue_type_template_id_3dbc479f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/chip/ChipTransparent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue?vue&type=template&id=3dbc479f&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue?vue&type=template&id=3dbc479f& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipTransparent_vue_vue_type_template_id_3dbc479f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChipTransparent.vue?vue&type=template&id=3dbc479f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/chip/ChipTransparent.vue?vue&type=template&id=3dbc479f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipTransparent_vue_vue_type_template_id_3dbc479f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChipTransparent_vue_vue_type_template_id_3dbc479f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);