import apiLaravel from "@/common/api-freetoplay";

export default {
    namespaced: true,
    state: {
        games: [],
        game: {},
    },
    mutations: {
        // SET_GAMES: (state, games) => (state.games = games),
        // SET_GAME: (state, game) => (state.game = game),
    },
    actions: {
        async REGISTER({ commit }, body) {
            const { data } = await apiLaravel.post('/register/', {
                body: body
                // type :
                // "name":"test",
                // "email":"test@test.com",
                // "password":"test",
                // "password_confirmation":"test"
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_GAMES", data);
        },
        async LOGIN({ commit }, id) {
            const { data } = await apiLaravel.post('/login/', {
                body: body
                // type :
                // "name":"test",
                // "password":"test",
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_GAME", data);
        },
    },
}