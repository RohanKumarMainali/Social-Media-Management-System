const mongoose = require('mongoose');

const invoicItemeModel = new mongoose.Schema({
    invoice: {
        type: mongoose.Schema.Types.ObjectId, ref: "invoice"
    },
    title: "String",
    rate: "String",
    quantity: 'Number'
})

module.exports = new mongoose.model('invoicItemeModel', invoicItemeModel);