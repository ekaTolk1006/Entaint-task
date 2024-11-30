import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { I_MovieListParams, I_MovieListRes } from '../interfaces/API';

export const popularMoviesApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getMovieList: builder.query<I_MovieListRes, I_MovieListParams>({
            query: ({ page, region, language }) => `/movies/popular?page=${page}&region=${region}&location=${language}`,
        }),

        getMovieByName: builder.query<I_MovieListRes, any>({
            query: ({ query }) => `/movie/popular/getByName?${query}`,
        }),
    }),
})

export const { useGetMovieListQuery } = popularMoviesApi;
