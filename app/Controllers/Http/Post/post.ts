import Route from '@ioc:Adonis/Core/Route'

Route.post('/posts/store', 'Post/PostsController.store')
Route.post('/posts/update', 'Post/PostsController.updatePost')
Route.post('/posts/delete', 'Post/PostsController.deletePost')
Route.get('/posts/get', 'Post/PostsController.get')