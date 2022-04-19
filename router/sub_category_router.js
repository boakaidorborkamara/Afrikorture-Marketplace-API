const express = require('express');
const router = express.Router();

router.get('/sub_category',(req,res)=>{
    res.send('Working on sub category');
});


module.exports = router;