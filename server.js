//require modules
const express = require('express');


//create express app
const app = express();

// connect db 
const sequelize = require('./db_config/db_config');
const brand = require('./models/brand');
const mainCategory = require('./models/main_category');




//create port
const port = process.env.PORT || 3000;

//connect db

//enable parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



