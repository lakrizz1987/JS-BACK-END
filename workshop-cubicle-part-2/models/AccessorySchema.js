const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    imageUrl: String,
    description: String

})

module.exports = mongoose.model('Accesory', AccessorySchema);