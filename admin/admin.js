const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')

const {Movie} = require("../models/movie.models")
const Person = require("../models/person.model")
const User = require("../models/user.models")

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database
})

const adminOptions = {
  resources: [Movie,Person,User]
} 
const admin = new AdminJS(adminOptions)

const adminRouter = AdminJSExpress.buildRouter(admin)

const connectAdmin = app => {
  app.use(admin.options.rootPath, adminRouter)
}
module.exports = connectAdmin