/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import 'App/Controllers/Http/User/user'
import 'App/Controllers/Http/Post/post'
import 'App/Controllers/Http/LikeInPost/likeInPost'
import 'App/Controllers/Http/CommentInPost/commentInPost'
import 'App/Controllers/Http/LikeInComment/likeInComment'


Route.get('/', async () => {
  return { hello: 'world' }
})
