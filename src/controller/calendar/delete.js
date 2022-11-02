const calanderModel = require("../../model/calender");

const deleteCalender = async () => {
    try {
        const id = req.params.id;
        const result = await calanderModel.findByIdAndDelete(id);
        return res.status(StatusCodes.OK).send({
            message: "Calander has been deleted sucessfully",
            success: true
        })
    } catch (error) {
        return res.send(error)
    }
}
module.exports = deleteCalender;