const { Router } = require("express");
const movieController = require("../controller/movie.controller");
const router = Router();

router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);


module.exports = router;
