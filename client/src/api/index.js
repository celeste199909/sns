import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3001';

// axios.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem("token")
//     console.log(config);
//     if (token) {
//       config.headers.common["Authorization"] = "Bearer " + token
//       return config
//     }
//   },
//   err => {
//     return Promise.reject(err);
//   }
// )


// 登录
function login (loginForm) {
  axios.post("/login", {
    loginForm: loginForm
  })
    .then(res => {
      console.log(res.data);
      let { code, message, token } = res.data
      localStorage.setItem("token", token)
    })
    .catch(err => {
      // console.log(err)
      console.log(222);
    })
}
// 退出登录
function logout () {
  localStorage.removeItem("token")
}
// 注册
function register (registerForm) {
  axios.post("/register", {
    registerForm: registerForm
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      // console.log(err)
      console.log(222);
    })
}
// 验证token
function verifyToken (token) {
  axios.post("/verify-token", { token })
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err);
    })
}

export {
  login, register, verifyToken
}
