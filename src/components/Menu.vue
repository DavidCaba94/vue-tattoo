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
      <div v-if="!userLogged">
        <router-link to="/login">
          <div class="login-button">Login</div>
        </router-link>
        <router-link to="/registro">
          <div class="register-button">Registro</div>
        </router-link>
      </div>
      <div class="user-items" v-if="userLogged">
        <router-link to="/notificaciones">
          <div class="notification-item">
            <div class="notification-number">7</div>
          </div>
        </router-link>
        <div class="user-image" @click="toggleUserMenu()"></div>
      </div>
    </div>
    <div class="user-desplegable" v-if="userMenuVisible">
      <div class="item"><strong>NombreUsuario01</strong></div>
      <div class="separador"></div>
      <div class="item">Editar perfil</div>
      <div class="item">Configuración</div>
      <div class="separador"></div>
      <div class="item logout" @click="cerrarSesion()">Cerrar sesión</div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      userMenuVisible: false
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
    },
    userLogged() {
      var isLogged = false;
      if (this.$store.state.login.user !== '' && this.$store.state.login.pass !== '') {
        isLogged = true;
      } else {
        isLogged = false;
      }
      return isLogged;
    }
  },
  mounted() {

  },
  methods: {
    toggleUserMenu() {
      this.userMenuVisible = !this.userMenuVisible;
    },
    cerrarSesion() {
      this.toggleUserMenu();
      this.$store.commit('login', {user: '', pass: ''});
      this.$router.push('/');
    }
  }
}
</script>

<style>
@import url('../assets/css/menu.css');
</style>