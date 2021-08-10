import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        votesGames: [],
    },
    mutations: {
        SET_VOTESGAMES: (state, votesGames) => (state.votesGames = votesGames),
    },
    actions: {
        async FETCH_VOTESGAMES({ commit }) {
            const { data } = await apiLaravel.get('/votesgames/')
                .catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_VOTESGAMES", data.data.votes);
        },
    },
}