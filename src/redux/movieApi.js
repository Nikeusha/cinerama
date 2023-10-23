import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://advanced-movie-search.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", `${process.env.REACT_APP_MY_KEY}`);
      headers.set("X-RapidAPI-Host", "advanced-movie-search.p.rapidapi.com");
      return headers;
    },
  }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (data) => ({
        url: "/discover/movie",
        params: {
          with_genres: data.genre,
          page: data.page,
        },
      }),
    }),
    searchMovie: builder.query({
      query: (data) => ({
        url: "/search/movie",
        params: {
          query: data.value,
          page: data.page,
        },
      }),
    }),
    getMovieDetails: builder.query({
      query: (movie_id) => ({
        url: "movies/getdetails",
        params: {
          movie_id,
        },
      }),
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useSearchMovieQuery,
  useGetMovieDetailsQuery,
} = movieApi;
