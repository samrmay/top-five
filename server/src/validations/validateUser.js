import Joi from 'joi'

const userValidationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required().messages({
        'string.min': 'Username must be at least 3 characters',
        'string.max': 'Username cannot be more than 30 characters',
        'string.alphanum': 'Username can only contain letters and numbers'
    }),
    password: Joi.string().min(8).max(60).pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')).required().messages({
        'string.min': 'Password must be at least 8 characters',
        'string.max': 'Password cannot be longer than 60 characters',
        'string.pattern.base': 'Password must contain 1 uppercase, 1 lowercase, and 1 number'
    }),
    email: Joi.string().email({minDomainSegments: 2}).required().messages({
        'string.domain': 'Email does not have a valid domain',
        'string.email': 'Email given is not a valid email'
    })
})

export default (user) => userValidationSchema.validate(user)