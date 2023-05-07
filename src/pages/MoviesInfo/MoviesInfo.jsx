import Notiflix from 'notiflix';
import { useEffect, useState, Suspense } from 'react';
import { ReactComponent as ArrowIcon } from './../../images/arrow-left.svg';
import { fetchMoviesById } from 'api/moviesAPI';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import {
  MovieInfoBtn,
  MovieInfoTitle,
  MovieInfoBox,
  MovieInfoTd,
  CastList,
  AdditionalInfoLink,
} from './MoviesInfo.styled';

const MoviesInfo = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const respons = await fetchMoviesById(movieId);
        const data = respons.data;

        const objectMovie = {
          poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          title: data.title,
          rating: data.vote_average.toFixed(1),
          tagline: data.tagline,
          date: data.release_date,
          countries: data.production_countries
            .map(({ name }) => name)
            .join(', '),
          genres: data.genres.map(({ name }) => name).join(', '),
          overview: data.overview,
        };
        setMovie(objectMovie);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching movies');
        setMovie({});
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <main>
      <MovieInfoBtn to={backLinkHref}>
        <ArrowIcon width="25" height="25" />
        Go back to films
      </MovieInfoBtn>
      {Boolean(Object.keys(movie).length) && (
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
          <CastList>
            <li>
              <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
            </li>
            <li>
              <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
            </li>
          </CastList>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MoviesInfo;
