const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    bggCollectionName: {
        type: String,
    }
})

const User = model('user', userSchema);

module.exports = User;