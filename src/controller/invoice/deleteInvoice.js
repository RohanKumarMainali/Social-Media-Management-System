const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice')

const deleteInvoice = async (req,res) => {
    const id = req.params.id;

    try {
        const result = await invoiceModel.findByIdAndDelete(id);
        return res.status(StatusCodes.OK).send({
            success: true,
            message: 'Invoice deleted successfully!!! '
        })
    } catch (error) {
        return res.status(StatusCodes.SERVICE_UNAVAILABLE).send({
            success: false,
            error: error.message,
        });
    }
}

module.exports = deleteInvoice;