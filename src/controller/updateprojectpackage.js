const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");


const updateProjectPackage = async (req, res) => {
    const id = req.params.id;
    try {

        const result = await projectModel.findByIdAndUpdate(id, {
            postRemaining: req?.body?.postRemaining,
            postDone: req?.body?.postDone,
            dollarRemaining: req?.body?.dollarRemaining,
            dollarSpent: req?.body?.dollarSpent
        })
        return res.status(StatusCodes.OK).send({
            message: "Project has been updated sucessfully",
            data: result,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
    }

}

module.exports = updateProjectPackage;