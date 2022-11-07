const packageModel = require('../../model/packageModel');
const {
    StatusCodes
} = require("http-status-codes");


const packageGet = async (req, res) => {

    try {
        const result = await packageModel.find();
        return res.status(StatusCodes.OK).send({
            data: result
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = packageGet;