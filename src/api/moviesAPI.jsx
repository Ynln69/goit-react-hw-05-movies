import axios from 'axios';
import Notiflix from 'notiflix';

export const API_KEY = 'bb95fe38b7df9f87f0ecf707b6f0bb8b';

export const getQueryMovies = async querySearch => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${querySearch}&page=1`
    );
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error fetching movies');
  }
};
