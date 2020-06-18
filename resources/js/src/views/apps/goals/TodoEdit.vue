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
        <vs-sidebar
            click-not-close parent="#todo-app"
            :hidden-background="true"
            class="full-vs-sidebar goal-view-sidebar items-no-padding"
            v-model="isEmailSidebarActive"
            position-right>
            <div id="taskLocalData" v-if="taskLocalData" class="scroll-area--data-list-add-new">
                <div
                    class="flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg">
                    <div class="flex mb-4">
                        <div class="flex items-center">
                            <feather-icon :icon="$vs.rtl ? 'ArrowRightIcon' : 'ArrowLeftIcon'"
                                          @click="$emit('closeSidebar')" class="cursor-pointer mr-4"
                                          svg-classes="w-6 h-6"></feather-icon>
                        </div>
                    </div>
                    <div class="vx-col ml-auto flex">
                        <feather-icon
                            icon="StarIcon"
                            class="cursor-pointer"
                            :svgClasses="[{'text-warning stroke-current': taskLocalData.isStarred}, 'w-5', 'h-5 mr-4']"
                            @click.stop="toggleIsStarred"/>

                        <vs-dropdown class="cursor-pointer flex" vs-custom-content>

                            <feather-icon icon="TagIcon" svgClasses="h-5 w-5"/>

                            <vs-dropdown-menu style="z-index: 200001">
                                <vs-dropdown-item @click.stop v-for="(tag, index) in taskTags" :key="index">
                                    <vs-checkbox :vs-value="tag.value" v-model="taskLocalData.tags">{{ tag.text }}
                                    </vs-checkbox>
                                </vs-dropdown-item>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                </div>

                <div class="p-12">

                    <!-- NAME -->
                    <div
                        class="d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light">
                        <vx-input-group>
                            <vs-input v-validate="'required'" name="objective" type="text"
                                      placeholder="New objective" v-model="taskLocalData.title"
                                      class="vs-input-no-border vs-input-no-shdow-focus"/>

                        </vx-input-group>
                    </div>

                    <span class="text-danger text-sm"
                          v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

                </div>
                <div class="mt-5">
                    <vs-tabs>

                        <vs-tab label="Objectives">
                            <div class="mt-5">
                                <vs-list>
                                    <draggable :list="list" :key="list.length" class="cursor-move">
                                        <transition-group>
                                            <vs-list-item v-if="!listItem.isTrashed" class="list-item"
                                                          v-for="(listItem) in list"
                                                          :key="listItem">
                                                <vs-avatar slot="avatar"/>
                                                <vs-input class="vs-input-no-border vs-input-no-shdow-focus" type="text"
                                                          v-model="listItem.name"/>
                                                <feather-icon
                                                    v-if="!listItem.isTrashed"
                                                    icon="TrashIcon"
                                                    class="cursor-pointer"
                                                    svgClasses="w-5 h-5"
                                                    @click.stop="listItem.isTrashed = true"/>
                                            </vs-list-item>

                                        </transition-group>
                                    </draggable>
                                </vs-list>
                            </div>
                            <div>
                                <div v-for="(invoice_product, k) in taskLocalData.invoice_products" :key="k">
                                    <div
                                        class="d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light">
                                        <vx-input-group>
                                            <vs-input v-validate="'required'" name="objective" type="text"
                                                      placeholder="New objective" v-model="invoice_product.product_name"
                                                      class="vs-input-no-border vs-input-no-shdow-focus"/>

                                            <template slot="append">
                                                <div class="append-text btn-addon">
                                                    <vs-button color="primary" @click="addNewRow">Add</vs-button>
                                                </div>
                                            </template>
                                        </vx-input-group>
                                    </div>
                                </div>
                            </div>
                        </vs-tab>
                        <vs-tab label="Comments">
                            <div class="comments-container mt-4">
                                <ul class="user-comments-list">
                                    <li v-for="(commentedUser, commentIndex) in comments"
                                        :key="commentIndex" class="commented-user flex items-center mb-4">
                                        <div class="mr-3">
                                            <vs-avatar class="m-0" :src="commentedUser.img" size="30px"/>
                                        </div>
                                        <div class="leading-tight">
                                            <p class="font-medium">{{ commentedUser.author }}</p>
                                            <span class="text-xs">{{ commentedUser.comment }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="post-comment">
                                <vs-textarea label="Add Comment" class="mb-2" v-model="comments.commentbox"/>
                                <vs-button size="small" @click="addNewComment">Post Comment</vs-button>
                            </div>
                        </vs-tab>
                    </vs-tabs>
                </div>
            </div>
            <div class="flex flex-wrap items-center p-6" slot="footer">
                <vs-button class="mr-6" @click="submitTodo">Submit</vs-button>
                <vs-button type="border" color="danger" @click="init">Cancel</vs-button>
            </div>
        </vs-sidebar>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    import Prism from 'vue-prism-component'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        data() {
            return {
                list: [],
                comments: [{
                    commentbox: '',
                }],
                defaultTaskLocalData: Object.assign({}, this.$store.getters['todo/getTask'](this.taskId)),
            }
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
            isEmailSidebarActive(value) {
                if (!value) {
                    this.$emit('closeSidebar')
                    setTimeout(() => {
                        this.showThread = false
                    }, 500)
                }
            }
        },
        computed: {
            taskLocalData: {
                get() {
                    if (!this.$store.getters['todo/getTask'](this.taskId).invoice_products)
                        this.$store.getters['todo/getTask'](this.taskId).invoice_products = [{
                            product_name: ''
                        }]

                    console.log(this.$store.state.tasks)

                    if (this.$store.getters['todo/getTask'](this.taskId).objectives !== undefined) {
                        this.list = this.$store.getters['todo/getTask'](this.taskId).objectives
                    } else {
                        this.list = []
                    }
                    if (this.$store.getters['todo/getTask'](this.taskId).comments !== undefined) {
                        this.comments = this.$store.getters['todo/getTask'](this.taskId).comments
                    } else {
                        this.comments = []
                    }

                    if (!this.$store.getters['todo/getTask'](this.taskId).comments)
                        this.$store.getters['todo/getTask'](this.taskId).comments = []

                    if (!this.$store.getters['todo/getTask'](this.taskId).objectives)
                        this.$store.getters['todo/getTask'](this.taskId).objectives = []

                    return this.$store.getters['todo/getTask'](this.taskId)
                },
                set(value) {

                }
            },
            scrollbarTag() {
                return this.$store.getters.scrollbarTag
            },
            taskTags() {
                return this.$store.state.todo.taskTags
            },
            validateForm() {
                return !this.errors.any() && this.taskLocalData.title !== ''
            }
        },
        methods: {
            deleteRow(index, invoice_product) {
                let idx = this.taskLocalData.invoice_products.indexOf(invoice_product)
                if (idx > -1) {
                    this.taskLocalData.invoice_products.splice(idx, 1)
                }
                this.calculateTotal()
            },
            addNewRow() {
                this.list.push({
                    name: this.taskLocalData.invoice_products.slice(-1).pop().product_name,
                    isTrashed: false
                })
                this.taskLocalData.invoice_products = [{
                    product_name: ''
                }]
                this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData))
            },
            addNewComment() {
                let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                this.comments.push({
                    author: userInfo.displayName,
                    img: userInfo.photoURL,
                    comment: this.comments.commentbox
                })
                this.comments.commentbox = ''
                // this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData))
            },
            removeTodo() {
                this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {isTrashed: true}))
                    .then(() => {
                        // Fetch Tasks
                        this.$store.dispatch('todo/fetchTasks', {filter: this.$route.params.filter})
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },
            toggleIsStarred() {
                this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData, {isStarred: !this.taskLocalData.isStarred}))
                    .then((response) => {
                        this.taskLocalData.isStarred = response.data.isStarred
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },
            init() {
                this.taskLocalData = this.defaultTaskLocalData
                this.taskLocalData.list = this.list
                this.taskLocalData.comments = this.comments
                this.$store.dispatch('todo/updateTask', this.defaultTaskLocalData)
                this.$emit('closeSidebar')
            },
            submitTodo() {
                this.taskLocalData.list = this.list
                this.taskLocalData.comments = this.comments
                this.$store.dispatch('todo/updateTask', this.taskLocalData)
                this.$emit('closeSidebar')
                this.showUpdateSuccess()
            },
            moveToTrash() {
                this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData.list, {isTrashed: true}))
                    .then((response) => {
                        // console.log(response.data);
                        this.taskLocalData.list.isTrashed = response.data.isTrashed
                        this.$el.style.display = 'none'   // Hides element from DOM
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },
            showUpdateSuccess() {
                this.$vs.notify({
                    color: 'success',
                    title: 'Goal Updated',
                    text: 'The selected goal was successfully updated'
                })
            }
        },
        components: {
            VuePerfectScrollbar,
            draggable,
            Prism
        }
    }
</script>
