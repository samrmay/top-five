import Joi from 'joi'

const userValidationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).max(60).pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')).required(),
    email: Joi.string().email({minDomainSegments: 2}).required()
})

export default (user) => userValidationSchema.validate(user)