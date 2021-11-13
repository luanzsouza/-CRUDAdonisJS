import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Licenses extends BaseSchema {
  protected tableName = 'licenses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
        table.string('name')
      table.string('identifier')
      table.string('license_dad_id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
