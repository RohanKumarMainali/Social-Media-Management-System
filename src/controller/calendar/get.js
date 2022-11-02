const calanderModel = require('../../model/calender');
const {
    StatusCodes
} = require("http-status-codes");

const getCalendar = async (req, res) => {
    try {
        const result = await calanderModel.find();
        res.status(StatusCodes.OK).send({
            success: "true",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports = getCalendar;