const routes = module.exports = require('next-routes')()

/*API
routes.add(name, pattern = /name, page = name)
routes.add(pattern, page)
routes.add(object)
*/
routes
.add('index','/','index')
.add('home','/home','home')
.add('login','/login','login')