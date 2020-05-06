(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarDefault_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarDefault.vue */ "./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue");
/* harmony import */ var _AvatarSize_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarSize.vue */ "./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue");
/* harmony import */ var _AvatarColor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvatarColor.vue */ "./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue");
/* harmony import */ var _AvatarWithBadge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarWithBadge.vue */ "./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue");
/* harmony import */ var _AvatarIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarIcon.vue */ "./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue");
//
//
//
//
//
//
//
//
//
//
//
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
    AvatarDefault: _AvatarDefault_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AvatarSize: _AvatarSize_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AvatarColor: _AvatarColor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AvatarWithBadge: _AvatarWithBadge_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AvatarIcon: _AvatarIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      badge1: 2,
      badge2: 10
    };
  },
  methods: {
    increment: function increment() {
      this.badge1++;
      this.badge2++;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=template&id=a4dc9cfa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=template&id=a4dc9cfa& ***!
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
    "div",
    { attrs: { id: "avatar-demo" } },
    [
      _c("avatar-default"),
      _vm._v(" "),
      _c("avatar-size"),
      _vm._v(" "),
      _c("avatar-color"),
      _vm._v(" "),
      _c("avatar-with-badge"),
      _vm._v(" "),
      _c("avatar-icon")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue?vue&type=template&id=c7ab9760&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue?vue&type=template&id=c7ab9760& ***!
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
    { attrs: { title: "Color", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("You can change the Avatar's color by using the property "),
        _c("code", [_vm._v("color")]),
        _vm._v(
          ". If needed you could also change the text's color with the property "
        ),
        _c("code", [_vm._v("text-color")])
      ]),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mt-5",
          attrs: { color: "primary", icon: "new_releases", active: "true" }
        },
        [
          _c("span", [
            _vm._v(
              "If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is "
            ),
            _c("code", [_vm._v("Luis Daniel")]),
            _vm._v(
              " and only the letters LD will be shown if the word contains spaces the initial of each one is added."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment mt-5" },
        [
          _c("vs-avatar", { attrs: { color: "primary", text: "primary" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { color: "success", text: "success" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { color: "danger", text: "danger" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { color: "warning", text: "warning" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { color: "dark", text: "dark" } }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: { color: "rgb(200, 21, 129)", text: "RGB" }
          }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { color: "#18cd5b", text: "HEX" } }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: {
              color: "#26302a",
              "text-color": "rgb(246, 190, 16)",
              text: "HEX RGB"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-avatar color="primary" text="primary"/>\n<vs-avatar color="success" text="success"/>\n<vs-avatar color="danger" text="danger"/>\n<vs-avatar color="warning" text="warning"/>\n<vs-avatar color="dark" text="dark"/>\n<vs-avatar color="rgb(200, 21, 129)" text="RGB"/>\n<vs-avatar color="#18cd5b" text="HEX"/>\n<vs-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue?vue&type=template&id=24cc9aee&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue?vue&type=template&id=24cc9aee& ***!
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
    { attrs: { title: "Default", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "Often you need to add an user's avatar to your app. In order to make this we have the component "
        ),
        _c("code", [_vm._v("vs-avatar")])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("To add an internal text value such as "),
        _c("code", [_vm._v("Luis")]),
        _vm._v(" use the "),
        _c("code", [_vm._v("text")]),
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
          _c("span", [
            _vm._v(
              "If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is "
            ),
            _c("code", [_vm._v("Luis Daniel")]),
            _vm._v(
              " and only the letters LD will be shown if the word contains spaces the initial of each one is added."
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment mt-5" },
        [
          _c("vs-avatar"),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { text: "Luis Daniel" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { text: "Luisd" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { src: "https://i.imgur.com/ezM6SJ5.png" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-avatar />\n<vs-avatar text="Luis Daniel"/>\n<vs-avatar text="Luisd"/>\n<vs-avatar src="https://i.imgur.com/ezM6SJ5.png"/>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue?vue&type=template&id=4089001c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue?vue&type=template&id=4089001c& ***!
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
    { attrs: { title: "Icon", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v("You can change the main icon of the Avatar with the property "),
        _c("code", [_vm._v("icon")])
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
            _vm._v("Vuesax uses the "),
            _c("strong", [_vm._v("Google Material Icons")]),
            _vm._v(
              " font library by default. For a list of all available icons, visit the official "
            ),
            _c(
              "a",
              {
                attrs: { href: "https://material.io/icons/", target: "_blank" }
              },
              [_vm._v("Material Icons page")]
            ),
            _vm._v(
              ". Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("This icon is only displayed when there is no property as "),
            _c("code", [_vm._v("text")]),
            _vm._v(" or "),
            _c("code", [_vm._v("src")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment mt-5" },
        [
          _c("vs-avatar", {
            attrs: { "icon-pack": "feather", icon: "icon-user" }
          }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: {
              color: "primary",
              "icon-pack": "feather",
              icon: "icon-calendar"
            }
          }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: {
              color: "success",
              "icon-pack": "feather",
              icon: "icon-inbox"
            }
          }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: {
              color: "danger",
              "icon-pack": "feather",
              icon: "icon-camera"
            }
          }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: {
              color: "warning",
              "icon-pack": "feather",
              icon: "icon-award"
            }
          }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: { color: "dark", "icon-pack": "feather", icon: "icon-code" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-avatar icon-pack="feather" icon="icon-user" />\n\n<vs-avatar color="primary" icon-pack="feather" icon="icon-calendar" />\n\n<vs-avatar color="success" icon-pack="feather" icon="icon-inbox" />\n\n<vs-avatar color="danger" icon-pack="feather" icon="icon-camera" />\n\n<vs-avatar color="warning" icon-pack="feather" icon="icon-award" />\n\n<vs-avatar color="dark" icon-pack="feather" icon="icon-code" />\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue?vue&type=template&id=c1fec0b8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue?vue&type=template&id=c1fec0b8& ***!
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
    { attrs: { title: "size", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "You can change the size of the Avatar with the property size the allowed values are:"
        )
      ]),
      _vm._v(" "),
      _c("vx-list", { attrs: { list: ["large", "small", "Custom measures"] } }),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          staticClass: "mb-1",
          attrs: { color: "primary", icon: "new_releases", active: "true" }
        },
        [
          _c("span", [
            _vm._v("In the example the last avatar has the custom size of "),
            _c("code", [_vm._v("70px")]),
            _vm._v(" the added value will be the avatar's "),
            _c("strong", [_vm._v("height")]),
            _vm._v(" and "),
            _c("strong", [_vm._v("width")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "demo-alignment mt-5" },
        [
          _c("vs-avatar", { attrs: { size: "small" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { text: "Luis Daniel" } }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: { size: "large", src: "https://i.imgur.com/ezM6SJ5.png" }
          }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: { size: "70px", src: "https://i.imgur.com/ezM6SJ5.png" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<vs-avatar size="small" />\n<vs-avatar text="Luis Daniel"/>\n<vs-avatar size="large" src="https://i.imgur.com/ezM6SJ5.png"/>\n<vs-avatar size="70px" src="https://i.imgur.com/ezM6SJ5.png"/>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=template&id=4ad1082c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=template&id=4ad1082c& ***!
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
    { attrs: { title: "With Badge", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "You can add a notification label to the avatar, either a reference point or a number with the property "
        ),
        _c("code", [_vm._v("badge")])
      ]),
      _vm._v(" "),
      _c(
        "p",
        [
          _vm._v(
            "You could also change the badge's color by using the property "
          ),
          _c("code", [_vm._v("badge-color")]),
          _vm._v(". You are able to use the "),
          _c("router-link", { attrs: { to: "/ui-elements/colors" } }, [
            _vm._v("Main Colors")
          ]),
          _vm._v(" or "),
          _c("strong", [_vm._v("RGB")]),
          _vm._v(" and "),
          _c("strong", [_vm._v("HEX")]),
          _vm._v(" colors.")
        ],
        1
      ),
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
        { staticClass: "demo-alignment mt-5" },
        [
          _c("vs-avatar", { attrs: { badge: "" } }),
          _vm._v(" "),
          _c("vs-avatar", { attrs: { badge: _vm.badge1, text: "Luisdaniel" } }),
          _vm._v(" "),
          _c("vs-avatar", {
            attrs: {
              "badge-color": "rgb(140, 23, 164)",
              badge: _vm.badge2,
              text: "Luisd"
            }
          }),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "filled" },
              on: { click: _vm.increment }
            },
            [_vm._v(" Increment Badge counter ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<template>\n  <vs-avatar badge />\n  <vs-avatar :badge="badge1" text="Luisdaniel" />\n  <vs-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Luisd" />\n  <vs-button color="primary" type="filled" @click="increment"> Increment Badge counter </vs-button>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    badge1: 2,\n    badge2: 10,\n  }),\n  methods: {\n    increment() {\n      this.badge1++\n      this.badge2++\n    }\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/Avatar.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/Avatar.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar_vue_vue_type_template_id_a4dc9cfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=a4dc9cfa& */ "./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=template&id=a4dc9cfa&");
/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatar_vue_vue_type_template_id_a4dc9cfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatar_vue_vue_type_template_id_a4dc9cfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/avatar/Avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=template&id=a4dc9cfa&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=template&id=a4dc9cfa& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_a4dc9cfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=a4dc9cfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/Avatar.vue?vue&type=template&id=a4dc9cfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_a4dc9cfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_a4dc9cfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarColor_vue_vue_type_template_id_c7ab9760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarColor.vue?vue&type=template&id=c7ab9760& */ "./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue?vue&type=template&id=c7ab9760&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AvatarColor_vue_vue_type_template_id_c7ab9760___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AvatarColor_vue_vue_type_template_id_c7ab9760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/avatar/AvatarColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue?vue&type=template&id=c7ab9760&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue?vue&type=template&id=c7ab9760& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarColor_vue_vue_type_template_id_c7ab9760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarColor.vue?vue&type=template&id=c7ab9760& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarColor.vue?vue&type=template&id=c7ab9760&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarColor_vue_vue_type_template_id_c7ab9760___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarColor_vue_vue_type_template_id_c7ab9760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarDefault_vue_vue_type_template_id_24cc9aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarDefault.vue?vue&type=template&id=24cc9aee& */ "./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue?vue&type=template&id=24cc9aee&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AvatarDefault_vue_vue_type_template_id_24cc9aee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AvatarDefault_vue_vue_type_template_id_24cc9aee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue?vue&type=template&id=24cc9aee&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue?vue&type=template&id=24cc9aee& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarDefault_vue_vue_type_template_id_24cc9aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarDefault.vue?vue&type=template&id=24cc9aee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarDefault.vue?vue&type=template&id=24cc9aee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarDefault_vue_vue_type_template_id_24cc9aee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarDefault_vue_vue_type_template_id_24cc9aee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarIcon_vue_vue_type_template_id_4089001c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarIcon.vue?vue&type=template&id=4089001c& */ "./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue?vue&type=template&id=4089001c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AvatarIcon_vue_vue_type_template_id_4089001c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AvatarIcon_vue_vue_type_template_id_4089001c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue?vue&type=template&id=4089001c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue?vue&type=template&id=4089001c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarIcon_vue_vue_type_template_id_4089001c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarIcon.vue?vue&type=template&id=4089001c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarIcon.vue?vue&type=template&id=4089001c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarIcon_vue_vue_type_template_id_4089001c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarIcon_vue_vue_type_template_id_4089001c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarSize_vue_vue_type_template_id_c1fec0b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarSize.vue?vue&type=template&id=c1fec0b8& */ "./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue?vue&type=template&id=c1fec0b8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AvatarSize_vue_vue_type_template_id_c1fec0b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AvatarSize_vue_vue_type_template_id_c1fec0b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/avatar/AvatarSize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue?vue&type=template&id=c1fec0b8&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue?vue&type=template&id=c1fec0b8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSize_vue_vue_type_template_id_c1fec0b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarSize.vue?vue&type=template&id=c1fec0b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarSize.vue?vue&type=template&id=c1fec0b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSize_vue_vue_type_template_id_c1fec0b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSize_vue_vue_type_template_id_c1fec0b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarWithBadge_vue_vue_type_template_id_4ad1082c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarWithBadge.vue?vue&type=template&id=4ad1082c& */ "./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=template&id=4ad1082c&");
/* harmony import */ var _AvatarWithBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarWithBadge.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AvatarWithBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AvatarWithBadge_vue_vue_type_template_id_4ad1082c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AvatarWithBadge_vue_vue_type_template_id_4ad1082c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarWithBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarWithBadge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarWithBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=template&id=4ad1082c&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=template&id=4ad1082c& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarWithBadge_vue_vue_type_template_id_4ad1082c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AvatarWithBadge.vue?vue&type=template&id=4ad1082c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/vuesax/avatar/AvatarWithBadge.vue?vue&type=template&id=4ad1082c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarWithBadge_vue_vue_type_template_id_4ad1082c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarWithBadge_vue_vue_type_template_id_4ad1082c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);