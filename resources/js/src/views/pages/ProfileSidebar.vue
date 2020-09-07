<template>
  <div class="text-center">
    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <vs-button @click="addNewData">Add New</vs-button>
    <div class="hidden" ref="test"></div>
  </div>
</template>
<script>
import DataViewSidebar from "./DataViewSidebar.vue";
export default {
  data() {
    return {
      addNewDataSidebar: false,
      sidebarData: {},
    };
  },
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
      if (!val) {
        this.$refs.test.click();
      }
    },
    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
  },
  components: {
    DataViewSidebar,
  },
};
</script>