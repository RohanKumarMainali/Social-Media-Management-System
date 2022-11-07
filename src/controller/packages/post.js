const packageModel = require('../../model/packageModel');
const {
    StatusCodes
} = require("http-status-codes");


const packagePost = async (req, res) => {

    try {
        const result = new packageModel(req.body)
        await result.save();
        return res.status(StatusCodes.OK).send({
            message: result
        })

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }

}

module.exports = packagePost;