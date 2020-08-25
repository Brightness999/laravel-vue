<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">
    <div class="flex justify-end">
      <div>
        <vs-button icon="icon-edit" icon-pack="feather" v-if="edit==false&&currentUser.id === id" @click="edit=!edit">
          edit
        </vs-button>
      </div>
    </div>
    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>
    <div class="flex" v-if="user_data">
      <div class="w-1/4 pr-2">
      <vx-card>
        <div class=image-container>
          <img ref="image" v-if="user_data.avatar" :src="user_data.avatar" class="rounded w-full"/>
          <img v-else ref="placeholder-image" src="@assets/images/profile/user-uploads/user-01.jpg"  class="rounded w-full mb-3" />
          <input ref="image-file" type="file" class="opacity-0 absolute" style="width:0px;height:0px" @change="loadImage">
          <div class="icon" @click="$refs['image-file'].click()" v-if="edit&&currentUser.id === id">
            <feather-icon icon="EditIcon" svgClasses="h-5 w-5" class="cursor-pointer" @click.prevent></feather-icon>
          </div>
        </div>
        <div class="text-center" v-if="user_data.position">
          {{ user_data.position ? user_data.position.name : '' }}
        </div>
        <div class="text-center font-semibold" v-if="user_data.campaign">
          {{user_data.campaign ? user_data.campaign.name: '' }}
        </div>
      </vx-card>
      </div>
      <div class="flex-1 pl-2">
        <table class="mb-10">
          <tr>
            <td>Hrs:</td>
                <td class="font-semibold" v-if="edit===false">
                    <span v-for="(hr, index) in user_data.hrs"><span v-if="index !== 0">, </span><span>{{ hr.full_name }}</span></span>
                </td>
                <td v-else>
                  <v-select label="full_name" class="vs-con-input-label" multiple :closeOnSelect="false" v-model="user_data.hrs_ids" :options="hrs" :reduce="a => a.id"/><br>
                </td>
          </tr>
          <tr>
            <td>Mentors:</td>
            <td class="font-semibold" v-if="edit===false">
                <span v-for="(mentor, index) in user_data.mentors"><span v-if="index !== 0">, </span><span>{{ mentor.full_name }}</span></span>
            </td>
            <td v-else>
              <v-select label="full_name" class="vs-con-input-label" multiple :closeOnSelect="false" v-model="user_data.mentors_ids" :options="mentors" :reduce="a => a.id"/><br>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Email:</td>
            <td v-if="edit===false" class="font-semibold">{{ user_data.email }}</td>
            <td v-else>
                  <vs-input disabled icon-pack="feather" icon="icon-lock" icon-after placeholder="icon-after" vs-placeholder="Nombre"  :value="user_data.email" />
                </td>
          </tr>
          <tr>
            <td>Ppr date:</td>
            <td v-if="edit===false" class="font-semibold">{{ user_data.email }}</td>
            <td v-else>
              <vs-input icon-pack="feather" icon="icon-edit-2" icon-after placeholder="PPR date" vs-placeholder="Nombre"  />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="flex justify-end">
      <vs-button icon="icon-edit" icon-pack="feather" v-if="edit===true" @click="save">
        save
      </vs-button>
    </div>
  </div>
</template>

<script>
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
import vSelect from 'vue-select'
import { mapState } from 'vuex'

export default {
  components: {
    vSelect
  },
  data () {
    return {
      user_data: null,
      user_not_found: false,
      edit: false,
      hrs: [],
      mentors: [],
      id: null
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.user
    })
  },
  methods: {
    async save() {
      let formData = new FormData();
      formData.append('hrs', JSON.stringify(this.user_data.hrs_ids))
      formData.append('mentors', JSON.stringify(this.user_data.mentors_ids))
      if(this.user_data.new_avatar)
      formData.append('new_avatar', this.user_data.new_avatar)
      await this.$http.put('/api/users/'+this.$route.params.userId, formData)
      await this.loadData()
      this.edit = !this.edit
    },
    async loadData() {
      const userId = parseInt(this.$route.params.userId, 10)
      this.id = userId
      await this.$store.dispatch('userManagement/fetchUser', userId)
        .then(res => { this.user_data = res.data })
        .catch(err => {
          if (err.response.status === 404) {
            this.user_not_found = true
            return
          }
        })
      await this.$store.dispatch('userManagement/fetchHrsAndMentors')
      this.hrs = this.$store.state.userManagement.hrs
      this.mentors = this.$store.state.userManagement.mentors
      this.user_data.hrs_ids= this.user_data.hrs.map(a => a.id)
      this.user_data.mentors_ids = this.user_data.mentors.map(a => a.id)
    },
    loadImage(e) {
      let vm = this
      var reader = new FileReader();
      reader.onload = function (e) {
          vm.user_data['avatar'] = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.user_data.new_avatar = e.target.files[0];
    },
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.user_data.username}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.$router.push({name:'app-user-list'})
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    }
  },
  async created () {
    // Register Module UserManagement Module
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }

    await this.loadData()
  }
}

</script>
<style lang="scss">
.image-container{
  position: relative;
  .icon {
    position: absolute;
    display: none;
    color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    justify-content: center;
    background: #383838ad;
  }
  &:hover{
    .icon {
      display: flex;
      cursor: pointer;
    }
  }
}
</style>