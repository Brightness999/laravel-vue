<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
                class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
        <div class="mt-6 flex items-center justify-between px-6">
            <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} GOAL</h4>
            <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>

        <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

            <div class="p-6">

                <div class="vx-row">

                    <div class="vx-col ml-auto flex">
                        <feather-icon icon="InfoIcon" class="cursor-pointer"
                                      :svgClasses="[{'text-success stroke-current': taskLocal.isImportant}, 'w-5', 'h-5 mr-4']"
                                      @click.prevent="taskLocal.isImportant = !taskLocal.isImportant"></feather-icon>

                        <feather-icon icon="StarIcon" class="cursor-pointer"
                                      :svgClasses="[{'text-warning stroke-current': taskLocal.isStarred}, 'w-5', 'h-5 mr-4']"
                                      @click.prevent="taskLocal.isStarred = !taskLocal.isStarred"></feather-icon>

                        <vs-dropdown class="cursor-pointer flex" vs-custom-content>

                            <feather-icon icon="TagIcon" svgClasses="h-5 w-5" @click.prevent></feather-icon>
                            <!-- <vs-button radius color="success" type="flat" iconPack="feather" icon="icon-tag" @click.prevent></vs-button> -->

                            <vs-dropdown-menu style="z-index: 200001">
                                <vs-dropdown-item @click.stop v-for="(tag, index) in taskTags" :key="index">
                                    <vs-checkbox :vs-value="tag.value" v-model="taskLocal.tags">{{ tag.text }}
                                    </vs-checkbox>
                                </vs-dropdown-item>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" name="title" class="w-full mb-4 mt-5" placeholder="Title"
                                  v-model="taskLocal.title" :color="validateForm ? 'success' : 'danger'"/>
                        <div class="mt-5">
                            <vs-list>
                                <draggable :list="taskLocalData.list" :key="taskLocalData.list.length"
                                           class="cursor-move">
                                    <transition-group>
                                        <vs-list-item v-if="!listItem.isTrashed" class="list-item"
                                                      v-for="(listItem) in taskLocalData.list"
                                                      :key="listItem">
                                            <vs-avatar slot="avatar"/>
                                            <vs-input class="vs-input-no-border vs-input-no-shdow-focus" type="text"
                                                      v-model="listItem.name"/>
                                            <feather-icon
                                                v-if="!taskLocalData.list.isTrashed"
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
                            <div v-for="(invoice_product, k) in taskLocal.invoice_products" :key="k">
                                <div
                                    class="d-theme-dark-bg items-center border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light">
                                    <vx-input-group>
                                        <vs-input name="objective" type="text"
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
                    </div>
                </div>
            </div>
        </component>

        <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="addTodo">Submit</vs-button>
            <vs-button type="border" color="danger" @click="clearFields">Cancel</vs-button>
        </div>
    </vs-sidebar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import draggable from "vuedraggable";

    export default {
        props: {
            isSidebarActive: {
                type: Boolean,
                required: true
            },
            data: {
                type: Object,
                default: () => {
                }
            }
        },
        components: {
            VuePerfectScrollbar,
            draggable

        },
        data() {
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
                settings: { // perfectscrollbar settings
                    maxScrollbarLength: 60,
                    wheelSpeed: .60
                }
            }
        },
        computed: {
            taskTags() {
                return this.$store.state.todo.taskTags
            },
            validateForm() {
                return !this.errors.any() && this.taskLocal.title !== ''
            },
            scrollbarTag() {
                return this.$store.getters.scrollbarTag
            },
            isSidebarActiveLocal: {
                get() {
                    return this.isSidebarActive
                },
                set(val) {
                    if (!val) {
                        this.$emit('closeSidebar')
                        // this.$validator.reset()
                        // this.initValues()
                    }
                }
            }
        },
        methods: {
            clearFields() {
                this.taskLocalData.list = []
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
                })
                this.$emit('closeSidebar')
            },
            addTodo() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        let arr = this.taskLocalData.list
                        for (let index = 0; index < this.taskLocalData.list.length; index++) {
                            if (this.taskLocalData.list[index].isTrashed === true) {
                                let indexI = this.taskLocalData.list.indexOf(this.taskLocalData.list[index])
                                if (indexI > -1) {
                                    this.taskLocalData.list.splice(indexI, 1)
                                }
                            }
                        }
                        this.taskLocal.list = this.taskLocalData.list
                        this.$store.dispatch('todo/addTask', Object.assign({}, this.taskLocal))
                        this.clearFields()
                        this.taskLocalData.list = []
                        this.$emit('closeSidebar')
                        this.showAddSuccess()
                    }
                })
            },
            showAddSuccess() {
                this.$vs.notify({
                    color: 'success',
                    title: 'Goal Added',
                    text: 'The goal was successfully added'
                })
            },
            addNewRow() {
                this.taskLocalData.list.push({
                    name: this.taskLocal.invoice_products.slice(-1).pop().product_name,
                    isTrashed: false
                })
                this.taskLocal.invoice_products = [{
                    product_name: ''
                }]
            },
        }
    }
</script>

<style lang="scss" scoped>
    .add-new-data-sidebar {
        ::v-deep .vs-sidebar--background {
            z-index: 52010;
        }

        ::v-deep .vs-sidebar {
            z-index: 52010;
            width: 40%;
            max-width: 90vw;

            .vs-sidebar--items {
                .vs-list--slot {
                    width: 100% !important;
                    display: inline-flex !important;
                    margin: 0 !important;

                    .vs-con-input-label {
                        width: 100%;
                    }

                    .cursor-pointer {
                        float: right;
                    }
                }
            }

            .img-upload {
                margin-top: 2rem;

                .con-img-upload {
                    padding: 0;
                }

                .con-input-upload {
                    width: 100%;
                    margin: 0;
                }
            }
        }
    }

    .scroll-area--data-list-add-new {
        // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
        height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

        &:not(.ps) {
            overflow-y: auto;
        }
    }
</style>
