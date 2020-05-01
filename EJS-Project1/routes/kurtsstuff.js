var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('kurtsflowershop',{title: 'Kurts Flower Shop'})
});



module.exports=router;