const Movie = require("../models/movie.models");
module.exports.getAllMovies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    const movies = await Movie.find().skip(startIndex).limit(limit).exec();
    const total = await Movie.countDocuments().exec();
    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalResults: total,
    };

    res.json({
      pagination,
      data: movies,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
