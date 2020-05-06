(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidationSimple_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidationSimple.vue */ "./resources/js/src/views/forms/form-validation/FormValidationSimple.vue");
/* harmony import */ var _FormValidationMultipleRules_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidationMultipleRules.vue */ "./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue");
/* harmony import */ var _FormValidationCustomErrorMessages_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormValidationCustomErrorMessages.vue */ "./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue");
/* harmony import */ var _FormValidationEvents_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormValidationEvents.vue */ "./resources/js/src/views/forms/form-validation/FormValidationEvents.vue");
/* harmony import */ var _FormValidationTypes_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormValidationTypes.vue */ "./resources/js/src/views/forms/form-validation/FormValidationTypes.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormValidationSimple: _FormValidationSimple_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormValidationMultipleRules: _FormValidationMultipleRules_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormValidationCustomErrorMessages: _FormValidationCustomErrorMessages_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FormValidationEvents: _FormValidationEvents_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormValidationTypes: _FormValidationTypes_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// For custom error message

var dict = {
  custom: {
    first_name: {
      required: 'Please enter your first name',
      alpha: 'Your first name may only contain alphabetic characters'
    },
    last_name: {
      required: 'Please enter your last name',
      alpha: 'Your last name may only contain alphabetic characters'
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_0__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      first_name: '',
      last_name: ''
    };
  },
  methods: {
    submitForm: function submitForm() {
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          alert('form submitted!');
        } else {// form have errors
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      first_name: '',
      last_name: ''
    };
  },
  methods: {
    submitForm: function submitForm() {
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          alert('form submitted!');
        } else {// form have errors
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    };
  },
  methods: {
    submitForm: function submitForm() {
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          alert('form submitted!');
        } else {// form have errors
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      value1: '',
      value2: ''
    };
  },
  methods: {
    submitForm: function submitForm() {
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          alert('form submitted!');
        } else {// form have errors
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      required: '',
      alpha: '',
      alpha_dash: '',
      alpha_num: '',
      numeric: '',
      alpha_spaces: '',
      email: '',
      url: '',
      min: '',
      max: '',
      password: '',
      confirm_password: '',
      date_format: '',
      between: '',
      credit_card: '',
      date_between: '',
      digits: '',
      select1: '',
      options1: [{
        text: 'One',
        value: 1
      }, {
        text: 'Two',
        value: 2
      }, {
        text: 'Three',
        value: 3
      }, {
        text: 'Four',
        value: 4
      }, {
        text: 'Five',
        value: 5
      }],
      max_value: '',
      min_value: '',
      regex: ''
    };
  },
  methods: {
    submitForm: function submitForm() {
      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          alert('form submitted!');
        } else {// form have errors
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=template&id=28f1a9f4&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=template&id=28f1a9f4& ***!
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
    "div",
    { attrs: { id: "extra-component-form-validation-demo" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("form-validation-simple"),
      _vm._v(" "),
      _c("form-validation-multiple-rules"),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row match-height" }, [
        _c(
          "div",
          { staticClass: "vx-col sm:w-1/2 w-full" },
          [
            _c("form-validation-custom-error-messages", {
              staticClass: "mb-base"
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col sm:w-1/2 w-full" },
          [_c("form-validation-events", { staticClass: "mb-base" })],
          1
        )
      ]),
      _vm._v(" "),
      _c("form-validation-types")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _c(
        "a",
        {
          attrs: {
            href: "https://logaretm.github.io/vee-validate/guide/",
            target: "_blank",
            rel: "nofollow"
          }
        },
        [_vm._v("vee-validate")]
      ),
      _vm._v(
        " is a Template Based Validation Framework for Vue.js. Read full documentation "
      ),
      _c(
        "a",
        {
          attrs: {
            href: "https://baianat.github.io/vee-validate/guide/",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Custom error messages", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "With vee-validate you can display your own custom error messages"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }, [
        _c(
          "form",
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "mt-5",
              attrs: { placeholder: "First Name", name: "first_name" },
              model: {
                value: _vm.first_name,
                callback: function($$v) {
                  _vm.first_name = $$v
                },
                expression: "first_name"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("first_name"),
                    expression: "errors.has('first_name')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("first_name")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "mt-5",
              attrs: { placeholder: "Last Name", name: "last_name" },
              model: {
                value: _vm.last_name,
                callback: function($$v) {
                  _vm.last_name = $$v
                },
                expression: "last_name"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("last_name"),
                    expression: "errors.has('last_name')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("last_name")))]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-5 block",
                attrs: { type: "filled" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [_vm._v("Submit")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form>\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="First Name" name="first_name" v-model="first_name" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'first_name\')">' +
            _vm._s("{{ errors.first('first_name') }}") +
            '</span>\n\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="Last Name" name="last_name" v-model="last_name" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'last_name\')">' +
            _vm._s("{{ errors.first('last_name') }}") +
            '</span>\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\n// For custom error message\nimport { Validator } from \'vee-validate\';\nconst dict = {\n  custom: {\n    first_name: {\n      required: \'Please enter your first name\',\n      alpha: "Your first name may only contain alphabetic characters"\n    },\n    last_name: {\n      required: \'Please enter your last name\',\n      alpha: "Your last name may only contain alphabetic characters"\n    },\n  }\n};\n\n// register custom messages\nValidator.localize(\'en\', dict);\n\nexport default {\n  data() {\n    return {\n      first_name: "",\n      last_name: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if (result) {\n          // if form have no errors\n          alert("form submitted!");\n        } else {\n          // form have errors\n        }\n      })\n    }\n  },\n}\n</script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=template&id=75bb3dad&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=template&id=75bb3dad& ***!
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
    {
      attrs: {
        title: "Change default event for form validation",
        "code-toggler": ""
      }
    },
    [
      _c("p", [
        _vm._v("You can change default event when validation triggers using "),
        _c("code", [_vm._v("data-vv-validate-on")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }, [
        _c(
          "form",
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "mt-5",
              attrs: {
                placeholder: "First Name",
                name: "first_name",
                "data-vv-validate-on": "blur"
              },
              model: {
                value: _vm.first_name,
                callback: function($$v) {
                  _vm.first_name = $$v
                },
                expression: "first_name"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("first_name"),
                    expression: "errors.has('first_name')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("first_name")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|alpha",
                  expression: "'required|alpha'"
                }
              ],
              staticClass: "mt-5",
              attrs: {
                placeholder: "Last Name",
                name: "last_name",
                "data-vv-validate-on": "blur"
              },
              model: {
                value: _vm.last_name,
                callback: function($$v) {
                  _vm.last_name = $$v
                },
                expression: "last_name"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("last_name"),
                    expression: "errors.has('last_name')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("last_name")))]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-5 block",
                attrs: { type: "filled" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [_vm._v("Submit")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form>\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="First Name" name="first_name" v-model="first_name" class="mt-5" data-vv-validate-on="blur" />\n    <span class="text-danger text-sm" v-show="errors.has(\'first_name\')">' +
            _vm._s("{{ errors.first('first_name') }}") +
            '</span>\n\n    <vs-input size="large" v-validate="\'required|alpha\'" placeholder="Last Name" name="last_name" v-model="last_name" class="mt-5" data-vv-validate-on="blur" />\n    <span class="text-danger text-sm" v-show="errors.has(\'last_name\')">' +
            _vm._s("{{ errors.first('last_name') }}") +
            '</span>\n\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      first_name: "",\n      last_name: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if(result) {\n          // if form have no errors\n          alert("form submitted!");\n        }else{\n          // form have errors\n        }\n      })\n    }\n  },\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Validating multiple rules", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("You can validate multiple rules using "),
        _c("code", [_vm._v("|")]),
        _vm._v(". You can find more validation rules "),
        _c(
          "a",
          {
            attrs: {
              href: "https://baianat.github.io/vee-validate/guide/rules.html",
              target: "_blank",
              rel: "nofollow"
            }
          },
          [_vm._v("here")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }, [
        _c(
          "form",
          [
            _c("div", { staticClass: "vx-row lg:w-1/2 w-full" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha",
                        expression: "'required|alpha'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: { placeholder: "Your Name", name: "name" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("name"),
                          expression: "errors.has('name')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("name")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col lg:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha_dash",
                        expression: "'required|alpha_dash'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: { placeholder: "Your Username", name: "username" },
                    model: {
                      value: _vm.username,
                      callback: function($$v) {
                        _vm.username = $$v
                      },
                      expression: "username"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("username"),
                          expression: "errors.has('username')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("username")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col lg:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: { placeholder: "Your Email", name: "email" },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("email"),
                          expression: "errors.has('email')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("email")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col lg:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:6|max:10",
                        expression: "'required|min:6|max:10'"
                      }
                    ],
                    ref: "password",
                    staticClass: "mt-5 w-full",
                    attrs: {
                      type: "password",
                      placeholder: "Your Password",
                      name: "password"
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("password"),
                          expression: "errors.has('password')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("password")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col lg:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:6|max:10|confirmed:password",
                        expression: "'required|min:6|max:10|confirmed:password'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      type: "password",
                      "data-vv-as": "password",
                      placeholder: "Confirm Password",
                      name: "confirm_password"
                    },
                    model: {
                      value: _vm.confirm_password,
                      callback: function($$v) {
                        _vm.confirm_password = $$v
                      },
                      expression: "confirm_password"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("confirm_password"),
                          expression: "errors.has('confirm_password')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("confirm_password")))]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-5 block",
                attrs: { type: "filled" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [_vm._v("Submit")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form>\n    <div class="vx-row w-1/2">\n\n      <div class="vx-col w-full">\n        <vs-input size="large" v-validate="\'required|alpha\'" placeholder="Your Name" name="name" v-model="name" class="mt-5 w-full" />\n        <span class="text-danger text-sm"  v-show="errors.has(\'name\')">' +
            _vm._s("{{ errors.first('name') }}") +
            '</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'required|alpha_dash\'" placeholder="Your Username" name="username" v-model="username" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'username\')">' +
            _vm._s("{{ errors.first('username') }}") +
            '</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'required|email\'" placeholder="Your Email" name="email" v-model="email" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'email\')">' +
            _vm._s("{{ errors.first('email') }}") +
            '</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input type="password" size="large" v-validate="\'required|min:6|max:10\'" ref="password" placeholder="Your Password" name="password" v-model="password" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'password\')">' +
            _vm._s("{{ errors.first('password') }}") +
            '</span>\n      </div>\n\n      <div class="vx-col w-1/2">\n        <vs-input type="password" size="large" v-validate="\'required|min:6|max:10|confirmed:password\'" data-vv-as="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'confirm_password\')">' +
            _vm._s("{{ errors.first('confirm_password') }}") +
            '</span>\n      </div>\n    </div>\n\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      name: "",\n      username: "",\n      email: "",\n      password: "",\n      confirm_password: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if (result) {\n          // if form have no errors\n          alert("form submitted!");\n        } else {\n          // form have errors\n        }\n      })\n    }\n  },\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=template&id=36a0cc74&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=template&id=36a0cc74& ***!
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
    { attrs: { title: "Simple form validation", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("Simple form validation before submitting form. Add "),
        _c("code", [_vm._v("v-validate")]),
        _vm._v(" directive to input.")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }, [
        _c(
          "form",
          [
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "mt-5",
              attrs: { placeholder: "Input 1", name: "input1" },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("input1"),
                    expression: "errors.has('input1')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("input1")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                }
              ],
              staticClass: "mt-5",
              attrs: { placeholder: "Input 2", name: "input2" },
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
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("input2"),
                    expression: "errors.has('input2')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("input2")))]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-5 block",
                attrs: { type: "filled" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [_vm._v("Submit")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form>\n    <vs-input size="large" v-validate="\'required\'" placeholder="Input 1" name="input1" v-model="value1" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'input1\')">' +
            _vm._s("{{ errors.first('input1') }}") +
            '</span>\n\n    <vs-input size="large" v-validate="\'required\'" placeholder="Input 2" name="input2" v-model="value2" class="mt-5" />\n    <span class="text-danger text-sm" v-show="errors.has(\'input2\')">' +
            _vm._s("{{ errors.first('input2') }}") +
            '</span>\n\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: "",\n      value2: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if(result) {\n          // if form have no errors\n          alert("form submitted!");\n        }else{\n          // form have errors\n        }\n      })\n    }\n  },\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=template&id=00c68895&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=template&id=00c68895& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Validation types", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "VeeValidate comes with a bunch of validation rules out of the box and cover most validation needs"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5" }, [
        _c(
          "form",
          [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "This field is required",
                      name: "required"
                    },
                    model: {
                      value: _vm.required,
                      callback: function($$v) {
                        _vm.required = $$v
                      },
                      expression: "required"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("required"),
                          expression: "errors.has('required')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("required")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "alpha",
                        expression: "'alpha'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "Only alphabetic characters",
                      name: "alpha"
                    },
                    model: {
                      value: _vm.alpha,
                      callback: function($$v) {
                        _vm.alpha = $$v
                      },
                      expression: "alpha"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("alpha"),
                          expression: "errors.has('alpha')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("alpha")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "alpha_dash",
                        expression: "'alpha_dash'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Only alphabetic characters, numbers, dashes or underscores",
                      name: "alpha_dash"
                    },
                    model: {
                      value: _vm.alpha_dash,
                      callback: function($$v) {
                        _vm.alpha_dash = $$v
                      },
                      expression: "alpha_dash"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("alpha_dash"),
                          expression: "errors.has('alpha_dash')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("alpha_dash")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "alpha_num",
                        expression: "'alpha_num'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "May contain alphabetic characters or numbers",
                      name: "alpha_num"
                    },
                    model: {
                      value: _vm.alpha_num,
                      callback: function($$v) {
                        _vm.alpha_num = $$v
                      },
                      expression: "alpha_num"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("alpha_num"),
                          expression: "errors.has('alpha_num')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("alpha_num")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "numeric",
                        expression: "'numeric'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "Must only consist of numbers",
                      name: "numeric"
                    },
                    model: {
                      value: _vm.numeric,
                      callback: function($$v) {
                        _vm.numeric = $$v
                      },
                      expression: "numeric"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("numeric"),
                          expression: "errors.has('numeric')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("numeric")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "alpha_spaces",
                        expression: "'alpha_spaces'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "Only alphabetic characters or spaces",
                      name: "alpha_spaces"
                    },
                    model: {
                      value: _vm.alpha_spaces,
                      callback: function($$v) {
                        _vm.alpha_spaces = $$v
                      },
                      expression: "alpha_spaces"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("alpha_spaces"),
                          expression: "errors.has('alpha_spaces')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("alpha_spaces")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "email",
                        expression: "'email'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Must be a valid email", name: "email" },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("email"),
                          expression: "errors.has('email')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("email")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "url:require_protocol",
                        expression: "'url:require_protocol'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      "data-vv-as": "field",
                      label: "Must be a valid url",
                      name: "url"
                    },
                    model: {
                      value: _vm.url,
                      callback: function($$v) {
                        _vm.url = $$v
                      },
                      expression: "url"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("url"),
                          expression: "errors.has('url')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("url")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "min:3",
                        expression: "'min:3'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Length should not be less than the specified length : 3",
                      name: "min"
                    },
                    model: {
                      value: _vm.min,
                      callback: function($$v) {
                        _vm.min = $$v
                      },
                      expression: "min"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("min"),
                          expression: "errors.has('min')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("min")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "max:6",
                        expression: "'max:6'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "Length may not exceed the specified length : 6",
                      name: "max"
                    },
                    model: {
                      value: _vm.max,
                      callback: function($$v) {
                        _vm.max = $$v
                      },
                      expression: "max"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("max"),
                          expression: "errors.has('max')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("max")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "min:6|max:10",
                        expression: "'min:6|max:10'"
                      }
                    ],
                    ref: "password",
                    staticClass: "mt-5 w-full",
                    attrs: {
                      type: "password",
                      label: "Password 1",
                      name: "password"
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("password"),
                          expression: "errors.has('password')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("password")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "min:6|max:10|confirmed:password",
                        expression: "'min:6|max:10|confirmed:password'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      type: "password",
                      label: "Confirm Password",
                      name: "confirm_password",
                      "data-vv-as": "password"
                    },
                    model: {
                      value: _vm.confirm_password,
                      callback: function($$v) {
                        _vm.confirm_password = $$v
                      },
                      expression: "confirm_password"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("confirm_password"),
                          expression: "errors.has('confirm_password')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("confirm_password")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "date_format:dd/MM/yyyy",
                        expression: "'date_format:dd/MM/yyyy'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label: "Date Format: dd/MM/yyyy",
                      name: "date_format"
                    },
                    model: {
                      value: _vm.date_format,
                      callback: function($$v) {
                        _vm.date_format = $$v
                      },
                      expression: "date_format"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("date_format"),
                          expression: "errors.has('date_format')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("date_format")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "between:1,11",
                        expression: "'between:1,11'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Numeric value between minimum value and a maximum value : 1 and 11",
                      name: "between"
                    },
                    model: {
                      value: _vm.between,
                      callback: function($$v) {
                        _vm.between = $$v
                      },
                      expression: "between"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("between"),
                          expression: "errors.has('between')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("between")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "credit_card",
                        expression: "'credit_card'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Valid credit card", name: "credit_card" },
                    model: {
                      value: _vm.credit_card,
                      callback: function($$v) {
                        _vm.credit_card = $$v
                      },
                      expression: "credit_card"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("credit_card"),
                          expression: "errors.has('credit_card')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("credit_card")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value:
                          "date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016",
                        expression:
                          "'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016",
                      name: "date_between"
                    },
                    model: {
                      value: _vm.date_between,
                      callback: function($$v) {
                        _vm.date_between = $$v
                      },
                      expression: "date_between"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("date_between"),
                          expression: "errors.has('date_between')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("date_between")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "digits:3",
                        expression: "'digits:3'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Must be numeric and have the specified number of digits : 3",
                      name: "digits"
                    },
                    model: {
                      value: _vm.digits,
                      callback: function($$v) {
                        _vm.digits = $$v
                      },
                      expression: "digits"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("digits"),
                          expression: "errors.has('digits')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("digits")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c(
                    "vs-select",
                    {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "included:1,3",
                          expression: "'included:1,3'"
                        }
                      ],
                      staticClass: "select-large mt-5 w-full",
                      attrs: {
                        name: "included",
                        label:
                          "Must have a value that is in the specified list : 1 or 3"
                      },
                      model: {
                        value: _vm.select1,
                        callback: function($$v) {
                          _vm.select1 = $$v
                        },
                        expression: "select1"
                      }
                    },
                    _vm._l(_vm.options1, function(item, index) {
                      return _c("vs-select-item", {
                        key: index,
                        attrs: { value: item.value, text: item.text }
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("included"),
                          expression: "errors.has('included')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("included")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "max_value:100",
                        expression: "'max_value:100'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Numeric value and must not be greater than the specified value : 100",
                      name: "max_value"
                    },
                    model: {
                      value: _vm.max_value,
                      callback: function($$v) {
                        _vm.max_value = $$v
                      },
                      expression: "max_value"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("max_value"),
                          expression: "errors.has('max_value')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("max_value")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "min_value:10",
                        expression: "'min_value:10'"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Numeric value and must not be less than the specified value : 10",
                      name: "min_value"
                    },
                    model: {
                      value: _vm.min_value,
                      callback: function($$v) {
                        _vm.min_value = $$v
                      },
                      expression: "min_value"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("min_value"),
                          expression: "errors.has('min_value')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("min_value")))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { regex: "^([0-9]+)$" },
                        expression: "{regex: '^([0-9]+)$' }"
                      }
                    ],
                    staticClass: "mt-5 w-full",
                    attrs: {
                      label:
                        "Must match the specified regular expression : ^([0-9]+)$ - numbers only",
                      name: "regex"
                    },
                    model: {
                      value: _vm.regex,
                      callback: function($$v) {
                        _vm.regex = $$v
                      },
                      expression: "regex"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("regex"),
                          expression: "errors.has('regex')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("regex")))]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-5 block",
                attrs: { type: "filled" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [_vm._v("Submit")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form>\n    <div class="vx-row">\n\n      <!-- required -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'required\'" label="This field is required" name="required" v-model="required" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'required\')">' +
            _vm._s("{{ errors.first('required') }}") +
            '</span>\n      </div>\n\n      <!-- Only alphabetic characters -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha\'" label="Only alphabetic characters" name="alpha" v-model="alpha" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha\')">' +
            _vm._s("{{ errors.first('alpha') }}") +
            '</span>\n      </div>\n\n      <!-- Only alphabetic characters, numbers, dashes or underscores -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha_dash\'" label="Only alphabetic characters, numbers, dashes or underscores" name="alpha_dash" v-model="alpha_dash" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha_dash\')">' +
            _vm._s("{{ errors.first('alpha_dash') }}") +
            '</span>\n      </div>\n\n      <!-- May contain alphabetic characters or numbers -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha_num\'" label="May contain alphabetic characters or numbers" name="alpha_num" v-model="alpha_num" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha_num\')">' +
            _vm._s("{{ errors.first('alpha_num') }}") +
            '</span>\n      </div>\n\n      <!-- Must only consist of numbers -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'numeric\'" label="Must only consist of numbers" name="numeric" v-model="numeric" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'numeric\')">' +
            _vm._s("{{ errors.first('numeric') }}") +
            '</span>\n      </div>\n\n      <!-- Only alphabetic characters or spaces -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'alpha_spaces\'" label="Only alphabetic characters or spaces" name="alpha_spaces" v-model="alpha_spaces" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'alpha_spaces\')">' +
            _vm._s("{{ errors.first('alpha_spaces') }}") +
            '</span>\n      </div>\n\n      <!-- Must be a valid email -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'email\'" label="Must be a valid email" name="email" v-model="email" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'email\')">' +
            _vm._s("{{ errors.first('email') }}") +
            '</span>\n      </div>\n\n      <!-- Must be a valid url -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'url:require_protocol\'" data-vv-as="field" label="Must be a valid url" name="url" v-model="url" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'url\')">' +
            _vm._s("{{ errors.first('url') }}") +
            '</span>\n      </div>\n\n      <!-- Length should not be less than the specified length : 3 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'min:3\'" label="Length should not be less than the specified length : 3" name="min" v-model="min" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'min\')">' +
            _vm._s("{{ errors.first('min') }}") +
            '</span>\n      </div>\n\n      <!-- Length may not exceed the specified length : 6 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'max:6\'" label="Length may not exceed the specified length : 6" name="max" v-model="max" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'max\')">' +
            _vm._s("{{ errors.first('max') }}") +
            '</span>\n      </div>\n\n      <!-- Password 1 -->\n      <div class="vx-col w-1/2">\n        <vs-input type="password" size="large" v-validate="\'min:6|max:10\'" label="Password 1" name="password" v-model="password" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'password\')">' +
            _vm._s("{{ errors.first('password') }}") +
            '</span>\n      </div>\n\n      <!-- Confirm Password -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'min:6|max:10|confirmed:password\'" label="Confirm Password" name="confirm_password" v-model="confirm_password" class="mt-5 w-full" data-vv-as="password" />\n        <span class="text-danger text-sm" v-show="errors.has(\'confirm_password\')">' +
            _vm._s("{{ errors.first('confirm_password') }}") +
            '</span>\n      </div>\n\n      <!-- Date Format: dd/MM/yyyy -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'date_format:dd/MM/yyyy\'" label="Date Format: dd/MM/yyyy" name="date_format" v-model="date_format" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'date_format\')">' +
            _vm._s("{{ errors.first('date_format') }}") +
            '</span>\n      </div>\n\n      <!-- Numeric value between minimum value and a maximum value : 1 and 11 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'between:1,11\'" label="Numeric value between minimum value and a maximum value : 1 and 11" name="between" v-model="between" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'between\')">' +
            _vm._s("{{ errors.first('between') }}") +
            '</span>\n      </div>\n\n      <!-- Valid credit card -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'credit_card\'" label="Valid credit card" name="credit_card" v-model="credit_card" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'credit_card\')">' +
            _vm._s("{{ errors.first('credit_card') }}") +
            '</span>\n      </div>\n\n      <!-- Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016\'" label="Must be a valid date between the two dates specified : 10/09/2016 - 20/09/2016" name="date_between" v-model="date_between" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'date_between\')">' +
            _vm._s("{{ errors.first('date_between') }}") +
            '</span>\n      </div>\n\n      <!-- Must be numeric and have the specified number of digits : 3 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'digits:3\'" label="Must be numeric and have the specified number of digits : 3" name="digits" v-model="digits" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'digits\')">' +
            _vm._s("{{ errors.first('digits') }}") +
            '</span>\n      </div>\n\n      <!-- Must have a value that is in the specified list : 1 or 3 -->\n      <div class="vx-col w-1/2">\n        <vs-select v-validate="\'included:1,3\'" v-model="select1" name="included" label="Must have a value that is in the specified list : 1 or 3" class="select-large mt-5 w-full">\n          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />\n        </vs-select>\n        <span class="text-danger text-sm" v-show="errors.has(\'included\')">' +
            _vm._s("{{ errors.first('included') }}") +
            '</span>\n      </div>\n\n      <!-- Numeric value and must not be greater than the specified value : 100 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'max_value:100\'" label="Numeric value and must not be greater than the specified value : 100" name="max_value" v-model="max_value" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'max_value\')">' +
            _vm._s("{{ errors.first('max_value') }}") +
            '</span>\n      </div>\n\n      <!-- Numeric value and must not be less than the specified value : 10 -->\n      <div class="vx-col w-1/2">\n        <vs-input size="large" v-validate="\'min_value:10\'" label="Numeric value and must not be less than the specified value : 10" name="min_value" v-model="min_value" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'min_value\')">' +
            _vm._s("{{ errors.first('min_value') }}") +
            '</span>\n      </div>\n\n      <!-- Must match the specified regular expression : ^([0-9]+)$ - numbers only -->\n      <div class="vx-col w-full">\n        <vs-input size="large" v-validate="{regex: \'^([0-9]+)$\' }" label="Must match the specified regular expression : ^([0-9]+)$ - numbers only" name="regex" v-model="regex" class="mt-5 w-full" />\n        <span class="text-danger text-sm" v-show="errors.has(\'regex\')">' +
            _vm._s("{{ errors.first('regex') }}") +
            '</span>\n      </div>\n    </div>\n    <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      required: "",\n      alpha: "",\n      alpha_dash: "",\n      alpha_num: "",\n      numeric: "",\n      alpha_spaces: "",\n      email: "",\n      url: "",\n      min: "",\n      max: "",\n      password: "",\n      confirm_password: "",\n      date_format: "",\n      between: "",\n      credit_card: "",\n      date_between: "",\n      digits: "",\n      select1: "",\n      options1: [\n        { text: "One", value: 1 },\n        { text: "Two", value: 2 },\n        { text: "Three", value: 3 },\n        { text: "Four", value: 4 },\n        { text: "Five", value: 5 },\n      ],\n      max_value: "",\n      min_value: "",\n      regex: "",\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$validator.validateAll().then(result => {\n        if (result) {\n          // if form have no errors\n          alert("form submitted!");\n        } else {\n          // form have errors\n        }\n      })\n    }\n  },\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidation.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidation.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidation_vue_vue_type_template_id_28f1a9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidation.vue?vue&type=template&id=28f1a9f4& */ "./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=template&id=28f1a9f4&");
/* harmony import */ var _FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidation_vue_vue_type_template_id_28f1a9f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidation_vue_vue_type_template_id_28f1a9f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-validation/FormValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=template&id=28f1a9f4&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=template&id=28f1a9f4& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_28f1a9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidation.vue?vue&type=template&id=28f1a9f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidation.vue?vue&type=template&id=28f1a9f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_28f1a9f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_28f1a9f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidationCustomErrorMessages_vue_vue_type_template_id_441af79f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f& */ "./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f&");
/* harmony import */ var _FormValidationCustomErrorMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidationCustomErrorMessages.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidationCustomErrorMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidationCustomErrorMessages_vue_vue_type_template_id_441af79f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidationCustomErrorMessages_vue_vue_type_template_id_441af79f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationCustomErrorMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationCustomErrorMessages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationCustomErrorMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationCustomErrorMessages_vue_vue_type_template_id_441af79f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationCustomErrorMessages.vue?vue&type=template&id=441af79f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationCustomErrorMessages_vue_vue_type_template_id_441af79f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationCustomErrorMessages_vue_vue_type_template_id_441af79f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationEvents.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationEvents.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidationEvents_vue_vue_type_template_id_75bb3dad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidationEvents.vue?vue&type=template&id=75bb3dad& */ "./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=template&id=75bb3dad&");
/* harmony import */ var _FormValidationEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidationEvents.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidationEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidationEvents_vue_vue_type_template_id_75bb3dad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidationEvents_vue_vue_type_template_id_75bb3dad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-validation/FormValidationEvents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationEvents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=template&id=75bb3dad&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=template&id=75bb3dad& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationEvents_vue_vue_type_template_id_75bb3dad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationEvents.vue?vue&type=template&id=75bb3dad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationEvents.vue?vue&type=template&id=75bb3dad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationEvents_vue_vue_type_template_id_75bb3dad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationEvents_vue_vue_type_template_id_75bb3dad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidationMultipleRules_vue_vue_type_template_id_a5c9dc3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a& */ "./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a&");
/* harmony import */ var _FormValidationMultipleRules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidationMultipleRules.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidationMultipleRules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidationMultipleRules_vue_vue_type_template_id_a5c9dc3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidationMultipleRules_vue_vue_type_template_id_a5c9dc3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationMultipleRules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationMultipleRules.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationMultipleRules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationMultipleRules_vue_vue_type_template_id_a5c9dc3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationMultipleRules.vue?vue&type=template&id=a5c9dc3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationMultipleRules_vue_vue_type_template_id_a5c9dc3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationMultipleRules_vue_vue_type_template_id_a5c9dc3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationSimple.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationSimple.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidationSimple_vue_vue_type_template_id_36a0cc74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidationSimple.vue?vue&type=template&id=36a0cc74& */ "./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=template&id=36a0cc74&");
/* harmony import */ var _FormValidationSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidationSimple.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidationSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidationSimple_vue_vue_type_template_id_36a0cc74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidationSimple_vue_vue_type_template_id_36a0cc74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-validation/FormValidationSimple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationSimple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=template&id=36a0cc74&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=template&id=36a0cc74& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationSimple_vue_vue_type_template_id_36a0cc74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationSimple.vue?vue&type=template&id=36a0cc74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationSimple.vue?vue&type=template&id=36a0cc74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationSimple_vue_vue_type_template_id_36a0cc74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationSimple_vue_vue_type_template_id_36a0cc74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationTypes.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationTypes.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidationTypes_vue_vue_type_template_id_00c68895___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidationTypes.vue?vue&type=template&id=00c68895& */ "./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=template&id=00c68895&");
/* harmony import */ var _FormValidationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidationTypes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidationTypes_vue_vue_type_template_id_00c68895___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidationTypes_vue_vue_type_template_id_00c68895___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-validation/FormValidationTypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationTypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=template&id=00c68895&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=template&id=00c68895& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationTypes_vue_vue_type_template_id_00c68895___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidationTypes.vue?vue&type=template&id=00c68895& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-validation/FormValidationTypes.vue?vue&type=template&id=00c68895&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationTypes_vue_vue_type_template_id_00c68895___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidationTypes_vue_vue_type_template_id_00c68895___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);