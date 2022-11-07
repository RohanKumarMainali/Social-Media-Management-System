const packageModel = require('../../model/packageModel');
const {
    StatusCodes
} = require("http-status-codes");


const singlepackageGet = async (req, res) => {
    console.log(req.body)
    try {
        const result = await packageModel.findOne({ packagename: req.body.packagename }).exec();
        return res.status(StatusCodes.OK).send({
            data: result
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = singlepackageGet;