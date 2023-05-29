import { schema,rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class CommentInPostValidator{
    public async validateCommentInPostSchema(ctx : HttpContextContract){
      const commentInPostSchema = schema.create({
        comment: schema.string({trim: true}),
        user_id: schema.number(),
        post_id: schema.number(),
      })
      const msg =  {
        'comment.required': 'Comment is required',
        'comment.comment': 'Comment validation failed',
        'user_id.required': 'User id is required',
        'user_id.number': 'User must be a number',
        'post_id.required': 'Post id is required',
        'post_id.number': 'Post must be a number',
      }
      return await ctx.request.validate({ schema: commentInPostSchema, messages : msg })

    }

    public async validateEditCommentSchema(ctx : HttpContextContract){
      const postSchema = schema.create({
        id: schema.number(),
        comment: schema.string({trim: true})
      })
      const msg =  {
        'id.required': 'id is required',
        'id.number': 'id must be a number',
        'comment.required': 'Comment is required',
        'comment.comment': 'Comment validation failed'
      }
      return await ctx.request.validate({ schema: postSchema, messages : msg })

    }
 

}
