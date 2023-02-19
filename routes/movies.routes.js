const express = require("express");
const Movie = require("../models/movie.models");
const router = express.router();

router.get("/movie/:movie_id", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({data:movie});
});

router.get("/movie/:movie_id/credits", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id }).populate();
  res.json({
    crew: movie.crew,
    cast: movie.cast,
  });
});
router.get("/movie/:movie_id/images", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({
    image: movie.image,
  });
});
router.get("/movie/:movie_id/keywords", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({
    keywords: movie.keywords,
  });
});
router.get("/movie/:movie_id/recomendations", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({
    recomendations: movie.recomendations,
  });
});
router.get("/movie/:movie_id/reviews", async (req, res, next) => {
  const movie_id = req.params.movie_id;
  const movie = await Movie.find({ _id: movie_id });
  res.json({
    reviews: movie.reviews,
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
router.get("/movie/latest", async (req, res, next) => {
  const movie = await Movie.find().sort({releaseDate:-1}).limit(10);
  res.json(movie);
});

//  Incomplete
router.get("/movie/now_playing",async(req,res,next)=>{
    const movie = await Movie.find()
    res.json()
})

router.get("/movie/popular",async(req,res,next)=>{
    const movie = await Movie.find().sort()
    res.json()
})
router.get("/movie/top_rated",async(req,res,next)=>{
    res.json()
})

router.get("/movie/upcoming",async(req,res,next)=>{
    res.json()
})
module.exports = router;
