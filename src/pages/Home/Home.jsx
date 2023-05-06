import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { normalizeMoviesList, fetchTrendingMovies } from 'api/moviesAPI';
import { HomeContainer, HomeTitle } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchTrendingMovies();

        setMovies(normalizeMoviesList(results));
      };

      getTrendingMovies();
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Error fetching movies');
    }
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList movies={movies} />
    </HomeContainer>
  );
};
export default Home;
