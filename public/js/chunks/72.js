(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardNumberTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardNumberTab.vue */ "./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue");
/* harmony import */ var _FormWizardIconTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizardIconTab.vue */ "./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue");
/* harmony import */ var _FormWizardValidation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormWizardValidation.vue */ "./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue");
//
//
//
//
//
//
//
//
//
//
//
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
    FormWizardNumberTab: _FormWizardNumberTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormWizardIconTab: _FormWizardIconTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormWizardValidation: _FormWizardValidation_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      firstName: '',
      lastName: '',
      email: '',
      city: 'new-york',
      proposalTitle: '',
      jobTitle: '',
      textarea: '',
      eventName: '',
      eventLocation: 'san-francisco',
      status: 'plannning',
      cityOptions: [{
        text: 'New York',
        value: 'new-york'
      }, {
        text: 'Chicago',
        value: 'chicago'
      }, {
        text: 'San Francisco',
        value: 'san-francisco'
      }, {
        text: 'Boston',
        value: 'boston'
      }],
      statusOptions: [{
        text: 'Plannning',
        value: 'plannning'
      }, {
        text: 'In Progress',
        value: 'in progress'
      }, {
        text: 'Finished',
        value: 'finished'
      }],
      LocationOptions: [{
        text: 'New York',
        value: 'new-york'
      }, {
        text: 'Chicago',
        value: 'chicago'
      }, {
        text: 'San Francisco',
        value: 'san-francisco'
      }, {
        text: 'Boston',
        value: 'boston'
      }]
    };
  },
  methods: {
    formSubmitted: function formSubmitted() {
      alert('Form submitted!');
    }
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      firstName: '',
      lastName: '',
      email: '',
      city: 'new-york',
      proposalTitle: '',
      jobTitle: '',
      textarea: '',
      eventName: '',
      eventLocation: 'san-francisco',
      status: 'plannning',
      cityOptions: [{
        text: 'New York',
        value: 'new-york'
      }, {
        text: 'Chicago',
        value: 'chicago'
      }, {
        text: 'San Francisco',
        value: 'san-francisco'
      }, {
        text: 'Boston',
        value: 'boston'
      }],
      statusOptions: [{
        text: 'Plannning',
        value: 'plannning'
      }, {
        text: 'In Progress',
        value: 'in progress'
      }, {
        text: 'Finished',
        value: 'finished'
      }],
      LocationOptions: [{
        text: 'New York',
        value: 'new-york'
      }, {
        text: 'Chicago',
        value: 'chicago'
      }, {
        text: 'San Francisco',
        value: 'san-francisco'
      }, {
        text: 'Boston',
        value: 'boston'
      }]
    };
  },
  methods: {
    formSubmitted: function formSubmitted() {
      alert('Form submitted!');
    }
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      required: 'First name is required',
      alpha: 'First name may only contain alphabetic characters'
    },
    last_name: {
      required: 'Last name is required',
      alpha: 'Last name may only contain alphabetic characters'
    },
    email: {
      required: 'Email is required',
      email: 'Please enter valid email'
    },
    job_title: {
      required: 'Job title name is required',
      alpha: 'Job title may only contain alphabetic characters'
    },
    proposal_title: {
      required: 'Proposal title name is required',
      alpha: 'Proposal title may only contain alphabetic characters'
    },
    event_name: {
      required: 'Event name is required',
      alpha: 'Event name may only contain alphabetic characters'
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      city: 'new-york',
      proposalTitle: '',
      jobTitle: '',
      textarea: '',
      eventName: '',
      eventLocation: 'san-francisco',
      status: 'plannning',
      cityOptions: [{
        text: 'New York',
        value: 'new-york'
      }, {
        text: 'Chicago',
        value: 'chicago'
      }, {
        text: 'San Francisco',
        value: 'san-francisco'
      }, {
        text: 'Boston',
        value: 'boston'
      }],
      statusOptions: [{
        text: 'Plannning',
        value: 'plannning'
      }, {
        text: 'In Progress',
        value: 'in progress'
      }, {
        text: 'Finished',
        value: 'finished'
      }],
      LocationOptions: [{
        text: 'New York',
        value: 'new-york'
      }, {
        text: 'Chicago',
        value: 'chicago'
      }, {
        text: 'San Francisco',
        value: 'san-francisco'
      }, {
        text: 'Boston',
        value: 'boston'
      }]
    };
  },
  methods: {
    validateStep1: function validateStep1() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject('correct all values');
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll('step-2').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject('correct all values');
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll('step-3').then(function (result) {
          if (result) {
            alert('Form submitted!');
            resolve(true);
          } else {
            reject('correct all values');
          }
        });
      });
    }
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=template&id=199af4b4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=template&id=199af4b4& ***!
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
    { attrs: { id: "extra-component-form-wizard-demo" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("form-wizard-number-tab"),
      _vm._v(" "),
      _c("form-wizard-icon-tab"),
      _vm._v(" "),
      _c("form-wizard-validation")
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
            href: "https://binarcode.github.io/vue-form-wizard/#/",
            target: "_blank",
            rel: "nofollow"
          }
        },
        [_vm._v("vue-form-wizard")]
      ),
      _vm._v(
        " is a vue based component with no external depenendcies which simplifies tab wizard management and allows you to focus on the functional part of your app rather than wasting time on details."
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=template&id=34c6bf38&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=template&id=34c6bf38& ***!
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
    { attrs: { title: "Form wizard with icon tabs", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("Add feather icon class to "),
        _c("code", [_vm._v("icon")]),
        _vm._v(" prop in "),
        _c("code", [_vm._v("tab-content")]),
        _vm._v(" component to get desired icon in tab.")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c(
            "form-wizard",
            {
              attrs: {
                color: "rgba(var(--vs-primary), 1)",
                title: null,
                subtitle: null,
                finishButtonText: "Submit"
              },
              on: { "on-complete": _vm.formSubmitted }
            },
            [
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: { title: "Step 1", icon: "feather icon-home" }
                },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { label: "First Name" },
                          model: {
                            value: _vm.firstName,
                            callback: function($$v) {
                              _vm.firstName = $$v
                            },
                            expression: "firstName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { label: "Last Name" },
                          model: {
                            value: _vm.lastName,
                            callback: function($$v) {
                              _vm.lastName = $$v
                            },
                            expression: "lastName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { type: "email", label: "Email" },
                          model: {
                            value: _vm.email,
                            callback: function($$v) {
                              _vm.email = $$v
                            },
                            expression: "email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "City" },
                            model: {
                              value: _vm.city,
                              callback: function($$v) {
                                _vm.city = $$v
                              },
                              expression: "city"
                            }
                          },
                          _vm._l(_vm.cityOptions, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: { title: "Step 2", icon: "feather icon-briefcase" }
                },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full mt-4",
                          attrs: { label: "Proposal Title" },
                          model: {
                            value: _vm.proposalTitle,
                            callback: function($$v) {
                              _vm.proposalTitle = $$v
                            },
                            expression: "proposalTitle"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mt-4",
                          attrs: { label: "Job Title" },
                          model: {
                            value: _vm.jobTitle,
                            callback: function($$v) {
                              _vm.jobTitle = $$v
                            },
                            expression: "jobTitle"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-textarea", {
                          staticClass: "mb-0 md:mt-10 mt-6",
                          attrs: { label: "Short discription", rows: "3" },
                          model: {
                            value: _vm.textarea,
                            callback: function($$v) {
                              _vm.textarea = $$v
                            },
                            expression: "textarea"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: { title: "Step 3", icon: "feather icon-image" }
                },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full mt-5",
                          attrs: { label: "Event Name" },
                          model: {
                            value: _vm.eventName,
                            callback: function($$v) {
                              _vm.eventName = $$v
                            },
                            expression: "eventName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large mt-5",
                            attrs: { label: "Event Location" },
                            model: {
                              value: _vm.city,
                              callback: function($$v) {
                                _vm.city = $$v
                              },
                              expression: "city"
                            }
                          },
                          _vm._l(_vm.cityOptions, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Event Status" },
                            model: {
                              value: _vm.status,
                              callback: function($$v) {
                                _vm.status = $$v
                              },
                              expression: "status"
                            }
                          },
                          _vm._l(_vm.statusOptions, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full md:mt-8" },
                      [
                        _c("div", { staticClass: "demo-alignment" }, [
                          _c("span", [_vm._v("Requirements:")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex" },
                            [
                              _c("vs-checkbox", [_vm._v("Staffing")]),
                              _vm._v(" "),
                              _c("vs-checkbox", [_vm._v("Catering")])
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">\n      <tab-content title="Step 1" class="mb-5" icon="feather icon-home">\n\n          <!-- tab 1 content -->\n          <div class="vx-row">\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-input label="First Name" v-model="firstName" class="w-full" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-input label="Last Name"  v-model="lastName" class="w-full" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-input type="email" label="Email"  v-model="email" class="w-full" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-select v-model="city" class="w-full select-large" label="City">\n                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />\n                  </vs-select>\n              </div>\n          </div>\n      </tab-content>\n\n      <!-- tab 2 content -->\n      <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase">\n          <div class="vx-row">\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />\n                  <vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-textarea v-model="textarea" label="Short discription" class="mb-0 md:mt-10 mt-6" rows="3" />\n              </div>\n          </div>\n      </tab-content>\n\n      <!-- tab 3 content -->\n      <tab-content title="Step 3" class="mb-5" icon="feather icon-image">\n          <div class="vx-row">\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">\n                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />\n                  </vs-select>\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-select v-model="status" class="w-full select-large" label="Event Status">\n                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />\n                  </vs-select>\n              </div>\n              <div class="vx-col md:w-1/2 w-full md:mt-8">\n                  <div class="demo-alignment">\n                      <span>Requirements:</span>\n                      <div class="flex">\n                        <vs-checkbox>Staffing</vs-checkbox>\n                        <vs-checkbox>Catering</vs-checkbox>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </tab-content>\n  </form-wizard>\n</template>\n\n<script>\nimport {FormWizard, TabContent} from \'vue-form-wizard\'\nimport \'vue-form-wizard/dist/vue-form-wizard.min.css\'\n\nexport default {\n  data() {\n    return {\n      firstName: "",\n      /// other data....\n    }\n  },\n  methods: {\n    formSubmitted() {\n      alert("Form submitted!");\n    }\n  },\n  components: {\n    FormWizard,\n    TabContent\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=template&id=38c95530&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=template&id=38c95530& ***!
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
    { attrs: { title: "Form wizard with number tabs", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("Create neat and clean form wizard using "),
        _c("code", [_vm._v("form-wizard")]),
        _vm._v(" and "),
        _c("code", [_vm._v("tab-content")]),
        _vm._v(" components")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c(
            "form-wizard",
            {
              attrs: {
                color: "rgba(var(--vs-primary), 1)",
                title: null,
                subtitle: null,
                finishButtonText: "Submit"
              },
              on: { "on-complete": _vm.formSubmitted }
            },
            [
              _c(
                "tab-content",
                { staticClass: "mb-5", attrs: { title: "Step 1" } },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { label: "First Name" },
                          model: {
                            value: _vm.firstName,
                            callback: function($$v) {
                              _vm.firstName = $$v
                            },
                            expression: "firstName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { label: "Last Name" },
                          model: {
                            value: _vm.lastName,
                            callback: function($$v) {
                              _vm.lastName = $$v
                            },
                            expression: "lastName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { type: "email", label: "Email" },
                          model: {
                            value: _vm.email,
                            callback: function($$v) {
                              _vm.email = $$v
                            },
                            expression: "email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "City" },
                            model: {
                              value: _vm.city,
                              callback: function($$v) {
                                _vm.city = $$v
                              },
                              expression: "city"
                            }
                          },
                          _vm._l(_vm.cityOptions, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "tab-content",
                { staticClass: "mb-5", attrs: { title: "Step 2" } },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full mt-4",
                          attrs: { label: "Proposal Title" },
                          model: {
                            value: _vm.proposalTitle,
                            callback: function($$v) {
                              _vm.proposalTitle = $$v
                            },
                            expression: "proposalTitle"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mt-4",
                          attrs: { label: "Job Title" },
                          model: {
                            value: _vm.jobTitle,
                            callback: function($$v) {
                              _vm.jobTitle = $$v
                            },
                            expression: "jobTitle"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-textarea", {
                          staticClass: "mb-0 md:mt-10 mt-6",
                          attrs: { label: "Short discription", rows: "3" },
                          model: {
                            value: _vm.textarea,
                            callback: function($$v) {
                              _vm.textarea = $$v
                            },
                            expression: "textarea"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "tab-content",
                { staticClass: "mb-5", attrs: { title: "Step 3" } },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full mt-5",
                          attrs: { label: "Event Name" },
                          model: {
                            value: _vm.eventName,
                            callback: function($$v) {
                              _vm.eventName = $$v
                            },
                            expression: "eventName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large mt-5",
                            attrs: { label: "Event Location" },
                            model: {
                              value: _vm.city,
                              callback: function($$v) {
                                _vm.city = $$v
                              },
                              expression: "city"
                            }
                          },
                          _vm._l(_vm.cityOptions, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Event Status" },
                            model: {
                              value: _vm.status,
                              callback: function($$v) {
                                _vm.status = $$v
                              },
                              expression: "status"
                            }
                          },
                          _vm._l(_vm.statusOptions, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full md:mt-8" },
                      [
                        _c("div", { staticClass: "demo-alignment" }, [
                          _c("span", [_vm._v("Requirements:")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex" },
                            [
                              _c("vs-checkbox", [_vm._v("Staffing")]),
                              _vm._v(" "),
                              _c("vs-checkbox", [_vm._v("Catering")])
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">\n      <tab-content title="Step 1" class="mb-5">\n\n          <!-- tab 1 content -->\n          <div class="vx-row">\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-input label="First Name" v-model="firstName" class="w-full" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-input label="Last Name"  v-model="lastName" class="w-full" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-input type="email" label="Email"  v-model="email" class="w-full" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-select v-model="city" class="w-full select-large" label="City">\n                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />\n                  </vs-select>\n              </div>\n          </div>\n      </tab-content>\n\n      <!-- tab 2 content -->\n      <tab-content title="Step 2" class="mb-5">\n          <div class="vx-row">\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />\n                  <vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-textarea v-model="textarea" label="Short discription" class="mb-0 md:mt-10 mt-6" rows="3" />\n              </div>\n          </div>\n      </tab-content>\n\n      <!-- tab 3 content -->\n      <tab-content title="Step 3" class="mb-5">\n          <div class="vx-row">\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" />\n              </div>\n              <div class="vx-col md:w-1/2 w-full">\n                  <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">\n                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />\n                  </vs-select>\n              </div>\n              <div class="vx-col md:w-1/2 w-full mt-5">\n                  <vs-select v-model="status" class="w-full select-large" label="Event Status">\n                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />\n                  </vs-select>\n              </div>\n              <div class="vx-col md:w-1/2 w-full md:mt-8">\n                  <div class="demo-alignment">\n                      <span>Requirements:</span>\n                      <div class="flex">\n                        <vs-checkbox>Staffing</vs-checkbox>\n                        <vs-checkbox>Catering</vs-checkbox>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </tab-content>\n  </form-wizard>\n</template>\n\n<script>\nimport {FormWizard, TabContent} from \'vue-form-wizard\'\nimport \'vue-form-wizard/dist/vue-form-wizard.min.css\'\n\nexport default {\n  data() {\n    return {\n      firstName: "",\n      lastName: "",\n      email: "",\n      city: "new-york",\n      proposalTitle: "",\n      jobTitle: "",\n      textarea: "",\n      eventName: "",\n      eventLocation: "san-francisco",\n      status: "plannning",\n      cityOptions: [\n        {text: "New York", value:"new-york"},\n        {text: "Chicago", value:"chicago"},\n        {text: "San Francisco", value:"san-francisco"},\n        {text: "Boston", value:"boston"},\n      ],\n      statusOptions: [\n        {text: "Plannning", value:"plannning"},\n        {text: "In Progress", value:"in progress"},\n        {text: "Finished", value:"finished"},\n      ],\n      LocationOptions: [\n        {text: "New York", value:"new-york"},\n        {text: "Chicago", value:"chicago"},\n        {text: "San Francisco", value:"san-francisco"},\n        {text: "Boston", value:"boston"},\n      ],\n    }\n  },\n  methods: {\n    formSubmitted() {\n      alert("Form submitted!");\n    }\n  },\n  components: {\n    FormWizard,\n    TabContent\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=template&id=11b19c66&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=template&id=11b19c66& ***!
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
    { attrs: { title: "Form wizard with validation", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("Implement Form validation with form wizard using popular "),
        _c(
          "strong",
          [
            _c("router-link", { attrs: { to: "/forms/form-validation" } }, [
              _vm._v("VeeValidate")
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c(
            "form-wizard",
            {
              attrs: {
                color: "rgba(var(--vs-primary), 1)",
                errorColor: "rgba(var(--vs-danger), 1)",
                title: null,
                subtitle: null,
                finishButtonText: "Submit"
              }
            },
            [
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: {
                    title: "Step 1",
                    icon: "feather icon-home",
                    "before-change": _vm.validateStep1
                  }
                },
                [
                  _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                            staticClass: "w-full",
                            attrs: { label: "First Name", name: "first_name" },
                            model: {
                              value: _vm.firstName,
                              callback: function($$v) {
                                _vm.firstName = $$v
                              },
                              expression: "firstName"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.errors.first("step-1.first_name"))
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                            staticClass: "w-full",
                            attrs: { label: "Last Name", name: "last_name" },
                            model: {
                              value: _vm.lastName,
                              callback: function($$v) {
                                _vm.lastName = $$v
                              },
                              expression: "lastName"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.first("step-1.last_name")))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                            staticClass: "w-full",
                            attrs: {
                              type: "email",
                              label: "Email",
                              name: "email"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.first("step-1.email")))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full select-large",
                              attrs: { label: "City" },
                              model: {
                                value: _vm.city,
                                callback: function($$v) {
                                  _vm.city = $$v
                                },
                                expression: "city"
                              }
                            },
                            _vm._l(_vm.cityOptions, function(item, index) {
                              return _c("vs-select-item", {
                                key: index,
                                staticClass: "w-full",
                                attrs: { value: item.value, text: item.text }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: {
                    title: "Step 2",
                    icon: "feather icon-briefcase",
                    "before-change": _vm.validateStep2
                  }
                },
                [
                  _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|alpha_spaces",
                                expression: "'required|alpha_spaces'"
                              }
                            ],
                            staticClass: "w-full mt-4",
                            attrs: {
                              label: "Proposal Title",
                              name: "proposal_title"
                            },
                            model: {
                              value: _vm.proposalTitle,
                              callback: function($$v) {
                                _vm.proposalTitle = $$v
                              },
                              expression: "proposalTitle"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.errors.first("step-2.proposal_title"))
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|alpha_spaces",
                                expression: "'required|alpha_spaces'"
                              }
                            ],
                            staticClass: "w-full mt-4",
                            attrs: { label: "Job Title", name: "job_title" },
                            model: {
                              value: _vm.jobTitle,
                              callback: function($$v) {
                                _vm.jobTitle = $$v
                              },
                              expression: "jobTitle"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.first("step-2.job_title")))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("vs-textarea", {
                            staticClass: "md:mt-10 mt-6 mb-0",
                            attrs: { label: "Short discription", rows: "3" },
                            model: {
                              value: _vm.textarea,
                              callback: function($$v) {
                                _vm.textarea = $$v
                              },
                              expression: "textarea"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: {
                    title: "Step 3",
                    icon: "feather icon-image",
                    "before-change": _vm.validateStep3
                  }
                },
                [
                  _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|alpha_spaces",
                                expression: "'required|alpha_spaces'"
                              }
                            ],
                            staticClass: "w-full mt-5",
                            attrs: { label: "Event Name", name: "event_name" },
                            model: {
                              value: _vm.eventName,
                              callback: function($$v) {
                                _vm.eventName = $$v
                              },
                              expression: "eventName"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.errors.first("step-3.event_name"))
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full select-large mt-5",
                              attrs: { label: "Event Location" },
                              model: {
                                value: _vm.city,
                                callback: function($$v) {
                                  _vm.city = $$v
                                },
                                expression: "city"
                              }
                            },
                            _vm._l(_vm.cityOptions, function(item, index) {
                              return _c("vs-select-item", {
                                key: index,
                                staticClass: "w-full",
                                attrs: { value: item.value, text: item.text }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full select-large",
                              attrs: { label: "Event Status" },
                              model: {
                                value: _vm.status,
                                callback: function($$v) {
                                  _vm.status = $$v
                                },
                                expression: "status"
                              }
                            },
                            _vm._l(_vm.statusOptions, function(item, index) {
                              return _c("vs-select-item", {
                                key: index,
                                staticClass: "w-full",
                                attrs: { value: item.value, text: item.text }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full md:mt-8" },
                        [
                          _c("div", { staticClass: "demo-alignment" }, [
                            _c("span", [_vm._v("Requirements:")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                _c("vs-checkbox", [_vm._v("Staffing")]),
                                _vm._v(" "),
                                _c("vs-checkbox", [_vm._v("Catering")])
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <form-wizard color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">\n    <tab-content title="Step 1" class="mb-5" icon="feather icon-home" :before-change="validateStep1">\n\n      <!-- tab 1 content -->\n      <form data-vv-scope="step-1">\n      <div class="vx-row">\n        <div class="vx-col md:w-1/2 w-full mt-5">\n          <vs-input label="First Name" v-model="firstName" class="w-full" name="first_name" v-validate="\'required|alpha\'" />\n          <span class="text-danger">' +
            _vm._s(_vm.errors.first("step-1.first_name")) +
            '</span>\n        </div>\n        <div class="vx-col md:w-1/2 w-full mt-5">\n          <vs-input label="Last Name"  v-model="lastName" class="w-full" name="last_name" v-validate="\'required|alpha\'" />\n          <span class="text-danger">' +
            _vm._s(_vm.errors.first("step-1.last_name")) +
            '</span>\n        </div>\n        <div class="vx-col md:w-1/2 w-full mt-5">\n          <vs-input type="email" label="Email"  v-model="email" class="w-full" name="email" v-validate="\'required|email\'" />\n          <span class="text-danger">' +
            _vm._s(_vm.errors.first("step-1.email")) +
            '</span>\n        </div>\n        <div class="vx-col md:w-1/2 w-full mt-5">\n          <vs-select v-model="city" class="w-full select-large" label="City">\n            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />\n          </vs-select>\n        </div>\n      </div>\n      </form>\n    </tab-content>\n\n    <!-- tab 2 content -->\n    <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase" :before-change="validateStep2">\n      <form data-vv-scope="step-2">\n      <div class="vx-row">\n        <div class="vx-col md:w-1/2 w-full">\n          <vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" name="proposal_title" v-validate="\'required|alpha_spaces\'" />\n          <span class="text-danger">' +
            _vm._s(_vm.errors.first("step-2.proposal_title")) +
            '</span>\n\n          <vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" name="job_title" v-validate="\'required|alpha_spaces\'" />\n          <span class="text-danger">' +
            _vm._s(_vm.errors.first("step-2.job_title")) +
            '</span>\n        </div>\n        <div class="vx-col md:w-1/2 w-full">\n          <vs-textarea v-model="textarea" label="Short discription" class="md:mt-10 mt-6 mb-0" rows="3" />\n        </div>\n      </div>\n      </form>\n    </tab-content>\n\n    <!-- tab 3 content -->\n    <tab-content title="Step 3" class="mb-5" icon="feather icon-image" :before-change="validateStep3">\n      <form data-vv-scope="step-3">\n      <div class="vx-row">\n        <div class="vx-col md:w-1/2 w-full">\n          <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" name="event_name" v-validate="\'required|alpha_spaces\'" />\n          <span class="text-danger">' +
            _vm._s(_vm.errors.first("step-3.event_name")) +
            '</span>\n        </div>\n        <div class="vx-col md:w-1/2 w-full">\n          <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">\n            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />\n          </vs-select>\n        </div>\n        <div class="vx-col md:w-1/2 w-full mt-5">\n          <vs-select v-model="status" class="w-full select-large" label="Event Status">\n            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />\n          </vs-select>\n        </div>\n        <div class="vx-col md:w-1/2 w-full md:mt-8">\n          <div class="demo-alignment">\n            <span>Requirements:</span>\n            <div class="flex">\n              <vs-checkbox>Staffing</vs-checkbox>\n              <vs-checkbox>Catering</vs-checkbox>\n            </div>\n          </div>\n        </div>\n      </div>\n      </form>\n    </tab-content>\n  </form-wizard>\n</template>\n\n<script>\nimport { FormWizard, TabContent } from \'vue-form-wizard\'\nimport \'vue-form-wizard/dist/vue-form-wizard.min.css\'\n\n// For custom error message\nimport { Validator } from \'vee-validate\';\nconst dict = {\n  custom: {\n    first_name: {\n      required: \'First name is required\',\n      alpha: "First name may only contain alphabetic characters"\n    },\n    last_name: {\n      required: \'Last name is required\',\n      alpha: "Last name may only contain alphabetic characters"\n    },\n    email: {\n      required: \'Email is required\',\n      email: "Please enter valid email"\n    },\n    job_title: {\n      required: \'Job title name is required\',\n      alpha: "Job title may only contain alphabetic characters"\n    },\n    proposal_title: {\n      required: \'Proposal title name is required\',\n      alpha: "Proposal title may only contain alphabetic characters"\n    },\n    event_name: {\n      required: \'Event name is required\',\n      alpha: "Event name may only contain alphabetic characters"\n    },\n  }\n};\n\n// register custom messages\nValidator.localize(\'en\', dict);\n\nexport default {\n  data() {\n    return {\n      firstName: "",\n      lastName: "",\n      email: "",\n      city: "new-york",\n      proposalTitle: "",\n      jobTitle: "",\n      textarea: "",\n      eventName: "",\n      eventLocation: "san-francisco",\n      status: "plannning",\n      cityOptions: [\n        { text: "New York", value: "new-york" },\n        { text: "Chicago", value: "chicago" },\n        { text: "San Francisco", value: "san-francisco" },\n        { text: "Boston", value: "boston" },\n      ],\n      statusOptions: [\n        { text: "Plannning", value: "plannning" },\n        { text: "In Progress", value: "in progress" },\n        { text: "Finished", value: "finished" },\n      ],\n      LocationOptions: [\n        { text: "New York", value: "new-york" },\n        { text: "Chicago", value: "chicago" },\n        { text: "San Francisco", value: "san-francisco" },\n        { text: "Boston", value: "boston" },\n      ],\n    }\n  },\n  methods: {\n    validateStep1() {\n      return new Promise((resolve, reject) => {\n        this.$validator.validateAll(\'step-1\').then(result => {\n          if (result) {\n            resolve(true)\n          } else {\n            reject("correct all values");\n          }\n        })\n      })\n    },\n    validateStep2() {\n      return new Promise((resolve, reject) => {\n        this.$validator.validateAll("step-2").then(result => {\n          if (result) {\n            resolve(true)\n          } else {\n            reject("correct all values");\n          }\n        })\n      })\n    },\n    validateStep3() {\n      return new Promise((resolve, reject) => {\n        this.$validator.validateAll("step-3").then(result => {\n          if (result) {\n            alert("Form submitted!");\n            resolve(true)\n          } else {\n            reject("correct all values");\n          }\n        })\n      })\n    }\n  },\n  components: {\n    FormWizard,\n    TabContent\n  }\n}\n</script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizard.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizard.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizard_vue_vue_type_template_id_199af4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizard.vue?vue&type=template&id=199af4b4& */ "./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=template&id=199af4b4&");
/* harmony import */ var _FormWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormWizard_vue_vue_type_template_id_199af4b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormWizard_vue_vue_type_template_id_199af4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-wizard/FormWizard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=template&id=199af4b4&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=template&id=199af4b4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizard_vue_vue_type_template_id_199af4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizard.vue?vue&type=template&id=199af4b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizard.vue?vue&type=template&id=199af4b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizard_vue_vue_type_template_id_199af4b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizard_vue_vue_type_template_id_199af4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardIconTab_vue_vue_type_template_id_34c6bf38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardIconTab.vue?vue&type=template&id=34c6bf38& */ "./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=template&id=34c6bf38&");
/* harmony import */ var _FormWizardIconTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizardIconTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormWizardIconTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormWizardIconTab_vue_vue_type_template_id_34c6bf38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormWizardIconTab_vue_vue_type_template_id_34c6bf38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardIconTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardIconTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardIconTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=template&id=34c6bf38&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=template&id=34c6bf38& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardIconTab_vue_vue_type_template_id_34c6bf38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardIconTab.vue?vue&type=template&id=34c6bf38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardIconTab.vue?vue&type=template&id=34c6bf38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardIconTab_vue_vue_type_template_id_34c6bf38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardIconTab_vue_vue_type_template_id_34c6bf38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardNumberTab_vue_vue_type_template_id_38c95530___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardNumberTab.vue?vue&type=template&id=38c95530& */ "./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=template&id=38c95530&");
/* harmony import */ var _FormWizardNumberTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizardNumberTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormWizardNumberTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormWizardNumberTab_vue_vue_type_template_id_38c95530___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormWizardNumberTab_vue_vue_type_template_id_38c95530___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardNumberTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardNumberTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardNumberTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=template&id=38c95530&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=template&id=38c95530& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardNumberTab_vue_vue_type_template_id_38c95530___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardNumberTab.vue?vue&type=template&id=38c95530& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardNumberTab.vue?vue&type=template&id=38c95530&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardNumberTab_vue_vue_type_template_id_38c95530___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardNumberTab_vue_vue_type_template_id_38c95530___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardValidation_vue_vue_type_template_id_11b19c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardValidation.vue?vue&type=template&id=11b19c66& */ "./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=template&id=11b19c66&");
/* harmony import */ var _FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizardValidation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormWizardValidation_vue_vue_type_template_id_11b19c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormWizardValidation_vue_vue_type_template_id_11b19c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-wizard/FormWizardValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=template&id=11b19c66&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=template&id=11b19c66& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_template_id_11b19c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation.vue?vue&type=template&id=11b19c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-wizard/FormWizardValidation.vue?vue&type=template&id=11b19c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_template_id_11b19c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_template_id_11b19c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);