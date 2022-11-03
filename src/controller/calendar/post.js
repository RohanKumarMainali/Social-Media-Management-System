const calanderModel = require('../../model/calender');
const {
    StatusCodes
} = require("http-status-codes");

const postCalendar = async (req, res) => {


    var { id, title, start, end, type, description } = req.body;
    try {
        var result = new calanderModel({
            id,
            title,
            start,
            end,
            type,
            description,
            className: type?.value,
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