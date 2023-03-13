const mongoose= require("mongoose");
const User = require("../models/user.models");
const generateToken = require("../utils/generateToken");

module.exports.postRegister = async (req, res) => {
  const { email, password, username } = req.body;
  const id = mongoose.Types.ObjectId();
  const user = await User.create({
    _id: id,
    email,
    password,
    username,
    token: generateToken(id)
  });

  res.json(user)
};
