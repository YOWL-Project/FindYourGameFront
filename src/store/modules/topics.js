import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        topics: [],
    },
    mutations: {
        SET_TOPICS: (state, topics) => (state.topics = topics),
    },
    actions: {
        async FETCH_TOPICS({ commit }) {
            const { data } = await apiLaravel.get('/topics/')
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_TOPICS", data.data.topics);
        }
    },
}