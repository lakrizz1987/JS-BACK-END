const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config')

module.exports = function () {
    return (req, res, next) => {
        let token = req.cookies['SESSION'];
        if (token) {
            jwt.verify(token,SECRET, function (err, decoded){
                if(err){
                    res.clearCookie('SESSION')
                }else{

                    req.user = decoded
                }

            })
        }

        next()
    }
}