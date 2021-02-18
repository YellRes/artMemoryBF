const router = require('koa-router')();

import * as engSentence from '../controllers/engSentence'

router.prefix('/engSentence')

router.post('/addSentence', engSentence.addSentence)
// router.post('/deleteSentence', sentenceControl.deleteSentence)
router.post('/findAllSentence', engSentence.findAllSentence)
router.post('/deleteSentence', engSentence.deleteSentence)
router.post('/deleteSentences', engSentence.deleteSentences)
router.post('/findSentenceBySth', engSentence.findSentenceBySth)

export default router