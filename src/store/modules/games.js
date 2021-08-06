import freetoplay from "@/common/api-freetoplay";

export default {
    namespaced: true,
    state: {
      games: [],
    },
    mutations: {
        SET_GAMES: (state, games) => (state.games = games),
    },
    actions: {
        async FETCH_GAMES( { commit } ) {
            const { data } = await freetoplay.get('/games/').catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_GAMES", data);
        },
        async GET_GAME( { commit }, id ) {
            const { data } = await freetoplay.get('/game/', {
                params: {
                    id: id,
                },
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_GAMES", data);
        },
    },
};