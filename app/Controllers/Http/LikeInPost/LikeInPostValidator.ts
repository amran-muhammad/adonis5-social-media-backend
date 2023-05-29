import { schema,rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class LikeInPostValidator{
    public async validateLikeInPostSchema(ctx : HttpContextContract){
      const likeInPostSchema = schema.create({
        user_id: schema.number(),
        post_id: schema.number(),
      })
      const msg =  {
        'user_id.required': 'User id is required',
        'user_id.number': 'User must be a number',
        'post_id.required': 'Post id is required',
        'post_id.number': 'Post must be a number',
      }
      return await ctx.request.validate({ schema: likeInPostSchema, messages : msg })

    }
 

}
