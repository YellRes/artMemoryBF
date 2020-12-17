import Koa from 'koa'
import koaBody from 'koa-body'
import start from './models/db'
import singer from './routes/singer'
import song from './routes/song'

const app = new Koa()

// 设置跨域 
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});

app.use(koaBody({multipart: true}))
app.use(singer.routes())
app.use(song.routes())

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3002, () => {
  console.log('server is on http://localhost:3002')
})

// 连接数据库
start()
export default app