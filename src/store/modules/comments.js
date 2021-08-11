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
        // async POST_COMMENT({ commmit }) {

        // }
        async DELETE_COMMENT ({ dispatch }, body) {
            const { data } = await apiLaravel.delete(`/comments/${body.id}`,
            { headers: { 
                'Authorization': `Bearer ${body.token}`
              }})
                .catch((error) => console.log(JSON.stringify(error.message)));
            dispatch("FETCH_COMMENTS", data);
        },

        // async UPDATE_USER({ commit }, body) {
        //     let headers = {
        //       "Content-Type": "application/json",
        //       Authorization: Bearer ${body.token},
        //     };
        //     const { data } = await apiLaravel
        //       .put(/users/${body.id}, body.body, { headers: headers })
        //       .catch((error) => console.log(JSON.stringify(error.message)));
        //     console.log(commit);
        //     console.log(data);
        //     // commit("UPDATE_USER", data.data);
        //   },
    },
}