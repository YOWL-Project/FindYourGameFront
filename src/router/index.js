import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
