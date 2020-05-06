(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatContact_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue */ "./resources/js/src/views/apps/chat/ChatContact.vue");
/* harmony import */ var _ChatLog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue */ "./resources/js/src/views/apps/chat/ChatLog.vue");
/* harmony import */ var _ChatNavbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatNavbar.vue */ "./resources/js/src/views/apps/chat/ChatNavbar.vue");
/* harmony import */ var _UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile.vue */ "./resources/js/src/views/apps/chat/UserProfile.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_chat_moduleChat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/chat/moduleChat.js */ "./resources/js/src/store/chat/moduleChat.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      active: true,
      isHidden: false,
      searchContact: '',
      activeProfileSidebar: false,
      activeChatUser: null,
      userProfileId: -1,
      typedMessage: '',
      isChatPinned: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.70
      },
      clickNotClose: true,
      isChatSidebarActive: true,
      isLoggedInUserProfileView: false
    };
  },
  watch: {
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  computed: {
    chatLastMessaged: function chatLastMessaged() {
      var _this = this;

      return function (userId) {
        return _this.$store.getters['chat/chatLastMessaged'](userId);
      };
    },
    chatUnseenMessages: function chatUnseenMessages() {
      var _this2 = this;

      return function (userId) {
        var unseenMsg = _this2.$store.getters['chat/chatUnseenMessages'](userId);

        if (unseenMsg) return unseenMsg;
      };
    },
    activeUser: function activeUser() {
      return this.$store.state.AppActiveUser;
    },
    getStatusColor: function getStatusColor() {
      var _this3 = this;

      return function (isActiveUser) {
        var userStatus = _this3.getUserStatus(isActiveUser);

        if (userStatus === 'online') {
          return 'success';
        } else if (userStatus === 'do not disturb') {
          return 'danger';
        } else if (userStatus === 'away') {
          return 'warning';
        } else {
          return 'grey';
        }
      };
    },
    chatContacts: function chatContacts() {
      return this.$store.getters['chat/chatContacts'];
    },
    contacts: function contacts() {
      return this.$store.getters['chat/contacts'];
    },
    searchQuery: {
      get: function get() {
        return this.$store.state.chat.chatSearchQuery;
      },
      set: function set(val) {
        this.$store.dispatch('chat/setChatSearchQuery', val);
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isActiveChatUser: function isActiveChatUser() {
      var _this4 = this;

      return function (userId) {
        return userId === _this4.activeChatUser;
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    getUserStatus: function getUserStatus(isActiveUser) {
      // return "active"
      return isActiveUser ? this.$store.state.AppActiveUser.status : this.contacts[this.activeChatUser].status;
    },
    closeProfileSidebar: function closeProfileSidebar(value) {
      this.activeProfileSidebar = value;
    },
    updateActiveChatUser: function updateActiveChatUser(contactId) {
      this.activeChatUser = contactId;

      if (this.$store.getters['chat/chatDataOfUser'](this.activeChatUser)) {
        this.$store.dispatch('chat/markSeenAllMessages', contactId);
      }

      var chatData = this.$store.getters['chat/chatDataOfUser'](this.activeChatUser);
      if (chatData) this.isChatPinned = chatData.isPinned;else this.isChatPinned = false;
      this.toggleChatSidebar();
      this.typedMessage = '';
    },
    showProfileSidebar: function showProfileSidebar(userId) {
      var openOnLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.userProfileId = userId;
      this.isLoggedInUserProfileView = openOnLeft;
      this.activeProfileSidebar = !this.activeProfileSidebar;
    },
    sendMsg: function sendMsg() {
      if (!this.typedMessage) return;
      var payload = {
        'isPinned': this.isChatPinned,
        'msg': {
          'textContent': this.typedMessage,
          'time': String(new Date()),
          'isSent': true,
          'isSeen': false
        },
        'id': this.activeChatUser
      };
      this.$store.dispatch('chat/sendChatMessage', payload);
      this.typedMessage = '';
      var scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
      scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    toggleIsChatPinned: function toggleIsChatPinned(value) {
      this.isChatPinned = value;
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.isChatSidebarActive = this.clickNotClose = false;
      } else {
        this.isChatSidebarActive = this.clickNotClose = true;
      }
    },
    toggleChatSidebar: function toggleChatSidebar() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!value && this.clickNotClose) return;
      this.isChatSidebarActive = value;
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    ChatContact: _ChatContact_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserProfile: _UserProfile_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChatNavbar: _ChatNavbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChatLog: _ChatLog_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.$store.registerModule('chat', _store_chat_moduleChat_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.$store.dispatch('chat/fetchContacts');
    this.$store.dispatch('chat/fetchChatContacts');
    this.$store.dispatch('chat/fetchChats');
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.unregisterModule('chat');
  },
  mounted: function mounted() {
    this.$store.dispatch('chat/setChatSearchQuery', '');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    contact: {
      type: Object,
      required: true
    },
    isActiveChatUser: {
      type: Boolean
    },
    lastMessaged: {
      type: String,
      default: ''
    },
    showLastMsg: {
      type: Boolean,
      default: false
    },
    unseenMsg: {
      type: Number,
      default: 0
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  computed: {
    chatData: function chatData() {
      return this.$store.getters['chat/chatDataOfUser'](this.userId);
    },
    activeUserImg: function activeUserImg() {
      return this.$store.state.AppActiveUser.photoURL;
    },
    senderImg: function senderImg() {
      var _this = this;

      return function (isSentByActiveUser) {
        if (isSentByActiveUser) return _this.$store.state.AppActiveUser.photoURL;else return _this.$store.getters['chat/contact'](_this.userId).photoURL;
      };
    },
    hasSentPreviousMsg: function hasSentPreviousMsg() {
      return function (last_sender, current_sender) {
        return last_sender === current_sender;
      };
    }
  },
  methods: {
    isSameDay: function isSameDay(time_to, time_from) {
      var date_time_to = new Date(Date.parse(time_to));
      var date_time_from = new Date(Date.parse(time_from));
      return date_time_to.getFullYear() === date_time_from.getFullYear() && date_time_to.getMonth() === date_time_from.getMonth() && date_time_to.getDate() === date_time_from.getDate();
    },
    toDate: function toDate(time) {
      var locale = 'en-us';
      var date_obj = new Date(Date.parse(time));
      var monthName = date_obj.toLocaleString(locale, {
        month: 'short'
      });
      return "".concat(date_obj.getDate(), " ").concat(monthName);
    },
    scrollToBottom: function scrollToBottom() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$parent.$el.scrollTop = _this2.$parent.$el.scrollHeight;
      });
    }
  },
  updated: function updated() {
    this.scrollToBottom();
  },
  mounted: function mounted() {
    this.scrollToBottom();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userId: {
      type: Number,
      required: true
    },
    isPinnedProp: {
      type: Boolean,
      required: true
    },
    isSidebarCollapsed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isPinnedLocal: {
      get: function get() {
        return this.isPinnedProp;
      },
      set: function set(val) {
        var _this = this;

        var chatData = this.$store.getters['chat/chatDataOfUser'](this.userId);

        if (chatData) {
          var payload = {
            id: this.userId,
            value: val
          };
          this.$store.dispatch('chat/toggleIsPinned', payload).then(function () {
            _this.$emit('toggleIsChatPinned', val);
          }).catch(function (err) {
            console.error(err);
          });
        } else {
          this.$emit('toggleIsChatPinned', val);
        }
      }
    },
    userDetails: function userDetails() {
      return this.$store.getters['chat/contact'](this.userId);
    },
    getStatusColor: function getStatusColor() {
      var _this2 = this;

      return function (isActiveUser) {
        var userStatus = _this2.getUserStatus(isActiveUser);

        if (userStatus === 'online') {
          return 'success';
        } else if (userStatus === 'do not disturb') {
          return 'danger';
        } else if (userStatus === 'away') {
          return 'warning';
        } else {
          return 'grey';
        }
      };
    }
  },
  methods: {
    getUserStatus: function getUserStatus(isActiveUser) {
      return isActiveUser ? this.$store.state.AppActiveUser.status : this.userDetails.status;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    userId: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    isLoggedInUser: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      counterDanger: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    chatUser: function chatUser() {
      return this.$store.getters['chat/chatUser'](this.userId);
    },
    activeLocal: {
      get: function get() {
        return this.active;
      },
      set: function set(value) {
        this.$emit('closeProfileSidebar', value);
      }
    },
    about: {
      get: function get() {
        return this.chatUser.about;
      },
      set: function set(value) {
        this.$store.dispatch('updateUserInfo', {
          about: value
        });
      }
    },
    status: {
      get: function get() {
        return this.chatUser.status;
      },
      set: function set(value) {
        this.$store.dispatch('updateUserInfo', {
          status: value
        });
      }
    },
    statusColor: function statusColor() {
      var userStatus = this.chatUser.status;

      if (userStatus === 'online') {
        return 'success';
      } else if (userStatus === 'do not disturb') {
        return 'danger';
      } else if (userStatus === 'away') {
        return 'warning';
      } else {
        return 'grey';
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: chat.scss\n    Description: Chat app's styles. This is imported in Chat.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#chat-app .vs-sidebar--background {\n  position: absolute;\n  z-index: 40000;\n}\n#chat-app #chat-list-sidebar .vs-sidebar,\n#chat-app #chat-profile-sidebar .vs-sidebar {\n  max-width: 400px;\n}\n#chat-app #chat-list-sidebar .chat-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n[dir] #chat-app #chat-list-sidebar .chat-scroll-area {\n  margin: auto;\n}\n#chat-app #chat-list-sidebar .chat-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#chat-app #chat-list-sidebar .chat-scroll-area .chat__contact {\n  transition: background-color 0.1s;\n}\n[dir] #chat-app #chat-list-sidebar .chat-scroll-area .chat__contact:hover {\n  background-color: #eee;\n}\n[dir] #chat-app .chat__bg {\n  background-color: #DFDBE5;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n[dir] #chat-app .chat__log .msg-time .vs-divider--text {\n  border-radius: 0.3rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  background: #fff !important;\n  border: 1px solid transparent;\n}\n#chat-app .chat-content-area {\n  position: relative;\n}\n#chat-app .chat-content-area .chat-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 134px);\n}\n[dir] #chat-app .chat-content-area .chat-content-scroll-area {\n  margin: auto;\n}\n#chat-app .chat-content-area .chat-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#chat-app .chat-content-area .chat-content-scroll-area .chat__input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n@media (min-width: 576px) {\n#chat-app .user-profile-container .vs-sidebar {\n    width: 100%;\n}\n}\n@media (min-width: 768px) {\n#chat-app .user-profile-container .vs-sidebar {\n    width: 33.33333%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "chat-app" }
    },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#chat-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose,
            id: "chat-list-sidebar"
          },
          model: {
            value: _vm.isChatSidebarActive,
            callback: function($$v) {
              _vm.isChatSidebarActive = $$v
            },
            expression: "isChatSidebarActive"
          }
        },
        [
          _c("user-profile", {
            staticClass: "user-profile-container",
            attrs: {
              active: _vm.activeProfileSidebar,
              userId: _vm.userProfileId,
              isLoggedInUser: _vm.isLoggedInUserProfileView
            },
            on: { closeProfileSidebar: _vm.closeProfileSidebar }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "chat__profile-search flex p-4" },
            [
              _c(
                "div",
                { staticClass: "relative inline-flex" },
                [
                  _vm.activeUser.photoURL
                    ? _c("vs-avatar", {
                        staticClass: "m-0 border-2 border-solid border-white",
                        attrs: { src: _vm.activeUser.photoURL, size: "40px" },
                        on: {
                          click: function($event) {
                            _vm.showProfileSidebar(
                              Number(_vm.activeUser.uid),
                              true
                            )
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0",
                    class: "bg-" + _vm.getStatusColor(true)
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full mx-5 input-rounded-full",
                attrs: {
                  "icon-no-border": "",
                  icon: "icon-search",
                  "icon-pack": "feather",
                  placeholder: "Search or start a new chat"
                },
                model: {
                  value: _vm.searchQuery,
                  callback: function($$v) {
                    _vm.searchQuery = $$v
                  },
                  expression: "searchQuery"
                }
              }),
              _vm._v(" "),
              _c("feather-icon", {
                staticClass: "md:inline-flex lg:hidden -ml-3 cursor-pointer",
                attrs: { icon: "XIcon" },
                on: {
                  click: function($event) {
                    return _vm.toggleChatSidebar(false)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-divider", { staticClass: "d-theme-border-grey-light m-0" }),
          _vm._v(" "),
          _c(
            _vm.scrollbarTag,
            {
              key: _vm.$vs.rtl,
              tag: "component",
              staticClass: "chat-scroll-area pt-4",
              attrs: { settings: _vm.settings }
            },
            [
              _c("div", { staticClass: "chat__chats-list mb-8" }, [
                _c("h3", { staticClass: "text-primary mb-5 px-4" }, [
                  _vm._v("Chats")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat__active-chats bordered-items" },
                  _vm._l(_vm.chatContacts, function(contact, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        staticClass: "cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.updateActiveChatUser(contact.uid)
                          }
                        }
                      },
                      [
                        _c("chat-contact", {
                          attrs: {
                            showLastMsg: "",
                            contact: contact,
                            lastMessaged: _vm.chatLastMessaged(contact.uid)
                              .time,
                            unseenMsg: _vm.chatUnseenMessages(contact.uid),
                            isActiveChatUser: _vm.isActiveChatUser(contact.uid)
                          }
                        })
                      ],
                      1
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "chat__contacts" }, [
                _c("h3", { staticClass: "text-primary mb-5 px-4" }, [
                  _vm._v("Contacts")
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "chat__contacts bordered-items" },
                  _vm._l(_vm.contacts, function(contact) {
                    return _c(
                      "li",
                      {
                        key: contact.uid,
                        staticClass: "cursor-pointer",
                        on: {
                          click: function($event) {
                            return _vm.updateActiveChatUser(contact.uid)
                          }
                        }
                      },
                      [_c("chat-contact", { attrs: { contact: contact } })],
                      1
                    )
                  }),
                  0
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "chat__bg no-scroll-content chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0",
          class: {
            "sidebar-spacer--wide": _vm.clickNotClose,
            "flex items-center justify-center": _vm.activeChatUser === null
          }
        },
        [
          _vm.activeChatUser
            ? [
                _c(
                  "div",
                  { staticClass: "chat__navbar" },
                  [
                    _c("chat-navbar", {
                      attrs: {
                        isSidebarCollapsed: !_vm.clickNotClose,
                        "user-id": _vm.activeChatUser,
                        isPinnedProp: _vm.isChatPinned
                      },
                      on: {
                        openContactsSidebar: function($event) {
                          return _vm.toggleChatSidebar(true)
                        },
                        showProfileSidebar: _vm.showProfileSidebar,
                        toggleIsChatPinned: _vm.toggleIsChatPinned
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  _vm.scrollbarTag,
                  {
                    key: _vm.$vs.rtl,
                    ref: "chatLogPS",
                    tag: "component",
                    staticClass:
                      "chat-content-scroll-area border border-solid d-theme-border-grey-light",
                    attrs: { settings: _vm.settings }
                  },
                  [
                    _c(
                      "div",
                      { ref: "chatLog", staticClass: "chat__log" },
                      [
                        _vm.activeChatUser
                          ? _c("chat-log", {
                              attrs: { userId: _vm.activeChatUser }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "chat__input flex p-4 bg-white" },
                  [
                    _c("vs-input", {
                      staticClass: "flex-1",
                      attrs: { placeholder: "Type Your Message" },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.sendMsg($event)
                        }
                      },
                      model: {
                        value: _vm.typedMessage,
                        callback: function($$v) {
                          _vm.typedMessage = $$v
                        },
                        expression: "typedMessage"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "bg-primary-gradient ml-4",
                        attrs: { type: "filled" },
                        on: { click: _vm.sendMsg }
                      },
                      [_vm._v("Send")]
                    )
                  ],
                  1
                )
              ]
            : [
                _c(
                  "div",
                  { staticClass: "flex flex-col items-center" },
                  [
                    _c("feather-icon", {
                      staticClass: "mb-4 bg-white p-8 shadow-md rounded-full",
                      attrs: {
                        icon: "MessageSquareIcon",
                        svgClasses: "w-16 h-16"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "h4",
                      {
                        staticClass:
                          " py-2 px-4 bg-white shadow-md rounded-full cursor-pointer",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.toggleChatSidebar(true)
                          }
                        }
                      },
                      [_vm._v("Start Conversation")]
                    )
                  ],
                  1
                )
              ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      staticClass: "chat__contact flex items-center px-2 pt-4 pb-2",
      class: {
        "bg-primary-gradient text-white shadow-lg": _vm.isActiveChatUser
      }
    },
    [
      _c(
        "div",
        { staticClass: "contact__avatar mr-1" },
        [
          _c("vs-avatar", {
            staticClass: "border-2 border-solid border-white",
            attrs: { src: _vm.contact.photoURL, size: "42px" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "contact__container w-full flex items-center justify-between overflow-hidden"
        },
        [
          _c(
            "div",
            { staticClass: "contact__info flex flex-col truncate w-5/6" },
            [
              _c(
                "h5",
                {
                  staticClass: "font-semibold",
                  class: { "text-white": _vm.isActiveChatUser }
                },
                [_vm._v(_vm._s(_vm.contact.displayName))]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "truncate" }, [
                _vm._v(
                  _vm._s(
                    _vm.showLastMsg
                      ? _vm.$store.getters["chat/chatLastMessaged"](
                          _vm.contact.uid
                        ).textContent
                      : _vm.contact.about
                  )
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "chat__contact__meta flex self-start flex-col items-end w-1/6"
            },
            [
              _c("span", { staticClass: "whitespace-no-wrap" }, [
                _vm._v(_vm._s(_vm._f("date")(_vm.lastMessaged)))
              ]),
              _vm._v(" "),
              _vm.unseenMsg
                ? _c(
                    "vs-chip",
                    { staticClass: "number", attrs: { color: "primary" } },
                    [_vm._v(_vm._s(_vm.unseenMsg))]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm.chatData
    ? _c(
        "div",
        { staticClass: "m-8", attrs: { id: "component-chat-log" } },
        _vm._l(_vm.chatData.msg, function(msg, index) {
          return _c(
            "div",
            { key: index, staticClass: "msg-grp-container" },
            [
              _vm.chatData.msg[index - 1]
                ? [
                    !_vm.isSameDay(msg.time, _vm.chatData.msg[index - 1].time)
                      ? _c("vs-divider", { staticClass: "msg-time" }, [
                          _c("span", [_vm._v(_vm._s(_vm.toDate(msg.time)))])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.hasSentPreviousMsg(
                      _vm.chatData.msg[index - 1].isSent,
                      msg.isSent
                    )
                      ? _c("div", { staticClass: "spacer mt-8" })
                      : _vm._e()
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "flex items-start",
                  class: [{ "flex-row-reverse": msg.isSent }]
                },
                [
                  _vm.chatData.msg[index - 1]
                    ? [
                        !_vm.hasSentPreviousMsg(
                          _vm.chatData.msg[index - 1].isSent,
                          msg.isSent
                        ) ||
                        !_vm.isSameDay(
                          msg.time,
                          _vm.chatData.msg[index - 1].time
                        )
                          ? [
                              _c("vs-avatar", {
                                staticClass:
                                  "border-2 shadow border-solid border-white m-0 flex-shrink-0",
                                class: msg.isSent
                                  ? "sm:ml-5 ml-3"
                                  : "sm:mr-5 mr-3",
                                attrs: {
                                  size: "40px",
                                  src: _vm.senderImg(msg.isSent)
                                }
                              })
                            ]
                          : _vm._e()
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  index == 0
                    ? [
                        _c("vs-avatar", {
                          staticClass:
                            "border-2 shadow border-solid border-white m-0 flex-shrink-0",
                          class: msg.isSent ? "sm:ml-5 ml-3" : "sm:mr-5 mr-3",
                          attrs: {
                            size: "40px",
                            src: _vm.senderImg(msg.isSent)
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.chatData.msg[index - 1]
                    ? [
                        !(
                          !_vm.hasSentPreviousMsg(
                            _vm.chatData.msg[index - 1].isSent,
                            msg.isSent
                          ) ||
                          !_vm.isSameDay(
                            msg.time,
                            _vm.chatData.msg[index - 1].time
                          )
                        )
                          ? _c("div", { staticClass: "mr-16" })
                          : _vm._e()
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "msg break-words relative shadow-md rounded py-3 px-4 mb-2 rounded-lg max-w-sm",
                      class: {
                        "bg-primary-gradient text-white": msg.isSent,
                        "border border-solid border-transparent bg-white": !msg.isSent
                      }
                    },
                    [_c("span", [_vm._v(_vm._s(msg.textContent))])]
                  )
                ],
                2
              )
            ],
            2
          )
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8& ***!
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
  return _vm.userId != null
    ? _c(
        "div",
        { staticClass: "chat__header" },
        [
          _c(
            "vs-navbar",
            {
              staticClass: "p-4 flex navbar-custom",
              attrs: { color: "white", type: "flat" }
            },
            [
              _c(
                "div",
                { staticClass: "relative flex mr-4" },
                [
                  _vm.isSidebarCollapsed
                    ? _c("feather-icon", {
                        staticClass: "mr-4 cursor-pointer",
                        attrs: { icon: "MenuIcon" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.$emit("openContactsSidebar")
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-avatar", {
                    staticClass: "m-0 border-2 border-solid border-white",
                    attrs: { size: "40px", src: _vm.userDetails.photoURL },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.$emit("showProfileSidebar", _vm.userId)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0",
                    class: "bg-" + _vm.getStatusColor(false)
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("h6", [_vm._v(_vm._s(_vm.userDetails.displayName))]),
              _vm._v(" "),
              _c("vs-spacer"),
              _vm._v(" "),
              _c("feather-icon", {
                staticClass: "cursor-pointer",
                attrs: {
                  icon: "StarIcon",
                  svgClasses: [
                    { "text-warning stroke-current": _vm.isPinnedLocal },
                    "w-6",
                    "h-6"
                  ]
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.isPinnedLocal = !_vm.isPinnedLocal
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "parentx-demo-2" } },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#chat-app",
            "position-right": !_vm.isLoggedInUser,
            "hidden-background": false,
            id: "chat-profile-sidebar"
          },
          model: {
            value: _vm.activeLocal,
            callback: function($$v) {
              _vm.activeLocal = $$v
            },
            expression: "activeLocal"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "header-sidebar relative flex flex-col p-0",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("feather-icon", {
                attrs: {
                  icon: "XIcon",
                  svgClasses: "m-2 cursor-pointer absolute top-0 right-0"
                },
                on: {
                  click: function($event) {
                    return _vm.$emit("closeProfileSidebar", false)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "relative inline-flex mx-auto mb-5 mt-6" },
                [
                  _c("vs-avatar", {
                    staticClass:
                      "m-0 border-white border-2 border-solid shadow-md",
                    attrs: { src: _vm.chatUser.photoURL, size: "70px" }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "h-5 w-5 border-white border-2 border-solid rounded-full absolute right-0 bottom-0",
                    class: "bg-" + _vm.statusColor
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "mr-2 self-center" }, [
                _vm._v(_vm._s(_vm.chatUser.displayName))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            _vm.scrollbarTag,
            {
              key: _vm.$vs.rtl,
              tag: "component",
              staticClass: "scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "div",
                { staticClass: "p-8" },
                [
                  _c(
                    "h6",
                    {
                      staticClass: "mb-2",
                      class: { "ml-4": _vm.isLoggedInUser }
                    },
                    [_vm._v("About")]
                  ),
                  _vm._v(" "),
                  _vm.isLoggedInUser
                    ? _c("vs-textarea", {
                        staticClass: "mb-10",
                        attrs: {
                          counter: "120",
                          maxlength: "120",
                          "counter-danger": _vm.counterDanger,
                          rows: "5"
                        },
                        on: {
                          "update:counterDanger": function($event) {
                            _vm.counterDanger = $event
                          },
                          "update:counter-danger": function($event) {
                            _vm.counterDanger = $event
                          }
                        },
                        model: {
                          value: _vm.about,
                          callback: function($$v) {
                            _vm.about = $$v
                          },
                          expression: "about"
                        }
                      })
                    : _c("p", [_vm._v(_vm._s(_vm.chatUser.about))]),
                  _vm._v(" "),
                  _vm.isLoggedInUser
                    ? _c("div", { staticClass: "userProfile__status" }, [
                        _c("h6", { staticClass: "mb-4" }, [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("ul", [
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "online",
                                    color: "success"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Active")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "do not disturb",
                                    color: "danger"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Do Not Disturb")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "away",
                                    color: "warning"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Away")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "vs-radio",
                                {
                                  attrs: {
                                    "vs-value": "offline",
                                    color: "grey"
                                  },
                                  model: {
                                    value: _vm.status,
                                    callback: function($$v) {
                                      _vm.status = $$v
                                    },
                                    expression: "status"
                                  }
                                },
                                [_vm._v("Offline")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    : _vm._e()
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/chat/moduleChat.js":
/*!***************************************************!*\
  !*** ./resources/js/src/store/chat/moduleChat.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleChatState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleChatState.js */ "./resources/js/src/store/chat/moduleChatState.js");
/* harmony import */ var _moduleChatMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleChatMutations.js */ "./resources/js/src/store/chat/moduleChatMutations.js");
/* harmony import */ var _moduleChatActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleChatActions.js */ "./resources/js/src/store/chat/moduleChatActions.js");
/* harmony import */ var _moduleChatGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleChatGetters.js */ "./resources/js/src/store/chat/moduleChatGetters.js");
/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: _moduleChatState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleChatMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleChatActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleChatGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/chat/moduleChatActions.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/chat/moduleChatActions.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  setChatSearchQuery: function setChatSearchQuery(_ref, query) {
    var commit = _ref.commit;
    commit('SET_CHAT_SEARCH_QUERY', query);
  },
  updateAboutChat: function updateAboutChat(_ref2, value) {
    var commit = _ref2.commit,
        rootState = _ref2.rootState;
    commit('UPDATE_ABOUT_CHAT', {
      rootState: rootState,
      value: value
    });
  },
  updateStatusChat: function updateStatusChat(_ref3, value) {
    var commit = _ref3.commit,
        rootState = _ref3.rootState;
    commit('UPDATE_STATUS_CHAT', {
      rootState: rootState,
      value: value
    });
  },
  // API CALLS
  sendChatMessage: function sendChatMessage(_ref4, payload) {
    var getters = _ref4.getters,
        commit = _ref4.commit,
        dispatch = _ref4.dispatch;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/chat/msg', {
        payload: payload
      }).then(function (response) {
        payload.chatData = getters.chatDataOfUser(payload.id);

        if (!payload.chatData) {
          dispatch('fetchChatContacts');
        }

        commit('SEND_CHAT_MESSAGE', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Get contacts from server. Also change in store
  fetchContacts: function fetchContacts(_ref5) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/chat/contacts', {
        params: {
          q: ''
        }
      }).then(function (response) {
        commit('UPDATE_CONTACTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Get chat-contacts from server. Also change in store
  fetchChatContacts: function fetchChatContacts(_ref6) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/chat/chat-contacts', {
        params: {
          q: ''
        }
      }).then(function (response) {
        commit('UPDATE_CHAT_CONTACTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // Get chats from server. Also change in store
  fetchChats: function fetchChats(_ref7) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/chat/chats').then(function (response) {
        commit('UPDATE_CHATS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  markSeenAllMessages: function markSeenAllMessages(_ref8, id) {
    var getters = _ref8.getters,
        commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/chat/mark-all-seen', {
        id: id
      }).then(function (response) {
        commit('MARK_SEEN_ALL_MESSAGES', {
          id: id,
          chatData: getters.chatDataOfUser(id)
        });
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  toggleIsPinned: function toggleIsPinned(_ref9, payload) {
    var commit = _ref9.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/chat/set-pinned/', {
        contactId: payload.id,
        value: payload.value
      }).then(function (response) {
        commit('TOGGLE_IS_PINNED', payload);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/chat/moduleChatGetters.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/chat/moduleChatGetters.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleChatGetters.js
  Description: Chat Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
// import contacts from '@/views/apps/chat/contacts'
/* harmony default export */ __webpack_exports__["default"] = ({
  chatDataOfUser: function chatDataOfUser(state) {
    return function (id) {
      return state.chats[Object.keys(state.chats).find(function (key) {
        return Number(key) === id;
      })];
    };
  },
  chatContacts: function chatContacts(state, getters) {
    var chatContacts = state.chatContacts.filter(function (contact) {
      return contact.displayName.toLowerCase().includes(state.chatSearchQuery.toLowerCase());
    });
    chatContacts.sort(function (x, y) {
      var timeX = getters.chatLastMessaged(x.uid).time;
      var timeY = getters.chatLastMessaged(y.uid).time;
      return new Date(timeY) - new Date(timeX);
    });
    return chatContacts.sort(function (x, y) {
      var chatDataX = getters.chatDataOfUser(x.uid);
      var chatDataY = getters.chatDataOfUser(y.uid);
      if (chatDataX && chatDataY) return chatDataY.isPinned - chatDataX.isPinned;else return 0;
    });
  },
  contacts: function contacts(state) {
    return state.contacts.filter(function (contact) {
      return contact.displayName.toLowerCase().includes(state.chatSearchQuery.toLowerCase());
    });
  },
  contact: function contact(state) {
    return function (contactId) {
      return state.contacts.find(function (contact) {
        return contact.uid === contactId;
      });
    };
  },
  chats: function chats(state) {
    return state.chats;
  },
  chatUser: function chatUser(state, getters, rootState) {
    return function (id) {
      return state.contacts.find(function (contact) {
        return contact.uid === id;
      }) || rootState.AppActiveUser;
    };
  },
  chatLastMessaged: function chatLastMessaged(state, getters) {
    return function (id) {
      if (getters.chatDataOfUser(id)) return getters.chatDataOfUser(id).msg.slice(-1)[0];else return false;
    };
  },
  chatUnseenMessages: function chatUnseenMessages(state, getters) {
    return function (id) {
      var unseenMsg = 0;
      var chatData = getters.chatDataOfUser(id);

      if (chatData) {
        chatData.msg.map(function (msg) {
          if (!msg.isSeen && !msg.isSent) unseenMsg++;
        });
      }

      return unseenMsg;
    };
  }
});

/***/ }),

/***/ "./resources/js/src/store/chat/moduleChatMutations.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/chat/moduleChatMutations.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/*=========================================================================================
  File Name: moduleChatMutations.js
  Description: Chat Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  UPDATE_ABOUT_CHAT: function UPDATE_ABOUT_CHAT(state, obj) {
    obj.rootState.AppActiveUser.about = obj.value;
  },
  UPDATE_STATUS_CHAT: function UPDATE_STATUS_CHAT(state, obj) {
    obj.rootState.AppActiveUser.status = obj.value;
  },
  // API AFTER
  SEND_CHAT_MESSAGE: function SEND_CHAT_MESSAGE(state, payload) {
    if (payload.chatData) {
      // If there's already chat. Push msg to existing chat
      state.chats[Object.keys(state.chats).find(function (key) {
        return Number(key) === payload.id;
      })].msg.push(payload.msg);
    } else {
      // Create New chat and add msg
      var chatId = payload.id;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.chats, [chatId], {
        isPinned: payload.isPinned,
        msg: [payload.msg]
      });
    }
  },
  UPDATE_CONTACTS: function UPDATE_CONTACTS(state, contacts) {
    state.contacts = contacts;
  },
  UPDATE_CHAT_CONTACTS: function UPDATE_CHAT_CONTACTS(state, chatContacts) {
    state.chatContacts = chatContacts;
  },
  UPDATE_CHATS: function UPDATE_CHATS(state, chats) {
    state.chats = chats;
  },
  SET_CHAT_SEARCH_QUERY: function SET_CHAT_SEARCH_QUERY(state, query) {
    state.chatSearchQuery = query;
  },
  MARK_SEEN_ALL_MESSAGES: function MARK_SEEN_ALL_MESSAGES(state, payload) {
    payload.chatData.msg.forEach(function (msg) {
      msg.isSeen = true;
    });
  },
  TOGGLE_IS_PINNED: function TOGGLE_IS_PINNED(state, payload) {
    state.chats[Object.keys(state.chats).find(function (key) {
      return Number(key) === payload.id;
    })].isPinned = payload.value;
  }
});

/***/ }),

/***/ "./resources/js/src/store/chat/moduleChatState.js":
/*!********************************************************!*\
  !*** ./resources/js/src/store/chat/moduleChatState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleChatState.js
  Description: Chat Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  // Chat Search Query
  chatSearchQuery: '',
  // Stores All Contacts
  contacts: [],
  // Stores Chat Contacts
  chatContacts: [],
  // Stores Chat data(log)
  chats: {}
});

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=9701a608& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=9701a608& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/Chat.vue?vue&type=template&id=9701a608&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_9701a608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=template&id=4fb83bb4& */ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&");
/* harmony import */ var _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatContact.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatContact.vue?vue&type=template&id=4fb83bb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatContact.vue?vue&type=template&id=4fb83bb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatContact_vue_vue_type_template_id_4fb83bb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=template&id=7c7f3250& */ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&");
/* harmony import */ var _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatLog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatLog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatLog.vue?vue&type=template&id=7c7f3250& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatLog.vue?vue&type=template&id=7c7f3250&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatLog_vue_vue_type_template_id_7c7f3250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatNavbar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatNavbar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatNavbar.vue?vue&type=template&id=da997ba8& */ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&");
/* harmony import */ var _ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatNavbar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/ChatNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatNavbar.vue?vue&type=template&id=da997ba8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/ChatNavbar.vue?vue&type=template&id=da997ba8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatNavbar_vue_vue_type_template_id_da997ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=087da66a& */ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/chat/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=087da66a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/chat/UserProfile.vue?vue&type=template&id=087da66a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_087da66a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);