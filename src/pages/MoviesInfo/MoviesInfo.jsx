import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactComponent as ArrowIcon } from './../../images/arrow-left.svg';
import { API_KEY } from 'api/moviesAPI';
import { useParams } from 'react-router-dom';
import { MovieInfoBtn } from './MoviesInfo.styled';

const MoviesInfo = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
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
        setMovie(filteredData);
      } catch (error) {}
    };
    getMovieById();
  }, [movieId]);

  return (
    <main>
      <MovieInfoBtn type="button">
        <ArrowIcon width="25" height="25" />
        Go back to films
      </MovieInfoBtn>
      {movie ? (
        <>
          <h2>
            {' '}
            {movie.title} : {movie.release_date}
          </h2>
          <div>
            <div>
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div>
              <ul>
                <li>
                  <p></p>
                  <p></p>
                </li>
                <li>
                  <p></p>
                  <p></p>
                </li>
                <li>
                  <p></p>
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <h3>
          {' '}
          Sorry not found information from this film, try choose any film{' '}
        </h3>
      )}
    </main>
  );
};

export default MoviesInfo;
