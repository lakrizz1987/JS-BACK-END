const mongoose = require('mongoose');





module.exports = (app) => {
    mongoose.connect(`mongodb+srv://lakrizz:T22bytlVfjTQH3ls@cubicles.osi7cn4.mongodb.net/?retryWrites=true&w=majority`);
    
    const db = mongoose.connection;
    db.on('error', () => console.log('Error!!!'));
    db.once('open', () => console.log('Connected to DB...'));
}