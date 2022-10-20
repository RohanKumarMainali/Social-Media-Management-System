const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI

const connectDB = async = () => {
    try {
        mongoose.connect(MONGO_URI).then(()=> {
            console.log('Database connected')
        })
    } catch (error) {
        console.log(error.message)
    }


}

module.exports = connectDB;