import apiLaravel from "@/common/api-back";

export default {
  namespaced: true,
  state: {
    users: [],
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
  },
  actions: {
    REGISTER_USER({ commit }, body) {
      apiLaravel.post('/register/', body)
        .then((response) => {
          let d = new Date();
          d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
          let expires = "expires=" + d.toUTCString();
          let profil = JSON.stringify(response.data.data);
          document.cookie = `profil=${profil};${expires};path=/;secure`;
          commit("SET_USER", response.data.data);
          commit("errors/SET_ERROR_LOG", response.data, { root: true })
        })
        .catch((error) => commit("errors/SET_ERROR_LOG", error.response.data.data, { root: true }));
      // if (data) {
      //   commit("SET_USERS", data);
      // }
    },
    async LOG_USER({ commit }, body) {
      const { data } = await apiLaravel.post('/login/', body)
        .catch((error) => console.log(JSON.stringify(error.message)));
      commit("SET_USER", data);
    }
  },
  getters: {
    GET_USER: (state) => {
      return state.user;
    },

  }
}