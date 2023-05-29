import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CommentInPostValidator from "./CommentInPostValidator";
import CommentInPostService from "./CommentInPostService";

export default class CommentInPostsController {
  private commentInPostValidator: CommentInPostValidator;
  private commentInPostService: CommentInPostService;

  constructor() {
    this.commentInPostValidator = new CommentInPostValidator();
    this.commentInPostService = new CommentInPostService();
  }
  async store(ctx: HttpContextContract) {
    try {
      let validatedData =
        await this.commentInPostValidator.validateCommentInPostSchema(ctx);
      return this.commentInPostService.createPost(validatedData, ctx);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

  public async deleteComment(ctx: HttpContextContract) {
    return this.commentInPostService.deleteComment(ctx);
  }

  public async updateComment(ctx: HttpContextContract) {
    try {
      let validatedData = await this.commentInPostValidator.validateEditCommentSchema(ctx);

      return this.commentInPostService.updateComment(validatedData, ctx);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }
}
