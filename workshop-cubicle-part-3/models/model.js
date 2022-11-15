const products = require('../data/data.json');
const fs = require('fs/promises');


class Model {
    
    save(){
        
        products.push(this)
        return fs.writeFile(__dirname + '/../data/data.json', JSON.stringify(products))
    }

    static getAll(){
        return products
    }

    static getOne(id){
        const searchedProduct = products.find(x => x.id === id);
        return searchedProduct;
    }

    static getOneBySearch(querry) {
        let result = products;
    
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
}

module.exports = Model;