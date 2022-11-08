const packageModel = require('../../model/packageModel');
const {
    StatusCodes
} = require("http-status-codes");


const packageUpdate = async (req, res) => {

    try {
        const result = await packageModel.findByIdAndUpdate(req.params.id, req?.body)
        console.log(req.body)
        return res.status(StatusCodes.OK).send({
            message: result
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }

}

module.exports = packageUpdate;