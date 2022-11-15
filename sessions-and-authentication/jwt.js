const jwt = require('jsonwebtoken');

const payload = { _id: 'ivo', username: 'pass123' }
const secret = 'MySecretKey';
const options = { expiresIn: '2d' };

const token = jwt.sign(payload,secret,options);

console.log(token)

const decode = jwt.decode(token,secret);
console.log(decode)