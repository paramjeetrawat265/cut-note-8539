const {UserModel} = require("../Models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const LoginController = () => async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});
  if (user) {
    const {name} = user;
    const hashed_password = user.password;
    const user_id = user._id;
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (err) {
        res.send({msg: "Something went wrong, try again later"});
      }
      if (result) {
        const token = jwt.sign({user_id}, process.env.SECRET_KEY);
        res.send({message: "Login successfull", token});
      } else {
        res.send({msg: "Login failed"});
      }
    });
  } else {
    res.send({msg: "User Not Found"});
  }
};

module.exports = {LoginController};
