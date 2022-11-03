const adminModel = require('../../model/admin.model');
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const auth = require("../../middleware/auth")

var adminAttemptCount = 0, blockEmail;

const LOGIN = async (req, res) => {
  let { email, password } = req.body;

  console.log(req.body)
  //uid validation
  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(StatusCodes.UNAUTHORIZED).send("Client side validation issues. Please carefully send the right format of email and password !!")
  }

  // excess attempt check
  if (adminAttemptCount > 4 && blockEmail === email) {
    return res.status(StatusCodes.FORBIDDEN).send({
      message: 'You exceed the 5 login attempt. Please try again after 5 min !!',
    });
  }

  //database mapping
  try{
    const data = await adminModel.find({ email: email})

    if (data !==undefined ) {
      //compare encrypt password
      const isMatched = await data[0].matchPassword(password);
      if(!isMatched){
        return res.status(StatusCodes.UNAUTHORIZED).send({
          success: false,
          message: "Email or Password didn't matched"
        })
      }

      const { accessToken, refreshToken } = auth.GenerateJWT(email);
      return res.status(200).send({
        message: 'Login succesfully.',
        email: email,
        scope: "teacher",
        accessToken: accessToken,
        refreshToken: refreshToken
      })
    } else {
      //increase the wrong email counter by 1
      adminAttemptCount++;
      //if email counter reach 5, then store the cache
      if (adminAttemptCount === 5) {
        blockEmail = email;
        setTimeout(() => {
          //reset the attemptCount after 5 minutes
          adminAttemptCount = 0;
          blockEmail = null;

          console.log(`${email} you can login. => ${adminAttemptCount}`);
        }, 300000);
      }
      return res.status(StatusCodes.UNAUTHORIZED).send('Wrong email or password !!');
    }
  }catch(err){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: err.message
    })
  }
}

module.exports = LOGIN;
