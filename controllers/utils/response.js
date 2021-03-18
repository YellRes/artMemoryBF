
const responseUtil = (ctx, code, message, body) => {
  ctx.response.body = {
    header: {code, message},
    body
  }
}



export default responseUtil