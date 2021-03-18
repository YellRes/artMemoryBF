import mongoose from 'mongoose'

const blogTagSchema = mongoose.Schema({
    blogTagName: String
}, {collection: 'BlogTag'})

const blogTag = mongoose.model('BlogTag', blogTagSchema) 

export default blogTag