<template>
  <Menu />
</template>
<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  created() {
    if(sessionStorage.getItem('user') !== 'null' && sessionStorage.getItem('pass') !== 'null') {
      this.$store.state.login.user = sessionStorage.getItem('user');
      this.$store.state.login.pass = sessionStorage.getItem('pass');
    }
  }
}
</script>
<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

body {
  margin: 0;
  background-color: #fafafa;
}
</style>
