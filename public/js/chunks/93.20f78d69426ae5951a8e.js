(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{yqhL:function(e,t,o){"use strict";o.r(t);var l=o("KHd+"),a={data:function(){return{active1:!0,active2:!0}}},n={data:function(){return{value1:""}},computed:{inputValid:function(){return!/^\d+$/.test(this.value1)}}},i={components:{AlertDefault:Object(l.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Default","code-toggler":""}},[o("p",[e._v("To add a notification use the "),o("code",[e._v("vs-alert")]),e._v(" component. For the main parameter, pass the active property that determines if the "),o("code",[e._v("alert")]),e._v(" is visible or not")]),e._v(" "),o("vs-alert",{staticClass:"mt-5",attrs:{active:"true"}},[e._v("\n        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        ")]),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<vs-alert active="true">\n    Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        ')])],2)}),[],!1,null,null,null).exports,AlertTitle:Object(l.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Title","code-toggler":""}},[t("p",[this._v("Add a title to the alert with the property "),t("code",[this._v("title")])]),this._v(" "),t("vs-alert",{staticClass:"mt-5 text-warning",attrs:{title:"Lorem ipsum dolor sit amet",color:"rgb(231, 154, 23)",active:"true"}},[this._v("\n        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        ")]),this._v(" "),t("template",{slot:"codeContainer"},[this._v('\n<vs-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true" class="mt-5 text-warning">\n    Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        ')])],2)}),[],!1,null,null,null).exports,AlertColor:Object(l.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Color","code-toggler":""}},[o("p",[e._v("You can change the color of the alert with the property "),o("code",[e._v("color")]),e._v(". You are able to use the Main Colors or "),o("strong",[e._v("RGB")]),e._v(" and "),o("strong",[e._v("HEX")]),e._v(" colors")]),e._v(" "),o("vs-alert",{staticClass:"my-5",attrs:{icon:"warning",active:"true",color:"warning"}},[o("span",[e._v("Only "),o("strong",[e._v("RGB")]),e._v(" and "),o("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),e._v(" "),o("vs-alert",{staticClass:"mt-3",attrs:{color:"success",title:"Success",active:"true"}},[e._v("\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        ")]),e._v(" "),o("vs-alert",{staticClass:"mt-3",attrs:{color:"danger",title:"Danger",active:"true"}},[e._v("\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        ")]),e._v(" "),o("vs-alert",{staticClass:"mt-3",attrs:{color:"warning",title:"Warning",active:"true"}},[e._v("\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        ")]),e._v(" "),o("vs-alert",{staticClass:"mt-3",attrs:{color:"dark",title:"Dark",active:"true"}},[e._v("\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        ")]),e._v(" "),o("vs-alert",{staticClass:"mt-3",attrs:{color:"rgb(41, 147, 138)",title:"RGB",active:"true"}},[e._v("\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        ")]),e._v(" "),o("vs-alert",{staticClass:"mt-3",attrs:{color:"#842993",title:"HEX",active:"true"}},[e._v("\n            Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n        ")]),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<vs-alert color="success" title="Success" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="danger" title="Danger" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="warning" title="Warning" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="dark" title="Dark" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="rgb(41, 147, 138)" title="RGB" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n\n<vs-alert color="#842993" title="HEX" active="true">\n  Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.\n</vs-alert>\n        ')])],2)}),[],!1,null,null,null).exports,AlertClosable:Object(l.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Closable","code-toggler":""}},[o("p",{staticClass:"mb-2"},[e._v("You can show and hide the alert by means of "),o("code",[e._v("active.sync")]),e._v(" and a Boolean bind as value")]),e._v(" "),o("p",[e._v("The property to determine if the alert can be closed is "),o("code",[e._v("closable")])]),e._v(" "),o("vs-button",{staticClass:"mt-5 mr-4 mb-4",attrs:{color:"primary",type:"filled"},on:{click:function(t){e.active1=!e.active1}}},[e._v(e._s(e.active1?"Close Alert":"Open Alert")+" 1")]),e._v(" "),o("vs-button",{staticClass:"mb-5",attrs:{color:"primary",type:"filled"},on:{click:function(t){e.active2=!e.active2}}},[e._v(e._s(e.active2?"Close Alert":"Open Alert")+" 2")]),e._v(" "),o("vs-alert",{attrs:{active:e.active1,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(t){e.active1=t}}},[e._v("\n            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        ")]),e._v(" "),o("p",{staticClass:"my-5"},[e._v("You can also change the icon used for the close buton on the alerts")]),e._v(" "),o("div",{staticClass:"mt-5"}),e._v(" "),o("vs-alert",{attrs:{active:e.active2,closable:"","close-icon":"icon-x-circle","icon-pack":"feather"},on:{"update:active":function(t){e.active2=t}}},[e._v("\n            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        ")]),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<vs-button @click="active1=!active1">'+e._s(e.active1?"Close Alert":"Open Alert")+' 1</vs-button>\n<vs-button @click="active2=!active2">'+e._s(e.active2?"Close Alert":"Open Alert")+' 2</vs-button>\n\n<vs-alert :active.sync="active1" closable icon-pack="feather" close-icon="icon-x">\n  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n\n<vs-alert :active.sync="active2" closable close-icon="icon-x-circle" icon-pack="feather">\n  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        ')])],2)}),[],!1,null,null,null).exports,AlertIcon:Object(l.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Icon","code-toggler":""}},[o("p",[e._v("You can add to the alert a descriptive icon with the property "),o("code",[e._v("icon")]),e._v(" and as a value the icon name of the icon in the currently selected icon pack. (Default is "),o("a",{attrs:{href:"https://material.io/icons/",target:"_blank",rel:"nofollow"}},[e._v("Material Icons")]),e._v(")")]),e._v(" "),o("vs-alert",{staticClass:"mt-5",attrs:{active:"true","icon-pack":"feather",icon:"icon-star"}},[e._v("\n            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n        ")]),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">\n  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.\n</vs-alert>\n        ')])],2)}),[],!1,null,null,null).exports,AlertExample:Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Example","code-toggler":""}},[o("p",[e._v("An example would be to have an input and when a condition is met show the "),o("strong",[e._v("vs-alert")])]),e._v(" "),o("vs-input",{staticClass:"my-4",attrs:{label:"Enter only numbers",placeholder:"0123456789"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),o("vs-alert",{attrs:{active:e.inputValid,color:"danger","icon-pack":"feather",icon:"icon-info"}},[o("span",[e._v("the value is "),o("b",[e._v("invalid")]),e._v(" you can only enter numbers")])]),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-input label="Enter only numbers" placeholder="0123456789" v-model="value1" class="my-4" />\n  <vs-alert :active="inputValid" color="danger" icon-pack="feather" icon="icon-info">\n    <span>the value is <b>invalid</b> you can only enter numbers</span>\n  </vs-alert>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: \'\',\n    }\n  },\n  computed: {\n    inputValid() {\n      if (/^\\d+$/.test(this.value1)) {\n        return false\n      } else {\n        return true\n      }\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},c=Object(l.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"alert-demo"}},[t("alert-default"),this._v(" "),t("alert-title"),this._v(" "),t("alert-color"),this._v(" "),t("alert-closable"),this._v(" "),t("alert-icon"),this._v(" "),t("alert-example")],1)}),[],!1,null,null,null);t.default=c.exports}}]);