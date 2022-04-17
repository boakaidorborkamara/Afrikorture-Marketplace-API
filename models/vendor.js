//create vendor table
const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../db_config/db_config');


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
    }
},
{
    freezeTableName:true,
    timestamps:false
})


// verify if Product model was created
console.log(Vendor === sequelize.models.Vendor);


module.exports ={Vendor};