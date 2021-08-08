<template>
  <div class="container">
    <div class="d-flex flex-column align-self-center text-center">
      <img
        class="m-4 align-self-center"
        src="../assets/Logo.svg"
        alt=""
        width="172"
        height="157"
      />
      <h1>SUBSCRIBE FORM</h1>
      <form class="text-left" @submit.prevent="submitForm">
        <p><span class="plus">+</span> Profile infos</p>
        <div>
          <input
            type="text"
            class="form-control"
            v-model="username"
            placeholder="How should we call you ?"
            required
          />
        </div>
        <div>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Pick your email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            class="form-control"
            minlength="5"
            v-model="password"
            placeholder="Choose a password"
            required
          />
        </div>
        <div>
          <input
            type="password"
            class="form-control"
            minlength="5"
            v-model="passwordConfirm"
            placeholder="Confirm your password"
            required
          />
        </div>
        <p><span class="plus">+</span> Your birthdate</p>
        <div class="row mx-1">
          <input
            type="date"
            class="form-control col-4"
            v-model="birthdate"
            placeholder="JJ-MM-AAAA"
            required
          />
          <span class="validity"></span>
          <!-- <input
            type="number"
            class="form-control col-2"
            v-model="days"
            placeholder="JJ"
            length="2"
          />
          <input
            type="number"
            class="form-control col-2"
            v-model="months"
            placeholder="MM"
            length="2"
          />
          <input
            type="number"
            class="form-control col-2"
            v-model="years"
            placeholder="AAAA"
            length="4"
          /> -->
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" v-model="termsAndConditions" /> I accept the
            <a href="/">Terms and Conditions</a> of FindYourGame Ltd, and
            certify i'm at least 13 years old.
          </label>
        </div>
        <div class="text-center">
          <button class="w-25 btn btn-lg btn-primary" type="submit">
            LET'S GO
          </button>
        </div>
      </form>
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import apiLaravel from "@/common/api-back";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      birthdate: "",
      // days: "",
      // months: "",
      // years: "",
      termsAndConditions: false,
      errorTerm: "",
      errorPassword: "",
      errorBirth: "",
    };
  },
  computed: {
    ...mapState("users", {
      users: (state) => state.users,
    }),
  },
  methods: {
    ...mapActions({
      register_user: "authentification/REGISTER_USER",
    }),
    submitForm() {
      var submitform = true;
      // ajouter condition sur username unique
      // ajouter condition sur email unique

      // vérification terms and conditions
      if (this.termsAndConditions == false) {
        this.errorTerm =
          "You have to accept the Terms and Conditions of FindYourGame Ltd, and certify that you are at least 13 years old.";
        submitform = false;
      } else {
        this.errorterm = "";
      }
      // vérification mdp & confirmation
      if (this.password != this.passwordConfirm) {
        this.errorPassword =
          "The password and the password confirmation are differents.";
        submitform = false;
      } else {
        this.errorPassword = "";
      }
      // calcul age
      let today = new Date();
      let birthdate = this.birthdate.split("-");
      if (
        today.getFullYear() - birthdate[0] > 13 ||
        (today.getFullYear() - birthdate[0] == 13 &&
          (today.getMonth() + 1 - birthdate[1] > 0 ||
            (today.getMonth() + 1 - birthdate[1] == 0 &&
              today.getDate() - birthdate[2] >= 0)))
      ) {
        this.errorBirth = "";
      } else {
        this.errorBirth = "You have to be at least 13 years old.";
        submitform = false;
      }

      // ajouter date of birth ?
      if (submitform) {
        apiLaravel;
        this.register_user({
          name: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirm,
          // birthdate: this.birthdate,
        });
      }
    },
    signUp(body) {
      apiLaravel
        .post("/register/", body)
        .then((response) => {
          if (response.status == 201) {
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            let profil = JSON.stringify(response.data.data);
            let message = JSON.stringify(response.data.message);
            console.log(profil);
            console.log(message);
            document.cookie = `profil=${profil};${expires};path=/;secure`;
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
        // .catch((error) => {
        //   this.$store.commit("ERROR", error.message);
        // });
        .catch((error) => console.log(JSON.stringify(error.message)));
    },
  },
  // mounted() {
  //   this.register_user();
  // }
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
</style>