import LikeInComment from 'App/Models/LikeInComment'

export default class LikeInCommentQuery{
    createLikeInComment(post){
      return LikeInComment.create(post)
  }
  deleteLikeInComment(post){
    return LikeInComment.query().where('comment_in_post_id',post.comment_in_post_id).where('user_id',post.user_id).delete()
  }
}
