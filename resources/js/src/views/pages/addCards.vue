<template>
  <div class="mt-5">
    <vx-card code-toggler id="cards-table">
        <div class="top-block">
            <div class="content-area__heading pr-4">
                <h3 class="mb-5 text-primary">Smart Goals</h3>
                <p class="mt-1 mb-1 smart-text">
                    Smart goals set you up for success by making goals specific, achievable, realistic and timely.
                </p>
            </div>
            <profile-sidebar class="top-button" />
        </div>
        <div class="vx-row">
        <div class="vx-col w-full md:w-1/3">
          <vs-list>
            <vs-list-header
              class="block text-left text-lg font-thin"
              title="TODO"
              color="primary"
            ></vs-list-header>
            <draggable
              data-drag="Todo"
              :list="Todo"
              group="goals"
              class="cursor-pointer"
              @add="onAdd"
            >
              <vs-list-item
                class="block border-none"
                v-for="(listItem, index) in Todo"
                :key="index"
                :data-id="listItem.id"
                :data-name="listItem.name"
                :data-description="listItem.description"
                :data-evaluation_criteria="listItem.evaluation_criteria"
                :data-due_date="listItem.due_date"
                :data-priority="listItem.priority "
                style="padding:0px"
              >
                <vx-card
                  class="hover:bg-grey-light"
                  @mouseover="show(listItem.id)"
                  @mouseout="hide(listItem.id)"
                >
                  <div>
                    <div>
                      <vs-input
                        class="w-full"
                        v-if="showEdit[listItem.id]"
                        :value="listItem.name"
                        autofocus
                        @keyup.enter="saveTitle($event,listItem)"
                        @blur="saveTitle($event,listItem)"
                      />
                      <p
                        v-else
                        @dblclick="showEditingMode(listItem.id)"
                        class="mt-1"
                      >{{listItem.name}}</p>
                    </div>

                    <div>
                      <vs-input
                        class="w-full"
                        v-if="showDateEdit[listItem.id]"
                        :value="listItem.due_date"
                        autofocus
                        @keyup.enter="saveDate($event,listItem)"
                        @blur="saveDate($event,listItem)"
                      />
                      <p
                        v-else
                        @dblclick="showEditingModeDate(listItem.id)"
                        class="mt-1 font-medium"
                      ><span>Due date: </span>{{listItem.due_date}}</p>
                    </div>
                    <div class="text-center" v-show="showIcons[listItem.id]">
                      <edit-sidebar :goal="listItem" />
                    </div>
                  </div>
                </vx-card>
              </vs-list-item>
            </draggable>
          </vs-list>
        </div>
        <div class="vx-col w-full md:w-1/3">
          <vs-list>
            <vs-list-header
              class="block text-left text-lg font-thin"
              title="IN PROGRESS"
              color="primary"
            ></vs-list-header>
            <draggable
              data-drag="In Progress"
              :list="InProgress"
              group="goals"
              class="cursor-pointer"
              style="min-height:200px"
              @add="onAdd"
            >
              <vs-list-item
                class="block border-none"
                v-for="(listItem, index) in InProgress"
                :key="index"
                :data-id="listItem.id"
                :data-name="listItem.name"
                :data-description="listItem.description"
                :data-evaluation_criteria="listItem.evaluation_criteria"
                :data-due_date="listItem.due_date"
                :data-priority="listItem.priority "
                style="padding:0px"
              >
                <vx-card
                  class="hover:bg-grey-light"
                  @mouseover="show(listItem.id)"
                  @mouseout="hide(listItem.id)"
                >
                  <div>
                    <div>
                      <vs-input
                        class="w-full"
                        v-if="showEdit[listItem.id]"
                        :value="listItem.name"
                        autofocus
                        @keyup.enter="saveTitle($event,listItem)"
                        @blur="saveTitle($event,listItem)"
                      />
                      <p
                        v-else
                        @dblclick="showEditingMode(listItem.id)"
                        class="mt-1"
                      >{{listItem.name}}</p>
                    </div>

                    <div>
                      <vs-input
                        class="w-full"
                        v-if="showDateEdit[listItem.id]"
                        :value="listItem.due_date"
                        autofocus
                        @keyup.enter="saveDate($event,listItem)"
                        @blur="saveDate($event,listItem)"
                      />
                      <p
                        v-else
                        @dblclick="showEditingModeDate(listItem.id)"
                        class="mt-1 font-medium"
                      >{{listItem.due_date}}</p>
                    </div>
                    <div class="text-center" v-show="showIcons[listItem.id]">
                      <edit-sidebar :goal="listItem" />
                    </div>
                  </div>
                </vx-card>
              </vs-list-item>
            </draggable>
          </vs-list>
        </div>
        <div class="vx-col w-full md:w-1/3">
          <vs-list>
            <vs-list-header
              class="block text-left text-lg font-thin"
              title="DONE"
              color="primary"
            ></vs-list-header>
            <draggable
              data-drag="Done"
              :list="Done"
              group="goals"
              class="cursor-pointer"
              style="min-height:200px"
              @add="onAdd"
            >
              <vs-list-item
                class="block border-none"
                v-for="(listItem, index) in Done"
                :key="index"
                :data-id="listItem.id"
                :data-name="listItem.name"
                :data-description="listItem.description"
                :data-evaluation_criteria="listItem.evaluation_criteria"
                :data-due_date="listItem.due_date"
                :data-priority="listItem.priority "
                style="padding:0px"
              >
                <vx-card
                  class="hover:bg-grey-light"
                  @mouseover="show(listItem.id)"
                  @mouseout="hide(listItem.id)"
                >
                  <div>
                    <div>
                      <vs-input
                        class="w-full"
                        v-if="showEdit[listItem.id]"
                        :value="listItem.name"
                        autofocus
                        @keyup.enter="saveTitle($event,listItem)"
                        @blur="saveTitle($event,listItem)"
                      />
                      <p
                        v-else
                        @dblclick="showEditingMode(listItem.id)"
                        class="mt-1"
                      >{{listItem.name}}</p>
                    </div>

                    <div>
                      <vs-input
                        class="w-full"
                        v-if="showDateEdit[listItem.id]"
                        :value="listItem.due_date"
                        autofocus
                        @keyup.enter="saveDate($event,listItem)"
                        @blur="saveDate($event,listItem)"
                      />
                      <p
                        v-else
                        @dblclick="showEditingModeDate(listItem.id)"
                        class="mt-1 font-medium"
                      >{{listItem.due_date}}</p>
                    </div>
                    <div class="text-center" v-show="showIcons[listItem.id]">
                      <edit-sidebar :goal="listItem" />
                    </div>
                  </div>
                </vx-card>
              </vs-list-item>
            </draggable>
          </vs-list>
        </div>
      </div>
    </vx-card>
  </div>
</template>


<script>
import moduleUserManagement from "@/store/user-management/moduleUserManagement.js";
import moduleGoals from "@/store/goals/moduleGoals.js";
import TodoAddNew from "@/views/apps/goals/TodoAddNew.vue";
import vSelect from "vue-select";
import { mapState, mapActions } from "vuex";
import ProfileSidebar from "./ProfileSidebar.vue";
import draggable from "vuedraggable";
import EditSidebar from "./EditDelete/EditSidebar.vue";
export default {
  components: {
    draggable,
    vSelect,
    ProfileSidebar,
    TodoAddNew,
    EditSidebar,
  },
  data() {
    return {
      showIcons: {},
      showEdit: {},
      showDateEdit: {},
      editedTodo: null,
    };
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.user,
    }),
    Todo: {
      get() {
        return this.$store.getters["goals/todoGoals"];
      },
      set(value) {
        this.$store.commit("moduleGoals/setTodo", value);
        console.log("hhh");
      },
    },
    goals: {
      get() {
        return this.$store.state.goals.goals;
      },
      set(value) {
        this.$store.commit("moduleGoals/setTodo", value);
      },
    },
    InProgress: {
      get() {
        return this.$store.getters["goals/inProgressGoals"];
      },
      set(value) {
        this.$store.commit("moduleGoals/setInProgress", value);
      },
    },
    Done: {
      get() {
        return this.$store.getters["goals/doneGoals"];
      },
      set(value) {
        this.$store.commit("moduleGoals/setDone", value);
      },
    },
  },
  methods: {
    ...mapActions("goals", ["editGoals"]),
    saveTitle($event, listItem) {
      let name = event.target.value;
      let formData = {
        ...listItem,
        name,
      };
      let userid = this.currentUser.id;
      let itemId = listItem.id;
      this.$set(this.showEdit, itemId, false);
      this.editGoals({ formData, userid, itemId }).then(() => {});
    },
    saveDate($event, listItem) {
      let due_date = event.target.value;
      let formData = {
        ...listItem,
        due_date,
      };
      let userid = this.currentUser.id;
      let itemId = listItem.id;
      this.$set(this.showDateEdit, itemId, false);
      this.editGoals({ formData, userid, itemId }).then(() => {});
    },
    ...mapActions("goals", ["fetchGoals", "editGoals"]),
    show(id) {
      this.$set(this.showIcons, id, true);
    },
    hide(id) {
      this.$set(this.showIcons, id, false);
    },
    showEditingMode(id) {
      this.$set(this.showEdit, id, true);
    },
    showEditingModeDate(id) {
      this.$set(this.showDateEdit, id, true);
    },
    onAdd(event) {
      let itemId = event.item.getAttribute("data-id");
      let status = event.to.getAttribute("data-drag");
      let name = event.item.getAttribute("data-name");
      let description = event.item.getAttribute("data-description");
      let evaluation_criteria = event.item.getAttribute(
        "data-evaluation_criteria"
      );
      let due_date = event.item.getAttribute("data-due_date");
      let priority = event.item.getAttribute("data-priority ");
      let userid = this.currentUser.id;
      let formData = {
        name,
        description,
        evaluation_criteria,
        status,
        due_date,
        priority,
      };
      this.editGoals({ formData, userid, itemId }).then(() => {
        this.showAddSuccess();
      });
    },
    showAddSuccess() {
      this.$vs.notify({
        color: "success",
        title: "Goal Updated",
        text: "The goal was successfully updated",
      });
    },
    async save() {
      const formData = new FormData();
      await this.$http.post(`/api/users/${this.id}`, formData);
      this.edit = !this.edit;
    },
    async loadData() {
      const userId = this.currentUser.id;
      this.id = userId;
      await this.$store
        .dispatch("userManagement/fetchUser", userId)
        .then((res) => {
          this.user_data = res.data;
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.user_not_found = true;
          }
        });
    },
    loadImage(e) {
      const vm = this;
      const reader = new FileReader();
      reader.onload = function (e) {
        vm.user_data["avatar"] = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.user_data.new_avatar = e.target.files[0];
    },
    confirmDeleteRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm Delete",
        text: `You are about to delete "${this.user_data.username}"`,
        accept: this.deleteRecord,
        acceptText: "Delete",
      });
    },
    deleteRecord() {
      /* Below two lines are just for demo purpose */
      this.$router.push({ name: "app-user-list" });
      this.showDeleteSuccess();
      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess() {
      this.$vs.notify({
        color: "success",
        title: "User Deleted",
        text: "The selected user was successfully deleted",
      });
    },
  },
  async created() {
    // Register Module UserManagement Module
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule("userManagement", moduleUserManagement);
      moduleUserManagement.isRegistered = true;
    }
    if (!moduleGoals.isRegistered) {
      this.$store.registerModule("moduleGoals", moduleGoals);
      moduleGoals.isRegistered = true;
    }
    let userid = this.currentUser.id;
    await this.loadData();
    await this.fetchGoals({ userid });
  },
};
</script>
