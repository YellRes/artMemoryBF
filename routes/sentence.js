const router = require('koa-router')();

import sentenceControl from '../controllers/sentence'

router.prefix('/sentence')

router.post('/addSentence', sentenceControl.addSentence)
router.post('/deleteSentence', sentenceControl.deleteSentence)
router.post('/getSentence', sentenceControl.getSentence)

export default router