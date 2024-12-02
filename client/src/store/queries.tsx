import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  I_MovieDetails,
  I_MovieListParams,
  I_MovieListRes,
} from "../interfaces/API";

const BASE_URL = "http://localhost:3001/api";

export const popularMoviesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovieList: builder.query<I_MovieListRes, I_MovieListParams>({
      query: ({ page }) => `/movies/popular?page=${page}`,
    }),

    getMovieById: builder.query<I_MovieDetails, string | number>({
      query: (id) => `/movie/${id}`,
    }),
  }),
});

export const { useGetMovieListQuery, useGetMovieByIdQuery } = popularMoviesApi;
