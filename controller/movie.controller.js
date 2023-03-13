const Movie = require('../models/movie.models')
const { getSimilarMovies } = require('../utils/utils')
const asyncHandler = require('express-async-handler')

module.exports.getAllMovies = asyncHandler(async (req, res, next) => {
  const page = req.query?.page || 1
  const limit = (req.query?.limit <= 10 && req.query.limit) || 10

  const count = await Movie.countDocuments()
  if ((page - 1) * limit > count) {
    page = 1
    limit = 10
  }

  const movies = await Movie.find()
    .skip((page - 1) * limit)
    .limit(limit)
  res.json({
    currentPage: page,
    limit: limit,
    count,
    data: movies
  })
})

module.exports.getPopularMovies = asyncHandler(async (req, res, next) => {
  const movie = await Movie.find().sort('-vote_average').limit(10)
  res.json({ data: movie })
})

module.exports.getNowPlayingMovies = asyncHandler(async (req, res, next) => {
  const movie = await Movie.find({ status: 'Latest' })
  res.json({
    data: movie
  })
})

module.exports.getUpcomingMovies = asyncHandler(async (req, res, next) => {
  const movie = await Movie.find({ status: 'Upcoming' })
  res.json({
    data: movie
  })
})

module.exports.getLatestMovies = asyncHandler(async (req, res, next) => {
  const movie = await Movie.find().sort({ release_date: -1 }).limit(10)
  res.json(movie)
})

module.exports.getMovieDetails = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie = await Movie.find({ _id: movie_id })
  res.json({ data: movie })
})

module.exports.getMovieCredits = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie_crew_cast = await Movie.find({ _id: movie_id }).select(
    'crew cast'
  )
  res.json({ movie_crew_cast })
})

module.exports.getMovieImages = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie_image = await Movie.find({ _id: movie_id }).select('poster_path')
  res.json({
    image: movie_image
  })
})

module.exports.getMovieKeywords = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie_keywords = await Movie.find({ _id: movie_id }).select('keywords')
  res.json({
    keywords: movie_keywords
  })
})

module.exports.getMovieRecommendation = asyncHandler(async (req, res) => {
  const movieId = req.params.movie_id
  console.log(movieId)
  const movie = await Movie.findById(movieId)
  const recommendation = await getSimilarMovies(movie)
  res.json({ recommendation })
})

module.exports.getMovieReviews = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie_reviews = await Movie.find({ _id: movie_id }).select(
    'vote_count vote_average'
  )
  res.json({
    data: movie_reviews
  })
})

module.exports.getSimilarMovies = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie = await Movie.find({ _id: movie_id })
  res.json({
    simalarMovies: movie.simalarMovies
  })
})

module.exports.getMovieVideos = asyncHandler(async (req, res, next) => {
  const movie_id = req.params.movie_id
  const movie = await Movie.find({ _id: movie_id })
  res.json({
    videos: movie.videos
  })
})

module.exports.getAllGenres = asyncHandler(async (req, res, next) => {
  const genres = await Movie.distinct('genres')
  const mapped = genres.map(genre => ({ id: genre.id, name: genre.name }))
  const uniqueGenres = mapped.reduce((acc, current) => {
    const index = acc.findIndex(item => item.id === current.id)
    if (index === -1) {
      acc.push(current)
    }
    return acc
  }, [])
  res.json({
    data: uniqueGenres
  })
})

module.exports.getDiscoveredMovies = asyncHandler(async (req, res, next) => {
  const movie = await Movie.find({
    vote_average: { $gt: +req.query.rating, $lt: 10 }
  })
  res.json({
    data: movie
  })
})

module.exports.getMoviesByGenre = async (req, res) => {
  const { genre_id } = req.params
  const movies = await Movie.find({ 'genres.id': genre_id }).limit(20)
  res.json(movies)
}

module.exports.getAllKeywords = asyncHandler(async (req, res, next) => {
  const keywords = await Movie.aggregate([
    {
      $unwind: '$keywords'
    },
    {
      $group: {
        _id: '$keywords._id',
        id: { $first: '$keywords.id' },
        name: { $first: '$keywords.name' }
      }
    }
  ])

  res.json({
    data: keywords.map(keyword => ({ id: keyword.id, name: keyword.name }))
  })
})

module.exports.getMoviesByKeyword = asyncHandler(async (req, res) => {
  const { keyword_id } = req.params

  const movies = await Movie.find({ 'keywords.id': keyword_id })
  res.json(movies)
})

module.exports.getHighestGrossingMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find().sort({ revenue: -1 })
  res.json(movies)
})

module.exports.getMoviesByYear = asyncHandler(async (req, res) => {
  const { year } = req.params

  const movies = await Movie.find({
    release_date: {
      $gte: new Date(`${year}-01-01`),
      $lte: new Date(`${year}-12-31`)
    }
  })
  res.json(movies)
})
