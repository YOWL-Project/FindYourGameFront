import apiLaravel from "@/common/api-back";

export default {
    namespaced: true,
    state: {
        users: [],
        user: {},
    },
    mutations: {
        SET_USERS: (state, users) => (state.users = users),
        SET_USER: (state, user) => (state.user = user),
    },
    actions: {
        async REGISTER_USER({ commit }, body) {
            const { data } = await apiLaravel.post('/register/', {
                body: body
                // type :
                // "name":"test",
                // "email":"test@test.com",
                // "password":"test",
                // "password_confirmation":"test"
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_USERS", data);
        },
        async LOG_USER({ commit }, id) {
            const { data } = await apiLaravel.post('/login/', {
                body: body
                // type :
                // "name":"test",
                // "password":"test",
            }).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_USER", data);
        },
    },
}