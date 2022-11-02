const calanderModel = require('../../model/calender');
const {
    StatusCodes
} = require("http-status-codes");

const postCalendar = async (req, res) => {


    var { title, startDate, endDate, startTime, endTime, category, description } = req.body;
    try {
        var result = new calanderModel({
            title,
            startDate,
            endDate,
            startTime,
            endTime,
            category,
            description
        })
        result.save();
        console.log(req.body)
        return res.status(StatusCodes.OK).send({
            message: result
        })
    } catch (error) {
        return res.send(error)
    }

}

module.exports = postCalendar;