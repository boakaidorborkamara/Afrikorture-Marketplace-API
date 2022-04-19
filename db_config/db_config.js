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


//create Tables
database.serialize(()=>{
    //Product table
    database.run(`
        CREATE TABLE IF NOT EXISTS product (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name STRING NOT NULL,
            description STRING ,
            date_updated DATE,
            price FLOAT,
            first_image STRING,
            second_image STRING,
            third_image STRING,
            brand_id INTEGER,
            main_category INTEGER,
            sub_category INTEGER,

            FOREIGN KEY(brand_id)
                REFERENCES brand(id)
                
            FOREIGN KEY(main_category)
                REFERENCES main_category(id)

            FOREIGN KEY(sub_category)
                REFERENCES sub_category(id) 
        )
    `);

    //Vendor table
    database.run(`
        CREATE TABLE IF NOT EXISTS vendor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name STRING NOT NULL,
            middle_name STRING NOT NULL,
            last_name STRING NOT NULL,
            email STRING,
            phone STRING NOT NULL,
            profile_image STRING,
            dob DATE
        )
    `);

    //Brand table
    database.run(`
        CREATE TABLE IF NOT EXISTS brand (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name STRING NOT NULL,
            description STRING NOT NULL,
            county STRING NOT NULL,
            location STRING NOT NULL,
            email STRING NOT NULL,
            logo STRING,
            phone STRING,
            website STRING,
            facebook_page STRING,
            instagram_page STRING
        )
    `);

    //main category
    database.run(`
        CREATE TABLE IF NOT EXISTS main_category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name STRING
        )
    `);

    database.run(`
        CREATE TABLE IF NOT EXISTS sub_category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name STRING
        )
    `);
})

module.exports = database;