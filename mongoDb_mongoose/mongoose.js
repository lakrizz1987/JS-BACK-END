const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Girls';

mongoose.connect(uri);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected....')
})
db.on('error', () => console.log('ERRROOORRR!!!'));

const mySchema = new mongoose.Schema({
    name: String,
    age: Number,
    hair: String
})

const Girl = mongoose.model('Girl', mySchema);

const women = new Girl({ name: 'Moni', age: 32, hair: 'long' })
//women.save()

//Girl.find({ name: 'Moni' }).then(res => console.log(res))

//Girl.findOne({name:'Moni'}).then(res=>console.log(res))

//Girl.count().then(res => console.log(res))
/*
new Girl({ name: 'Boyana', age: '32', hair: 'blond' }).save()
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
    */
//Girl.remove({ name: 'Boyana' }).then(res => console.log(res))    

