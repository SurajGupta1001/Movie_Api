const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectAdmin = require("./admin/admin")
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("tiny"))

connectAdmin(app)

const port = process.env.PORT
const startServer = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected")
    app.listen(port,()=>{
        console.log("Server started at http://localhost:4000")
    })
}
startServer()