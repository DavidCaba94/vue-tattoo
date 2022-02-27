<template>
  <div class="login">
    <div class="btn-volver">
      <router-link to="/"><img src="../assets/img/icons/arrow-left.svg" alt="Volver"></router-link>
    </div>
    <div class="login-box">
      <p class="titulo-login">Log In</p>
      <p class="subtitulo-login">Entra para tener acceso a todas las funcionalidades</p>
      <div class="input-box">
        <input type="text" placeholder="Email o Usuario" v-model="loginForm.user">
        <input type="password" placeholder="Contraseña" v-model="loginForm.pass">
      </div>
      <p id="error-log" class="error-log" v-if="errorLog">{{errorLog}}</p>
      <div class="btn-login" @click="login()" v-if="!loading">ENTRAR</div>
      <div class="lds-ellipsis" v-if="loading"><div></div><div></div><div></div><div></div></div>
      <p class="texto-registro">Si no tienes cuenta puedes registrarte <router-link to="/registro">aquí</router-link></p>
    </div>
  </div>
</template>

<script>
import userService from '../services/userService.js';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        user: '',
        pass: ''
      },
      errorLog: null,
      loading: false
    }
  },
  created() {
    this.errorLog = null;
    this.loading = false;
  },
  methods: {
    async login() {
      this.errorLog = null;
      this.loading = true;
      let finalUser = await userService.getUserByLogin(this.loginForm);
      if(finalUser) {
        this.$store.commit('login', finalUser);
        this.$router.push('/');
      } else {
        this.errorLog = 'Usuario o contraseña incorrectos';
      }
      this.loading = false;
    }
  }
}
</script>

<style>
@import url('../assets/css/login.css');
</style>