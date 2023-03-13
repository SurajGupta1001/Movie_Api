const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const User = require("../models/user.models");
const asyncHandler = require('express-async-handler')
module.exports.protect = asyncHandler(async (req, res, next) => {
  const apiKey = req.headers?.api_key
  if (apiKey) {
    try {
      const decoded = jwt.verify(apiKey, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.id).select("-password -apiKey");
      next();
    } catch (err) {
      res.status(401);
      res.json({ message: "Not Authorized" });
    }
  } else {
    res.json({ message: "Token Not found" });
  }
});
