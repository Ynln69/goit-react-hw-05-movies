import PropTypes from 'prop-types';
import { MovieInfoBox, MovieInfoTitle, MovieInfoTd } from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  return (
    <>
      <MovieInfoTitle>{movie.title}</MovieInfoTitle>
      <MovieInfoBox>
        <img src={movie.poster} alt={movie.title} />
        <table>
          <tbody>
            <tr>
              <MovieInfoTd>
                <h2>Rating</h2>
              </MovieInfoTd>
              <td>{movie.rating}</td>
            </tr>
            <tr>
              <MovieInfoTd>
                <h2>Slogan</h2>
              </MovieInfoTd>
              <td>"{movie.tagline}"</td>
            </tr>
            <tr>
              <MovieInfoTd>
                <h2>Release date</h2>
              </MovieInfoTd>
              <td>{movie.date}</td>
            </tr>
            <tr>
              <MovieInfoTd>
                <h2>Country</h2>
              </MovieInfoTd>
              <td>{movie.countries}</td>
            </tr>
            <tr>
              <MovieInfoTd>
                <h2>Genre</h2>
              </MovieInfoTd>
              <td>{movie.genres}</td>
            </tr>
            <tr>
              <MovieInfoTd>
                <h2>Overview</h2>
              </MovieInfoTd>
              <td>{movie.overview}</td>
            </tr>
          </tbody>
        </table>
      </MovieInfoBox>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
