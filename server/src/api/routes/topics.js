import express from 'express'
import { getSingleTopic, addTopic, getTopic, deleteTopic } from '../../services/topic'
import { getCats } from '../../services/cat'

const route = express.Router()

export default (router) => {
    router.use('/topics/', route)

    // Get single topic from given category
    route.get('/:catId', async (req, res) => {
        const topic = await getSingleTopic(req.params.catId)
        if (!topic) {return res.status(404).send('Error: category not found or has no topics')}
        res.status(200).send(topic)
    })

    // Add topic to category
    route.post('/', async (req, res) => {
        const cat = await getCats(req.body.catName)
        if (!cat) {return res.status(404).send('Error: cannot add topic to nonexistent category')}

        const newTopic = await addTopic(cat, req.body.prompt, req.body.createdBy, req.body.popAnswer)
        if (!newTopic) {return res.status(400).send('Error: could not add topic (topic already exists)')}
        return res.status(201).send(newTopic)
    })

    route.delete('/:topicId', async (req, res) => {
        const topic = await getTopic(req.params.topicId)
        if (!topic) {return res.status(404).send('Error: Topic to be deleted does not exist')}

        const output = await deleteTopic(topic)
        if (output) {return res.status(409).send('Error: Topic could not be deleted' + output)}
        return res.status(400).send('Topic deleted')
    })
}