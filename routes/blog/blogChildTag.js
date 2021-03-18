const router = require('koa-router')()

import * as blogChildTag from '../../controllers/blog/blogChildTag'


router.prefix('/blogChildTag')

router.post('/addBlogTag', blogChildTag.addBlogChildTag)
router.post('/deleteBlogTag', blogChildTag.deleteBlogChildTag)
router.post('/findBlogTag', blogChildTag.findBlogChildTag)

export default router

