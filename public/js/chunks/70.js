(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogsAlert_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogsAlert.vue */ "./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue");
/* harmony import */ var _DialogsConfirm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogsConfirm.vue */ "./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue");
/* harmony import */ var _DialogsPrompt_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogsPrompt.vue */ "./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue");
//
//
//
//
//
//
//
//
//
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
    DialogsAlert: _DialogsAlert_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DialogsConfirm: _DialogsConfirm_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DialogsPrompt: _DialogsPrompt_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      colorAlert: 'primary',
      titleAlert: 'Alert',
      activeAlert: false,
      valueInput: ''
    };
  },
  methods: {
    openAlert: function openAlert(color) {
      this.colorAlert = color;
      this.$vs.dialog({
        color: this.colorAlert,
        title: "Dialog - ".concat(this.colorAlert),
        text: 'I love soufflé lollipop liquorice wafer jelly-o halvah sesame snaps. Pastry chocolate cake jelly-o carrot cake jelly topping croissant ice cream.',
        accept: this.acceptAlert
      });
    },
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: this.colorAlert,
        title: 'Accept Selected',
        text: 'Gingerbread soufflé biscuit oat cake.'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=script&lang=js& ***!
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
//
//
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
      activeConfirm: false
    };
  },
  methods: {
    openConfirm: function openConfirm() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',
        accept: this.acceptAlert
      });
    },
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: 'danger',
        title: 'Deleted image',
        text: 'The selected image was successfully deleted'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activePrompt: false,
      activePrompt2: false,
      val: '',
      valMultipe: {
        value1: '',
        value2: ''
      }
    };
  },
  computed: {
    validName: function validName() {
      return this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0;
    }
  },
  methods: {
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: 'success',
        title: 'Accept Selected',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      });
    },
    close: function close() {
      this.$vs.notify({
        color: 'danger',
        title: 'Closed',
        text: 'You close a dialog!'
      });
    },
    clearValMultiple: function clearValMultiple() {
      this.valMultipe.value1 = '';
      this.valMultipe.value2 = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=template&id=87881c8a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=template&id=87881c8a& ***!
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
    { attrs: { id: "dialog-demo" } },
    [
      _c("dialogs-alert"),
      _vm._v(" "),
      _c("dialogs-confirm"),
      _vm._v(" "),
      _c("dialogs-prompt")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=template&id=1f8be6de&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=template&id=1f8be6de& ***!
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
    { attrs: { title: "Alert", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "To generate a dialog we have the global function $vs.dialog the parameters to generate the dialog are"
        )
      ]),
      _vm._v(" "),
      _c(
        "vs-list",
        [
          _c("vs-list-item", {
            attrs: {
              title: "title",
              subtitle: "title of the dialogue - String"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "text",
              subtitle: "internal text of the dialog - String"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "color",
              subtitle: "color of the component - Colors, RGB, HEX"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "accept",
              subtitle:
                "function that executes the user accept the dialog - Function"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "cancel",
              subtitle:
                "function that executes the user to cancel the dialog (if it is a confirm type) - Function"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "type",
              subtitle:
                "determines the type of dialog (alert or confirm) - alert, confirm"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "buttonAccept",
              subtitle: "determines the type of accept button - Boolean"
            }
          }),
          _vm._v(" "),
          _c("vs-list-item", {
            attrs: {
              title: "buttonCancel",
              subtitle: "determines the type of cancel button - Boolean"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.openAlert("primary")
                }
              }
            },
            [_vm._v("Alert Primary")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.openAlert("success")
                }
              }
            },
            [_vm._v("Alert Success")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "danger", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.openAlert("danger")
                }
              }
            },
            [_vm._v("Alert Danger")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "warning", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.openAlert("warning")
                }
              }
            },
            [_vm._v("Alert Warning")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "dark", type: "flat" },
              on: {
                click: function($event) {
                  return _vm.openAlert("dark")
                }
              }
            },
            [_vm._v("Alert Dark")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "gradient" },
              on: {
                click: function($event) {
                  return _vm.openAlert("#FF6F91")
                }
              }
            },
            [_vm._v("Alert Color RGB | HEX")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <vs-button @click="openAlert(\'primary\')" color="primary" type="flat">Alert Primary</vs-button>\n  <vs-button @click="openAlert(\'success\')" color="success" type="flat">Alert Success</vs-button>\n  <vs-button @click="openAlert(\'danger\')" color="danger" type="flat">Alert Danger</vs-button>\n  <vs-button @click="openAlert(\'warning\')" color="warning" type="flat">Alert Warning</vs-button>\n  <vs-button @click="openAlert(\'dark\')" color="dark" type="flat">Alert Dark</vs-button>\n  <vs-button @click="openAlert(\'#FF6F91\')" color="primary" type="gradient">Alert Color RGB | HEX</vs-button>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    colorAlert:\'primary\',\n    titleAlert:\'Alert\',\n    activeAlert:false,\n    valueInput:\'\',\n  }),\n  methods:{\n    openAlert(color){\n      this.colorAlert = color\n      this.$vs.dialog({\n        color:this.colorAlert,\n        title: `Dialog - ${this.colorAlert}`,\n        text: \'I love soufflé lollipop liquorice wafer jelly-o halvah sesame snaps. Pastry chocolate cake jelly-o carrot cake jelly topping croissant ice cream.\',\n        accept:this.acceptAlert\n      })\n    },\n    acceptAlert(){\n      this.$vs.notify({\n        color:this.colorAlert,\n        title:\'Accept Selected\',\n        text:\'Gingerbread soufflé biscuit oat cake.\'\n      })\n    }\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=template&id=55eee4b5&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=template&id=55eee4b5& ***!
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
    { attrs: { title: "Confirm", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "If you need a dialog of type confirm you can do it just by changing the type as a parameter inside the main function"
        )
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "my-4",
          attrs: { color: "primary", icon: "new_releases", active: "true" }
        },
        [
          _c("p", [
            _vm._v(
              "To do some action when the user approves or confirms we have the property accept:"
            ),
            _c("code", [_vm._v("myFunctionAccept")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "danger", type: "gradient" },
              on: {
                click: function($event) {
                  return _vm.openConfirm()
                }
              }
            },
            [_vm._v("Delete Image")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n<template>\n  <vs-button @click=\"openConfirm()\" color=\"danger\" type=\"gradient\">Delete Image</vs-button>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeConfirm: false\n  }),\n  methods: {\n    openConfirm() {\n      this.$vs.dialog({\n        type: 'confirm',\n        color: 'danger',\n        title: `Confirm`,\n        text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',\n        accept: this.acceptAlert\n      })\n    },\n    acceptAlert() {\n      this.$vs.notify({\n        color: 'danger',\n        title: 'Deleted image',\n        text: 'The selected image was successfully deleted'\n      })\n    },\n  }\n}\n</script>\n        "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=template&id=37baa202&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=template&id=37baa202& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Prompt", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "To add a dialog of type prompt we have a global function a completely independent component "
        ),
        _c("code", [_vm._v("vs-prompt")]),
        _vm._v(
          ". This allows more flexibility with the input and ability to add any type of input and components"
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-3" },
        [
          _c("span", [
            _vm._v(
              "The properties of the component are equivalent to those of the global function only with the vs before each property something like"
            )
          ]),
          _vm._v(" "),
          _c("vx-list", {
            attrs: { list: ["function: color", "component = vsColor"] }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment" },
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "border" },
              on: {
                click: function($event) {
                  _vm.activePrompt = true
                }
              }
            },
            [_vm._v("Run prompt")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "border" },
              on: {
                click: function($event) {
                  _vm.activePrompt2 = true
                }
              }
            },
            [_vm._v("Run prompt inputs")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "op-block" }, [
            _vm._v(
              "Security Code: " + _vm._s(_vm.val == null ? "null" : _vm.val)
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "op-block" }, [
            _vm._v(
              "\n        Name: " +
                _vm._s(_vm.valMultipe.value1) +
                " |\n        Last Name: " +
                _vm._s(_vm.valMultipe.value2) +
                "\n      "
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: { active: _vm.activePrompt },
          on: {
            cancel: function($event) {
              _vm.val = ""
            },
            accept: _vm.acceptAlert,
            close: _vm.close,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _c("span", [_vm._v("Enter the security code")]),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-3 w-full",
                attrs: { placeholder: "Code", "vs-placeholder": "Code" },
                model: {
                  value: _vm.val,
                  callback: function($$v) {
                    _vm.val = $$v
                  },
                  expression: "val"
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: { "is-valid": _vm.validName, active: _vm.activePrompt2 },
          on: {
            cancel: _vm.clearValMultiple,
            accept: _vm.acceptAlert,
            close: _vm.close,
            "update:active": function($event) {
              _vm.activePrompt2 = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _vm._v("\n        Enter your first and last name to "),
              _c("b", [_vm._v("continue")]),
              _vm._v(".\n      "),
              _c("vs-input", {
                staticClass: "mt-4 mb-2 w-full",
                attrs: { placeholder: "Name" },
                model: {
                  value: _vm.valMultipe.value1,
                  callback: function($$v) {
                    _vm.$set(_vm.valMultipe, "value1", $$v)
                  },
                  expression: "valMultipe.value1"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { placeholder: "Last Name" },
                model: {
                  value: _vm.valMultipe.value2,
                  callback: function($$v) {
                    _vm.$set(_vm.valMultipe, "value2", $$v)
                  },
                  expression: "valMultipe.value2"
                }
              }),
              _vm._v(" "),
              _c(
                "vs-alert",
                {
                  staticClass: "mt-4",
                  attrs: {
                    active: !_vm.validName,
                    color: "danger",
                    "vs-icon": "new_releases"
                  }
                },
                [
                  _vm._v(
                    "\n        Fields can not be empty please enter the data\n      "
                  )
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n    <div class="demo-alignment">\n      <vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>\n      <vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>\n      <div class="op-block">Security Code: ' +
            _vm._s("{{ val == null ? 'null' : val }}") +
            ' </div>\n      <div class="op-block">\n        Name: ' +
            _vm._s("{{ valMultipe.value1 }}") +
            " | Last Name: " +
            _vm._s("{{ valMultipe.value2 }}") +
            '\n      </div>\n\n    </div>\n\n    <vs-prompt\n      @cancel="val=\'\'"\n      @accept="acceptAlert"\n      @close="close"\n      :active.sync="activePrompt">\n      <div class="con-exemple-prompt">\n        <span>Enter the security code</span>\n      <vs-input placeholder="Code" vs-placeholder="Code" v-model="val" class="mt-3 w-full" />\n      </div>\n    </vs-prompt>\n\n    <vs-prompt\n      @cancel="clearValMultiple"\n      @accept="acceptAlert"\n      @close="close"\n      :is-valid="validName"\n      :active.sync="activePrompt2">\n      <div class="con-exemple-prompt">\n        Enter your first and last name to <b>continue</b>.\n      <vs-input placeholder="Name" v-model="valMultipe.value1" class="mt-4 mb-2 w-full" />\n      <vs-input placeholder="Last Name" v-model="valMultipe.value2" class="w-full" />\n\n      <vs-alert :vs-active="!validName" color="danger" vs-icon="new_releases" >\n        Fields can not be empty please enter the data\n      </vs-alert>\n      </div>\n    </vs-prompt>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      activePrompt:false,\n      activePrompt2:false,\n      val:\'\',\n      valMultipe:{\n        value1:\'\',\n        value2:\'\'\n      },\n    }\n  },\n  computed:{\n    validName(){\n      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)\n    }\n  },\n  methods:{\n    acceptAlert(){\n      this.$vs.notify({\n        color:\'success\',\n        title:\'Accept Selected\',\n        text:\'Lorem ipsum dolor sit amet, consectetur\'\n      })\n    },\n    close(){\n      this.$vs.notify({\n        color:\'danger\',\n        title:\'Closed\',\n        text:\'You close a dialog!\'\n      })\n    },\n    clearValMultiple() {\n      this.valMultipe.value1 = "";\n      this.valMultipe.value2 = "";\n    }\n  }\n}\n</script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialogs_vue_vue_type_template_id_87881c8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialogs.vue?vue&type=template&id=87881c8a& */ "./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=template&id=87881c8a&");
/* harmony import */ var _Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialogs.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialogs_vue_vue_type_template_id_87881c8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialogs_vue_vue_type_template_id_87881c8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/dialogs/Dialogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=template&id=87881c8a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=template&id=87881c8a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_template_id_87881c8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialogs.vue?vue&type=template&id=87881c8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/Dialogs.vue?vue&type=template&id=87881c8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_template_id_87881c8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialogs_vue_vue_type_template_id_87881c8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogsAlert_vue_vue_type_template_id_1f8be6de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogsAlert.vue?vue&type=template&id=1f8be6de& */ "./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=template&id=1f8be6de&");
/* harmony import */ var _DialogsAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogsAlert.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogsAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogsAlert_vue_vue_type_template_id_1f8be6de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DialogsAlert_vue_vue_type_template_id_1f8be6de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogsAlert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=template&id=1f8be6de&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=template&id=1f8be6de& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsAlert_vue_vue_type_template_id_1f8be6de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogsAlert.vue?vue&type=template&id=1f8be6de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsAlert.vue?vue&type=template&id=1f8be6de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsAlert_vue_vue_type_template_id_1f8be6de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsAlert_vue_vue_type_template_id_1f8be6de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogsConfirm_vue_vue_type_template_id_55eee4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogsConfirm.vue?vue&type=template&id=55eee4b5& */ "./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=template&id=55eee4b5&");
/* harmony import */ var _DialogsConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogsConfirm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogsConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogsConfirm_vue_vue_type_template_id_55eee4b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DialogsConfirm_vue_vue_type_template_id_55eee4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogsConfirm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=template&id=55eee4b5&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=template&id=55eee4b5& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsConfirm_vue_vue_type_template_id_55eee4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogsConfirm.vue?vue&type=template&id=55eee4b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsConfirm.vue?vue&type=template&id=55eee4b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsConfirm_vue_vue_type_template_id_55eee4b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsConfirm_vue_vue_type_template_id_55eee4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogsPrompt_vue_vue_type_template_id_37baa202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogsPrompt.vue?vue&type=template&id=37baa202& */ "./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=template&id=37baa202&");
/* harmony import */ var _DialogsPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogsPrompt.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogsPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogsPrompt_vue_vue_type_template_id_37baa202___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DialogsPrompt_vue_vue_type_template_id_37baa202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogsPrompt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsPrompt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=template&id=37baa202&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=template&id=37baa202& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsPrompt_vue_vue_type_template_id_37baa202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogsPrompt.vue?vue&type=template&id=37baa202& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/dialogs/DialogsPrompt.vue?vue&type=template&id=37baa202&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsPrompt_vue_vue_type_template_id_37baa202___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogsPrompt_vue_vue_type_template_id_37baa202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);