<template>
  <div class="container">
    <div class="d-flex flex-column align-self-center text-center">
      <img
        src="../assets/Logo.svg"
        alt=""
        width="172"
        height="157"
        class="m-4 align-self-center"
      />
      <h1>MISSION ACCOMPLISHED</h1>
      <h2>See you later</h2>
      <router-link to="/">
        <button @click="relocate()" class="w-25 btn btn-lg btn-primary" type="submit">
          GO BACK HOME
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      user: this.$store.state.user,
    };
  },
  computed: {},
  methods: {
    logout() {
      let hasCookie = document.cookie.split(";").some((c) => {
        return c.trim().startsWith("profil" + "=");
      });
      if (hasCookie) {
        document.cookie =
          "profil" +
          "=" +
          ";path=/;secure" +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
      }
      this.$store.state.user = "";
    },
    relocate() {
        window.location = `http://localhost:8081/`;
    }
  },
  mounted() {
    this.logout();
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  padding-bottom: 2%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.visibility {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>