const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");

const cloudinary = require('../config/cloudinary')

const packageModel = require("../model/packageModel")

const postProject = async (req, res) => {

    let {
        customerName,
        email,
        contact,
        address,
        packageType,
        billingCycle,
        startDate,
        endDate,
        postRemaining,
        postDone,
        dollarRemaining,
        dollarSpent,
    } = req.body;

    const file = req.files.logo
    const contract = req.files.contract

    console.log(req.files)
    console.log("real file" + file)

    if (packageType.toUpperCase() === 'BASIC') postRemaining = '7', dollarRemaining = '20';
    else if (packageType.toUpperCase() === 'STANDARD') postRemaining = '15', dollarRemaining = '45';
    else if (packageType.toUpperCase() === 'PREMIUM') postRemaining = '30', dollarRemaining = '100';


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

        packageModel.findOne({ packagename: req.body.packageType }).then((getPackage) => {
            console.log(getPackage)
            new projectModel({
                customerName: customerName?.toUpperCase(),
                email: email?.toUpperCase(),
                contact: contact?.toUpperCase(),
                address: address?.toUpperCase(),
                packageType: req.body.packageType ? req.body.packageType.toUpperCase() : packageType?.toUpperCase(),
                billingCycle: billingCycle?.toUpperCase(),
                startDate: startDate?.toUpperCase(),
                endDate: endDate?.toUpperCase(),
                postRemaining: req.body.packageType ? getPackage?.postRemaining : postRemaining?.toUpperCase(),
                postDone: req.body.packageType ? getPackage?.countType?.postcount : postDone?.toUpperCase(),
                dollarRemaining: req.body.packageType ? getPackage?.dollorRemaining : dollarRemaining?.toUpperCase(),
                dollarSpent: req.body.packageType ? getPackage?.dollorRemaining - getPackage?.dollor : dollor?.toUpperCase(),
                contract: {
                    public_id: contractData.public_id,
                    url: contractData.secure_url
                },
                logo: {
                    public_id: data.public_id,
                    url: data.secure_url
                },
            }).save().then((result) => {
                res.status(StatusCodes.OK).send({
                    message: result
                })
            }).catch(e => {
                console.log(e)
            })
        }).catch(e => {
            console.log(e)
        })


    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }

}

module.exports = postProject;