import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,
  HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
   @hasMany(() => User)
  public users: HasMany<typeof User>
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @column()
  public name: string
  @column()
  public password: string
  @column()
  public remember_me_token: string
}
