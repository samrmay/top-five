import express from 'express'
import validateWith from '../../middleware/validateWith'
import validateUser from '../../validations/validateUser'
import { getUser, findUser, createUser } from '../../services/user'

const route = express.Router()

export default (router) => {
    router.use('/users', route)

    // Create user profile
    route.post('/', validateWith(validateUser), async (req, res) => {
        const {email, username, password} = req.body
        const user = await findUser(email)
        if (user) {return res.status(409).send('Error: user with that email exists')}

        const newUser = await createUser(username, email, password)
        if (newUser) {return res.status(201).send(newUser)}
        return res.status(409).send('Error: could not create new user')
    })

    // Get profile information
}