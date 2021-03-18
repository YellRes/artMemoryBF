import mongoose from 'mongoose'

const blogChildTagSchema = mongoose.Schema({
    tagName: String,
    blogTagId: String,
}, {collection: 'BlogChildTag'})

const blogChildTag = mongoose.model('BlogChildTag', blogChildTagSchema) 

export default blogChildTag