import { schema,rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class LikeInPostValidator{
    public async validateLikeInCommentSchema(ctx : HttpContextContract){
      const likeInPostSchema = schema.create({
        user_id: schema.number(),
        comment_in_post_id: schema.number(),
      })
      const msg =  {
        'user_id.required': 'User id is required',
        'user_id.number': 'User must be a number',
        'comment_in_post_id.required': 'Comment in post id is required',
        'comment_in_post_id.number': 'Comment in post id must be a number',
      }
      return await ctx.request.validate({ schema: likeInPostSchema, messages : msg })

    }
 

}
