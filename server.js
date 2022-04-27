//require modules
const express = require('express');
const cors = require('cors');


//connect to database
const db = require('./db_config/db_config');


//create express app
const app = express();
app.use(express.urlencoded({urlencoded:true}));
app.use(cors());



//port
const port = 3000 | process.env.PORT;

  
//ROUTES]
const index_router = require('./router/index_router');
const product_router = require('./router/product_router');
const vendor_router = require('./router/vendor_router');
const brand_router = require('./router/brand_router');
const main_category = require('./router/main_category_router');
const sub_category = require('./router/sub_category_router');

app.use(index_router);
app.use(product_router);
app.use(vendor_router);
app.use(brand_router);
app.use(main_category);
app.use(sub_category);


//notify which port server is listening on
app.listen(port, ()=>{
    console.log("Server is listening to " + port);
})

