//create main category table 
const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require('../db_config/db_config.js');

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

module.exports = {mainCategory};