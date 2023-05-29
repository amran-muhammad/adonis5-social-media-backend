import Route from '@ioc:Adonis/Core/Route'

Route.post('/comment-in-post/store', 'CommentInPost/CommentInPostsController.store')
Route.post('/comment-in-post/delete', 'CommentInPost/CommentInPostsController.deleteComment')
Route.post('/comment-in-post/update', 'CommentInPost/CommentInPostsController.updateComment')