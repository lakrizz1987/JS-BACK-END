
const fs = require('fs/promises');
const uniqid = require('uniqid');
const CubeModel = require('../models/CubeSchema')

const products = CubeModel.find().lean();
const allProducts = products.slice();

async function getAll() {
     return await CubeModel.find().lean()
}

async function getOneBySearch(querry) {
    let result = await getAll();

    if (querry.search) {

        result = result.filter(x => x.name.toLowerCase().includes(querry.search.toLowerCase()));
    };

    if (querry.from) {
        result = result.filter(x => Number(x.difficultyLevel) >= Number(querry.from))
    };

    if (querry.to) {
        result = result.filter(x => Number(x.difficultyLevel) <= Number(querry.to))
    };

    return result;
}

async function getOne(id) {
    
    
    return await CubeModel.findById(id).lean();
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