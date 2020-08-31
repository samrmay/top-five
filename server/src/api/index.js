import Router from 'express'
import cats from './routes/cats'
import topics from './routes/topics'
import users from './routes/users'

export default () => {
    const router = Router()
    cats(router)
    topics(router)
    users(router)
    
    return router
}
