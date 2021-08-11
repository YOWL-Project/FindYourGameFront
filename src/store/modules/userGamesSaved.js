import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        userGamesSaved: [],
    },
    mutations: {
        SET_USERGAMESSAVED: (state, userGamesSaved) => (state.userGamesSaved = userGamesSaved),
        CREATE_GAMESAVED: (state, userGameSaved) => state.userGamesSaved.push(userGameSaved),
    },
    actions: {
        async FETCH_USERGAMESSAVED({ commit }, user_id) {
            const { data } = await apiLaravel.get(`/gamessaved/getgamessaved/${user_id}`)
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_USERGAMESSAVED", data.data.games_saved);
        },
        async CREATE_GAMESAVED({ commit }, infos) {
            let body = infos.body;
            let headers = infos.headers;
            const { data } = await apiLaravel.post(`/gamessaved/`, body, {headers: headers})
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("CREATE_GAMESAVED", data.data);
        },
    },
}