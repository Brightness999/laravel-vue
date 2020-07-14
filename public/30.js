(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: function _default() {}
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      activePrompt: false,
      taskLocal: {
        title: '',
        desc: '',
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: [],
        list: [],
        invoice_products: [{
          product_name: ''
        }]
      },
      taskLocalData: {
        list: []
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    taskTags: function taskTags() {
      return this.$store.state.todo.taskTags;
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.taskLocal.title !== '';
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit('closeSidebar'); // this.$validator.reset()
          // this.initValues()
        }
      }
    }
  },
  methods: {
    clearFields: function clearFields() {
      this.taskLocalData.list = [];
      Object.assign(this.taskLocal, {
        title: '',
        desc: '',
        list: [],
        invoice_products: [{
          product_name: ''
        }],
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: []
      });
      this.$emit('closeSidebar');
    },
    addTodo: function addTodo() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var arr = _this.taskLocalData.list;

          for (var index = 0; index < _this.taskLocalData.list.length; index++) {
            if (_this.taskLocalData.list[index].isTrashed === true) {
              var indexI = _this.taskLocalData.list.indexOf(_this.taskLocalData.list[index]);

              if (indexI > -1) {
                _this.taskLocalData.list.splice(indexI, 1);
              }
            }
          }

          _this.taskLocal.list = _this.taskLocalData.list;

          _this.$store.dispatch('todo/addTask', Object.assign({}, _this.taskLocal));

          _this.clearFields();

          _this.taskLocalData.list = [];

          _this.$emit('closeSidebar');

          _this.showAddSuccess();
        }
      });
    },
    showAddSuccess: function showAddSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'Goal Added',
        text: 'The goal was successfully added'
      });
    },
    addNewRow: function addNewRow() {
      this.taskLocalData.list.push({
        name: this.taskLocal.invoice_products.slice(-1).pop().product_name,
        isTrashed: false
      });
      this.taskLocal.invoice_products = [{
        product_name: ''
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/Goal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_todo_moduleTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/todo/moduleTodo.js */ "./resources/js/src/store/todo/moduleTodo.js");
/* harmony import */ var _TodoAddNew_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoAddNew.vue */ "./resources/js/src/views/apps/goals/TodoAddNew.vue");
/* harmony import */ var _TodoTask_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoTask.vue */ "./resources/js/src/views/apps/goals/TodoTask.vue");
/* harmony import */ var _TodoFilters_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoFilters.vue */ "./resources/js/src/views/apps/goals/TodoFilters.vue");
/* harmony import */ var _TodoEdit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoEdit.vue */ "./resources/js/src/views/apps/goals/TodoEdit.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
var _computed;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      currFilter: '',
      clickNotClose: true,
      displayPrompt: false,
      taskIdToEdit: 0,
      isSidebarActive: true,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      },
      openMailId: null,
      selectedMails: [],
      showThread: false,
      isEmailSidebarActive: true
    };
  },
  watch: {
    todoFilter: function todoFilter() {
      var scroll_el = this.$refs.taskListPS.$el || this.$refs.taskListPS;
      scroll_el.scrollTop = 0;
      this.toggleTodoSidebar(); // Fetch Tasks

      var filter = this.$route.params.filter;
      this.$store.dispatch('todo/fetchTasks', {
        filter: filter
      });
      this.$store.commit('todo/UPDATE_TODO_FILTER', filter);
    },
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  computed: (_computed = {
    todo: function todo() {
      return this.$store.state.todo.todoArray;
    },
    todoFilter: function todoFilter() {
      return this.$route.params.filter;
    },
    taskList: function taskList() {
      return this.$store.getters['todo/queriedTasks'];
    },
    searchQuery: {
      get: function get() {
        return this.$store.state.todo.todoSearchQuery;
      },
      set: function set(val) {
        this.$store.dispatch('todo/setTodoSearchQuery', val);
      }
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    mailFilter: function mailFilter() {
      return this.$route.params.filter;
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
    }
  }, _defineProperty(_computed, "scrollbarTag", function scrollbarTag() {
    return this.$store.getters.scrollbarTag;
  }), _defineProperty(_computed, "isMailSelected", function isMailSelected() {
    var _this = this;

    return function (mailId) {
      return _this.selectedMails.indexOf(mailId) !== -1;
    };
  }), _defineProperty(_computed, "windowWidth", function windowWidth() {
    return this.$store.state.windowWidth;
  }), _computed),
  methods: {
    showDisplayPrompt: function showDisplayPrompt(itemId) {
      this.taskIdToEdit = itemId;
      this.displayPrompt = true, this.isEmailSidebarActive = true, this.taskId = itemId;
    },
    hidePrompt: function hidePrompt() {
      this.displayPrompt = false;
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isSidebarActive = this.clickNotClose = false;
      } else {
        this.isSidebarActive = this.clickNotClose = true;
      }
    },
    toggleTodoSidebar: function toggleTodoSidebar() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!value && this.clickNotClose) return;
      this.isSidebarActive = value;
    },
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
      this.isEmailSidebarActive = false;
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
    TodoAddNew: _TodoAddNew_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TodoTask: _TodoTask_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TodoFilters: _TodoFilters_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TodoEdit: _TodoEdit_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  created: function created() {
    this.$store.registerModule('todo', _store_todo_moduleTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.setSidebarWidth();
    var filter = this.$route.params.filter; // Fetch Tasks

    this.$store.dispatch('todo/fetchTasks', {
      filter: filter
    });
    this.$store.commit('todo/UPDATE_TODO_FILTER', filter); // Fetch Tags

    this.$store.dispatch('todo/fetchTags');
  },
  beforeUpdate: function beforeUpdate() {
    this.currFilter = this.$route.params.filter;
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.unregisterModule('todo');
  },
  mounted: function mounted() {
    this.$store.dispatch('todo/setTodoSearchQuery', '');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewSidebar.vue */ "./resources/js/src/views/apps/goals/DataViewSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      taskLocal: {
        title: '',
        desc: '',
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: []
      },
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    taskTags: function taskTags() {
      return this.$store.state.todo.taskTags;
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.taskLocal.name !== '';
    }
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    clearFields: function clearFields() {
      Object.assign(this.taskLocal, {
        title: '',
        desc: '',
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: []
      });
    },
    addTodo: function addTodo() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$store.dispatch('todo/addTask', Object.assign({}, _this.taskLocal));

          _this.clearFields();
        }
      });
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    }
  },
  components: {
    DataViewSidebar: _DataViewSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      list: [],
      comments: [{
        commentbox: ''
      }],
      defaultTaskLocalData: Object.assign({}, this.$store.getters['todo/getTask'](this.taskId))
    };
  },
  props: {
    isEmailSidebarActive: {
      type: Boolean,
      required: true
    },
    displayPrompt: {
      type: Boolean,
      required: true
    },
    taskId: {
      type: Number,
      required: true
    }
  },
  watch: {
    isEmailSidebarActive: function isEmailSidebarActive(value) {
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
    taskLocalData: {
      get: function get() {
        if (!this.$store.getters['todo/getTask'](this.taskId).invoice_products) this.$store.getters['todo/getTask'](this.taskId).invoice_products = [{
          product_name: ''
        }];
        console.log(this.$store.state.tasks);

        if (this.$store.getters['todo/getTask'](this.taskId).objectives !== undefined) {
          this.list = this.$store.getters['todo/getTask'](this.taskId).objectives;
        } else {
          this.list = [];
        }

        if (this.$store.getters['todo/getTask'](this.taskId).comments !== undefined) {
          this.comments = this.$store.getters['todo/getTask'](this.taskId).comments;
        } else {
          this.comments = [];
        }

        if (!this.$store.getters['todo/getTask'](this.taskId).comments) this.$store.getters['todo/getTask'](this.taskId).comments = [];
        if (!this.$store.getters['todo/getTask'](this.taskId).objectives) this.$store.getters['todo/getTask'](this.taskId).objectives = [];
        return this.$store.getters['todo/getTask'](this.taskId);
      },
      set: function set(value) {}
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    taskTags: function taskTags() {
      return this.$store.state.todo.taskTags;
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.taskLocalData.title !== '';
    }
  },
  methods: {
    deleteRow: function deleteRow(index, invoice_product) {
      var idx = this.taskLocalData.invoice_products.indexOf(invoice_product);

      if (idx > -1) {
        this.taskLocalData.invoice_products.splice(idx, 1);
      }

      this.calculateTotal();
    },
    addNewRow: function addNewRow() {
      this.list.push({
        name: this.taskLocalData.invoice_products.slice(-1).pop().product_name,
        isTrashed: false
      });
      this.taskLocalData.invoice_products = [{
        product_name: ''
      }];
      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData));
    },
    addNewComment: function addNewComment() {
      var userInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.comments.push({
        author: userInfo.displayName,
        img: userInfo.photoURL,
        comment: this.comments.commentbox
      });
      this.comments.commentbox = ''; // this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData))
    },
    removeTodo: function removeTodo() {
      var _this2 = this;

      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {
        isTrashed: true
      })).then(function () {
        // Fetch Tasks
        _this2.$store.dispatch('todo/fetchTasks', {
          filter: _this2.$route.params.filter
        });
      }).catch(function (error) {
        console.error(error);
      });
    },
    toggleIsStarred: function toggleIsStarred() {
      var _this3 = this;

      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {
        isStarred: !this.taskLocalData.isStarred
      })).then(function (response) {
        _this3.taskLocalData.isStarred = response.data.isStarred;
      }).catch(function (error) {
        console.error(error);
      });
    },
    init: function init() {
      this.taskLocalData = this.defaultTaskLocalData;
      this.taskLocalData.list = this.list;
      this.taskLocalData.comments = this.comments;
      this.$store.dispatch('todo/updateTask', this.defaultTaskLocalData);
      this.$emit('closeSidebar');
    },
    submitTodo: function submitTodo() {
      this.taskLocalData.list = this.list;
      this.taskLocalData.comments = this.comments;
      this.$store.dispatch('todo/updateTask', this.taskLocalData);
      this.$emit('closeSidebar');
      this.showUpdateSuccess();
    },
    moveToTrash: function moveToTrash() {
      var _this4 = this;

      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData.list, {
        isTrashed: true
      })).then(function (response) {
        // console.log(response.data);
        _this4.taskLocalData.list.isTrashed = response.data.isTrashed;
        _this4.$el.style.display = 'none'; // Hides element from DOM
      }).catch(function (error) {
        console.error(error);
      });
    },
    showUpdateSuccess: function showUpdateSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'Goal Updated',
        text: 'The selected goal was successfully updated'
      });
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
    Prism: vue_prism_component__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      todoFilters: [{
        filterName: 'Starred',
        filter: 'starred',
        icon: 'StarIcon'
      }, {
        filterName: 'Important',
        filter: 'important',
        icon: 'InfoIcon'
      }, {
        filterName: 'Completed',
        filter: 'completed',
        icon: 'CheckIcon'
      }, {
        filterName: 'Trashed',
        filter: 'trashed',
        icon: 'TrashIcon'
      }]
    };
  },
  computed: {
    taskTags: function taskTags() {
      return this.$store.state.todo.taskTags;
    },
    todoFilter: function todoFilter() {
      return this.$route.params.filter;
    },
    baseUrl: function baseUrl() {
      var path = this.$route.path;
      return path.slice(0, path.lastIndexOf('/'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  computed: {
    taskLocalData: {
      get: function get() {
        return this.$store.getters['todo/getTask'](this.taskId);
      }
    },
    isCompleted: {
      get: function get() {
        return this.taskLocalData.isCompleted;
      },
      set: function set(value) {
        var _this = this;

        this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {
          isCompleted: value
        })).then(function (response) {
          _this.taskLocalData.isCompleted = response.data.isCompleted;
        }).catch(function (error) {
          console.error(error);
        });
      }
    },
    todoLabelColor: function todoLabelColor() {
      var _this2 = this;

      return function (label) {
        var tags = _this2.$store.state.todo.taskTags;
        return tags.find(function (tag) {
          return tag.value === label;
        }).color;
      };
    }
  },
  methods: {
    toggleIsImportant: function toggleIsImportant() {
      var _this3 = this;

      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {
        isImportant: !this.taskLocalData.isImportant
      })).then(function (response) {
        _this3.taskLocalData.isImportant = response.data.isImportant;
      }).catch(function (error) {
        console.error(error);
      });
    },
    toggleIsStarred: function toggleIsStarred() {
      var _this4 = this;

      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {
        isStarred: !this.taskLocalData.isStarred
      })).then(function (response) {
        _this4.taskLocalData.isStarred = response.data.isStarred;
      }).catch(function (error) {
        console.error(error);
      });
    },
    moveToTrash: function moveToTrash() {
      var _this5 = this;

      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {
        isTrashed: true
      })).then(function (response) {
        // console.log(response.data);
        _this5.taskLocalData.isTrashed = response.data.isTrashed;
        _this5.$el.style.display = 'none'; // Hides element from DOM
      }).catch(function (error) {
        console.error(error);
      }); // Un-comment below line if you want to fetch task after task is deleted
      // this.$store.dispatch("todo/fetchTasks", {filter: this.$route.params.filter})
    },
    displayPrompt: function displayPrompt() {
      this.$emit('showDisplayPrompt', this.taskId);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar {\n  z-index: 52010;\n  width: 40%;\n  max-width: 90vw;\n}\n.add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .vs-sidebar--items .vs-list--slot {\n  width: 100% !important;\n  display: inline-flex !important;\n}\n[dir] .add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .vs-sidebar--items .vs-list--slot {\n  margin: 0 !important;\n}\n.add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .vs-sidebar--items .vs-list--slot .vs-con-input-label {\n  width: 100%;\n}\n[dir=ltr] .add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .vs-sidebar--items .vs-list--slot .cursor-pointer {\n  float: right;\n}\n[dir=rtl] .add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .vs-sidebar--items .vs-list--slot .cursor-pointer {\n  float: left;\n}\n[dir] .add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-4d6a40ab]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-4d6a40ab] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\n.scroll-area--data-list-add-new[data-v-4d6a40ab]:not(.ps) {\n  overflow-y: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: todo.scss\n    Description: Todo app's styles. This is imported in Todo.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#todo-app .vs-sidebar--background {\n  position: absolute;\n}\n#todo-app .todo-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n[dir] #todo-app .todo-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 50px);\n}\n[dir] #todo-app .todo-content-scroll-area {\n  margin: auto;\n}\n#todo-app .todo-content-scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n#todo-app .todo_todo-item {\n  transition: all 0.35s;\n}\n#todo-app .list-item-component {\n  transition: background-color 0.2s, transform 0.2s;\n}\n[dir] #todo-app .list-item-component {\n  border-top: 1px solid #dae1e7;\n}\n#todo-app .list-item-component:hover {\n  transition: all 0.2s;\n}\n[dir] #todo-app .list-item-component:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n[dir=ltr] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-right: 2px !important;\n}\n[dir=rtl] #todo-app .todo-list .todo-tags .con-vs-chip {\n  margin-left: 2px !important;\n}\n[dir] #todo-app .goal {\n  padding-bottom: 1rem;\n}\n[dir] #todo-app .goal-view-sidebar .vs-sidebar--items {\n  padding: 0 3rem !important;\n}\n[dir] #todo-app .goal-view-sidebar .vs-sidebar--items .p-12 {\n  padding: 0 0rem !important;\n}\n#todo-app .goal-view-sidebar .vs-sidebar--items .vs-list--slot {\n  width: 100%;\n  display: inline-flex;\n}\n[dir] #todo-app .goal-view-sidebar .vs-sidebar--items .vs-list--slot {\n  margin: 0 !important;\n}\n#todo-app .goal-view-sidebar .vs-sidebar--items .vs-list--slot .vs-con-input-label {\n  width: 100%;\n}\n[dir=ltr] #todo-app .goal-view-sidebar .vs-sidebar--items .vs-list--slot .cursor-pointer {\n  float: right;\n}\n[dir=rtl] #todo-app .goal-view-sidebar .vs-sidebar--items .vs-list--slot .cursor-pointer {\n  float: left;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Goal.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true& ***!
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
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [
            _vm._v(
              _vm._s(
                Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE"
              ) + " GOAL"
            )
          ]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        _vm.scrollbarTag,
        {
          key: _vm.$vs.rtl,
          tag: "component",
          staticClass: "scroll-area--data-list-add-new",
          attrs: { settings: _vm.settings }
        },
        [
          _c("div", { staticClass: "p-6" }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col ml-auto flex" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      icon: "InfoIcon",
                      svgClasses: [
                        {
                          "text-success stroke-current":
                            _vm.taskLocal.isImportant
                        },
                        "w-5",
                        "h-5 mr-4"
                      ]
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.taskLocal.isImportant = !_vm.taskLocal.isImportant
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: {
                      icon: "StarIcon",
                      svgClasses: [
                        {
                          "text-warning stroke-current": _vm.taskLocal.isStarred
                        },
                        "w-5",
                        "h-5 mr-4"
                      ]
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.taskLocal.isStarred = !_vm.taskLocal.isStarred
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer flex",
                      attrs: { "vs-custom-content": "" }
                    },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "TagIcon", svgClasses: "h-5 w-5" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        { staticStyle: { "z-index": "200001" } },
                        _vm._l(_vm.taskTags, function(tag, index) {
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
                                  attrs: { "vs-value": tag.value },
                                  model: {
                                    value: _vm.taskLocal.tags,
                                    callback: function($$v) {
                                      _vm.$set(_vm.taskLocal, "tags", $$v)
                                    },
                                    expression: "taskLocal.tags"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(tag.text) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
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
                    staticClass: "w-full mb-4 mt-5",
                    attrs: {
                      name: "title",
                      placeholder: "Title",
                      color: _vm.validateForm ? "success" : "danger"
                    },
                    model: {
                      value: _vm.taskLocal.title,
                      callback: function($$v) {
                        _vm.$set(_vm.taskLocal, "title", $$v)
                      },
                      expression: "taskLocal.title"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "vs-list",
                        [
                          _c(
                            "draggable",
                            {
                              key: _vm.taskLocalData.list.length,
                              staticClass: "cursor-move",
                              attrs: { list: _vm.taskLocalData.list }
                            },
                            [
                              _c(
                                "transition-group",
                                _vm._l(_vm.taskLocalData.list, function(
                                  listItem
                                ) {
                                  return !listItem.isTrashed
                                    ? _c(
                                        "vs-list-item",
                                        {
                                          key: listItem,
                                          staticClass: "list-item"
                                        },
                                        [
                                          _c("vs-avatar", {
                                            attrs: { slot: "avatar" },
                                            slot: "avatar"
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            staticClass:
                                              "vs-input-no-border vs-input-no-shdow-focus",
                                            attrs: { type: "text" },
                                            model: {
                                              value: listItem.name,
                                              callback: function($$v) {
                                                _vm.$set(listItem, "name", $$v)
                                              },
                                              expression: "listItem.name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          !_vm.taskLocalData.list.isTrashed
                                            ? _c("feather-icon", {
                                                staticClass: "cursor-pointer",
                                                attrs: {
                                                  icon: "TrashIcon",
                                                  svgClasses: "w-5 h-5"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.stopPropagation()
                                                    listItem.isTrashed = true
                                                  }
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    _vm._l(_vm.taskLocal.invoice_products, function(
                      invoice_product,
                      k
                    ) {
                      return _c("div", { key: k }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light"
                          },
                          [
                            _c(
                              "vx-input-group",
                              [
                                _c("vs-input", {
                                  staticClass:
                                    "vs-input-no-border vs-input-no-shdow-focus",
                                  attrs: {
                                    name: "objective",
                                    type: "text",
                                    placeholder: "New objective"
                                  },
                                  model: {
                                    value: invoice_product.product_name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        invoice_product,
                                        "product_name",
                                        $$v
                                      )
                                    },
                                    expression: "invoice_product.product_name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("template", { slot: "append" }, [
                                  _c(
                                    "div",
                                    { staticClass: "append-text btn-addon" },
                                    [
                                      _c(
                                        "vs-button",
                                        {
                                          attrs: { color: "primary" },
                                          on: { click: _vm.addNewRow }
                                        },
                                        [_vm._v("Add")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
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
        "div",
        {
          staticClass: "flex flex-wrap items-center p-6",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c("vs-button", { staticClass: "mr-6", on: { click: _vm.addTodo } }, [
            _vm._v("Submit")
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "border", color: "danger" },
              on: { click: _vm.clearFields }
            },
            [_vm._v("Cancel")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=template&id=1a382376&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/Goal.vue?vue&type=template&id=1a382376& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "todo-app" }
    },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#todo-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose
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
          _c("todo-add-new"),
          _vm._v(" "),
          _c(
            _vm.scrollbarTag,
            {
              key: _vm.$vs.rtl,
              tag: "component",
              staticClass: "todo-scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c("todo-filters", {
                on: { closeSidebar: _vm.toggleTodoSidebar }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "no-scroll-content border border-r-0 border-b-0 border-t-0 border-solid d-theme-border-grey-light no-scroll-content",
          class: { "sidebar-spacer": _vm.clickNotClose }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light"
            },
            [
              _c("feather-icon", {
                staticClass:
                  "md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer",
                attrs: { icon: "MenuIcon" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.toggleTodoSidebar(true)
                  }
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass:
                  "vs-input-no-border vs-input-no-shdow-focus w-full",
                attrs: {
                  "icon-no-border": "",
                  size: "large",
                  "icon-pack": "feather",
                  icon: "icon-search",
                  placeholder: "Search..."
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
            _vm.scrollbarTag,
            {
              key: _vm.$vs.rtl,
              ref: "taskListPS",
              tag: "component",
              staticClass: "todo-content-scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "todo-list",
                  attrs: { name: "list-enter-up", tag: "ul", appear: "" }
                },
                _vm._l(_vm.taskList, function(task, index) {
                  return _c(
                    "li",
                    {
                      key: String(_vm.currFilter) + String(task.id),
                      staticClass: "cursor-pointer todo_todo-item",
                      style: [{ transitionDelay: index * 0.1 + "s" }]
                    },
                    [
                      _c("todo-task", {
                        attrs: { taskId: task.id },
                        on: {
                          showDisplayPrompt: function($event) {
                            return _vm.showDisplayPrompt($event)
                          }
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
      _vm.displayPrompt
        ? _c("todo-edit", {
            attrs: {
              isEmailSidebarActive: _vm.isEmailSidebarActive,
              displayPrompt: _vm.displayPrompt,
              taskId: _vm.taskIdToEdit
            },
            on: {
              hideDisplayPrompt: _vm.hidePrompt,
              closeSidebar: _vm.closeMailViewSidebar
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=template&id=58cb0bd7&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=template&id=58cb0bd7& ***!
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
    { staticClass: "px-6 pb-2 pt-6" },
    [
      _c("data-view-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "w-full", on: { click: _vm.addNewData } },
        [_vm._v("Add Goal")]
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: {
            title: "Add Task",
            "accept-text": "Add Task",
            "button-cancel": "border",
            "is-valid": _vm.validateForm,
            active: _vm.activePrompt
          },
          on: {
            cancel: _vm.clearFields,
            accept: _vm.addTodo,
            close: _vm.clearFields,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c("div", [
            _c("form", [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col ml-auto flex" },
                  [
                    _c("feather-icon", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        icon: "InfoIcon",
                        svgClasses: [
                          {
                            "text-success stroke-current":
                              _vm.taskLocal.isImportant
                          },
                          "w-5",
                          "h-5 mr-4"
                        ]
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.taskLocal.isImportant = !_vm.taskLocal.isImportant
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("feather-icon", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        icon: "StarIcon",
                        svgClasses: [
                          {
                            "text-warning stroke-current":
                              _vm.taskLocal.isStarred
                          },
                          "w-5",
                          "h-5 mr-4"
                        ]
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.taskLocal.isStarred = !_vm.taskLocal.isStarred
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        staticClass: "cursor-pointer flex",
                        attrs: { "vs-custom-content": "" }
                      },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "TagIcon", svgClasses: "h-5 w-5" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-menu",
                          { staticStyle: { "z-index": "200001" } },
                          _vm._l(_vm.taskTags, function(tag, index) {
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
                                    attrs: { "vs-value": tag.value },
                                    model: {
                                      value: _vm.taskLocal.tags,
                                      callback: function($$v) {
                                        _vm.$set(_vm.taskLocal, "tags", $$v)
                                      },
                                      expression: "taskLocal.tags"
                                    }
                                  },
                                  [_vm._v(_vm._s(tag.text))]
                                )
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full" },
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
                      staticClass: "w-full mb-4 mt-5",
                      attrs: {
                        name: "name",
                        placeholder: "Title",
                        color: _vm.validateForm ? "success" : "danger"
                      },
                      model: {
                        value: _vm.taskLocal.name,
                        callback: function($$v) {
                          _vm.$set(_vm.taskLocal, "name", $$v)
                        },
                        expression: "taskLocal.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-textarea", {
                      attrs: { rows: "5", label: "Add description" },
                      model: {
                        value: _vm.taskLocal.desc,
                        callback: function($$v) {
                          _vm.$set(_vm.taskLocal, "desc", $$v)
                        },
                        expression: "taskLocal.desc"
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=template&id=6e331322&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=template&id=6e331322& ***!
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
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "full-vs-sidebar goal-view-sidebar items-no-padding",
          attrs: {
            "click-not-close": "",
            parent: "#todo-app",
            "hidden-background": true,
            "position-right": ""
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
          _vm.taskLocalData
            ? _c(
                "div",
                {
                  staticClass: "scroll-area--data-list-add-new",
                  attrs: { id: "taskLocalData" }
                },
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
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col ml-auto flex" },
                        [
                          _c("feather-icon", {
                            staticClass: "cursor-pointer",
                            attrs: {
                              icon: "StarIcon",
                              svgClasses: [
                                {
                                  "text-warning stroke-current":
                                    _vm.taskLocalData.isStarred
                                },
                                "w-5",
                                "h-5 mr-4"
                              ]
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.toggleIsStarred($event)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown",
                            {
                              staticClass: "cursor-pointer flex",
                              attrs: { "vs-custom-content": "" }
                            },
                            [
                              _c("feather-icon", {
                                attrs: {
                                  icon: "TagIcon",
                                  svgClasses: "h-5 w-5"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                { staticStyle: { "z-index": "200001" } },
                                _vm._l(_vm.taskTags, function(tag, index) {
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
                                          attrs: { "vs-value": tag.value },
                                          model: {
                                            value: _vm.taskLocalData.tags,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.taskLocalData,
                                                "tags",
                                                $$v
                                              )
                                            },
                                            expression: "taskLocalData.tags"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(tag.text) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light"
                      },
                      [
                        _c(
                          "vx-input-group",
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
                              staticClass:
                                "vs-input-no-border vs-input-no-shdow-focus",
                              attrs: {
                                name: "objective",
                                type: "text",
                                placeholder: "New objective"
                              },
                              model: {
                                value: _vm.taskLocalData.title,
                                callback: function($$v) {
                                  _vm.$set(_vm.taskLocalData, "title", $$v)
                                },
                                expression: "taskLocalData.title"
                              }
                            })
                          ],
                          1
                        )
                      ],
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
                            value: _vm.errors.has("item-name"),
                            expression: "errors.has('item-name')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("item-name")))]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "vs-tabs",
                        [
                          _c("vs-tab", { attrs: { label: "Objectives" } }, [
                            _c(
                              "div",
                              { staticClass: "mt-5" },
                              [
                                _c(
                                  "vs-list",
                                  [
                                    _c(
                                      "draggable",
                                      {
                                        key: _vm.list.length,
                                        staticClass: "cursor-move",
                                        attrs: { list: _vm.list }
                                      },
                                      [
                                        _c(
                                          "transition-group",
                                          _vm._l(_vm.list, function(listItem) {
                                            return !listItem.isTrashed
                                              ? _c(
                                                  "vs-list-item",
                                                  {
                                                    key: listItem,
                                                    staticClass: "list-item"
                                                  },
                                                  [
                                                    _c("vs-avatar", {
                                                      attrs: { slot: "avatar" },
                                                      slot: "avatar"
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      staticClass:
                                                        "vs-input-no-border vs-input-no-shdow-focus",
                                                      attrs: { type: "text" },
                                                      model: {
                                                        value: listItem.name,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            listItem,
                                                            "name",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "listItem.name"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    !listItem.isTrashed
                                                      ? _c("feather-icon", {
                                                          staticClass:
                                                            "cursor-pointer",
                                                          attrs: {
                                                            icon: "TrashIcon",
                                                            svgClasses:
                                                              "w-5 h-5"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.stopPropagation()
                                                              listItem.isTrashed = true
                                                            }
                                                          }
                                                        })
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          }),
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              _vm._l(
                                _vm.taskLocalData.invoice_products,
                                function(invoice_product, k) {
                                  return _c("div", { key: k }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light"
                                      },
                                      [
                                        _c(
                                          "vx-input-group",
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
                                              staticClass:
                                                "vs-input-no-border vs-input-no-shdow-focus",
                                              attrs: {
                                                name: "objective",
                                                type: "text",
                                                placeholder: "New objective"
                                              },
                                              model: {
                                                value:
                                                  invoice_product.product_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    invoice_product,
                                                    "product_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "invoice_product.product_name"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("template", { slot: "append" }, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "append-text btn-addon"
                                                },
                                                [
                                                  _c(
                                                    "vs-button",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: _vm.addNewRow
                                                      }
                                                    },
                                                    [_vm._v("Add")]
                                                  )
                                                ],
                                                1
                                              )
                                            ])
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                }
                              ),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-tab", { attrs: { label: "Comments" } }, [
                            _c(
                              "div",
                              { staticClass: "comments-container mt-4" },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "user-comments-list" },
                                  _vm._l(_vm.comments, function(
                                    commentedUser,
                                    commentIndex
                                  ) {
                                    return _c(
                                      "li",
                                      {
                                        key: commentIndex,
                                        staticClass:
                                          "commented-user flex items-center mb-4"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "mr-3" },
                                          [
                                            _c("vs-avatar", {
                                              staticClass: "m-0",
                                              attrs: {
                                                src: commentedUser.img,
                                                size: "30px"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "leading-tight" },
                                          [
                                            _c(
                                              "p",
                                              { staticClass: "font-medium" },
                                              [
                                                _vm._v(
                                                  _vm._s(commentedUser.author)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "text-xs" },
                                              [
                                                _vm._v(
                                                  _vm._s(commentedUser.comment)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "post-comment" },
                              [
                                _c("vs-textarea", {
                                  staticClass: "mb-2",
                                  attrs: { label: "Add Comment" },
                                  model: {
                                    value: _vm.comments.commentbox,
                                    callback: function($$v) {
                                      _vm.$set(_vm.comments, "commentbox", $$v)
                                    },
                                    expression: "comments.commentbox"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    attrs: { size: "small" },
                                    on: { click: _vm.addNewComment }
                                  },
                                  [_vm._v("Post Comment")]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "flex flex-wrap items-center p-6",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "vs-button",
                { staticClass: "mr-6", on: { click: _vm.submitTodo } },
                [_vm._v("Submit")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  attrs: { type: "border", color: "danger" },
                  on: { click: _vm.init }
                },
                [_vm._v("Cancel")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=template&id=7730a993&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=template&id=7730a993& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "todo__filters-container" },
    [
      _c(
        "div",
        { staticClass: "px-6 py-4" },
        [
          _c(
            "router-link",
            {
              staticClass: "flex cursor-pointer",
              class: { "text-primary": _vm.todoFilter == "all" },
              attrs: { tag: "span", to: _vm.baseUrl + "/all" }
            },
            [
              _c("feather-icon", {
                attrs: {
                  icon: "LayersIcon",
                  svgClasses: [
                    { "text-primary stroke-current": _vm.todoFilter == "all" },
                    "h-6 w-6"
                  ]
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("All")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "px-6 py-4" },
        [
          _c("h5", [_vm._v("Filters")]),
          _vm._v(" "),
          _vm._l(_vm.todoFilters, function(filter) {
            return [
              _c(
                "router-link",
                {
                  key: filter.filter,
                  staticClass: "flex mt-6 cursor-pointer",
                  class: { "text-primary": _vm.todoFilter == filter.filter },
                  attrs: { tag: "span", to: _vm.baseUrl + "/" + filter.filter }
                },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: filter.icon,
                      svgClasses: [
                        {
                          "text-primary stroke-current":
                            _vm.todoFilter == filter.filter
                        },
                        "h-6 w-6"
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-lg ml-3" }, [
                    _vm._v(_vm._s(filter.filterName))
                  ])
                ],
                1
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c("div", { staticClass: "px-6 py-4" }, [
        _c("h5", [_vm._v("Labels")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "todo__lables-list" },
          _vm._l(_vm.taskTags, function(tag, index) {
            return _c(
              "router-link",
              {
                key: index,
                staticClass:
                  "todo__label flex items-center mt-6 cursor-pointer",
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
                    class: { "text-primary": _vm.todoFilter == tag.value }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=template&id=1378b5c6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=template&id=1378b5c6& ***!
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
      staticClass: "px-4 py-4 list-item-component",
      on: { click: _vm.displayPrompt }
    },
    [
      _c("div", { staticClass: "vx-row goal" }, [
        _c(
          "div",
          {
            staticClass:
              "vx-col w-full sm:w-5/6 flex sm:items-center sm:flex-row flex-col"
          },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("vs-checkbox", {
                  staticClass: "w-8 m-0 vs-checkbox-small",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                    }
                  },
                  model: {
                    value: _vm.isCompleted,
                    callback: function($$v) {
                      _vm.isCompleted = $$v
                    },
                    expression: "isCompleted"
                  }
                }),
                _vm._v(" "),
                _c(
                  "h6",
                  {
                    staticClass: "todo-title",
                    class: { "line-through": _vm.taskLocalData.isCompleted }
                  },
                  [_vm._v(_vm._s(_vm.taskLocalData.title))]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full sm:w-1/6 ml-auto flex sm:justify-end" },
          [
            _c("feather-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                icon: "StarIcon",
                svgClasses: [
                  {
                    "text-warning stroke-current": _vm.taskLocalData.isStarred
                  },
                  "w-5",
                  "h-5 mr-4"
                ]
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.toggleIsStarred($event)
                }
              }
            }),
            _vm._v(" "),
            !_vm.taskLocalData.isTrashed
              ? _c("feather-icon", {
                  staticClass: "cursor-pointer",
                  attrs: { icon: "TrashIcon", svgClasses: "w-5 h-5" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.moveToTrash($event)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.taskLocalData.tags
        ? _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "todo-tags sm:ml-2 sm:my-0 my-2 flex" },
              _vm._l(_vm.taskLocalData.tags, function(tag, index) {
                return _c("vs-chip", { key: index }, [
                  _c("div", {
                    staticClass: "h-2 w-2 rounded-full mr-1",
                    class: "bg-" + _vm.todoLabelColor(tag)
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm._f("capitalize")(tag)))])
                ])
              }),
              1
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/todo/moduleTodo.js":
/*!***************************************************!*\
  !*** ./resources/js/src/store/todo/moduleTodo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleTodoState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleTodoState.js */ "./resources/js/src/store/todo/moduleTodoState.js");
/* harmony import */ var _moduleTodoMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleTodoMutations.js */ "./resources/js/src/store/todo/moduleTodoMutations.js");
/* harmony import */ var _moduleTodoActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleTodoActions.js */ "./resources/js/src/store/todo/moduleTodoActions.js");
/* harmony import */ var _moduleTodoGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleTodoGetters.js */ "./resources/js/src/store/todo/moduleTodoGetters.js");
/*=========================================================================================
  File Name: moduleTodo.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: _moduleTodoState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleTodoMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleTodoActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleTodoGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/todo/moduleTodoActions.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/todo/moduleTodoActions.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  setTodoSearchQuery: function setTodoSearchQuery(_ref, query) {
    var commit = _ref.commit;
    commit('SET_TODO_SEARCH_QUERY', query);
  },
  fetchTasks: function fetchTasks(_ref2, payload) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/todo/goals', {
        params: {
          filter: payload.filter == 'all' ? '*' : payload.filter
        }
      }).then(function (response) {
        commit('SET_TASKS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchTags: function fetchTags(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/apps/todo/tags').then(function (response) {
        commit('SET_TAGS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  addTask: function addTask(_ref4, task) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/apps/todo/goals/add', {
        task: task
      }).then(function (response) {
        commit('ADD_TASK', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  updateTask: function updateTask(_ref5, task, isTrashed) {
    var commit = _ref5.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/apps/todo/goals/update/".concat(task.id), {
        task: task
      }).then(function (response) {
        commit('UPDATE_TASK', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/todo/moduleTodoGetters.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/todo/moduleTodoGetters.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleTodoGetters.js
  Description: Todo Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  queriedTasks: function queriedTasks(state) {
    return state.tasks.filter(function (task) {
      var isItemOfCurrentFilter = false;
      task.title = task.name;

      if (state.todoFilter === 'all' && !task.isTrashed || state.todoFilter === 'important' && !task.isTrashed && task.isImportant || state.todoFilter === 'starred' && !task.isTrashed && task.isStarred || state.todoFilter === 'completed' && !task.isTrashed && task.isCompleted || state.todoFilter === 'trashed' && task.isTrashed || task.tags.includes(state.todoFilter)) {
        isItemOfCurrentFilter = true;
      }

      return isItemOfCurrentFilter && (task.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || task.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
    });
  },
  getTask: function getTask(state) {
    return function (taskId) {
      return state.tasks.find(function (task) {
        return task.id === taskId;
      });
    };
  } // getTodosBySection: state => (sectionId) => state.todoArray.filter((task) => task.sectionId == sectionId),

});

/***/ }),

/***/ "./resources/js/src/store/todo/moduleTodoMutations.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/todo/moduleTodoMutations.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_TODO_SEARCH_QUERY: function SET_TODO_SEARCH_QUERY(state, query) {
    state.todoSearchQuery = query;
  },
  UPDATE_TODO_FILTER: function UPDATE_TODO_FILTER(state, filter) {
    state.todoFilter = filter;
  },
  // API
  SET_TASKS: function SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  SET_TAGS: function SET_TAGS(state, tags) {
    state.taskTags = tags;
  },
  ADD_TASK: function ADD_TASK(state, task) {
    state.tasks.unshift(task);
  },
  UPDATE_TASK: function UPDATE_TASK(state, task) {
    var taskIndex = state.tasks.findIndex(function (t) {
      return t.id === task.id;
    });
    Object.assign(state.tasks[taskIndex], task);
  }
});

/***/ }),

/***/ "./resources/js/src/store/todo/moduleTodoState.js":
/*!********************************************************!*\
  !*** ./resources/js/src/store/todo/moduleTodoState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleTodoState.js
  Description: Todo Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  tasks: [],
  taskTags: [],
  todoSearchQuery: '',
  todoFilter: null
});

/***/ }),

/***/ "./resources/js/src/views/apps/goals/DataViewSidebar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/DataViewSidebar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewSidebar_vue_vue_type_template_id_4d6a40ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true& */ "./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true&");
/* harmony import */ var _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true& */ "./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataViewSidebar_vue_vue_type_template_id_4d6a40ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataViewSidebar_vue_vue_type_template_id_4d6a40ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d6a40ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goals/DataViewSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=style&index=0&id=4d6a40ab&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_4d6a40ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_4d6a40ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/DataViewSidebar.vue?vue&type=template&id=4d6a40ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_4d6a40ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_4d6a40ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/goals/Goal.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/apps/goals/Goal.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Goal_vue_vue_type_template_id_1a382376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Goal.vue?vue&type=template&id=1a382376& */ "./resources/js/src/views/apps/goals/Goal.vue?vue&type=template&id=1a382376&");
/* harmony import */ var _Goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Goal.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goals/Goal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Goal.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Goal_vue_vue_type_template_id_1a382376___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Goal_vue_vue_type_template_id_1a382376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goals/Goal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goals/Goal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/Goal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Goal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Goal.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/Goal.vue?vue&type=template&id=1a382376&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/Goal.vue?vue&type=template&id=1a382376& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_template_id_1a382376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Goal.vue?vue&type=template&id=1a382376& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/Goal.vue?vue&type=template&id=1a382376&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_template_id_1a382376___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goal_vue_vue_type_template_id_1a382376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoAddNew.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoAddNew.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoAddNew_vue_vue_type_template_id_58cb0bd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoAddNew.vue?vue&type=template&id=58cb0bd7& */ "./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=template&id=58cb0bd7&");
/* harmony import */ var _TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoAddNew.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoAddNew_vue_vue_type_template_id_58cb0bd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoAddNew_vue_vue_type_template_id_58cb0bd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goals/TodoAddNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoAddNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=template&id=58cb0bd7&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=template&id=58cb0bd7& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_template_id_58cb0bd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoAddNew.vue?vue&type=template&id=58cb0bd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoAddNew.vue?vue&type=template&id=58cb0bd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_template_id_58cb0bd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_template_id_58cb0bd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoEdit.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoEdit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoEdit_vue_vue_type_template_id_6e331322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoEdit.vue?vue&type=template&id=6e331322& */ "./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=template&id=6e331322&");
/* harmony import */ var _TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoEdit_vue_vue_type_template_id_6e331322___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoEdit_vue_vue_type_template_id_6e331322___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goals/TodoEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=template&id=6e331322&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=template&id=6e331322& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_template_id_6e331322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoEdit.vue?vue&type=template&id=6e331322& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoEdit.vue?vue&type=template&id=6e331322&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_template_id_6e331322___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_template_id_6e331322___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoFilters.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoFilters.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoFilters_vue_vue_type_template_id_7730a993___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoFilters.vue?vue&type=template&id=7730a993& */ "./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=template&id=7730a993&");
/* harmony import */ var _TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoFilters.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoFilters_vue_vue_type_template_id_7730a993___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoFilters_vue_vue_type_template_id_7730a993___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goals/TodoFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=template&id=7730a993&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=template&id=7730a993& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_template_id_7730a993___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoFilters.vue?vue&type=template&id=7730a993& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoFilters.vue?vue&type=template&id=7730a993&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_template_id_7730a993___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_template_id_7730a993___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoTask.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoTask.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoTask_vue_vue_type_template_id_1378b5c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoTask.vue?vue&type=template&id=1378b5c6& */ "./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=template&id=1378b5c6&");
/* harmony import */ var _TodoTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoTask.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoTask_vue_vue_type_template_id_1378b5c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoTask_vue_vue_type_template_id_1378b5c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goals/TodoTask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=template&id=1378b5c6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=template&id=1378b5c6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTask_vue_vue_type_template_id_1378b5c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoTask.vue?vue&type=template&id=1378b5c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goals/TodoTask.vue?vue&type=template&id=1378b5c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTask_vue_vue_type_template_id_1378b5c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoTask_vue_vue_type_template_id_1378b5c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);