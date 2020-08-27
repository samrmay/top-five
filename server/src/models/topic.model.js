import mongoose from 'mongoose'
const Schema = mongoose.Schema

const topicSchema = new Schema({
    cat: Schema.Types.ObjectId, ref: 'cat',
    prompt: String,
    rank: Number,
    createdBy: String,
    popAnswer: [{type: String}]
},  {
    timestamps: true
})

const Topic = mongoose.model('Topic', topicSchema)

export default Topic