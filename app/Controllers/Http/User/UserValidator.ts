import { schema,rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class UserValidator{
    public async validateSignupSchema(ctx : HttpContextContract){
      const userSchema = schema.create({
        email: schema.string({}, [
          rules.email({
            ignoreMaxLength: false,
          }),
          rules.unique({ table: 'users', column: 'email' }),
        ]),
        name : schema.string({
          escape: true,
          trim: true
        }),
       
        password: schema.string({escape: true,
          trim: true}, [
            rules.minLength(10),
            
        ]),
      })
      const msg =  {
        'email.required': 'Email is required',
        'email.unique': 'Email is already in use',
        'email.email': 'Invalid email address',
        'name.required': 'Name is required',
        'password.required': 'Password is required',
        'password.minLength': 'Password must be at least 10 charecters long',
      }
      return await ctx.request.validate({ schema: userSchema, messages : msg })
    }
    public async validateLoginSchema(ctx : HttpContextContract){
      const userSchema = schema.create({
        email: schema.string({trim: true}, [
          rules.email(),
        ]),
        password: schema.string({trim: true,}),
      })
      const msg =  {
        'email.required': 'Email is required',
        'email.email': 'Email validation failed',
        'email.exists': 'Invalid email!',
        'password.required': 'Password is required',

      }
      return await ctx.request.validate({ schema: userSchema, messages : msg })

    }
 

}
