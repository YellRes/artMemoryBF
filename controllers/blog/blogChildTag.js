import blogChildTag from '../../models/blog/blogChildTag'
import utils from '../utils/index'

const {responseUtil} = utils

const addBlogChildTag  = async (ctx, next) => {
  const {_id, blogTagId} = ctx.request.body
  const data = ctx.request.body

  if (!blogTagId) return responseUtil(ctx, '1002', 'blogTagId为必传')

  try {
    if (!_id) {
      await blogChildTag.create(data)
    } else {
      await blogChildTag.update(
        {_id},
        data
      )
    }

    responseUtil(ctx, '1000', '操作成功')
  } catch (e) {
    responseUtil(ctx, '1001', '操作失败')
  }

  next()
}

const deleteBlogChildTag = async (ctx, next) => {

  const {_id} = ctx.request.body
  console.log(ctx.request.body);

  try {
    await blogChildTag.deleteOne({
      _id
    })
    responseUtil(ctx, '1000', '操作成功')
  } catch (e) {
    responseUtil(ctx, '1001', '操作失败')
  }

  next()
}

const findBlogChildTag = async (ctx, next) => {

  const {_id, blogTagId, blogTagName} = ctx.request.body

  try {
    let data
    if (!_id && !blogTagName && !blogTagId) {
      data = await blogChildTag.find()
    } else {
      data = await blogChildTag.find(
        {
          $or: [
            {_id},
            {blogTagId},
            {blogTagName},
          ]
        }
      )
    }

    responseUtil(ctx, '1000', '操作成功', {
      data
    })

  } catch (e) { 
    responseUtil(ctx, '1001', '操作失败', {
      data: []
    })
  }

  next()
}


export {
  addBlogChildTag,
  deleteBlogChildTag,
  findBlogChildTag,
}
