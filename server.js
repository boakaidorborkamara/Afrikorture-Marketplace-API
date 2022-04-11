//require modules
const express = require('express');


//create express app
const app = express();

// connect db 
const sequelize = require('./db_config/db_config');
const brand = require('./models/brand');
const main_category = require('./models/main_category');
const sub_category = require('./models/sub_category');
const product = require('./models/product');





//create port
const port = process.env.PORT || 3000;

//connect db

//enable parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



