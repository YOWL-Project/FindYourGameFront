<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/bar">Game cat</router-link> |
      <router-link to="/line">Total visits</router-link> |
      <router-link to="/pie">Top Five</router-link> |
      <router-link to="/visit">Visits by day</router-link> |
      <router-link to="/sign">Sign up</router-link> |
      <router-link to="/rate">Activity</router-link> |
      <router-link to="/dashboard">DashBoard</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/assets/scss/vendors/bootstrap-vue/index';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
