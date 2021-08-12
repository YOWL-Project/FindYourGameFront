import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        comments: [],
    },
    mutations: {
        SET_COMMENTS: (state, comments) => (state.comments = comments),
        SET_COMMENT: (state, comment) => (state.comment = comment),
    },
    actions: {
        async FETCH_COMMENTS({ commit }) {
            const { data } = await apiLaravel.get('/comments/')
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_COMMENTS", data);
        },
        async FETCH_COMMENT({ commit }, id) {
            const { data } = await apiLaravel.get(`/comments/${id}`)
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_COMMENT", data.data.comment);
        }
    },
}