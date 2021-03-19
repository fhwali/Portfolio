const mongoose = require ('mongoose')
const validator = require('validator')

const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    subject: {
        type: String,
        required: true,
        min: 3
    },
    message: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

const User = mongoose.model('User', useSchema)

module.exports = User;
