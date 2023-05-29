
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CommentInPostQuery from "./CommentInPostQuery";

export default class CommentInPostService {
    private commentInPostQuery: CommentInPostQuery;
    constructor() {
        this.commentInPostQuery = new CommentInPostQuery();
    }
    public async createPost(postData, ctx) {
        let data = await this.commentInPostQuery.createPost(postData);
        return ctx.response
            .status(200)
            .send({ data, msg: "Comment successfully!" });
    }
    
    public async deleteComment(ctx :HttpContextContract) : Promise<any>{
        let data = ctx.request.all()
        let del = await this.commentInPostQuery.deleteComment('id',data.id)
        return ctx.response
            .status(200)
            .send({ del: del[0], msg: "Comment deleted successfully!" });
      }

      public async updateComment(postData, ctx) {
        ctx.request.all().id = postData.id
        ctx.request.all().comment = postData.comment
        let post = await this.commentInPostQuery.updateComment(ctx);
      
        return ctx.response
            .status(200)
            .send({ post, msg: "Comment updated successfully!" });
    }
}
