import Koa from 'koa'
import koaBody from 'koa-body'
import start from './models/db'
import singer from './routes/singer'

const app = new Koa()

app.use(koaBody({multipart: true}))
app.use(singer.routes())

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3002, () => {
  console.log('server is on http://localhost:3002')
})

// 连接数据库
start()
export default app