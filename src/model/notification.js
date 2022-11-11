const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
    notificationTitle: "String",
    notificationDescription: "String",
    date: "String"
})

module.exports = new mongoose.model('Notification', Notification);