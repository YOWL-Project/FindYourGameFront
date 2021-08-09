<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">DashBoard</router-link> |
      <router-link to="/games">Games</router-link> | 
      <router-link to="/login">Log in</router-link> | 
      <router-link to="/subscribe">Sign up</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// (function() {
//     var cors_api_host = 'localhost:8081';
//     var cors_api_url = 'https://' + cors_api_host + '/';
//     var slice = [].slice;
//     var origin = window.location.protocol + '//' + window.location.host;
//     var open = XMLHttpRequest.prototype.open;
//     XMLHttpRequest.prototype.open = function() {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//             targetOrigin[1] !== cors_api_host) {
//             args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//     };
// })();
</script>

<style lang="scss">
@import '~@/assets/scss/vendors/bootstrap-vue/index';

body {
  background-color: #333333;
}

/*
@font-face {
  font-family: "MachineGunk";
  src: url("src/assets/fonts/MachineGunk.ttf") format("truetype");
}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.plus {
  font-size: 1.3em;
  font-weight: 700;
  background: linear-gradient(0.25turn, #00ffff, #ff005c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/*
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #7fa9d3;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
