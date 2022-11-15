const bcrypt = require('bcrypt');

const password = 'ivo123';
let myHash = ''

bcrypt.genSalt(4, (err, salt) => {
    if (err) console.log(err)

    bcrypt.hash(password, salt, (err, hash) => {
        myHash = hash
        console.log(myHash)
    })
})

setTimeout(() => {
    bcrypt.compare(password, myHash)
        .then(result => console.log(result))
}, 2000)
