import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LikeInCommentValidator from './LikeInCommentValidator'
import LikeInCommentService from './LikeInCommentService'

export default class LikeInCommentsController {
    private likeInCommentValidator: LikeInCommentValidator;
    private likeInCommentService: LikeInCommentService;
  
  
    constructor() {
      this.likeInCommentValidator = new LikeInCommentValidator();
      this.likeInCommentService = new LikeInCommentService();
    }
    async store(ctx: HttpContextContract) {
        try {
          let validatedData = await this.likeInCommentValidator.validateLikeInCommentSchema(ctx);
          if(ctx.request.all().unlike === 1) {
            return this.likeInCommentService.deleteLikeInComment(validatedData, ctx);
          }
          else return this.likeInCommentService.createLikeInComment(validatedData, ctx);
        } catch (error) {
          return ctx.response.status(422).send(error.messages);
        }
    }
}
