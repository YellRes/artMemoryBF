import mongoose from 'mongoose'

const singerSchema = mongoose.Schema({
  singerId: String,
  singerName: String,
  singerDescription: String,
  singerImg: String,
}, {collection: 'Singer'})

const singer = mongoose.model('Singer', singerSchema)
export default singer