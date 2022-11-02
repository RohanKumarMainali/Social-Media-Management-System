const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");

const cloudinary = require('../config/cloudinary')


const postProject = async (req, res) => {

    const {
        customerName,
        email,
        contact,
        address,
        packageType,
        billingCycle,
        startDate,
        endDate,
    } = req.body;

    const file = req.files.logo
    const contract = req.files.contract

    console.log(req.files)
    console.log("real file" +file)

    try {

        // for logo image

        const data = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'logo',
        }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("success file")
            }
        })

        const contractData = await cloudinary.uploader.upload(contract.tempFilePath, {
            folder: 'contract',
        }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log("success contract")
            }
        })

        const result = new projectModel({
            customerName: customerName?.toUpperCase(),
            email: email?.toUpperCase(),
            contact: contact?.toUpperCase(),
            address: address?.toUpperCase(),
            packageType: packageType?.toUpperCase(),
            billingCycle: billingCycle?.toUpperCase(),
            startDate: startDate?.toUpperCase(),
            endDate: endDate?.toUpperCase(),
            contract: {
                public_id: contractData.public_id,
                url: contractData.secure_url
            },
            logo: {
                public_id: data.public_id,
                url: data.secure_url
            },
        })

        await result.save();
        return res.status(StatusCodes.OK).send({
            message: result
        })

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }

}

module.exports = postProject;