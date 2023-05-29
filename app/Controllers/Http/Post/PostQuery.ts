import Post from 'App/Models/Post'

export default class PostQuery{
  createPost(post){
      return Post.create(post)
  }

  deletePost(key, value){
    return Post.query().where(key, value).delete();
  }
  updatePost(ctx){
    let data = ctx.request.all()
    return Post.query().where('id', data.id).update({'content': data.content})
  }
}
