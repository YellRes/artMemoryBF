import blogArticle from '../../models/blog/blogArticle'
import responseUtils from '../utils/index'

const {responseUtil} = responseUtils 
// add && modify
// 1. add (无_id)
// 2. modify(有_id)
const addBlogArticle = async (ctx, next) => {
  const {_id} = ctx.request.body
  const data = ctx.request.body

  try {
    if (!_id) {
      await blogArticle.create(data)
    } else {
      await blogArticle.update(
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

// delete
// 1. 单个id  删除一条
// 2. id数组  删除多条
const deleteBlogArticle = async (ctx, next) => {
  const {_id} = ctx.request.body
  console.log(ctx.request.body);

  try {
    await blogArticle.deleteOne({
      _id
    })
    responseUtil(ctx, '1000', '操作成功')
  } catch (e) {
    responseUtil(ctx, '1001', '操作失败')
  }

  next()
}

// find 
// 1. 不传参数  查询所有
// 2. 有参数
// 2.1 单个参数 
// 2.1.1 tagId
// 2.1.2 tagName
const findBlogArticle = async (ctx, next) => {

  const {_id, content} = ctx.request.body

  try {
    let data
    if (!_id && !content) {
      data = await blogArticle.find()
    } else {
      data = await blogArticle.find(
        {
          $or: [
            {"_id": _id},
            {"content": content},
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
  addBlogArticle,
  deleteBlogArticle,
  findBlogArticle
}




