<template>
  <div class="py-2 px-5 cursor-pointer text-primary flex" @click="logout">
      <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
      <span class="ml-2">Log out</span>
  </div>
</template>

<script>
import 'firebase/auth'

export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {
      // If accesss token login
      if (localStorage.getItem('access_token')) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        localStorage.removeItem('company')
        this.$router.push('/pages/login').catch(() => {})
      }
    }
  }
}
</script>
