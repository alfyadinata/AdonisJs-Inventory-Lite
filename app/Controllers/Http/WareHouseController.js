'use strict'
const WareHouse = use('App/Models/WareHouse')
class WareHouseController {
    async index ({view, auth, response}) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const warehouse = await WareHouse.all()
        return view.render('warehouse.index', { warehouse: warehouse.rows })        
    } 

    async store({request, response, session, auth}) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const name = request.input('name')
        const warehouse = new WareHouse()
        warehouse.name = name
        await warehouse.save()
        session.flash({ notification: 'Success Created Data!' })
        return response.redirect('warehouse')
    }

    async edit({params, response, view, auth}) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const id = params.id
        const edit = await WareHouse.find(id)
        return view.render('warehouse.edit',{edit:edit})
    }

    async update({params, request, response, session, auth }) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const id = params.id 
        const warehouse = await WareHouse.find(id)
        warehouse.name = request.input('name')
        await warehouse.save()
        session.flash({ notification: 'Success Updated Data!' })
        return response.route('warehouse')
    }
    
    async destroy({request, response, params, session, auth  }) {
        try {
            await auth.check()
          } catch (error) {
              return response.redirect('/login')
        }
        const id = params.id
        const warehouse = await WareHouse.find(id)
        await warehouse.delete() 
        session.flash({ notification: 'Success Deleted Data!' })       
        return response.route('warehouse')
    }
}

module.exports = WareHouseController
