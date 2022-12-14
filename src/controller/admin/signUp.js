const adminModel = require('../../model/admin.model');
const {
    StatusCodes
} = require("http-status-codes");
const bcryptjs = require('bcryptjs');

const signUp = async (req, res) => {
    const { email, password, passwordcheck } = req.body
    try {
        const user = await adminModel.findOne({ email });
        if (user != null) { return res.status(StatusCodes.BAD_REQUEST).json("Email is already register please use unique email") }
        console.log(req.body)
        if (password !== passwordcheck) {
            return res.status(StatusCodes.BAD_REQUEST).json('Password must be similar')
        }else{
            await bcryptjs.hash(password, 10, async (e, has_password) => {
                const _res = await new adminModel({
                    email, password: has_password
                })
                await _res.save()
                return res.status(StatusCodes.ACCEPTED).send({ message: 'User register sucessfully', success: true })
            })
        }
         
        
    } catch (error) {
        res.json(error)
    }
}

module.exports = signUp;