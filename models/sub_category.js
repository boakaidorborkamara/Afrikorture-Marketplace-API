//create sub category table
const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../db_config/db_config');


const subCategory = sequelize.define('subCategory', {
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


// verify if sub Category model was created
console.log(subCategory === sequelize.models.subCategory);

(async function(){
    await subCategory.sync({force:true})
    .catch(()=>{
        console.error();
    })

    console.log("The table for Sub Category model was just (re) created!")
}());

module.exports = { subCategory};