const mongoose = require('mongoose')

const packageModel = new mongoose.Schema({
    packagename: {
        type: 'String'
    },
    price: {
        type: Number,
        default: 0
    },
    // countType: {
    //     postcount: {
    //         type: Number,
    //         default: 0
    //     },
    //     videocount: {
    //         type: Number,
    //         default: 0
    //     }
    // },
    postRemaining: {
        type: Number,
        default: 0
    },
    dollarRemaining: {
        type: Number,
        default: 0
    }
})
module.exports = new mongoose.model('package', packageModel)


