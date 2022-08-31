const authStore = {
  state: {
    username: null,
  },
  getters: {
    isAuthenticated: (state) => {
      return state.username ? true : false;
    },
  },
  mutations: {
    LOG_IN(state, username) {
      state.username = username;
    },
    LOG_OUT(state) {
      state.username = null;
    },
  },
  actions: {
    login({ commit }, username) {
      commit('LOG_IN', username);
    },
    logout({ commit }) {
      commit('LOG_OUT');
    },
  },
};

export default authStore;
