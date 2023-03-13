module.exports.getSimilarMovies = async function (movie) {
  const genreIds = movie.genres.map((genre) => genre.id);
  const similarMovies = await Movie.find({
    genres: { $elemMatch: { id: { $in: genreIds } } },
  })
    .sort({ popularity: -1 })
    .limit(10);
  return similarMovies;
};
