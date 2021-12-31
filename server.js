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

// get all stores 
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

// get all products 
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

// creation of routes for women related products starts ------------------------------------
// get all women accessories 
app.get('/women-accessories', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "women" AND type = "accessories"`;

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

// get all women dresses and skirts
app.get('/women-dress-&-skirt', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "women" AND type = "dress-&-skirt"`;

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

// get all women trousers and pans 
app.get('/women-trouser-and-pant', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "women" AND type = "trouser"`;

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

// get all women footwear 
app.get('/women-foot-wear', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "women" AND type = "footwear"`;

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



// creation of routes for men related products starts ------------------------------------
// get all men accessories 
app.get('/men-accessories', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "men" AND type = "accessories"`;

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

// get all men trousers and pans 
app.get('/men-trouser-and-pant', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "men" AND type = "trouser"`;

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

// get all men footwear 
app.get('/men-foot-wear', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "men" AND type = "footwear"`;

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


// creation of routes for beauty related products starts ------------------------------------
// get all beauty accessories 
app.get('/beauty-accessories', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "beauty" AND type = "accessories"`;

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

// get all bath and body product 
app.get('/bath-and-body', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "beauty" AND type = "bath and body"`;

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

// get all hair care products 
app.get('/hair-care', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "beauty" AND type = "hair care"`;

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

// get all skin care products 
app.get('/skin-care', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "beauty" AND type = "skin care"`;

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


// creation of routes for apartment related products starts ------------------------------------
// get all men accessories 
app.get('/home-decoration', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "apartment" AND type = "home decoration"`;

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


// creation of routes for food related products starts ------------------------------------
// get all men accessories 
app.get('/snacks', (req,res) =>{
    // query the databae for all the shops 
    let sql = `SELECT * FROM products WHERE category = "eat" AND type = "snacks"`;

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



// create post routes post routes -------------------------------------------------
// add new store to database 
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

//add new product to database
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
        category,
        type)
       
        VALUES(?,?,?,?,?,?)`;
    
    db.run(
        sql_query,
        [data["store_id"],
        data["name"],
        data["description"],
        data["price"],
        data["category"],
        data["type"]],
        
        (err)=>{
            if(err){
                console.log(err);
                res.send({code: 1 , message:"Unsucessful, product not added!"});
            }
            else{
                console.log("sucessful");
                res.send({code: 0 , message:"Sucessful, product added!"});
            }
        })

})



//notify that the server is running------------------------------------------------
app.listen(port, () => {
  console.log(`Afrikorture app listening at http://localhost:${port}`);
});