const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectAdmin = require("./admin/admin")
const ejs = require('ejs')
const movieRoutes = require('./routes/movies.routes')
const tokenRoutes = require('./routes/auth.routes')
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(morgan('tiny'))

connectAdmin(app)

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
