(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1451:function(t,e){t.exports="/images/login.png?d814adb752d2d047b8292d6de603025f"},1452:function(t,e,i){"use strict";var o=i(339);i.n(o).a},1453:function(t,e,i){(t.exports=i(7)(!1)).push([t.i,"[dir] #page-login .social-login-buttons .bg-facebook {\n  background-color: #1551b1;\n}\n[dir] #page-login .social-login-buttons .bg-twitter {\n  background-color: #00aaff;\n}\n[dir] #page-login .social-login-buttons .bg-google {\n  background-color: #4285F4;\n}\n[dir] #page-login .social-login-buttons .bg-github {\n  background-color: #333;\n}",""])},1454:function(t,e,i){"use strict";var o=i(340);i.n(o).a},1455:function(t,e,i){(t.exports=i(7)(!1)).push([t.i,".login-tabs-container {\n  min-height: 505px;\n}\n[dir] .login-tabs-container .con-tab {\n  padding-bottom: 14px;\n}\n[dir] .login-tabs-container .con-slot-tabs {\n  margin-top: 1rem;\n}",""])},1561:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{email:"admin@admin.com",password:"adminadmin",checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.email&&""!==this.password}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginJWT:function(){var t=this;if(this.checkLogin()){this.$vs.loading();var e={checkbox_remember_me:this.checkbox_remember_me,userDetails:{email:this.email,password:this.password}};this.$store.dispatch("auth/loginJWT",e).then((function(){t.$vs.loading.close()})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))}}},r=i(0),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),i("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))]),t._v(" "),i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("password")))]),t._v(" "),i("div",{staticClass:"flex flex-wrap justify-between my-5"},[i("vs-checkbox",{staticClass:"mb-3",model:{value:t.checkbox_remember_me,callback:function(e){t.checkbox_remember_me=e},expression:"checkbox_remember_me"}},[t._v("Remember Me")]),t._v(" "),i("router-link",{attrs:{to:"/pages/forgot-password"}},[t._v("Forgot Password?")])],1),t._v(" "),i("div",{staticClass:"flex flex-wrap justify-between mb-3"},[i("vs-button",{attrs:{type:"border"},on:{click:t.registerUser}},[t._v("Register")]),t._v(" "),i("vs-button",{attrs:{disabled:!t.validateForm},on:{click:t.loginJWT}},[t._v("Login")])],1)],1)}),[],!1,null,null,null).exports,s=i(84),n=i.n(s);function c(t,e,i,o,r,a,s){try{var n=t[a](s),c=n.value}catch(t){return void i(t)}n.done?e(c):Promise.resolve(c).then(o,r)}var l,u,d={data:function(){return{email:"demo@demo.com",password:"demodemo",company:null,checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.email&&""!==this.password&&this.company},isCompanyFilled:function(){return this.$store.state.auth.company},userId:function(){return this.$store.state.auth.user.id}},methods:{AuthProvider:function(t){var e=this;this.$http.get("/sociallogin/"+t).then((function(t){t.data.error?e.error=err.response.data.error:t.data.redirectUrl&&(window.location.href=t.data.redirectUrl)})).catch((function(t){t.response.data.error&&(e.error=t.response.data.error),e.isProcessing=!1}))},checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},login:function(){this.$vs.loading();var t={checkbox_remember_me:this.checkbox_remember_me,userDetails:{email:this.email,password:this.password},notify:this.$vs.notify,closeAnimation:this.$vs.loading.close};this.$store.dispatch("auth/loginAttempt",t)},loginWithGoogle:function(){this.$store.dispatch("auth/loginWithGoogle",{notify:this.$vs.notify})},loginWithFacebook:function(){this.$store.dispatch("auth/loginWithFacebook",{notify:this.$vs.notify})},loginWithTwitter:function(){this.$store.dispatch("auth/loginWithTwitter",{notify:this.$vs.notify})},loginWithGithub:function(){this.$store.dispatch("auth/loginWithGithub",{notify:this.$vs.notify})},registerUser:(l=n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/api/user-management/users/"+this.userId,{company:this.company});case 2:localStorage.removeItem("company"),this.$router.push({name:"goals"});case 4:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(i,o){var r=l.apply(t,e);function a(t){c(r,i,o,a,s,"next",t)}function s(t){c(r,i,o,a,s,"throw",t)}a(void 0)}))},function(){return u.apply(this,arguments)})}},h=(i(1452),{methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))}}}),g={components:{LoginJwt:a,LoginFirebase:Object(r.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isCompanyFilled?i("div",[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full my-5",attrs:{"data-vv-validate-on":"blur",name:"company","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),t._v(" "),i("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("company")))]),t._v(" "),i("div",[i("vs-button",{attrs:{type:"border",disabled:!t.validateForm},on:{click:t.registerUser}},[t._v("Register")])],1)],1):i("div",{staticClass:"social-login-buttons flex flex-wrap items-center mt-4"},[i("div",{staticClass:"bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:function(e){return t.AuthProvider("facebook")}}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-facebook-f fa-w-9",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 264 512"}},[i("path",{attrs:{fill:"currentColor",d:"M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"}})])]),t._v(" "),i("div",{staticClass:"bg-twitter pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:function(e){return t.AuthProvider("twitter")}}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-twitter fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),i("div",{staticClass:"bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:function(e){return t.AuthProvider("google")}}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-google fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512"}},[i("path",{attrs:{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}})])]),t._v(" "),i("div",{staticClass:"bg-github pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:function(e){return t.AuthProvider("github")}}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-github-alt fa-w-15",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512"}},[i("path",{attrs:{fill:"currentColor",d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}})])])])])}),[],!1,null,null,null).exports,LoginAuth0:Object(r.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("vs-button",{staticClass:"mb-4 ml-2",attrs:{color:"#eb5424"},on:{click:this.loginAuth0}},[this._v("Auth0")])}),[],!1,null,null,null).exports},mounted:function(){this.$store.commit("auth/INITIALIZE",this.$cookie.get("authentication")),this.$cookie.delete("authentication")},methods:{AuthProvider:function(t){var e=this;this.$http.get("/sociallogin/"+t).then((function(t){t.data.error?e.error=err.response.data.error:t.data.redirectUrl&&(window.location.href=t.data.redirectUrl)})).catch((function(t){t.response.data.error&&(e.error=t.response.data.error),e.isProcessing=!1}))},SocialLogin:function(t,e){this.$http.post("/sociallogin/"+t,e).then((function(t){console.log(t.data)})).catch((function(t){console.log({err:t})}))}}},m=(i(1454),Object(r.a)(g,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[e("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[e("vx-card",[e("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row no-gutter justify-center items-center"},[e("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[e("img",{staticClass:"mx-auto",attrs:{src:i(1451),alt:"login"}})]),this._v(" "),e("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[e("div",{staticClass:"px-8 pt-8 login-tabs-container"},[e("div",{staticClass:"vx-card__title mb-4"},[e("h4",{staticClass:"mb-4"},[this._v("Login")]),this._v(" "),e("p",[this._v("Welcome back, please login to your account.")])]),this._v(" "),e("vs-tabs",[e("vs-tab",{attrs:{label:"Firebase"}},[e("login-firebase")],1)],1)],1)])])])])],1)])}),[],!1,null,null,null));e.default=m.exports},339:function(t,e,i){var o=i(1453);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(8)(o,r);o.locals&&(t.exports=o.locals)},340:function(t,e,i){var o=i(1455);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(8)(o,r);o.locals&&(t.exports=o.locals)}}]);