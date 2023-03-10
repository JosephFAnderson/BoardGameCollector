const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

// Middleware to hash password on creation of user account
userSchema.pre('save', async function(next) {
    if( this.isNew ){
        const hash = await bcrypt.hash( this.password, 10);
        this.password = hash;
    }    
    next();
})

// Middleware to hash password on user update
userSchema.pre('findOneAndUpdate', async function(next) {
    if(this.getUpdate().password){
        const update = { ...this.getUpdate() };
        update.password = await bcrypt.hash( update.password, 10);
        this.setUpdate( update );
    }
})

// Method to check user input password against stored hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('user', userSchema);

module.exports = User;