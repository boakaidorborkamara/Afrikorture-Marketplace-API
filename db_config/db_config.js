//connect database
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './marketplace.db'
});


//check for error while connecting the database
sequelize.authenticate()
.then(
    console.log("Database connection has been established.")
)
.catch((err)=>{
    if(err){
        console.error('Unable to connect to the database:', error);
    }
})
.finally(()=>{
    sequelize.close();
});


// export the sequelize function 
module.exports = {
    sequelize
}