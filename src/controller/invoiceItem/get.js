const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoiceItem');

const getInvoiceItem = async (req, res) => {

    try {
        const result = await invoiceModel.findOne({ invoice: req.params.id }).populate("invoice");
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

module.exports = getInvoiceItem;