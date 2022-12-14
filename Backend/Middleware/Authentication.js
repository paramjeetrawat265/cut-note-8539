require("dotenv").config();
const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.body.user_id = decoded.user_id;
    next();
  } catch (err) {
    res.send("Please login again");
  }
};
module.exports = {authentication};
