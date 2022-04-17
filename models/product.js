
//create product table
const {Sequelize, DataTypes, model} = require('sequelize');
const {sequelize} = require('../db_config/db_config');


//create product model
const Product = sequelize.define('Product', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    date_created:{
        type:DataTypes.DATE
    },
    price:{
        type:DataTypes.DOUBLE
    },
    image:{
        type:DataTypes.STRING
    }
    
},
{ 
    freezeTableName: true,
    timestamps: false
})

// verify if Product model was created
console.log(Product === sequelize.models.Product);


module.exports = {Product};