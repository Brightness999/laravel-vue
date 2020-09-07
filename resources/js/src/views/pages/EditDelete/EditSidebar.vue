<template>
  <div class="text-right absolute top-0 right-0 mr-1 mt-1">
    <data-side-view-bar-edit
      :isSidebarActive="EditDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
      :goal="goal"
    />
    <span @click="EditData()" class="cursor-pointer">
      <vs-icon icon="edit" size="25px" bg="rgb(251, 251, 251)"></vs-icon>
    </span>
    <span @click="openConfirm()" class="cursor-pointer">
      <vs-icon icon="delete " size="25px" bg="rgb(251, 251, 251)"></vs-icon>
    </span>
    <div class="hidden" ref="test"></div>
  </div>
</template>
<script>
import DataSideViewBarEdit from "./DataSideViewBarEdit.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      EditDataSidebar: false,
      sidebarData: {},
      showIcons: {},
      activeConfirm: false,
    };
  },
  props: ["goal"],
  methods: {
    ...mapActions("goals", ["deleteGoals"]),
    EditData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.EditDataSidebar = val;
      if (!val) {
        this.$refs.test.click();
      }
    },
    //delete Icon
    openConfirm() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure you want to delete?",
        accept: this.acceptAlert,
      });
    },
    async acceptAlert() {
      let userid = this.goal.user_id;
      let itemId = this.goal.id;
      await this.deleteGoals({ userid, itemId });
      this.$vs.notify({
        color: "danger",
        title: "Goal deleted",
        text: "The selected goal is successfully deleted",
      });
    },
  },
  components: {
    DataSideViewBarEdit,
  },
};
</script>
<style lang="stylus" scoped></style>
<style></style>