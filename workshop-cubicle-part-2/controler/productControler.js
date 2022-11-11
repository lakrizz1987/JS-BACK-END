const { Router } = require('express');

const AccessoryModel = require('../models/AccessorySchema')
const CubeModel = require('../models/CubeSchema');
const serviceManager = require('../helpers/collectionHelpers')

const router = Router();

router.get('/', async (req, res) => {
    const products = await serviceManager.getAll();

    res.render('home', { products: products });
});

router.get('/search', async (req, res) => {

    const filteredData = await serviceManager.getOneBySearch(req.query);

    res.render('home', { products: filteredData });
});

router.get('/create', (req, res) => {

    res.render('create')
});

router.post('/create', (req, res) => {
    const cube = new CubeModel(req.body)


    cube.save()
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))

});

router.get('/details/:id', async (req, res) => {
    const cube = await serviceManager.getOne(req.params.id);

    res.render('details', { cube })
});

router.get('/about', (req, res) => {

    res.render('about');
});

router.get('/accessories/create', (req, res) => {
    res.render('createAccessory')
})

router.post('/accessories/create',(req,res)=>{
    const accesory = new AccessoryModel(req.body);

    accesory.save()
    res.redirect('/')
})



module.exports = router;