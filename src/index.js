// import packages

require('dotenv').config();
const express = require('express')

// server config
const app = express();
const PORT = 8000;

//middlewares

app.get('/',(req,res)=>res.send('Hello world'));

// listen port

app.listen(PORT, ()=>{
    console.log(`I am listening to http://localhost:${PORT}`);
})