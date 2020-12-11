import mongoose from 'mongoose'

function startDb() {
  mongoose.connect('mongodb://localhost/artMemory', {useNewUrlParser: true})
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('mongodb 连接成功！！')
  })
}

export default startDb