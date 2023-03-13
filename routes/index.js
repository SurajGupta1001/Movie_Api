const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();
const movieRoutes = require("./movies.routes")

router.use("/movie", protect, movieRoutes)


module.exports = router;