import Notiflix from 'notiflix';
import { useEffect, useState, Suspense } from 'react';
import { ReactComponent as ArrowIcon } from './../../images/arrow-left.svg';
import { fetchMoviesById } from 'api/moviesAPI';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import {
  MovieInfoBtn,
  CastList,
  AdditionalInfoLink,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MoviesDetails = () => {
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
          poster: data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : `https://thumbs.dreamstime.com/b/%D0%B8-%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF-%D0%B0%D0%BA%D0%B0%D1%82%D0%B0-%D0%BA%D0%B8%D0%BD%D0%BE-48746594.jpg`,
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
          <MovieInfo movie={movie} />
          <CastList>
            <li>
              <AdditionalInfoLink to="trailer">Trailer</AdditionalInfoLink>
            </li>
            <li>
              <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
            </li>
            <li>
              <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
            </li>
          </CastList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MoviesDetails;
