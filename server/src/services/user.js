import mongoose from 'mongoose'
import User from '../models/user.model.js'

export const getUser = async (userId) => {
    return await User.findById(userId)
}

export const findUser = async (userEmail) => {
    return await User.findOne({email: userEmail})
}

export const createUser = async (userName, userEmail, userPassword) => {
    const newUser = new User ({
        username: userName,
        email: userEmail,
        password: userPassword
    })

    await newUser.save()
    return {username: newUser.username, email: newUser.email, id: newUser._id}
}