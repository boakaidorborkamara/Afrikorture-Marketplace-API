const db = require('../db_config/db_config');

//Display listing of all brands.
exports.brand_list = (req, res)=>{
    // db.run(`
    //     SELECT * FROM product
    // `,
    //     (err)=>{
    //         if(err){
    //             console.log(err);
    //             return;
    //         }

    //         console.log("")
    //     }
    // )
};

//Display details for specific brand.
exports.brand_detail = (req,res)=>{
    res.send("Working on specific brand details");
};

//Handle creation of a new brand on POST.
exports.brand_create = (req, res)=>{
    console.log(req.body);
    console.log(req.url)
    res.send({send_data: req.body});
};

//Handle Brand delete on POST.
exports.brand_delete = (req, res)=>{
    res.send("Working on deleting an existing brand");
}

//Handle Brand update on POST.
exports.brand_update = (req, res)=>{
    res.send("Working on updating an existing brand");
}
