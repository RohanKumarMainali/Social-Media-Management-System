const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");

const cloudinary = require('../config/cloudinary')

const updateProject = async (req, res) => {


    const id = req.params.id;
    const file = req?.files?.logo
    const contract = req?.files.contract

    try {
        const data = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'logo',
        }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log(docs)
            }
        })


        const contractData = await cloudinary.uploader.upload(contract.tempFilePath, {
            folder: 'contract',
        }, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log(docs)
            }
        })

        const result =  await projectModel.findByIdAndUpdate(id, {
            customerName: req?.body?.customerName.toUpperCase(),
            email: req?.body?.email.toUpperCase(),
            contact: req?.body?.contact.toUpperCase(),
            address: req?.body?.address.toUpperCase(),
            packageType: req?.body?.packageType.toUpperCase(),
            billingCycle: req?.body?.billingCycle.toUpperCase(),
            startDate: req?.body?.startDate.toUpperCase(),
            endDate: req?.body?.endDate.toUpperCase(),
            contract: {
                public_id: contractData.public_id,
                url: contractData.secure_url
            },
      
            logo: {
                public_id: data.public_id,
                url: data.secure_url
            },
        })
        console.log(result)
        return res.status(StatusCodes.OK).send({
            message: "Project has been updated sucessfully",
            data: result,
            success: true
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }

}

module.exports = updateProject;