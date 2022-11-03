const calanderModel = require('../../model/calender');
const {
    StatusCodes
} = require("http-status-codes");


const updatecalander = async (req, res) => {

    try {
        var { title, start, end, type, description } = req?.body;
        const id = req.params.id;
        const result =  await calanderModel.findByIdAndUpdate(id, {
            title, start, end, type, description, className:type?.value
        })
        console.log(req.body)
        return res.status(StatusCodes.OK).send({
            message: "Project has been updated sucessfully",
            data: result,
            success: true
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }

}

module.exports = updatecalander;