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
export default MoviesList;
