import express from 'express'

const route = express.Router()

export default (router) => {
  router.use('/example', route)

  route.get('/', (req, res) => {
    return res.send('Hello world.')
  })
}