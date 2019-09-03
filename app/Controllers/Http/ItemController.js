'use strict'
const Item = use('App/Models/Item')
const WareHouse = use('App/Models/WareHouse')

class ItemController {
    async index ({view,auth, response}) {        
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
          }
        const item = await Item.all()
        const warehouse = await WareHouse.all()
        return view.render('item.index', { item: item.rows, warehouse: warehouse.rows })        
    } 

    async store({request, response, session, auth}) {
        // return response.json(request.all())
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
          }
        const { name, warehouse_id, no_item, qty, price} = await request.all()
        const item = new Item()
        item.name = name
        item.warehouse_id = warehouse_id
        item.no_item = no_item
        item.qty = qty
        item.price = price
        await item.save()
        session.flash({ notification: 'Success Created Data!' })
        return response.redirect('item')
    }

    async edit({params, response, view, auth}) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const id = params.id
        const edit = await Item.find(id)
        const warehouse = await WareHouse.all()
        return view.render('item.edit',{edit:edit, warehouse:warehouse.rows})
    }

    async update({params, request, response, session, auth }) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const id = params.id 
        const item = await Item.find(id)
        const { name, warehouse_id, no_item, qty, price} = await request.all()
        item.name = name
        item.warehouse_id = warehouse_id
        item.no_item = no_item
        item.qty = qty
        item.price = price
        await item.save()
        session.flash({ notification: 'Success Updated Data!' })
        return response.route('item')
    }
    
    async destroy({request, response, params, session, auth  }) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const id = params.id
        const item = await Item.find(id)
        await item.delete()        
        session.flash({ notification: 'Success Deleted Data!' })
        return response.route('item')
    }
}

module.exports = ItemController
