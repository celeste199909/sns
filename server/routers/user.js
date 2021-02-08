const KoaRouter = require("koa-router")
const jwt = require("jsonwebtoken")

const userRouter = new KoaRouter()

const userController = require("../controller/user")
// console.log();

// console.log(user);

userRouter.get("/", (ctx) => {
  ctx.body = "home"
})
// 登录
userRouter.post("/login", async (ctx) => {
  let { username, password } = ctx.request.body.loginForm
  let user = await userController.getAUser(username)
  // 生成token
  let token = jwt.sign({ name: username }, "secret")
  if (password === user[0].password) {
    ctx.body = {
      code: 1,
      message: "登录成功",
      token
    }
  } else {
    ctx.body = {
      code: 0,
      message: "登录失败，用户名或者密码错误"
    }
  }
})
// 注册
userRouter.post("/register", async (ctx) => {
  let registerForm = ctx.request.body.registerForm
  let { username, password } = registerForm
  // 用户名是否已存在
  let aUser = await userController.getAUser(username)
  console.log(aUser.length === 0);
  if (aUser.length !== 0) {
    ctx.body = {
      code: 0,
      message: "注册失败，用户名已存在"
    }
    return
  }
  // 注册成功
  let addIsSuccess = await userController.addUser(registerForm)
  if (addIsSuccess) {
    ctx.body = {
      code: 1,
      message: "注册成功"
    }
    return
  }
})
// 验证token
// router.post("/verify-token", a)
module.exports = userRouter