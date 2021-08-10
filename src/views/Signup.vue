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
      <!-- <button @click="submitForm()">OK</button> -->
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      birthdate: "",
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
        this.register_user({
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirm,
          birthdate: this.birthdate,
        });
      }

      // this.register_user({
      //   username: "manon123",
      //   email: "manon123@manon",
      //   password: "manon95",
      //   password_confirmation: "manon95",
      //   birthdate: "1995-07-20",
      // });
    },
  },
  mounted() {
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
</style>