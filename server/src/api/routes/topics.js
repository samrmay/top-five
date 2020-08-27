import express from 'express'
import { getSingleTopic } from '../../services/topic'

const route = express.Router()

export default (router) => {
    router.use('/topics/', route)

    route.get('/:catId', async (req, res) => {
        const topic = await getSingleTopic(req.params.catId)
        if (!topic) {return res.status(404).send('Error: category not found or has no topics')}
        res.status(200).send(topic)
    })
}