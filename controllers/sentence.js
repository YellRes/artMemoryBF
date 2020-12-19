import sentence from '../models/sentence'
import {info} from '../utils/info'

// 1-1 singerId songId 要有 
// 1-2 sentenceId 有则更新 无则新建
const addSentence = async (ctx, next) => {
  const data = ctx.request.body
  const {singerId, songId, sentenceId} = data
  const isCanAdd = isCanAddSentence({singerId, songId})

  // 不可以添加
  !isCanAdd && !singerId && songId && info(ctx, '1001', '添加失败, 需要singerId')
  !isCanAdd && singerId && !songId && info(ctx, '1001', '添加失败, 需要songId')
  !isCanAdd && !singerId && !songId && info(ctx, '1001', '添加失败, 需要songId, singerId')

  // 可以添加
  if (isCanAdd) {
    sentenceId && await sentence.create(data)
    !sentenceId && await sentence.update({
      _id: sentenceId,
      data
    })
    info(ctx, '1000', '创建成功')
  }

  next()
}

// addSentence 1
const isCanAddSentence = ({singerId = '', songId = ''}) => {
   return !(singerId === '' || songId === '') 
}

// 2
// 2-1 根据 sentenceId, songId, singerId, sentenceContent, songName, singerName 查询
const getSentence = (ctx, next) => {
  const data = ctx.request.body
  const {
    sentenceId, songId, singerId,
    sentenceContent, songName, singerName
  } = data

  let result = sentence.find({
    "$or": [
      {_id: sentenceId},
      {songId},
      {singerId},
      {"songName": {"$in": [songName]}},
      {"sentenceContent": {"$in": [sentenceContent]}},
      {"singerName": {"$in": [singerName]}}
    ]
  })

  info(ctx, '1000', '查询成功', result)
  next()
}


// 3 删除
const deleteSentence = (ctx, next) => {
  const data = ctx.request.body
  const {sentenceId} = data

  !sentenceId && info(ctx, '1001', 'sentenceId 不能为空')
  sentenceId && await sentence.deleteOne({
    _id: sentenceId
  })

  info(ctx, '1000', '删除成功')
  next()
}


export default {
  addSentence,
  getSentence,
  deleteSentence
}
