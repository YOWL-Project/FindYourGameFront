import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/Signup.vue";
import Game from "../views/Game.vue";
import Games from "../views/Games.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/bar',
    name: 'Bar',
    component: () => import('../views/DashBoard/Bar.vue'),
  },
  {
    path: '/line',
    name: 'Line',
    component: () => import('../views/DashBoard/Line.vue'),
  },
  {
    path: '/pie',
    name: 'Pie',
    component: () => import('../views/DashBoard/Pie.vue'),
  },
  {
    path: '/visit',
    name: 'Visit',
    component: () => import('../views/DashBoard/Visit.vue'),
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/DashBoard/Sign.vue'),
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('../views/DashBoard/Rate.vue'),
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../views/DashBoard/DashBoard.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
