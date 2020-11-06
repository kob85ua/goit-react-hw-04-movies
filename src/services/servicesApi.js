import { API_KEY, baseURL } from "./BaseURL&APIKey";

const fetchPopularMovies = (page = 1) => {
  return fetch(
    `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

const fetchMovies = (searchQuery, page = 1) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

const fetchMoviesDetails = (movieId) => {
  return fetch(
    `${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => (response.ok ? response.json() : null));
};

const fetchMovieCredits = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data.cast);
};

const fetchMovieReviews = (movieId, page = 1) => {
  return fetch(
    `${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

export default {
  fetchPopularMovies,
  fetchMovieCredits,
  fetchMovies,
  fetchMoviesDetails,
  fetchMovieReviews,
};
