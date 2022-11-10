const { Router } = require('express');
const collectionManger = require('../helpers/collectionHelpers');
const querryString = require('querystring');
const Cube = require('../models/cube')
const uniqid = require('uniqid');

const router = Router();

router.get('/', (req, res) => {
    const products = collectionManger.getAll();

    res.render('home', { products: products })
});

router.get('/search', (req, res) => {

    const filteredData = collectionManger.getOneBySearch(req.query);
    res.render('home', { products: filteredData })
});

router.get('/create', (req, res) => {

    res.render('create')
});

router.post('/create', (req, res) => {
    const cube = new Cube(uniqid(),
        req.body.name,
        req.body.description,
        req.body.imageUrl,
        req.body.difficultyLevel)
        
    cube.save()
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))

});

router.get('/details/:id', (req, res) => {
    const cube = collectionManger.getOne(req.params.id)
    res.render('details', { cube })
});

router.get('/about', (req, res) => {
    res.render('about')
});



module.exports = router;