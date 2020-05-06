(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSidebar.vue */ "./resources/js/src/views/apps/email/EmailSidebar.vue");
/* harmony import */ var _MailItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailItem.vue */ "./resources/js/src/views/apps/email/MailItem.vue");
/* harmony import */ var _EmailView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailView.vue */ "./resources/js/src/views/apps/email/EmailView.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_email_moduleEmail_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/email/moduleEmail.js */ "./resources/js/src/store/email/moduleEmail.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      openMailId: null,
      selectedMails: [],
      isSidebarActive: false,
      showThread: false,
      clickNotClose: true,
      isEmailSidebarActive: true,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(value) {
      if (!value) this.showThread = false;
    },
    mailFilter: function mailFilter() {
      this.selectedMails = [];
      var scroll_el = this.$refs.mailListPS.$el || this.$refs.mailListPS;
      scroll_el.scrollTop = 0;
      this.$store.commit('email/UPDATE_MAIL_FILTER', this.$route.params.filter);
      this.$store.dispatch('email/fetchEmails', {
        filter: this.$route.params.filter
      });
      this.toggleEmailSidebar();
    },
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  computed: {
    mailFilter: function mailFilter() {
      return this.$route.params.filter;
    },
    emailTags: function emailTags() {
      return this.$store.state.email.mailTags;
    },
    searchQuery: {
      get: function get() {
        return this.$store.state.email.mailSearchQuery;
      },
      set: function set(val) {
        this.$store.dispatch('email/setEmailSearchQuery', val);
      }
    },
    selectAllCheckBox: {
      get: function get() {
        return this.selectedMails.length;
      },
      set: function set(value) {
        value ? this.selectedMails = this.mails.map(function (mail) {
          return mail.id;
        }) : this.selectedMails = [];
      }
    },
    mails: function mails() {
      return this.$store.getters['email/filteredMails'];
    },
    selectAllIcon: function selectAllIcon() {
      return this.selectedMails.length === this.mails.length ? 'icon-check' : 'icon-minus';
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isMailSelected: function isMailSelected() {
      var _this = this;

      return function (mailId) {
        return _this.selectedMails.indexOf(mailId) !== -1;
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    updateOpenMail: function updateOpenMail(mailId) {
      this.openMailId = mailId;
      this.isSidebarActive = true;
    },
    addToSelectedMails: function addToSelectedMails(mailId) {
      if (this.selectedMails.indexOf(mailId) === -1) this.selectedMails.push(mailId);
    },
    removeSelectedMail: function removeSelectedMail(mailId) {
      var mailIndex = this.selectedMails.indexOf(mailId);
      if (mailIndex !== -1) this.selectedMails.splice(mailIndex, 1);
    },
    moveTo: function moveTo(to) {
      var payload = {
        emailIds: this.selectedMails,
        to: to
      };
      this.$store.dispatch('email/moveMailsTo', payload).catch(function (error) {
        console.error(error);
      });
      this.selectedMails = [];
    },
    moveCurrentTo: function moveCurrentTo(to) {
      this.selectedMails = [this.openMailId];
      this.moveTo(to);
    },
    updateMarkUnread: function updateMarkUnread() {
      var payload = {
        emailIds: this.selectedMails,
        unreadFlag: true
      };
      this.$store.dispatch('email/setUnread', payload);
      this.selectedMails = [];
    },
    removeOpenMail: function removeOpenMail() {
      this.selectedMails = [this.openMailId];
      this.moveTo('trashed');
      this.isSidebarActive = false;
    },
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.currentMail.id,
        value: !this.currentMail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    },
    nextMail: function nextMail() {
      var _this2 = this;

      var currentMailIndex = this.mails.findIndex(function (mail) {
        return mail.id === _this2.openMailId;
      });
      if (this.mails[currentMailIndex + 1]) this.openMailId = this.mails[currentMailIndex + 1].id;
    },
    previousMail: function previousMail() {
      var _this3 = this;

      var currentMailIndex = this.mails.findIndex(function (mail) {
        return mail.id === _this3.openMailId;
      });
      if (this.mails[currentMailIndex - 1]) this.openMailId = this.mails[currentMailIndex - 1].id;
    },
    updateSingleMarkUnread: function updateSingleMarkUnread() {
      this.selectedMails = [this.openMailId];
      this.updateMarkUnread();
      this.isSidebarActive = false;
    },
    updateLabels: function updateLabels(label) {
      this.$store.dispatch('email/updateLabels', {
        mails: this.selectedMails,
        label: label
      });
      this.selectedMails = [];
    },
    closeMailViewSidebar: function closeMailViewSidebar() {
      this.isSidebarActive = false;
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isEmailSidebarActive = this.clickNotClose = false;
      } else {
        this.isEmailSidebarActive = this.clickNotClose = true;
      }
    },
    toggleEmailSidebar: function toggleEmailSidebar() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!value) {
        this.closeMailViewSidebar();

        if (this.clickNotClose) {
          return;
        }
      }

      this.isEmailSidebarActive = value;
    }
  },
  components: {
    MailItem: _MailItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EmailSidebar: _EmailSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    EmailView: _EmailView_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  created: function created() {
    this.$store.registerModule('email', _store_email_moduleEmail_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.setSidebarWidth();
    this.$store.commit('email/UPDATE_MAIL_FILTER', this.$route.params.filter); // Update Mail Filter

    this.$store.dispatch('email/fetchEmails', {
      filter: this.$route.params.filter
    }); // Fetch Emails From API

    this.$store.dispatch('email/fetchMeta'); // Fetch Unread Mails

    this.$store.dispatch('email/fetchTags'); // Fetch Mail Tags
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.unregisterModule('email');
  },
  mounted: function mounted() {
    this.$store.dispatch('email/setEmailSearchQuery', '');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    mailContent: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    emailTags: {
      type: Array,
      required: true
    },
    mailFilter: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      activePrompt: false,
      mailTo: '',
      mailSubject: '',
      mailCC: '',
      mailBCC: '',
      mailMessage: '',
      editorOption: {
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'font': []
          }]]
        },
        placeholder: 'Message'
      },
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      }
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.mailTo !== '';
    },
    baseUrl: function baseUrl() {
      var path = this.$route.path;
      return path.slice(0, path.lastIndexOf('/'));
    },
    emailMeta: function emailMeta() {
      return this.$store.state.email.meta;
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    clearFields: function clearFields() {
      var _this = this;

      this.$nextTick(function () {
        _this.mailTo = '';
        _this.mailSubject = '';
        _this.mailCC = '';
        _this.mailBCC = '';
        _this.mailMessage = '';
      });
    },
    sendMail: function sendMail() {
      this.clearFields();
    }
  },
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EmailMailCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailMailCard.vue */ "./resources/js/src/views/apps/email/EmailMailCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    emailTags: {
      type: Array,
      required: true
    },
    openMailId: {
      required: true,
      validator: function validator(prop) {
        return typeof prop === 'number' || prop === null;
      }
    },
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    mailFilter: {
      type: String
    }
  },
  data: function data() {
    return {
      showThread: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.50
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(value) {
      var _this = this;

      if (!value) {
        this.$emit('closeSidebar');
        setTimeout(function () {
          _this.showThread = false;
        }, 500);
      }
    }
  },
  computed: {
    currentMail: function currentMail() {
      return this.$store.getters['email/getMail'](this.openMailId);
    },
    labelColor: function labelColor() {
      var _this2 = this;

      return function (label) {
        var tags = _this2.$store.state.email.mailTags;
        return tags.find(function (tag) {
          return tag.value === label;
        }).color;
      };
    },
    currentMailLabels: {
      get: function get() {
        return this.currentMail.labels;
      },
      set: function set(value) {
        if (Array.isArray(value)) {
          var payload = {
            mailId: this.openMailId,
            labels: value
          };
          this.$store.dispatch('email/setLabels', payload);
        }
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.openMailId,
        value: !this.currentMail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    },
    moveTo: function moveTo(to) {
      this.$emit('closeSidebar');
      this.$emit('moveTo', to);
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    EmailMailCard: _EmailMailCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  updated: function updated() {
    if (!this.currentMail) return;
    if (this.currentMail.unread && this.isSidebarActive) this.$store.dispatch('email/setUnread', {
      emailIds: [this.openMailId],
      unread: false
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
  props: {
    mail: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      isSelectedMail: this.isSelected
    };
  },
  watch: {
    isSelected: function isSelected(value) {
      this.isSelectedMail = value;
    },
    isSelectedMail: function isSelectedMail(val) {
      val ? this.$emit('addToSelected', this.mail.id) : this.$emit('removeSelected', this.mail.id);
    }
  },
  computed: {
    labelColor: function labelColor() {
      var _this = this;

      return function (label) {
        var tags = _this.$store.state.email.mailTags;
        return tags.find(function (tag) {
          return tag.value === label;
        }).color;
      };
    }
  },
  methods: {
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.mail.id,
        value: !this.mail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: email.scss\n    Description: Email app's styles. This is imported in Email.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#email-app .vs-sidebar--background {\n  position: absolute;\n}\n[dir=ltr] #email-app .select-all-chexkbox .vs-checkbox {\n  margin-right: 0.8rem;\n}\n[dir=rtl] #email-app .select-all-chexkbox .vs-checkbox {\n  margin-left: 0.8rem;\n}\n#email-app .email-filter-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 75px);\n}\n[dir] #email-app .email-filter-scroll-area {\n  margin: auto;\n}\n#email-app .email-filter-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#email-app .email-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 100px);\n}\n[dir] #email-app .email-content-scroll-area {\n  margin: auto;\n}\n#email-app .email-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#email-app .scroll-area-mail-content {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 6.3%);\n}\n[dir] #email-app .scroll-area-mail-content {\n  margin: auto;\n}\n#email-app .scroll-area-mail-content:not(.ps) {\n  overflow-y: auto;\n}\n[dir] #email-app .email__mails .mail__opened-mail {\n  background-color: #eee;\n}\n#email-app .email__mails .email__mail-item {\n  transition: all 0.35s;\n}\n[dir] #email-app .email__mails .email__mail-item:not(:first-of-type) .mail__mail-item {\n  border-top: 1px solid #dae1e7;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item {\n  transition: all 0.2s;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  transition: all 0.2s;\n}\n[dir] #email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item .feather-icon {\n  color: #9c9c9c;\n}\n[dir] #email-app .email-view-sidebar .vs-sidebar {\n  background-color: #f8f8f8 !important;\n}\n[dir=ltr] #email-app .email-view-sidebar .vs-sidebar {\n  border-left: 1px solid #dae1e7;\n}\n[dir=rtl] #email-app .email-view-sidebar .vs-sidebar {\n  border-right: 1px solid #dae1e7;\n}\n#email-app .email-view-sidebar .email-header {\n  z-index: 1;\n  position: relative;\n}\n[dir] #email-app .email-view-sidebar .email-header {\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);\n  border-bottom: 1px solid #eee;\n}\n#email-app .email-view-sidebar .open-mail-label {\n  transition: all 0.35s;\n}\n[dir=ltr] #email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-left: 0;\n  margin-right: 0;\n}\n[dir=rtl] #email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-right: 0;\n  margin-left: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog {\n  max-width: 530px;\n}\n[dir] .con-vs-dialog.email-compose .vs-dialog .vs-dialog-text {\n  padding: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .scroll-area {\n  max-height: 75vh;\n}\n.con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n[dir] .con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .compose-mail-attachment .con-input-upload {\n  margin: 0;\n}\n.con-vs-dialog.email-compose .con-img-upload .con-input-upload {\n  height: 2.5rem;\n  width: 100%;\n}\n[dir] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin: 0;\n  margin-bottom: 0.5rem;\n}\n[dir=ltr] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin-right: 1.5rem;\n}\n[dir=rtl] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin-left: 1.5rem;\n}\n[dir] .con-vs-dialog.email-compose .quill-editor {\n  margin-bottom: 1.5rem;\n}\n.con-vs-dialog.email-compose .ql-editor {\n  height: 150px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "border border-solid d-theme-border-grey-light rounded relative overflow-hidden",
      attrs: { id: "email-app" }
    },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#email-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose
          },
          model: {
            value: _vm.isEmailSidebarActive,
            callback: function($$v) {
              _vm.isEmailSidebarActive = $$v
            },
            expression: "isEmailSidebarActive"
          }
        },
        [
          _c("email-sidebar", {
            attrs: { emailTags: _vm.emailTags, mailFilter: _vm.mailFilter },
            on: { closeSidebar: _vm.toggleEmailSidebar }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "no-scroll-content border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0",
          class: { "sidebar-spacer": _vm.clickNotClose }
        },
        [
          _c(
            "div",
            { staticClass: "flex border d-theme-dark-bg items-center" },
            [
              _c("feather-icon", {
                staticClass:
                  "md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer",
                attrs: { icon: "MenuIcon" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.toggleEmailSidebar(true)
                  }
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass:
                  "vs-input-no-border vs-input-no-shdow-focus w-full",
                attrs: {
                  "icon-no-border": "",
                  icon: "icon-search",
                  size: "large",
                  "icon-pack": "feather",
                  placeholder: "Search Mail"
                },
                model: {
                  value: _vm.searchQuery,
                  callback: function($$v) {
                    _vm.searchQuery = $$v
                  },
                  expression: "searchQuery"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "email__actions flex items-center flex-wrap justify-between p-4 border border-r-0 border-l-0 border-solid d-theme-border-grey-light"
            },
            [
              _c(
                "div",
                { staticClass: "flex items-center" },
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "select-all-chexkbox ml-0",
                      attrs: {
                        "icon-pack": "feather",
                        icon: _vm.selectAllIcon
                      },
                      model: {
                        value: _vm.selectAllCheckBox,
                        callback: function($$v) {
                          _vm.selectAllCheckBox = $$v
                        },
                        expression: "selectAllCheckBox"
                      }
                    },
                    [_vm._v("Select All")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex" },
                [
                  _vm.mailFilter != "sent"
                    ? _c(
                        "vs-dropdown",
                        {
                          staticClass: "cursor-pointer",
                          attrs: {
                            "vs-custom-content": "",
                            "vs-trigger-click": ""
                          }
                        },
                        [
                          _c("feather-icon", {
                            staticClass: "cursor-pointer",
                            attrs: {
                              icon: "FolderIcon",
                              "svg-classes": "h-6 w-6"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-menu",
                            [
                              _vm.mailFilter != "inbox"
                                ? _c(
                                    "vs-dropdown-item",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.moveTo("inbox")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("feather-icon", {
                                            staticClass: "mr-2",
                                            attrs: {
                                              icon: "MailIcon",
                                              svgClasses: "h-4 w-4"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Inbox")])
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mailFilter != "draft"
                                ? _c(
                                    "vs-dropdown-item",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.moveTo("draft")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("feather-icon", {
                                            staticClass: "mr-2",
                                            attrs: {
                                              icon: "Edit2Icon",
                                              svgClasses: "h-4 w-4"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Draft")])
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mailFilter != "spam"
                                ? _c(
                                    "vs-dropdown-item",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.moveTo("spam")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("feather-icon", {
                                            staticClass: "mr-2",
                                            attrs: {
                                              icon: "InfoIcon",
                                              svgClasses: "h-4 w-4"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Spam")])
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.mailFilter != "trash"
                                ? _c(
                                    "vs-dropdown-item",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.moveTo("trash")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("feather-icon", {
                                            staticClass: "mr-2",
                                            attrs: {
                                              icon: "TrashIcon",
                                              svgClasses: "h-4 w-4"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Trash")])
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer ml-5",
                        attrs: { icon: "TagIcon", "svg-classes": "h-6 w-6" }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        _vm._l(_vm.emailTags, function(label, index) {
                          return _c(
                            "vs-dropdown-item",
                            {
                              key: index,
                              staticClass: "whitespace-no-wrap",
                              on: {
                                click: function($event) {
                                  return _vm.updateLabels(label.value)
                                }
                              }
                            },
                            [
                              _c("div", {
                                staticClass:
                                  "h-3 w-3 inline-block rounded-full mr-3",
                                class: "bg-" + label.color
                              }),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(label.text))])
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "ml-5 cursor-pointer",
                    attrs: { icon: "MailIcon", "svg-classes": "h-6 w-6" },
                    on: { click: _vm.updateMarkUnread }
                  }),
                  _vm._v(" "),
                  _vm.mailFilter != "trash"
                    ? _c("feather-icon", {
                        staticClass: "cursor-pointer ml-5",
                        attrs: { icon: "TrashIcon", "svg-classes": "h-6 w-6" },
                        on: {
                          click: function($event) {
                            return _vm.moveTo("trash")
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            _vm.scrollbarTag,
            {
              key: _vm.$vs.rtl,
              ref: "mailListPS",
              tag: "component",
              staticClass: "email-content-scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "email__mails",
                  attrs: { name: "list-enter-up", tag: "ul", appear: "" }
                },
                _vm._l(_vm.mails, function(mail, index) {
                  return _c(
                    "li",
                    {
                      key: String(_vm.mailFilter) + String(mail.id),
                      staticClass: "cursor-pointer email__mail-item",
                      style: { transitionDelay: index * 0.1 + "s" },
                      on: {
                        click: function($event) {
                          return _vm.updateOpenMail(mail.id)
                        }
                      }
                    },
                    [
                      _c("mail-item", {
                        attrs: {
                          mail: mail,
                          isSelected: _vm.isMailSelected(mail.id)
                        },
                        on: {
                          addToSelected: _vm.addToSelectedMails,
                          removeSelected: _vm.removeSelectedMail
                        }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("email-view", {
        attrs: {
          emailTags: _vm.emailTags,
          openMailId: _vm.openMailId,
          isSidebarActive: _vm.isSidebarActive,
          mailFilter: _vm.mailFilter
        },
        on: {
          markUnread: _vm.updateSingleMarkUnread,
          removeMail: _vm.removeOpenMail,
          previousMail: _vm.previousMail,
          nextMail: _vm.nextMail,
          moveTo: _vm.moveCurrentTo,
          closeSidebar: _vm.closeMailViewSidebar
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("vx-card", { staticClass: "px-4", class: _vm.data.staticClass }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid flex justify-between flex items-center"
        },
        [
          _c("div", { staticClass: "flex items-center" }, [
            _c(
              "div",
              [
                _c("vs-avatar", {
                  staticClass:
                    "sender__avatar--single flex-shrink-0 mr-3 border-2 border-solid border-white",
                  attrs: { src: _vm.props.mailContent.img, size: "65px" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-col" }, [
              _c("h5", { staticClass: "mb-1" }, [
                _vm._v(_vm._s(_vm.props.mailContent.sender_name))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center" },
                [
                  _c("span", { staticClass: "text-sm" }, [
                    _vm._v(_vm._s(_vm.props.mailContent.sender))
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "inline-flex cursor-pointer",
                      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "w-3 h-3",
                        attrs: { icon: "ChevronDownIcon" }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        { staticStyle: { "z-index": "40001" } },
                        [
                          _c("div", { staticClass: "p-2" }, [
                            _c("p", { staticClass: "text-sm mb-1" }, [
                              _vm._v("From: "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.props.mailContent.sender) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-sm mb-1" }, [
                              _vm._v("To: "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm._f("csv")(_vm.props.mailContent.to)
                                    ) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-sm mb-1" }, [
                              _vm._v("Date: "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm._f("time")(_vm.props.mailContent.time)
                                    ) +
                                    " " +
                                    _vm._s(
                                      _vm._f("date")(
                                        _vm.props.mailContent.time,
                                        true
                                      )
                                    ) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.props.mailContent.cc.length
                              ? _c("p", { staticClass: "text-sm mb-1" }, [
                                  _vm._v("cc: "),
                                  _c("span", { staticClass: "font-semibold" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm._f("csv")(
                                            _vm.props.mailContent.cc
                                          )
                                        ) +
                                        " "
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col justify-end" }, [
            _c("span", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm._f("time")(_vm.props.mailContent.time)))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex justify-end mt-2" }, [
              _c("span", { staticClass: "text-right" }, [
                _vm._v(_vm._s(_vm._f("date")(_vm.props.mailContent.time, true)))
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c("div", {
          staticClass: "mail__content break-words mt-8 mb-4",
          domProps: { innerHTML: _vm._s(_vm.props.mailContent.message) }
        })
      ])
    ]),
    _vm._v(" "),
    _vm.props.mailContent.attachments.length
      ? _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            {
              staticClass:
                "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid mb-6 flex"
            },
            [
              _c("feather-icon", {
                staticClass: "mr-2",
                attrs: { icon: "PaperclipIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "block py-4" }, [_vm._v("ATTACHMENTS")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex" },
            _vm._l(_vm.props.mailContent.attachments, function(
              attachment,
              index
            ) {
              return _c(
                "div",
                { key: index, staticClass: "mail__attachment" },
                [
                  _c(
                    "vs-chip",
                    {
                      staticClass: "px-4 py-2 mr-3",
                      attrs: { color: "primary" }
                    },
                    [_vm._v(_vm._s(attachment))]
                  )
                ],
                1
              )
            }),
            0
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "email__email-sidebar h-full" },
    [
      _c(
        "div",
        { staticClass: "m-6 clearfix" },
        [
          _c(
            "vs-button",
            {
              staticClass: "bg-primary-gradient w-full",
              attrs: { "icon-pack": "feather", icon: "icon-edit" },
              on: {
                click: function($event) {
                  _vm.activePrompt = true
                }
              }
            },
            [_vm._v("Compose")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "email-compose",
          attrs: {
            title: "New Message",
            "accept-text": "Send",
            "is-valid": _vm.validateForm,
            active: _vm.activePrompt
          },
          on: {
            cancel: _vm.clearFields,
            accept: _vm.sendMail,
            close: _vm.clearFields,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c(
            _vm.scrollbarTag,
            {
              key: _vm.$vs.rtl,
              tag: "component",
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
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
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailTo",
                      "label-placeholder": "To",
                      danger: !_vm.validateForm && _vm.mailTo != "",
                      "val-icon-danger": "clear",
                      success: _vm.validateForm,
                      "val-icon-success": "done",
                      color: _vm.validateForm ? "success" : "danger"
                    },
                    model: {
                      value: _vm.mailTo,
                      callback: function($$v) {
                        _vm.mailTo = $$v
                      },
                      expression: "mailTo"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailSubject",
                      "label-placeholder": "Subject"
                    },
                    model: {
                      value: _vm.mailSubject,
                      callback: function($$v) {
                        _vm.mailSubject = $$v
                      },
                      expression: "mailSubject"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: { name: "mailCC", "label-placeholder": "CC" },
                    model: {
                      value: _vm.mailCC,
                      callback: function($$v) {
                        _vm.mailCC = $$v
                      },
                      expression: "mailCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: { name: "mailBCC", "label-placeholder": "BCC" },
                    model: {
                      value: _vm.mailBCC,
                      callback: function($$v) {
                        _vm.mailBCC = $$v
                      },
                      expression: "mailBCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("quill-editor", {
                    attrs: { options: _vm.editorOption },
                    model: {
                      value: _vm.mailMessage,
                      callback: function($$v) {
                        _vm.mailMessage = $$v
                      },
                      expression: "mailMessage"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-upload", {
                    staticClass: "compose-mail-attachment",
                    attrs: {
                      multiple: "",
                      text: "Attachments",
                      "show-upload-button": false
                    }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        _vm.scrollbarTag,
        {
          key: _vm.$vs.rtl,
          tag: "component",
          staticClass: "email-filter-scroll-area",
          attrs: { settings: _vm.settings }
        },
        [
          _c(
            "div",
            { staticClass: "px-6 pb-2 flex flex-col" },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "flex justify-between items-center cursor-pointer",
                  class: { "text-primary": _vm.mailFilter == "inbox" },
                  attrs: { tag: "span", to: _vm.baseUrl + "/inbox" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex items-center mb-2" },
                    [
                      _c("feather-icon", {
                        attrs: {
                          icon: "MailIcon",
                          svgClasses: [
                            {
                              "text-primary stroke-current":
                                _vm.mailFilter == "inbox"
                            },
                            "h-6 w-6"
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-lg ml-3" }, [
                        _vm._v("Inbox")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.emailMeta.unreadMails
                    ? [
                        _vm.emailMeta.unreadMails.folder.inbox.length > 0
                          ? _c(
                              "vs-chip",
                              {
                                staticClass: "number",
                                attrs: { color: "primary" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.emailMeta.unreadMails.folder.inbox
                                      .length
                                  )
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "flex items-center mt-4 mb-2 cursor-pointer",
                  class: { "text-primary": _vm.mailFilter == "sent" },
                  attrs: { tag: "span", to: _vm.baseUrl + "/sent" }
                },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "SendIcon",
                      svgClasses: [
                        {
                          "text-primary stroke-current":
                            _vm.mailFilter == "sent"
                        },
                        "h-6 w-6"
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("Sent")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "flex justify-between items-center mt-4 cursor-pointer",
                  class: { "text-primary": _vm.mailFilter == "draft" },
                  attrs: { tag: "span", to: _vm.baseUrl + "/draft" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex items-center mb-2" },
                    [
                      _c("feather-icon", {
                        attrs: {
                          icon: "Edit2Icon",
                          svgClasses: [
                            {
                              "text-primary stroke-current":
                                _vm.mailFilter == "draft"
                            },
                            "h-6 w-6"
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-lg ml-3" }, [
                        _vm._v("Draft")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.emailMeta.draftMails
                    ? [
                        _vm.emailMeta.draftMails.length > 0
                          ? _c(
                              "vs-chip",
                              {
                                staticClass: "number",
                                attrs: { color: "warning" }
                              },
                              [_vm._v(_vm._s(_vm.emailMeta.draftMails.length))]
                            )
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "flex items-center mt-4 mb-2 cursor-pointer",
                  class: { "text-primary": _vm.mailFilter == "starred" },
                  attrs: { tag: "span", to: _vm.baseUrl + "/starred" }
                },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "StarIcon",
                      svgClasses: [
                        {
                          "text-primary stroke-current":
                            _vm.mailFilter == "starred"
                        },
                        "h-6 w-6"
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-lg ml-3" }, [
                    _vm._v("Starred")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "flex items-center justify-between items-center mt-4 cursor-pointer",
                  class: { "text-primary": _vm.mailFilter == "spam" },
                  attrs: { tag: "span", to: _vm.baseUrl + "/spam" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex items-center mb-2" },
                    [
                      _c("feather-icon", {
                        attrs: {
                          icon: "InfoIcon",
                          svgClasses: [
                            {
                              "text-primary stroke-current":
                                _vm.mailFilter == "spam"
                            },
                            "h-6 w-6"
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-lg ml-3" }, [
                        _vm._v("Spam")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.emailMeta.unreadMails
                    ? [
                        _vm.emailMeta.unreadMails.folder.spam.length > 0
                          ? _c(
                              "vs-chip",
                              {
                                staticClass: "number",
                                attrs: { color: "danger" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.emailMeta.unreadMails.folder.spam.length
                                  )
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "flex items-center mt-4 mb-2 cursor-pointer",
                  class: { "text-primary": _vm.mailFilter == "trash" },
                  attrs: { tag: "span", to: _vm.baseUrl + "/trash" }
                },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "TrashIcon",
                      svgClasses: [
                        {
                          "text-primary stroke-current":
                            _vm.mailFilter == "trash"
                        },
                        "h-6 w-6"
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("Trash")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c("div", { staticClass: "email__labels px-6 py-4" }, [
            _c("h5", { staticClass: "mb-8" }, [_vm._v("Labels")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "email__lables-list" },
              _vm._l(_vm.emailTags, function(tag, index) {
                return _c(
                  "router-link",
                  {
                    key: index,
                    staticClass:
                      "email__label flex items-center mb-4 cursor-pointer",
                    attrs: { tag: "span", to: _vm.baseUrl + "/" + tag.value }
                  },
                  [
                    _c("div", {
                      staticClass: "ml-1 h-3 w-3 rounded-full mr-4",
                      class: "border-2 border-solid border-" + tag.color
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-lg",
                        class: { "text-primary": _vm.mailFilter == tag.value }
                      },
                      [_vm._v(_vm._s(tag.text))]
                    )
                  ]
                )
              }),
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "full-vs-sidebar email-view-sidebar items-no-padding",
          attrs: {
            "click-not-close": "",
            parent: "#email-app",
            "hidden-background": true,
            "position-right": ""
          },
          model: {
            value: _vm.isSidebarActive,
            callback: function($$v) {
              _vm.isSidebarActive = $$v
            },
            expression: "isSidebarActive"
          }
        },
        [
          _vm.currentMail
            ? _c(
                "div",
                { staticClass: "mail-sidebar-content px-0 sm:pb-6 h-full" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg"
                    },
                    [
                      _c("div", { staticClass: "flex mb-4" }, [
                        _c(
                          "div",
                          { staticClass: "flex items-center" },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer mr-4",
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ArrowRightIcon"
                                  : "ArrowLeftIcon",
                                "svg-classes": "w-6 h-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("closeSidebar")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.currentMail.subject
                              ? _c("h4", [
                                  _vm._v(_vm._s(_vm.currentMail.subject))
                                ])
                              : _c("h4", [_vm._v("(no subject)")])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-10 mb-4 mt-1" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "email__actions--single flex items-baseline"
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                icon: "StarIcon",
                                svgClasses: [
                                  {
                                    "text-warning stroke-current stroke-current":
                                      _vm.currentMail.isStarred
                                  },
                                  "h-6 w-6"
                                ]
                              },
                              on: { click: _vm.toggleIsStarred }
                            }),
                            _vm._v(" "),
                            _vm.mailFilter != "sent"
                              ? _c(
                                  "vs-dropdown",
                                  {
                                    staticClass: "cursor-pointer",
                                    attrs: {
                                      "vs-custom-content": "",
                                      "vs-trigger-click": ""
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "ml-4",
                                      attrs: {
                                        icon: "FolderIcon",
                                        "svg-classes": "h-6 w-6"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      [
                                        _vm.currentMail.mailFolder != "inbox"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("inbox")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "MailIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Inbox")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentMail.mailFolder != "draft"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("draft")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "Edit2Icon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Draft")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentMail.mailFolder != "spam"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("spam")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "InfoIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [_vm._v("Spam")])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentMail.mailFolder != "trash"
                                          ? _c(
                                              "vs-dropdown-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.moveTo("trash")
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        icon: "TrashIcon",
                                                        svgClasses: "h-4 w-4"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Trash")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "vs-dropdown",
                              {
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "vs-custom-content": "",
                                  "vs-trigger-click": ""
                                }
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer ml-4",
                                  attrs: {
                                    icon: "TagIcon",
                                    "svg-classes": "h-6 w-6"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown-menu",
                                  { staticStyle: { "z-index": "40001" } },
                                  _vm._l(_vm.emailTags, function(label, index) {
                                    return _c(
                                      "vs-dropdown-item",
                                      {
                                        key: index,
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "vs-checkbox",
                                          {
                                            attrs: { "vs-value": label.value },
                                            model: {
                                              value: _vm.currentMailLabels,
                                              callback: function($$v) {
                                                _vm.currentMailLabels = $$v
                                              },
                                              expression: "currentMailLabels"
                                            }
                                          },
                                          [_vm._v(_vm._s(label.text))]
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass: "cursor-pointer ml-4",
                              attrs: {
                                icon: "MailIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("markUnread")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.currentMail.mailFolder != "trash"
                              ? _c("feather-icon", {
                                  staticClass: "cursor-pointer ml-4",
                                  attrs: {
                                    icon: "TrashIcon",
                                    "svg-classes": "h-6 w-6"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$emit("removeMail")
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer ml-4 hidden sm:inline-flex",
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ChevronsRightIcon"
                                  : "ChevronsLeftIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("previousMail")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer ml-4 hidden sm:inline-flex",
                              attrs: {
                                icon: _vm.$vs.rtl
                                  ? "ChevronsLeftIcon"
                                  : "ChevronsRightIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("nextMail")
                                }
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
                    _vm.scrollbarTag,
                    {
                      key: _vm.$vs.rtl,
                      tag: "component",
                      staticClass:
                        "scroll-area-mail-content md:px-8 md:pb-8 pt-4 px-6 pb-6",
                      attrs: { settings: _vm.settings }
                    },
                    [
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "email__labels--single flex ml-10 items-center mt-2"
                            },
                            [
                              _c(
                                "transition-group",
                                {
                                  staticClass: "flex",
                                  attrs: { name: "list", tag: "div" }
                                },
                                _vm._l(_vm.currentMail.labels, function(label) {
                                  return _c(
                                    "div",
                                    {
                                      key: label,
                                      staticClass:
                                        "open-mail-label flex items-center mr-4"
                                    },
                                    [
                                      _c("div", {
                                        staticClass:
                                          "h-3 w-3 rounded-full mr-1",
                                        class: "bg-" + _vm.labelColor(label)
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "text-sm" }, [
                                        _vm._v(
                                          _vm._s(_vm._f("capitalize")(label))
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.currentMail.replies.length && !_vm.showThread
                        ? _c("div", { staticClass: "vx-row mb-4" }, [
                            _c("div", { staticClass: "vx-col w-full" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-primary font-medium ml-10 cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      _vm.showThread = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.currentMail.replies.length) +
                                      " Earlier Messages"
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isSidebarActive
                        ? _c(
                            "div",
                            [
                              _vm._l(
                                _vm.currentMail.replies.slice().reverse(),
                                function(threadMail) {
                                  return _vm.showThread
                                    ? _c(
                                        "div",
                                        {
                                          key: threadMail.id,
                                          staticClass: "vx-row"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "vx-col w-full" },
                                            [
                                              _c("email-mail-card", {
                                                staticClass: "mb-10",
                                                attrs: {
                                                  mailContent: threadMail
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                }
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "vx-row" }, [
                                _c(
                                  "div",
                                  { staticClass: "vx-col w-full" },
                                  [
                                    _c("email-mail-card", {
                                      attrs: { mailContent: _vm.currentMail }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "vx-row",
                                  staticStyle: { "margin-top": "2.2rem" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "vx-col w-full" },
                                    [
                                      _c("vx-card", [
                                        _c("div", { staticClass: "vx-row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "vx-col w-full flex justify-between"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-lg" },
                                                [
                                                  _vm._v("Click here to "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-primary font-semibold cursor-pointer"
                                                    },
                                                    [_vm._v("Reply")]
                                                  ),
                                                  _vm._v(" or "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-primary font-semibold cursor-pointer"
                                                    },
                                                    [_vm._v("Forward")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("feather-icon", {
                                                attrs: { icon: "PaperclipIcon" }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "mail__mail-item sm:px-4 px-2 py-6",
      class: { "mail__opened-mail": !_vm.mail.unread }
    },
    [
      _c(
        "div",
        { staticClass: "flex w-full" },
        [
          _c("vs-avatar", {
            staticClass:
              "sender__avatar flex-shrink-0 mr-3 border-2 border-solid border-white",
            attrs: { src: _vm.mail.img, size: "40px" }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex w-full justify-between items-start" },
            [
              _c("div", { staticClass: "mail__details" }, [
                _c(
                  "h5",
                  {
                    staticClass: "mb-1",
                    class: { "font-semibold": _vm.mail.unread }
                  },
                  [_vm._v(_vm._s(_vm.mail.sender_name))]
                ),
                _vm._v(" "),
                _vm.mail.subject
                  ? _c("span", [_vm._v(_vm._s(_vm.mail.subject))])
                  : _c("span", [_vm._v("(no subject)")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item__meta flex items-center" }, [
                _c(
                  "div",
                  { staticClass: "email__labels hidden sm:flex items-center" },
                  _vm._l(_vm.mail.labels, function(label, index) {
                    return _c("div", {
                      key: index,
                      staticClass: "h-2 w-2 rounded-full mr-2",
                      class: "bg-" + _vm.labelColor(label)
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm._f("date")(_vm.mail.time)))])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex w-full" }, [
        _c(
          "div",
          { staticClass: "flex items-center ml-1" },
          [
            _c("vs-checkbox", {
              staticClass: "vs-checkbox-small ml-0 mr-1",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                }
              },
              model: {
                value: _vm.isSelectedMail,
                callback: function($$v) {
                  _vm.isSelectedMail = $$v
                },
                expression: "isSelectedMail"
              }
            }),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                icon: "StarIcon",
                svgClasses: [
                  {
                    "text-warning fill-current stroke-current":
                      _vm.mail.isStarred
                  },
                  "w-5",
                  "h-5"
                ]
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.toggleIsStarred($event)
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mail__message truncate ml-3" }, [
          _c("span", [_vm._v(_vm._s(_vm._f("filter_tags")(_vm.mail.message)))])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/email/moduleEmail.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/store/email/moduleEmail.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleEmailState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleEmailState.js */ "./resources/js/src/store/email/moduleEmailState.js");
/* harmony import */ var _moduleEmailMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleEmailMutations.js */ "./resources/js/src/store/email/moduleEmailMutations.js");
/* harmony import */ var _moduleEmailActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleEmailActions.js */ "./resources/js/src/store/email/moduleEmailActions.js");
/* harmony import */ var _moduleEmailGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleEmailGetters.js */ "./resources/js/src/store/email/moduleEmailGetters.js");
/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: _moduleEmailState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleEmailMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleEmailActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleEmailGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/email/moduleEmailActions.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/email/moduleEmailActions.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/*=========================================================================================
  File Name: moduleEmailActions.js
  Description: Email Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  setEmailSearchQuery: function setEmailSearchQuery(_ref, query) {
    var commit = _ref.commit;
    commit('SET_EMAIL_SEARCH_QUERY', query);
  },
  // Fetch emails
  fetchEmails: function fetchEmails(_ref2, payload) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/email/mails', {
        params: {
          filter: payload.filter
        }
      }).then(function (response) {
        commit('SET_MAILS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Fetch Tags
  fetchTags: function fetchTags(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/email/tags').then(function (response) {
        commit('SET_TAGS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Fetch Email Meta
  fetchMeta: function fetchMeta(_ref4) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/email/meta').then(function (response) {
        commit('SET_META', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Move mails to another folder
  moveMailsTo: function moveMailsTo(_ref5, payload) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/email/move-mails', {
        emailIds: payload.emailIds,
        mailFolder: payload.to
      }).then(function (response) {
        commit('MOVE_MAILS_TO', payload);
        commit('UPDATE_UNREAD_META_ON_MOVE', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Update Mails label
  updateLabels: function updateLabels(_ref6, payload) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/email/update-labels', {
        emailIds: payload.mails,
        label: payload.label
      }).then(function (response) {
        commit('UPDATE_LABELS', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  setLabels: function setLabels(_ref7, payload) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/email/set-labels', {
        mailId: payload.mailId,
        labels: payload.labels
      }).then(function (response) {
        commit('SET_LABELS', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Set mails flag unread to true
  setUnread: function setUnread(_ref8, payload) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/email/mark-unread', {
        emailIds: payload.emailIds,
        unreadFlag: payload.unreadFlag
      }).then(function (response) {
        commit('SET_UNREAD', payload); // Remove this if you are getting meta like us
        // Use your own method to update email meta if you are fetching email meta

        commit('UPDATE_UNREAD_META', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Toggle isStarred flag in mail
  toggleIsMailStarred: function toggleIsMailStarred(_ref9, payload) {
    var commit = _ref9.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/email/set-starred', {
        mailId: payload.mailId,
        value: payload.value
      }).then(function (response) {
        commit('TOGGLE_IS_MAIL_STARRED', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/email/moduleEmailGetters.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/email/moduleEmailGetters.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  filteredMails: function filteredMails(state) {
    return state.mails.filter(function (mail) {
      return (state.mail_filter === 'starred' ? mail.isStarred : state.mail_filter === mail.mailFolder || mail.labels.includes(state.mail_filter)) && (mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()));
    });
  },
  getMail: function getMail(state) {
    return function (emailId) {
      return state.mails.find(function (email) {
        return email.id === emailId;
      });
    };
  }
});

/***/ }),

/***/ "./resources/js/src/store/email/moduleEmailMutations.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/store/email/moduleEmailMutations.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleEmailMutations.js
  Description: Email Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_EMAIL_SEARCH_QUERY: function SET_EMAIL_SEARCH_QUERY(state, query) {
    state.mailSearchQuery = query;
  },
  SET_MAILS: function SET_MAILS(state, mails) {
    state.mails = mails;
  },
  SET_TAGS: function SET_TAGS(state, tags) {
    state.mailTags = tags;
  },
  SET_META: function SET_META(state, meta) {
    state.meta = meta;
  },
  UPDATE_MAIL_FILTER: function UPDATE_MAIL_FILTER(state, filterName) {
    state.mail_filter = filterName;
  },
  UPDATE_LABELS: function UPDATE_LABELS(state, payload) {
    payload.mails.forEach(function (mailId) {
      var mailIndex = state.mails.findIndex(function (mail) {
        return mail.id === mailId;
      });
      var index = state.mails[mailIndex].labels.indexOf(payload.label);
      if (index === -1) state.mails[mailIndex].labels.push(payload.label);else state.mails[mailIndex].labels.splice(index, 1);
    });
  },
  SET_LABELS: function SET_LABELS(state, payload) {
    state.mails.find(function (mail) {
      return mail.id === payload.mailId;
    }).labels = payload.labels;
  },
  SET_UNREAD: function SET_UNREAD(state, payload) {
    payload.emailIds.forEach(function (mailId) {
      var mailIndex = state.mails.findIndex(function (mail) {
        return mail.id === mailId;
      });
      if (mailIndex !== -1) state.mails[mailIndex].unread = payload.unreadFlag;
    });
  },
  MOVE_MAILS_TO: function MOVE_MAILS_TO(state, payload) {
    payload.emailIds.forEach(function (mailId) {
      var mailIndex = state.mails.findIndex(function (mail) {
        return mail.id === mailId;
      }); // Update draft meta
      // If moving from draft mailFolder decrease draft meta by removing mailId

      if (state.mails[mailIndex].mailFolder === 'draft') {
        state.meta.draftMails.splice(state.meta.draftMails.findIndex(function (i) {
          return i === mailId;
        }), 1);
      } // Else increase by pushing mailId


      if (payload.to === 'draft') {
        state.meta.draftMails.push(mailId);
      }

      state.mails[mailIndex].mailFolder = payload.to;
    });
  },
  TOGGLE_IS_MAIL_STARRED: function TOGGLE_IS_MAIL_STARRED(state, payload) {
    state.mails.find(function (mail) {
      return mail.id === payload.mailId;
    }).isStarred = payload.value;
  },
  // If your process of fetching is different than ours. Please update action and mutation
  // Maybe this mutation is redundant for you. Feel free to remove it.
  UPDATE_UNREAD_META: function UPDATE_UNREAD_META(state, payload) {
    var _loop = function _loop(folder) {
      // If folder is same as current filter
      if (folder === state.mail_filter) {
        if (payload.unreadFlag) {
          // If unread flag is true - increase count
          payload.emailIds.forEach(function (mailId) {
            if (state.meta.unreadMails.folder[folder].indexOf(mailId) === -1) state.meta.unreadMails.folder[folder].push(mailId);
          });
        } else {
          // else reduce unread mails count
          payload.emailIds.forEach(function (mailId) {
            var mailIdIndex = state.meta.unreadMails.folder[folder].indexOf(mailId);
            if (mailIdIndex !== -1) state.meta.unreadMails.folder[folder].splice(mailIdIndex, 1);
          });
        }
      }
    };

    // Loop over email meta
    for (var folder in state.meta.unreadMails.folder) {
      _loop(folder);
    }
  },
  UPDATE_UNREAD_META_ON_MOVE: function UPDATE_UNREAD_META_ON_MOVE(state, payload) {
    // Updating Draft meta is handled by "MOVE_MAILS_TO" mutation
    payload.emailIds.forEach(function (mailId) {
      var mail = state.mails.find(function (mail) {
        return mail.id === mailId;
      });

      if (mail.unread) {
        var cf_unread_mails = state.meta.unreadMails.folder[state.mail_filter];

        if (cf_unread_mails) {
          cf_unread_mails.splice(cf_unread_mails.indexOf(mailId), 1);
        }

        if (state.meta.unreadMails.folder[payload.to]) state.meta.unreadMails.folder[payload.to].push(mailId);
      }
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/email/moduleEmailState.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/email/moduleEmailState.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  mails: [],
  mail_filter: null,
  mailTags: [],
  meta: {},
  mailSearchQuery: ''
});

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=629e4b94& */ "./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Email.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/Email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=629e4b94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailMailCard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailMailCard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailMailCard_vue_vue_type_template_id_011fe63d_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true& */ "./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true&");
/* harmony import */ var _EmailMailCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailMailCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailMailCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailMailCard_vue_vue_type_template_id_011fe63d_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailMailCard_vue_vue_type_template_id_011fe63d_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/EmailMailCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMailCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailMailCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMailCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMailCard_vue_vue_type_template_id_011fe63d_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailMailCard.vue?vue&type=template&id=011fe63d&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMailCard_vue_vue_type_template_id_011fe63d_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMailCard_vue_vue_type_template_id_011fe63d_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailSidebar.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailSidebar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=template&id=25d30276& */ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&");
/* harmony import */ var _EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/EmailSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=template&id=25d30276& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailView.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailView.vue?vue&type=template&id=6af19f7b& */ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&");
/* harmony import */ var _EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/EmailView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailView.vue?vue&type=template&id=6af19f7b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/MailItem.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/apps/email/MailItem.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailItem.vue?vue&type=template&id=c3e06480& */ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&");
/* harmony import */ var _MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailItem.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/MailItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailItem.vue?vue&type=template&id=c3e06480& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);