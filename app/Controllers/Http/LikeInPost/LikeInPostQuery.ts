import LikeInPost from 'App/Models/LikeInPost'

export default class LikeInPostQuery{
  createPost(post){
      return LikeInPost.create(post)
  }
  deletePost(post){
    return LikeInPost.query().where('post_id',post.post_id).where('user_id',post.user_id).delete()
  }
}
