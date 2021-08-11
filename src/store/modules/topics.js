import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        topics: [],
        topic: {}
    },
    mutations: {
        SET_TOPICS: (state, topics) => (state.topics = topics),
        SET_TOPIC: (state, topic) => (state.topic = topic),
    },
    actions: {
        async FETCH_TOPICS({ commit }) {
            const { data } = await apiLaravel.get('/topics/')
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_TOPICS", data.data.topics);
        },

        async GET_TOPIC({ commit }, id) {
            const { data } = await apiLaravel.get(`/topics/${id}`, {

            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_TOPIC", data.data.topic);
        },
    },
}