import PropTypes from 'prop-types';
import {
  Link,
  TitleMovie,
  ReleaseMovie,
  ItemBox,
  Rating,
  ListOfMovies,
} from 'components/MoviesList/MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListOfMovies>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img src={movie.poster} alt={movie.title} />
            <ItemBox>
              <Rating>
                <b>{movie.rating}</b>
              </Rating>
              <TitleMovie>{movie.title}</TitleMovie>
              <ReleaseMovie>{movie.release_date}</ReleaseMovie>
            </ItemBox>
          </Link>
        </li>
      ))}
    </ListOfMovies>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default MoviesList;
