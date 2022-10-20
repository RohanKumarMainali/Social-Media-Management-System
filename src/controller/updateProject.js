const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");

const cloudinary = require('../config/cloudinary')

const updateProject = async (req, res) => {


    const id = req.params.id;
    const file = req?.files?.logo
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

        const result = await projectModel.findByIdAndUpdate(id, {
            customerName: req?.body?.customerName?.toUpperCase(),
            email:  req?.body?.email?.toUpperCase(),
            contact:  req?.body?.contact?.toUpperCase(),
            address:  req?.body?.address?.toUpperCase(),
            packageType:  req?.body?.packageType?.toUpperCase(),
            billingCycle:  req?.body?.billingCycle?.toUpperCase(),
            startDate:  req?.body?.startDate?.toUpperCase(),
            endDate: req?.body?.endDate?.toUpperCase(),
            contract: req?.body?.contract?.toUpperCase(),
            logo: {
                public_id: data.public_id,
                url: data.secure_url
            },
        })
        return res.status(StatusCodes.OK).send({
            message: "Project has been updated sucessfully",
            data: result,
            success: true
        })

    } catch (error) {
        return res.send(error)
    }

}

module.exports = updateProject;