const mongoose = require('mongoose');

const invoiceModel = new mongoose.Schema({
    date: "String",
    recipient: "String",
    package: "String",
    email: {
        type: 'String',
        required: [true, "Please enter your email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address",
        ],
    },

    status: 'String',

})

module.exports = new mongoose.model('invoice',invoiceModel);