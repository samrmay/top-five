import mongoose from 'mongoose'
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: String,
    topics: [{type: mongoose.Types.ObjectId, ref: 'Topic' , default: []}],
    createdBy: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

const Cat = mongoose.model('Cat', catSchema)

export default Cat