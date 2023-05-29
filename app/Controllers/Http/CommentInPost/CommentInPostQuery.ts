import CommentInPost from 'App/Models/CommentInPost'

export default class CommentInPostQuery{
  createPost(post){
      return CommentInPost.create(post)
  }
  
  deleteComment(key, value){
    return CommentInPost.query().where(key, value).delete();
  }

  updateComment(ctx){
    let data = ctx.request.all()
    return CommentInPost.query().where('id', data.id).update({'comment': data.comment})
  }
}
