<template>
  <div class="menu">
    <div id="nav" v-if="showMenu">
      <div>
        <router-link to="/"><img src="../assets/img/fav.png" alt="Logo"></router-link>
      </div>
      <div class="group-items">
        <router-link to="/feed">Feed</router-link>
        <router-link to="/explora">Explora</router-link>
        <router-link to="/archivo">Archivo</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <div>
        <router-link to="/login">
          <div class="login-button">Login</div>
        </router-link>
        <router-link to="/registro">
          <div class="register-button">Registro</div>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      
    }
  },
  computed:{
    showMenu(){
      var mostrarMenu = true;
      if (this.$route.name === 'Login' || this.$route.name === 'Registro') {
        mostrarMenu = false;
      } else {
        mostrarMenu = true;
      }
      return mostrarMenu;
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
@import url('../assets/css/menu.css');
</style>