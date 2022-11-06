const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice');

const getSingleInvoice = async (req,res) => {

    try {
        const result = await invoiceModel.findOne({id:req.params.id});
        return res.status(StatusCodes.OK).send({
            success: true,
            data: result
        })
    } catch (error) {
        return res.status(StatusCodes.SERVICE_UNAVAILABLE).send({
            success: false,
            message: error.message
        })
    }

}

module.exports = getSingleInvoice;