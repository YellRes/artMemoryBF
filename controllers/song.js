import song from '../models/song'

// 增加歌曲
// 带有id 为编辑 
// 没有id 新建
const addSong = async (ctx, next) => {
    const data = ctx.request.body
    const { songId } = data 
    let result 

    if (!songId) {
        result = await song.create(data)
    } else {
        result = await song.update(
            { _id: songId },
            data
        )
    }

    let code = result ? '1000' : '1001'
    let msg = result ? '更新成功' : '更新失败'
    info(ctx, code, msg)
    next()

}

// 查找歌曲
// songName 来获取
// songId 来获取
const getSong = async (ctx, next) => {
    const {songId} = ctx.request.body

    let result = await song.find({
        "$or": [
            {"_id": songId},
            {"songName": {"$in": [songName]}},
        ]
    })
    let code = result ? '1000' : '1001'

    info(ctx, code, '查询成功', {
        data: result
    })
    next()

}

// 删除歌曲
const deleteSong = async (ctx, next) => {
    const {songId} = ctx.request.body

    let result = await song.deleteOne({id: songId})

    info(ctx, '1000', '删除成功')
    next()

}


const info = (ctx, code, message, body) => {
    ctx.response.body = {
      header: {code, message},
      body
    }
  }

export default {
    addSong,
    getSong,
    deleteSong
}