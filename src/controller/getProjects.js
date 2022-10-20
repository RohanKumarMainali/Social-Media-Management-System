const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");

const getProject = async (req,res) =>{
    try {
        const result = await projectModel.find();
        res.status(StatusCodes.OK).send({
            success: "true",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = getProject;