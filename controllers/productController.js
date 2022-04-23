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

    //get user input
    let result;
    let categories = req.params;
    let main_category = req.params['main_category'];
    let sub_category = req.params['sub_category'];
    console.log(main_category,sub_category);

    //query database
    db.all(
        `SELECT * FROM product
         WHERE main_category = "${main_category}"
         AND sub_category = "${sub_category}"`,
        (err, row)=>{
            if(err){
                console.log(err);
                return;
            }
  
            result = row;
            res.send(result);

        }
    )

}


//Display details for a specific existing product on GET
exports.product_detail_get = (req, res)=>{
    //id of product selected by the user
    let product_id = req.params['id'];
    console.log(product_id);

    let product_details;

    // make query to the db 
    db.all(`
        SELECT * FROM product WHERE id = ${product_id}`
        ,
        (err, row)=>{
            if(err){
                console.log(err);
                return;
            }
            // result from the query 
            product_details = row;
            console.log(product_details);
            res.send(row);
        }
    )
};


//Handle creation of a new product on POST
exports.product_create_post = (req, res)=>{
    db.run(
        `INSERT INTO product(
            name,
            description,
            date_created,
            price,
            first_image,
            brand_id,
            main_category,
            sub_category
        )
        VALUES(
            "Kiah Slippers",
            "Made with leather",
            "Jan 15 2023",
            "50",
            "https://www.ipanemasouthafrica.com/images/large/ipanemasouthafrica/Ipanema%20Gadot%20Womens%20Brown%20Black%20San%20620_ZOOM.jpg",
            "1",
            "female",
            "footwear"
            )
        `
    )
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




