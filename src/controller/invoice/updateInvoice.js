
const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice');

const updateInvoice = async (req,res) =>{
    
    const id = req.params.id;

    try {
        const result = await invoiceModel.findByIdAndUpdate(id,{
            recipient: req?.recipient.toUpperCase(),
            date: req?.date.toUpperCase(),
            status: req?.status.toUpperCase(),
        })
        return res.status(StatusCodes.OK).send({
            success: true,
            message: "Invoice Updated Successfully"
        });
    } catch (error) {
        return res.send(StatusCodes.BAD_REQUEST).send({
            success: false,
            error: error.message
        });
    }
    
}

module.exports = updateInvoice;