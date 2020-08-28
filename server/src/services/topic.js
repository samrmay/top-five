import mongoose from 'mongoose'
import Cat from '../models/cat.model'
import Topic from '../models/topic.model'

export const getSingleTopic = async (catId) => {
    const cat = await Cat.findById(catId)
    const topics = await cat.populate('topics').topics
    return await Topic.findById(topics[Math.floor(Math.random() * (topics.length))])
}

export const addTopic = async (cat, prompt_, createdBy, popAnswer) => {
    const catTopics = await Cat.findById(cat._id).populate('topics')
    for (let i=0; i < catTopics.topics.length; i++) {
        if (catTopics.topics[i].prompt === prompt_) {
            return null
        }
    }
    const newTopic = new Topic({
        cat: cat._id,
        prompt: prompt_,
        createdBy: createdBy,
        rank: 0,
        popAnswer: popAnswer
    })
    await newTopic.save()
    cat.topics.push(newTopic._id)
    cat.save()
    return newTopic
}

export const getTopic = async topicId => {return await Topic.findById(topicId)}

export const deleteTopic = async (topic) => {
    let parentCat = (await Topic.findById(topic._id).populate('cat')).cat
    // CONVERT ID VALUES TO STRINGS BEFORE COMPARING (DIFFERENT TYPES OF OBJECTS)
    const newTopics = parentCat.topics.filter(id => String(id) != String(topic._id))
    Topic.deleteOne({_id: topic._id}, (err) => {if (err) return err})
    parentCat.topics = newTopics
    parentCat.save()
    return null
}