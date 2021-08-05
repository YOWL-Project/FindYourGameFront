// import allGames from "@/common/api-freetoplay";
import axios from "axios";

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
            const { data } = await axios.get("https://www.freetogame.com/api/games/", ).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
    },
};