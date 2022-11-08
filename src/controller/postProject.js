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
        price
    } = req.body;

    const file = req.files.logo
    const contract = req.files.contract

    console.log(req.files)
    console.log("real file" + file)



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
            if (packageType.toUpperCase() === 'BASIC') {
                postRemaining = '7', dollarRemaining = '20', price = 7500;
            }
            else if (packageType.toUpperCase() === 'STANDARD') {
                postRemaining = '15', dollarRemaining = '45', price = 14999
            }
            else if (packageType.toUpperCase() === 'PREMIUM') {
                postRemaining = '30', dollarRemaining = '100', price = 25999
            } else {
                postRemaining = getPackage?.postRemaining,
                    dollarRemaining = getPackage?.dollarRemaining,
                    price = getPackage?.price
            }
            new projectModel({
                customerName: customerName?.toUpperCase(),
                email: email?.toUpperCase(),
                contact: contact?.toUpperCase(),
                address: address?.toUpperCase(),
                packageType: packageType,
                billingCycle: billingCycle?.toUpperCase(),
                startDate: startDate?.toUpperCase(),
                endDate: endDate?.toUpperCase(),
                postRemaining: postRemaining,
                postDone: postDone,
                dollarRemaining: dollarRemaining,
                dollarSpent: dollarSpent,
                price: price,
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
                console.log(result)
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