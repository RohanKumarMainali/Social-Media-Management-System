const mongoose = require('mongoose')

const packageModel = new mongoose.Schema({
    packagename: {
        type: 'String'
    },
    price: {
        type: 'String'
    },
    dollor: {
        type: 'String'
    },
    countType: {
        postcount: {
            type: Number,
            default: 0
        },
        videocount: {
            type: Number,
            default: 0
        }
    },
    postRemaining:{
        type:Number,
        default:0
    },
    priceRemaining:{
        type:Number,
        default:0
    },
    dollorRemaining:{
        type:Number,
        default:0
    },
    value: {
        type: 'String'
    },
    theme: {
        type: 'String'
    },
    label: {
        type: 'String'
    }
})
module.exports = new mongoose.model('package', packageModel)


