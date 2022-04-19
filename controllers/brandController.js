//Display listing of all brands.
exports.brand_list = (req, res)=>{
    res.send("Working on brand listing");
};

//Display details for specific brand.
exports.brand_detail = (req,res)=>{
    res.send("Working on specific brand details");
};

//Handle creation of a new brand on POST.
exports.brand_create = (req, res)=>{
    res.send("Working on creating a new brand");
};

//Handle Brand delete on POST.
exports.brand_delete = (req, res)=>{
    res.send("Working on deleting an existing brand");
}

//Handle Brand update on POST.
exports.brand_update = (req, res)=>{
    res.send("Working on updating an existing brand");
}
