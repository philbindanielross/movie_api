//Variables
const express = require("express");
const morgan = require("morgan");
const app = express();

//app use
app.use(morgan("common"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use(express.static("public"));

// JSON objects
let movies = [
  {
    title: "Les Miserables",
    director: {
      name: "Bill August",
      country: "Denmark",
      born: 1948,
      movies: [
        "Les Miserables",
        "Night Train to Lisbon",
        "Pelle, the Conqueror",
      ],
    },
    genre: {
      name: "drama",
      description:
        "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
    },
    year: 1998,
    actors: ["Liam Neeson", "Geoffrey Rush", "Uma Therman", "Claire Danes"],
    description:
      "Valjean, a former criminal, has atoned for his past and now finds himself in the midst of the French Revolution, avoiding a law-obsessed policeman hell-bent on capturing him.",
  },
  {
    title: "The Bourne Identity",
    director: {
      name: "Doug Liman",
      country: "United States",
      born: 1965,
      movies: ["The Bourne Identity", "Swingers", "Mr and Mrs Smith"],
    },
    genre: [
      {
        name: "action",
        description:
          "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
      },
      {
        name: "thriller",
        description:
          "A thriller is a type of mystery with a few key differences. As its name suggests, thrillers tend to be action-packed, page-turners with moments full of tension, anxiety, and fear. Without fail, they are plot-driven stories with plenty of plot twists.",
      },
    ],
    year: 2002,
    actors: ["Matt Damon", "Franka Potente", "Chris Cooper"],
    description:
      "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
  },
  {
    title: "Nightcrawler",
    director: {
      name: "Dan Gilroy",
      country: "United States",
      born: 1959,
      movies: ["Nightcrawler", "The Bourne Legacy"],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "thriller",
        description:
          "A thriller is a type of mystery with a few key differences. As its name suggests, thrillers tend to be action-packed, page-turners with moments full of tension, anxiety, and fear. Without fail, they are plot-driven stories with plenty of plot twists.",
      },
    ],
    year: 2014,
    actors: ["Jake Gyllenhaal"],
    description:
      "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
  },
  {
    title: "Whiplash",
    director: {
      name: "Damien Chazelle",
      country: "United States",
      born: 1985,
      movies: ["Whiplash", "La La Land", "Babylon"],
    },
    genre: {
      name: "drama",
      description:
        "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
    },
    year: 2014,
    actors: ["Miles Teller", "J. K. Simmons"],
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
  },
  {
    title: "Casablanca",
    director: {
      name: "Michael Curtiz",
      country: "Hungary",
      born: 1886,
      movies: ["Casablanca", "Captain Blood", "The Sea Wolf"],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "romance",
        description:
          "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
      },
    ],
    year: 1942,
    actors: ["Humphrey Bogart", "Ingrid Bergman"],
    description:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
  },
  {
    title: "Adaptation",
    director: {
      name: "Spike Jonze",
      country: "United States",
      born: 1969,
      movies: [
        "Adaptation",
        "Where the Wild Thing Are",
        "Her",
        "Being John Malkovich",
      ],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "comedy",
        description:
          "Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter",
      },
    ],
    year: 2002,
    actors: ["Nicholas Cage", "Merryl Streep", "Chris Cooper"],
    description:
      "A lovelorn screenwriter becomes desperate as he tries and fails to adapt 'The Orchid Thief' by Susan Orlean for the screen.",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    director: {
      name: "Michel Gondry",
      country: "France",
      born: 1963,
      movies: [
        "Eternal Sunshine of the Spotless Mind",
        "Be Kind Rewind",
        "Science of Sleep",
      ],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "romance",
        description:
          "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
      },
      {
        name: "sci-fi",
        description:
          "Science fiction (sometimes shortened to SF or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.",
      },
    ],
    year: 2004,
    actors: [
      "Jim Carey",
      "Kate Winslet",
      "Elijah Wood",
      "Kirsten Dunst",
      "Tom Wilkinson",
    ],
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.",
  },
  {
    title: "Slumdog Millionaire",
    director: {
      name: "Danny Boyle",
      country: "United Kingdom",
      born: 1956,
      movies: [
        "Trainspotting",
        "Slumdog Millionaire",
        "127 Hours",
        "Yesterday",
      ],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "romance",
        description:
          "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
      },
    ],
    year: 2008,
    actors: ["Dev Patel"],
    description:
      "A teenager from the slums of Mumbai becomes a contestant on the show 'Kaun Banega Crorepati?' When interrogated under suspicion of cheating, he revisits his past, revealing how he had all the answers.",
  },
  {
    title: "The Motorcycle Diaries",
    director: {
      name: "Walter Salles",
      country: "Brazil",
      born: 1956,
      movies: ["Central Station", "The Motorcycle Diaries"],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "biography",
        description: "A biography is simply the story of a real person's life",
      },
      {
        name: "adventure",
        description:
          "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
      },
    ],
    year: 2004,
    actors: ["Gael Garcia Bernal", "Rodrigo de la Serna", "Mia Maestro"],
    description:
      "Ernesto Guevara de la Serna, popularly known as Che, along with his friend Alberto Granado, decides to take a road trip across South America. His experiences on the journey transform him.",
  },
  {
    title: "Before Sunrise",
    director: {
      name: "Richard Linklater",
      country: "United States",
      born: 1960,
      movies: [
        "Before Sunrise",
        "Before Sunset",
        "Before Midnight",
        "School of Rock",
        "Dazed and Confused",
        "Boyhood",
      ],
    },
    genre: [
      {
        name: "drama",
        description:
          "drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone",
      },
      {
        name: "romance",
        description:
          "Romance primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
      },
    ],
    year: 1995,
    actors: ["Ethan Hawke", "Julie Delpy"],
    description:
      "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
  },
  {
    title: "The Matrix",
    director: {
      name: "The Wachowskis",
      country: "United States",
      born: [1965, 1967],
      movies: ["The Matrix", "The Matrix Reloaded", "The Matrix Revolution"],
    },
    genre: [
      {
        name: "action",
        description:
          "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
      },
      {
        name: "sci-fi",
        description:
          "Science fiction (sometimes shortened to SF or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.",
      },
    ],
    year: 1999,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  },
];

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
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Add a new movie to the list
app.post("/movies", (req, res) => {
  let newMovie = req.body;
  if (!newMovie.name) {
    const message = "Missing name in request body";
    res.status(400).send(message);
  } else {
    newMovie.id = uuid.v4();
    movies.push(newMovie);
    d;
    res.status(201).send(newMovie);
  }
});

// Delete a movie from the list
app.delete("/movies/:title", (req, res) => {
  let movie = movies.find((movie) => {
    return movie.title === req.params.title;
  });
  if (movie) {
    movies = movies.filter((obj) => {
      return obj.title !== req.params.title;
    });
    res.status(201).send("Movie" + req.params.title + "was deleted.");
  }
});

// Find a specific movie by title
app.get("/movies/:title", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.title === req.params.title;
    })
  );
});

// List of all genres
app.get("/genres", (req, res) => res.json(genres));

// Find a specific genre by name
app.get("/genres/:name", (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find((movie) => movie.Genre.Name === genreName).Genre;
  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send("No such genre found");
  }
});

// List of all directors
app.get("/directors", (req, res) => res.json(directors));

// Find a specific director
app.get("/directors/:name", (req, res) => {
  const { directorName } = req.params;
  const director = movies.find(
    (movie) => movie.Director.Name === directorName
  ).Director;
  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send("no such director name");
  }
});
// Add new user
app.post("/users", (req, res) => {
  let newUser = req.body;
  if (!newUser.name) {
    const message = "Missing name in request body";
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    res.status(201).send(newUser);
  }
});

// Edit user password
app.put("/users/:name/:password", (req, res) => {
  let user = users.find((user) => {
    return user.name === req.params.name;
  });
  if (user) {
    user.password === req.params.password;
  } else {
    res.status(404).send(`User with a name of ${user.name} was not found.`);
  }
});

// Delete user
app.delete("/user/:name", (req, res) => {
  let user = users.find((user) => {
    return user.name === req.params.name;
  });
  if (user) {
    user = users.filter((obj) => {
      return obj.name !== req.params.name;
    });
    res.status(201).send("User" + req.params.name + "was deleted.");
  }
});

//app listen
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
