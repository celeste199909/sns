import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/index.vue"
import Discovery from "../views/discovery/index.vue"
import Notification from "../views/notification/index.vue"
import Me from "../views/me/index.vue"

const routes = [
  { path: '/', component: Home, redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/discovery', component: Discovery },
  { path: '/notification', component: Notification },
  { path: '/me', component: Me },
]

export default createRouter({
  // '/folder/'
  history: createWebHistory(),
  routes: routes,
});
