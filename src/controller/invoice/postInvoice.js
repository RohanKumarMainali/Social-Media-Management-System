
const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice');

const postInvoice = async(req,res) =>{
    const  {
        date,
        recipient,
        package,
        email,
        status
    } =  req.body;
    try {
        const result = await new invoiceModel({
            date: date.toUpperCase(),
            recipient: recipient.toUpperCase(),
            package: package.toUpperCase(),
            email: email.toUpperCase(),
            status: status.toUpperCase(),
        });
        console.log(result);
        await result.save();
        return res.status(StatusCodes.OK).send({
            success: true,
            data: result,
        });
    } catch (error) {
        return res.status(StatusCodes.SERVICE_UNAVAILABLE).send({
            success: 'false',
            error: error.message, 
        })
    }

}

module.exports = postInvoice;