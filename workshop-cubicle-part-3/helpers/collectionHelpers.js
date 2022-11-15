const products = require('../data/data.json');
const fs = require('fs/promises');
const uniqid = require('uniqid');

const allProducts = products.slice();

function getAll() {
     return products;
}

function getOneBySearch(querry) {
    let result = allProducts;

    if (querry.search) {

        result = allProducts.filter(x => x.name.toLowerCase().includes(querry.search.toLowerCase()));
    };

    if (querry.from) {
        result = result.filter(x => Number(x.difficultyLevel) >= Number(querry.from))
    };

    if (querry.to) {
        result = result.filter(x => Number(x.difficultyLevel) <= Number(querry.to))
    };

    return result;
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

    allProducts.push(newObj);

    return fs.writeFile(__dirname + '/../data/data.json', JSON.stringify(allProducts))
}

module.exports = {
    allProducts,
    addToCollection,
    getAll,
    getOne,
    getOneBySearch
}