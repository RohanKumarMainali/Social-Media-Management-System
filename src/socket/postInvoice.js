const invoice = require("../model/invoice")
const Notification = require("../model/notification")

module.exports = function (io) {
    io.on("connect", function (socket) {
        // console.log(socket.id)
        // 
        socket.on("sendInvoice", async (data) => {
            if (data) {
                const inovice = new invoice(data)
                inovice.save().then(function (responce) {
                    socket.local.emit("notificationInvoice", {
                        notificationTitle: "Title",
                        notificationDescription: "Admin just posted a invoice"
                    })
                    new Notification({
                        notificationTitle: "Title",
                        notificationDescription: "Admin just posted a invoice",
                    }).save()
                }).catch(e => {
                    console.log(e);
                })
            }
        })
    })

}