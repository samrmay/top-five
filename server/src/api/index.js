import Router from 'express'
import example from './routes/example'
import cats from './routes/cats'
import topics from './routes/topics'

export default () => {
    const router = Router()
    example(router)
    cats(router)
    topics(router)
    
    return router
}
