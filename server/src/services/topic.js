import mongoose from 'mongoose'
import Cat from '../models/cat.model'

export const getSingleTopic = async (catId) => {
    const cat = await Cat.findById(catId)
    return await cat.populate('topics').exec((err, topics) => {
        if (err) return null
        return topics[Math.floor(Math.random() * topics.length)]
    })
}