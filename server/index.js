const Koa = require("koa")
const KoaRouter = require("koa-router")
const bodyParser = require('koa-bodyparser')
// jwt
const jwt = require("jsonwebtoken")
const koaJwt = require("koa-jwt")

const app = new Koa()
const router = new KoaRouter()
app.use(bodyParser())

// 允许跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
})
// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  })
})
// 验证token
app.use(koaJwt({
  secret: 'secret'
}).unless({
  // \/user
  path: [/\/login/]
}));

router.get("/", (ctx) => {
  ctx.body = "home"
})

router.post("/login", (ctx) => {
  let { username, password } = ctx.request.body.loginForm
  console.log(username, password);
  // 生成token
  let token = jwt.sign({ name: username }, "secret")
  if (username === "1" && password === "1") {
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

app.use(router.routes())

app.listen(3001, () => {
  console.log("http://localhost:3001")
})