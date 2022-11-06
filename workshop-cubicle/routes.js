const { Router } = require('express');

const productControler = require('./controler/productControler');
const aboutControler = require('./controler/aboutControler');

const router = Router();

router.use('/about', aboutControler);
router.use('/', productControler);

router.get('*', (req,res)=>{
    res.render('404')
});

module.exports = router;