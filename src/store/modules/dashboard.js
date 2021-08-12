import apiLaravel from "@/common/api-back";

export default {
  namespaced: true,
  state: {
    visits: {
        "labels": [],
        "data": [],
    },
  },
  mutations: {
    SET_VISITS: (state, data) => ((state.visits.labels = data.labels), (state.visits.data = data.data)),
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
  },
  getters: {
    GET_USER: (state) => {
      return state.user;
    },
  },
};
