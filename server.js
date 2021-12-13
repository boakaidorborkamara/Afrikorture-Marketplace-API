const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Afrikorture Marketplace');
  console.log(req.url);
})

app.get('/vendors', (req,res) =>{
    res.send("Loading vendors list.");
    console.log(req.url);
});

app.get('/shops', (req,res) =>{
    res.send("Loading shops list.");
    console.log(req.url);
});

app.get('/products', (req,res) =>{
    res.send("Loading products list.");
    console.log(req.url);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

