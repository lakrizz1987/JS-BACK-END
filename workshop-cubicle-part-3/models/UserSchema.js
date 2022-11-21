const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

const UserSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => {
            return bcrypt.hash(this.password, salt)
        })
        .then(hash => {
            this.password = hash
            next()
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = mongoose.model('User', UserSchema);