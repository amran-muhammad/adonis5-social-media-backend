import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/register', 'User/UsersController.register')
Route.post('/user/login', 'User/UsersController.login')
Route.get('/users', 'User/UsersController.index')