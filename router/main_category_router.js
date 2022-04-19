const express = require('express');
const router = express.Router();

router.get('/main_category', (req,res)=>{
    res.send("Working on main category.");
});


module.exports = router;