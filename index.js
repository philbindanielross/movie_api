const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("common"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let movies = [
  {
    title: "Les Miserables",
    director: "Bill August",
    actors: ["Liam Neeson", "Geoffrey Rush", "Uma Therman", "Claire Danes"],
  },
  {
    title: "Les Miserables",
    director: "Bill August",
    actors: ["Liam Neeson", "Geoffrey Rush", "Uma Therman", "Claire Danes"],
  },
  {
    title: "Nightcrawler",
    director: "Bill August",
    year: 2014,
    actors: ["Jake Gyllenhaal"],
  },
  {
    title: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    actors: ["Miles Teller", "J. K. Simmons"],
  },
  {
    title: "Casablanca",
    director: "Michael Curtiz",
    year: 1942,
    actors: ["Humphrey Bogart", "Ingrid Bergman"],
  },
];

app.get("/", (req, res) => {
  res.send(`Welcome to my movies API for a list of movie JSON objects!`);
});
app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", {
    root: public / documentation.html,
  });
});
app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
