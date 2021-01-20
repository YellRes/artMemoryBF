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


