const { Router } = require('express');

const productControler = require('./controler/productControler');

const router = Router();

router.use('/', productControler);

router.get('*', (req,res)=>{
    res.render('404')
});

module.exports = router;