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
            const { data } = await axios.get('https://www.freetogame.com/api/games/', {
                header: {
                // "Access-Control-Allow-Origin": "https://www.freetogame.com",
                // "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                'Access-Control-Allow-Credentials': 'true',
            }}).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_POSTS", data);
        },
    },
};