
const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const invoiceModel = require('../../model/invoice');
const projectModel = require('../../model/project.model');
const { mail } = require('../../utils/mail')

const postInvoice = async (req, res) => {
    const {
        recipient,
        date,
        status
    } = req.body;
    console.log(req.body)
    const result = new invoiceModel({
        recipient: recipient.toUpperCase(),
        date: date.toUpperCase(),
        status: status.toUpperCase(),
    });
    await result.save();

    if (result) {
        var project = await projectModel.findOne({ custometName: recipient })
        mail().sendMail({
            from: process.env.HOST,
            to: project.email,
            subject: "Invoice Regarding",
            html: `<p style="text-align:center; font-size:16px;"> Dear ${recipient} your invoice has been created.</p>`
        })
    }
    return res.status(StatusCodes.OK).send({
        success: true,
        data: result,
    });

}

module.exports = postInvoice;