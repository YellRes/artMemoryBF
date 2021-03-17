import mongoose from 'mongoose'


const blogArticleSchema = mongoose.Schema({
    content: String, 
    title: String,
    createdDate: Date,
    tagId: String,
    childTag: Array
}, {collection: 'BlogArticle'})

const blogArticle = mongoose.model('BlogArticle', blogArticleSchema) 

export default blogArticle

