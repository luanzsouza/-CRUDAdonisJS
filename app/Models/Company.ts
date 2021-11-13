import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,
  HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Company extends BaseModel {
  @hasMany(() => Companies,){
  foreignKey: 'license_fk',
}
  public companies: HasMany<typeof Companies>
}

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @column()
  public name: string
  
  @column()
  public identifier: string
  

}
