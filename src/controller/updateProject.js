const projectModel = require('../model/project.model');
const {
    StatusCodes
} = require("http-status-codes");


const updateProject = async (req, res) => {

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
    } = req?.body;

    const id = req.params.id

    try {

        const result = new projectModel.findByIdAndUpdate(id, {
            customerName: customerName.toUpperCase(),
            email: email.toUpperCase(),
            contact: contact.toUpperCase(),
            address: address.toUpperCase(),
            packageType: packageType.toUpperCase(),
            billingCycle: billingCycle.toUpperCase(),
            startDate: startDate.toUpperCase(),
            endDate: endDate.toUpperCase(),
            contract: contract.toUpperCase(),
            logo: logo.toUpperCase(),
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