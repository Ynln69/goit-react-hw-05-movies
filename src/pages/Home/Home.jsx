import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from 'api/moviesAPI';
import { HomeContainer, HomeTitle } from './Home.styled';
import { MoviesList } from '../../components/MoviesItem/MoviesItem.styled';
import MoviesItem from 'components/MoviesItem/MoviesItem';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        const data = response.data.results;
        const filteredData = data.map(
          ({ id, title, release_date, vote_average, poster_path }) => ({
            id,
            title,
            release_date,
            rating: vote_average.toFixed(1),
            poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
          })
        );
        setMovies(filteredData);
      } catch (error) {
        console.log('error');
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
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
    </HomeContainer>
  );
};
export default Home;
