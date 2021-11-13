import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,
  HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class File extends BaseModel {
  @hasMany(() => File,{ foreignKey: 'license_id'})
  public files: HasMany<typeof File>

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @column()
  public filename: string
  @column()
  public path: text
  @column()
  public used: bollean
  @column()
  public size: number

  
  
  
  
}
