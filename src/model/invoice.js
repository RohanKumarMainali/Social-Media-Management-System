const mongoose = require('mongoose');

const invoiceModel = new mongoose.Schema({
    recipient: "String",
    status: "String",
    date: "String",
})

module.exports = new mongoose.model('invoice',invoiceModel);