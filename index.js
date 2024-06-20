//Variables
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Models = require("./models.js");

const Movies = Models.Movie;
const Users = Models.User;

//Connect Mongo Database
mongoose.connect("mongodb://localhost:27017/myFlixDB", {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

//app use
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use(express.static("public"));

//User authorization
// let auth = require("./auth.js")(app);
// const passport = require("passport");
// require("./passport.js");

// JSON objects
// let movies = [
//   {
//     title: "Les Miserables",
//     director: {
//       name: "Bill August",
//       country: "Denmark",
//       born: 1948,
//       movies: [
//         "Les Miserables",
//         "Night Train to Lisbon",
//         "Pelle, the Conqueror",
//       ],
//     },
//     genre: {
//       name: "drama",
//       description:
//         "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//     },
//     year: 1998,
//     actors: ["Liam Neeson", "Geoffrey Rush", "Uma Therman", "Claire Danes"],
//     description:
//       "Valjean, a former criminal, has atoned for his past and now finds himself in the midst of the French Revolution, avoiding a law-obsessed policeman hell-bent on capturing him.",
//   },
//   {
//     title: "The Bourne Identity",
//     director: {
//       name: "Doug Liman",
//       country: "United States",
//       born: 1965,
//       movies: ["The Bourne Identity", "Swingers", "Mr and Mrs Smith"],
//     },
//     genre: [
//       {
//         name: "action",
//         description:
//           "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
//       },
//       {
//         name: "thriller",
//         description:
//           "A thriller is a type of mystery with a few key differences. As its name suggests, thrillers tend to be action-packed, page-turners with moments full of tension, anxiety, and fear. Without fail, they are plot-driven stories with plenty of plot twists.",
//       },
//     ],
//     year: 2002,
//     actors: ["Matt Damon", "Franka Potente", "Chris Cooper"],
//     description:
//       "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
//   },
//   {
//     title: "Nightcrawler",
//     director: {
//       name: "Dan Gilroy",
//       country: "United States",
//       born: 1959,
//       movies: ["Nightcrawler", "The Bourne Legacy"],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "thriller",
//         description:
//           "A thriller is a type of mystery with a few key differences. As its name suggests, thrillers tend to be action-packed, page-turners with moments full of tension, anxiety, and fear. Without fail, they are plot-driven stories with plenty of plot twists.",
//       },
//     ],
//     year: 2014,
//     actors: ["Jake Gyllenhaal"],
//     description:
//       "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
//   },
//   {
//     title: "Whiplash",
//     director: {
//       name: "Damien Chazelle",
//       country: "United States",
//       born: 1985,
//       movies: ["Whiplash", "La La Land", "Babylon"],
//     },
//     genre: {
//       name: "drama",
//       description:
//         "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//     },
//     year: 2014,
//     actors: ["Miles Teller", "J. K. Simmons"],
//     description:
//       "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
//   },
//   {
//     title: "Casablanca",
//     director: {
//       name: "Michael Curtiz",
//       country: "Hungary",
//       born: 1886,
//       movies: ["Casablanca", "Captain Blood", "The Sea Wolf"],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "romance",
//         description:
//           "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
//       },
//     ],
//     year: 1942,
//     actors: ["Humphrey Bogart", "Ingrid Bergman"],
//     description:
//       "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
//   },
//   {
//     title: "Adaptation",
//     director: {
//       name: "Spike Jonze",
//       country: "United States",
//       born: 1969,
//       movies: [
//         "Adaptation",
//         "Where the Wild Thing Are",
//         "Her",
//         "Being John Malkovich",
//       ],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "comedy",
//         description:
//           "Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter",
//       },
//     ],
//     year: 2002,
//     actors: ["Nicholas Cage", "Merryl Streep", "Chris Cooper"],
//     description:
//       "A lovelorn screenwriter becomes desperate as he tries and fails to adapt 'The Orchid Thief' by Susan Orlean for the screen.",
//   },
//   {
//     title: "Eternal Sunshine of the Spotless Mind",
//     director: {
//       name: "Michel Gondry",
//       country: "France",
//       born: 1963,
//       movies: [
//         "Eternal Sunshine of the Spotless Mind",
//         "Be Kind Rewind",
//         "Science of Sleep",
//       ],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "romance",
//         description:
//           "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
//       },
//       {
//         name: "sci-fi",
//         description:
//           "Science fiction (sometimes shortened to SF or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.",
//       },
//     ],
//     year: 2004,
//     actors: [
//       "Jim Carey",
//       "Kate Winslet",
//       "Elijah Wood",
//       "Kirsten Dunst",
//       "Tom Wilkinson",
//     ],
//     description:
//       "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
//   },
//   {
//     title: "Slumdog Millionaire",
//     director: {
//       name: "Danny Boyle",
//       country: "United Kingdom",
//       born: 1956,
//       movies: [
//         "Trainspotting",
//         "Slumdog Millionaire",
//         "127 Hours",
//         "Yesterday",
//       ],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "romance",
//         description:
//           "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
//       },
//     ],
//     year: 2008,
//     actors: ["Dev Patel"],
//     description:
//       "A teenager from the slums of Mumbai becomes a contestant on the show 'Kaun Banega Crorepati?' When interrogated under suspicion of cheating, he revisits his past, revealing how he had all the answers.",
//   },
//   {
//     title: "The Motorcycle Diaries",
//     director: {
//       name: "Walter Salles",
//       country: "Brazil",
//       born: 1956,
//       movies: ["Central Station", "The Motorcycle Diaries"],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "biography",
//         description: "A biography is simply the story of a real person's life",
//       },
//       {
//         name: "adventure",
//         description:
//           "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
//       },
//     ],
//     year: 2004,
//     actors: ["Gael Garcia Bernal", "Rodrigo de la Serna", "Mia Maestro"],
//     description:
//       "Ernesto Guevara de la Serna, popularly known as Che, along with his friend Alberto Granado, decides to take a road trip across South America. His experiences on the journey transform him.",
//   },
//   {
//     title: "Before Sunrise",
//     director: {
//       name: "Richard Linklater",
//       country: "United States",
//       born: 1960,
//       movies: [
//         "Before Sunrise",
//         "Before Sunset",
//         "Before Midnight",
//         "School of Rock",
//         "Dazed and Confused",
//         "Boyhood",
//       ],
//     },
//     genre: [
//       {
//         name: "drama",
//         description:
//           "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
//       },
//       {
//         name: "romance",
//         description:
//           "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
//       },
//     ],
//     year: 1995,
//     actors: ["Ethan Hawke", "Julie Delpy"],
//     description:
//       "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
//   },
//   {
//     title: "The Matrix",
//     director: {
//       name: "The Wachowskis",
//       country: "United States",
//       born: [1965, 1967],
//       movies: ["The Matrix", "The Matrix Reloaded", "The Matrix Revolution"],
//     },
//     genre: [
//       {
//         name: "action",
//         description:
//           "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
//       },
//       {
//         name: "sci-fi",
//         description:
//           "Science fiction (sometimes shortened to SF or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.",
//       },
//     ],
//     year: 1999,
//     actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//     description:
//       "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
//   },
// ];

//app get
app.get("/", (req, res) => {
  res.send(`Welcome to my movies API for a list of movie JSON objects!`);
});
app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", {
    root: public / documentation.html,
  });
});

// List all movies
app.get("/movies", async (req, res) => {
  await Movies.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

// Add a new movie to the list
// app.post("/movies", (req, res) => {
//   let newMovie = req.body;
//   if (!newMovie.name) {
//     const message = "Missing name in request body";
//     res.status(400).send(message);
//   } else {
//     newMovie.id = uuid.v4();
//     movies.push(newMovie);
//     d;
//     res.status(201).send(newMovie);
//   }
// });
// NEW:
app.post("/movies", async (req, res) => {
  await Movies.findOne({ Title: req.body.Title })
    .then((movie) => {
      if (movie) {
        return res.status(400).send(req.body.Title + " already exists.");
      } else {
        Movies.create({
          Title: req.body.Title,
          Description: req.body.Description,
          Genre: req.body.Genre,
          Director: req.body.Director,
          ImagePath: req.body.ImagePath,
          Featured: req.body.Featured,
        })
          .then((movie) => {
            res.status(201).json(movie);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Something went wrong. Error:" + error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error:" + error);
    });
});

// Delete a movie from the list
app.delete("/movies/:title", (req, res) => {
  let movie = Movies.find((movie) => {
    return Movies.Title === req.params.title;
  });
  if (movie) {
    Movies = Movies.filter((obj) => {
      return obj.Title !== req.params.title;
    });
    res.status(201).send("Movie" + req.params.Title + "was deleted.");
  }
});

// Find a specific movie by title
app.get("/movies/:title", async (req, res) => {
  await Movies.findOne({ Title: req.params.title })
    .then((title) => {
      res.status(201).json(title);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

// List of all genres
app.get("/genres", async (req, res) => {
  await Movies.aggregate([
    {
      $group: {
        _id: {
          name: "$Genre.Name",
          description: "$Genre.Description",
        },
      },
    },
  ])
    .then((genres) => {
      res.status(201).json(genres);
    })
    .catch((err) => {
      res.status(500).send("Error:" + err);
    });
});

// Find a specific genre by name
app.get("/genres/:genreName", async (req, res) => {
  await Movies.find({ "Genre.Name": req.params.genreName })
    .then((genreName) => {
      res.status(201).json(genreName);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

// List of all directors
app.get("/directors", async (req, res) => {
  try {
    let directors = await Movies.aggregate([
      {
        $group: {
          _id: "$Director.Name",
          bio: { $first: "$Director.Bio" },
          birth: { $first: "$Director.Birth" },
          death: { $first: "$Director.Death" },
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          bio: 1,
          birth: 1,
          death: 1,
        },
      },
    ]);
    res.status(201).json(directors);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

// Find a director by name
// //originoal code:
// app.get("/directors/:name", (req, res) => {
//   const { directorName } = req.params;
//   const director = movies.find((movie) => movie.director.name === directorName);
//   if (director) {
//     res.status(200).json(director);
//   } else {
//     res.status(400).send("no such director name");
//   }
// });
//new:
app.get("/directors/:directorName", async (req, res) => {
  await Movies.find({ "Director.Name": req.params.directorName })
    .then((directorName) => {
      res.status(201).json(directorName);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

//GET list of all users
app.get("/users", async (req, res) => {
  await Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

// Add new user
app.post("/users", async (req, res) => {
  await Users.findOne({ Name: req.body.Name })
    .then((user) => {
      if (user) {
        console.log(user);
        return res.status(400).send(req.body.Name + " already exists.");
      } else {
        Users.create({
          Username: req.body.Username,
          Name: req.body.Name,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
          FavoriteMovies: req.body.FavoriteMovies,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Something went wrong. Error:" + error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("This is Daniel's error:" + error);
    });
});
//JUST SO I HAVE IT SOMEWHERE:
// let newUser = req.body;
// if (!newUser.name) {
//   const message = "Missing name in request body";
//   res.status(400).send(message);
// } else {
//   newUser.id = uuid.v4();
//   res.status(201).send(newUser);
// }

//Find a user by name
app.get("/users/:name", async (req, res) => {
  await Users.findOne({ name: req.params.name })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

// Edit user info
app.put("/users/:username", async (req, res) => {
  await Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $set: {
        Name: req.body.Name,
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.email,
        Birthday: req.body.Birthday,
      },
    },
    { new: true }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
  //old code:
  // let user = users.find((user) => {
  //   return user.name === req.params.name;
  // });
  // if (user) {
  //   user.password === req.params.password;
  // } else {
  //   res.status(404).send(`User with a name of ${user.name} was not found.`);
  // }
});

//Add new movie to User's favorites:
app.post("/users/:username/movies/:movieID", async (req, res) => {
  await Users.findOneAndUpdate(
    { Username: req.params.username },
    {
      $push: { favMovies: req.params.movieID },
    },
    { new: true }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error:" + err);
    });
});

//Delete movie from User's favorites:
app.delete("/users/:username/movies/:movieID", async (req, res) => {
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { Username: req.params.username },
      {
        $pull: { favMovies: req.params.movieID },
      },
      { new: true }
    );
    if (!updatedUser) {
      res.status(400).send(req.params.movieID + " was not found");
    } else {
      res.status(200).json({
        message: req.params.movieID + " was deleted",
        updatedUser,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error: " + err);
  }
});

// Delete user by name
app.delete("/users/:name", async (req, res) => {
  await Users.findOneAndDelete({ name: req.params.name })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.name + " was not found");
      } else {
        res.status(200).send(req.params.name + " was deleted");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//app listen
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
