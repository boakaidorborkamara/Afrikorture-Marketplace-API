// include express 
const express = require('express');
const { concat } = require('methods');
const { all } = require('proxy-addr');
const app = express();

//create port
const port = process.env.PORT || 300;

//enable json to be use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cross browser orgin (cors) to avoid cors errrors
const cors = require('cors');
app.use(cors());

//include sqlite
const sqlite3 = require('sqlite3').verbose();


//open the mareketplace database
let db = new sqlite3.Database('marketplace.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the mareketplace database.');
  });



//create get routes
app.get('/', (req,res) =>{
  
        res.send(JSON.stringify({
          welcome_message: "Welcome to Afrikorture Marketplace API",
          get_all_vendors: "/vendors",
          get_all_products: "/products",
          get_all_stores: "/stores"}));
    
});

app.get('/vendors', (req,res) =>{

    //query the database
    let sql = 'SELECT * FROM vendors';
    db.all(sql,[],(err,rows)=>{
        if(err){
            throw(err);
        }

        //send database result to the frontend
        let all_vendors = rows;
        res.send(JSON.stringify(all_vendors));

    })
    
});

app.get('/stores', (req,res) =>{
    // query the databae for all the shops 
    let sql = 'SELECT * FROM stores';
    db.all(sql,[],(err,rows)=>{
        if(err){
            throw(err);
        }

        // send the result to the frontend 
        let all_shops = rows;
        res.send(JSON.stringify(all_shops));
        console.log(all_shops);
    })
});

app.get('/products', (req,res) =>{
     // query the databae for all the shops 
     let sql = 'SELECT * FROM products';
     db.all(sql,[],(err,rows)=>{
         if(err){
             throw(err);
         }
 
         // send the result to the frontend 
         let all_products = rows;
         res.send(JSON.stringify(all_products));
         console.log(all_products);
     })
});



// creat post routes 
app.post('/vendors', (req,res)=>{
    
    let data = req.body;
    console.log(data);
    // res.send('Got a POST request');

    let sql = `INSERT INTO vendors(name) VALUES(?)`;
    db.run(sql,data["name"],(err)=>{

        if(err){
            console.log(err);
            res.send(
                {ErrorCode: 1, ErrorMessage: "Unsucessful, vendor not added!"}
            );
        }
        else{
            console.log("Vendor was added sucessfully!");
            res.send({code: 1 , message: "Vendor was added sucessfully!"});
        }
        
    })
});

app.post('/stores', (req,res)=>{
    //get user data from frontend
    let data = req.body;
    console.log(data);

    // insert user data into the database
    //store query statment in a variable
    let sql_query = `INSERT INTO stores( 
        name,
        address,
        county,
        phone_number,
        email,
        store_description,
        vendor_id)
        VALUES(?,?,?,?,?,?,?)`;

    //add the user data to the dabase
    db.run(
        sql_query,
        [data["name"],
        data["address"],
        data["county"],
        data["phone_number"],
        data["email"],
        data["store_description"],
        data["vendor_id"]],

        //see error if the data wasn't added to the database sucessfully.
        (err)=>{
        if(err){
            console.log(err);
            res.send({code: 1 , message:"Unsucessful, store not created!"});
        }
        else{
            console.log("sucessful");
            res.send({code: 0 , message:"Sucessful, store was created!"});
        }
    });
    
})

app.post('/products',(req,res)=>{
    //get user data from fronend
    let data = req.body;
    console.log(data);

    // insert user data into the database
    //store query statment in a variable
    let sql_query = `INSERT INTO products( 
        store_id,
        name,
        description,
        price,
        category)
       
        VALUES(?,?,?,?,?)`;
    
    db.run(
        sql_query,
        [data["store_id"],
        data["name"],
        data["description"],
        data["price"],
        data["category"]],
        
        (err)=>{
            if(err){
                console.log(err);
                res.send({code: 1 , message:"Unsucessful, product not added!"});
            }
            else{
                console.log("sucessful");
                res.send({code: 0 , message:"Sucessful, product not added!"});
            }
        })

})



//notify that the server is running
app.listen(port, () => {
  console.log(`Afrikorture app listening at http://localhost:${port}`);
});