import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo, normalizedCast } from 'api/moviesAPI';
import { CastList, CastInfoBox } from './Cast.styled';
import { ErrorMessege } from 'components/Reviews/Reviews.styled';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const {
          data: { cast },
        } = await fetchCastInfo(movieId);

        setCastList(normalizedCast(cast));
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching cast');
      }
    };

    getCastInfo();
  }, [movieId]);

  return (
    <CastList>
      {!castList.length ? (
        <ErrorMessege>Not found info about cast</ErrorMessege>
      ) : (
        castList.map(({ id, character, name, photo }) => {
          return (
            <li key={id}>
              <img src={photo} alt={name} />
              <CastInfoBox>
                <h3>{name}</h3>
                <p>{character}</p>
              </CastInfoBox>
            </li>
          );
        })
      )}
    </CastList>
  );
};

export default Cast;
