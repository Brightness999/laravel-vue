<template>
  <div class="text-right absolute top-0 right-0 m-0 mr-5">
    <data-side-view-bar-edit
      :isSidebarActive="EditDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
      :goal="goal"
    />
    <vs-avatar
      @click="EditData()"
      color="primary"
      icon-pack="feather"
      icon="icon-edit-2"
      size="23px"
    />
    <vs-avatar
      @click="openConfirm()"
      color="danger"
      icon-pack="feather"
      icon="icon-trash-2"
      size="23px"
    />
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
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebar(true);
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