//create main category table 
const {Sequelize, DataTypes, Model} = require("sequelize");
const {sequelize} = require('../db_config/db_config.js');

//create main category model
const mainCategory = sequelize.define('mainCategory', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.CHAR
    }
},
{
    freezeTableName: true,
    timestamps: false
});


// verify if main category module was created
console.log(mainCategory === sequelize.models.mainCategory);


//create table from model
(async function(){
    await mainCategory.sync({force:true})
    .catch(()=>{
        console.error();
    })

    // verify if Product module was created
    console.log("The table for the Main Category model was just (re)created!");
}())



module.exports = {mainCategory};