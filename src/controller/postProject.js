const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");


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
        contract,
        logo,
    } = req.body;


    try {

        const result =  new projectModel({
            customerName : customerName,
            email: email,
            contact: contact,
            address: address,
            packageType: packageType,
            billingCycle: billingCycle,
            startDate: startDate,
            endDate: endDate,
            contract: contract,
            logo: logo,
        })

        await result.save();
        return res.status(StatusCodes.OK).send({
            message: result
        })
        
    } catch (error) {
        return res.send(error)
    }

}

module.exports = postProject;