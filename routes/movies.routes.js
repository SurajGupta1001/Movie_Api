const express = require("express");
const Movie = require("../models/movie.models");
const movieController = require("../controller/movie.controller");
const { protect } = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/movies", protect, movieController.getAllMovies);

router.get("/movies/popular", protect, movieController.getPopularMovies);

router.get("/movies/now-playing", protect, movieController.getNowPlayingMovies);

router.get("/movies/upcoming", protect, movieController.getUpcomingMovies);

router.get("/movies/genres", protect, movieController.getAllGenres);

router.get("/movies/latest", protect, movieController.getLatestMovies);

router.get("/movies/keywords", protect, movieController.getAllKeywords);

router.get(
  "/movies/highest-grossing",
  protect,
  movieController.getHighestGrossingMovies
);

router.get("/movies/year/:year", protect, movieController.getMoviesByYear);

router.get(
  "/movies/keyword/:keyword_id",
  protect,
  movieController.getMoviesByKeyword
);

router.get(
  "/movies/genre/:genre_id",
  protect,
  movieController.getMoviesByGenre
);

router.get("/movies/:movie_id", protect, movieController.getMovieDetails);

router.get(
  "/movies/:movie_id/credits",
  protect,
  movieController.getMovieCredits
);

router.get("/movies/:movie_id/image", protect, movieController.getMovieImages);

router.get(
  "/movies/:movie_id/keywords",
  protect,
  movieController.getMovieKeywords
);

router.get(
  "/movies/:movie_id/recomendations",
  protect,
  movieController.getMovieRecommendation
);

router.get(
  "/movies/:movie_id/reviews",
  protect,
  movieController.getMovieReviews
);

router.get("/discover/movie", protect, movieController.getDiscoveredMovies);

module.exports = router;
