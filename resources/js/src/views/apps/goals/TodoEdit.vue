<!-- =========================================================================================
    File Name: TodoEdit.vue
    Description: Edit todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <vs-sidebar click-not-close parent="#todo-app" :hidden-background="true" class="full-vs-sidebar email-view-sidebar items-no-padding" v-model="isEmailSidebarActive" position-right>
            <div class="mail-sidebar-content px-0 sm:pb-6 h-full" v-if="taskLocalData">
                <div class="flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg">
                    <div class="flex mb-4">
                        <div class="flex items-center">
                            <feather-icon :icon="$vs.rtl ? 'ArrowRightIcon' : 'ArrowLeftIcon'" @click="$emit('closeSidebar')" class="cursor-pointer mr-4" svg-classes="w-6 h-6"></feather-icon>
                            <h4 v-if="taskLocalData.title">{{ taskLocalData.title }}</h4>
                            <h4 v-else>(no subject)</h4>
                        </div>
                    </div>
                </div>
            </div>
        </vs-sidebar>
    </div>
</template>

<script>
export default {
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
  data () {
    return {
      showThread: false,
      taskLocal: Object.assign({}, this.$store.getters['todo/getTask'](this.taskId))
    }
  },
  watch: {
    isEmailSidebarActive (value) {
      if (!value) {
        this.$emit('closeSidebar')
        setTimeout(() => {
          this.showThread = false
        }, 500)
      }
    }
  },
  computed: {
    taskLocalData () {
      return Object.assign({}, this.$store.getters['todo/getTask'](this.taskId))
    },
    activePrompt: {
      get () {
        return this.displayPrompt
      },
      set (value) {
        this.$emit('hideDisplayPrompt', value)
      }
    },
    taskTags () {
      return this.$store.state.todo.taskTags
    },
    validateForm () {
      return !this.errors.any() && this.taskLocal.title !== ''
    }
  },
  methods: {
    removeTodo () {
      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocal, {isTrashed: true}))
        .then(() => {
          // Fetch Tasks
          this.$store.dispatch('todo/fetchTasks', { filter: this.$route.params.filter })
        })
        .catch((error) => { console.error(error) })
    },
    init () {
      this.taskLocal = Object.assign({}, this.$store.getters['todo/getTask'](this.taskId))
    },
    submitTodo () {
      this.$store.dispatch('todo/updateTask', this.taskLocal)
    }
  }
}
</script>
