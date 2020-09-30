<template>
  <div class="relative">
      <div class="navbar-custom profile-bar flex" :color="navbarColorLocal" :class="textColor">
        <profile-photo class="my-3 ml-4"/>
      </div>
    </div>
</template>


<script>
import profilePhoto from '@/layouts/components/profilePhoto.vue'


export default {
  name: 'profile-bar',
  props: {
    navbarColor: {
      type: String,
      default: '#fff'
    }
  },
  components: {
    profilePhoto
  },
  computed: {
    navbarColorLocal () {
      return this.$store.state.theme === 'dark' && this.navbarColor === '#fff' ? '#10163a' : this.navbarColor
    },
    verticalNavMenuWidth () {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor () {
      return {'text-white': (this.navbarColor !== '#10163a' && this.$store.state.theme === 'dark') || (this.navbarColor !== '#fff' && this.$store.state.theme !== 'dark')}
    },
    windowWidth () {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj () {
      if      (this.verticalNavMenuWidth === 'default') return 'navbar-default'
      else if (this.verticalNavMenuWidth === 'reduced') return 'navbar-reduced'
      else if (this.verticalNavMenuWidth)               return 'navbar-full'
    }
  },
  methods: {
    showSidebar () {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
    }
  }
}
</script>

