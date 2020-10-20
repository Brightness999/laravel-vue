<template>
    <div class="con-img">
      <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="68" height="68" class="rounded-full shadow-md cursor-pointer block" />
    </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  }
}
</script>
