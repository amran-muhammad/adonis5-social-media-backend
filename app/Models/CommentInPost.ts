import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import LikeInComment from './LikeInComment'

export default class CommentInPost extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public post_id: number

  @column()
  public comment: string

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

  @hasMany(()=> LikeInComment, {
    foreignKey: 'comment_in_post_id',
    localKey: 'id'
  })

  public total_likes_in_comment: HasMany<typeof LikeInComment>
  public serializeExtras() {
    return {
      number_of_likes: this.$extras.number_of_likes,
      liked: this.$extras.liked,
    }
  }
}
