const { Router } = require('express');
const collectionManger = require('../helpers/collectionHelpers');
const querryString = require('querystring');

const router = Router();

router.get('/', (req, res) => {
    const products = collectionManger.getAll();
    
    res.render('home', { products: products })
});

router.get('/search', (req,res)=>{
   // const querryObj = querryString.parse(req.query)
    console.log(req.query.search)
    const filteredData = collectionManger.getOneByName(req.query.search);
    res.render('home', { products: filteredData })
})

router.get('/create', (req, res) => {
   
    res.render('create')
});

router.post('/create', (req, res) => {

    collectionManger.addToCollection(req.body)
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))

});

router.get('/details/:id', (req, res) => {
    const cube = collectionManger.getOne(req.params.id)
    res.render('details', {cube})
});

router.get('/about', (req, res) => {
    res.render('about')
});



module.exports = router;