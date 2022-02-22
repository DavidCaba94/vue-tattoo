<template>
  <div class="unauthorized">
      Para tener acceso a la sección {{ pathName }} regístrate o accede con tu cuenta
  </div>
</template>

<script>

export default {
  name: 'Unauthorized',
  data() {
    return {
        
    }
  },
  props: {
    pathName: String
  },
  computed:{

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
@import url('../assets/css/unauthorized.css');
</style>