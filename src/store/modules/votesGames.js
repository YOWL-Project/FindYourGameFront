import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        votesGames: [],
    },
    mutations: {
        SET_VOTESGAMES: (state, votesGames) => (state.votesGames = votesGames),
        CREATE_VOTESGAMES: (state, voteGame) => (state.votesGames = state.votesGames.push(voteGame)),
        DELETE_VOTESGAMES: (state, id) => {
            let index = state.votesGames.findIndex((elem) => elem.id === id)
            state.votesGames.splice(index, 1)
        }
    },
    actions: {
        async FETCH_VOTESGAMES({ commit }) {
            const { data } = await apiLaravel.get('/votesgames/')
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_VOTESGAMES", data.data.votes);
        },
        async CREATE_VOTESGAMES({ commit }, infos) {
            const { data } = await apiLaravel.post('/votesgames/', infos.body, { headers: infos.headers })
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("CREATE_VOTESGAMES", data.data);
        },
        async DELETE_VOTESGAMES({ commit }, infos) {
            const { data } = await apiLaravel.delete(`/votesgames/${infos.id}`, { headers: infos.headers })
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("DELETE_VOTESGAMES", data.data.id);
        },
        async UPDATE_VOTESGAMES({ commit }, infos) {
            const { data } = await apiLaravel.put(`/votesgames/${infos.id}`, infos.body, { headers: infos.headers })
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("DELETE_VOTESGAMES", data.data.id);
            commit("CREATE_VOTESGAMES", data.data.id);
        },
    },
}