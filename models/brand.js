//create brand table
const { Sequelize, DataTypes, Model } = require('sequelize');
const {sequelize} = require('../db_config/db_config.js');


//Create brand model
const Brand = sequelize.define('Brand', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    county:{
        type:DataTypes.STRING
    },
    location:{
        type: DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    logo:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    },
    website_url:{
        type:DataTypes.STRING
    },
    facebook_url:{
        type:DataTypes.STRING
    },
    instagram_url:{
        type:DataTypes.STRING
    }
},
{ 
    freezeTableName: true,
    timestamps: false
});

//Brand Association
function brandAssociation(model_name){
    Brand.hasOne(model_name.id);
}


//verify that model was successfully created
console.log(Brand === sequelize.models.Brand);



module.exports = {Brand, brandAssociation}
