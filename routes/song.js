const router = require('koa-router')();

import songControl from '../controllers/song'

router.prefix('/song')

router.post('/addSong', songControl.addSong)
router.post('/deleteSong', songControl.deleteSong)
router.post('/getSong', songControl.getSong)

export default router