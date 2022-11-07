const invoicetModel = require('../../model/invoiceItem');
const {
    StatusCodes
} = require("http-status-codes");


const invoiceItemUpdate = async (req, res) => {

    const {
        invoice, title, rate, quantity
    } = req?.body;
    console.log(req.body)
    try {
        const result = await invoicetModel.findByIdAndUpdate(req.params.id, {
            invoice, title, rate, quantity
        })
        return res.status(StatusCodes.OK).send({
            message: result
        })

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }

}

module.exports = invoiceItemUpdate;