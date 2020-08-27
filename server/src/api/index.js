import Router from 'express'
import example from './routes/example'

export default () => {
    const router = Router()
    example(router)
    return router
}
