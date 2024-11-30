const express = require("express");
const router = express.Router();

const movies = require('./controllers');

router.get("/movies/popular", movies.getListOfPopularMovies);

router.get("/movie/popular/getByName", movies.getPopularMovieByName);




module.exports = router;