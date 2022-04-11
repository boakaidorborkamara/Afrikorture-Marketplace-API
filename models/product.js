
//create product table
const {Sequelize, DataTypes, model} = require('sequelize');
const {sequelize} = require('../db_config/db_config');


//tables with foreign keys references
const Brand = require('./brand');
const mainCategory = require('./main_category');
const subCategory = require('./sub_category');


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
    },
    brand_id:{
        type:DataTypes.INTEGER,

        references:{
            model:Brand,
            key:"id"
        }
    },
    mainCategory_id:{
        type:DataTypes.INTEGER,

        references:{
            model:mainCategory,
            key:"id"
        }
    },
    subCategory_id:{
        type:DataTypes.INTEGER,

        references:{
            model:subCategory,
            key:"id"
        }
    }
},
{ 
    freezeTableName: true,
    timestamps: false
})

// verify if Product model was created
console.log(Product === sequelize.models.Product);


//create product table from model
(async function(){
    await Product.sync({force:true})
    .catch(()=>{
        console.error();
    }) 

    // verify if Product module was created
    console.log("The table for the Product model was just (re)created!");
})();

module.exports = {Product};