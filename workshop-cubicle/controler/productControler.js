const { Router } = require('express');
const collectionManger = require('../helpers/collectionHelpers');

const router = Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
    console.log(req.body)
    collectionManger.addToCollection(req.body)
    res.redirect('/')
});

router.get('/details/:id', (req, res) => {
    res.render('details')
});

router.get('/about', (req, res) => {
    res.render('about')
});



module.exports = router;