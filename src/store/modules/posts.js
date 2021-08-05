import allGames from "@/common/api-freetoplay";

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
            const { data } = await allGames.get().catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
    },
};