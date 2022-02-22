<template>
  <div v-if="!userLogged">
    <Unauthorized pathName="Feed"/>
  </div>
  <div class="feed" v-if="userLogged">
    FEED
  </div>
</template>

<script>
import Unauthorized from '@/components/Unauthorized.vue'

export default {
  name: 'Feed',
  components: {
    Unauthorized
  },
  data() {
    return {

    }
  },
  computed:{
    userLogged() {
      var isLogged = false;
      if (this.$store.state.login.user !== '' && this.$store.state.login.pass !== '') {
        isLogged = true;
      } else {
        isLogged = false;
      }
      return isLogged;
    }
  }
}
</script>

<style>
@import url('../assets/css/feed.css');
</style>