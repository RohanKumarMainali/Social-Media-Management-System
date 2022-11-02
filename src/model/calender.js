const mongoose = require('mongoose')

const calanderModel = new mongoose.Schema({
    title: {
        type: 'String'
    },
    startDate: {
        type: 'String'
    },
    endDate: {
        type: 'String'
    },
    startTime:{
        type:'String'
    },
    endTime:{
        type:'String'
    },
    description: {
        type: "String"
    },
    category: {}
})
module.exports = new mongoose.model('calender', calanderModel)


