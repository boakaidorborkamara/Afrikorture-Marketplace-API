//create vendor table
const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../db_config/db_config');

//model for foreign key
const Brand = require('./brand');
const Product = require('./product');


// define model for Vendor 
const Vendor = sequelize.define('Vendor', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type:DataTypes.CHAR
    },
    middle_name: {
        type:DataTypes.CHAR
    },
    last_name: {
        type:DataTypes.CHAR
    },
    email:{
        type: DataTypes.CHAR
    },
    phone:{
        type: DataTypes.CHAR
    },
    profile_image:{
        type: DataTypes.CHAR
    },
    date_of_birth:{
        type:DataTypes.DATEONLY
    },
    brand_id:{
        type:DataTypes.INTEGER,

        references:{
            model:Brand,
            key: "id"
        }
    }
},
{
    freezeTableName:true,
    timestamps:false
})


// verify if Product module was created
console.log(Product === sequelize.models.Product);


(async function(){
    await Vendor.sync({force:true})
    .catch(()=>{
        console.error();
    })

    console.log("The table for the Vendor model was jus (re)created!");
})();


module.exports ={Vendor};