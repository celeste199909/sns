import { createRouter, createWebHistory } from "vue-router";

import Concern from "../views/concern/index.vue"
import Discovery from "../views/discovery/index.vue"
import Notification from "../views/notification/index.vue"
import Me from "../views/me/index.vue"

const routes = [
  { path: '/', component: Concern },
  { path: '/discovery', component: Discovery },
  { path: '/notification', component: Notification },
  { path: '/me', component: Me },
]

export default createRouter({
  history: createWebHistory('/folder/'),
  routes: routes,
});
