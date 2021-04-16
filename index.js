const path = require("path");
const Koa = require("koa");
const KoaStaticMiddleware = require("koa-static");

// 静态资源
new Koa()
    .use(KoaStaticMiddleware(path.resolve(__dirname, "docs")))
    .use(async (ctx) => { ctx.body = "static file server"; })
    .listen(3000, () => { console.log("build success"); });
