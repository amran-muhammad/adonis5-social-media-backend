import LikeInCommentQuery from "./LikeInCommentQuery";

export default class LikeInCommentService {
    private likeInCommentQuery: LikeInCommentQuery;
    constructor() {
        this.likeInCommentQuery = new LikeInCommentQuery();
    }
    public async createLikeInComment(CommentData, ctx) {
        await this.likeInCommentQuery.createLikeInComment(CommentData);
      
        return ctx.response
            .status(200)
            .send({ msg: "Like successfully!" });
    }
    public async deleteLikeInComment(CommentData, ctx) {
        
        await this.likeInCommentQuery.deleteLikeInComment(CommentData);
        
      
        return ctx.response
            .status(200)
            .send({ msg: "Like removed successfully!" });
    }
}
