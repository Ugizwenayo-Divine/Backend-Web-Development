const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.send("Welcome to Backend Part!!!");
});

module.exports = app;