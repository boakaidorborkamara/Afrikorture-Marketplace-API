const express = require('express');
const router = express.Router();


//Brand controller
const BrandController = require('../controllers/brandController');


//Get a list of the brands that are currently on the platform.
router.get('/brand', BrandController.brand_list);


//Get the details of a specific brand
router.get('/brand/:id', BrandController.brand_detail);


//Create a new brand
router.post('/brand/create', BrandController.brand_create);


//Update an existing brand
router.put('/brand/:id', BrandController.brand_update);



module.exports = router;