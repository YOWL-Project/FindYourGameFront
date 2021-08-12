import apiLaravel from "@/common/api-back";

export default {
  namespaced: true,
  state: {
    visits: {
        "labels": [],
        "data": [],
    },
    gamesPopularity: {
        "count": [],
        "sum": [],
    },
  },
  mutations: {
    SET_VISITS: (state, data) => ((state.visits.labels = data.labels), (state.visits.data = data.data)),
    SET_GAMES_POPULARITY: (state, data) => ((state.gamesPopularity.count = data.count), (state.gamesPopularity.sum = data.sum)),
  },
  actions: {
    async FETCH_VISITS({ commit }, token) {
      let headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const { data } = await apiLaravel.get("/count/visits/week", { headers: headers }).catch((error) => console.log(JSON.stringify(error.message)));
      commit("SET_VISITS", data.data);
    },
    async FETCH_GAMES_POPULARITY({ commit }, token) {
        let headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const { data } = await apiLaravel.get("/count/games/5", { headers: headers }).catch((error) => console.log(JSON.stringify(error.message)));
        commit("SET_GAMES_POPULARITY", data.data);
      },
  },
  getters: {
    GET_USER: (state) => {
      return state.user;
    },
  },
};
