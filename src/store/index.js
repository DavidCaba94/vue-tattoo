import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      login: {
        user: 'null',
        pass: 'null'
      }
    }
  },
  mutations: {
    login(state, login) {
      state.login = login;
      sessionStorage.setItem('user', login.user);
      sessionStorage.setItem('pass', login.pass);
    }
  },
  actions: {
  },
  modules: {
  }
})
