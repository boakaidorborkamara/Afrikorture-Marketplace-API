//create database connection
const db = require('../db_config/db_config');


exports.main_category_get = function(req,res){
    db.all(
        `SELECT * FROM main_category`,(err,row)=>{
            if(err){
                console.log(err);
                return;
            }

            console.log(row);
            res.send(row);
        }
    )
}


exports.main_category_create = function(req,res){
    //create women category
    db.run(`
        INSERT INTO main_category (name)
        VALUES('Women');
    `,
        //get notify if data get inserted sucessfully
        (err)=>{
            if(err){
                console.err();
                return;
            }
            res.send({"message":"Category added!"});
            console.log("Main category added");
        }
    ); 

    //create men category
    db.run(`
        INSERT INTO main_category (name)
        VALUES('Men');
    `,
        //get notify if data get inserted sucessfully
        (err)=>{
            if(err){
                console.err();
                return;
            }
            res.send({"message":"Category added!"});
            console.log("Main category added");
        }
    );
    
    //create kids category
    db.run(`
        INSERT INTO main_category (name)
        VALUES('Women');
    `,
        //get notify if data get inserted sucessfully
        (err)=>{
            if(err){
                console.err();
                return;
            }
            res.send({"message":"Category added!"});
            console.log("Main category added"); 
        }
    ); 

};