// include express 
const express = require('express');
const { concat } = require('methods');
const { all } = require('proxy-addr');
const app = express();

//create port
const port = process.env.PORT || 3000;

//enable json to be use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cross browser orgin (cors) to avoid cors errrors
// const cors = require('cors');
// app.use(cors());

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
          get_all_products: "/products",
          get_all_stores: "/stores"}));
    
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



// create post routes 
app.post('/stores', (req,res)=>{
    //get user data from frontend
    let data = req.body;
    console.log(data);

    // insert user data into the database
    //store query statment in a variable
    let sql_query = `INSERT INTO stores( 
        first_name,
        last_name,
        user_name,
        email,
        store_name,
        store_address,
        county,
        phone_number,
        social_media_link)

        VALUES(?,?,?,?,?,?,?,?,?)`;

    //add the user data to the dabase
    db.run(
        sql_query,
        [   data["first_name"],
            data["last_name"],
            data["user_name"],
            data["email"],
            data["store_name"],
            data["store_address"],
            data["county"],
            data["phone_number"],
            data["social_media_link"]],

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