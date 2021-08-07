<template>
  <div class="container">
    <div class="d-flex flex-column align-self-center">
      <form>
        <img
          class="m-4"
          src="../assets/Logo.svg"
          alt=""
          width="172"
          height="157"
        />
        <h1>WELCOME BACK</h1>

        <div>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div style="position: relative;">
          <input
            :type="type"
            class="form-control"
            id="password"
            placeholder="Password"
          />
          <img class="visibility" src="../assets/visibility_black_24dp.svg" alt="" v-if="displaypassword == false" @click="type = 'text', displaypassword = true">
          <img class="visibility" src="../assets/visibility_off_black_24dp.svg" alt=""  v-if="displaypassword == true" @click="type = 'password', displaypassword = false">
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-25 btn btn-lg btn-primary" type="submit">
          LET'S GO
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      displaypassword: false,
      type: 'password',
    };
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