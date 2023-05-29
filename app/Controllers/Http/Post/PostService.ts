import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostQuery from "./PostQuery";

export default class PostService {
    private postQuery: PostQuery;
    constructor() {
        this.postQuery = new PostQuery();
    }
    public async createPost(postData, ctx) {
        let post = await this.postQuery.createPost(postData);
      
        return ctx.response
            .status(200)
            .send({ post, msg: "Post created successfully!" });
    }
    public async updatePost(postData, ctx) {
        ctx.request.all().id = postData.id
        ctx.request.all().content = postData.content
        let post = await this.postQuery.updatePost(ctx);
      
        return ctx.response
            .status(200)
            .send({ post, msg: "Post updated successfully!" });
    }

    public async deletePost(ctx :HttpContextContract) : Promise<any>{
        let data = ctx.request.all()
        let del = await this.postQuery.deletePost('id',data.id)
        return ctx.response
            .status(200)
            .send({ del: del[0], msg: "Post deleted successfully!" });
      }
}
