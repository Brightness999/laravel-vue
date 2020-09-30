<template>
  <div id="page-user-view">
    <profile-bar />
    <!--
    <form @submit.prevent="save">
      <div class="flex justify-end mt-2">
        <div>
          <vs-button
            icon="icon-edit"
            icon-pack="feather"
            v-if="edit==false"
            @click="edit=!edit"
          >edit</vs-button>
        </div>
        <button
          type="submit"
          class="vs-component vs-button vs-button-primary vs-button-filled includeIcon"
          v-if="edit===true"
        >
          <i class="vs-icon notranslate icon-scale vs-button&#45;&#45;icon feather icon-edit null"></i>
          <span class="vs-button-text vs-button&#45;&#45;text">save</span>
        </button>
      </div>
      <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
        <span>User record with id: {{ $route.params.userId }} not found.</span>
        <span>
          <span>Check</span>
          <router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
        </span>
      </vs-alert>
      <div class="flex" v-if="user_data">
        <div class="w-1/4 pr-2">
          <vx-card>
            <div class="image-container">
              <img
                ref="image"
                v-if="user_data.avatar"
                :src="user_data.avatar"
                class="rounded w-full"
              />
              <img
                v-else
                ref="placeholder-image"
                src="@assets/images/profile/user-uploads/user-01.jpg"
                class="rounded w-full mb-3"
              />
              <input
                ref="image-file"
                type="file"
                class="opacity-0 absolute"
                style="width:0px;height:0px"
                @change="loadImage"
              />
              <div class="icon" @click="$refs['image-file'].click()" v-if="edit">
                <feather-icon
                  icon="EditIcon"
                  svgClasses="h-5 w-5"
                  class="cursor-pointer"
                  @click.prevent
                ></feather-icon>
              </div>
            </div>
            <div
              class="text-center"
              v-if="user_data.position&&edit===false"
            >{{ user_data.position ? user_data.position.name : '' }}</div>
            <div v-else-if="edit" class="flex justify-center mb-2">
              <v-select
                label="name"
                class="w-full"
                v-model="user_data.position_id"
                :options="positions"
                :reduce="a => a.id"
                required="required"
              >
                <template #search="{attributes, events}">
                  <input
                    class="vs__search"
                    :required="!user_data.position_id"
                    v-bind="attributes"
                    v-on="events"
                  />
                </template>
              </v-select>
              <br />
            </div>
            <div
              class="text-center font-semibold"
              v-if="user_data.campaign"
            >{{user_data.campaign ? user_data.campaign.name: '' }}</div>
          </vx-card>
        </div>
        <div class="flex-1 pl-2">
          <table>
            <tr>
              <td v-if="edit===false&&user_data.hrs.length>0">Hrs:</td>
              <td v-else-if="edit===true&&hrs.length>0">Hrs:</td>
              <td class="font-semibold" v-if="edit===false">
                <span v-for="(hr, index) in user_data.hrs">
                  <span v-if="index !== 0">,</span>
                  <span>{{ hr.full_name }}</span>
                </span>
              </td>
              <td v-else-if="hrs.length>0">
                <v-select
                  label="full_name"
                  class="vs-con-input-label"
                  multiple
                  :closeOnSelect="false"
                  v-model="user_data.hrs_ids"
                  :options="hrs"
                  required
                  :reduce="a => a.id"
                >
                  <template #search="{attributes, events}">
                    <input
                      class="vs__search"
                      :required="user_data.hrs_ids.length<1"
                      v-bind="attributes"
                      v-on="events"
                    />
                  </template>
                </v-select>
                <br />
              </td>
            </tr>
            <tr>
              <td v-if="edit===false&&user_data.mentors.length>0">Mentors:</td>
              <td v-else-if="edit===true&&mentors.length>0">Mentors:</td>
              <td class="font-semibold" v-if="edit===false">
                <span v-for="(mentor, index) in user_data.mentors">
                  <span v-if="index !== 0">,</span>
                  <span>{{ mentor.full_name }}</span>
                </span>
              </td>
              <td v-else-if="mentors.length>0">
                <v-select
                  label="full_name"
                  class="vs-con-input-label"
                  multiple
                  required
                  :closeOnSelect="false"
                  v-model="user_data.mentors_ids"
                  :options="mentors"
                  :reduce="a => a.id"
                >
                  <template #search="{attributes, events}">
                    <input
                      class="vs__search"
                      :required="user_data.mentors_ids.length<1"
                      v-bind="attributes"
                      v-on="events"
                    />
                  </template>
                </v-select>
                <br />
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Email:</td>
              <td v-if="edit===false" class="font-semibold">{{ user_data.email }}</td>
              <td v-else>
                <vs-input
                  disabled
                  icon-pack="feather"
                  icon="icon-lock"
                  icon-after
                  placeholder="icon-after"
                  vs-placeholder="Nombre"
                  required
                  :value="user_data.email"
                />
              </td>
            </tr>
            <tr>
              <td>Ppr date:</td>
              <td v-if="edit===false" class="font-semibold">{{ ppr_date }}</td>
              <td v-else>
                <vs-input
                  icon-pack="feather"
                  icon="icon-edit-2"
                  icon-after
                  placeholder="PPR date"
                  v-model="ppr_date"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </form>-->
    <add-cards />
  </div>
</template>

<script>
import moduleUserManagement from "@/store/user-management/moduleUserManagement.js";
import vSelect from "vue-select";
import { mapState } from "vuex";
import profileBar from "./profile/ProfileBar.vue"
import draggable from "vuedraggable";
import addCards from "./addCards.vue";
export default {
  components: {
    draggable,
    vSelect,
    addCards,
    profileBar
  },
  data() {
    return {
      user_data: null,
      user_not_found: false,
      positions: [],
      edit: false,
      hrs: [],
      mentors: [],
      id: null,
      ppr_date: "20-05-2020",
    };
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.user,
    }),
  },
  methods: {
    async save() {
      const formData = new FormData();
      formData.append("hrs", JSON.stringify(this.user_data.hrs_ids));
      formData.append("mentors", JSON.stringify(this.user_data.mentors_ids));
      formData.append("position_id", this.user_data.position_id);
      if (this.user_data.new_avatar)
        formData.append("new_avatar", this.user_data.new_avatar);
      formData.append("_method", "put");
      this.user_data.hrs = this.hrs.filter((a) =>
        this.user_data.hrs_ids.includes(a.id)
      );
      this.user_data.mentors = this.mentors.filter((a) =>
        this.user_data.mentors_ids.includes(a.id)
      );
      this.user_data.position = this.positions.find(
        (a) => a.id === this.user_data.position_id
      );
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
      await this.$store.dispatch("userManagement/fetchHrsAndMentors");
      let { data } = await this.$http("/api/positions?all=1");
      this.positions = data;
      this.hrs = this.$store.state.userManagement.hrs;
      this.mentors = this.$store.state.userManagement.mentors;
      this.user_data.hrs_ids = this.user_data.hrs.map((a) => a.id);
      this.user_data.mentors_ids = this.user_data.mentors.map((a) => a.id);
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

    let userid = this.currentUser.id;
    await this.loadData();
  },
};
</script>

<style lang="scss">
@import "@sass/vuexy/pages/profile.scss";
</style>