const db = require('../db_config/db_config');

//Display listing of all existing products on GET
exports.product_list_get = (req,res)=>{

    let product_list; 

    // query database 
    db.all(`
    SELECT * FROM product
    `,
        (err,row)=>{
            if(err){
                console.log(err);
                return;
            }

            //store result after quering in a variable
            product_list = row;

            //send the data to the user
            res.send({"data":product_list});

            //see result in the backend
            console.log(product_list);
            console.log("Got product listing.")
        }
    )
};


//Display existing products by category on GET
exports.product_per_category_get = (req, res)=>{

    req.parma()
    res.send("Working on getting products per category");
}


//Display details for a specific existing product on GET
exports.product_detail_get = (req, res)=>{
    let product_id = req.parmas;
    let product_details;

    db.all(`
        SELECT * FROM products WHERE id ${product_id}
    `,
        (err, row)=>{
            if(err){
                console.log(err);
                return;
            }

            product_details = row;
            console.log(product_details);
            res.send(row);
        }
    )
};


//Handle creation of a new product on POST
exports.product_create_post = (req, res)=>{
    res.send("Working on creation of new products")
};


//Handle delete of an existing product on POST
exports.product_delete_post = (req, res)=>{
    res.send("Working on deleting an existing product");
};


//Handle update of an existing product on POST
exports.product_update_post = (req, res)=>{
    res.send("Working on updating of an existing product");
}




