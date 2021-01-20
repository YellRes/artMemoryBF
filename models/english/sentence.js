import mongoose from 'mongoose'

const engSentenceSchema = mongoose.Schema({
  sentenceId: String,
  sentence: String,
  translation: String,
}, {collection: 'EngSentence'})

export default engSentenceSchema