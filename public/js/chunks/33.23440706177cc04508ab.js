(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/qeJ":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"#loading-bg{\n  width: 100%;\n  height: 100%;\n  background: #FFF;\n  display: block;\n  position: absolute;\n}\n.loading-logo{\n  position: absolute;\n  left: calc(50% - 45px);\n  top: 40%;\n}\n.loading {\n  position: absolute;\n  left: calc(50% - 35px);\n  top: 50%;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 3px solid transparent;\n}\n.loading .effect-1,  .loading .effect-2{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-left: 3px solid rgba(121, 97, 249,1);\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.loading .effect-1{\n  animation: rotate 1s ease infinite;\n}\n.loading .effect-2{\n  animation: rotateOpacity 1s ease infinite .1s;\n}\n.loading .effect-3{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-left: 3px solid rgba(121, 97, 249,1);\n  -webkit-animation: rotateOpacity 1s ease infinite .2s;\n  animation: rotateOpacity 1s ease infinite .2s;\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.loading .effects{\n  transition: all .3s ease;\n}\n\n@keyframes rotate{\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n@keyframes rotateOpacity{\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    opacity: .1;\n  }\n  100% {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n    opacity: 1;\n  }\n}",""])},"2lIR":function(t,n,e){(n=t.exports=e("I1BE")(!1)).i(e("/qeJ"),""),n.push([t.i,"",""])},"603A":function(t,n,e){"use strict";var i=e("HcBo");e.n(i).a},"6iGC":function(t,n){t.exports="/demo/vuexy-vuejs-laravel-admin-template/demo-1/images/logo.png?a5d6fa57427643c6ebe37859086c9a63"},HcBo:function(t,n,e){var i=e("2lIR");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},JPQ1:function(t,n,e){"use strict";e.r(n);var i=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"loading-bg"}},[n("div",{staticClass:"loading-logo"},[n("img",{attrs:{src:e("6iGC"),alt:"Logo"}})]),this._v(" "),n("div",{staticClass:"loading"},[n("div",{staticClass:"effect-1 effects"}),this._v(" "),n("div",{staticClass:"effect-2 effects"}),this._v(" "),n("div",{staticClass:"effect-3 effects"})])])}],o={methods:{handleLoginEvent:function(t){this.$store.dispatch("updateUserInfo",{displayName:t.profile.name,email:t.profile.email,photoURL:t.profile.picture,providerId:t.profile.sub.substr(0,t.profile.sub.indexOf("|")),uid:t.profile.sub}),this.$router.push(t.state.target||"/")}},created:function(){this.$auth.handleAuthentication(),this.$auth.isAuthenticated()&&this.$router.push("/").catch((function(){}))}},a=(e("603A"),e("KHd+")),r=Object(a.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),i,!1,null,null,null);n.default=r.exports}}]);