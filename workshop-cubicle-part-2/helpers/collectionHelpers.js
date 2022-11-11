const AccessoryModel = require('../models/AccessorySchema')

const CubeModel = require('../models/CubeSchema')

const products = CubeModel.find().lean();

async function getAllAccessories() {
    return await AccessoryModel.find().lean();
}

async function getCubeAccessoaries(id) {
    return CubeModel.findById(id).populate('accessoaries').lean()
    
}

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



module.exports = {

    getAll,
    getOne,
    getOneBySearch,
    getAllAccessories,
    getCubeAccessoaries,
}