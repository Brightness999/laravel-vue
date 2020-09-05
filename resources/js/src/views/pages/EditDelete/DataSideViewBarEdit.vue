<template>
  <vs-sidebar
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? "EDIT" : "UPDATE" }} GOAL</h4>
      <feather-icon icon="XIcon" @click.stop="clearForm" class="cursor-pointer"></feather-icon>
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
          <div class="vx-col w-full">
            <div class="mt-5">
              <label class="block mt-5">Name</label>
              <vs-input
                v-validate="'required'"
                name="Name"
                v-model="ediTtaskLocal.name"
                class="w-full mb-4 mt-1"
              />

              <span
                class="text-danger text-sm mt-0 mb-10"
                v-show="errors.has('Name')"
              >{{ errors.first('Name') }}</span>

              <label class="block mt-5">Description</label>
              <vs-textarea
                class="w-full mb-4 mt-1"
                v-validate="'required'"
                name="Description"
                v-model="ediTtaskLocal.description"
              />
              <span
                class="text-danger text-sm"
                v-show="errors.has('Description')"
              >{{ errors.first('Description') }}</span>

              <label class="block mt-5">Status</label>
              <v-select
                name="Status"
                class="w-full mb-4 mt-1 borderchange"
                v-validate="'required'"
                v-model="ediTtaskLocal.status"
                :options="['Todo','In Progress','Done']"
              />
              <span
                class="text-danger text-sm"
                v-show="errors.has('Status')"
              >{{ errors.first('Status') }}</span>

              <label class="block mt-5">Evaluation Criteria</label>
              <vs-textarea
                class="w-full mb-4 mt-1"
                v-validate="'required'"
                name="Evaluation Criteria"
                v-model="ediTtaskLocal.evaluation_criteria"
              />
              <span
                class="text-danger text-sm"
                v-show="errors.has('Evaluation Criteria')"
              >{{ errors.first('Evaluation Criteria') }}</span>
            </div>
          </div>
        </div>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitForm">Update</vs-button>
      <vs-button type="border" color="danger" @click="clearFields">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import vSelect from "vue-select";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from "@/axios.js";
import { mapState, mapActions } from "vuex";
import { Validator } from "vee-validate";

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
    goal: {
      type: Object,
    },
  },
  components: {
    VuePerfectScrollbar,
    vSelect,
  },
  data() {
    return {
      activePrompt: false,
      ediTtaskLocal: {
        ...this.goal,
      },
      ediTtaskLocalData: {
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
      return !this.errors.any() && this.ediTtaskLocal.title !== "";
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
          this.$validator.reset();
          // this.initValues()
        }
      },
    },
  },
  methods: {
    ...mapActions("goals", ["editGoals"]),
    clearForm() {
      this.isSidebarActiveLocal = false;
      this.clearFields();
    },
    clearFields() {
      this.ediTtaskLocalData.list = [];
      this.$validator.reset();
      this.errors.clear();
      this.$emit("closeSidebar");
    },
    submitForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let formData = {
            name: this.ediTtaskLocal.name,
            description: this.ediTtaskLocal.description,
            status: this.ediTtaskLocal.status,
            evaluation_criteria: this.ediTtaskLocal.evaluation_criteria,
          };
          let userid = this.currentUser.data.id;
          let itemId = this.ediTtaskLocal.id;
          this.editGoals({ formData, userid, itemId }).then(() => {
            this.clearFields();
            this.ediTtaskLocalData.list = [];
            this.$emit("closeSidebar");
            this.showAddSuccess();
          });
        }
      });
    },
    showAddSuccess() {
      this.$vs.notify({
        color: "success",
        title: "Goal Updated",
        text: "The goal was successfully updated",
      });
    },
    addNewRow() {
      this.ediTtaskLocalData.list.push({
        name: this.ediTtaskLocal.invoice_products.slice(-1).pop().product_name,
        isTrashed: false,
      });
      this.ediTtaskLocal.invoice_products = [
        {
          product_name: "",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/vuexy/_customClasses.scss";
</style>
