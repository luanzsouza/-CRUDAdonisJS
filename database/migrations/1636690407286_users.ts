import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_groups_fk')
        .unsigned()
        .references('user_groups.id')
        .onDelete('CASCADE') // delete post when user is deleted
      table
        .integer('companies_fk')
        .unsigned()
        .references('companies.id')
        .onDelete('CASCADE') // delete post when user is deleted
        table
        .integer('license_fk')
        .unsigned()
        .references('licenses.id')
        .onDelete('CASCADE') // delete post when user is deleted  
        table.string('name')
        table.string('password')
        table.string('remeber_me_token')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
