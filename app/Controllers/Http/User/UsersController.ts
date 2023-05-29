import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User  from 'App/Models/User'
import UserValidator from './UserValidator'
import UserService from './UserService'

export default class UsersController {
  private userValidator: UserValidator;
  private userService: UserService;


  constructor() {
    this.userValidator = new UserValidator();
    this.userService = new UserService();
  }
  public async index ({ response }) {
    const users = await User.all()
    return response.status(200).json(users)
  }
  async register(ctx: HttpContextContract) {
    try {
      let validatedData = await this.userValidator.validateSignupSchema(ctx);
      
      return this.userService.createUser(validatedData, ctx);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

   

  async login(ctx: HttpContextContract) {
    try {
      let validatedData = await this.userValidator.validateLoginSchema(ctx);
      let data = ctx.request.all();
      data.email = validatedData.email;
      data.password = validatedData.password;

      return this.userService.webLogin(ctx);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }
}