const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String, 
    required:true
  }
  // favorites: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Movie",
  //   },
  // ],
  // ratings: [
  //   {
  //     movie: {
  //       type: mongoose.Types.ObjectId,
  //       ref: "Movie",
  //     },
  //     rating: Number,
  //   },
  // ],
  // watchlist: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Movie",
  //   },
// }],
});

const User = mongoose.model("User",userSchema)

module.exports = User
