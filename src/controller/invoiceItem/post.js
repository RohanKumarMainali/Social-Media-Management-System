const invoicetModel = require('../../model/invoiceItem');
const {
    StatusCodes
} = require("http-status-codes");


const invoiceItemPost = async (req, res) => {

    const {
        invoice, title, rate, quantity
    } = req.body;
    try {
        const result = new invoicetModel({
            invoice, title, rate, quantity
        })
        await result.save();
        console.log(result)
        return res.status(StatusCodes.OK).send({
            message: result
        })

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }

}

module.exports = invoiceItemPost;