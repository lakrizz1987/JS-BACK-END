const UserModel = require('../models/UserSchema');
const bcrypt = require('bcrypt');

const saltRounds = 3;

const registerUserToDb = async (data) => {
    const { username, password, repeatPassword } = data;
    if (password != repeatPassword) {
        throw { message: 'Username or password is invalid' }

    }

    const userNameCheck = await UserModel.findOne({ username: username }).lean() || false;

    if (userNameCheck.username === username) {
        throw { message: 'Username allready exist!' }

    } else {

        bcrypt.genSalt(saltRounds, function (err, salt) {
            if(err){
                throw {message: 'Something is wrong!'}
            }
            
            bcrypt.hash(password, salt, function (err, hash) {
                // Store hash in your password DB.

                const user = new UserModel({ username, password: hash });
                user.save();
            });
        });


    }


}

module.exports = {
    registerUserToDb
}