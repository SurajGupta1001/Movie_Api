const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// const connectAdmin = require("./admin/admin")
dotenv.config();
const movieRoutes = require("./routes/movies.routes");
const authRoutes = require("./routes/auth.routes");
const Movie = require("./models/movie.models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

// connectAdmin(app)

app.get("/", (req, res) => {
  res.redirect(
    `https://documenter.getpostman.com/view/26319000/2s93JtS4et`
  );
});
app.use(movieRoutes);
app.use(authRoutes);

app.use(notFound);
// Global error handler
app.use(errorHandler);

const port = process.env.PORT;
const startServer = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected");
  app.listen(port, () => {
    console.log("Server started at http://localhost:4000");
  });
};
startServer();
