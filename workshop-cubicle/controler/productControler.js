const { Router } = require('express');
const collectionManger = require('../helpers/collectionHelpers');

const router = Router();

router.get('/', (req, res) => {
    const products = collectionManger.getAll();
    console.log(products)
    res.render('home', { products: products })
});

router.get('/create', (req, res) => {
   
    res.render('create')
});

router.post('/create', (req, res) => {

    collectionManger.addToCollection(req.body)
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))

});

router.get('/details/:id', (req, res) => {
    res.render('details')
});

router.get('/about', (req, res) => {
    res.render('about')
});



module.exports = router;