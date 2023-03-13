// const AdminJS = require('adminjs')
// const AdminJSExpress = require('@adminjs/express')
// const AdminJSMongoose = require('@adminjs/mongoose')
// const dotenv = require('dotenv')
// const Movie = require('../models/movie.models')
// const User = require('../models/user.models')
// const { default: mongoose } = require('mongoose')
// const bodyParser = require('body-parser')
// const express = require('express')
// dotenv.config()
// AdminJS.registerAdapter({
//   Resource: AdminJSMongoose.Resource,
//   Database: AdminJSMongoose.Database
// })

// const adminOptions = {
//   rootPath: '/admin',
//   resources: [Movie, User]
// }

// const admin = new AdminJS(adminOptions)

// const DEFAULT_ADMIN = {
//   email: 'developer@admin.com',
//   password: '123'
// }
// const authenticate = async (email, password) => {
//   if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//     return Promise.resolve(DEFAULT_ADMIN)
//   }
//   return null
// }
// let mongoDB
// // ;(async () => {
// //   mongoose.set('strictQuery', true)
// //   mongoDB = await mongoose.connect(process.env.MONGO_URI)
// // })()

// const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
//   admin,
//   {
//     authenticate,
//     cookieName: 'AdminJS',
//     cookiePassword: 'Secret'
//   },
//   null,
//   {
//     // store: mongoDB,
//     resave: true,
//     saveUninitialized: true,
//     secret: 'Secret',
//     name: 'adminjs'
//   }
// )

// const connectAdmin = app => {
//   app.use(admin.options.rootPath, adminRouter)
//   app.use(express.json())
//   app.use(express.urlencoded({ extended: false }))
// }
// module.exports = connectAdmin
