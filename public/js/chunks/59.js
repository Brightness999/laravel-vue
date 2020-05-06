(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEditTabAccount_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEditTabAccount.vue */ "./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue");
/* harmony import */ var _UserEditTabInformation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEditTabInformation.vue */ "./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue");
/* harmony import */ var _UserEditTabSocial_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEditTabSocial.vue */ "./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue");
/* harmony import */ var _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/user-management/moduleUserManagement.js */ "./resources/js/src/store/user-management/moduleUserManagement.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // Store Module


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserEditTabAccount: _UserEditTabAccount_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserEditTabInformation: _UserEditTabInformation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserEditTabSocial: _UserEditTabSocial_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed
         Please check it's watcher
      */
      activeTab: 0
    };
  },
  watch: {
    activeTab: function activeTab() {
      this.fetch_user_data(this.$route.params.userId);
    }
  },
  methods: {
    fetch_user_data: function fetch_user_data(userId) {
      var _this = this;

      this.$store.dispatch('userManagement/fetchUser', userId).then(function (res) {
        _this.user_data = res.data;
      }).catch(function (err) {
        if (err.response.status === 404) {
          _this.user_not_found = true;
          return;
        }

        console.error(err);
      });
    }
  },
  created: function created() {
    // Register Module UserManagement Module
    if (!_store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered) {
      this.$store.registerModule('userManagement', _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      _store_user_management_moduleUserManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered = true;
    }

    this.fetch_user_data(this.$route.params.userId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      statusOptions: [{
        label: 'Active',
        value: 'active'
      }, {
        label: 'Blocked',
        value: 'blocked'
      }, {
        label: 'Deactivated',
        value: 'deactivated'
      }],
      roleOptions: [{
        label: 'Admin',
        value: 'admin'
      }, {
        label: 'User',
        value: 'user'
      }, {
        label: 'Staff',
        value: 'staff'
      }]
    };
  },
  computed: {
    status_local: {
      get: function get() {
        return {
          label: this.capitalize(this.data_local.status),
          value: this.data_local.status
        };
      },
      set: function set(obj) {
        this.data_local.status = obj.value;
      }
    },
    role_local: {
      get: function get() {
        return {
          label: this.capitalize(this.data_local.role),
          value: this.data_local.role
        };
      },
      set: function set(obj) {
        this.data_local.role = obj.value;
      }
    },
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    capitalize: function capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    },
    save_changes: function save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data: function reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data));
    },
    update_avatar: function update_avatar() {// You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      langOptions: [{
        label: 'English',
        value: 'english'
      }, {
        label: 'Spanish',
        value: 'spanish'
      }, {
        label: 'French',
        value: 'french'
      }, {
        label: 'Russian',
        value: 'russian'
      }, {
        label: 'German',
        value: 'german'
      }, {
        label: 'Arabic',
        value: 'arabic'
      }, {
        label: 'Sanskrit',
        value: 'sanskrit'
      }]
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data: function reset_data() {
      this.data_local = Object.assign({}, this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data))
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  methods: {
    save_changes: function save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return; // Here will go your API call for updating data (Also remvoe eslint-disable)
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data: function reset_data() {
      this.data_local = Object.assign({}, this.data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=template&id=480dbf29&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=template&id=480dbf29& ***!
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
    { attrs: { id: "page-user-edit" } },
    [
      _c(
        "vs-alert",
        {
          attrs: {
            color: "danger",
            title: "User Not Found",
            active: _vm.user_not_found
          },
          on: {
            "update:active": function($event) {
              _vm.user_not_found = $event
            }
          }
        },
        [
          _c("span", [
            _vm._v(
              "User record with id: " +
                _vm._s(_vm.$route.params.userId) +
                " not found. "
            )
          ]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("span", [_vm._v("Check ")]),
              _c(
                "router-link",
                {
                  staticClass: "text-inherit underline",
                  attrs: { to: { name: "page-user-list" } }
                },
                [_vm._v("All Users")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.user_data
        ? _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "tabs-container px-6 pt-6",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "vs-tabs",
                  {
                    staticClass: "tab-action-btn-fill-conatiner",
                    model: {
                      value: _vm.activeTab,
                      callback: function($$v) {
                        _vm.activeTab = $$v
                      },
                      expression: "activeTab"
                    }
                  },
                  [
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Account",
                          "icon-pack": "feather",
                          icon: "icon-user"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("user-edit-tab-account", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.user_data }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Information",
                          "icon-pack": "feather",
                          icon: "icon-info"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("user-edit-tab-information", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.user_data }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      {
                        attrs: {
                          label: "Social",
                          "icon-pack": "feather",
                          icon: "icon-share-2"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tab-text" },
                          [
                            _c("user-edit-tab-social", {
                              staticClass: "mt-4",
                              attrs: { data: _vm.user_data }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=template&id=12873ee1&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=template&id=12873ee1& ***!
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
    "div",
    { attrs: { id: "user-edit-tab-info" } },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full" }, [
          _c("div", { staticClass: "flex items-start flex-col sm:flex-row" }, [
            _c("img", {
              staticClass: "mr-8 rounded h-24 w-24",
              attrs: { src: _vm.data.avatar }
            }),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "p",
                  { staticClass: "text-lg font-medium mb-2 mt-4 sm:mt-0" },
                  [_vm._v(_vm._s(_vm.data.name))]
                ),
                _vm._v(" "),
                _c("input", {
                  ref: "update_avatar_input",
                  staticClass: "hidden",
                  attrs: { type: "file", accept: "image/*" },
                  on: { change: _vm.update_avatar }
                }),
                _vm._v(" "),
                _c("vs-button", { staticClass: "mr-4 mb-4" }, [
                  _vm._v("Change Avatar")
                ]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  { attrs: { type: "border", color: "danger" } },
                  [_vm._v("Remove Avatar")]
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
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
                  value: "required|alpha_num",
                  expression: "'required|alpha_num'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Username", name: "username" },
              model: {
                value: _vm.data_local.username,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "username", $$v)
                },
                expression: "data_local.username"
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
            ),
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
              attrs: { label: "Name", name: "name" },
              model: {
                value: _vm.data_local.name,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "name", $$v)
                },
                expression: "data_local.name"
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
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|email",
                  expression: "'required|email'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Email", type: "email", name: "email" },
              model: {
                value: _vm.data_local.email,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "email", $$v)
                },
                expression: "data_local.email"
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
          { staticClass: "vx-col md:w-1/2 w-full" },
          [
            _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c("label", { staticClass: "vs-input--label" }, [
                  _vm._v("Status")
                ]),
                _vm._v(" "),
                _c("v-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: {
                    clearable: false,
                    options: _vm.statusOptions,
                    name: "status",
                    dir: _vm.$vs.rtl ? "rtl" : "ltr"
                  },
                  model: {
                    value: _vm.status_local,
                    callback: function($$v) {
                      _vm.status_local = $$v
                    },
                    expression: "status_local"
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
                        value: _vm.errors.has("status"),
                        expression: "errors.has('status')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("status")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c("label", { staticClass: "vs-input--label" }, [
                  _vm._v("Role")
                ]),
                _vm._v(" "),
                _c("v-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: {
                    clearable: false,
                    options: _vm.roleOptions,
                    name: "role",
                    dir: _vm.$vs.rtl ? "rtl" : "ltr"
                  },
                  model: {
                    value: _vm.role_local,
                    callback: function($$v) {
                      _vm.role_local = $$v
                    },
                    expression: "role_local"
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
                        value: _vm.errors.has("role"),
                        expression: "errors.has('role')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("role")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "alpha_spaces",
                  expression: "'alpha_spaces'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Company", name: "company" },
              model: {
                value: _vm.data_local.company,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "company", $$v)
                },
                expression: "data_local.company"
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
                    value: _vm.errors.has("company"),
                    expression: "errors.has('company')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("company")))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mt-base",
          attrs: { "no-shadow": "", "card-border": "" }
        },
        [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c(
                  "div",
                  { staticClass: "flex items-end px-3" },
                  [
                    _c("feather-icon", {
                      staticClass: "mr-2",
                      attrs: { svgClasses: "w-6 h-6", icon: "LockIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Permissions")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-divider")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block overflow-x-auto" }, [
            _c(
              "table",
              { staticClass: "w-full" },
              [
                _c(
                  "tr",
                  _vm._l(
                    ["Module", "Read", "Write", "Create", "Delete"],
                    function(heading) {
                      return _c(
                        "th",
                        {
                          key: heading,
                          staticClass:
                            "font-semibold text-base text-left px-3 py-2"
                        },
                        [_vm._v(_vm._s(heading))]
                      )
                    }
                  ),
                  0
                ),
                _vm._v(" "),
                _vm._l(_vm.data_local.permissions, function(val, name) {
                  return _c(
                    "tr",
                    { key: name },
                    [
                      _c("td", { staticClass: "px-3 py-2" }, [
                        _vm._v(_vm._s(name))
                      ]),
                      _vm._v(" "),
                      _vm._l(val, function(permission, name) {
                        return _c(
                          "td",
                          { key: name + permission, staticClass: "px-3 py-2" },
                          [
                            _c("vs-checkbox", {
                              model: {
                                value: val[name],
                                callback: function($$v) {
                                  _vm.$set(val, name, $$v)
                                },
                                expression: "val[name]"
                              }
                            })
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full" }, [
          _c(
            "div",
            { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "ml-auto mt-2",
                  attrs: { disabled: !_vm.validateForm },
                  on: { click: _vm.save_changes }
                },
                [_vm._v("Save Changes")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "ml-4 mt-2",
                  attrs: { type: "border", color: "warning" },
                  on: { click: _vm.reset_data }
                },
                [_vm._v("Reset")]
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=template&id=3634e460&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=template&id=3634e460& ***!
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full md:w-1/2" }, [
        _c(
          "div",
          { staticClass: "flex items-end" },
          [
            _c("feather-icon", {
              staticClass: "mr-2",
              attrs: { icon: "UserIcon", svgClasses: "w-5 h-5" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "leading-none font-medium" }, [
              _vm._v("Personal Information")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c("label", { staticClass: "text-sm" }, [_vm._v("Birth Date")]),
                _vm._v(" "),
                _c("flat-pickr", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: {
                    config: { dateFormat: "d F Y", maxDate: new Date() },
                    name: "dob"
                  },
                  model: {
                    value: _vm.data_local.dob,
                    callback: function($$v) {
                      _vm.$set(_vm.data_local, "dob", $$v)
                    },
                    expression: "data_local.dob"
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
                        value: _vm.errors.has("dob"),
                        expression: "errors.has('dob')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("dob")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: { regex: "^\\+?([0-9]+)$" },
                  expression: "{regex: '^\\\\+?([0-9]+)$' }"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Mobile", name: "mobile" },
              model: {
                value: _vm.data_local.mobile,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "mobile", $$v)
                },
                expression: "data_local.mobile"
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
                    value: _vm.errors.has("mobile"),
                    expression: "errors.has('mobile')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("mobile")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "url:require_protocol",
                  expression: "'url:require_protocol'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: {
                label: "Website",
                name: "website",
                "data-vv-as": "field"
              },
              model: {
                value: _vm.data_local.website,
                callback: function($$v) {
                  _vm.$set(_vm.data_local, "website", $$v)
                },
                expression: "data_local.website"
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
                    value: _vm.errors.has("website"),
                    expression: "errors.has('website')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("website")))]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c("label", { staticClass: "text-sm" }, [_vm._v("Languages")]),
                _vm._v(" "),
                _c("v-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: {
                    multiple: "",
                    closeOnSelect: false,
                    options: _vm.langOptions,
                    name: "lang_known",
                    dir: _vm.$vs.rtl ? "rtl" : "ltr"
                  },
                  model: {
                    value: _vm.data_local.languages_known,
                    callback: function($$v) {
                      _vm.$set(_vm.data_local, "languages_known", $$v)
                    },
                    expression: "data_local.languages_known"
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
                        value: _vm.errors.has("lang_known"),
                        expression: "errors.has('lang_known')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("lang_known")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4" }, [
              _c("label", { staticClass: "text-sm" }, [_vm._v("Gender")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c(
                    "vs-radio",
                    {
                      staticClass: "mr-4",
                      attrs: { "vs-value": "male" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Male")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      staticClass: "mr-4",
                      attrs: { "vs-value": "female" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Female")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-radio",
                    {
                      attrs: { "vs-value": "other" },
                      model: {
                        value: _vm.data_local.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "gender", $$v)
                        },
                        expression: "data_local.gender"
                      }
                    },
                    [_vm._v("Other")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-6" }, [
              _c("label", [_vm._v("Contact Options")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap mt-1" },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mr-4 mb-2",
                      attrs: { "vs-value": "email" },
                      model: {
                        value: _vm.data_local.contact_options,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "contact_options", $$v)
                        },
                        expression: "data_local.contact_options"
                      }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "mr-4 mb-2",
                      attrs: { "vs-value": "message" },
                      model: {
                        value: _vm.data_local.contact_options,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "contact_options", $$v)
                        },
                        expression: "data_local.contact_options"
                      }
                    },
                    [_vm._v("Message")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: " mb-2",
                      attrs: { "vs-value": "Phone" },
                      model: {
                        value: _vm.data_local.contact_options,
                        callback: function($$v) {
                          _vm.$set(_vm.data_local, "contact_options", $$v)
                        },
                        expression: "data_local.contact_options"
                      }
                    },
                    [_vm._v("Phone")]
                  )
                ],
                1
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-full md:w-1/2" }, [
        _c(
          "div",
          { staticClass: "flex items-end md:mt-0 mt-base" },
          [
            _c("feather-icon", {
              staticClass: "mr-2",
              attrs: { icon: "MapPinIcon", svgClasses: "w-5 h-5" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "leading-none font-medium" }, [
              _vm._v("Address")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
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
              staticClass: "w-full mt-4",
              attrs: { label: "Address Line 1", name: "addd_line_1" },
              model: {
                value: _vm.data_local.location.add_line_1,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "add_line_1", $$v)
                },
                expression: "data_local.location.add_line_1"
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
                    value: _vm.errors.has("addd_line_1"),
                    expression: "errors.has('addd_line_1')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("addd_line_1")))]
            ),
            _vm._v(" "),
            _c("vs-input", {
              staticClass: "w-full mt-4",
              attrs: { label: "Address Line 2" },
              model: {
                value: _vm.data_local.location.add_line_2,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "add_line_2", $$v)
                },
                expression: "data_local.location.add_line_2"
              }
            }),
            _vm._v(" "),
            _c("vs-input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|numeric",
                  expression: "'required|numeric'"
                }
              ],
              staticClass: "w-full mt-4",
              attrs: { label: "Post Code", name: "post_code" },
              model: {
                value: _vm.data_local.location.post_code,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "post_code", $$v)
                },
                expression: "data_local.location.post_code"
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
                    value: _vm.errors.has("post_code"),
                    expression: "errors.has('post_code')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("post_code")))]
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
              staticClass: "w-full mt-4",
              attrs: { label: "City", name: "city" },
              model: {
                value: _vm.data_local.location.city,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "city", $$v)
                },
                expression: "data_local.location.city"
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
                    value: _vm.errors.has("city"),
                    expression: "errors.has('city')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("city")))]
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
              staticClass: "w-full mt-4",
              attrs: { label: "State", name: "state" },
              model: {
                value: _vm.data_local.location.state,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "state", $$v)
                },
                expression: "data_local.location.state"
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
                    value: _vm.errors.has("state"),
                    expression: "errors.has('state')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("state")))]
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
              staticClass: "w-full mt-4",
              attrs: { label: "Country", name: "country" },
              model: {
                value: _vm.data_local.location.country,
                callback: function($$v) {
                  _vm.$set(_vm.data_local.location, "country", $$v)
                },
                expression: "data_local.location.country"
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
                    value: _vm.errors.has("country"),
                    expression: "errors.has('country')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("country")))]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=template&id=7d92312e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=template&id=7d92312e& ***!
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
  return _c("div", { attrs: { id: "user-edit-tab-info" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
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
            staticClass: "w-full",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-twitter",
              label: "Twitter",
              "icon-no-border": "",
              name: "twitter"
            },
            model: {
              value: _vm.data_local.social_links.twitter,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "twitter", $$v)
              },
              expression: "data_local.social_links.twitter"
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
                  value: _vm.errors.has("twitter"),
                  expression: "errors.has('twitter')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("twitter")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-facebook",
              label: "Facebook",
              "icon-no-border": "",
              name: "facebook"
            },
            model: {
              value: _vm.data_local.social_links.facebook,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "facebook", $$v)
              },
              expression: "data_local.social_links.facebook"
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
                  value: _vm.errors.has("facebook"),
                  expression: "errors.has('facebook')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("facebook")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-instagram",
              label: "Instagram",
              "icon-no-border": "",
              name: "instagram"
            },
            model: {
              value: _vm.data_local.social_links.instagram,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "instagram", $$v)
              },
              expression: "data_local.social_links.instagram"
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
                  value: _vm.errors.has("instagram"),
                  expression: "errors.has('instagram')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("instagram")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
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
            staticClass: "w-full mt-4 md:mt-0",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-github",
              label: "GitHub",
              "icon-no-border": "",
              name: "github"
            },
            model: {
              value: _vm.data_local.social_links.github,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "github", $$v)
              },
              expression: "data_local.social_links.github"
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
                  value: _vm.errors.has("github"),
                  expression: "errors.has('github')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("github")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-codepen",
              label: "CodePen",
              "icon-no-border": "",
              name: "codepen"
            },
            model: {
              value: _vm.data_local.social_links.codepen,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "codepen", $$v)
              },
              expression: "data_local.social_links.codepen"
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
                  value: _vm.errors.has("codepen"),
                  expression: "errors.has('codepen')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("codepen")))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url:require_protocol",
                expression: "'url:require_protocol'"
              }
            ],
            staticClass: "w-full mt-4",
            attrs: {
              "icon-pack": "feather",
              icon: "icon-slack",
              label: "Slack",
              "icon-no-border": "",
              name: "slack"
            },
            model: {
              value: _vm.data_local.social_links.slack,
              callback: function($$v) {
                _vm.$set(_vm.data_local.social_links, "slack", $$v)
              },
              expression: "data_local.social_links.slack"
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
                  value: _vm.errors.has("slack"),
                  expression: "errors.has('slack')"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.first("slack")))]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
          [
            _c(
              "vs-button",
              {
                staticClass: "ml-auto mt-2",
                attrs: { disabled: !_vm.validateForm },
                on: { click: _vm.save_changes }
              },
              [_vm._v("Save Changes")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "ml-4 mt-2",
                attrs: { type: "border", color: "warning" },
                on: { click: _vm.reset_data }
              },
              [_vm._v("Reset")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagement.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleUserManagementState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleUserManagementState.js */ "./resources/js/src/store/user-management/moduleUserManagementState.js");
/* harmony import */ var _moduleUserManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleUserManagementMutations.js */ "./resources/js/src/store/user-management/moduleUserManagementMutations.js");
/* harmony import */ var _moduleUserManagementActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleUserManagementActions.js */ "./resources/js/src/store/user-management/moduleUserManagementActions.js");
/* harmony import */ var _moduleUserManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleUserManagementGetters.js */ "./resources/js/src/store/user-management/moduleUserManagementGetters.js");
/*=========================================================================================
  File Name: moduleUserManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleUserManagementState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleUserManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleUserManagementActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleUserManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementActions.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementActions.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchUsers: function fetchUsers(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/user-management/users').then(function (response) {
        commit('SET_USERS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchUser: function fetchUser(context, userId) {
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/user-management/users/".concat(userId)).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeRecord: function removeRecord(_ref2, userId) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].delete("/api/user-management/users/".concat(userId)).then(function (response) {
        commit('REMOVE_RECORD', userId);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementGetters.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementGetters.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementMutations.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementMutations.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_USERS: function SET_USERS(state, users) {
    state.users = users;
  },
  REMOVE_RECORD: function REMOVE_RECORD(state, itemId) {
    var userIndex = state.users.findIndex(function (u) {
      return u.id === itemId;
    });
    state.users.splice(userIndex, 1);
  }
});

/***/ }),

/***/ "./resources/js/src/store/user-management/moduleUserManagementState.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/store/user-management/moduleUserManagementState.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  users: []
});

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEdit.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEdit.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEdit_vue_vue_type_template_id_480dbf29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=480dbf29& */ "./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=template&id=480dbf29&");
/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEdit_vue_vue_type_template_id_480dbf29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserEdit_vue_vue_type_template_id_480dbf29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/user/user-edit/UserEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=template&id=480dbf29&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=template&id=480dbf29& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_480dbf29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEdit.vue?vue&type=template&id=480dbf29& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEdit.vue?vue&type=template&id=480dbf29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_480dbf29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_480dbf29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEditTabAccount_vue_vue_type_template_id_12873ee1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEditTabAccount.vue?vue&type=template&id=12873ee1& */ "./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=template&id=12873ee1&");
/* harmony import */ var _UserEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEditTabAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEditTabAccount_vue_vue_type_template_id_12873ee1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserEditTabAccount_vue_vue_type_template_id_12873ee1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditTabAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=template&id=12873ee1&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=template&id=12873ee1& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabAccount_vue_vue_type_template_id_12873ee1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditTabAccount.vue?vue&type=template&id=12873ee1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabAccount.vue?vue&type=template&id=12873ee1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabAccount_vue_vue_type_template_id_12873ee1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabAccount_vue_vue_type_template_id_12873ee1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEditTabInformation_vue_vue_type_template_id_3634e460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEditTabInformation.vue?vue&type=template&id=3634e460& */ "./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=template&id=3634e460&");
/* harmony import */ var _UserEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEditTabInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEditTabInformation_vue_vue_type_template_id_3634e460___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserEditTabInformation_vue_vue_type_template_id_3634e460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditTabInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=template&id=3634e460&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=template&id=3634e460& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabInformation_vue_vue_type_template_id_3634e460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditTabInformation.vue?vue&type=template&id=3634e460& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabInformation.vue?vue&type=template&id=3634e460&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabInformation_vue_vue_type_template_id_3634e460___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabInformation_vue_vue_type_template_id_3634e460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEditTabSocial_vue_vue_type_template_id_7d92312e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEditTabSocial.vue?vue&type=template&id=7d92312e& */ "./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=template&id=7d92312e&");
/* harmony import */ var _UserEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEditTabSocial.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEditTabSocial_vue_vue_type_template_id_7d92312e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserEditTabSocial_vue_vue_type_template_id_7d92312e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditTabSocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=template&id=7d92312e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=template&id=7d92312e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabSocial_vue_vue_type_template_id_7d92312e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditTabSocial.vue?vue&type=template&id=7d92312e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/user/user-edit/UserEditTabSocial.vue?vue&type=template&id=7d92312e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabSocial_vue_vue_type_template_id_7d92312e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditTabSocial_vue_vue_type_template_id_7d92312e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);