const mongoose = require('mongoose')

const calanderModel = new mongoose.Schema({
    id: {
        type: "String"
    },
    title: {
        type: 'String'
    },
    start: {
        type: 'String'
    },
    end: {
        type: 'String'
    },
    description: {
        type: "String"
    },
    type: {},
    className: {
        type: 'String'
    }
})
module.exports = new mongoose.model('calender', calanderModel)


