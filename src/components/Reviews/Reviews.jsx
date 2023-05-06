// import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchReviews, normalizedReviews } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ErrorMessege } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await fetchReviews(movieId);

        setReviews(normalizedReviews(results));
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching reviews');
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsList>
      {!reviews.length ? (
        <ErrorMessege>There are no reviews yet</ErrorMessege>
      ) : (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ReviewsList>
  );
};
export default Reviews;
