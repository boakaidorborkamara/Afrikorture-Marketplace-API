//create brand table
const { Sequelize, DataTypes, Model } = require('sequelize');
const {sequelize} = require('../db_config/db_config.js');


//Create brand module
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


//verify that module was successfully created
console.log(Brand === sequelize.models.Brand);


//create table from module
(async function(){
    await Brand.sync({force:true})
    .catch(()=>{
        console.error();
    }) 

    // verify if Product module was created
    console.log("The table for the Brand model was just (re)created!");
})();


