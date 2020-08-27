import mongoose from 'mongoose'
import Cat from '../models/cat.model'

export const addCat = async (name, createdBy) => {
    const cat = await Cat.findOne({name: name})
    if (cat) return null
    const newCat = new Cat({name: name, topics: [], createdBy: createdBy})
    await newCat.save()
    return newCat
}

export const getCats = async (name = null) => {
    if (name) {return await Cat.find({name: name})}
    return await Cat.find()
}