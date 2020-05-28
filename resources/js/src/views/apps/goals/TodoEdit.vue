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
                    <vs-input v-validate="'required'" name="title" class="w-full mb-4 mt-5" placeholder="Title"
                              v-model="taskLocalData.title"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

                </div>
            </div>
            <div class="flex flex-wrap items-center p-6" slot="footer">
                <vs-button class="mr-6" @click="submitTodo">Submit</vs-button>
                <vs-button type="border" color="danger" @click="init">Cancel</vs-button>
            </div>
            <div class="mt-5">
                <vs-list>
                    <draggable :list="list" class="cursor-move">
                        <transition-group>
                            <vs-list-item class="list-item" v-for="listItem in list" :key="listItem.name"
                                          :subtitle="listItem.name">
                                <vs-avatar slot="avatar" :text="listItem.name"/>
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
                                      placeholder="Title" v-model="invoice_product.product_name"
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
        </vs-sidebar>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    import Prism from 'vue-prism-component'

    export default {
        data() {
            return {
                list: []
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

                    if (this.$store.getters['todo/getTask'](this.taskId).list !== undefined) {
                        this.list = this.$store.getters['todo/getTask'](this.taskId).list
                    } else {
                        this.list = []
                    }
                    if (!this.$store.getters['todo/getTask'](this.taskId).list)
                        this.$store.getters['todo/getTask'](this.taskId).list = []

                    return this.$store.getters['todo/getTask'](this.taskId)
                },
                set(value) {

                }
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
                console.log(idx, index)
                if (idx > -1) {
                    this.taskLocalData.invoice_products.splice(idx, 1)
                }
                this.calculateTotal()
            },
            addNewRow() {
                this.list.push({
                    name: this.taskLocalData.invoice_products.slice(-1).pop().product_name
                })
                this.taskLocalData.invoice_products = [{
                    product_name: ''
                }]
                this.$store.dispatch('todo/updateTask', Object.assign({}, this.taskLocalData))
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
                this.taskLocalData = Object.assign({}, this.$store.getters['todo/getTask'](this.taskId))
                this.$emit('closeSidebar')
            },
            submitTodo() {
                this.taskLocalData.list = this.list
                this.$store.dispatch('todo/updateTask', this.taskLocalData)
                this.$emit('closeSidebar')
            }
        },
        components: {
            draggable,
            Prism
        }
    }
</script>
