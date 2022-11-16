const UserSchema = require('../models/UserSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 3;

const saveUserToDb = async (data) => {
    const { username, password, repeatPassword } = data;
    if (password != repeatPassword) {
        throw { message: 'Username or password is invalid' }

    }

    const userNameCheck = await UserSchema.findOne({ username: username }).lean() || false;

    if (userNameCheck.username === username) {
        throw { message: 'Username allready exist!' }

    } else {

        bcrypt.genSalt(saltRounds, function (err, salt) {
            if(err){
                throw {message: 'Something is wrong!'}
            }
            
            bcrypt.hash(password, salt, function (err, hash) {
                // Store hash in your password DB.

                const user = new UserSchema({ username, password: hash });
                user.save();
            });
        });


    }


}

module.exports = {
    saveUserToDb
}