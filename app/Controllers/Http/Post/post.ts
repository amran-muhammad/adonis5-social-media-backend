import Route from '@ioc:Adonis/Core/Route'

Route.post('/posts/store', 'Post/PostsController.store')
Route.post('/meeting/store', 'Post/PostsController.storeMeeting')
Route.get('/meeting/check-stream', 'Post/PostsController.checkStream')
Route.post('/posts/update', 'Post/PostsController.updatePost')
Route.post('/posts/delete', 'Post/PostsController.deletePost')
Route.get('/posts/get', 'Post/PostsController.get')