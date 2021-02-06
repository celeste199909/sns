import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/home/index.vue")
const Discovery = () => import("../views/discovery/index.vue")
const Notification = () => import("../views/notification/index.vue")
const Me = () => import("../views/me/index.vue")
const Login = () => import("../views/login/index.vue")

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home, redirect: '/home'
  },
  {
    path: '/home',
    name: "Home",
    component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/discovery',
    name: "Discovery",
    component: Discovery
  },
  {
    path: '/notification',
    name: "Notification",
    component: Notification,
    meta: {
      login: true
    }
  },
  {
    path: '/me',
    name: "Me",
    component: Me,
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
]

export default createRouter({
  // '/folder/'
  history: createWebHistory(),
  routes: routes,
});
