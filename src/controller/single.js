const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");


const getSingleProject = async (req, res) => {

    const { customerName } = req.body;
    try {
        const result = await projectModel.findOne({ customerName });
        res.status(StatusCodes.OK).send({
            success: "true",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = getSingleProject;