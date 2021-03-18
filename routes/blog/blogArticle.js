const router = require('koa-router')()
import * as blogArticle from '../../controllers/blog/blogArticle'

router.prefix('/blogArticle')

router.post('/addBlogArticle', blogArticle.addBlogArticle)
router.post('/deleteBlogArticle', blogArticle.deleteBlogArticle)
router.post('/findBlogArticle', blogArticle.findBlogArticle)

export default router



