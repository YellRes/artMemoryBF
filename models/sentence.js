import mongoose from 'mongoose'

const sentenceSchema = mongoose.Schema({
  sentenceId: String,
  sentenceConent: String,
  sentenceToChinese: String,
  songId: String,
  singerId: String,
  songName: String,
  singerName: String
}, {collection: "Sentence"})

const sentence = mongoose.model('Sentence', sentenceSchema)
export default sentence