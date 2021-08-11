import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        comments: [],
        comment: {}
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
        },

        // Supprimer un comment
        async DELETE_COMMENT ({ dispatch }, body) {
            const { data } = await apiLaravel.delete(`/comments/${body.id}`,
            { headers: { 
                'Authorization': `Bearer ${body.token}`
              }})
                .catch((error) => console.log(JSON.stringify(error.message)));
            dispatch("FETCH_COMMENTS", data);
        },

        // Ajouter un comment
        async POST_COMMENT ({ dispatch }, body, {content, id}) {
            const data = {
                topic_id: id,
                user_id: id,
                content: content,
            }
            await apiLaravel.post("/comments/", 
            { headers: {
                'Authorization' : `Bearer ${body.token}`
            }})
                .catch((error) => console.log(JSON.stringify(error.message)));
            dispatch("FETCH_COMMENTS", data);
        },
    },
}