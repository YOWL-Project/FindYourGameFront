import freetoplay from "@/common/api-freetoplay";

export default {
    namespaced: true,
    state: {
      posts: [],
    },
    mutations: {
        SET_POSTS: (state, posts) => (state.posts = posts),
    },
    actions: {
        async FETCH_POSTS( { commit } ) {
            const { data } = await freetoplay.get('/games/').catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
        async GET_POST( { commit }, id ) {
            const { data } = await freetoplay.get('/game/', {
                params: {
                    id: id,
                },
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
    },
};