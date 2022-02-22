<template>
  <div v-if="!userLogged">
    <Unauthorized pathName="Archivo"/>
  </div>
  <div class="archivo" v-if="userLogged">
      ARCHIVO
  </div>
</template>

<script>
import Unauthorized from '@/components/Unauthorized.vue'

export default {
  name: 'Archivo',
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
@import url('../assets/css/archivo.css');
</style>