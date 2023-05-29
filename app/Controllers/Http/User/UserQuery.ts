import User from 'App/Models/User'

export default class UserQuery{
  createUser(user){
      return User.create(user)
  }
  
  getSingleUserInfo(column, value) {
    return User.query().where(column, value).first()
  }

}
