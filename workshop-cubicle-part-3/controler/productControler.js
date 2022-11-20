const { Router } = require('express');

const AccessoryModel = require('../models/AccessorySchema')
const CubeModel = require('../models/CubeSchema');
const serviceManager = require('../helpers/collectionHelpers')
const authService = require('../helpers/authService');

const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');


const router = Router();

router.get('/', async (req, res) => {
    const products = await serviceManager.getAll();

    res.render('home', { products: products });
});

router.get('/search', async (req, res) => {

    const filteredData = await serviceManager.getOneBySearch(req.query);

    res.render('home', { products: filteredData });
});

router.get('/create', isAuthenticated, (req, res) => {

    res.render('create')
});

router.post('/create', isAuthenticated, (req, res) => {
    const userId = req.user._id;
    const cube = new CubeModel({ ...req.body, creator: userId })

    cube.save()
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))

});

router.post('/attach/:id', isAuthenticated, async (req, res) => {
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

    let userIsOwner = null;
    if (req.user) {
        userIsOwner = cube.creator == req.user._id

    }

    res.render('details', {
        cube, accessoaries,
        cubeAccessory: cubeAttachedAccessoaries.accessoaries,
        userIsOwner
    })
});

router.get('/about', (req, res) => {

    res.render('about');
});

router.get('/accessories/create', isAuthenticated, (req, res) => {
    res.render('createAccessory')
})

router.post('/accessories/create', isAuthenticated, (req, res) => {
    const accesory = new AccessoryModel(req.body);

    accesory.save()
    res.redirect('/')
})

router.get('/register', isGuest, (req, res) => {

    res.render('registerPage')
})

router.post('/register', isGuest, async (req, res) => {

    try {
        const savedUser = await authService.registerUserToDb(req.body)
        res.render('loginPage');
    } catch (err) {
        res.render('registerPage', { err })
    }

})

router.get('/login', isGuest, (req, res) => {
    res.render('loginPage')
})

router.post('/login', isGuest, async (req, res) => {
    try {
        const token = await authService.loginUser(req.body);
        res.cookie('SESSION', token);
        res.redirect('/')
    } catch (error) {
        res.render('loginPage', { error })
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('SESSION');
    res.locals.user = {};
    res.locals.isLoged = false;
    res.redirect('/')
})

router.get('/edit/:productId', isAuthenticated, async (req, res) => {
    const cube = await serviceManager.getOne(req.params.productId);

    if (cube.creator != req.user._id) {

        res.redirect('/')
    } else {
        res.render('edit', cube)
    }

});

router.post('/edit/:id', isAuthenticated, async (req, res) => {

    await CubeModel.findByIdAndUpdate({ _id: req.params.id }, { ...req.body });
    res.redirect(`/details/${req.params.id}`)
});

router.get('/delete/:productId', isAuthenticated, async (req, res) => {
    const cube = await serviceManager.getOne(req.params.productId);
    if (cube.creator != req.user._id) {

        res.redirect('/')
    } else {

        res.render('delete', cube)
    }
});

router.post('/delete/:id', isAuthenticated, async (req, res) => {
    try {
        await CubeModel.findByIdAndDelete({ _id: req.params.id });

    } catch (error) {

        console.log(err)
    }
    
    res.redirect(`/`)
});



module.exports = router;