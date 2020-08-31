import mongoose from 'mongoose'
import { compareSync, hashSync } from 'bcryptjs'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 60,
        required: true
    }
})

userSchema.pre('save', function() {
    if (this.isModified('password')) {
        this.password = hashSync(this.password, 10)
    }
})

class userClass {
    compare(password) {
        return compareSync(password, this.password)
    }
}
userSchema.loadClass(userClass)

const User = mongoose.model('User', userSchema)
export default User