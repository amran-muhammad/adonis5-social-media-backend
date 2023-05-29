import UserQuery from "./UserQuery";
import Hash from "@ioc:Adonis/Core/Hash";

export default class UserService {
    private userQuery: UserQuery;
    constructor() {
        this.userQuery = new UserQuery();
    }
    public async createUser(userData, ctx) {
        await this.userQuery.createUser(userData);
      
        return ctx.response
            .status(200)
            .send({ msg: "Account created successfully!" });
    }
  
   
    async webLogin(ctx) {
        try {
            let data = ctx.request.all();
            let user: any = await this.userQuery.getSingleUserInfo("email", data.email);
            if (!user) {
                return ctx.response
                    .status(401)
                    .send({ msg: "Invalid email or password. Please try again." });
            }
            if (!(await Hash.verify(user.password, data.password))) {
                return ctx.response
                    .status(401)
                    .send({ msg: "Invalid email or password. Please try again." });
            }            
            return ctx.response
            .status(200)
            .json({ user });
        } catch (error) {
            return ctx.response
                .status(401)
                .send({ msg: "Invalid email or password. Please try again." });
        }
    }
}
