const express = require('express');
const bodyParser = require('body-parser');
const routerDb = require('./src/routes/routes');
const router = require('./src/routes/routesArray');
const port=3000;
const app = express();

app.use(bodyParser.json());
app.use('/family',routerDb);
app.get('/',(req,res)=>{
res.send("Welcome to Backend Part!!!");
});

app.use((err,req,res,next)=>{
    res.json(err);
    })
app.listen(port,()=>{
    console.log("well here");
});
module.exports = app;