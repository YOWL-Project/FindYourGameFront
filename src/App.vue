<template>
  <div id="app">
    <NavMobile />
    <div class="content" :class="{ open: showNav }">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView">
          <img
            src="./assets/toggle.svg"
            alt="Menu Burger"
            width="30"
            height="30"
            @click="showNav = !showNav"
          />
        </div>
        <Navbar v-if="!mobileView" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
import NavMobile from "@/components/NavMobile.vue";

export default {
  components: {
    Navbar,
    NavMobile,
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  computed: {
    // ...mapState("authentification", {
    //   user: (state) => state.user,
    // }),
    // ...mapGetters({
    //   user: "authentification/GET_USER",
    // }),
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    if (document.cookie.split("profil=")[1]) {
      console.log('ok cookie')
      this.$store.state.user = JSON.parse(document.cookie.split("profil=")[1]);
      // console.log(this.user.username);
    } else {
      console.log('no cookie')
    }
  },

  // mounted() {
  // },
};

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
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

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
  text-align: left;
}

.plus {
  font-size: 1.3em;
  font-weight: 700;
  background: linear-gradient(0.25turn, #00ffff, #ff005c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.top-bar {
  display: flex;
  width: 100%;
}

#navigation-icon {
  padding: 10px 25px 20px;
  margin-right: 10px;
  cursor: pointer;
}

.content {
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
  z-index: 1;
}

.open {
  transform: translateX(300px);
}
</style>
