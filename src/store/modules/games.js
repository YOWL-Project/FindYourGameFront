import freetoplay from "@/common/api-freetoplay";

export default {
    namespaced: true,
    state: {
        games: [],
        game: {},
    },
    mutations: {
        SET_GAMES: (state, games) => (state.games = games),
        SET_GAME: (state, game) => (state.game = game),
    },
    actions: {
        async FETCH_GAMES({ commit }, filter) {
            let platform = filter.platform;
            let category = filter.category;
            let sortBy = filter.sortBy;
            if (category != '') {
                const { data } = await freetoplay.get('/games/', {
                    params: {
                        platform: platform,
                        "sort-by": sortBy,
                        category: category,
                    },
                }).catch((error) => console.log(JSON.stringify(error.message)));
                commit("SET_GAMES", data);
            } else {
                const { data } = await freetoplay.get('/games/', {
                    params: {
                        platform: platform,
                        "sort-by": sortBy,
                    },
                }).catch((error) => console.log(JSON.stringify(error.message)));
                commit("SET_GAMES", data);
            }
        },
        async GET_GAME({ commit }, id) {
            const { data } = await freetoplay.get('/game/', {
                params: {
                    id: id,
                },
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_GAME", data);
        },
    },
}

// categories : mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts
// platform : pc, browser or all
// sort-by : release-date, popularity, alphabetical or relevance