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
      <div class="btn-login" @click="login()">ENTRAR</div>
      <p class="texto-registro">Si no tienes cuenta puedes registrarte <router-link to="/registro">aquí</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.commit('login', this.loginForm);
      this.$router.push('/');
    }
  }
}
</script>

<style>
@import url('../assets/css/login.css');
</style>