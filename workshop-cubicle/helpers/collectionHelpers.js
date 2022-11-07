const products = require('../data/data.json');
const fs = require('fs/promises');
const uniqid = require('uniqid');

const allProducts = products.slice();

function getAll(){
    return allProducts;
}

function addToCollection(data) {

    const newObj = {
        id: uniqid(),
        name: data.name,
        decsription: data.decsription,
        imageUrl: data.imageUrl,
        difficultyLevel: data.difficultyLevel
    };

    allProducts.push(newObj);

    return fs.writeFile(__dirname + '/../data/data.json', JSON.stringify(allProducts))
}

module.exports = {
    allProducts,
    addToCollection,
    getAll
}