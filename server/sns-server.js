const Koa = require("koa")
const userRouter = require("./routers/user")
const bodyParser = require('koa-bodyparser')
// jwt
const koaJwt = require("koa-jwt")

const app = new Koa()
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
// app.use(koaJwt({
//   secret: 'secret'
// }).unless({
//   // \/user
//   path: [/\/login/, /\/register/]
// }));

app.use(userRouter.routes())

app.listen(3001, () => {
  console.log("http://localhost:3001")
})