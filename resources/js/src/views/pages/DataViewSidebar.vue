<template>
  <vs-sidebar
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    :value="isSidebarActive"
    @input="$emit('closeSidebar')"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} GOAL</h4>
      <feather-icon icon="XIcon" @click.stop="clearForm" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <div class="p-6">
      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="mt-5">
            <label class="block mt-5">Name</label>
            <vs-input
              v-validate="'required'"
              name="Name"
              v-model="taskLocal.name"
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
              v-model="taskLocal.description"
            />
            <span
              class="text-danger text-sm"
              v-show="errors.has('Description')"
            >{{ errors.first('Description') }}</span>
            <section class="selectDate flex">
              <div class="w-1/2">
                <label class="block mt-3">Status</label>
                <v-select
                  name="Status"
                  class="mb-4 mt-1 mr-1"
                  v-validate="'required'"
                  v-model="taskLocal.status"
                  :options="['Todo','In Progress','Done']"
                />
              </div>
              <div class="w-1/2">
                <label class="block mt-3 ml-1">Date</label>
                <datepicker
                  name="Date"
                  v-validate="'required'"
                  format="yyyy-MM-dd"
                  class="my-datepicker mb-4 mt-1 ml-1"
                  calendar-class="my-datepicker_calendar"
                  placeholder="Select Date"
                  v-model="taskLocal.date"
                ></datepicker>
              </div>
            </section>
            <span
              class="text-danger text-sm text-left"
              v-show="errors.has('Status')"
            >{{ errors.first('Status') }}</span>

            <span
              class="text-danger text-sm float-right mr-30px"
              v-show="errors.has('Date')"
            >{{ errors.first('Date') }}</span>

            <label class="block mt-5">Evaluation Criteria</label>
            <vs-textarea
              class="w-full mb-4 mt-1"
              v-validate="'required'"
              name="Evaluation Criteria"
              v-model="taskLocal.criteria"
            />
            <span
              class="text-danger text-sm"
              v-show="errors.has('Evaluation Criteria')"
            >{{ errors.first('Evaluation Criteria') }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitForm">Submit</vs-button>
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
import Datepicker from "vuejs-datepicker";

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
    vSelect,
    Datepicker,
  },
  data() {
    return {
      activePrompt: false,
      taskLocal: {
        name: "",
        description: "",
        status: "",
        criteria: "",
        date: "",
        priority: "11",
        isCompleted: false,
        tags: [],
        list: [],
        invoice_products: [
          {
            product_name: "",
          },
        ],
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
          this.$validator.reset();
          // this.initValues()
        }
      },
    },
  },
  methods: {
    ...mapActions("goals", ["addGoals"]),
    clearForm() {
      this.clearFields();
    },
    clearFields() {
      this.$validator.reset();
      this.errors.clear();
      Object.assign(this.taskLocal, {
        name: "",
        description: "",
        status: "",
        criteria: "",
        priority: "",
        date: "",
        list: [],
        invoice_products: [
          {
            product_name: "",
          },
        ],
        isCompleted: false,
        tags: [],
      });
      this.$emit("closeSidebar");
    },
    submitForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let formData = {
            name: this.taskLocal.name,
            description: this.taskLocal.description,
            status: this.taskLocal.status,
            evaluation_criteria: this.taskLocal.criteria,
            due_date: this.taskLocal.date.toISOString().slice(0, 10),
            priority: this.taskLocal.priority,
          };
          let userid = this.currentUser.data.id;
          this.addGoals({ formData, userid }).then(() => {
            this.clearFields();
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
  },
};
</script>

<style scoped>
.my-datepicker >>> .my-datepicker_calendar {
  width: 245px;
  height: 260px;
}
</style>

<style lang="scss" scoped>
@import "@sass/vuexy/_customClasses.scss";
</style>
