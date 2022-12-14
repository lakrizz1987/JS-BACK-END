const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 50

    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessoaries: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accesory'
        }
    ],
    creator:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Cube', cubeSchema);