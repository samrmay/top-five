import express from 'express'
import helmet from 'helmet'
import routes from '../api'

export default (app) => {
    app.use(express.json())
    app.use(helmet());
    app.use('/api', routes())
} 