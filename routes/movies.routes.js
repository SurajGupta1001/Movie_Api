const express = require("express");
const {Movie,Genre} = require("../models/movie.models");
const router = express.Router();

router.get("/movie/popular", async (req, res, next) => {
  const movie = await Movie.find().sort('-reviews.rating').limit(10);
  res.json({data:movie});
});
router.get("/movie/now_playing", async (req, res, next) => {
  const movie = await Movie.find({status: 'NOWPLAYING'});
  res.json({
    data: movie
  });
});

router.get("/movie/upcoming", async (req, res, next) => {
  const movie = await Movie.find({status: 'UPCOMING'});
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
  const movie = await Movie.find({ _id: movie_id }).populate('genre')
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

router.get("/genre/movie/list", async(req,res,next)=> {
  const genre = await Genre.find().select("-_id")
  res.json({
    data: genre
  })
})

router.get("/discover/movie", async(req,res,next)=> {
  const movie = await Movie.find({
    'reviews.rating': {$gt: req.query.rating, $lt: 20},

  })
  res.json({
    data: movie
  })
})

module.exports = router;

