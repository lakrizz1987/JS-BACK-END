const products = require('../data/data.json');
const fs = require('fs/promises');
const uniqid = require('uniqid');

class Cube {
    constructor(id, name, decsription, imageUrl, difficultyLevel) {
        this.id = id;
        this.name = name;
        this.decsription = decsription;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    save(){
        products.push(this)
        return fs.writeFile(__dirname + '/../data/data.json', JSON.stringify(products))
    }
}

module.exports = Cube;