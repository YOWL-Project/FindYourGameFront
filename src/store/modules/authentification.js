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
            apiLaravel
              .post("/register/", body)
              .then((response) => {
                if (response.status == 201) {
                  let d = new Date();
                  d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                  let expires = "expires=" + d.toUTCString();
                  let profil = JSON.stringify(response.data.data);
                  let message = JSON.stringify(response.data.message);
                  // console.log(profil);
                  console.log(message);
                  document.cookie = `profil=${profil};${expires};path=/;secure`;
                  commit("SET_USERS", profil);
                  // this.$store.commit("SET_USERS", data);
                  // this.$store.commit("AUTH", true);
                  // this.$store.commit("SUCCES", response.data.message);
                  // this.$router.push("/");
                } else {
                  throw new Error(
                    "un problème est survenu lors de l'enregistrement de votre compte"
                  );
                }
              })
              .catch((error) => console.log(JSON.stringify(error.message)));
        },
        async LOG_USER({ commit }, body) {
            const { data } = await apiLaravel.post('/login/', body
                // type :
                // "name":"test",
                // "password":"test",
            ).catch((error) => console.log(JSON.stringify(error.message)));
            commit("SET_USER", data);
        },
    },
}