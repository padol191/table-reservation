const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    console.log(token);
    const decoded = jwt.verify(token, "secrettoken");

    req.restaurant = decoded.restaurant;
    next();
  } catch (err) {
    console.log(err);
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
