const express = require('express');
const router = express.Router();


//PRODUCT CONTROLLERS
const productController = require('../controllers/productController');


//Display all of the products that are currently on the platform GET
router.get('/product', productController.product_list_get);


//Display details about a specific product on GET
router.get('/product/:id', productController.product_detail_get);


//Display all products base on a specific category GET
router.get('/product/:main_category/:sub_category', productController.product_per_category_get);


//Display details about a specific product on GET
router.get('/product/:id', productController.product_detail_get);


//Create a new poduct on POST
router.post('/product', productController.product_create_post);


//Delete an existing product on POST
router.post('/product/:id', productController.product_delete_post);


//Update the details of an existing product on POST
router.put('/product/:id', productController.product_update_post);




module.exports = router;