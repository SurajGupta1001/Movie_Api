const mongoose = require('mongoose')
const User = require('../models/user.models')
const generateToken = require('../utils/generateToken')

module.exports.getLogin = async (req, res) => {
  res.render('login')
}

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body
  const User = User.find({
    email,
    password
  }).select('token');

  req.json()
}

module.exports.postRegister = async (req, res) => {
  const { email, password, username } = req.body
  const id = mongoose.Types.ObjectId()
  const user = await User.create({
    _id: id,
    email,
    password,
    username,
    token: generateToken(id)
  })

  res.json(user)
}
