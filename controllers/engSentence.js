import engSentence from '../models/english/sentence'

const info = (ctx, code, message, body) => {
  ctx.response.body = {
    header: {code, message},
    body
  }
} 

export const addSentence = async (ctx, next) => {
  const data = ctx.request.body
  const {sentenceId} = data
  let result = null

  if (!sentenceId) {
    result = await engSentence.create(data)
  } else {
    result = await engSentence.update(
      { _id: sentenceId },
      data
    )  
  }

  if (result) {
    info(ctx, '1000', '创建成功')
  } else {
    info(ctx, '1001', '创建失败')
  }

  next()
}

export const findAllSentence = async (ctx, next) => {
  let result = await engSentence.find()

  if (result) {
    info(ctx, '1000', '操作成功', {
      data: result
    })
  } else {
    info(ctx, '1001', '操作失败', {
      data: []
    })
  }

  next()
}

export const findSentenceBySth = async (ctx, next) => {
  const data = ctx.request.body
  const {startTime, endTime} = data

  try {
    let data = await engSentence.find(
      {
        "createTime": {$gte:new Date(startTime)},
        "createTime": {$lte:new Date(endTime)}
      }
    )
    info(ctx, '1000', '操作成功', {data})
  } catch (e) {
    info(ctx, '1001', '操作失败')
  }
  
}

export const deleteSentence = async (ctx, next) => {

  const data = ctx.request.body
  const {sentenceId} = data

  let result = await engSentence.deleteOne({
    _id: sentenceId
  })

  if (result) {
    info(ctx, '1000', '操作成功')
  } else {
    info(ctx, '1001', '操作失败')
  }

  next()
}

export const deleteSentences = async (ctx, next) => {

  const {sentenceArr} = ctx.request.body || {}

  try {
    await engSentence
      .deleteMany({
        _id: {
          $in: sentenceArr
        }
      })
      
    info(ctx, '1000', '操作成功')
  } catch (e) {
    console.log(e);
    info(ctx, '1001', '操作失败')
  }
  
}


