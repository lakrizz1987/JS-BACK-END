const mongoose = require('mongoose');





module.exports = (app) => {
    mongoose.connect('mongodb://localhost:27017/rubic');
    const db = mongoose.connection;
    db.on('error', () => console.log('Error!!!'));
    db.once('open', () => console.log('Connected to DB...'));
}