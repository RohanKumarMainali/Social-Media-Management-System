const calanderModel = require("../../model/calender");

const updateCalender = async () => {
    try {
        const id = req.params.id;
        const result = await calanderModel.findByIdAndUpdate(id, req?.body)
        console.log(result)
        return res.status(StatusCodes.OK).send({
            message: "Calander has been updated sucessfully",
            data: result,
            success: true
        })

    } catch (error) {
        return res.send(error)
    }
}
module.exports = updateCalender;