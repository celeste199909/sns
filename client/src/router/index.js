import { createRouter, createWebHistory } from "vue-router"
// import { verifyToken } from "../api/index.js"

const Home = () => import("../views/home/index.vue")
const Discovery = () => import("../views/discovery/index.vue")
const Notification = () => import("../views/notification/index.vue")
const Me = () => import("../views/me/index.vue")

const LogReg = () => import("../views/log-reg/index.vue")
const Login = () => import("../views/log-reg/Login.vue")
const Register = () => import("../views/log-reg/Register.vue")

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
    path: "/log-reg",
    component: LogReg,
    redirect: { name: "Login" },
    children: [
      {
        path: 'login',
        name: "Login",
        component: Login
      },
      {
        path: 'register',
        name: "Register",
        component: Register
      },
    ]
  },

]

const router = createRouter({
  // '/folder/'
  history: createWebHistory(),
  routes: routes,
});
// 路由守卫
// router.beforeEach((to, from, next) => {
//   let needLogin = to.matched[0].meta.login
//   if (needLogin) {
//     let token = localStorage.getItem("token")
//     let tokenIsLegal = verifyToken(token)
//     // token && console.log("需要登录，已登录")
//     if (!tokenIsLegal) {
//       router.push({ path: "/log-reg/login" })
//     }
//     next()
//   } else {
//     // router.push({ path: "/log-reg/login" })
//     next()
//   }
//   // ...
//   // explicitly return false to cancel the navigation
//   // return false
// })


export default router
