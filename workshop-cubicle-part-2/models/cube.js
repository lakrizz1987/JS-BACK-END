const products = require('../data/data.json');
const fs = require('fs/promises');
const uniqid = require('uniqid');
const Model = require('./model');

class Cube extends Model{
    
    constructor(id, name, decsription, imageUrl, difficultyLevel) {
        super();
        this.id = id;
        this.name = name;
        this.decsription = decsription;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

}

module.exports = Cube;