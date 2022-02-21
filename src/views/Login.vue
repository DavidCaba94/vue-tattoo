<template>
  <div class="login">
    <div class="btn-volver">
      <router-link to="/"><img src="../assets/img/arrow-left.svg" alt="Volver"></router-link>
    </div>
    <div class="login-box">
      <div @click="login()">SIMULAR LOGIN</div>
      <div @click="ver()">VER LOGIN</div>
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
      this.loginForm.user = 'David';
      this.loginForm.pass = 'Pass';
      this.$store.commit('login', this.loginForm);
      this.$router.push('/');
    },
    ver() {
      console.log(this.$store.state.login.user);
    }
  }
}
</script>

<style>
@import url('../assets/css/login.css');
</style>