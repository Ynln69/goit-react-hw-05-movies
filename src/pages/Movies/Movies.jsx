import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieMain } from './Movies.styled';
import { fetchQueryMovies, normalizeMoviesList } from 'api/moviesAPI';
import SearchFormForMovies from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const fromParams = searchParams.get('query');

  useEffect(() => {
    if (fromParams === null) {
      return;
    }
    try {
      const getQueryMovies = async () => {
        setIsLoading(true);
        const {
          data: { results },
        } = await fetchQueryMovies(fromParams);
        if (!results.length) {
          Notiflix.Notify.warning(
            'Oops there are no movies by this search, try another title'
          );
        }
        setMovies(normalizeMoviesList(results));
      };

      getQueryMovies();
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Error fetching movies');
    } finally {
      setIsLoading(false);
    }
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
      {isLoading && <Loader />}
      {movies ? <MoviesList movies={movies} /> : <></>}
    </MovieMain>
  );
};

export default Movies;
