
const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice');

const updateInvoice = async (req,res) =>{
    
    const id = req.params.id;

    try {
        const result = await invoiceModel.findByIdAndUpdate(id,{
            date:req?.body?.date,
            recipient: req?.body?.recipient,
            package: req?.body?.package,
            email: req?.body?.email,
            status: req?.body?.status,
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