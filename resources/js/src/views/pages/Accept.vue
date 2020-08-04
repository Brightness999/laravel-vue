<template>
  <div>
  </div>
</template>
<script>
export default {
  mounted() {
    localStorage.setItem('slug',this.$route.params.id)
    this.$router.push({path:'/pages/login'})
  }
}
</script>