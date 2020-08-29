<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} GOAL</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
    >
      <div class="p-6">
        <div class="vx-row">
          <div class="vx-col ml-auto flex">
            <feather-icon
              icon="InfoIcon"
              class="cursor-pointer"
              :svgClasses="[{'text-success stroke-current': taskLocal.isImportant}, 'w-5', 'h-5 mr-4']"
              @click.prevent="taskLocal.isImportant = !taskLocal.isImportant"
            ></feather-icon>

            <feather-icon
              icon="StarIcon"
              class="cursor-pointer"
              :svgClasses="[{'text-warning stroke-current': taskLocal.isStarred}, 'w-5', 'h-5 mr-4']"
              @click.prevent="taskLocal.isStarred = !taskLocal.isStarred"
            ></feather-icon>
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-input
              label="Name"
              v-validate="'required'"
              name="name"
              class="w-full mb-4 mt-5"
              v-model="taskLocal.name"
              :color="validateForm ? 'success' : 'danger'"
            />
            <vs-input
              label="Description"
              v-validate="'required'"
              name="description"
              class="w-full mb-4 mt-5"
              v-model="taskLocal.description"
              :color="validateForm ? 'success' : 'danger'"
            />
            <label> Status</label>
            <v-select  v-validate="'required'" :color="validateForm ? 'success' : 'danger'" v-model="taskLocal.status" :options="['Todo','In Progress','Done']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />

            <vs-input
              label="Evaluation Criteria"
              v-validate="'required'"
              name="criteria"
              class="w-full mb-4 mt-5"
              v-model="taskLocal.criteria"
              :color="validateForm ? 'success' : 'danger'"
            />
            <div></div>
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
import vSelect from 'vue-select'
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from "@/axios.js";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    VuePerfectScrollbar,
    vSelect
  },
  data() {
    return {
      activePrompt: false,

      taskLocal: {
        name: "",
        description: "",
        status: "",
        criteria: "",
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: [],
        list: [],
        invoice_products: [
          {
            product_name: "",
          },
        ],
      },
      taskLocalData: {
        list: [],
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  computed: {
    ...mapState("users", ["currentUser"]),
    validateForm() {
      return !this.errors.any() && this.taskLocal.title !== "";
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },
  },
  methods: {
    ...mapActions("goals", ["addGoals"]),
    clearFields() {
      this.taskLocalData.list = [];
      Object.assign(this.taskLocal, {
        name: "",
        description: "",
        status: "",
        criteria: "",
        list: [],
        invoice_products: [
          {
            product_name: "",
          },
        ],
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: [],
      });
      this.$emit("closeSidebar");
    },
    addTodo() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let formData = {
            name: this.taskLocal.name,
            description: this.taskLocal.description,
            status: this.taskLocal.status,
            evaluation_criteria: this.taskLocal.criteria,
          };
          this.addGoals(formData).then(() => {
            this.clearFields();
            this.taskLocalData.list = [];
            this.$emit("closeSidebar");
            this.showAddSuccess();
          });
        }
      });
    },
    showAddSuccess() {
      this.$vs.notify({
        color: "success",
        title: "Goal Added",
        text: "The goal was successfully added",
      });
    },
    addNewRow() {
      this.taskLocalData.list.push({
        name: this.taskLocal.invoice_products.slice(-1).pop().product_name,
        isTrashed: false,
      });
      this.taskLocal.invoice_products = [
        {
          product_name: "",
        },
      ];
    },
  },
};
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
