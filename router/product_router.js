const express = require('express');
const router = express.Router();

router.get('/product', (req,res)=>{
    res.send({"message":"working on getting all products"});
});

module.exports = router;