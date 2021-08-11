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
    REGISTER_USER({ commit }, infos) {
      let body = {
        username: infos.username,
        email: infos.email,
        password: infos.password,
        password_confirmation: infos.password_confirmation,
        birthdate: infos.birthdate
      }
      apiLaravel.post('/register/', body)
        .then((response) => {
          if (infos.remember) {
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            let profil = JSON.stringify(response.data.data);
            document.cookie = `profil=${profil};${expires};path=/;secure`;
          }
          commit("SET_USER", response.data.data);
          commit("errors/SET_ERROR_LOG", response.data, { root: true })
        })
        .catch((error) => commit("errors/SET_ERROR_LOG", error.response.data.data, { root: true }));
      // if (data) {
      //   commit("SET_USERS", data);
      // }
    },
    async LOG_USER({ commit }, infos) {
      let body = {
        username: infos.username,
        password: infos.password
      }
      apiLaravel.post('/login/', body)
        .then((response) => {
          if (infos.remember) {
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            let profil = JSON.stringify(response.data.data);
            document.cookie = `profil=${profil};${expires};path=/;secure`;
          }
          commit("SET_USER", response.data.data);
          commit("errors/SET_ERROR_LOG", response.data, { root: true })
        })
        .catch((error) => commit("errors/SET_ERROR_LOG", error.response.data.data, { root: true }));
    }
  },
  getters: {
    GET_USER: (state) => {
      return state.user;
    },

  }
}