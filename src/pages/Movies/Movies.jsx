import axios from 'axios';
import Notiflix from 'notiflix';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_KEY } from 'api/moviesAPI';
import { MovieMain } from './Movies.styled';
import { MoviesList } from 'components/MoviesItem/MoviesItem.styled';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import SearchFormForMovies from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const fromParams = searchParams.get('query');

  useEffect(() => {
    if (fromParams === null) {
      return;
    }
    const getQueryMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${fromParams}&page=1`
        );
        const data = response.data.results;
        const filteredData = data.map(
          ({ id, title, release_date, vote_average, poster_path }) => ({
            id,
            title,
            release_date,
            rating: vote_average.toFixed(1),
            poster: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://you-anime.ru/anime-images/characters/zcPU99e4VKppfptI.jpg`,
          })
        );
        console.log(filteredData);
        setMovies(filteredData);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching movies');
      }
    };
    getQueryMovies();
  }, [fromParams, searchParams]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search?.value;

    if (!value || value.trim() === '') {
      Notiflix.Notify.failure('Enter title of movie to search');
      return;
    }

    setQuery(value.toLowerCase().trim());
    setSearchParams({ query: value.toLowerCase().trim() });
  };

  return (
    <MovieMain>
      <SearchFormForMovies
        value={query}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      {movies ? (
        <MoviesList>
          {movies.map(({ id, title, release_date, rating, poster }) => {
            return (
              <MoviesItem
                key={id}
                title={title}
                release_date={release_date}
                rating={rating}
                poster={poster}
              />
            );
          })}
        </MoviesList>
      ) : (
        <></>
      )}
    </MovieMain>
  );
};

export default Movies;
