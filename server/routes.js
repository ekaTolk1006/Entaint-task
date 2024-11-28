const express = require("express");
const router = express.Router();

const movies = require('./controllers');

router.get("/movies/popular", movies.getListOfPopularMovies);




module.exports = router;