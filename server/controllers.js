const { getFullImageUrl } = require("./adapters/adapter");
require("dotenv").config();

const { default: axios } = require("axios");

const POSTER_BASE_URL = "https://media.themoviedb.org/t/p/w440_and_h660_face";
const BACKDROP_BASE_URL = "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces"
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const getListOfPopularMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      {
        params: { ...req.params },
      }
    );

    const updatedMovies = response?.data?.results?.map((movie) => ({
      ...movie,
      backdrop_path: getFullImageUrl(BACKDROP_BASE_URL, movie.backdrop_path),
      poster_path: getFullImageUrl(POSTER_BASE_URL, movie.poster_path),
    }));

    res.status(200).json({ ...response.data, results: updatedMovies });
  } catch (error) {
    res.status(500).json({ error: "Error fetching popular movies" });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const { backdrop_path, poster_path } = response?.data;
    res.status(200).json({
      ...response.data,
      backdrop_path: getFullImageUrl(BACKDROP_BASE_URL, backdrop_path),
      poster_path: getFullImageUrl(POSTER_BASE_URL, poster_path),
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching movie" });
  }
};

module.exports = {
  getListOfPopularMovies,
  getMovieById,
};
