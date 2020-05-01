var express = require('express');
var router = express.Router();


router.get('/annasicecream',function(req,res,next){
    res.render('annasicecream',{title: 'Annas Ice-cream shop !'})
})

module.exports=router;