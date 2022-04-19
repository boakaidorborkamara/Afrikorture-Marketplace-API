const sqlite3 = require('sqlite3').verbose();

//connect to afrikorture database
const database = new sqlite3.Database('./marketplace.db', (err)=>{
    if(err){
        console.log(err);
        return;
    }

    //notify if the database is connected successfully
    console.log("Connected to Afrikorture Databae");
});


module.exports = database;