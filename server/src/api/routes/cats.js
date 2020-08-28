import express from 'express'
import { addCat, getCats, getCat, deleteCat } from '../../services/cat'
import { getTopic, deleteTopic } from '../../services/topic'

const route = express.Router()

export default (router) => {
    router.use('/cats', route)

    // Add new cat
    route.post('/', async (req, res) => {
        if (req.body.name == '') {return res.status(400).send('Error: cannot create empty category')}
        const newCat = await addCat(req.body.name, req.body.createdBy)
        if (!newCat) {return res.status(409).send('Error: could not create new category (already exists')}
        return(res.status(201).send(newCat))
    })

    // Get all cats or cat with specific name
    route.get('/', async (req, res) => {
        const output = await getCats(req.body.name)
        if (!output) {return res.status(404).send('Error: no category with that name found')}
        return res.status(200).send(output)
    })

    // Delete cat and child topics
    route.delete('/:catId', async (req, res) => {
        const cat = await getCat(req.params.catId)
        if (!cat) {return res.status(404).send('Error: cat not found')}

        const output = await deleteCat(cat)
        if (output) {return res.status(409).send('Error: cat could not be deleted (still has child topics)')}
    })
}