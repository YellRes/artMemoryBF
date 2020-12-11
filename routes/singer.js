const router = require('koa-router')();

import singerControl from '../controllers/singer'

router.prefix('/singer')

router.post('/addSinger', singerControl.addSinger)
router.post('/deleteSinger', singerControl.deleteSinger)
router.post('/getSinger', singerControl.getSinger)

export default router