const mongoose = require('mongoose')
const User = require('../models/user.models')
const generateToken = require('../utils/generateToken')
const nodemailer = require('nodemailer')

module.exports.getHome = (req, res, next) => {
  res.render('home', {
    message: ''
  })
}

module.exports.getDocs = (req, res) => {
  res.redirect(`https://documenter.getpostman.com/view/26319000/2s93JtS4et`)
}

module.exports.postRegister = async (req, res) => {
  const { email, password, username } = req.body

  const isAlreadyUser = await User.findOne({ email })
  if (isAlreadyUser) {
    return res.render('home', {
      message: 'User Already Register. Try Different Gmail.'
    })
  }

  // Saving Data
  const id = mongoose.Types.ObjectId()
  const token = generateToken(id)
  const user = await User.create({
    _id: id,
    email,
    password,
    username,
    token: token
  })

  // NodeMailer
  let transporter = nodemailer.createTransport({
    service: process.env.SERVICES,
    auth: {
      type: process.env.TYPE,
      user: process.env.USER,
      pass: process.env.PASS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  })

  let mailOptions = {
    from: `vikashraj041013@gmail.com`,
    to: `${email}`,
    subject: 'Nodemailer Project',
    text: `Your Token Is   ${token}`
  }

  transporter.sendMail(mailOptions, function (err, data) {
    // console.log(data)
    if (err) {
      return res.render('home', {
        message: err.message
      })
    } else {
      return res.render('home', {
        message: `Token has been sent to ${email}. Kindly Check`
      })
    }
  })
}
