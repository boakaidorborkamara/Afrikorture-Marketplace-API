const express = require('express');
const router = express.Router();

router.get('/vendor', (req,res)=>{
    res.send("Working on getting all vendors");
});


module.exports = router;


