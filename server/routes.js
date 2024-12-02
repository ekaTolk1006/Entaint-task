const express = require("express");
const router = express.Router();

const movies = require("./controllers");

router.get("/movies/popular", movies.getListOfPopularMovies);

router.get("/movie/:id", movies.getMovieById);

module.exports = router;
