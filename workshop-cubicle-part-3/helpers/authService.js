const UserModel = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET, SALT_ROUNDS } = require('../config/config');



const registerUserToDb = async (data) => {
    const { username, password, repeatPassword } = data;
    if (password != repeatPassword) {
        throw { message: 'Username or password is invalid' }

    }

    const userNameCheck = await UserModel.findOne({ username: username }).lean() || false;

    if (userNameCheck.username === username) {
        throw { message: 'Username allready exist!' }

    } else {

       /* bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
            if (err) {
                throw { message: 'Something is wrong!' }
            }

            bcrypt.hash(password, salt, function (err, hash) {
                // Store hash in your password DB.

                const user = new UserModel({ username, password:hash});
                user.save();
            });
        }); */

        
        const user = new UserModel({ username, password});
        user.save();


    }


}

const loginUser = async (data) => {
    
    const { username, password } = data;
    const searchedUser = await UserModel.findOne({ username });
    
    if (!searchedUser) throw { message: 'No user in Db!' }

    const isValidPassword = await bcrypt.compare(password, searchedUser.password)

    if (isValidPassword) {
        
        const token = jwt.sign({ _id: searchedUser._id , role: ['admin'] }, SECRET);
        return token
        
    }else{
        throw { message: 'Wrong password!'}
    }

}

module.exports = {
    registerUserToDb,
    loginUser
}