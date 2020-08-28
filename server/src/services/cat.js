import mongoose from 'mongoose'
import Cat from '../models/cat.model'
import { deleteTopic } from './topic'

export const addCat = async (name, createdBy) => {
    const cat = await Cat.findOne({name: name})
    if (cat) return null
    const newCat = new Cat({name: name, topics: [], createdBy: createdBy})
    await newCat.save()
    return newCat
}

export const getCats = async (name = null) => {
    if (name) {return await Cat.findOne({name: name})}
    return await Cat.find()
}

export const getCat = async (catId) => {return await Cat.findById(catId)}

export const deleteCat = async(cat) => {
    cat.topics.forEach(async (topicId) => {
        const topic = await getTopic(topicId)
        await deleteTopic(topic)
    })
    if (cat.topics.length === 0) {
        console.log(`All child topics to ${cat.name} deleted`)
    } else {
        return cat
    }

    await Cat.deleteOne({_id: cat._id})
    return null
}