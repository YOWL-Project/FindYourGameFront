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
        <div>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
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