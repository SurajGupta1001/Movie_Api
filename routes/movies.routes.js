const express = require("express");
const Movie = require("../models/movie.models");
const router = express.Router();

//  Incomplete
router.get("/movie/now_playing", async (req, res, next) => {
  const movie = await Movie.find({nowPlaying:true});
  res.json({
    data: movie
  });
});
router.get("/movie/latest", async (req, res, next) => {//not working
  const movie = await Movie.find().sort({ releaseDate: -1 }).limit(10);
  res.json(movie);
});

router.get("/movie/:movie_id", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id })
    .populate("cast.actor", "name biography -_id")
    .populate("crew.crewMember", "name biography -_id");
  res.json({ data: movie });
});

router.get("/movie/:movie_id/credits", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie_crew_cast = await Movie.find({ _id: movie_id })
    .select("crew cast")
    .populate("cast.actor", "name biography -_id")
    .populate("crew.crewMember", "name biography -_id");
  res.json({ movie_crew_cast });
});
router.get("/movie/:movie_id/images", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie_image = await Movie.find({ _id: movie_id }).select("image");
  res.json({
    image: movie_image,
  });
});
router.get("/movie/:movie_id/keywords", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie_keywords = await Movie.find({ _id: movie_id }).select("keywords");
  res.json({
    keywords: movie_keywords,
  });
});
router.get("/movie/:movie_id/recomendations", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie_recomendations = await Movie.findOne({ _id: movie_id }).populate(
    "recommendations", "title overview -_id"
  ).select('recommendations -_id');
  // const recommendations = movie_recomendations.recommendations.map((a) => {
  //   return { title: a.title, overview: a.overview };
  // });
  res.json({
    data: movie_recomendations,
  });
});
router.get("/movie/:movie_id/reviews", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie_reviews = await Movie.find({ _id: movie_id }).select('reviews.author reviews.content reviews.rating -_id');
  res.json({
    data: movie_reviews,
  });
});
router.get("/movie/:movie_id/similar", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({
    simalarMovies: movie.simalarMovies,
  });
});
router.get("/movie/:movie_id/videos", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({
    videos: movie.videos,
  });
});


router.get("/movie/popular", async (req, res, next) => {
  const movie = await Movie.find().sort();
  res.json();
});
router.get("/movie/top_rated", async (req, res, next) => {
  res.json();
});

router.get("/movie/upcoming", async (req, res, next) => {
  res.json();
});
module.exports = router;
