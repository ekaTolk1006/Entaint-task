require('dotenv').config();

const { default: axios } = require("axios");

const { getFullImageUrl } = require("./adapters/adapter");

const IMAGE_BASE_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face'
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.API_KEY;

const getListOfPopularMovies = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`, {
            params: { ...req.params }
        });

        const updatedMovies = response?.data?.results?.map(movie => ({
            ...movie,
            backdrop_path: getFullImageUrl(IMAGE_BASE_URL, movie.backdrop_path),
            poster_path: getFullImageUrl(IMAGE_BASE_URL, movie.poster_path),
        }));

        res.status(200).json({ ...response.data, results: updatedMovies });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching popular movies" });
    }
}



const getPopularMovieByName = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`, {
            params: { ...req.params }
        })

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching popular movies" });
    }
}

module.exports = {
    getListOfPopularMovies,
    getPopularMovieByName
}