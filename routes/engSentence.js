const router = require('koa-router')();

import engSentence from '../controllers/engSentence'

router.prefix('/engSentence')

router.post('/addSentence', engSentence.addSentence)
// router.post('/deleteSentence', sentenceControl.deleteSentence)
router.post('/findAllSentence', engSentence.findAllSentence)

export default router