const { UserModel } = require("../Models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SignupController = () => async (req, res) => {

    const { name, email, password } = req.body

    const isUser = await UserModel.findOne({ email })
    if (isUser) {
        res.send({ "msg": "User already exists, try logging in" })
    }
    else {
        bcrypt.hash(password, 4, async function (err, hash) {
            if (err) {
                res.send({ "msg": "Something went wrong, please try again later" })
            }
            const new_user = new UserModel({
                name,
                email,
                password: hash
            })
            try {
                await new_user.save()
                res.send({ "msg": "Sign up successfull" })
            }
            catch (err) {
                res.send({ "msg": "Something went wrong, please try again" })
            }
        });
    }
}

module.exports={SignupController}
