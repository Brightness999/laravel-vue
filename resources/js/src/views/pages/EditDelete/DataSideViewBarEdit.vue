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
      <h4>{{ Object.entries(this.data).length === 0 ? "EDIT" : "UPDATE" }} GOAL</h4>
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

            <section class="selectDate flex">
              <div class="w-1/2">
                <label class="block mt-3">Status</label>
                <v-select
                  name="Status"
                  class="mb-4 mt-1 mr-1"
                  v-validate="'required'"
                  v-model="ediTtaskLocal.status"
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
                  calendar-class="my-datepicker_calendar w-auto h-auto"
                  placeholder="Select Date"
                  v-model="ediTtaskLocal.due_date"
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

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="updateForm">Update</vs-button>
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
    goal: {
      type: Object,
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
      ediTtaskLocal: {
        ...this.goal,
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  watch: {
    goal(val) {
      this.ediTtaskLocal = { ...val };
    },
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
      this.$validator.reset();
      this.errors.clear();
      this.$emit("closeSidebar");
    },
    updateForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let formData = {
            name: this.ediTtaskLocal.name,
            description: this.ediTtaskLocal.description,
            status: this.ediTtaskLocal.status,
            evaluation_criteria: this.ediTtaskLocal.evaluation_criteria,
            due_date: this.ediTtaskLocal.due_date,
            priority: this.ediTtaskLocal.priority,
          };
          let userid = this.currentUser.data.id;
          let itemId = this.ediTtaskLocal.id;
          this.editGoals({ formData, userid, itemId }).then(() => {
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
        title: "Goal Updated",
        text: "The goal was successfully updated",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/vuexy/_customClasses.scss";
</style>
