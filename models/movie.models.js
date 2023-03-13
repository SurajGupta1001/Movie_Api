const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  belongs_to_collection: [{
    id: Number,
    name: String,
    poster_path: String,
    backdrop_path: String, 
  }],
  id:Number,
  budget: Number,
  genres: [
    {
      id: Number,
      name: String,
    },
  ],
  homepage: String,
  imbdId: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  production_countries: [
    {
      iso_3166_1: String,
      name: String,
    },
  ],
  production_companies: [
    {
      id: Number,
      name: String,
    },
  ],
  release_date: Date,
  revenue: Number,
  runtime: Number,
  spoken_languages: [
    {
      iso_639_1: String,
      name: String,
    },
  ],
  status: String,
  tagline: String,
  title: String,
  vote_average: Number,
  vote_count: Number,
  crew: [
    {
      credit_id: String,
      department: String,
      gender: Number,
      id: Number,
      job: String,
      profile_path: String,
      character: String,
      name:String
    },
  ],
  cast: [
    {
      cast_id: Number,
      character: String,
      credit_id: String,
      gender: Number,
      id: Number,
      name: String,
      order: Number,
      profile_path: String,
    },
  ],
  keywords: [{ id: Number, name: String }],
});

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie