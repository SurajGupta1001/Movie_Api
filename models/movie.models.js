const mongoose = require("mongoose");
const genreSchema = new mongoose.Schema({
  genre: String
})
const Genre = mongoose.model("Genre",genreSchema)
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: String,
  releaseDate: Date,
  genres: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Genre"
    }
  ],
  cast: [
    {
      actor: {
        type: mongoose.Types.ObjectId,
        ref: "Person",
      },
      character: String,
    },
  ],
  crew: [
    {
        crewMember: {
            type: mongoose.Types.ObjectId,
            ref: "Person"
        },
        job: String
    }
  ],
  image: [
    {
        filePath: String,
        aspectRatio: Number,
        height: Number,
        width: Number,
        voteCount: Number,
        voteAverage: Number
    }
  ],
  keywords: [String],
  recommendations: [
   {
        type: mongoose.Types.ObjectId,
        ref: "Movie"
    }
  ],
  reviews: [
    {
        author: String,
        content: String,
        rating: Number,
        createdAt: Date
    }
  ],
  similarMovies: [
    {
        type: mongoose.Types.ObjectId,
        ref: "Movie"
    }
  ],
  status: {
    type: String,
    enum: ['NOWPLAYING','UPCOMING','NEW'],
    default: 'NEW'
  }
});

const Movie = mongoose.model("Movie",movieSchema)

module.exports = {Movie,Genre}