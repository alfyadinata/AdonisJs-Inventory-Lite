'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WareHouse extends Model {
    item() {
        return this.hasMany('App/Models/Item')
    }
}

module.exports = WareHouse
