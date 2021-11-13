import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserGroups extends BaseSchema {
  protected tableName = 'user_groups'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name')
      })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
