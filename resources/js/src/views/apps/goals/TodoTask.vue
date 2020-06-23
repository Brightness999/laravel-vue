<!-- =========================================================================================
    File Name: TodoItem.vue
    Description: Single todo item component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div @click="displayPrompt" class="px-4 py-4 list-item-component">
        <div class="vx-row goal">
            <div class="vx-col w-full sm:w-5/6 flex sm:items-center sm:flex-row flex-col">
                <div class="flex items-center">
                    <vs-checkbox v-model="isCompleted" class="w-8 m-0 vs-checkbox-small" @click.stop />
                    <h6 class="todo-title" :class="{'line-through': taskLocalData.isCompleted}">{{ taskLocalData.title }}</h6>
                </div>
            </div>

            <div class="vx-col w-full sm:w-1/6 ml-auto flex sm:justify-end">
                <feather-icon
                  icon="StarIcon"
                  class="cursor-pointer"
                  :svgClasses="[{'text-warning stroke-current': taskLocalData.isStarred}, 'w-5', 'h-5 mr-4']"
                  @click.stop="toggleIsStarred" />
                <feather-icon
                  v-if="!taskLocalData.isTrashed"
                  icon="TrashIcon"
                  class="cursor-pointer"
                  svgClasses="w-5 h-5"
                  @click.stop="moveToTrash" />
            </div>
        </div>
        <div class="vx-row" v-if="taskLocalData.tags">
            <div class="todo-tags sm:ml-2 sm:my-0 my-2 flex">
                <vs-chip v-for="(tag, index) in taskLocalData.tags" :key="index">
                    <div class="h-2 w-2 rounded-full mr-1" :class="'bg-' + todoLabelColor(tag)"></div>
                    <span>{{ tag | capitalize }}</span>
                </vs-chip>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  computed: {
    taskLocalData: {
      get () {
        return this.$store.getters['todo/getTask'](this.taskId)
      }
    },
    isCompleted: {
      get () {
        return this.taskLocalData.isCompleted
      },
      set (value) {
        this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {isCompleted: value}))
          .then((response) => {
            this.taskLocalData.isCompleted = response.data.isCompleted
          })
          .catch((error) => { console.error(error) })
      }
    },
    todoLabelColor () {
      return (label) => {
        const tags = this.$store.state.todo.taskTags
        return tags.find((tag) => {
          return tag.value === label
        }).color
      }
    }
  },
  methods: {
    toggleIsImportant () {
      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {isImportant: !this.taskLocalData.isImportant}))
        .then((response) => {
          this.taskLocalData.isImportant = response.data.isImportant
        })
        .catch((error) => { console.error(error) })
    },
    toggleIsStarred () {
      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {isStarred: !this.taskLocalData.isStarred}))
        .then((response) => {
          this.taskLocalData.isStarred = response.data.isStarred
        })
        .catch((error) => { console.error(error) })
    },
    moveToTrash () {
      this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {isTrashed: true}))
        .then((response) => {
          // console.log(response.data);
          this.taskLocalData.isTrashed = response.data.isTrashed
          this.$el.style.display = 'none'   // Hides element from DOM
        })
        .catch((error) => { console.error(error) })

      // Un-comment below line if you want to fetch task after task is deleted
      // this.$store.dispatch("todo/fetchTasks", {filter: this.$route.params.filter})
    },
    displayPrompt () {
      this.$emit('showDisplayPrompt', this.taskId)
    }
  }
}
</script>
