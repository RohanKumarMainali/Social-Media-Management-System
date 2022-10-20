const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");

const deleteProject = async (req, res) => {
    const id = req.params.id
    try {
        const result = await projectModel.findByIdAndDelete(id);
        res.status(StatusCodes.OK).send({
            success: true,
            message: "Project has been deleted sucessfully"
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = deleteProject;