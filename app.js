// import packages

require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/project')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileupload = require('express-fileupload'); 

// server config
const app = express();
const PORT = 8000;
const connectDB = require('./src/utils/DB/db')


// database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileupload({useTempFiles: true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',routes);

// listen port

app.listen(PORT, ()=>{
    console.log(`I am listening to http://localhost:${PORT}`);
})