const { Router } = require('express');

const AccessoryModel = require('../models/AccessorySchema')
const CubeModel = require('../models/CubeSchema');
const serviceManager = require('../helpers/collectionHelpers')
const authService = require('../helpers/authService');

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

router.post('/attach/:id', async (req, res) => {
    const product = await CubeModel.findById(req.params.id);
    const accesory = await AccessoryModel.findById(req.body.accessory);

    product.accessoaries.push(accesory);
    product.save();
    res.redirect(`/details/${req.params.id}`)
})

router.get('/details/:id', async (req, res) => {
    const cube = await serviceManager.getOne(req.params.id);
    const cubeAttachedAccessoaries = await serviceManager.getCubeAccessoaries(req.params.id)
    const accessoaries = await serviceManager.getAllAccessories(cubeAttachedAccessoaries.accessoaries);


    res.render('details', { cube, accessoaries, cubeAccessory: cubeAttachedAccessoaries.accessoaries })
});

router.get('/about', (req, res) => {

    res.render('about');
});

router.get('/accessories/create', (req, res) => {
    res.render('createAccessory')
})

router.post('/accessories/create', (req, res) => {
    const accesory = new AccessoryModel(req.body);

    accesory.save()
    res.redirect('/')
})

router.get('/register', (req, res) => {

    res.render('registerPage')
})

router.post('/register', async (req, res) => {
   
    try {
        const savedUser = await authService.registerUserToDb(req.body)
        res.render('loginPage');
    } catch(err) {
        res.render('registerPage', {err})
    }

})

router.get('/login', (req, res) => {
    res.render('loginPage')
})



module.exports = router;