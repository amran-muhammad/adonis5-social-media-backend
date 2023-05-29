import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import PostValidator from "./PostValidator";
import PostService from "./PostService";
import Post from "App/Models/Post";
import Meeting from "App/Models/Meeting";
import axios from "axios";

export default class PostsController {
  private postValidator: PostValidator;
  private postService: PostService;

  constructor() {
    this.postValidator = new PostValidator();
    this.postService = new PostService();
  }
  async store(ctx: HttpContextContract) {
    try {
      let validatedData = await this.postValidator.validatePostSchema(ctx);

      return this.postService.createPost(validatedData, ctx);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

  public async get({ request, response }) {
    let user_id = request.all().user_id;
    let searchValue = request.all().searchValue;
    const posts = await Post.query()
      .withCount("total_likes", (query) => {
        query.count("*").as("number_of_likes");
      })
      .withCount("total_likes", (query) => {
        query.where("user_id",user_id).as("liked")
      })
      .preload("user")
      .preload("comments",(profileQuery) => {
        profileQuery.withCount("total_likes_in_comment", (query) => {
          query.where("user_id",user_id).as("liked")
        })
      })
      .orderBy("id", "desc");

    return response.status(200).json({ posts, searchValue });
  }

  public async deletePost(ctx: HttpContextContract) {
    return this.postService.deletePost(ctx);
  }
  public async updatePost(ctx: HttpContextContract) {
    try {
      let validatedData = await this.postValidator.validateEditPostSchema(ctx);

      return this.postService.updatePost(validatedData, ctx);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

  public async storeMeeting({request, response}) {
    let data = await Meeting
    .create({
      stream_id: request.all().stream_id,
    })

    await axios.post('http://localhost:5080/Meeting/rest/v2/broadcasts/create',{
      streamId: request.all().stream_id
    })

    return response.status(200).json({ data });
  }

  public async checkStream({request, response}) {
   let data = await Meeting.query().where('stream_id', request.all().stream_id).first()
   let found = false
   if(data){
    found = true
   }
   return response.status(200).json({ found });
  }
}
