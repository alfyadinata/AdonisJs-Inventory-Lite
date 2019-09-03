'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WareHouseSchema extends Schema {
  up () {
    this.create('ware_houses', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ware_houses')
  }
}

module.exports = WareHouseSchema
