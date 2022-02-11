<template>
  <div class="menu" v-if="showMenu">
    <div id="nav">
      <div>
        <router-link to="/"><img src="../assets/img/logo.png" alt="Logo"></router-link>
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
import { watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Menu',
  data() {
    return {
      showMenu: true
    }
  },
  watch: {
    
  },
  setup() {
    const route = useRoute();
    watch(() => route.name, () => {
      if (route.name === 'Login' || route.name === 'Registro') {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
      console.log('Show menu: ' + this.showMenu);
    }, { immediate: true });
    
    return { route };
  },
  methods: {
    
  }
}
</script>

<style>
@import url('../assets/css/menu.css');
</style>