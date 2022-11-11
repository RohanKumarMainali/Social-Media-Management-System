const admin = require('../../model/admin.model');
const {
    StatusCodes
} = require("http-status-codes");

const getUser = async (req, res) => {
    try {
        const result = await admin.findOne({email:req.params.email});
        console.log(req.params)
        res.status(StatusCodes.OK).send({
            success: "true",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports = getUser;