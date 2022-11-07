const products = require('../data/data.json');
const fs = require('fs/promises');
const uniqid = require('uniqid');

const allProducts = products.slice();

function getAll() {
    return allProducts;
}

function getOne(id) {
    const searchedProduct = allProducts.find(x => x.id === id);
    return searchedProduct;
}

function addToCollection(data) {

    const newObj = {
        id: uniqid(),
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficultyLevel: data.difficultyLevel
    };
    console.log(newObj)
    allProducts.push(newObj);

    return fs.writeFile(__dirname + '/../data/data.json', JSON.stringify(allProducts))
}

module.exports = {
    allProducts,
    addToCollection,
    getAll,
    getOne
}