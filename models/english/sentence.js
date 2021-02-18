import mongoose from 'mongoose'

const engSentenceSchema = mongoose.Schema({
  sentenceId: String,
  sentence: String,
  translation: String,
  createTime: Date,
}, {collection: 'EngSentence'})

const engSentence = mongoose.model('EngSentence', engSentenceSchema)

export default engSentence