import mongoose from 'mongoose'
const Schema = mongoose.Schema

const topicSchema = new Schema({
    cat: {type: Schema.Types.ObjectId, ref: 'Cat'},
    prompt: String,
    rank: Number,
    createdBy: String,
    popAnswer: [{type: String}]
},  {
    timestamps: true
})

const Topic = mongoose.model('Topic', topicSchema)

export default Topic