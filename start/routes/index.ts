import Route from '@ioc:Adonis/Core/Route'
import './auth.routes'
import './posts.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
