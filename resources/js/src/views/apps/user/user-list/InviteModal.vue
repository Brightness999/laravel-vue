<!-- =========================================================================================
  File Name: InviteModal.vue
  Description: Invite user via email - Sidebar component
  ----------------------------------------------------------------------------------------
  Author: Kashif
========================================================================================== -->


<template>
    <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
                class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
        <div class="mt-6 flex items-center justify-between px-6">
            <h4>Invite users by email</h4>
            <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>
        <vue-tags-input
          :tags="emails"
          v-model="email"
          :validation="validation"
          @tags-changed="newEmails => emails = newEmails"
          placeholder="Enter emails"
          class="w-full p-5"
        />

        <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="inviteUser">Submit</vs-button>
            <vs-button type="border" color="danger" @click="clearFields">Cancel</vs-button>
        </div>
    </vs-sidebar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import draggable from "vuedraggable";
    import VueTagsInput from '@johmun/vue-tags-input';

    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            },
            data: {
              type: Object,
              default: () => {
                return {}
              }
            }
        },
        components: {
            VuePerfectScrollbar,
            draggable,
            VueTagsInput
        },
        data() {
            return {
                emails: [],
                email: "",
                validation: [
                  {
                    classes: 'not-valid-email',
                    rule: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                    disableAdd: true,
                  }
                ],
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
                    return this.active
                },
                set(val) {
                    if (!val) {
                        this.$emit('closeModal')
                        // this.$validator.reset()
                        // this.initValues()
                    }
                }
            }
        },
        methods: {
            clearFields() {
                this.emails = []
                this.$emit('closeModal')
            },
            async inviteUser() {
              await this.$http.post('/api/user-management/invite', {
                emails: this.emails.map(a => a.text)
              })
              this.emails = []
              this.showAddSuccess()
              this.$emit('closeModal')
            },
            showAddSuccess() {
                this.$vs.notify({
                    color: 'success',
                    title: 'Invitation Send',
                    text: 'Invitation emails are send to users, once they will accept they will be in your campaign'
                })
            }
        }
    }
</script>
<style>
.vue-tags-input {
    max-width: initial !important;
}
.ti-input {
    border: 1px solid rgba(0, 0, 0, 0.2) !important;
    border-radius: 5px !important;
}
.ti-tag {
    background: rgba(var(--vs-primary),1)!important;
}
</style>

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
