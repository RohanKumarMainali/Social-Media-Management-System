const notification = require('../../model/notification');
const {
    StatusCodes
} = require("http-status-codes");

const getNotification = async (req,res) =>{
    try {
        const result = await notification.find();
        res.status(StatusCodes.OK).send({
            success: "true",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = getNotification;