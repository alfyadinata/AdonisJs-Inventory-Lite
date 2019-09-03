'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('auth.login')
Route.get('/login','LoginController.viewLogin')
Route.post('/login','LoginController.login').as('login')
// warehouse
Route.get('/warehouse','WareHouseController.index').as('warehouse')
Route.post('/warehouse','WareHouseController.store').as('sWarehouse')
Route.get('warehouse/edit/:id','WareHouseController.edit').as('eWarehouse')
Route.post('warehouse/edit/:id','WareHouseController.update').as('uWarehouse')
Route.get('/warehouse/delete/:id','WareHouseController.destroy').as('delWarehouse')
// item
Route.get('item','ItemController.index').as('item')
Route.post('item','ItemController.store').as('sItem')
Route.get('item/edit/:id','ItemController.edit').as('eItem')
Route.post('item/edit/:id','ItemController.update').as('uItem')
Route.get('item/delete/:id','ItemController.destroy').as('delItem')
Route.post('logout','LoginController.logout').as('logout')