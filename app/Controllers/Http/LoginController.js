'use strict'
const User = use('App/Models/User')

class LoginController {
    async viewLogin({view, auth, response}) {
        try {
            await auth.check()
            return response.redirect('/warehouse')
        } catch (err) {
            return view.render('auth.login')                 
        }
    }

    async login({request, response, auth }) {
        // return response.json(request.all())

        const { email, password } = request.all()
        await auth.attempt(email, password)
        return response.route('warehouse')
    }

    async logout({request, response, auth}) {
        await auth.logout()
        return response.route('login')
    }
}

module.exports = LoginController
