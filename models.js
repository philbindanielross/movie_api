const mongoose = require("mongoose");

let movieSchema = mongoose.Schema({
  MovieID: { type: String },
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Genre: {
    Name: String,
    Description: String,
  },
  Director: {
    Name: String,
    Bio: String,
  },
  Actors: [String],
  ImagePath: String,
  Featured: Boolean,
});

let userSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: Date,
  favMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

let genreSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String },
});

let directorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Bio: { type: String },
  Birth: { type: Date },
  Death: { type: Date },
});

let Movie = mongoose.model("movie", movieSchema);
let User = mongoose.model("user", userSchema);
module.exports.Movie = Movie;
module.exports.User = User;
