<template>
  <div class="registro">
    <div class="btn-volver">
      <router-link to="/"><img src="../assets/img/icons/arrow-left.svg" alt="Volver"></router-link>
    </div>
    <div class="registro-box">
      <p class="titulo-registro">Registro</p>
      <p class="subtitulo-registro">Regístrate para tener acceso a todas las funcionalidades</p>
      <div class="input-box">
        <input type="text" placeholder="Usuario (Ej: JohnDoe23)" v-model="registroForm.user">
        <input type="text" placeholder="Email" v-model="registroForm.email">
        <input type="password" placeholder="Contraseña" v-model="registroForm.pass">
        <input type="password" placeholder="Confirmar contraseña" v-model="registroForm.pass2">
      </div>
      <p id="error-log" class="error-log" v-if="errorLog">{{errorLog}}</p>
      <div class="btn-registro" @click="checkRegistro()" v-if="!loading">CONFIRMAR</div>
      <div class="lds-ellipsis" v-if="loading"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
import userService from '../services/userService.js';
export default {
  name: 'Registro',
  data() {
    return {
      registroForm: {
        user: '',
        email: '',
        pass: '',
        pass2: ''
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
    async registro() {
      this.errorLog = null;
      this.loading = true;
      let userComprobado = await userService.getUserByNameOrEmail(this.registroForm);
      if(this.registroForm.pass === this.registroForm.pass2) {
        if(userComprobado) {
          this.errorLog = 'El nombre de usuario o el email ya existen';
        } else {
          await userService.registrarUsuario(this.registroForm) ? this.$router.push('/') : this.$router.push('error');
        }
      } else {
        this.errorLog = 'Las contraseñas no son iguales';
      }
      this.loading = false;
    },
    checkRegistro() {
      this.errorLog = null;
      if(this.registroForm.user !== '' && this.registroForm.email !== '' && this.registroForm.pass !== '' && this.registroForm.pass2 !== '') {
        this.registro();
      } else {
        this.errorLog = 'Todos los campos son obligatorios';
      }
    }
  }
}
</script>

<style>
@import url('../assets/css/registro.css');
</style>