import LikeInPostQuery from "./LikeInPostQuery";

export default class LikeInPostService {
    private likeInPostQuery: LikeInPostQuery;
    constructor() {
        this.likeInPostQuery = new LikeInPostQuery();
    }
    public async createPost(postData, ctx) {
        await this.likeInPostQuery.createPost(postData);
      
        return ctx.response
            .status(200)
            .send({ msg: "Like successfully!" });
    }
    public async deletePost(postData, ctx) {
        
        await this.likeInPostQuery.deletePost(postData);
        
      
        return ctx.response
            .status(200)
            .send({ msg: "Like successfully!" });
    }
}
