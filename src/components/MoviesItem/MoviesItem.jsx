import {
  Link,
  TitleMovie,
  ReleaseMovie,
  ItemBox,
  Rating,
} from 'components/MoviesItem/MoviesItem.styled';
import { useLocation } from 'react-router-dom';

const MoviesItem = ({ id, poster, title, rating, release_date }) => {
  const location = useLocation();
  return (
    <li key={id}>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <img src={poster} alt={title} />
        <ItemBox>
          <Rating>
            <b>{rating}</b>
          </Rating>
          <TitleMovie>{title}</TitleMovie>
          <ReleaseMovie>{release_date}</ReleaseMovie>
        </ItemBox>
      </Link>
    </li>
  );
};
export default MoviesItem;
