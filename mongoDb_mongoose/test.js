const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useUnifiedTopology: true });

/*
client.connect(function(err){
    const db = client.db('ships');
    const riverShips = db.collection('riverShips');

    riverShips.insertOne({'name': 'Atia', 'owner':'DDF'})
    riverShips.findOne({})
    .then(res=>console.log(res))
})

*/

/*
client.connect()
    .then(res => {
        const db = client.db('cars')
        const collection = db.collection('fast-cars');
        //collection.insertOne({"name": "Lada", "owner":"Ivo"})
        return collection.findOne({name:'Lada'})
    })
    .then(res=>console.log(res))
*/

async function mongo() {
    await client.connect();
    const db = client.db('cars')
    const collection = db.collection('fast-cars');
    //collection.insertOne({"name": "Lamborgini", "owner":"Ivo"})

    let car = await collection.findOne({'name':'Lada'})
    console.log(car)
}

mongo()