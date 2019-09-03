'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('warehouse_id').unsigned().references('id').inTable('ware_houses').onDelete('cascade').onUpdate('cascade')
      table.string('no_item')
      table.integer('qty')
      table.double('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
