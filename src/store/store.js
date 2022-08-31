import Vue from 'vue';
import Vuex from 'vuex';
import employeeStore from './employeeStore';
import authStore from './authStore';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    employee: employeeStore,
    auth: authStore,
  },
});

export default store;
