
const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice');

const postInvoice = async(req,res) =>{
    const  {
        recipient,
        date,
        status
    } =  req.body;
        const result =  new invoiceModel({
            recipient: recipient.toUpperCase(),
            date: date.toUpperCase(),
            status: status.toUpperCase(),
        });
        await result.save();
        return res.status(StatusCodes.OK).send({
            success: true,
            data: result,
        });

}

module.exports = postInvoice;