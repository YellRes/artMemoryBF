import mongoose from 'mongoose'

const songSchema = mongoose.Schema({
  songId: String,
  songName: String,
  songDescription: String,
  singerId: String,
  songImg: String
}, {collection: 'Song'})

const song = mongoose.model('Song', songSchema)
export default song