const express = require('express');
const router = express.Router();


//controller
const indexController = require('../controllers/indexController');
//Home page
router.get('/', indexController);


module.exports = router;