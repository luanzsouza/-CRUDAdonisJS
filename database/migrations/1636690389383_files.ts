import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Files extends BaseSchema {
  protected tableName = 'files'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('license_id')
        .unsigned()
        .references('licenses.id')
        .onDelete('CASCADE')
      table.string('filename')
      table.text('patch')
      table.boolean('used')
      table.integer('size')  
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
