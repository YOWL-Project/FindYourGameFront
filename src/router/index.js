import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/Signup.vue";
import Game from "../views/Game.vue";
import Games from "../views/Games.vue";
import Topics from "../views/Topics.vue";
import Topic from "../views/Topic.vue"
import Logout from "../views/Logout.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/subscribe",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/game/:id",
    name: "Game",
    component: Game,
  },
  {
    path: "/games/:sortBy/:category/:platform",
    name: "GamesParams",
    component: Games,
  },
  {
    path: "/games/",
    name: "Games",
    component: Games,
  },
  {
    path: "/topics/",
    name: "Topics",
    component: Topics,
  },
  {
    path: "/topic/:id",
    name: "Topic",
    component: Topic,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
