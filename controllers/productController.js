//Display listing of all existing products on GET
exports.product_list_get = (req,res)=>{
    res.send("Working on product listing");
};


//Display existing products by category on GET
exports.product_per_category_get = (req, res)=>{
    res.send("Working on getting products per category");
}


//Display details for a specific existing product on GET
exports.product_detail_get = (req, res)=>{
    res.send("Working on getting details for a specific product");
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




