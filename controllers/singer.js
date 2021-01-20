import singer from '../models/singer'

// 增加singer
const addSinger = async (ctx, next) => {
  const data = ctx.request.body
  const {singerId} = data
  let result = null

  if (!singerId) {
    result = await singer.create(data)
  } else {
    result = await singer.update(
      { _id: singerId },
      data
    )  
  }

  console.log(result);
  if (result) {
    info(ctx, '1000', '创建成功')
  } else {
    info(ctx, '1001', '创建失败')
  }
  next()
}

// 删除singer
const deleteSinger = async  (ctx, next) => {
  const singerId = ctx.request.body

  const result = await singer.deleteOne(singerId)

  if (result) {
    info(ctx, '1000', '删除成功')
  } else {
    info(ctx, '1001', '删除失败')
  }

  next()

}


// 获取singer
// 1. 名字
// 不传即为获取全部
// singerId 来获取
// singerName 来获取
const getSinger = async (ctx, next) => {
  const {singerName, singerId} = ctx.request.body || ''

  let result = null
  
  if (singerId || singerName) {
    result = await singer.find(
      {"$or": 
        [ 
          {"_id": singerId}, 
          {"singerName": {"$in": [singerName]}}
        ]
      }
    )
  } else {
    result = await singer.find()
  }

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



const info = (ctx, code, message, body) => {
  ctx.response.body = {
    header: {code, message},
    body
  }
}

export default {
  addSinger,
  deleteSinger,
  getSinger
}
