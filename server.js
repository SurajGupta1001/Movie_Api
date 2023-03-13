const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectAdmin = require("./admin/admin")
const ejs = require('ejs')
const movieRoutes = require('./routes/movies.routes')
const tokenRoutes = require('./routes/auth.routes')

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')


const Movie = require('./models/movie.models')
const User = require('./models/user.models')

dotenv.config()

const app = express()

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database
})

const adminOptions = {
  rootPath: '/admin',
  resources: [Movie, User]
}

const admin = new AdminJS(adminOptions)

const DEFAULT_ADMIN = {
  email: 'developer@admin.com',
  password: '123'
}

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}


const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: 'AdminJS',
    cookiePassword: 'Secret'
  },
  null,
  {
    // store: mongoDB,
    resave: true,
    saveUninitialized: true,
    secret: 'Secret',
    name: 'adminjs'
  }
)
app.use(admin.options.rootPath, adminRouter)


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(morgan('tiny'))

// connectAdmin(app)

app.use(movieRoutes)
app.use(tokenRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT
const startServer = async () => {
  mongoose.set('strictQuery', true);
  const mongoDB = await mongoose.connect(process.env.MONGO_URI)
  console.log('Database connected')
  app.listen(port, () => {
    console.log('Server started at http://localhost:4000')
  })
}
startServer()
