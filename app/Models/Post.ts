import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import CommentInPost from './CommentInPost'
import LikeInPost from './LikeInPost'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: string

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => User,{
    foreignKey : 'user_id',
    onQuery: (q) =>{
        q.select('id', 'name')
    }
  })
  public user : BelongsTo<typeof User>

  @hasMany(() => CommentInPost, {
    foreignKey: 'post_id',
    onQuery: (q) => {
      q.select('id', 'comment','user_id','created_at').preload('user').withCount("total_likes_in_comment", (query) => {
        query.count("*").as("number_of_likes");
      })
    }
  })
  public comments: HasMany<typeof CommentInPost>

  @hasMany(()=> LikeInPost, {
    foreignKey: 'post_id',
    localKey: 'id',
  })

  public total_likes: HasMany<typeof LikeInPost>

  public serializeExtras() {
    return {
      number_of_likes: this.$extras.number_of_likes,
      liked: this.$extras.liked,
    }
  }
 
}
