const express = require('express');
const router = express.Router();

//main category controller
const main_category_Controller = require('../controllers/mainCategoryController')
router.get('/main_category', main_category_Controller.main_category_create );


module.exports = router;