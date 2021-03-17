import mongoose from 'mongoose'

const blogTagSchema = mongoose.Schema({
    tagName: String
}, {collection: 'BlogTag'})

const blogTag = mongoose.model('BlogTag', blogTagSchema) 

export default blogTag