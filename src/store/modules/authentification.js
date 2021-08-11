import apiLaravel from "@/common/api-back";

export default {
  namespaced: true,
  state: {
    users: [],
    user: {},
    authentificated: false,
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user.profile, state.authentificated = user.authentificated),
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
          commit("SET_USER", {profile: response.data.data, authentificated: true});
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
          commit("SET_USER", {profile: response.data.data, authentificated: true});
          commit("errors/SET_ERROR_LOG", response.data, { root: true })
        })
        .catch((error) => commit("errors/SET_ERROR_LOG", error.response.data.data, { root: true }));
    },
    LOG_OUT({ commit }) {
      let hasCookie = document.cookie.split(";").some((c) => {
        return c.trim().startsWith("profil" + "=");
      });
      if (hasCookie) {
        document.cookie =
          "profil" +
          "=" +
          ";path=/;secure" +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
      }
      commit("SET_USER", {profile: {}, authentificated: false});
    }
  },
  getters: {
    GET_USER: (state) => {
      return state.user;
    },

  }
}