const router = require('koa-router')()

import * as blogTag from '../../controllers/blog/blogTag'


router.prefix('/blogTag')

router.post('/addBlogTag', blogTag.addBlogTag)
router.post('/deleteBlogTag', blogTag.deleteBlogTag)
router.post('/findBlogTag', blogTag.findBlogTag)

export default router

