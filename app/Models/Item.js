'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
    warehouse () {
        return this.belongsTo('App/Models/WareHouse')
    }
}

module.exports = Item
