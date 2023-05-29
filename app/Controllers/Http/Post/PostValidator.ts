import { schema,rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class PostValidator{
    public async validatePostSchema(ctx : HttpContextContract){
      const postSchema = schema.create({
        content: schema.string({trim: true}),
        user_id: schema.number(),
      })
      const msg =  {
        'content.required': 'Content is required',
        'content.content': 'Content validation failed',
        'user_id.required': 'User id is required',
        'user_id.number': 'User must be a number'
      }
      return await ctx.request.validate({ schema: postSchema, messages : msg })

    }
    public async validateEditPostSchema(ctx : HttpContextContract){
      const postSchema = schema.create({
        id: schema.number(),
        content: schema.string({trim: true})
      })
      const msg =  {
        'id.required': 'id is required',
        'id.number': 'id must be a number',
        'content.required': 'Content is required',
        'content.content': 'Content validation failed'
      }
      return await ctx.request.validate({ schema: postSchema, messages : msg })

    }
 

}
