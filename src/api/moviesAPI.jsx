import axios from 'axios';
import Notiflix from 'notiflix';

export const API_KEY = 'bb95fe38b7df9f87f0ecf707b6f0bb8b';

export const fetchTrendingMovies = async () => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error fetching movies');
  }
};

export const fetchQueryMovies = async querySearch => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${querySearch}&page=1`
    );
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error fetching movies');
  }
};

export const normalizeMoviesList = arr => {
  return arr.map(({ id, title, release_date, vote_average, poster_path }) => ({
    id,
    title,
    release_date,
    rating: vote_average.toFixed(1),
    poster: poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : `https://you-anime.ru/anime-images/characters/zcPU99e4VKppfptI.jpg`,
  }));
};

export const fetchMoviesById = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error fetching movie');
  }
};

export const fetchCastInfo = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error fetching cast');
  }
};

export const normalizedCast = arr => {
  return arr.map(({ cast_id, character, name, profile_path }) => ({
    id: cast_id,
    character,
    name,
    photo: profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : `https://you-anime.ru/anime-images/characters/WNbWU2vEyeW5hAyO.jpg`,
  }));
};

export const fetchReviews = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error fetching reviews');
  }
};

export const normalizedReviews = arr => {
  return arr.map(({ id, author, content }) => ({ id, author, content }));
};
