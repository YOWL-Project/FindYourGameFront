import allGames from "@/common/api-freetoplay";
// import axios from "axios";

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
            const { data } = await allGames.get('/games/').catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
        async GET_POST( { commit }, id ) {
            const { data } = await allGames.get('/game/', {
                params: {
                    id: id,
                },
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
    },
};