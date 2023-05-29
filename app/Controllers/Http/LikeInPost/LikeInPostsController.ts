import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LikeInPostValidator from './LikeInPostValidator'
import LikeInPostService from './LikeInPostService'

export default class LikeInPostsController {
    private likeInPostValidator: LikeInPostValidator;
    private likeInPostService: LikeInPostService;
  
  
    constructor() {
      this.likeInPostValidator = new LikeInPostValidator();
      this.likeInPostService = new LikeInPostService();
    }
    async store(ctx: HttpContextContract) {
        try {
          let validatedData = await this.likeInPostValidator.validateLikeInPostSchema(ctx);
          if(ctx.request.all().unlike === 1) {
            return this.likeInPostService.deletePost(validatedData, ctx);
          }
          else return this.likeInPostService.createPost(validatedData, ctx);
        } catch (error) {
          return ctx.response.status(422).send(error.messages);
        }
    }
}
