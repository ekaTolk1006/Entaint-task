require('dotenv').config();
const { default: axios } = require("axios");


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.API_KEY;

const getListOfPopularMovies = async (req, res) => {
    const {page} = req.params;
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`, {
            params: {
                page: page || 1,
            }
        })
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching popular movies" });
    }
}



module.exports = {
    getListOfPopularMovies
}