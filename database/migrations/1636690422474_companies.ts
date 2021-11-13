import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
       table
        .integer('license_id')
        .unsigned()
        .references('licenses.id')
        .onDelete('CASCADE') 
      table.string('name')
      table.string('identifier')


      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
