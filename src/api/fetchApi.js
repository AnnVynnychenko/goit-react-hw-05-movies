const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '0488ec67ef47df59e0dbee810a773227';

export const fetchMoviesCast = async movieId => {
  const response = await fetch(
    `${BASE_URL}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const parseResponse = await response.json();
  return parseResponse;
};

export const fetchSearchQuery = async searchQuery => {
  const response = await fetch(
    `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=en-US`
  );
  const parseResponse = await response.json();
  return parseResponse;
};

export const fetchMoviesInfo = async movieId => {
  const response = await fetch(
    `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const parseResponse = await response.json();
  return parseResponse;
};

export const fetchMoviesPopular = async () => {
  const response = await fetch(
    `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  const parseResponse = await response.json();
  return parseResponse;
};

export const fetchMoviesReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const parseResponse = await response.json();
  return parseResponse;
};
